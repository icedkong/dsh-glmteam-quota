// Public package metadata only. Never inspect profiles, credentials or app boot payloads.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { basename, dirname, isAbsolute, join } from 'node:path';

const semanticVersion = /^(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/;
const validVersion = value => {
  if (typeof value !== 'string' || value.length > 256) return false;
  const match = semanticVersion.exec(value);
  return Boolean(match && (!match[1] || match[1].split('.').every(part => !/^\d+$/.test(part) || part === '0' || part[0] !== '0')));
};
const readManifest = filename => JSON.parse(readFileSync(filename, 'utf8'));
const ownPackage = readManifest(fileURLToPath(new URL('../package.json', import.meta.url)));
if (ownPackage.name !== 'dsh-glmteam-quota' || !validVersion(ownPackage.version)) throw new Error('invalid-plugin-metadata');
export const PLUGIN_VERSION = ownPackage.version;

// The launcher provides this anchor to the Host before mounting plugins. The
// DSH_INSTALL_DIR variable is a shell overlay and may be absent in the Host.
export function resolveHostDshInstallation(profileContext, fallback = process.env.DSH_INSTALL_DIR) {
  const anchor = profileContext?.installAnchor;
  if (typeof anchor === 'string' && isAbsolute(anchor) && basename(anchor) === 'package.json') return dirname(anchor);
  return typeof fallback === 'string' && isAbsolute(fallback) ? fallback : undefined;
}

// The managed installation path identifies the CLI package, not the outer
// Desktop runtime wrapper. Do not import/execute an SDK just to report a version.
export function resolveDshRuntimeVersion({ installation = process.env.DSH_INSTALL_DIR, read = readManifest } = {}) {
  if (typeof installation !== 'string' || !isAbsolute(installation)) return 'unknown';
  try {
    const manifest = read(join(installation, 'package.json'));
    return manifest?.name === '@deepseek-ai/dsh' && validVersion(manifest.version)
      ? manifest.version : 'unknown';
  } catch { return 'unknown'; }
}
