window.__ModuleLoader__.load({
  id: 'dsh-glmteam-quota',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const NS = 'dsh-glmteam-quota';
    const CODEX_NS = 'dsh-glmteam-quota-codex';
    const POPUP_ID = 'pq-provider-popup';

    // BEGIN PURE LAYOUT
    // Public Suffix List 2026-11-17_16-14-34_UTC; source: https://publicsuffix.org/list/public_suffix_list.dat
    // This data is distributed under MPL-2.0; see LICENSES/MPL-2.0.txt and src/data/public_suffix_list.dat.
    const PUBLIC_SUFFIX_RULES = Object.freeze(["!city.kawasaki.jp","!city.kitakyushu.jp","!city.kobe.jp","!city.nagoya.jp","!city.sapporo.jp","!city.sendai.jp","!city.yokohama.jp","!www.ck","*.001.test.code-builder-stg.platform.salesforce.com","*.0e.vc","*.0emm.com","*.2na.am","*.aa.crm.dev","*.ab.crm.dev","*.ac.crm.dev","*.ad.crm.dev","*.advisor.ws","*.ae.crm.dev","*.af-south-1.airflow.amazonaws.com","*.af-south-1.rds.amazonaws.com","*.af.crm.dev","*.airflow.af-south-1.on.aws","*.airflow.ap-east-1.on.aws","*.airflow.ap-northeast-1.on.aws","*.airflow.ap-northeast-2.on.aws","*.airflow.ap-northeast-3.on.aws","*.airflow.ap-south-1.on.aws","*.airflow.ap-south-2.on.aws","*.airflow.ap-southeast-1.on.aws","*.airflow.ap-southeast-2.on.aws","*.airflow.ap-southeast-3.on.aws","*.airflow.ap-southeast-4.on.aws","*.airflow.ap-southeast-5.on.aws","*.airflow.ap-southeast-7.on.aws","*.airflow.ca-central-1.on.aws","*.airflow.ca-west-1.on.aws","*.airflow.cn-north-1.on.amazonwebservices.com.cn","*.airflow.cn-northwest-1.on.amazonwebservices.com.cn","*.airflow.eu-central-1.on.aws","*.airflow.eu-central-2.on.aws","*.airflow.eu-north-1.on.aws","*.airflow.eu-south-1.on.aws","*.airflow.eu-south-2.on.aws","*.airflow.eu-west-1.on.aws","*.airflow.eu-west-2.on.aws","*.airflow.eu-west-3.on.aws","*.airflow.il-central-1.on.aws","*.airflow.me-central-1.on.aws","*.airflow.me-south-1.on.aws","*.airflow.sa-east-1.on.aws","*.airflow.us-east-1.on.aws","*.airflow.us-east-2.on.aws","*.airflow.us-west-1.on.aws","*.airflow.us-west-2.on.aws","*.aivencloud.com","*.alces.network","*.ap-east-1.airflow.amazonaws.com","*.ap-east-1.cs.amazonlightsail.com","*.ap-east-1.rds.amazonaws.com","*.ap-east-2.rds.amazonaws.com","*.ap-north-1.r.cloud.int.apple","*.ap-northeast-1.airflow.amazonaws.com","*.ap-northeast-1.cs.amazonlightsail.com","*.ap-northeast-1.rds.amazonaws.com","*.ap-northeast-2.airflow.amazonaws.com","*.ap-northeast-2.cs.amazonlightsail.com","*.ap-northeast-2.rds.amazonaws.com","*.ap-northeast-3.airflow.amazonaws.com","*.ap-northeast-3.rds.amazonaws.com","*.ap-south-1.airflow.amazonaws.com","*.ap-south-1.cs.amazonlightsail.com","*.ap-south-1.r.cloud.int.apple","*.ap-south-1.rds.amazonaws.com","*.ap-south-2.airflow.amazonaws.com","*.ap-south-2.r.cloud.int.apple","*.ap-south-2.rds.amazonaws.com","*.ap-southeast-1.airflow.amazonaws.com","*.ap-southeast-1.cs.amazonlightsail.com","*.ap-southeast-1.rds.amazonaws.com","*.ap-southeast-2.airflow.amazonaws.com","*.ap-southeast-2.cs.amazonlightsail.com","*.ap-southeast-2.rds.amazonaws.com","*.ap-southeast-3.airflow.amazonaws.com","*.ap-southeast-3.cs.amazonlightsail.com","*.ap-southeast-3.rds.amazonaws.com","*.ap-southeast-4.airflow.amazonaws.com","*.ap-southeast-4.rds.amazonaws.com","*.ap-southeast-5.airflow.amazonaws.com","*.ap-southeast-5.cs.amazonlightsail.com","*.ap-southeast-5.rds.amazonaws.com","*.ap-southeast-6.rds.amazonaws.com","*.ap-southeast-7.airflow.amazonaws.com","*.ap-southeast-7.rds.amazonaws.com","*.apps.grok.bot","*.appwrite.run","*.at.playit.plus","*.at.ply.gg","*.atlassian-3p-us-gov-mod.com","*.atlassian-3p.com","*.atlassian-isolated-3p.com","*.auiusercontent.com","*.awdev.ca","*.awsapprunner.com","*.azure.databricksapps.com","*.azurecontainer.io","*.beget.app","*.begetcdn.cloud","*.build.run","*.builder.code.com","*.builtwithrocket.new","*.bwcloud-os-instance.de","*.c.ts.net","*.ca-central-1.airflow.amazonaws.com","*.ca-central-1.cs.amazonlightsail.com","*.ca-central-1.rds.amazonaws.com","*.ca-west-1.airflow.amazonaws.com","*.ca-west-1.rds.amazonaws.com","*.ci.crm.dev","*.ck","*.cloud.int.apple","*.cloud.metacentrum.cz","*.cloudera.site","*.clusters.rdpa.co","*.cn-north-1.airflow.amazonaws.com.cn","*.cn-northwest-1.airflow.amazonaws.com.cn","*.cn.st","*.code.run","*.compute-1.amazonaws.com","*.compute.amazonaws.com","*.compute.amazonaws.com.cn","*.compute.estate","*.compute.herokuapp.com","*.cursorusercontent.com","*.customer-oci.com","*.d.crm.dev","*.database.run","*.dev-builder.code.com","*.dev.adobeaemcloud.com","*.developer.app","*.devinapps.com","*.digitaloceanspaces.com","*.dweb.link","*.elb.amazonaws.com","*.elb.amazonaws.com.cn","*.er","*.eth.limo","*.eth.link","*.eu-central-1.airflow.amazonaws.com","*.eu-central-1.cs.amazonlightsail.com","*.eu-central-1.r.cloud.int.apple","*.eu-central-1.rds.amazonaws.com","*.eu-central-2.airflow.amazonaws.com","*.eu-central-2.rds.amazonaws.com","*.eu-north-1.airflow.amazonaws.com","*.eu-north-1.cs.amazonlightsail.com","*.eu-north-1.r.cloud.int.apple","*.eu-south-1.airflow.amazonaws.com","*.eu-south-2.airflow.amazonaws.com","*.eu-south-2.cs.amazonlightsail.com","*.eu-west-1.airflow.amazonaws.com","*.eu-west-1.cs.amazonlightsail.com","*.eu-west-1.rds.amazonaws.com","*.eu-west-2.airflow.amazonaws.com","*.eu-west-2.cs.amazonlightsail.com","*.eu-west-2.rds.amazonaws.com","*.eu-west-3.airflow.amazonaws.com","*.eu-west-3.cs.amazonlightsail.com","*.eu-west-3.rds.amazonaws.com","*.ewp.live","*.ex.futurecms.at","*.ex.ortsinfo.at","*.experiments.sagemaker.aws","*.firenet.ch","*.fk","*.frusky.de","*.futurecms.at","*.gateway.dev","*.hosted.app","*.hosting.myjino.ru","*.hosting.ovh.net","*.icp.net","*.id.pub","*.il-central-1.airflow.amazonaws.com","*.il-central-1.rds.amazonaws.com","*.in.futurecms.at","*.inbrowser.dev","*.inbrowser.link","*.jm","*.kawasaki.jp","*.kin.one","*.kin.pub","*.kitakyushu.jp","*.kobe.jp","*.kunden.ortsinfo.at","*.landing.myjino.ru","*.lcl.dev","*.lclstage.dev","*.linodeobjects.com","*.localto.net","*.lutrausercontent.com","*.magentosite.cloud","*.me-central-1.airflow.amazonaws.com","*.me-central-1.rds.amazonaws.com","*.me-south-1.airflow.amazonaws.com","*.me-south-1.rds.amazonaws.com","*.metaaiusercontent.com","*.migration.run","*.mm","*.moonscale.io","*.mtls.run.app","*.mx-central-1.rds.amazonaws.com","*.nagoya.jp","*.nodebalancer.linode.com","*.nom.br","*.northflank.app","*.np","*.nxa.eu","*.oaiusercontent.com","*.oci.customer-oci.com","*.ocp.customer-oci.com","*.ocs.customer-oci.com","*.on-k3s.io","*.on-rancher.cloud","*.on-rio.io","*.oraclecloudapps.com","*.oraclegovcloudapps.com","*.oraclegovcloudapps.uk","*.otap.co","*.owo.codes","*.p.azurewebsites.net","*.pa.crm.dev","*.pages.grok.bot","*.paywhirl.com","*.pb.crm.dev","*.pc.crm.dev","*.pd.crm.dev","*.pe.crm.dev","*.pf.crm.dev","*.pg","*.platformsh.site","*.private.repost.aws","*.privatelink.snowflake.app","*.qualyhqpartner.com","*.qualyhqportal.com","*.quipelements.com","*.r.appspot.com","*.r.cloud.int.apple","*.raw.icp0.io","*.raw.icp1.io","*.rds.cn-north-1.amazonaws.com.cn","*.rds.cn-northwest-1.amazonaws.com.cn","*.replit.dev","*.run.app","*.s.brave.app","*.s.brave.dev","*.s.brave.io","*.sa-east-1.airflow.amazonaws.com","*.sa-east-1.cs.amazonlightsail.com","*.sa-east-1.rds.amazonaws.com","*.sapporo.jp","*.sch.uk","*.sendai.jp","*.services.clever-cloud.com","*.snowflake.app","*.spectrum.myjino.ru","*.srvrless.rdpa.co","*.statics.cloud","*.stg-builder.code.com","*.stg.dev","*.stgstage.dev","*.stolos.io","*.svc.firenet.ch","*.sys.qcx.io","*.teams.replit.dev","*.telebit.xyz","*.transurl.be","*.transurl.eu","*.transurl.nl","*.triton.zone","*.tst.site","*.upsun.app","*.us-central-1.r.cloud.int.apple","*.us-central-2.r.cloud.int.apple","*.us-east-1.airflow.amazonaws.com","*.us-east-1.cs.amazonlightsail.com","*.us-east-1.r.cloud.int.apple","*.us-east-1.rds.amazonaws.com","*.us-east-2.airflow.amazonaws.com","*.us-east-2.cs.amazonlightsail.com","*.us-east-2.r.cloud.int.apple","*.us-east-2.rds.amazonaws.com","*.us-gov-east-1.rds.amazonaws.com","*.us-gov-west-1.rds.amazonaws.com","*.us-northeast-1.rds.amazonaws.com","*.us-west-1.airflow.amazonaws.com","*.us-west-1.r.cloud.int.apple","*.us-west-1.rds.amazonaws.com","*.us-west-2.airflow.amazonaws.com","*.us-west-2.cs.amazonlightsail.com","*.us-west-2.r.cloud.int.apple","*.us-west-2.rds.amazonaws.com","*.us-west-3.r.cloud.int.apple","*.user.fm","*.user.localcert.dev","*.usercontent.goog","*.vps.myjino.ru","*.vultrobjects.com","*.w.crm.dev","*.wa.crm.dev","*.wadl.top","*.wb.crm.dev","*.wc.crm.dev","*.wd.crm.dev","*.we.crm.dev","*.webhare.dev","*.webpaas.ovh.net","*.wf.crm.dev","*.xenonconnect.de","*.xmit.co","*.yokohama.jp","*.zerops.app","*.zerops.zone","*.ztna-dingtalk.com","0.bg","0am.jp","0g0.jp","0j0.jp","0t0.jp","1.azurestaticapps.net","1.bg","123hjemmeside.dk","123hjemmeside.no","123homepage.it","123kotisivu.fi","123minsida.se","123miweb.es","123paginaweb.pt","123siteweb.fr","123webseite.at","123webseite.de","123website.be","123website.ch","123website.lu","123website.nl","12hp.at","12hp.ch","12hp.de","1337.pictures","16-b.it","180r.com","1cooldns.com","1kapp.com","2-d.jp","2.azurestaticapps.net","2.bg","2000.hu","2038.io","2ix.at","2ix.ch","2ix.de","3.azurestaticapps.net","3.bg","32-b.it","3utilities.com","4.at","4.azurestaticapps.net","4.bg","4lima.at","4lima.ch","4lima.de","4u.com","5.azurestaticapps.net","5.bg","5g.in","6.azurestaticapps.net","6.bg","611.to","64-b.it","6g.in","7.azurestaticapps.net","7.bg","8.bg","9.bg","9guacu.br","a.bg","a.prod.fastly.net","a.se","a.ssl.fastly.net","a2hosted.com","aa.no","aaa","aaa.pro","aarborte.no","aarp","ab.ca","abashiri.hokkaido.jp","abb","abbott","abbvie","abc","abc.br","abeno.osaka.jp","aberdeen.wa.us","abg.ec","abiko.chiba.jp","abira.hokkaido.jp","abkhazia.su","able","abo.pa","abogado","abr.it","abrdns.com","abruzzo.it","abu.yamaguchi.jp","abudhabi","abyme.dev","ac","ac.ae","ac.at","ac.bd","ac.be","ac.bw","ac.ci","ac.cn","ac.cr","ac.cy","ac.eg","ac.fj","ac.gn","ac.gov.br","ac.id","ac.il","ac.im","ac.in","ac.ir","ac.jp","ac.ke","ac.kr","ac.leg.br","ac.lk","ac.ls","ac.ma","ac.me","ac.ml","ac.mu","ac.mw","ac.mz","ac.ni","ac.nz","ac.pa","ac.pk","ac.pr","ac.rs","ac.ru","ac.rw","ac.se","ac.sz","ac.th","ac.tz","ac.ug","ac.uk","ac.vn","ac.za","ac.zm","ac.zw","aca.pro","academia.bo","academy","accenture","accesscam.org","accident-investigation.aero","accident-prevention.aero","accountant","accountants","acct.pro","achi.nagano.jp","aco","act.au","act.edu.au","activetrail.biz","actor","ad","ad.jp","ad.vn","adachi.tokyo.jp","adimo.co.uk","adm.br","adm.ec","adobeaemcloud.com","adobeaemcloud.net","adobeio-static.net","adobeioruntime.net","ads","adult","adult.ht","adv.br","adv.mz","adygeya.ru","adygeya.su","ae","ae.kg","ae.org","aeg","aejrie.no","aem.live","aem.network","aem.page","aem.reviews","aero","aero.in","aero.mv","aerobatic.aero","aeroclub.aero","aerodrome.aero","aeroport.fr","aetna","af","af-south-1.elasticbeanstalk.com","affinitylottery.org.uk","afjord.no","afl","africa","africa.bj","africa.com","ag","ag.it","aga.niigata.jp","agakhan","agano.niigata.jp","agdenes.no","agematsu.nagano.jp","agency","agents.aero","agilevibes.app","agr.br","agrar.hu","agri.jo","agric.za","agrigento.it","agro.bj","agro.bo","agro.pl","agron.ec","aguni.okinawa.jp","ah.cn","ah.no","ai","ai.bd","ai.id","ai.in","ai.jo","ai.kr","ai.studio","ai.vn","aibetsu.hokkaido.jp","aichi.jp","aid.pl","aig","aikawa.kanagawa.jp","ainan.ehime.jp","aioi.hyogo.jp","aip.ee","air-surveillance.aero","air-traffic-control.aero","airbus","aircraft.aero","airforce","airline.aero","airport.aero","airtel","airtraffic.aero","aisai.aichi.jp","aisho.shiga.jp","aiven.app","aizubange.fukushima.jp","aizumi.tokushima.jp","aizumisato.fukushima.jp","aizuwakamatsu.fukushima.jp","aju.br","ak.us","akabira.hokkaido.jp","akadns.net","akagi.shimane.jp","akaiwa.okayama.jp","akamai-staging.net","akamai.net","akamaiedge-staging.net","akamaiedge.net","akamaihd-staging.net","akamaihd.net","akamaiorigin-staging.net","akamaiorigin.net","akamaized-staging.net","akamaized.net","akashi.hyogo.jp","akdn","aki.kochi.jp","akiruno.tokyo.jp","akishima.tokyo.jp","akita.akita.jp","akita.jp","akkeshi.hokkaido.jp","aknoluokta.no","ako.hyogo.jp","akrehamn.no","aktyubinsk.su","akune.kagoshima.jp","al","al.eu.org","al.gov.br","al.it","al.leg.br","al.no","al.us","alaheadju.no","aland.fi","alessandria.it","alesund.no","algard.no","alibaba","alibabacloudcs.com","alipay","allfinanz","allstate","ally","alp1.ae.flow.ch","alsace","alstahaug.no","alstom","alt.na","alt.za","alta.no","altervista.org","alto-adige.it","altoadige.it","alumni.in","alvdal.no","alwaysdata.net","am","am.br","am.gov.br","am.in","am.leg.br","ama.aichi.jp","ama.shimane.jp","amagasaki.hyogo.jp","amakusa.kumamoto.jp","amami.kagoshima.jp","amazon","amazonlightsail.com","ambulance.aero","americanexpress","americanfamily","amex","amfam","ami.ibaraki.jp","amica","amli.no","amot.no","amplifyapp.com","ams.scw.site","amsterdam","an.it","analytics","analytics-gateway.ap-northeast-1.amazonaws.com","analytics-gateway.ap-northeast-2.amazonaws.com","analytics-gateway.ap-south-1.amazonaws.com","analytics-gateway.ap-southeast-1.amazonaws.com","analytics-gateway.ap-southeast-2.amazonaws.com","analytics-gateway.eu-central-1.amazonaws.com","analytics-gateway.eu-west-1.amazonaws.com","analytics-gateway.us-east-1.amazonaws.com","analytics-gateway.us-east-2.amazonaws.com","analytics-gateway.us-west-2.amazonaws.com","anamizu.ishikawa.jp","anan.nagano.jp","anan.tokushima.jp","anani.br","ancona.it","andasuolo.no","andebu.no","ando.nara.jp","andoy.no","andria-barletta-trani.it","andria-trani-barletta.it","andriabarlettatrani.it","andriatranibarletta.it","android","angiang.vn","angry.jp","anjo.aichi.jp","ann-arbor.mi.us","annaka.gunma.jp","anpachi.gifu.jp","anquan","antagonist.cloud","anz","ao","ao.it","aogaki.hyogo.jp","aogashima.tokyo.jp","aoki.nagano.jp","aol","aomori.aomori.jp","aomori.jp","aosta-valley.it","aosta.it","aostavalley.it","aoste.it","ap-east-1.elasticbeanstalk.com","ap-northeast-1.elasticbeanstalk.com","ap-northeast-2.elasticbeanstalk.com","ap-northeast-3.elasticbeanstalk.com","ap-south-1.elasticbeanstalk.com","ap-south-2.elasticbeanstalk.com","ap-southeast-1.elasticbeanstalk.com","ap-southeast-2.elasticbeanstalk.com","ap-southeast-3.elasticbeanstalk.com","ap-southeast-4.elasticbeanstalk.com","ap-southeast-5.elasticbeanstalk.com","ap-southeast-6.elasticbeanstalk.com","ap-southeast-7.elasticbeanstalk.com","ap.gov.br","ap.gov.pl","ap.it","ap.leg.br","ap.ngrok.io","ap.vn","aparecida.br","apartments","api.br","api.gov.uk","api.lp.dev","apigee.io","app","app-ionos.space","app.amba.host","app.br","app.os.fedoraproject.org","app.os.stg.fedoraproject.org","app.render.com","appchizi.com","appengine.flow.ch","apple","applinzi.com","apps-1and1.com","apps-1and1.net","apps.devs.ai","apps.fbsbx.com","apps.lair.io","appspacehosted.com","appspaceusercontent.com","appspot.com","appudo.net","appwrite.global","appwrite.network","aq","aq.it","aquarelle","ar","ar.it","ar.us","arab","arai.shizuoka.jp","arakawa.saitama.jp","arakawa.tokyo.jp","aramco","arao.kumamoto.jp","archi","architectes.bj","ardal.no","aremark.no","arendal.no","arezzo.it","ariake.saga.jp","arida.wakayama.jp","aridagawa.wakayama.jp","arita.saga.jp","arkhangelsk.su","armenia.su","army","arna.no","arpa","arq.br","arqt.ec","art","art.br","art.do","art.dz","art.ec","art.ht","art.ml","art.pl","art.sn","arte","arte.bo","arts.nf","arts.ro","arts.ve","arvanedge.ir","arvo.network","as","as.sh.cn","as.us","asago.hyogo.jp","asahi.chiba.jp","asahi.ibaraki.jp","asahi.mie.jp","asahi.nagano.jp","asahi.toyama.jp","asahi.yamagata.jp","asahikawa.hokkaido.jp","asaka.saitama.jp","asakawa.fukushima.jp","asakuchi.okayama.jp","asaminami.hiroshima.jp","ascoli-piceno.it","ascolipiceno.it","asda","aseral.no","ashgabad.su","ashibetsu.hokkaido.jp","ashikaga.tochigi.jp","ashiya.fukuoka.jp","ashiya.hyogo.jp","ashoro.hokkaido.jp","asia","asker.no","askim.no","askoy.no","askvoll.no","asn.au","asn.lv","asnes.no","aso.kumamoto.jp","ass.km","assabu.hokkaido.jp","assessments.cx","assn.lk","asso.ci","asso.dz","asso.eu.org","asso.fr","asso.gp","asso.ht","asso.km","asso.mc","asso.ml","asso.nc","asso.re","associates","association.aero","assur.bj","asti.it","asuke.aichi.jp","at","at-band-camp.net","at.emf.camp","at.eu.org","at.it","atami.shizuoka.jp","ath.cx","athleta","atl.jelastic.vps-host.net","atm.pl","atmeta.com","ato.br","atsugi.kanagawa.jp","atsuma.hokkaido.jp","attorney","au","au.eu.org","au.ngrok.io","auction","audi","audible","audio","audnedal.no","augustow.pl","aukra.no","aure.no","aurland.no","aurskog-holand.no","aus.basketball","auspost","austevoll.no","australiacentral-01.azurewebsites.net","australiacentral2-01.azurewebsites.net","australiaeast-01.azurewebsites.net","australiasoutheast-01.azurewebsites.net","austrheim.no","austriaeast-01.azurewebsites.net","auth-fips.us-east-1.amazoncognito.com","auth-fips.us-east-2.amazoncognito.com","auth-fips.us-gov-east-1.amazoncognito.com","auth-fips.us-gov-west-1.amazoncognito.com","auth-fips.us-west-1.amazoncognito.com","auth-fips.us-west-2.amazoncognito.com","auth.af-south-1.amazoncognito.com","auth.ap-east-1.amazoncognito.com","auth.ap-east-2.amazoncognito.com","auth.ap-northeast-1.amazoncognito.com","auth.ap-northeast-2.amazoncognito.com","auth.ap-northeast-3.amazoncognito.com","auth.ap-south-1.amazoncognito.com","auth.ap-south-2.amazoncognito.com","auth.ap-southeast-1.amazoncognito.com","auth.ap-southeast-2.amazoncognito.com","auth.ap-southeast-3.amazoncognito.com","auth.ap-southeast-4.amazoncognito.com","auth.ap-southeast-5.amazoncognito.com","auth.ap-southeast-6.amazoncognito.com","auth.ap-southeast-7.amazoncognito.com","auth.ca-central-1.amazoncognito.com","auth.ca-west-1.amazoncognito.com","auth.cognito-idp.eusc-de-east-1.on.amazonwebservices.eu","auth.eu-central-1.amazoncognito.com","auth.eu-central-2.amazoncognito.com","auth.eu-north-1.amazoncognito.com","auth.eu-south-1.amazoncognito.com","auth.eu-south-2.amazoncognito.com","auth.eu-west-1.amazoncognito.com","auth.eu-west-2.amazoncognito.com","auth.eu-west-3.amazoncognito.com","auth.il-central-1.amazoncognito.com","auth.lovable.app","auth.me-central-1.amazoncognito.com","auth.me-south-1.amazoncognito.com","auth.mx-central-1.amazoncognito.com","auth.sa-east-1.amazoncognito.com","auth.us-east-1.amazoncognito.com","auth.us-east-2.amazoncognito.com","auth.us-west-1.amazoncognito.com","auth.us-west-2.amazoncognito.com","authgear-staging.com","authgearapps.com","author","author.aero","auto","auto.pl","autos","av.it","av.tr","avellino.it","averoy.no","avocat.fr","avocat.pro","avocats.bj","avoues.fr","aw","awaji.hyogo.jp","aws","aws-gov.databricksapps.us","aws.databricksapps.com","awsapps.com","awsglobalaccelerator.com","ax","axa","aya.miyazaki.jp","ayabe.kyoto.jp","ayagawa.kagawa.jp","ayase.kanagawa.jp","az","az.us","azerbaijan.su","azimuth.network","azumino.nagano.jp","azure","azure-api.net","azure-api.us","azure-mobile.net","azureedge.net","azurefd.net","azurestaticapps.net","azurewebsites.net","azurewebsites.us","b-data.io","b.bg","b.br","b.se","b.ssl.fastly.net","ba","ba.gov.br","ba.it","ba.leg.br","babia-gora.pl","baby","babyblue.jp","babymilk.jp","bacgiang.vn","backan.vn","backdrop.jp","baclieu.vn","bacninh.vn","badaddja.no","bahcavuotna.no","bahccavuotna.no","baidar.no","baidu","bainbridge-isl.wa.us","bajddar.no","balashov.su","balat.no","balena-devices.com","balestrand.no","ballangen.no","ballooning.aero","balsan-sudtirol.it","balsan-suedtirol.it","balsan.it","balsfjord.no","bambina.jp","bamble.no","banamex","band","bandai.fukushima.jp","bando.ibaraki.jp","bank","bank.in","bar","bar.ec","bar.pro","barcelona","barclaycard","barclays","bardu.no","barefoot","bargains","bari.it","baria-vungtau.vn","barletta-trani-andria.it","barlettatraniandria.it","barrel-of-knowledge.info","barrell-of-knowledge.info","barsy.bg","barsy.ca","barsy.club","barsy.co.uk","barsy.de","barsy.dev","barsy.eu","barsy.gr","barsy.in","barsy.info","barsy.io","barsy.me","barsy.menu","barsy.mobi","barsy.net","barsy.online","barsy.org","barsy.pro","barsy.pub","barsy.ro","barsy.rs","barsy.shop","barsy.site","barsy.store","barsy.support","barsy.uk","barsycenter.com","barsyonline.co.uk","barsyonline.com","barsyonline.menu","barsyonline.shop","barueri.br","barum.no","bas.it","base.ec","base.shop","base44-sandbox.com","base44.app","baseball","bashkiria.ru","bashkiria.su","basicserver.io","basilicata.it","basketball","bato.tochigi.jp","batsfjord.no","bauhaus","bayern","bb","bbc","bbs.tr","bbt","bbva","bc.ca","bcg","bcn","bd","bd.se","be","be.eu.org","beagleboard.io","bearalvahki.no","bearblog.dev","beardu.no","bearly.sh","beats","beauty","bedzin.pl","beep.pl","beer","beiarn.no","bel.tr","belem.br","belgiumcentral-01.azurewebsites.net","bellevue.wa.us","belluno.it","benevento.it","bentre.vn","beppu.oita.jp","berg.no","bergamo.it","bergen.no","berlevag.no","berlin","beskidy.pl","best","bestbuy","bet","bet.ar","bet.br","beta.wmcloud.org","better-than.tv","bf","bg","bg.eu.org","bg.it","bh","bharti","bhz.br","bi","bi.it","bialowieza.pl","bialystok.pl","bib.br","bib.ve","bibai.hokkaido.jp","bible","bid","biei.hokkaido.jp","bielawa.pl","biella.it","bielsko.pl","bieszczady.pl","bievat.no","bifuka.hokkaido.jp","bihar.in","bihoro.hokkaido.jp","bike","bindal.no","bing","bingo","binhdinh.vn","binhduong.vn","binhphuoc.vn","binhthuan.vn","bio","bio.br","bir.ru","biratori.hokkaido.jp","birkenes.no","bitbucket.io","bitter.jp","biz","biz.az","biz.bb","biz.cy","biz.dk","biz.et","biz.fj","biz.gh","biz.id","biz.in","biz.ki","biz.ls","biz.mv","biz.mw","biz.my","biz.ng","biz.ni","biz.nr","biz.pk","biz.pl","biz.pr","biz.ss","biz.tj","biz.tr","biz.tt","biz.ua","biz.vn","biz.wf","biz.zm","bizen.okayama.jp","bj","bj.cn","bjerkreim.no","bjugn.no","bl.it","black","blackbaudcdn.net","blackfriday","blob.core.usgovcloudapi.net","blob.core.windows.net","blockbuster","blog","blog.bo","blog.br","blogdns.com","blogdns.net","blogdns.org","blogsite.org","blogspot.com","blogsyte.com","bloomberg","blue","bluebite.io","blush.jp","bm","bmd.br","bmoattachments.org","bms","bmw","bn","bn.it","bnpparibas","bnr.la","bo","bo.it","bo.nordland.no","bo.telemark.no","boats","boavista.br","bodo.no","boehringer","bofa","bokn.no","boldlygoingnowhere.org","boleslawiec.pl","bolivia.bo","bologna.it","bolt.host","bolt.hu","bolzano-altoadige.it","bolzano.it","bom","bomlo.no","bona.jp","bond","boo","boo.jp","book","book.online","booking","boomla.net","bosch","bostik","boston","bot","botda.sh","botdash.app","botdash.dev","botdash.gg","botdash.net","botdash.xyz","bounceme.net","boutique","boutir.com","box","box.ca","boxfuse.io","boy.jp","boyfriend.jp","bozen-sudtirol.it","bozen-suedtirol.it","bozen.it","bplaced.com","bplaced.de","bplaced.net","br","br.com","br.it","bradesco","brand.se","brasilia.me","brave.app","brave.dev","brave.io","brazilsouth-01.azurewebsites.net","brazilsoutheast-01.azurewebsites.net","bremanger.no","bremerton.wa.us","brescia.it","bridgestone","brindisi.it","broadway","broke-it.net","broker","broker.aero","bronnoy.no","bronnoysund.no","brother","browsersafetymark.io","brumunddal.no","brussels","bryansk.su","bryne.no","bs","bs.it","bsb.br","bss.design","bt","bt.it","bu.no","bubbleapps.io","budejju.no","build","builders","builtwithdark.com","bukhara.su","bulsan-sudtirol.it","bulsan-suedtirol.it","bulsan.it","bumbleshrimp.com","bungoono.oita.jp","bungotakada.oita.jp","bunkyo.tokyo.jp","busan.kr","business","business.in","but.jp","buy","buyshop.jp","buyshouses.net","buzen.fukuoka.jp","buzz","bv","bw","by","bydgoszcz.pl","byen.site","bygland.no","bykle.no","bytom.pl","bz","bz.it","bzh","c.bg","c.cdn77.org","c.se","c01.kr","c66.me","ca","ca-central-1.elasticbeanstalk.com","ca-west-1.elasticbeanstalk.com","ca.eu.org","ca.in","ca.it","ca.reclaim.cloud","ca.us","caa.aero","cab","cable-modem.org","cafe","caffeine.site","caffeine.xyz","cafjs.com","cagliari.it","cahcesuolo.no","cal","cal.it","calabria.it","calculators.cx","call","caltanissetta.it","calvinklein","cam","cam.it","camau.vn","camdvr.org","camera","camp","campaign.gov.uk","campania.it","campidano-medio.it","campidanomedio.it","campinagrande.br","campinas.br","campobasso.it","can.re","canadacentral-01.azurewebsites.net","canadaeast-01.azurewebsites.net","candypop.jp","canon","cantho.vn","canva-apps.cn","canva-apps.com","canva-code.cn","canva-hosted-embed.com","canva.link","canva.run","canvacode.com","caobang.vn","capetown","capital","capitalone","capoo.jp","car","caracal.mythic-beasts.com","caravan","carbonia-iglesias.it","carboniaiglesias.it","cards","care","career","careers","cargo.aero","carrara-massa.it","carraramassa.it","carrd.co","cars","casa","casacam.net","case","caserta.it","cash","casino","casino.hu","cat","catania.it","catanzaro.it","catering","catering.aero","catfood.jp","catholic","catholic.edu.au","caxias.br","cb.it","cba","cbg.ru","cbn","cbre","cc","cc.ak.us","cc.al.us","cc.ar.us","cc.as.us","cc.az.us","cc.ca.us","cc.cd","cc.co.us","cc.ct.us","cc.dc.us","cc.de.us","cc.fl.us","cc.ga.us","cc.gu.us","cc.hi.us","cc.ia.us","cc.id.us","cc.il.us","cc.in.us","cc.ks.us","cc.ky.us","cc.la.us","cc.ma.us","cc.md.us","cc.me.us","cc.mi.us","cc.mn.us","cc.mo.us","cc.ms.us","cc.mt.us","cc.nc.us","cc.ne.us","cc.nh.us","cc.nj.us","cc.nm.us","cc.nv.us","cc.ny.us","cc.oh.us","cc.ok.us","cc.or.us","cc.pa.us","cc.pr.us","cc.ri.us","cc.sc.us","cc.sd.us","cc.tn.us","cc.tx.us","cc.ua","cc.ut.us","cc.va.us","cc.vi.us","cc.vt.us","cc.wa.us","cc.wi.us","cc.wv.us","cc.wy.us","cci.fr","ccwu.cc","cd","cd.eu.org","cdn-edges.net","cdn.amba.host","cdn.bubble.io","cdn.cloudflare.net","cdn.cloudflareanycast.net","cdn.cloudflarecn.net","cdn.cloudflareglobal.net","cdn.prod.atlassian-dev.net","cdn77-ssl.net","cdn77-storage.com","ce.gov.br","ce.it","ce.leg.br","cechire.com","ceero.site","center","centralia.wa.us","centralindia-01.azurewebsites.net","centralus-01.azurewebsites.net","centralus.azurestaticapps.net","centraluseuap-01.azurewebsites.net","ceo","cern","certification.aero","cesena-forli.it","cesenaforli.it","cf","cf-ipfs.com","cfa","cfd","cfolks.pl","cg","ch","ch.eu.org","ch.it","ch.trendhosting.cloud","chambagri.fr","championship.aero","chanel","channel","channelsdvr.net","charity","charter.aero","chase","chat","chatgpt.site","cheap","cheap.jp","chef.ec","chehalis.wa.us","cherkassy.ua","cherkasy.ua","chernigov.ua","chernihiv.ua","chernivtsi.ua","chernovtsy.ua","chiba.jp","chicappa.jp","chichibu.saitama.jp","chieti.it","chigasaki.kanagawa.jp","chihayaakasaka.osaka.jp","chijiwa.nagasaki.jp","chikugo.fukuoka.jp","chikuho.fukuoka.jp","chikuhoku.nagano.jp","chikujo.fukuoka.jp","chikuma.nagano.jp","chikusei.ibaraki.jp","chikushino.fukuoka.jp","chikuzen.fukuoka.jp","chilecentral-01.azurewebsites.net","chillout.jp","chimkent.su","chino.nagano.jp","chintai","chippubetsu.hokkaido.jp","chips.jp","chirurgiens-dentistes-en-france.fr","chirurgiens-dentistes.fr","chiryu.aichi.jp","chita.aichi.jp","chitose.hokkaido.jp","chiyoda.gunma.jp","chiyoda.tokyo.jp","chizu.tottori.jp","chofu.tokyo.jp","chonan.chiba.jp","chosei.chiba.jp","choshi.chiba.jp","chowder.jp","choyo.kumamoto.jp","christmas","chrome","chtr.k12.ma.us","chu.jp","chungbuk.kr","chungnam.kr","chuo.chiba.jp","chuo.fukuoka.jp","chuo.osaka.jp","chuo.tokyo.jp","chuo.yamanashi.jp","church","ci","ci.it","ciao.jp","ciencia.bo","cieszyn.pl","cim.br","cipriani","circle","cisco","ciscofreak.com","cistron.nl","citadel","citi","citic","city","city.hu","civilaviation.aero","ck.ua","cl","cl.it","claims","clan.rip","claude.app","claudeusercontent.com","cleaning","clerk.app","clerkstage.app","cleverapps.cc","cleverapps.io","cleverapps.tech","click","clickrising.net","client.scrypted.io","clinic","clinique","clothing","cloud","cloud-ip.biz","cloud-ip.cc","cloud.fedoraproject.org","cloud.goog","cloud.interhostsolutions.be","cloud.modelence.app","cloud.nospamproxy.com","cloud.run","cloud66.ws","cloudaccess.host","cloudaccess.net","cloudapp.net","cloudbeesusercontent.io","cloudflare-ipfs.com","cloudflare.app","cloudflare.net","cloudfront.net","cloudfunctions.net","cloudjiffy.net","cloudns.asia","cloudns.be","cloudns.biz","cloudns.cc","cloudns.ch","cloudns.cl","cloudns.club","cloudns.cx","cloudns.eu","cloudns.in","cloudns.info","cloudns.nz","cloudns.org","cloudns.ph","cloudns.pro","cloudns.pw","cloudns.us","cloudsite.builders","cloudycluster.net","cloudzyro.app","club","club.aero","club.tw","clubmed","cm","cn","cn-north-1.eb.amazonaws.com.cn","cn-northwest-1.eb.amazonaws.com.cn","cn.com","cn.eu.org","cn.in","cn.it","cn.ua","cng.br","cnpy.gdn","cnt.br","co","co.ae","co.ag","co.am","co.ao","co.at","co.az","co.bb","co.bd","co.bi","co.biz.ng","co.bj","co.bn","co.business","co.bw","co.bz","co.ca","co.ci","co.cl","co.cm","co.com","co.cr","co.cz","co.de","co.dk","co.dm","co.education","co.events","co.financial","co.fo","co.gg","co.gl","co.gy","co.hu","co.id","co.il","co.im","co.in","co.io","co.ir","co.it","co.je","co.jp","co.ke","co.kr","co.krd","co.lc","co.ls","co.ma","co.me","co.mg","co.mu","co.mw","co.mz","co.na","co.network","co.ni","co.nl","co.no","co.nz","co.om","co.pl","co.place","co.pn","co.ro","co.rs","co.rw","co.scot","co.site","co.ss","co.st","co.sz","co.technology","co.th","co.tj","co.tm","co.tt","co.tz","co.ua","co.ug","co.uk","co.us","co.uz","co.ve","co.vi","co.za","co.zm","co.zw","coach","cockpit.fr-par.scw.cloud","cockpit.nl-ams.scw.cloud","cockpit.pl-waw.scw.cloud","cocotte.jp","codeberg.page","codepen.app","codepen.dev","codes","codespot.com","coffee","cog.mi.us","col.ng","college","collegefan.org","cologne","com","com.ac","com.af","com.ag","com.ai","com.al","com.am","com.ar","com.au","com.aw","com.az","com.ba","com.bb","com.bd","com.bh","com.bi","com.bj","com.bm","com.bn","com.bo","com.br","com.bs","com.bt","com.by","com.bz","com.ci","com.cm","com.cn","com.co","com.cu","com.cv","com.cw","com.cy","com.de","com.dm","com.do","com.dz","com.ec","com.ee","com.eg","com.es","com.et","com.fj","com.fm","com.fo","com.fr","com.ge","com.gh","com.gi","com.gl","com.gn","com.gp","com.gr","com.gt","com.gu","com.gy","com.hk","com.hn","com.hr","com.ht","com.im","com.in","com.io","com.iq","com.jo","com.kg","com.kh","com.ki","com.km","com.kp","com.kw","com.ky","com.kz","com.la","com.lb","com.lc","com.lk","com.lr","com.lv","com.ly","com.mg","com.mk","com.ml","com.mo","com.ms","com.mt","com.mu","com.mv","com.mw","com.mx","com.my","com.na","com.nf","com.ng","com.ni","com.nr","com.om","com.pa","com.pe","com.pf","com.ph","com.pk","com.pl","com.pr","com.ps","com.pt","com.py","com.qa","com.re","com.ro","com.ru","com.sa","com.sb","com.sc","com.sd","com.se","com.sg","com.sh","com.sl","com.sn","com.so","com.ss","com.st","com.sv","com.sy","com.tj","com.tm","com.tn","com.to","com.tr","com.tt","com.tw","com.ua","com.ug","com.uy","com.uz","com.vc","com.ve","com.vi","com.vn","com.vu","com.ws","com.ye","com.zm","commbank","commune.am","community","community-pro.de","community-pro.net","como.it","company","compare","computer","comsec","condos","conf.au","conf.lv","conference.aero","conn.uk","consent-portal.bedrock-agentcore.ap-northeast-1.amazonaws.com","consent-portal.bedrock-agentcore.ap-northeast-2.amazonaws.com","consent-portal.bedrock-agentcore.ap-south-1.amazonaws.com","consent-portal.bedrock-agentcore.ap-south-2.amazonaws.com","consent-portal.bedrock-agentcore.ap-southeast-1.amazonaws.com","consent-portal.bedrock-agentcore.ap-southeast-2.amazonaws.com","consent-portal.bedrock-agentcore.ap-southeast-5.amazonaws.com","consent-portal.bedrock-agentcore.ap-southeast-7.amazonaws.com","consent-portal.bedrock-agentcore.ca-central-1.amazonaws.com","consent-portal.bedrock-agentcore.eu-central-1.amazonaws.com","consent-portal.bedrock-agentcore.eu-north-1.amazonaws.com","consent-portal.bedrock-agentcore.eu-south-1.amazonaws.com","consent-portal.bedrock-agentcore.eu-south-2.amazonaws.com","consent-portal.bedrock-agentcore.eu-west-1.amazonaws.com","consent-portal.bedrock-agentcore.eu-west-2.amazonaws.com","consent-portal.bedrock-agentcore.eu-west-3.amazonaws.com","consent-portal.bedrock-agentcore.sa-east-1.amazonaws.com","consent-portal.bedrock-agentcore.us-east-1.amazonaws.com","consent-portal.bedrock-agentcore.us-east-2.amazonaws.com","consent-portal.bedrock-agentcore.us-gov-west-1.amazonaws.com","consent-portal.bedrock-agentcore.us-west-1.amazonaws.com","consent-portal.bedrock-agentcore.us-west-2.amazonaws.com","construction","consulado.st","consultant.aero","consulting","consulting.aero","cont.ec","contact","contagem.br","contractors","control.aero","convex.app","convex.cloud","convex.site","cooking","cool","coolblog.jp","coop","coop.ar","coop.br","coop.ht","coop.in","coop.km","coop.mv","coop.mw","coop.py","coop.rw","cooperativa.bo","copro.uk","corespeed.app","corsica","cosenza.it","couchpotatofries.org","council.aero","country","coupon","coupons","courses","coz.br","cpa","cpa.ec","cpa.pro","cpanel.site","cprapid.com","cpserver.com","cq.cn","cr","cr.it","cr.ua","craft.me","cranky.jp","crap.jp","crbts.app","crd.co","credit","creditcard","creditunion","cremona.it","crew.aero","cri.br","cri.nz","cricket","crimea.ua","crotone.it","crown","crs","cruise","cruises","cs.in","cs.it","cs.keliweb.cloud","csb.app","csx.cc","ct.it","ct.us","ctfcloud.net","cu","cue.ec","cuiaba.br","cuisinella","cuneo.it","curitiba.br","cust.cloudscale.ch","cust.dev.thingdust.io","cust.disrec.thingdust.io","cust.prod.thingdust.io","cust.retrosnub.co.uk","cust.testing.thingdust.io","custom.metacentrum.cz","customer.mythic-beasts.com","customer.speedpartner.de","cutegirl.jp","cv","cv.ua","cw","cx","cx.ua","cy","cy.eu.org","cyb.ge","cymru","cyon.link","cyon.site","cyou","cz","cz.eu.org","cz.it","czeladz.pl","czest.pl","d.bg","d.gv.vc","d.se","d6.ply.gg","daa.jp","dad","daegu.kr","daejeon.kr","daemon.asia","daemon.panel.gg","dagestan.ru","dagestan.su","daigo.ibaraki.jp","daisen.akita.jp","daito.osaka.jp","daiwa.hiroshima.jp","daklak.vn","daknong.vn","damnserver.com","danang.vn","dance","darklang.io","data","date","date.fukushima.jp","date.hokkaido.jp","dating","datsun","dattolocal.com","dattolocal.net","dattorelay.com","dattoweb.com","davvenjarga.no","davvesiida.no","day","daynight.jp","dazaifu.fukuoka.jp","dc.us","dclk","ddl.fr-par.scw.cloud","ddl.nl-ams.scw.cloud","ddl.pl-waw.scw.cloud","ddns-ip.net","ddns.berlin","ddns.ge","ddns.me","ddns.net","ddns.wtf","ddnsfree.com","ddnsgeek.com","ddnsguru.com","ddnsking.com","ddnss.de","ddnss.org","ddnssec.de","dds","de","de.com","de.cool","de.eu.org","de.object.ncloudstorage.com","de.trendhosting.cloud","de.us","de5.net","deal","dealer","deals","deatnu.no","debian.net","deca.jp","deci.jp","dedibox.fr","dedyn.io","def.br","definima.io","definima.net","degree","delhi.in","delivery","dell","dell-ogliastra.it","dellogliastra.it","deloitte","delta","demo.datadetect.com","demo.jelastic.com","democracia.bo","democrat","demon.nl","denmarkeast-01.azurewebsites.net","deno-staging.dev","deno.dev","deno.net","dent.ec","dental","dentist","dep.no","deployagent.com","deployagent.space","deporte.bo","des.br","desa.id","desi","design","design.aero","det.br","deus-canvas.com","deuxfleurs.eu","deuxfleurs.page","dev","dev.br","dev.cv","dev.project-study.com","development.run","devices.resinstaging.io","df.gov.br","df.leg.br","dfirma.pl","dgca.aero","dgn.ec","dhl","diadem.cloud","diamonds","dielddanuorri.no","dienbien.vn","diet","digick.jp","digital","direct","direct.quickconnect.cn","direct.quickconnect.to","directory","directwp.eu","disco.ec","discordsays.com","discordsez.com","discount","discourse.diy","discourse.group","discourse.team","discover","dish","diskstation.me","diskussionsbereich.de","ditchyourip.com","divtasvuodna.no","divttasvuotna.no","dix.asia","diy","dj","dk","dk.eu.org","dkonto.pl","dl.biz.ng","dlugoleka.pl","dm","dn.ua","dnepropetrovsk.ua","dni.us","dnipropetrovsk.ua","dnp","dns-cloud.net","dns-dynamic.net","dns.army","dns.navy","dnsabr.com","dnsalias.com","dnsalias.net","dnsalias.org","dnsdojo.com","dnsdojo.net","dnsdojo.org","dnsfor.me","dnshome.at","dnshome.cloud","dnshome.de","dnshome.eu","dnshome.it","dnsiskinky.com","dnsking.ch","dnsup.net","dnsupdate.info","dnsupdater.de","do","doc.ec","docs","docsflowy.site","doctor","does-it.net","doesntexist.com","doesntexist.org","dog","dojin.com","domains","donetsk.ua","dongnai.vn","dongthap.vn","donna.no","dontexist.com","dontexist.net","dontexist.org","doomdns.com","doomdns.org","dopaas.com","doshi.yamanashi.jp","dot","dovre.no","download","dp.ua","dpdns.org","dr.in","dr.tr","drammen.no","drangedal.no","drayddns.com","dreamhosters.com","drive","drive-platform.com","drive-platform.io","drobak.no","drr.ac","dscloud.biz","dscloud.me","dscloud.mobi","dsmynas.com","dsmynas.net","dsmynas.org","dst.mi.us","dtv","dtwh.fr-par.scw.cloud","dtwh.nl-ams.scw.cloud","dtwh.pl-waw.scw.cloud","dubai","duckdns.org","dupont","durban","durumis.com","dvag","dvr","dvrcam.info","dvrdns.org","dy.fi","dyn-berlin.de","dyn-ip24.de","dyn-o-saur.com","dyn.addr.tools","dyn.cosidns.de","dyn.ddnss.de","dyn.home-webserver.de","dyn.now","dynalias.com","dynalias.net","dynalias.org","dynamic-dns.info","dynamisches-dns.de","dynathome.net","dyndns-at-home.com","dyndns-at-work.com","dyndns-blog.com","dyndns-free.com","dyndns-home.com","dyndns-ip.com","dyndns-mail.com","dyndns-office.com","dyndns-pics.com","dyndns-remote.com","dyndns-server.com","dyndns-web.com","dyndns-wiki.com","dyndns-work.com","dyndns.biz","dyndns.dappnode.io","dyndns.ddnss.de","dyndns.info","dyndns.org","dyndns.tv","dyndns.ws","dyndns1.de","dyndnssec.de","dynns.com","dynserv.org","dynu.net","dynuddns.com","dynuddns.net","dynuhosting.com","dynv6.net","dyroy.no","dz","e.bg","e.id","e.se","e12.ve","e164.arpa","e2b.app","e4.cz","earth","east-kazakhstan.su","eastasia-01.azurewebsites.net","eastasia.azurestaticapps.net","eastasiastage-01.azurewebsites.net","eastus-01.azurewebsites.net","eastus2-01.azurewebsites.net","eastus2.azurestaticapps.net","eastus2euap-01.azurewebsites.net","eastus3-01.azurewebsites.net","easypanel.app","easypanel.host","eat","eating-organic.net","eaton.mi.us","ebetsu.hokkaido.jp","ebina.kanagawa.jp","ebino.miyazaki.jp","ebiz.tw","ec","ec.cc","echizen.fukui.jp","ecn.br","eco","eco.bj","eco.br","ecologia.bo","ecommerce-shop.pl","econo.bj","economia.bo","ed.ao","ed.ci","ed.cr","ed.jp","edeka","edgecompute.app","edgekey-staging.net","edgekey.net","edgestack.me","edgesuite-staging.net","edgesuite.net","editorx.io","edogawa.tokyo.jp","edu","edu.ac","edu.af","edu.al","edu.ao","edu.ar","edu.au","edu.az","edu.ba","edu.bb","edu.bd","edu.bh","edu.bi","edu.bj","edu.bm","edu.bn","edu.bo","edu.br","edu.bs","edu.bt","edu.bz","edu.ci","edu.cn","edu.co","edu.cu","edu.cv","edu.cw","edu.dm","edu.do","edu.dz","edu.ec","edu.ee","edu.eg","edu.es","edu.et","edu.eu.org","edu.fj","edu.fm","edu.gd","edu.ge","edu.gh","edu.gi","edu.gl","edu.gn","edu.gp","edu.gr","edu.gt","edu.gu","edu.gy","edu.hk","edu.hn","edu.ht","edu.in","edu.io","edu.iq","edu.it","edu.jo","edu.kg","edu.kh","edu.ki","edu.km","edu.kn","edu.kp","edu.krd","edu.kw","edu.ky","edu.kz","edu.la","edu.lb","edu.lc","edu.lk","edu.lr","edu.ls","edu.lv","edu.ly","edu.me","edu.mg","edu.mk","edu.ml","edu.mn","edu.mo","edu.ms","edu.mt","edu.mv","edu.mw","edu.mx","edu.my","edu.mz","edu.ng","edu.ni","edu.nr","edu.om","edu.pa","edu.pe","edu.pf","edu.ph","edu.pk","edu.pl","edu.pn","edu.pr","edu.ps","edu.pt","edu.py","edu.qa","edu.rs","edu.ru","edu.sa","edu.sb","edu.sc","edu.sd","edu.sg","edu.sl","edu.sn","edu.so","edu.ss","edu.st","edu.sv","edu.sy","edu.tj","edu.tm","edu.to","edu.tr","edu.tt","edu.tw","edu.ua","edu.ug","edu.uy","edu.vc","edu.ve","edu.vg","edu.vn","edu.vu","edu.ws","edu.ye","edu.za","edu.zm","education","educator.aero","edugit.io","ee","ee.eu.org","eek.jp","eero-stage.online","eero.online","eg","egersund.no","egoism.jp","ehime.jp","eid.no","eidfjord.no","eidsberg.no","eidskog.no","eidsvoll.no","eigersund.no","eiheiji.fukui.jp","ekloges.cy","elastic.k2.cloud","elasticbeanstalk.com","elblag.pl","elementor.cloud","elementor.cool","eliv-api.kr","eliv-cdn.kr","eliv-dns.kr","elk.pl","elverum.no","email","emb.kw","embaixada.st","embetsu.hokkaido.jp","emerck","emergency.aero","emergent.cloud","emergent.host","emilia-romagna.it","emiliaromagna.it","emp.br","emprende.ve","empresa.bo","emr.it","emrappui-prod.af-south-1.amazonaws.com","emrappui-prod.ap-east-1.amazonaws.com","emrappui-prod.ap-northeast-1.amazonaws.com","emrappui-prod.ap-northeast-2.amazonaws.com","emrappui-prod.ap-northeast-3.amazonaws.com","emrappui-prod.ap-south-1.amazonaws.com","emrappui-prod.ap-south-2.amazonaws.com","emrappui-prod.ap-southeast-1.amazonaws.com","emrappui-prod.ap-southeast-2.amazonaws.com","emrappui-prod.ap-southeast-3.amazonaws.com","emrappui-prod.ap-southeast-4.amazonaws.com","emrappui-prod.ca-central-1.amazonaws.com","emrappui-prod.ca-west-1.amazonaws.com","emrappui-prod.cn-north-1.amazonaws.com.cn","emrappui-prod.cn-northwest-1.amazonaws.com.cn","emrappui-prod.eu-central-1.amazonaws.com","emrappui-prod.eu-central-2.amazonaws.com","emrappui-prod.eu-north-1.amazonaws.com","emrappui-prod.eu-south-1.amazonaws.com","emrappui-prod.eu-south-2.amazonaws.com","emrappui-prod.eu-west-1.amazonaws.com","emrappui-prod.eu-west-2.amazonaws.com","emrappui-prod.eu-west-3.amazonaws.com","emrappui-prod.il-central-1.amazonaws.com","emrappui-prod.me-central-1.amazonaws.com","emrappui-prod.me-south-1.amazonaws.com","emrappui-prod.sa-east-1.amazonaws.com","emrappui-prod.us-east-1.amazonaws.com","emrappui-prod.us-east-2.amazonaws.com","emrappui-prod.us-gov-east-1.amazonaws.com","emrappui-prod.us-gov-west-1.amazonaws.com","emrappui-prod.us-west-1.amazonaws.com","emrappui-prod.us-west-2.amazonaws.com","emrnotebooks-prod.af-south-1.amazonaws.com","emrnotebooks-prod.ap-east-1.amazonaws.com","emrnotebooks-prod.ap-northeast-1.amazonaws.com","emrnotebooks-prod.ap-northeast-2.amazonaws.com","emrnotebooks-prod.ap-northeast-3.amazonaws.com","emrnotebooks-prod.ap-south-1.amazonaws.com","emrnotebooks-prod.ap-south-2.amazonaws.com","emrnotebooks-prod.ap-southeast-1.amazonaws.com","emrnotebooks-prod.ap-southeast-2.amazonaws.com","emrnotebooks-prod.ap-southeast-3.amazonaws.com","emrnotebooks-prod.ap-southeast-4.amazonaws.com","emrnotebooks-prod.ca-central-1.amazonaws.com","emrnotebooks-prod.ca-west-1.amazonaws.com","emrnotebooks-prod.cn-north-1.amazonaws.com.cn","emrnotebooks-prod.cn-northwest-1.amazonaws.com.cn","emrnotebooks-prod.eu-central-1.amazonaws.com","emrnotebooks-prod.eu-central-2.amazonaws.com","emrnotebooks-prod.eu-north-1.amazonaws.com","emrnotebooks-prod.eu-south-1.amazonaws.com","emrnotebooks-prod.eu-south-2.amazonaws.com","emrnotebooks-prod.eu-west-1.amazonaws.com","emrnotebooks-prod.eu-west-2.amazonaws.com","emrnotebooks-prod.eu-west-3.amazonaws.com","emrnotebooks-prod.il-central-1.amazonaws.com","emrnotebooks-prod.me-central-1.amazonaws.com","emrnotebooks-prod.me-south-1.amazonaws.com","emrnotebooks-prod.sa-east-1.amazonaws.com","emrnotebooks-prod.us-east-1.amazonaws.com","emrnotebooks-prod.us-east-2.amazonaws.com","emrnotebooks-prod.us-gov-east-1.amazonaws.com","emrnotebooks-prod.us-gov-west-1.amazonaws.com","emrnotebooks-prod.us-west-1.amazonaws.com","emrnotebooks-prod.us-west-2.amazonaws.com","emrstudio-prod.af-south-1.amazonaws.com","emrstudio-prod.ap-east-1.amazonaws.com","emrstudio-prod.ap-northeast-1.amazonaws.com","emrstudio-prod.ap-northeast-2.amazonaws.com","emrstudio-prod.ap-northeast-3.amazonaws.com","emrstudio-prod.ap-south-1.amazonaws.com","emrstudio-prod.ap-south-2.amazonaws.com","emrstudio-prod.ap-southeast-1.amazonaws.com","emrstudio-prod.ap-southeast-2.amazonaws.com","emrstudio-prod.ap-southeast-3.amazonaws.com","emrstudio-prod.ap-southeast-4.amazonaws.com","emrstudio-prod.ca-central-1.amazonaws.com","emrstudio-prod.ca-west-1.amazonaws.com","emrstudio-prod.cn-north-1.amazonaws.com.cn","emrstudio-prod.cn-northwest-1.amazonaws.com.cn","emrstudio-prod.eu-central-1.amazonaws.com","emrstudio-prod.eu-central-2.amazonaws.com","emrstudio-prod.eu-north-1.amazonaws.com","emrstudio-prod.eu-south-1.amazonaws.com","emrstudio-prod.eu-south-2.amazonaws.com","emrstudio-prod.eu-west-1.amazonaws.com","emrstudio-prod.eu-west-2.amazonaws.com","emrstudio-prod.eu-west-3.amazonaws.com","emrstudio-prod.il-central-1.amazonaws.com","emrstudio-prod.me-central-1.amazonaws.com","emrstudio-prod.me-south-1.amazonaws.com","emrstudio-prod.sa-east-1.amazonaws.com","emrstudio-prod.us-east-1.amazonaws.com","emrstudio-prod.us-east-2.amazonaws.com","emrstudio-prod.us-gov-east-1.amazonaws.com","emrstudio-prod.us-gov-west-1.amazonaws.com","emrstudio-prod.us-west-1.amazonaws.com","emrstudio-prod.us-west-2.amazonaws.com","en.it","ena.gifu.jp","encoreapi.com","encr.app","endofinternet.net","endofinternet.org","endoftheinternet.org","enebakk.no","energy","enf.br","eng.br","eng.ec","eng.jo","eng.pro","engerdal.no","engine.aero","engineer","engineer.aero","engineering","eniwa.hokkaido.jp","enna.it","ens.tn","enscaled.sg","ent.platform.sh","enterprisecloud.nu","enterprises","entertainment.aero","epson","equipment","equipment.aero","er.in","ericsson","erimo.hokkaido.jp","erni","erotica.hu","erotika.hu","erp.dev","es","es-1.axarnet.cloud","es.eu.org","es.gov.br","es.kr","es.leg.br","esan.hokkaido.jp","esashi.hokkaido.jp","esm.ec","esp.br","esq","est-a-la-maison.com","est-a-la-masion.com","est-le-patron.com","est-mon-blogueur.com","est.pr","estate","et","etajima.hiroshima.jp","etc.br","eti.br","etne.no","etnedal.no","eu","eu-1.evennode.com","eu-2.evennode.com","eu-3.evennode.com","eu-4.evennode.com","eu-central-1.elasticbeanstalk.com","eu-central-2.elasticbeanstalk.com","eu-north-1.elasticbeanstalk.com","eu-south-1.elasticbeanstalk.com","eu-south-2.elasticbeanstalk.com","eu-west-1.convex.cloud","eu-west-1.convex.site","eu-west-1.elasticbeanstalk.com","eu-west-2.elasticbeanstalk.com","eu-west-3.elasticbeanstalk.com","eu.cc","eu.com","eu.encoway.cloud","eu.int","eu.meteorapp.com","eu.ngrok.io","eu.org","eu.platform.sh","eu.pythonanywhere.com","eu1-plenit.com","eun.eg","eurodir.ru","eurovision","eus","evenassi.no","evenes.no","events","evje-og-hornnes.no","exchange","exchange.aero","exe.xyz","execute-api.af-south-1.amazonaws.com","execute-api.ap-east-1.amazonaws.com","execute-api.ap-northeast-1.amazonaws.com","execute-api.ap-northeast-2.amazonaws.com","execute-api.ap-northeast-3.amazonaws.com","execute-api.ap-south-1.amazonaws.com","execute-api.ap-south-2.amazonaws.com","execute-api.ap-southeast-1.amazonaws.com","execute-api.ap-southeast-2.amazonaws.com","execute-api.ap-southeast-3.amazonaws.com","execute-api.ap-southeast-4.amazonaws.com","execute-api.ap-southeast-5.amazonaws.com","execute-api.ca-central-1.amazonaws.com","execute-api.ca-west-1.amazonaws.com","execute-api.cn-north-1.amazonaws.com.cn","execute-api.cn-northwest-1.amazonaws.com.cn","execute-api.eu-central-1.amazonaws.com","execute-api.eu-central-2.amazonaws.com","execute-api.eu-north-1.amazonaws.com","execute-api.eu-south-1.amazonaws.com","execute-api.eu-south-2.amazonaws.com","execute-api.eu-west-1.amazonaws.com","execute-api.eu-west-2.amazonaws.com","execute-api.eu-west-3.amazonaws.com","execute-api.il-central-1.amazonaws.com","execute-api.me-central-1.amazonaws.com","execute-api.me-south-1.amazonaws.com","execute-api.sa-east-1.amazonaws.com","execute-api.us-east-1.amazonaws.com","execute-api.us-east-2.amazonaws.com","execute-api.us-gov-east-1.amazonaws.com","execute-api.us-gov-west-1.amazonaws.com","execute-api.us-west-1.amazonaws.com","execute-api.us-west-2.amazonaws.com","exnet.su","expert","experts-comptables.fr","expo.app","exposed","express","express.aero","extraspace","ezproxy.kuleuven.be","f.bg","f.se","f5.si","fage","fail","fairwinds","faith","fakefur.jp","fam.pk","family","familyds.com","familyds.net","familyds.org","fan","fans","fantasyleague.cc","far.br","farm","farmers","farsund.no","fashion","fashionstore.jp","fast","fastedge.app","fastly-edge.com","fastly-terrarium.com","fastlylb.net","fastvps-server.com","fastvps.host","fastvps.site","fauske.no","fbx-os.fr","fbxos.fr","fc.it","fe.it","federation.aero","fedex","fedje.no","fedorainfracloud.org","fedorapeople.org","feedback","feedback.ac","feira.br","fem.jp","fentiger.mythic-beasts.com","fermo.it","ferrara.it","ferrari","ferrero","feste-ip.net","fet.no","fetsund.no","fg.it","fh-muenster.io","fh.se","fhs.no","fhsk.se","fhv.se","fi","fi.cloudplatform.fi","fi.cr","fi.eu.org","fi.it","fidelity","fido","fie.ee","figma-gov.site","figma.site","file.core.usgovcloudapi.net","file.core.windows.net","filegear-sg.me","filegear.me","film","film.hu","fin.ec","fin.in","fin.tn","final","finance","financial","finnoy.no","fire","firebaseapp.com","firenze.it","firestone","firewall-gateway.com","firewall-gateway.de","firewall-gateway.net","firewalledreplit.co","firm.dk","firm.ht","firm.in","firm.nf","firm.ng","firm.ro","firm.ve","firmdale","fish","fishing","fit","fitjar.no","fitness","fj","fj.cn","fjaler.no","fjell.no","fl.us","fla.no","flakstad.no","flatanger.no","fldrv.com","flekkefjord.no","flesberg.no","flickr","flier.jp","flight.aero","flights","flir","flog.br","flop.jp","floppy.jp","flora.no","florence.it","floripa.br","florist","floro.no","flowers","flt.cloud.muni.cz","flutterflow.app","fly","fly.dev","fm","fm.br","fm.it","fm.jo","fm.no","fn.amba.host","fnc.fr-par.scw.cloud","fnd.br","fo","foggia.it","folkebibl.no","folldal.no","foo","food","fool.jp","football","for-better.biz","for-more.biz","for-our.info","for-some.biz","for-the.biz","ford","forde.no","forex","forgeblocks.com","forgot.her.name","forgot.his.name","forks.wa.us","forli-cesena.it","forlicesena.it","forms.ac","forsale","forsand.no","fortal.br","forum","forum.hu","forumz.info","fosnes.no","fot.br","fot.ec","foundation","fox","foz.br","fr","fr-1.paas.massivegrid.net","fr-par-1.baremetal.scw.cloud","fr-par-2.baremetal.scw.cloud","fr.eu.org","fr.it","fra1-de.cloudjiffy.net","frame.claudeusercontent.com","framer.ai","framer.app","framer.media","framer.photos","framer.website","framer.wiki","framercanvas.com","frana.no","francecentral-01.azurewebsites.net","francesouth-01.azurewebsites.net","fredrikstad.no","free","freebox-os.com","freebox-os.fr","freeboxos.com","freeboxos.fr","freeddns.org","freeddns.us","freedesktop.org","freemyip.com","freesite.host","freetls.fastly.net","freight.aero","frenchkiss.jp","fresenius","friuli-v-giulia.it","friuli-ve-giulia.it","friuli-vegiulia.it","friuli-venezia-giulia.it","friuli-veneziagiulia.it","friuli-vgiulia.it","friuliv-giulia.it","friulive-giulia.it","friulivegiulia.it","friulivenezia-giulia.it","friuliveneziagiulia.it","friulivgiulia.it","frl","frogans","frogn.no","froland.no","from-ak.com","from-al.com","from-ar.com","from-az.net","from-ca.com","from-co.net","from-ct.com","from-dc.com","from-de.com","from-fl.com","from-ga.com","from-hi.com","from-ia.com","from-id.com","from-il.com","from-in.com","from-ks.com","from-ky.com","from-la.net","from-ma.com","from-md.com","from-me.org","from-mi.com","from-mn.com","from-mo.com","from-ms.com","from-mt.com","from-nc.com","from-nd.com","from-ne.com","from-nh.com","from-nj.com","from-nm.com","from-nv.com","from-ny.net","from-oh.com","from-ok.com","from-or.com","from-pa.com","from-pr.com","from-ri.com","from-sc.com","from-sd.com","from-tn.com","from-tx.com","from-ut.com","from-va.com","from-vt.com","from-wa.com","from-wi.com","from-wv.com","from-wy.com","from.hr","from.tv","frontend.encr.app","frontier","frosinone.it","frosta.no","froya.no","fspages.org","fst.br","ftpaccess.cc","ftr","fuchu.hiroshima.jp","fuchu.tokyo.jp","fuchu.toyama.jp","fudai.iwate.jp","fuefuki.yamanashi.jp","fuel.aero","fuettertdasnetz.de","fuji.shizuoka.jp","fujieda.shizuoka.jp","fujiidera.osaka.jp","fujikawa.shizuoka.jp","fujikawa.yamanashi.jp","fujikawaguchiko.yamanashi.jp","fujimi.nagano.jp","fujimi.saitama.jp","fujimino.saitama.jp","fujinomiya.shizuoka.jp","fujioka.gunma.jp","fujisato.akita.jp","fujisawa.iwate.jp","fujisawa.kanagawa.jp","fujishiro.ibaraki.jp","fujitsu","fujiyoshida.yamanashi.jp","fukagawa.hokkaido.jp","fukaya.saitama.jp","fukuchi.fukuoka.jp","fukuchiyama.kyoto.jp","fukudomi.saga.jp","fukui.fukui.jp","fukui.jp","fukumitsu.toyama.jp","fukuoka.jp","fukuroi.shizuoka.jp","fukusaki.hyogo.jp","fukushima.fukushima.jp","fukushima.hokkaido.jp","fukushima.jp","fukuyama.hiroshima.jp","fun","funabashi.chiba.jp","funagata.yamagata.jp","funahashi.toyama.jp","functions.fnc.fr-par.scw.cloud","fund","funnels.cx","fuoisku.no","fuossko.no","furano.hokkaido.jp","furniture","furubira.hokkaido.jp","furudono.fukushima.jp","furukawa.miyagi.jp","fusa.no","fuso.aichi.jp","fussa.tokyo.jp","futaba.fukushima.jp","futbol","futsu.nagasaki.jp","futtsu.chiba.jp","futurehosting.at","futuremailing.at","fvg.it","fyi","fylkesbibl.no","fyresdal.no","g.bg","g.se","g12.br","ga","ga.us","gadget.app","gadget.host","gaivuotna.no","gal","gal.ec","gallery","gallo","gallup","galsa.no","gamagori.aichi.jp","game","game-host.org","game-server.cc","game.tw","games","games.hu","gamo.shiga.jp","gamvik.no","gangaviika.no","gangwon.kr","gap","garden","gaular.no","gausdal.no","gay","gb","gb.net","gbiz","gc.ca","gcorecdn.com","gcp.databricksapps.com","gd","gd.cn","gda.pl","gdansk.pl","gdn","gdynia.pl","ge","ge.it","gea","geek.nz","geekgalaxy.com","gehirn.ne.jp","geisei.kochi.jp","gen.in","gen.mi.us","gen.ng","gen.nz","gen.tr","genkai.saga.jp","genoa.it","genova.it","gent","gentapps.com","genting","gentlentapis.com","geo.br","george","georgia.su","germanynorth-01.azurewebsites.net","germanywestcentral-01.azurewebsites.net","getmyip.com","gets-it.net","gf","gg","ggee","ggf.br","ggff.net","gh","gh.srv.us","gi","gialai.vn","giehtavuoatna.no","gielda.no","gift","gifts","gifu.gifu.jp","gifu.jp","gig-harbor.wa.us","giize.com","gildeskal.no","ginan.gifu.jp","ginowan.okinawa.jp","ginoza.okinawa.jp","ginta.page","girlfriend.jp","girly.jp","giske.no","git-pages.rit.edu","git-repos.de","gitbook.io","github.app","github.io","githubpreview.dev","githubusercontent.com","gitlab.io","gitpage.si","gives","giving","gjemnes.no","gjerdrum.no","gjerstad.no","gjesdal.no","gjovik.no","gkp.pk","gl","gl.srv.us","glass","gle","gleeze.com","glideos.app","gliding.aero","gliwice.pl","global","global.prod.fastly.net","global.ssl.fastly.net","globo","glogow.pl","gloomy.jp","gloppen.no","glug.org.uk","gm","gmail","gmbh","gmina.pl","gmo","gmx","gn","gniezno.pl","go.amba.host","go.biz.ng","go.ci","go.cr","go.dyndns.org","go.gov.br","go.id","go.it","go.jp","go.ke","go.kr","go.leg.br","go.th","go.tj","go.tz","go.ug","gob.ar","gob.bo","gob.cl","gob.cu","gob.do","gob.ec","gob.es","gob.gt","gob.hn","gob.mx","gob.ni","gob.pa","gob.pe","gob.pk","gob.sv","gob.ve","gobo.wakayama.jp","godaddy","godo.gifu.jp","gog.pk","goiania.br","goip.de","gojome.akita.jp","gok.pk","gokase.miyazaki.jp","gol.no","gold","goldpoint","golf","golffan.us","gonna.jp","gonohe.aomori.jp","goodyear","goog","google","googleapis.com","googlecode.com","gop","gop.pk","gorizia.it","gorlice.pl","gos.pk","gose.nara.jp","gosen.niigata.jp","goshiki.hyogo.jp","got","gotdns.ch","gotdns.com","gotdns.org","gotemba.shizuoka.jp","goto.nagasaki.jp","gotpantheon.com","gotsu.shimane.jp","goupile.fr","gouv.ci","gouv.fr","gouv.ht","gouv.km","gouv.ml","gouv.sn","gov","gov.ac","gov.ae","gov.af","gov.al","gov.ao","gov.ar","gov.as","gov.au","gov.az","gov.ba","gov.bb","gov.bd","gov.bf","gov.bh","gov.bm","gov.bn","gov.br","gov.bs","gov.bt","gov.bw","gov.by","gov.bz","gov.cd","gov.cl","gov.cm","gov.cn","gov.co","gov.cx","gov.cy","gov.cz","gov.de","gov.dm","gov.do","gov.dz","gov.ec","gov.ee","gov.eg","gov.et","gov.fj","gov.gd","gov.ge","gov.gh","gov.gi","gov.gn","gov.gr","gov.gu","gov.gy","gov.hk","gov.ie","gov.il","gov.in","gov.io","gov.iq","gov.ir","gov.it","gov.jo","gov.kg","gov.kh","gov.ki","gov.km","gov.kn","gov.kp","gov.kw","gov.kz","gov.la","gov.lb","gov.lc","gov.lk","gov.lr","gov.ls","gov.lt","gov.lv","gov.ly","gov.ma","gov.me","gov.mg","gov.mk","gov.ml","gov.mn","gov.mo","gov.mr","gov.ms","gov.mu","gov.mv","gov.mw","gov.my","gov.mz","gov.na","gov.nc.tr","gov.ng","gov.nl","gov.nr","gov.om","gov.ph","gov.pk","gov.pl","gov.pn","gov.pr","gov.ps","gov.pt","gov.pw","gov.py","gov.qa","gov.rs","gov.ru","gov.rw","gov.sa","gov.sb","gov.sc","gov.scot","gov.sd","gov.sg","gov.sh","gov.sl","gov.so","gov.ss","gov.sx","gov.sy","gov.tj","gov.tl","gov.tm","gov.tn","gov.to","gov.tr","gov.tt","gov.tw","gov.ua","gov.ug","gov.uk","gov.vc","gov.ve","gov.vn","gov.ws","gov.ye","gov.za","gov.zm","gov.zw","government.aero","govt.nz","gp","gq","gr","gr.com","gr.eu.org","gr.it","gr.jp","grafana-dev.net","grainger","grajewo.pl","gran.no","grane.no","granvin.no","graphic.design","graphics","gratangen.no","gratis","grayjayleagues.com","greater.jp","grebedoc.dev","green","greta.fr","grimstad.no","gripe","griw.gov.pl","grocery","grok.me","groks-the.info","groks-this.info","grondar.za","grong.no","grosseto.it","groundhandling.aero","group","group.aero","grozny.ru","grozny.su","grp.lk","gru.br","grue.no","gs","gs.aa.no","gs.ah.no","gs.bu.no","gs.cn","gs.fm.no","gs.hl.no","gs.hm.no","gs.jan-mayen.no","gs.mr.no","gs.nl.no","gs.nt.no","gs.of.no","gs.ol.no","gs.oslo.no","gs.rl.no","gs.sf.no","gs.st.no","gs.svalbard.no","gs.tm.no","gs.tr.no","gs.va.no","gs.vf.no","gsj.bz","gsm.pl","gt","gu","gu.cc","gu.us","guam.gu","gub.uy","gucci","guge","guide","guitars","gujarat.in","gujo.gifu.jp","gulen.no","gunma.jp","guovdageaidnu.no","guru","gushikami.okinawa.jp","gv.ao","gv.at","gv.uy","gv.vc","gw","gwangju.kr","gx.cn","gy","gye.ec","gyeongbuk.kr","gyeonggi.kr","gyeongnam.kr","gyokuto.kumamoto.jp","gz.cn","h.bg","h.se","ha.cn","ha.no","habikino.osaka.jp","habmer.no","haboro.hokkaido.jp","hacca.jp","hachijo.tokyo.jp","hachinohe.aomori.jp","hachioji.tokyo.jp","hachirogata.akita.jp","hackclub.app","hadano.kanagawa.jp","hadsel.no","haebaru.okinawa.jp","haga.tochigi.jp","hagebostad.no","hagi.yamaguchi.jp","hagiang.vn","haibara.shizuoka.jp","haiduong.vn","haiphong.vn","hair","hakata.fukuoka.jp","hakodate.hokkaido.jp","hakone.kanagawa.jp","hakuba.nagano.jp","hakui.ishikawa.jp","hakusan.ishikawa.jp","halden.no","half.host","halfmoon.jp","halsa.no","ham-radio-op.net","hamada.shimane.jp","hamamatsu.shizuoka.jp","hamar.no","hamaroy.no","hamatama.saga.jp","hamatonbetsu.hokkaido.jp","hamburg","hammarfeasta.no","hammerfest.no","hamura.tokyo.jp","hanam.vn","hanamaki.iwate.jp","hanamigawa.chiba.jp","hanawa.fukushima.jp","handa.aichi.jp","handcrafted.jp","hanggliding.aero","hangout","hannan.osaka.jp","hanno.saitama.jp","hanoi.vn","hanyu.saitama.jp","hapmir.no","happou.akita.jp","hara.nagano.jp","haram.no","hareid.no","harima.hyogo.jp","harstad.no","hasama.oita.jp","hasami.nagasaki.jp","hashbang.sh","hashikami.aomori.jp","hashima.gifu.jp","hashimoto.wakayama.jp","hasuda.saitama.jp","hasura-app.io","hasura.app","hasvik.no","hateblo.jp","hatenablog.com","hatenablog.jp","hatenadiary.com","hatenadiary.jp","hatenadiary.org","hatinh.vn","hatogaya.saitama.jp","hatoyama.saitama.jp","hatsukaichi.hiroshima.jp","hattfjelldal.no","haugesund.no","haugiang.vn","haus","hayakawa.yamanashi.jp","hayashima.okayama.jp","hazu.aichi.jp","hb.cldmail.ru","hb.cn","hbo","hdfc","hdfcbank","he.cn","health","health-carereform.com","health.nz","health.vn","healthcare","heavy.jp","heguri.nara.jp","heimdns.de","heimdns.online","heiyu.space","hekinan.aichi.jp","helioho.st","heliohost.us","help","hemne.no","hemnes.no","hemsedal.no","hepforge.org","her.jp","herad.no","hercules-app.com","hercules-dev.com","here","here-for-more.info","here.now","hermes","herokuapp.com","heroy.more-og-romsdal.no","heroy.nordland.no","heteml.net","heyflow.page","heyflow.site","hf.space","hi.cn","hi.us","hicam.net","hichiso.gifu.jp","hida.gifu.jp","hidaka.hokkaido.jp","hidaka.kochi.jp","hidaka.saitama.jp","hidaka.wakayama.jp","hidns.co","hidns.vip","higashi.fukuoka.jp","higashi.fukushima.jp","higashi.okinawa.jp","higashiagatsuma.gunma.jp","higashichichibu.saitama.jp","higashihiroshima.hiroshima.jp","higashiizu.shizuoka.jp","higashiizumo.shimane.jp","higashikagawa.kagawa.jp","higashikagura.hokkaido.jp","higashikawa.hokkaido.jp","higashikurume.tokyo.jp","higashimatsushima.miyagi.jp","higashimatsuyama.saitama.jp","higashimurayama.tokyo.jp","higashinaruse.akita.jp","higashine.yamagata.jp","higashiomi.shiga.jp","higashiosaka.osaka.jp","higashishirakawa.gifu.jp","higashisumiyoshi.osaka.jp","higashitsuno.kochi.jp","higashiura.aichi.jp","higashiyama.kyoto.jp","higashiyamato.tokyo.jp","higashiyodogawa.osaka.jp","higashiyoshino.nara.jp","hiho.jp","hiji.oita.jp","hikari.yamaguchi.jp","hikawa.shimane.jp","hikimi.shimane.jp","hikone.shiga.jp","himeji.hyogo.jp","himeshima.oita.jp","himi.toyama.jp","hino.tokyo.jp","hino.tottori.jp","hinode.tokyo.jp","hinohara.tokyo.jp","hioki.kagoshima.jp","hiphop","hippy.jp","hirado.nagasaki.jp","hiraizumi.iwate.jp","hirakata.osaka.jp","hiranai.aomori.jp","hirara.okinawa.jp","hirata.fukushima.jp","hiratsuka.kanagawa.jp","hiraya.nagano.jp","hirogawa.wakayama.jp","hirokawa.fukuoka.jp","hirono.fukushima.jp","hirono.iwate.jp","hiroo.hokkaido.jp","hirosaki.aomori.jp","hiroshima.jp","hisamitsu","hisayama.fukuoka.jp","hita.oita.jp","hitachi","hitachi.ibaraki.jp","hitachinaka.ibaraki.jp","hitachiomiya.ibaraki.jp","hitachiota.ibaraki.jp","hitra.no","hiv","hizen.saga.jp","hjartdal.no","hjelmeland.no","hk","hk.cn","hk.com","hk.org","hkt","hl.cn","hl.no","hlx.live","hlx.page","hm","hm.no","hn","hn.cn","hoabinh.vn","hobby-site.com","hobby-site.org","hobol.no","hockey","hof.no","hofu.yamaguchi.jp","hokkaido.jp","hokksund.no","hokuryu.hokkaido.jp","hokuto.hokkaido.jp","hokuto.yamanashi.jp","hol.no","holdings","hole.no","holiday","holmestrand.no","holtalen.no","holy.jp","home-webserver.de","home.arpa","home.dyndns.org","home64.de","homebuilt.aero","homedepot","homedns.org","homeftp.net","homeftp.org","homegoods","homeip.net","homelinux.com","homelinux.net","homelinux.org","homes","homesecuritymac.com","homesecuritypc.com","homesense","homesklep.pl","homeunix.com","homeunix.net","homeunix.org","honai.ehime.jp","honbetsu.hokkaido.jp","honda","honefoss.no","hongo.hiroshima.jp","honjo.akita.jp","honjo.saitama.jp","honjyo.akita.jp","hoplix.shop","hopto.me","hopto.org","hoquiam.wa.us","hornindal.no","horokanai.hokkaido.jp","horonobe.hokkaido.jp","horse","horten.no","hosp.uk","hospital","host","hosted-by-files.com","hostedpi.com","hosting","hosting-cluster.nl","hostyhosting.io","hot","hotel","hotel.hu","hotel.lk","hotel.tz","hotels","hotelwithflight.com","hotmail","house","how","hoyanger.no","hoylandet.no","hr","hr.eu.org","hra.health","hrsn.dev","hs.kr","hsbc","hstgr.cloud","ht","httpbin.org","hu","hu.eu.org","hu.net","hue.vn","hughes","huissier-justice.fr","hungry.jp","hungyen.vn","hurdal.no","hurum.no","hvaler.no","hyatt","hyllestad.no","hyogo.jp","hypernode.io","hyuga.miyazaki.jp","hyundai","i.bg","i.ng","i.ph","i.se","i234.me","ia.bo","ia.br","ia.us","ia.ve","iamallama.com","ibara.okayama.jp","ibaraki.ibaraki.jp","ibaraki.jp","ibaraki.osaka.jp","ibestad.no","ibigawa.gifu.jp","ibm","ibr.ec","ibxos.it","ic.gov.pl","icbc","ice","ichiba.tokushima.jp","ichihara.chiba.jp","ichikai.tochigi.jp","ichikawa.chiba.jp","ichikawa.hyogo.jp","ichikawamisato.yamanashi.jp","ichinohe.iwate.jp","ichinomiya.aichi.jp","ichinomiya.chiba.jp","ichinoseki.iwate.jp","icp0.io","icp1.io","icu","icurus.jp","id","id.au","id.bd","id.cv","id.firewalledreplit.co","id.fj","id.forgerock.io","id.ir","id.lv","id.ly","id.repl.co","id.replit.app","id.us","id.vn","ide.kyoto.jp","idf.il","idrett.no","idv.hk","idv.tw","ie","ie.eu.org","ieee","if.ua","ifm","ifr.fr-par.scw.cloud","ifr.nl-ams.scw.cloud","ifr.pl-waw.scw.cloud","iglesias-carbonia.it","iglesiascarbonia.it","iheya.okinawa.jp","iida.nagano.jp","iide.yamagata.jp","iijima.nagano.jp","iitate.fukushima.jp","iiyama.nagano.jp","iizuka.fukuoka.jp","iizuna.nagano.jp","ikano","ikaruga.nara.jp","ikata.ehime.jp","ikawa.akita.jp","ikeda.fukui.jp","ikeda.gifu.jp","ikeda.hokkaido.jp","ikeda.nagano.jp","ikeda.osaka.jp","iki.fi","iki.nagasaki.jp","ikoma.nara.jp","ikusaka.nagano.jp","il","il-central-1.elasticbeanstalk.com","il.eu.org","il.us","ilawa.pl","iliadboxos.it","ilovecollege.info","im","im.it","imabari.ehime.jp","imakane.hokkaido.jp","imamat","imari.saga.jp","imb.br","imdb","imizu.toyama.jp","immo","immobilien","imperia.it","in","in-addr.arpa","in-berlin.de","in-brb.de","in-butter.de","in-dsl.de","in-dsl.net","in-dsl.org","in-the-band.net","in-vpn.de","in-vpn.net","in-vpn.org","in.eu.org","in.net","in.ngrok.io","in.ni","in.rs","in.th","in.ua","in.us","ina.ibaraki.jp","ina.nagano.jp","ina.saitama.jp","inabe.mie.jp","inagawa.hyogo.jp","inagi.tokyo.jp","inami.toyama.jp","inami.wakayama.jp","inashiki.ibaraki.jp","inatsuki.fukuoka.jp","inawashiro.fukushima.jp","inazawa.aichi.jp","inc","inc.hk","incheon.kr","ind.br","ind.gt","ind.in","ind.kw","ind.tn","independent-commission.uk","independent-inquest.uk","independent-inquiry.uk","independent-panel.uk","independent-review.uk","inderoy.no","indevs.in","indiasouthcentral-01.azurewebsites.net","indigena.bo","indonesiacentral-01.azurewebsites.net","industria.bo","industries","ine.kyoto.jp","inf.br","inf.cu","inf.mk","inf.ua","infiniti","info","info.az","info.bb","info.bd","info.bj","info.bo","info.cx","info.ec","info.eg","info.et","info.fj","info.gu","info.ht","info.hu","info.in","info.ke","info.ki","info.la","info.ls","info.ml","info.mv","info.nf","info.ni","info.nr","info.pl","info.pr","info.ro","info.sd","info.tn","info.tr","info.tt","info.tz","info.ve","info.vn","info.zm","ing","ing.pa","ingatlan.hu","ink","ino.kochi.jp","inst.ml","instance.datadetect.com","instances.spawn.cc","institute","insurance","insurance.aero","insure","int","int.apple","int.ar","int.az","int.bo","int.ci","int.cv","int.eu.org","int.in","int.la","int.lk","int.mv","int.mw","int.ni","int.pt","int.ru","int.tj","int.ve","int.vn","international","internet-dns.de","internet.in","intl.tn","intouch.email","intuit","inuyama.aichi.jp","investments","inzai.chiba.jp","io","io.in","io.kr","io.noc.ruhr-uni-bochum.de","io.vn","iobb.net","iopsys.se","ip-ddns.com","ip-dynamic.org","ip.linodeusercontent.com","ip6.arpa","ipfs.nftstorage.link","ipfs.storacha.link","ipfs.w3s.link","ipifony.net","ipiranga","ipv64.de","ipv64.net","iq","iqhs.pl","ir","ir.md","iran.liara.run","iris.arpa","irish","iruma.saitama.jp","is","is-a-anarchist.com","is-a-blogger.com","is-a-bookkeeper.com","is-a-bruinsfan.org","is-a-bulls-fan.com","is-a-candidate.org","is-a-caterer.com","is-a-celticsfan.org","is-a-chef.com","is-a-chef.net","is-a-chef.org","is-a-conservative.com","is-a-cpa.com","is-a-cubicle-slave.com","is-a-democrat.com","is-a-designer.com","is-a-doctor.com","is-a-financialadvisor.com","is-a-fullstack.dev","is-a-geek.com","is-a-geek.net","is-a-geek.org","is-a-good.dev","is-a-green.com","is-a-guru.com","is-a-hard-worker.com","is-a-hunter.com","is-a-knight.org","is-a-landscaper.com","is-a-lawyer.com","is-a-liberal.com","is-a-libertarian.com","is-a-linux-user.org","is-a-llama.com","is-a-musician.com","is-a-nascarfan.com","is-a-nurse.com","is-a-painter.com","is-a-patsfan.org","is-a-personaltrainer.com","is-a-photographer.com","is-a-player.com","is-a-republican.com","is-a-rockstar.com","is-a-socialist.com","is-a-soxfan.org","is-a-student.com","is-a-teacher.com","is-a-techie.com","is-a-therapist.com","is-a.dev","is-an-accountant.com","is-an-actor.com","is-an-actress.com","is-an-anarchist.com","is-an-artist.com","is-an-engineer.com","is-an-entertainer.com","is-by.us","is-certified.com","is-cool.dev","is-found.org","is-gone.com","is-into-anime.com","is-into-cars.com","is-into-cartoons.com","is-into-games.com","is-leet.com","is-local.org","is-lost.org","is-not-a.dev","is-not-certified.com","is-saved.org","is-slick.com","is-uberleet.com","is-very-bad.org","is-very-evil.org","is-very-good.org","is-very-nice.org","is-very-sweet.org","is-with-theband.com","is.eu.org","is.gov.pl","is.it","isa-geek.com","isa-geek.net","isa-geek.org","isa-hockeynut.com","isa.kagoshima.jp","isa.us","isahaya.nagasaki.jp","ise.mie.jp","isehara.kanagawa.jp","isen.kagoshima.jp","isernia.it","iserv.dev","iserv.host","iservschule.de","isesaki.gunma.jp","ishigaki.okinawa.jp","ishikari.hokkaido.jp","ishikawa.fukushima.jp","ishikawa.jp","ishikawa.okinawa.jp","ishinomaki.miyagi.jp","isla.pr","ismaili","ispmanager.name","israelcentral-01.azurewebsites.net","israelnorthwest-01.azurewebsites.net","isshiki.aichi.jp","issmarterthanyou.com","ist","istanbul","isteingeek.de","istmein.de","isumi.chiba.jp","it","it.ao","it.bd","it.com","it.eu.org","it.kr","it1.eur.aruba.jenv-aruba.cloud","it1.jenv-aruba.cloud","itabashi.tokyo.jp","itako.ibaraki.jp","itakura.gunma.jp","italynorth-01.azurewebsites.net","itami.hyogo.jp","itano.tokushima.jp","itau","itayanagi.aomori.jp","itcouldbewor.se","itigo.jp","ito.shizuoka.jp","itoigawa.niigata.jp","itoman.okinawa.jp","its.me","itv","ivano-frankivsk.ua","ivanovo.su","iveland.no","ivgu.no","ivory.ne.jp","iwade.wakayama.jp","iwafune.tochigi.jp","iwaizumi.iwate.jp","iwaki.fukushima.jp","iwakuni.yamaguchi.jp","iwakura.aichi.jp","iwama.ibaraki.jp","iwamizawa.hokkaido.jp","iwanai.hokkaido.jp","iwanuma.miyagi.jp","iwata.shizuoka.jp","iwate.iwate.jp","iwate.jp","iwatsuki.saitama.jp","iwi.nz","iyo.ehime.jp","iz.hr","izena.okinawa.jp","izu.shizuoka.jp","izumi.kagoshima.jp","izumi.osaka.jp","izumiotsu.osaka.jp","izumisano.osaka.jp","izumizaki.fukushima.jp","izumo.shimane.jp","izumozaki.niigata.jp","izunokuni.shizuoka.jp","j.bg","j.layershift.co.uk","j.scaleforce.com.cy","j.scaleforce.net","jab.br","jaguar","jambyl.su","jampa.br","jan-mayen.no","japaneast-01.azurewebsites.net","japanwest-01.azurewebsites.net","java","jaworzno.pl","jc.neen.it","jcb","jcloud-ver-jpc.ik-server.com","jcloud.ik-server.com","jcloud.kz","jdevcloud.com","jdf.br","je","jed.wafaicloud.com","jeep","jeez.jp","jeju.kr","jelastic.dogado.eu","jelastic.saveincloud.net","jelastic.team","jele.cloud","jele.club","jele.host","jele.io","jele.site","jelenia-gora.pl","jellybean.jp","jeonbuk.kr","jeonnam.kr","jessheim.no","jetzt","jevnaker.no","jewelry","jgora.pl","jinsekikogen.hiroshima.jp","jio","jioindiacentral-01.azurewebsites.net","jioindiawest-01.azurewebsites.net","jl.cn","jll","jls-sto1.elastx.net","jls-sto2.elastx.net","jls-sto3.elastx.net","jmp","jnj","jo","joboji.iwate.jp","jobs","joburg","joetsu.niigata.jp","jogasz.hu","johana.toyama.jp","joinmc.link","joinville.br","jolster.no","jondal.no","jor.br","jorpeland.no","joso.ibaraki.jp","jot","jote.cloud","jotelulu.cloud","journal.aero","journalist.aero","jouwweb.site","joy","joyo.kyoto.jp","jozi.biz","jp","jp.eu.org","jp.jp4.object.ncpstorage.com","jp.jp4.object.private.ncpstorage.com","jp.jp5.object.ncpstorage.com","jp.jp5.object.private.ncpstorage.com","jp.net","jp.ngrok.io","jp.object.ncpstorage.com","jp.object.private.ncpstorage.com","jpmorgan","jpn.com","jpn.org","jprs","js.cn","js.org","js.wpenginepowered.com","ju.mp","juegos","jur.pro","jus.br","jx.cn","k.bg","k.se","k12.ak.us","k12.al.us","k12.ar.us","k12.as.us","k12.az.us","k12.ca.us","k12.co.us","k12.ct.us","k12.dc.us","k12.ec","k12.fl.us","k12.ga.us","k12.gu.us","k12.ia.us","k12.id.us","k12.il","k12.il.us","k12.in.us","k12.ks.us","k12.ky.us","k12.la.us","k12.ma.us","k12.md.us","k12.me.us","k12.mi.us","k12.mn.us","k12.mo.us","k12.ms.us","k12.mt.us","k12.nc.us","k12.ne.us","k12.nh.us","k12.nj.us","k12.nm.us","k12.nv.us","k12.ny.us","k12.oh.us","k12.ok.us","k12.or.us","k12.pa.us","k12.pr.us","k12.sc.us","k12.tn.us","k12.tr","k12.tx.us","k12.ut.us","k12.va.us","k12.vi","k12.vi.us","k12.vt.us","k12.wa.us","k12.wi.us","k12.wy.us","k8s.fr-par.scw.cloud","k8s.nl-ams.scw.cloud","k8s.pl-waw.scw.cloud","k8s.scw.cloud","kaas.gg","kadena.okinawa.jp","kadogawa.miyazaki.jp","kadoma.osaka.jp","kafjord.no","kafk.fr-par.scw.cloud","kafk.nl-ams.scw.cloud","kafk.pl-waw.scw.cloud","kaga.ishikawa.jp","kagami.kochi.jp","kagamiishi.fukushima.jp","kagamino.okayama.jp","kagawa.jp","kagoshima.jp","kagoshima.kagoshima.jp","kaho.fukuoka.jp","kahoku.ishikawa.jp","kahoku.yamagata.jp","kai.yamanashi.jp","kainan.tokushima.jp","kainan.wakayama.jp","kaisei.kanagawa.jp","kaita.hiroshima.jp","kaizuka.osaka.jp","kakamigahara.gifu.jp","kakegawa.shizuoka.jp","kakinoki.shimane.jp","kakogawa.hyogo.jp","kakuda.miyagi.jp","kalisz.pl","kalmykia.ru","kalmykia.su","kaluga.su","kamagaya.chiba.jp","kamaishi.iwate.jp","kamakura.kanagawa.jp","kameoka.kyoto.jp","kameyama.mie.jp","kami.kochi.jp","kami.miyagi.jp","kamiamakusa.kumamoto.jp","kamifurano.hokkaido.jp","kamigori.hyogo.jp","kamiichi.toyama.jp","kamiizumi.saitama.jp","kamijima.ehime.jp","kamikawa.hokkaido.jp","kamikawa.hyogo.jp","kamikawa.saitama.jp","kamikitayama.nara.jp","kamikoani.akita.jp","kamimine.saga.jp","kaminokawa.tochigi.jp","kaminoyama.yamagata.jp","kamioka.akita.jp","kamisato.saitama.jp","kamishihoro.hokkaido.jp","kamisu.ibaraki.jp","kamisunagawa.hokkaido.jp","kamitonda.wakayama.jp","kamitsue.oita.jp","kamo.kyoto.jp","kamo.niigata.jp","kamoenai.hokkaido.jp","kamogawa.chiba.jp","kanagawa.jp","kanan.osaka.jp","kanazawa.ishikawa.jp","kanegasaki.iwate.jp","kaneyama.fukushima.jp","kaneyama.yamagata.jp","kani.gifu.jp","kanie.aichi.jp","kanmaki.nara.jp","kanna.gunma.jp","kannami.shizuoka.jp","kanonji.kagawa.jp","kanoya.kagoshima.jp","kanra.gunma.jp","kanuma.tochigi.jp","kanzaki.saga.jp","kapsi.fi","karacol.su","karaganda.su","karasjohka.no","karasjok.no","karasuyama.tochigi.jp","karatsu.saga.jp","karelia.su","kariwa.niigata.jp","kariya.aichi.jp","karlsoy.no","karmoy.no","karpacz.pl","kartuzy.pl","karuizawa.nagano.jp","karumai.iwate.jp","kasahara.gifu.jp","kasai.hyogo.jp","kasama.ibaraki.jp","kasamatsu.gifu.jp","kasaoka.okayama.jp","kashiba.nara.jp","kashihara.nara.jp","kashima.ibaraki.jp","kashima.saga.jp","kashiwa.chiba.jp","kashiwara.osaka.jp","kashiwazaki.niigata.jp","kasserver.com","kasuga.fukuoka.jp","kasuga.hyogo.jp","kasugai.aichi.jp","kasukabe.saitama.jp","kasumigaura.ibaraki.jp","kasuya.fukuoka.jp","kaszuby.pl","katagami.akita.jp","katano.osaka.jp","katashina.gunma.jp","katori.chiba.jp","katowice.pl","katsuragi.nara.jp","katsuragi.wakayama.jp","katsushika.tokyo.jp","katsuura.chiba.jp","katsuyama.fukui.jp","kaufen","kautokeino.no","kawaba.gunma.jp","kawachinagano.osaka.jp","kawagoe.mie.jp","kawagoe.saitama.jp","kawaguchi.saitama.jp","kawahara.tottori.jp","kawai.iwate.jp","kawai.nara.jp","kawaiishop.jp","kawajima.saitama.jp","kawakami.nagano.jp","kawakami.nara.jp","kawakita.ishikawa.jp","kawamata.fukushima.jp","kawaminami.miyazaki.jp","kawanabe.kagoshima.jp","kawanehon.shizuoka.jp","kawanishi.hyogo.jp","kawanishi.nara.jp","kawanishi.yamagata.jp","kawara.fukuoka.jp","kawasaki.miyagi.jp","kawatana.nagasaki.jp","kawaue.gifu.jp","kawazu.shizuoka.jp","kayabe.hokkaido.jp","kazimierz-dolny.pl","kazo.saitama.jp","kazuno.akita.jp","kddi","kdns.fr","ke","keenetic.io","keenetic.link","keenetic.name","keenetic.pro","keisen.fukuoka.jp","keliweb.cloud","kembuchi.hokkaido.jp","kep.tr","kepno.pl","kerryhotels","kerryproperties","ketrzyn.pl","keymachine.de","keyport.wa.us","keyword-on.net","kfh","kg","kg.kr","kh","kh.ua","khakassia.su","khanhhoa.vn","kharkiv.ua","kharkov.ua","kherson.ua","khmelnitskiy.ua","khmelnytskyi.ua","khplay.nl","khsj.cn","ki","kia","kibichuo.okayama.jp","kicks-ass.net","kicks-ass.org","kids","kiengiang.vn","kiev.ua","kiho.mie.jp","kihoku.ehime.jp","kijo.miyazaki.jp","kikirara.jp","kikonai.hokkaido.jp","kikuchi.kumamoto.jp","kikugawa.shizuoka.jp","kill.jp","kilo.jp","kiloapps.ai","kiloapps.io","kim","kimino.wakayama.jp","kimitsu.chiba.jp","kimobetsu.hokkaido.jp","kin.okinawa.jp","kindle","kinghost.net","kingston.wa.us","kinko.kagoshima.jp","kinokawa.wakayama.jp","kira.aichi.jp","kirara.st","kirkenes.no","kirovograd.ua","kiryu.gunma.jp","kisarazu.chiba.jp","kishiwada.osaka.jp","kiso.nagano.jp","kisofukushima.nagano.jp","kisosaki.mie.jp","kita.kyoto.jp","kita.osaka.jp","kita.tokyo.jp","kitaaiki.nagano.jp","kitaakita.akita.jp","kitadaito.okinawa.jp","kitagata.gifu.jp","kitagata.saga.jp","kitagawa.kochi.jp","kitagawa.miyazaki.jp","kitahata.saga.jp","kitahiroshima.hokkaido.jp","kitakami.iwate.jp","kitakata.fukushima.jp","kitakata.miyazaki.jp","kitami.hokkaido.jp","kitamoto.saitama.jp","kitanakagusuku.okinawa.jp","kitashiobara.fukushima.jp","kitaura.miyazaki.jp","kitayama.wakayama.jp","kitchen","kiwa.mie.jp","kiwi","kiwi.nz","kiyama.saga.jp","kiyokawa.kanagawa.jp","kiyosato.hokkaido.jp","kiyose.tokyo.jp","kiyosu.aichi.jp","kizu.kyoto.jp","klabu.no","klepp.no","kliv.site","klodzko.pl","km","km.ua","kmpsp.gov.pl","kn","knowsitall.info","knx-server.net","kobayashi.miyazaki.jp","kobierzyce.pl","kochi.jp","kochi.kochi.jp","kodaira.tokyo.jp","koeln","kofu.yamanashi.jp","koga.fukuoka.jp","koga.ibaraki.jp","koganei.tokyo.jp","koge.tottori.jp","koka.shiga.jp","kokonoe.oita.jp","kokubunji.tokyo.jp","kolobrzeg.pl","komae.tokyo.jp","komagane.nagano.jp","komaki.aichi.jp","komatsu","komatsu.ishikawa.jp","komatsushima.tokushima.jp","komforb.se","kommunalforbund.se","kommune.no","komono.mie.jp","komoro.nagano.jp","komvux.se","konan.aichi.jp","konan.shiga.jp","kongsberg.no","kongsvinger.no","konin.pl","konskowola.pl","konsulat.gov.pl","kontum.vn","konyvelo.hu","koobin.events","koori.fukushima.jp","kop.id","kopervik.no","koreacentral-01.azurewebsites.net","koreasouth-01.azurewebsites.net","koriyama.fukushima.jp","koryo.nara.jp","kosai.shizuoka.jp","kosaka.akita.jp","kosei.shiga.jp","kosher","koshigaya.saitama.jp","koshimizu.hokkaido.jp","koshu.yamanashi.jp","kosuge.yamanashi.jp","kota.aichi.jp","koto.shiga.jp","koto.tokyo.jp","kotohira.kagawa.jp","kotoura.tottori.jp","kouhoku.saga.jp","kounosu.saitama.jp","kouyama.kagoshima.jp","kouzushima.tokyo.jp","koya.wakayama.jp","koza.wakayama.jp","kozagawa.wakayama.jp","kozaki.chiba.jp","kozow.com","kp","kpmg","kpn","kppsp.gov.pl","kr","kr-naver-dev.ncloudstorage.com","kr-naver-dev.website.ncloudstorage.com","kr-naver.ncloudstorage.com","kr-naver.website.ncloudstorage.com","kr-private.gov-ncloudstorage.com","kr-private.ncloudstorage.com","kr.eu.org","kr.gov-ncloudstorage.com","kr.it","kr.ncloudstorage.com","kr.object.fin-ncloudstorage.com","kr.object.gov-ncloudstorage.com","kr.object.ncloudstorage.com","kr.object.ncpstorage.com","kr.object.private.fin-ncloudstorage.com","kr.object.private.gov-ncloudstorage.com","kr.object.private.ncloudstorage.com","kr.object.private.ncpstorage.com","kr.objectstorage.ncloud.com","kr.ua","kr.website.ncloudstorage.com","kraanghke.no","kragero.no","krakow.pl","krasnik.pl","krasnodar.su","krd","kred","krellian.net","kristiansand.no","kristiansund.no","krodsherad.no","krokstadelva.no","kropyvnytskyi.ua","krs.object.gov-ncloudstorage.com","krs.object.private.gov-ncloudstorage.com","krym.ua","ks.ua","ks.us","kuchinotsu.nagasaki.jp","kudamatsu.yamaguchi.jp","kudoyama.wakayama.jp","kui.hiroshima.jp","kuji.iwate.jp","kuju.oita.jp","kujukuri.chiba.jp","kuki.saitama.jp","kuleuven.cloud","kumagaya.saitama.jp","kumakogen.ehime.jp","kumamoto.jp","kumamoto.kumamoto.jp","kumano.hiroshima.jp","kumano.mie.jp","kumatori.osaka.jp","kumejima.okinawa.jp","kumenan.okayama.jp","kumiyama.kyoto.jp","kunigami.okinawa.jp","kunimi.fukushima.jp","kunisaki.oita.jp","kunitachi.tokyo.jp","kunitomi.miyazaki.jp","kunneppu.hokkaido.jp","kunohe.iwate.jp","kuokgroup","kurashiki.okayama.jp","kurate.fukuoka.jp","kure.hiroshima.jp","kurgan.su","kuriyama.hokkaido.jp","kurobe.toyama.jp","kurogi.fukuoka.jp","kuroishi.aomori.jp","kuroiso.tochigi.jp","kuromatsunai.hokkaido.jp","kuron.jp","kurotaki.nara.jp","kurume.fukuoka.jp","kusatsu.gunma.jp","kusatsu.shiga.jp","kushima.miyazaki.jp","kushimoto.wakayama.jp","kushiro.hokkaido.jp","kustanai.ru","kustanai.su","kusu.oita.jp","kutchan.hokkaido.jp","kutno.pl","kuwana.mie.jp","kuzumaki.iwate.jp","kv.ua","kvafjord.no","kvalsund.no","kvam.no","kvanangen.no","kvinesdal.no","kvinnherad.no","kviteseid.no","kvitsoy.no","kw","kwp.gov.pl","kwpsp.gov.pl","ky","ky.us","kyiv.ua","kyonan.chiba.jp","kyotamba.kyoto.jp","kyotanabe.kyoto.jp","kyotango.kyoto.jp","kyoto","kyoto.jp","kyowa.akita.jp","kyowa.hokkaido.jp","kyuragi.saga.jp","kz","l-o-g-i-n.de","l.bg","l.se","la","la-spezia.it","la.us","la1-plenit.com","laakesvuemie.no","labeling.ap-northeast-1.sagemaker.aws","labeling.ap-northeast-2.sagemaker.aws","labeling.ap-south-1.sagemaker.aws","labeling.ap-southeast-1.sagemaker.aws","labeling.ap-southeast-2.sagemaker.aws","labeling.ca-central-1.sagemaker.aws","labeling.eu-central-1.sagemaker.aws","labeling.eu-west-1.sagemaker.aws","labeling.eu-west-2.sagemaker.aws","labeling.us-east-1.sagemaker.aws","labeling.us-east-2.sagemaker.aws","labeling.us-west-2.sagemaker.aws","lacaixa","ladesk.com","lahppi.no","laichau.vn","lakas.hu","lambda-url.af-south-1.on.aws","lambda-url.ap-east-1.on.aws","lambda-url.ap-northeast-1.on.aws","lambda-url.ap-northeast-2.on.aws","lambda-url.ap-northeast-3.on.aws","lambda-url.ap-south-1.on.aws","lambda-url.ap-southeast-1.on.aws","lambda-url.ap-southeast-2.on.aws","lambda-url.ap-southeast-3.on.aws","lambda-url.ca-central-1.on.aws","lambda-url.eu-central-1.on.aws","lambda-url.eu-north-1.on.aws","lambda-url.eu-south-1.on.aws","lambda-url.eu-west-1.on.aws","lambda-url.eu-west-2.on.aws","lambda-url.eu-west-3.on.aws","lambda-url.me-south-1.on.aws","lambda-url.sa-east-1.on.aws","lambda-url.us-east-1.on.aws","lambda-url.us-east-2.on.aws","lambda-url.us-west-1.on.aws","lambda-url.us-west-2.on.aws","lamborghini","lamdong.vn","lamer","lanbib.se","land","land-4-sale.us","landrover","langevag.no","langson.vn","lanxess","laocai.vn","lapy.pl","laquila.it","laravel.cloud","lardal.no","larvik.no","lasalle","laspezia.it","lat","lat.ec","latina.it","latino","latrobe","lavagis.no","lavangen.no","law","law.pro","law.za","lawyer","laz.it","lazio.it","lb","lb.ru-msk.k2.cloud","lb.ru-spb.k2.cloud","lc","lc.it","lcube-server.de","lds","le.it","leadpages.co","leangaviika.no","leapcell.app","leapcell.dev","leapcell.online","lease","leasing.aero","lebesby.no","lebork.pl","lebtimnetz.de","lecce.it","lecco.it","leclerc","leczna.pl","lefrak","leg.br","legal","legnica.pl","lego","leikanger.no","leilao.br","leirfjord.no","leirvik.no","leitungsen.de","leka.no","leksvik.no","lel.br","lenug.su","lenvik.no","lerdal.no","lesja.no","levanger.no","lexus","lezajsk.pl","lg.biz.ng","lg.jp","lg.ua","lgbt","li","li.it","liara.run","lib.ak.us","lib.al.us","lib.ar.us","lib.as.us","lib.az.us","lib.ca.us","lib.co.us","lib.ct.us","lib.dc.us","lib.ee","lib.fl.us","lib.ga.us","lib.gu.us","lib.hi.us","lib.ia.us","lib.id.us","lib.il.us","lib.in.us","lib.ks.us","lib.ky.us","lib.la.us","lib.ma.us","lib.md.us","lib.me.us","lib.mi.us","lib.mn.us","lib.mo.us","lib.mt.us","lib.nc.us","lib.ne.us","lib.nh.us","lib.nj.us","lib.nm.us","lib.nv.us","lib.ny.us","lib.oh.us","lib.ok.us","lib.or.us","lib.pa.us","lib.pr.us","lib.ri.us","lib.sc.us","lib.sd.us","lib.tn.us","lib.tx.us","lib.ut.us","lib.va.us","lib.vi.us","lib.vt.us","lib.wa.us","lib.wi.us","lib.wy.us","libp2p.direct","lidl","lier.no","lierne.no","life","lifeinsurance","lifestyle","lig.it","lighting","liguria.it","like","likes-pie.com","likescandy.com","lillehammer.no","lillesand.no","lilly","lima-city.at","lima-city.ch","lima-city.de","lima-city.rocks","lima.zone","limanowa.pl","limited","limo","lincoln","lindas.no","lindesnes.no","link","linkyard-cloud.ch","linkyard.cloud","linkyhost.page","littlestar.jp","live","live-on.net","live-website.com","living","livorno.it","lk","llc","llc.ge","llp","ln.cn","lo.it","loabat.no","loan","loans","loc.cc","localcert.net","localplayer.dev","localtonet.com","locker","locus","lodi.it","lodingen.no","lodz.pl","log.br","loginline.app","loginline.dev","loginline.io","loginline.services","loginline.site","loginto.me","logistics.aero","logoip.com","logoip.de","lohmus.me","loisirs.bj","loj.ec","lol","lolipop.io","lolipopmc.jp","lolitapunk.jp","lom.it","lom.no","lombardia.it","lombardy.it","lomo.jp","lomza.pl","lon-1.paas.massivegrid.net","lon-2.paas.massivegrid.net","london","londrina.br","longan.vn","loppa.no","lorenskog.no","loseyourip.com","loten.no","lotte","lotto","lovable.app","lovable.run","lovable.sh","lovableproject.com","love","lovepop.jp","lovesick.jp","lowicz.pl","lp.dev","lpages.co","lpg.objectstorage.ch","lpl","lplfinancial","lpusercontent.com","lr","ls","lt","lt.eu.org","lt.it","lt.ua","ltd","ltd.co.im","ltd.cy","ltd.gi","ltd.hk","ltd.lk","ltd.ng","ltd.ua","ltd.uk","ltda","lu","lu.eu.org","lu.it","lubartow.pl","lubin.pl","lublin.pl","lucania.it","lucca.it","lug.org.uk","lugansk.ua","lugs.org.uk","luhansk.ua","lukow.pl","lund.no","lundbeck","lunner.no","luroy.no","luster.no","lutsk.ua","luxe","luxury","luyani.app","luyani.net","lv","lv.eu.org","lv.ua","lviv.ua","ly","lyngdal.no","lyngen.no","lynx.mythic-beasts.com","m.bg","m.se","ma","ma.gov.br","ma.leg.br","ma.us","macapa.br","maceio.br","macerata.it","machida.tokyo.jp","madethis.site","madrid","maebashi.gunma.jp","mafelo.net","magazine.aero","magicpatterns.app","magicpatternsapp.com","maibara.shiga.jp","maif","mail-box.ne.jp","mail.pl","mailerpage.io","main.jp","maintenance.aero","maison","maizuru.kyoto.jp","makeup","makinohara.shizuoka.jp","makurazaki.kagoshima.jp","malatvuopmi.no","malaysiawest-01.azurewebsites.net","malbork.pl","malopolska.pl","malselv.no","malvik.no","mamurogawa.yamagata.jp","man","management","manaus.br","mandal.no","mango","mangyshlak.su","maniwa.okayama.jp","manno.kagawa.jp","mantova.it","manus.space","maori.nz","map","map.fastly.net","map.fastlylb.net","mar.it","marche.it","marine.ru","maringa.br","marker.no","market","marketing","marketplace.aero","markets","marnardal.no","marriott","marshalls","marugame.kagawa.jp","marumori.miyagi.jp","masaki.ehime.jp","masfjorden.no","mashike.hokkaido.jp","mashiki.kumamoto.jp","mashiko.tochigi.jp","masoy.no","massa-carrara.it","massacarrara.it","masuda.shimane.jp","mat.br","matera.it","matlab.cloud","matrix.jp","matsubara.osaka.jp","matsubushi.saitama.jp","matsuda.kanagawa.jp","matsudo.chiba.jp","matsue.shimane.jp","matsukawa.nagano.jp","matsumae.hokkaido.jp","matsumoto.kagoshima.jp","matsumoto.nagano.jp","matsuno.ehime.jp","matsusaka.mie.jp","matsushige.tokushima.jp","matsushima.miyagi.jp","matsuura.nagasaki.jp","matsuyama.ehime.jp","matsuzaki.shizuoka.jp","matta-varjjat.no","mattel","mayfirst.info","mazowsze.pl","mazury.pl","mb.ca","mb.it","mba","mc","mc.it","mcdir.me","mcdir.ru","mckinsey","mcpre.ru","md","md.us","me","me-central-1.elasticbeanstalk.com","me-south-1.elasticbeanstalk.com","me.eg","me.eu.org","me.in","me.it","me.ke","me.kr","me.scot","me.so","me.ss","me.tz","me.uk","me.us","med","med.br","med.ec","med.ee","med.ht","med.ly","med.om","med.pa","med.pl","med.pro","med.sa","med.sd","medecin.fr","medecin.km","media","media.aero","media.hu","media.pl","media.strapiapp.com","mediatech.by","mediatech.dev","medicina.bo","medio-campidano.it","mediocampidano.it","medusajs.app","medusajs.site","meet","meguro.tokyo.jp","mein-iserv.de","meinforum.net","meiwa.gunma.jp","meiwa.mie.jp","mel.cloudlets.com.au","meland.no","melbourne","meldal.no","melhus.no","meloy.no","members.linode.com","meme","memorial","memset.net","men","menu","meraker.no","merck","merckmsd","merseine.nu","messerli.app","messina.it","messwithdns.com","meteorapp.com","mex.com","mexicocentral-01.azurewebsites.net","mg","mg.gov.br","mg.leg.br","mgdb.fr-par.scw.cloud","mgdb.nl-ams.scw.cloud","mgdb.pl-waw.scw.cloud","mh","mi.it","mi.th","mi.us","miami","miasa.nagano.jp","miasta.pl","mibu.tochigi.jp","microlight.aero","microsoft","midori.chiba.jp","midori.gunma.jp","midsund.no","midtre-gauldal.no","mie.jp","mielec.pl","mielno.pl","mifune.kumamoto.jp","mihama.aichi.jp","mihama.chiba.jp","mihama.fukui.jp","mihama.mie.jp","mihama.wakayama.jp","mihara.hiroshima.jp","mihara.kochi.jp","miharu.fukushima.jp","miho.ibaraki.jp","mikasa.hokkaido.jp","mikawa.yamagata.jp","miki.hyogo.jp","mil","mil.ac","mil.ae","mil.al","mil.ar","mil.az","mil.ba","mil.bd","mil.bo","mil.br","mil.by","mil.cl","mil.cn","mil.co","mil.cy","mil.do","mil.ec","mil.eg","mil.fj","mil.gh","mil.gt","mil.hn","mil.id","mil.in","mil.io","mil.iq","mil.jo","mil.kg","mil.km","mil.kr","mil.kz","mil.lv","mil.mg","mil.mv","mil.my","mil.mz","mil.ng","mil.ni","mil.no","mil.nz","mil.pe","mil.ph","mil.pl","mil.py","mil.qa","mil.ru","mil.rw","mil.sh","mil.st","mil.sy","mil.tj","mil.tm","mil.to","mil.tr","mil.tt","mil.tw","mil.tz","mil.ug","mil.uy","mil.vc","mil.ve","mil.ye","mil.za","mil.zm","mil.zw","milan.it","milano.it","mima.tokushima.jp","mimata.miyazaki.jp","mimoza.jp","minakami.gunma.jp","minamata.kumamoto.jp","minami-alps.yamanashi.jp","minami.fukuoka.jp","minami.kyoto.jp","minami.tokushima.jp","minamiaiki.nagano.jp","minamiashigara.kanagawa.jp","minamiawaji.hyogo.jp","minamiboso.chiba.jp","minamidaito.okinawa.jp","minamiechizen.fukui.jp","minamifurano.hokkaido.jp","minamiise.mie.jp","minamiizu.shizuoka.jp","minamimaki.nagano.jp","minamiminowa.nagano.jp","minamioguni.kumamoto.jp","minamisanriku.miyagi.jp","minamitane.kagoshima.jp","minamiuonuma.niigata.jp","minamiyamashiro.kyoto.jp","minano.saitama.jp","minato.osaka.jp","minato.tokyo.jp","mincom.tn","mine.nu","mini","miniserver.com","minisite.ms","mino.gifu.jp","minobu.yamanashi.jp","minoh.osaka.jp","minokamo.gifu.jp","minowa.nagano.jp","mint","mints.ne.jp","mircloud.host","mircloud.ru","mircloud.us","miren.app","miren.systems","misaki.okayama.jp","misaki.osaka.jp","misasa.tottori.jp","misato.akita.jp","misato.miyagi.jp","misato.saitama.jp","misato.shimane.jp","misato.wakayama.jp","misawa.aomori.jp","misconfused.org","mishima.fukushima.jp","mishima.shizuoka.jp","misugi.mie.jp","mit","mitaka.tokyo.jp","mitake.gifu.jp","mitane.akita.jp","mito.ibaraki.jp","mitou.yamaguchi.jp","mitoyo.kagawa.jp","mitsubishi","mitsue.nara.jp","mitsuke.niigata.jp","mittwald.info","mittwaldserver.info","miura.kanagawa.jp","miyada.nagano.jp","miyagi.jp","miyake.nara.jp","miyako.fukuoka.jp","miyako.iwate.jp","miyakonojo.miyazaki.jp","miyama.fukuoka.jp","miyama.mie.jp","miyashiro.saitama.jp","miyawaka.fukuoka.jp","miyazaki.jp","miyazaki.miyazaki.jp","miyazu.kyoto.jp","miyoshi.aichi.jp","miyoshi.hiroshima.jp","miyoshi.saitama.jp","miyoshi.tokushima.jp","miyota.nagano.jp","mizuho.tokyo.jp","mizumaki.fukuoka.jp","mizunami.gifu.jp","mizusawa.iwate.jp","mjondalen.no","mk","mk.eu.org","mk.ua","mkm.fan","mktg.ec","ml","mlb","mlbfan.org","mls","mma","mmafan.biz","mmv.kr","mn","mn.it","mn.us","mo","mo-i-rana.no","mo-siemens.io","mo.cn","mo.it","mo.us","moareke.no","mobara.chiba.jp","mobi","mobi.gp","mobi.ke","mobi.ng","mobi.tz","mobile","mocha-sandbox.dev","mocha.app","mochausercontent.com","mochizuki.nagano.jp","mock.pstmn.io","mod.gi","moda","modalen.no","modelence.app","modelling.aero","modelscape.com","modena.it","mods.jp","modum.no","modx.dev","moe","moi","moka.tochigi.jp","mokuren.ne.jp","mol.it","molde.no","molise.it","mom","mombetsu.hokkaido.jp","mon.ec","monash","mond.jp","money","money.bj","mongolian.jp","monster","monza-brianza.it","monza-e-della-brianza.it","monza.it","monzabrianza.it","monzaebrianza.it","monzaedellabrianza.it","moo.jp","moonscale.net","mordovia.ru","mordovia.su","morena.br","moriguchi.osaka.jp","morimachi.shizuoka.jp","morioka.iwate.jp","moriya.ibaraki.jp","moriyama.shiga.jp","moriyoshi.akita.jp","mormon","morotsuka.miyazaki.jp","moroyama.saitama.jp","mortgage","moscow","moseushi.hokkaido.jp","mosjoen.no","moskenes.no","moss.no","motegi.tochigi.jp","moto","motobu.okinawa.jp","motorcycles","motosu.gifu.jp","motoyama.kochi.jp","mov","movie","movimiento.bo","mp","mp.br","mq","mr","mr.no","mragowo.pl","mrap.accesspoint.s3-global.amazonaws.com","ms","ms.fun","ms.gov.br","ms.it","ms.kr","ms.leg.br","ms.show","ms.us","msd","msk.ru","msk.su","mt","mt.eu.org","mt.gov.br","mt.it","mt.leg.br","mt.us","mtn","mtr","mu","mugi.tokushima.jp","muika.niigata.jp","mukawa.hokkaido.jp","muko.kyoto.jp","munakata.fukuoka.jp","muni.il","muosat.no","mup.gov.pl","murakami.niigata.jp","murata.miyagi.jp","murayama.yamagata.jp","murmansk.su","muroran.hokkaido.jp","muroto.kochi.jp","mus.br","mus.mi.us","musashimurayama.tokyo.jp","musashino.tokyo.jp","museum","museum.mv","museum.no","museum.om","music","musica.ar","musica.bo","musician.io","mutsu.aomori.jp","mutsuzawa.chiba.jp","mutual.ar","mv","mw","mw.gov.pl","mwcloudnonprod.com","mx","my","my-firewall.org","my-gateway.de","my-router.de","my.at","my.be","my.canva.site","my.canvasite.cn","my.de","my.eu.org","my.id","myactivedirectory.com","myaddr.dev","myaddr.io","myaddr.tools","myamaze.net","myasustor.com","mybox.company","mybox.me","mybox.page","mycloudnas.com","mydatto.com","mydatto.net","mydbserver.com","myddns.rocks","mydissent.net","mydns.bz","mydns.jp","mydns.tw","mydns.vc","mydobiss.com","myds.me","myeffect.net","myfast.host","myfast.space","myfirewall.org","myforum.community","myfritz.link","myfritz.net","myftp.biz","myftp.org","mygov.scot","myhome-server.de","myiphost.com","myjino.ru","mykolaiv.ua","mymagic.page","mymailer.com.tw","mymediapc.net","mynascloud.com","myoko.niigata.jp","myoxypages.com","mypep.link","mypets.ws","myphotos.cc","mypi.co","mypsx.net","myqnapcloud.cn","myqnapcloud.com","myradweb.net","myrdbx.io","mysecuritycamera.com","mysecuritycamera.net","mysecuritycamera.org","myshopblocks.com","myshopify.com","myspreadshop.at","myspreadshop.be","myspreadshop.ca","myspreadshop.ch","myspreadshop.co.uk","myspreadshop.com","myspreadshop.com.au","myspreadshop.de","myspreadshop.dk","myspreadshop.es","myspreadshop.fi","myspreadshop.fr","myspreadshop.ie","myspreadshop.it","myspreadshop.net","myspreadshop.nl","myspreadshop.no","myspreadshop.pl","myspreadshop.se","mysynology.net","mytabit.co.il","mytabit.com","mytis.ru","mytuleap.com","myvnc.com","mywire.org","mz","n.bg","n.se","na","na.it","na4u.ru","naamesjevuemie.no","nab","nabari.mie.jp","nachikatsuura.wakayama.jp","nagahama.shiga.jp","nagai.yamagata.jp","nagano.jp","nagano.nagano.jp","naganohara.gunma.jp","nagaoka.niigata.jp","nagaokakyo.kyoto.jp","nagara.chiba.jp","nagareyama.chiba.jp","nagasaki.jp","nagasaki.nagasaki.jp","nagasu.kumamoto.jp","nagato.yamaguchi.jp","nagatoro.saitama.jp","nagawa.nagano.jp","nagi.okayama.jp","nagiso.nagano.jp","nago.okinawa.jp","nagoya","naha.okinawa.jp","nahari.kochi.jp","naie.hokkaido.jp","naka.hiroshima.jp","naka.ibaraki.jp","nakadomari.aomori.jp","nakagawa.fukuoka.jp","nakagawa.hokkaido.jp","nakagawa.nagano.jp","nakagawa.tokushima.jp","nakagusuku.okinawa.jp","nakagyo.kyoto.jp","nakai.kanagawa.jp","nakama.fukuoka.jp","nakamichi.yamanashi.jp","nakamura.kochi.jp","nakaniikawa.toyama.jp","nakano.nagano.jp","nakano.tokyo.jp","nakanojo.gunma.jp","nakanoto.ishikawa.jp","nakasatsunai.hokkaido.jp","nakatane.kagoshima.jp","nakatombetsu.hokkaido.jp","nakatsugawa.gifu.jp","nakayama.yamagata.jp","nakijin.okinawa.jp","naklo.pl","nalchik.ru","nalchik.su","namaste.jp","namdalseid.no","namdinh.vn","name","name.az","name.eg","name.et","name.fj","name.hr","name.mk","name.mv","name.my","name.ng","name.pm","name.pr","name.qa","name.tj","name.tr","name.tt","name.vn","namegata.ibaraki.jp","namegawa.saitama.jp","namerikawa.toyama.jp","namie.fukushima.jp","namikata.ehime.jp","namsos.no","namsskogan.no","nanae.hokkaido.jp","nanao.ishikawa.jp","nanbu.tottori.jp","nanbu.yamanashi.jp","nango.fukushima.jp","nanjo.okinawa.jp","nankoku.kochi.jp","nanmoku.gunma.jp","nannestad.no","nanporo.hokkaido.jp","nantan.kyoto.jp","nanto.toyama.jp","nanyo.yamagata.jp","naoshima.kagawa.jp","naples.it","napoli.it","nara.jp","nara.nara.jp","narashino.chiba.jp","narita.chiba.jp","naroy.no","narusawa.yamanashi.jp","naruto.tokushima.jp","narviika.no","narvik.no","nasu.tochigi.jp","nasushiobara.tochigi.jp","nat.cu","nat.tn","natal.br","natori.miyagi.jp","natural.bo","naturbruksgymn.se","naustdal.no","navigation.aero","navoi.su","navuotna.no","navy","nayoro.hokkaido.jp","nb.ca","nba","nc","nc.tr","nc.us","nd.us","ne","ne.jp","ne.ke","ne.kr","ne.tz","ne.ug","ne.us","neat-url.com","nec","nedre-eiker.no","needle.run","nemuro.hokkaido.jp","nerdpol.ovh","nerima.tokyo.jp","nes.akershus.no","nes.buskerud.no","nesna.no","nesodden.no","nesoddtangen.no","nesseby.no","nesset.no","net","net-freaks.com","net.ac","net.ae","net.af","net.ag","net.ai","net.al","net.am","net.ar","net.au","net.az","net.ba","net.bb","net.bd","net.bh","net.bj","net.bm","net.bn","net.bo","net.br","net.bs","net.bt","net.bw","net.bz","net.ci","net.cm","net.cn","net.co","net.cu","net.cv","net.cw","net.cy","net.dm","net.do","net.dz","net.ec","net.eg","net.et","net.eu.org","net.fj","net.fm","net.ge","net.gg","net.gh","net.gl","net.gn","net.gp","net.gr","net.gt","net.gu","net.gy","net.hk","net.hn","net.ht","net.id","net.il","net.im","net.in","net.io","net.iq","net.ir","net.je","net.jo","net.kg","net.kh","net.ki","net.kn","net.kw","net.ky","net.kz","net.la","net.lb","net.lc","net.lk","net.lr","net.ls","net.lv","net.ly","net.ma","net.me","net.mk","net.ml","net.mo","net.ms","net.mt","net.mu","net.mv","net.mw","net.mx","net.my","net.mz","net.na","net.nf","net.ng","net.ni","net.nr","net.nz","net.om","net.pa","net.pe","net.ph","net.pk","net.pl","net.pn","net.pr","net.ps","net.pt","net.py","net.qa","net.ru","net.rw","net.sa","net.sb","net.sc","net.sd","net.sg","net.sh","net.sl","net.so","net.ss","net.st","net.sy","net.th","net.tj","net.tm","net.tn","net.to","net.tr","net.tt","net.tw","net.ua","net.uk","net.uy","net.uz","net.vc","net.ve","net.vi","net.vn","net.vu","net.ws","net.ye","net.za","net.zm","netbank","netflix","netgamers.jp","netlib.re","netlify.app","nett.to","network","neustar","new","news","news.hu","newzealandnorth-01.azurewebsites.net","next","nextdirect","nexus","neyagawa.osaka.jp","nf","nf.ca","nfl","nflfan.org","nfshost.com","ng","ng.eu.org","nghean.vn","ngo","ngo.lk","ngo.ng","ngo.ph","ngo.us","ngo.za","ngrok-free.app","ngrok-free.dev","ngrok.app","ngrok.dev","ngrok.io","ngrok.pizza","ngrok.pro","nh-serv.co.uk","nh.us","nhk","nhlfan.net","nhs.uk","ni","nic.in","nic.tj","nic.za","nichinan.miyazaki.jp","nichinan.tottori.jp","nico","nieruchomosci.pl","niigata.jp","niigata.niigata.jp","niihama.ehime.jp","niikappu.hokkaido.jp","niimi.okayama.jp","niiza.saitama.jp","nikaho.akita.jp","nike","niki.hokkaido.jp","nikita.jp","nikko.tochigi.jp","nikolaev.ua","nikon","nimsite.uk","ninhbinh.vn","ninhthuan.vn","ninja","ninjaneer-sites.com","ninohe.iwate.jp","ninomiya.kanagawa.jp","nippy.site","nirasaki.yamanashi.jp","nis.za","nishi.fukuoka.jp","nishi.osaka.jp","nishiaizu.fukushima.jp","nishiarita.saga.jp","nishiawakura.okayama.jp","nishiazai.shiga.jp","nishigo.fukushima.jp","nishihara.kumamoto.jp","nishihara.okinawa.jp","nishiizu.shizuoka.jp","nishikata.tochigi.jp","nishikatsura.yamanashi.jp","nishikawa.yamagata.jp","nishimera.miyazaki.jp","nishinomiya.hyogo.jp","nishinoomote.kagoshima.jp","nishinoshima.shimane.jp","nishio.aichi.jp","nishiokoppe.hokkaido.jp","nishitosa.kochi.jp","nishiwaki.hyogo.jp","nissan","nissay","nissedal.no","nisshin.aichi.jp","niteroi.br","nittedal.no","niyodogawa.kochi.jp","nj.us","njs.jelastic.vps-host.net","nl","nl-ams-1.baremetal.scw.cloud","nl.ca","nl.eu.org","nl.no","nm.cn","nm.us","no","no-ip.biz","no-ip.ca","no-ip.co.uk","no-ip.info","no-ip.net","no-ip.org","no.eu.org","no.it","nobeoka.miyazaki.jp","noboribetsu.hokkaido.jp","nobushi.jp","noda.chiba.jp","noda.iwate.jp","nodes.k8s.fr-par.scw.cloud","nodes.k8s.nl-ams.scw.cloud","nodes.k8s.pl-waw.scw.cloud","nog.community","nogata.fukuoka.jp","nogi.tochigi.jp","noheji.aomori.jp","noho.st","nohost.me","noip.me","noip.us","nokia","nom.ag","nom.co","nom.es","nom.fr","nom.io","nom.km","nom.mg","nom.nc","nom.ni","nom.pa","nom.pe","nom.pl","nom.ro","nom.tm","nom.ve","nom.za","nombre.bo","nome.cv","nome.pt","nomi.ishikawa.jp","nonoichi.ishikawa.jp","noop.app","noor.jp","nord-aurdal.no","nord-fron.no","nord-odal.no","norddal.no","nordeste-idc.saveincloud.net","nordkapp.no","nordre-land.no","nordreisa.no","nore-og-uvdal.no","north-kazakhstan.su","northcentralus-01.azurewebsites.net","northcentralusstage-01.azurewebsites.net","northeastus5-01.azurewebsites.net","northeurope-01.azurewebsites.net","norton","norwayeast-01.azurewebsites.net","norwaywest-01.azurewebsites.net","nose.osaka.jp","nosegawa.nara.jp","noshiro.akita.jp","not.br","notaires.fr","notaires.km","notebook-fips.ca-central-1.sagemaker.aws","notebook-fips.ca-west-1.sagemaker.aws","notebook-fips.us-east-1.sagemaker.aws","notebook-fips.us-east-2.sagemaker.aws","notebook-fips.us-gov-east-1.sagemaker.aws","notebook-fips.us-gov-west-1.sagemaker.aws","notebook-fips.us-west-1.sagemaker.aws","notebook-fips.us-west-2.sagemaker.aws","notebook.af-south-1.sagemaker.aws","notebook.ap-east-1.sagemaker.aws","notebook.ap-northeast-1.sagemaker.aws","notebook.ap-northeast-2.sagemaker.aws","notebook.ap-northeast-3.sagemaker.aws","notebook.ap-south-1.sagemaker.aws","notebook.ap-south-2.sagemaker.aws","notebook.ap-southeast-1.sagemaker.aws","notebook.ap-southeast-2.sagemaker.aws","notebook.ap-southeast-3.sagemaker.aws","notebook.ap-southeast-4.sagemaker.aws","notebook.ca-central-1.sagemaker.aws","notebook.ca-west-1.sagemaker.aws","notebook.cn-north-1.sagemaker.com.cn","notebook.cn-northwest-1.sagemaker.com.cn","notebook.eu-central-1.sagemaker.aws","notebook.eu-central-2.sagemaker.aws","notebook.eu-north-1.sagemaker.aws","notebook.eu-south-1.sagemaker.aws","notebook.eu-south-2.sagemaker.aws","notebook.eu-west-1.sagemaker.aws","notebook.eu-west-2.sagemaker.aws","notebook.eu-west-3.sagemaker.aws","notebook.il-central-1.sagemaker.aws","notebook.me-central-1.sagemaker.aws","notebook.me-south-1.sagemaker.aws","notebook.sa-east-1.sagemaker.aws","notebook.us-east-1.sagemaker.aws","notebook.us-east-2.sagemaker.aws","notebook.us-gov-east-1.sagemaker.aws","notebook.us-gov-west-1.sagemaker.aws","notebook.us-west-1.sagemaker.aws","notebook.us-west-2.sagemaker.aws","noticeable.news","noticias.bo","notion.site","noto.ishikawa.jp","notodden.no","notogawa.shiga.jp","notteroy.no","nov.ru","nov.su","novara.it","novecore.site","now","now-dns.net","now-dns.org","now.sh","nowaruda.pl","nowruz","nowtv","nozawaonsen.nagano.jp","nr","nra","nrw","ns.ca","nsn.us","nsupdate.info","nsw.au","nsw.edu.au","nt.au","nt.ca","nt.edu.au","nt.no","nt.ro","ntdll.top","ntr.br","ntr.ec","ntt","nu","nu.ca","nu.it","numata.gunma.jp","numata.hokkaido.jp","numazu.shizuoka.jp","nuoro.it","nv.us","nx.cn","nx.gw","ny-1.paas.massivegrid.net","ny-2.paas.massivegrid.net","ny.us","nyanta.jp","nyat.app","nyc","nyc.mn","nysa.pl","nyuzen.toyama.jp","nz","nz.basketball","nz.eu.org","o.bg","o.se","o0o0.jp","o365.cloud.nospamproxy.com","oamishirasato.chiba.jp","oarai.ibaraki.jp","obama.fukui.jp","obama.nagasaki.jp","obanazawa.yamagata.jp","obi","obihiro.hokkaido.jp","obira.hokkaido.jp","obj.ag","objects.lp.dev","objects.lpg.cloudscale.ch","objects.rma.cloudscale.ch","obninsk.su","observablehq.cloud","observer","obu.aichi.jp","obuse.nagano.jp","ocelot.mythic-beasts.com","ochi.kochi.jp","od.ua","odate.akita.jp","odawara.kanagawa.jp","odda.no","odesa.ua","odessa.ua","odo.br","odont.ec","oe.yamagata.jp","of.by","of.je","of.no","off.ai","office","office-on-the.net","official.academy","official.ec","ofunato.iwate.jp","og.ao","og.it","oga.akita.jp","ogaki.gifu.jp","ogano.saitama.jp","ogasawara.tokyo.jp","ogata.akita.jp","ogawa.ibaraki.jp","ogawa.nagano.jp","ogawa.saitama.jp","ogawara.miyagi.jp","ogi.saga.jp","ogimi.okinawa.jp","ogliastra.it","ogori.fukuoka.jp","ogose.saitama.jp","oguchi.aichi.jp","oguni.kumamoto.jp","oguni.yamagata.jp","oh.us","oharu.aichi.jp","ohda.shimane.jp","ohi.fukui.jp","ohira.miyagi.jp","ohira.tochigi.jp","ohkura.yamagata.jp","ohtawara.tochigi.jp","oi.kanagawa.jp","oia.gov.pl","oirase.aomori.jp","oirm.gov.pl","oishida.yamagata.jp","oiso.kanagawa.jp","oita.jp","oita.oita.jp","oizumi.gunma.jp","oji.nara.jp","ojiya.niigata.jp","ok.us","okagaki.fukuoka.jp","okawa.fukuoka.jp","okawa.kochi.jp","okaya.nagano.jp","okayama.jp","okayama.okayama.jp","okazaki.aichi.jp","oke.gov.pl","okegawa.saitama.jp","oketo.hokkaido.jp","oki.fukuoka.jp","okinawa","okinawa.jp","okinawa.okinawa.jp","okinoshima.shimane.jp","okoppe.hokkaido.jp","oksnes.no","okuizumo.shimane.jp","okuma.fukushima.jp","okutama.tokyo.jp","ol.no","olawa.pl","olayan","olayangroup","olbia-tempio.it","olbiatempio.it","olecko.pl","olkusz.pl","ollo","olsztyn.pl","olympia.wa.us","om","omachi.nagano.jp","omachi.saga.jp","omaezaki.shizuoka.jp","omasvuotna.no","ome.tokyo.jp","omega","omg.lol","omgs.page","omi.nagano.jp","omi.niigata.jp","omigawa.chiba.jp","omihachiman.shiga.jp","omitama.ibaraki.jp","omiya.saitama.jp","omniwe.site","omotego.fukushima.jp","omura.nagasaki.jp","omuta.fukuoka.jp","on-aptible.com","on-fleek.app","on-forge.com","on-the-web.tv","on-vapor.com","on-web.fr","on.biz.ng","on.ca","on.expo.app","on.staging.expo.app","on.vn","onagawa.miyagi.jp","oncilla.mythic-beasts.com","ondigitalocean.app","one","ong","ong.br","onga.fukuoka.jp","onhercules.app","onid.ca","oninferno.net","onion","onjuku.chiba.jp","onl","online","online-server.cloud","online.ge","online.th","onna.okinawa.jp","ono.fukui.jp","ono.fukushima.jp","ono.hyogo.jp","onojo.fukuoka.jp","onomichi.hiroshima.jp","onporter.run","onrender.com","onthewifi.com","onza.mythic-beasts.com","ooguy.com","ookuwa.nagano.jp","ooo","oops.jp","ooshika.nagano.jp","oow.gov.pl","opal.ne.jp","open","opencloud.me","opencraft.hosting","opensocial.site","opentunnel.xyz","operaunite.com","opik.net","opoczno.pl","opole.pl","oppdal.no","oppegard.no","or.at","or.bi","or.ci","or.cr","or.id","or.it","or.jp","or.ke","or.kr","or.mu","or.th","or.tz","or.ug","or.us","ora.gunma.jp","oracle","orange","orangecloud.tn","org","org.ac","org.ae","org.af","org.ag","org.ai","org.al","org.am","org.ao","org.ar","org.au","org.az","org.ba","org.bb","org.bd","org.bh","org.bi","org.bj","org.bm","org.bn","org.bo","org.br","org.bs","org.bt","org.bw","org.bz","org.ci","org.cn","org.co","org.cu","org.cv","org.cw","org.cy","org.dm","org.do","org.dz","org.ec","org.ee","org.eg","org.es","org.et","org.fj","org.fm","org.ge","org.gg","org.gh","org.gi","org.gl","org.gn","org.gp","org.gr","org.gt","org.gu","org.gy","org.hk","org.hn","org.ht","org.hu","org.il","org.im","org.in","org.io","org.iq","org.ir","org.je","org.jo","org.kg","org.kh","org.ki","org.km","org.kn","org.kp","org.kw","org.ky","org.kz","org.la","org.lb","org.lc","org.lk","org.lr","org.ls","org.lv","org.ly","org.ma","org.me","org.mg","org.mk","org.ml","org.mn","org.mo","org.ms","org.mt","org.mu","org.mv","org.mw","org.mx","org.my","org.mz","org.na","org.ng","org.ni","org.nr","org.nz","org.om","org.pa","org.pe","org.pf","org.ph","org.pk","org.pl","org.pn","org.pr","org.ps","org.pt","org.py","org.qa","org.ro","org.rs","org.ru","org.rw","org.sa","org.sb","org.sc","org.scot","org.sd","org.se","org.sg","org.sh","org.sk","org.sl","org.sn","org.so","org.ss","org.st","org.sv","org.sy","org.sz","org.tj","org.tm","org.tn","org.to","org.tr","org.tt","org.tw","org.ua","org.ug","org.uk","org.uy","org.uz","org.vc","org.ve","org.vi","org.vn","org.vu","org.ws","org.ye","org.yt","org.za","org.zm","org.zw","organic","origins","oristano.it","orkanger.no","orkdal.no","orland.no","orsites.com","orskog.no","orsta.no","orx.biz","os.hedmark.no","os.hordaland.no","osaka","osaka.jp","osakasayama.osaka.jp","osaki.miyagi.jp","osakikamijima.hiroshima.jp","osasco.br","oschr.gov.pl","osen.no","oseto.nagasaki.jp","oshima.tokyo.jp","oshima.yamaguchi.jp","oshino.yamanashi.jp","oshu.iwate.jp","oslo.no","osoyro.no","osteroy.no","ostre-toten.no","ostroda.pl","ostroleka.pl","ostrowiec.pl","ostrowwlkp.pl","ot.it","ota.gunma.jp","ota.tokyo.jp","otake.hiroshima.jp","otaki.chiba.jp","otaki.nagano.jp","otaki.saitama.jp","otama.fukushima.jp","otari.nagano.jp","otaru.hokkaido.jp","ote.bj","other.nf","oto.fukuoka.jp","otobe.hokkaido.jp","otofuke.hokkaido.jp","otoineppu.hokkaido.jp","otoyo.kochi.jp","otsu.shiga.jp","otsuchi.iwate.jp","otsuka","otsuki.kochi.jp","otsuki.yamanashi.jp","ott","ouchi.saga.jp","ouda.nara.jp","oum.gov.pl","oumu.hokkaido.jp","outsystemscloud.com","overhalla.no","ovh","ovre-eiker.no","owani.aomori.jp","owariasahi.aichi.jp","own.pm","ownip.net","ownprovider.com","ox.rs","oxa.cloud","oy.lc","oyabe.toyama.jp","oyama.tochigi.jp","oyamazaki.kyoto.jp","oyer.no","oygarden.no","oyodo.nara.jp","oystre-slidre.no","oz.au","ozora.hokkaido.jp","ozu.ehime.jp","ozu.kumamoto.jp","p.bg","p.se","p.tawk.email","p.tawkto.email","pa","pa.gov.br","pa.gov.pl","pa.it","pa.leg.br","pa.us","paas.beebyte.io","paas.hosted-by-previder.com","paas.massivegrid.com","pabianice.pl","padova.it","padua.it","page","pagelemon.dev","pages-research.it.hs-heilbronn.de","pages.dev","pages.gay","pages.it.hs-heilbronn.de","pages.torproject.net","pages.wiardweb.com","pagespeedmobilizer.com","palermo.it","palmas.br","panasonic","panel.dev","panel.gg","pantheonsite.io","parachuting.aero","paragliding.aero","parallel.jp","parasite.jp","paris","parliament.nz","parma.it","paroch.k12.ma.us","pars","parti.se","partners","parts","party","passenger-association.aero","patria.bo","pavia.it","pay","payload.dev","paynow.cx","pb.ao","pb.gov.br","pb.leg.br","pc.it","pc.pl","pccw","pd.it","pdns.page","pe","pe.ca","pe.gov.br","pe.it","pe.kr","pe.leg.br","pecori.jp","peewee.jp","penne.jp","penza.su","pepper.jp","per.jo","per.la","per.nf","perma.jp","perso.ht","perso.tn","perugia.it","pesaro-urbino.it","pesarourbino.it","pescara.it","pet","pf","pfizer","pg.in","pg.it","pgafan.net","pgfog.com","pgw.jp","ph","pharmacien.fr","pharmaciens.km","pharmacy","phd","phd.jo","philips","phone","photo","photography","photos","phutho.vn","phuyen.vn","phx.enscaled.us","physio","pi.gov.br","pi.it","pi.leg.br","piacenza.it","pics","pictet","pictures","pid","piebox.site","piedmont.it","piemonte.it","pigboat.jp","pila.pl","pilot.aero","pimienta.org","pin","pinb.gov.pl","ping","pink","pinoko.jp","pioneer","pippu.hokkaido.jp","pisa.it","pistoia.it","pisz.pl","pivohosting.com","piw.gov.pl","pixolino.com","pizza","pk","pl","pl.eu.org","pl.ua","place","platter-app.dev","play","playcode.site","playit.plus","playstation","playstation-cloud.com","plc.co.im","plc.ly","plc.ng","plc.uk","plesk.page","pleskns.com","pley.games","plo.ps","plock.pl","plumbing","plurinacional.bo","plus","pm","pmn.it","pn","pn.it","pnc","po.gov.pl","po.it","poa.br","podhale.pl","podlasie.pl","podzone.net","podzone.org","pohl","point2this.com","pointto.us","poivron.org","poker","pokrovsk.su","pol.dz","pol.ht","pol.tr","polandcentral-01.azurewebsites.net","police.uk","politica.bo","politie","polkowice.pl","poltava.ua","polyspace.com","pomorskie.pl","pomorze.pl","poniatowa.pl","ponpes.id","pordenone.it","porn","porsanger.no","porsangu.no","porsgrunn.no","port-angeles.wa.us","port-ludlow.wa.us","port-orchard.wa.us","port-townsend.wa.us","port.fr","post","post.in","postman-echo.com","potager.org","potenza.it","poulsbo.wa.us","powiat.pl","poznan.pl","pp.az","pp.ru","pp.se","pp.ua","ppg.br","pplx.app","pr","pr.gov.br","pr.gov.pl","pr.it","pr.leg.br","pr.ml","pr.us","prato.it","praxi","prd.fr","prd.km","prd.mg","prequalifyme.today","press","press.aero","press.cy","press.ma","press.se","presse.km","presse.ml","preview.csb.app","preview.emergentagent.com","preview.site","prg1-zerops.zone","pri.ee","prime","primetel.cloud","principe.st","priv.at","priv.hu","priv.instances.scw.cloud","priv.me","priv.no","priv.pl","privatizehealthinsurance.net","pro","pro.az","pro.br","pro.cy","pro.ec","pro.fj","pro.ht","pro.in","pro.mv","pro.om","pro.pr","pro.tt","pro.typeform.com","pro.vn","prochowice.pl","prod","prod.enter.pro","prod.page","production.aero","productions","prof","prof.ec","prof.pr","profesional.bo","progressive","project.space","promo","properties","property","protection","pru","prudential","pruszkow.pl","prvcy.page","prvw.eu","przeworsk.pl","ps","psc.br","psi.br","psic.ec","psiq.ec","psp.gov.pl","psse.gov.pl","pstmn.io","pt","pt.eu.org","pt.it","pu.it","pub","pub.ec","pub.instances.scw.cloud","pub.sa","publ.cv","publ.pt","public-inquiry.uk","pubtls.org","pueblo.bo","pug.it","puglia.it","pulawy.pl","punyu.jp","pup.gov.pl","pupu.jp","pussycat.jp","puter.app","puter.site","puter.work","pv.it","pvh.br","pvt.ge","pvt.k12.ma.us","pw","pwc","py","pya.jp","pyatigorsk.ru","pymnt.uk","pythonanywhere.com","pz.it","q.bg","qa","qa2.com","qatarcentral-01.azurewebsites.net","qbuser.com","qc.ca","qcx.io","qh.cn","qld.au","qld.edu.au","qld.gov.au","qoto.io","qpon","qsl.br","qualifioapp.com","quangbinh.vn","quangnam.vn","quangngai.vn","quangninh.vn","quangtri.vn","quebec","quest","quicksytes.com","quizzes.cx","qzz.io","r.bg","r.cdn77.net","r.se","r2.dev","ra.it","racing","rackmaze.com","rackmaze.net","rade.no","radio","radio.am","radio.br","radio.fm","radom.pl","radoy.no","raffleentry.org.uk","rag-cloud-ch.hosteur.com","rag-cloud.hosteur.com","ragusa.it","rahkkeravju.no","raholt.no","raindrop.jp","raisa.no","rakkestad.no","ralingen.no","rana.no","randaberg.no","rankoshi.hokkaido.jp","ranzan.saitama.jp","rar.ve","ras.ru","rauma.no","ravendb.cloud","ravendb.community","ravendb.run","ravenna.it","ravpage.co.il","rawa-maz.pl","rc.it","rdb.fr-par.scw.cloud","rdb.nl-ams.scw.cloud","rdb.pl-waw.scw.cloud","rdy.jp","re","re.it","re.kr","re.no","read","read-books.org","readmyblog.org","readthedocs-hosted.com","readthedocs.io","readymade.jp","realestate","realestate.pl","realm.cz","realtime.supabase.co","realtor","realty","rebun.hokkaido.jp","rec.br","rec.nf","rec.ro","rec.ve","recht.pro","recife.br","recipes","recreation.aero","red","red.sv","redirectme.net","redmond.wa.us","redumbrella","reg.dk","reggio-calabria.it","reggio-emilia.it","reggiocalabria.it","reggioemilia.it","rehab","reise","reisen","reit","reklam.hu","rel.ht","rel.pl","relay.evervault.app","relay.evervault.dev","reliance","reliantlabs.dev","reliantpreview.dev","remotewd.com","ren","rendalen.no","rennebu.no","rennesoy.no","rent","rentals","renton.wa.us","rep.br","rep.kp","repair","repbody.aero","repl.co","repl.run","replit.app","report","republican","res.aero","res.in","research.aero","researched.cx","reservd.com","reservd.dev.thingdust.io","reservd.disrec.thingdust.io","reservd.testing.thingdust.io","reserve-online.net","resindevice.io","resolve.bar","rest","restaurant","restaurant.bj","resto.bj","retool.app","review","reviews","revista.bo","rexroth","rg.it","rgr.jp","rhcloud.com","ri.it","ri.us","ribeirao.br","ric.jelastic.vps-host.net","rice-labs.com","rich","richardli","ricoh","rieti.it","rifu.miyagi.jp","riik.ee","rikubetsu.hokkaido.jp","rikuzentakata.iwate.jp","ril","rimini.it","rindal.no","ringebu.no","ringerike.no","ringsaker.no","rio","rio.br","rio.ec","riobranco.br","riopreto.br","rip","rishiri.hokkaido.jp","rishirifuji.hokkaido.jp","risor.no","rissa.no","ritto.shiga.jp","rivne.ua","rj.gov.br","rj.leg.br","rl.no","rm.it","rma.objectstorage.ch","rn.gov.br","rn.it","rn.leg.br","ro","ro.eu.org","ro.gov.br","ro.it","ro.leg.br","roan.no","rocketpreview.app","rocks","rocky.page","rodeo","rodoy.no","rogers","rokunohe.aomori.jp","rollag.no","roma.it","rome.it","romsa.no","romskog.no","room","roros.no","rost.no","rotorcraft.aero","routingthecloud.com","routingthecloud.net","routingthecloud.org","rovigo.it","rovno.ua","roxa.org","royal-commission.uk","royken.no","royrvik.no","rr.gov.br","rr.leg.br","rrpp.ec","rs","rs.ba","rs.gov.br","rs.leg.br","rs.webaccel.jp","rsc.cdn77.org","rsc.contentproxy9.cz","rsvp","rt.ht","ru","ru.com","ru.eu.org","ru.net","rub.de","rugby","ruhr","ruhr-uni-bochum.de","rulez.jp","run","runcontainers.dev","runs.onstackit.cloud","ruovat.no","rv.ua","rw","rwe","rwx.run","rybnik.pl","ryd.wafaicloud.com","rygge.no","ryokami.saitama.jp","ryugasaki.ibaraki.jp","ryukyu","ryuoh.shiga.jp","rzeszow.pl","rzgw.gov.pl","s.bg","s.se","s3-1.amazonaws.com","s3-accesspoint-fips.ca-central-1.amazonaws.com","s3-accesspoint-fips.ca-west-1.amazonaws.com","s3-accesspoint-fips.dualstack.ca-central-1.amazonaws.com","s3-accesspoint-fips.dualstack.ca-west-1.amazonaws.com","s3-accesspoint-fips.dualstack.us-east-1.amazonaws.com","s3-accesspoint-fips.dualstack.us-east-2.amazonaws.com","s3-accesspoint-fips.dualstack.us-gov-east-1.amazonaws.com","s3-accesspoint-fips.dualstack.us-gov-west-1.amazonaws.com","s3-accesspoint-fips.dualstack.us-west-1.amazonaws.com","s3-accesspoint-fips.dualstack.us-west-2.amazonaws.com","s3-accesspoint-fips.us-east-1.amazonaws.com","s3-accesspoint-fips.us-east-2.amazonaws.com","s3-accesspoint-fips.us-gov-east-1.amazonaws.com","s3-accesspoint-fips.us-gov-west-1.amazonaws.com","s3-accesspoint-fips.us-west-1.amazonaws.com","s3-accesspoint-fips.us-west-2.amazonaws.com","s3-accesspoint.af-south-1.amazonaws.com","s3-accesspoint.ap-east-1.amazonaws.com","s3-accesspoint.ap-northeast-1.amazonaws.com","s3-accesspoint.ap-northeast-2.amazonaws.com","s3-accesspoint.ap-northeast-3.amazonaws.com","s3-accesspoint.ap-south-1.amazonaws.com","s3-accesspoint.ap-south-2.amazonaws.com","s3-accesspoint.ap-southeast-1.amazonaws.com","s3-accesspoint.ap-southeast-2.amazonaws.com","s3-accesspoint.ap-southeast-3.amazonaws.com","s3-accesspoint.ap-southeast-4.amazonaws.com","s3-accesspoint.ap-southeast-5.amazonaws.com","s3-accesspoint.ca-central-1.amazonaws.com","s3-accesspoint.ca-west-1.amazonaws.com","s3-accesspoint.cn-north-1.amazonaws.com.cn","s3-accesspoint.cn-northwest-1.amazonaws.com.cn","s3-accesspoint.dualstack.af-south-1.amazonaws.com","s3-accesspoint.dualstack.ap-east-1.amazonaws.com","s3-accesspoint.dualstack.ap-northeast-1.amazonaws.com","s3-accesspoint.dualstack.ap-northeast-2.amazonaws.com","s3-accesspoint.dualstack.ap-northeast-3.amazonaws.com","s3-accesspoint.dualstack.ap-south-1.amazonaws.com","s3-accesspoint.dualstack.ap-south-2.amazonaws.com","s3-accesspoint.dualstack.ap-southeast-1.amazonaws.com","s3-accesspoint.dualstack.ap-southeast-2.amazonaws.com","s3-accesspoint.dualstack.ap-southeast-3.amazonaws.com","s3-accesspoint.dualstack.ap-southeast-4.amazonaws.com","s3-accesspoint.dualstack.ap-southeast-5.amazonaws.com","s3-accesspoint.dualstack.ca-central-1.amazonaws.com","s3-accesspoint.dualstack.ca-west-1.amazonaws.com","s3-accesspoint.dualstack.cn-north-1.amazonaws.com.cn","s3-accesspoint.dualstack.cn-northwest-1.amazonaws.com.cn","s3-accesspoint.dualstack.eu-central-1.amazonaws.com","s3-accesspoint.dualstack.eu-central-2.amazonaws.com","s3-accesspoint.dualstack.eu-north-1.amazonaws.com","s3-accesspoint.dualstack.eu-south-1.amazonaws.com","s3-accesspoint.dualstack.eu-south-2.amazonaws.com","s3-accesspoint.dualstack.eu-west-1.amazonaws.com","s3-accesspoint.dualstack.eu-west-2.amazonaws.com","s3-accesspoint.dualstack.eu-west-3.amazonaws.com","s3-accesspoint.dualstack.il-central-1.amazonaws.com","s3-accesspoint.dualstack.me-central-1.amazonaws.com","s3-accesspoint.dualstack.me-south-1.amazonaws.com","s3-accesspoint.dualstack.sa-east-1.amazonaws.com","s3-accesspoint.dualstack.us-east-1.amazonaws.com","s3-accesspoint.dualstack.us-east-2.amazonaws.com","s3-accesspoint.dualstack.us-gov-east-1.amazonaws.com","s3-accesspoint.dualstack.us-gov-west-1.amazonaws.com","s3-accesspoint.dualstack.us-west-1.amazonaws.com","s3-accesspoint.dualstack.us-west-2.amazonaws.com","s3-accesspoint.eu-central-1.amazonaws.com","s3-accesspoint.eu-central-2.amazonaws.com","s3-accesspoint.eu-north-1.amazonaws.com","s3-accesspoint.eu-south-1.amazonaws.com","s3-accesspoint.eu-south-2.amazonaws.com","s3-accesspoint.eu-west-1.amazonaws.com","s3-accesspoint.eu-west-2.amazonaws.com","s3-accesspoint.eu-west-3.amazonaws.com","s3-accesspoint.il-central-1.amazonaws.com","s3-accesspoint.me-central-1.amazonaws.com","s3-accesspoint.me-south-1.amazonaws.com","s3-accesspoint.sa-east-1.amazonaws.com","s3-accesspoint.us-east-1.amazonaws.com","s3-accesspoint.us-east-2.amazonaws.com","s3-accesspoint.us-gov-east-1.amazonaws.com","s3-accesspoint.us-gov-west-1.amazonaws.com","s3-accesspoint.us-west-1.amazonaws.com","s3-accesspoint.us-west-2.amazonaws.com","s3-ap-east-1.amazonaws.com","s3-ap-northeast-1.amazonaws.com","s3-ap-northeast-2.amazonaws.com","s3-ap-northeast-3.amazonaws.com","s3-ap-south-1.amazonaws.com","s3-ap-southeast-1.amazonaws.com","s3-ap-southeast-2.amazonaws.com","s3-ca-central-1.amazonaws.com","s3-deprecated.ap-southeast-5.amazonaws.com","s3-deprecated.cn-north-1.amazonaws.com.cn","s3-deprecated.eu-west-1.amazonaws.com","s3-deprecated.us-east-1.amazonaws.com","s3-deprecated.us-east-2.amazonaws.com","s3-deprecated.us-west-2.amazonaws.com","s3-eu-central-1.amazonaws.com","s3-eu-north-1.amazonaws.com","s3-eu-west-1.amazonaws.com","s3-eu-west-2.amazonaws.com","s3-eu-west-3.amazonaws.com","s3-external-1.amazonaws.com","s3-fips-us-gov-east-1.amazonaws.com","s3-fips-us-gov-west-1.amazonaws.com","s3-fips.ca-central-1.amazonaws.com","s3-fips.ca-west-1.amazonaws.com","s3-fips.dualstack.ca-central-1.amazonaws.com","s3-fips.dualstack.ca-west-1.amazonaws.com","s3-fips.dualstack.us-east-1.amazonaws.com","s3-fips.dualstack.us-east-2.amazonaws.com","s3-fips.dualstack.us-gov-east-1.amazonaws.com","s3-fips.dualstack.us-gov-west-1.amazonaws.com","s3-fips.dualstack.us-west-1.amazonaws.com","s3-fips.dualstack.us-west-2.amazonaws.com","s3-fips.us-east-1.amazonaws.com","s3-fips.us-east-2.amazonaws.com","s3-fips.us-gov-east-1.amazonaws.com","s3-fips.us-gov-west-1.amazonaws.com","s3-fips.us-west-1.amazonaws.com","s3-fips.us-west-2.amazonaws.com","s3-me-south-1.amazonaws.com","s3-object-lambda.af-south-1.amazonaws.com","s3-object-lambda.ap-east-1.amazonaws.com","s3-object-lambda.ap-northeast-1.amazonaws.com","s3-object-lambda.ap-northeast-2.amazonaws.com","s3-object-lambda.ap-northeast-3.amazonaws.com","s3-object-lambda.ap-south-1.amazonaws.com","s3-object-lambda.ap-south-2.amazonaws.com","s3-object-lambda.ap-southeast-1.amazonaws.com","s3-object-lambda.ap-southeast-2.amazonaws.com","s3-object-lambda.ap-southeast-3.amazonaws.com","s3-object-lambda.ap-southeast-4.amazonaws.com","s3-object-lambda.ap-southeast-5.amazonaws.com","s3-object-lambda.ca-central-1.amazonaws.com","s3-object-lambda.ca-west-1.amazonaws.com","s3-object-lambda.cn-north-1.amazonaws.com.cn","s3-object-lambda.cn-northwest-1.amazonaws.com.cn","s3-object-lambda.eu-central-1.amazonaws.com","s3-object-lambda.eu-central-2.amazonaws.com","s3-object-lambda.eu-north-1.amazonaws.com","s3-object-lambda.eu-south-1.amazonaws.com","s3-object-lambda.eu-south-2.amazonaws.com","s3-object-lambda.eu-west-1.amazonaws.com","s3-object-lambda.eu-west-2.amazonaws.com","s3-object-lambda.eu-west-3.amazonaws.com","s3-object-lambda.il-central-1.amazonaws.com","s3-object-lambda.me-central-1.amazonaws.com","s3-object-lambda.me-south-1.amazonaws.com","s3-object-lambda.sa-east-1.amazonaws.com","s3-object-lambda.us-east-1.amazonaws.com","s3-object-lambda.us-east-2.amazonaws.com","s3-object-lambda.us-gov-east-1.amazonaws.com","s3-object-lambda.us-gov-west-1.amazonaws.com","s3-object-lambda.us-west-1.amazonaws.com","s3-object-lambda.us-west-2.amazonaws.com","s3-sa-east-1.amazonaws.com","s3-us-east-2.amazonaws.com","s3-us-gov-east-1.amazonaws.com","s3-us-gov-west-1.amazonaws.com","s3-us-west-1.amazonaws.com","s3-us-west-2.amazonaws.com","s3-website-ap-northeast-1.amazonaws.com","s3-website-ap-southeast-1.amazonaws.com","s3-website-ap-southeast-2.amazonaws.com","s3-website-eu-west-1.amazonaws.com","s3-website-jp.object.ncpstorage.com","s3-website-sa-east-1.amazonaws.com","s3-website-us-east-1.amazonaws.com","s3-website-us-gov-west-1.amazonaws.com","s3-website-us-west-1.amazonaws.com","s3-website-us-west-2.amazonaws.com","s3-website.af-south-1.amazonaws.com","s3-website.ap-east-1.amazonaws.com","s3-website.ap-northeast-1.amazonaws.com","s3-website.ap-northeast-2.amazonaws.com","s3-website.ap-northeast-3.amazonaws.com","s3-website.ap-south-1.amazonaws.com","s3-website.ap-south-2.amazonaws.com","s3-website.ap-southeast-1.amazonaws.com","s3-website.ap-southeast-2.amazonaws.com","s3-website.ap-southeast-3.amazonaws.com","s3-website.ap-southeast-4.amazonaws.com","s3-website.ap-southeast-5.amazonaws.com","s3-website.ca-central-1.amazonaws.com","s3-website.ca-west-1.amazonaws.com","s3-website.cn-north-1.amazonaws.com.cn","s3-website.cn-northwest-1.amazonaws.com.cn","s3-website.de.object.ncloudstorage.com","s3-website.dualstack.af-south-1.amazonaws.com","s3-website.dualstack.ap-northeast-1.amazonaws.com","s3-website.dualstack.ap-northeast-2.amazonaws.com","s3-website.dualstack.ap-northeast-3.amazonaws.com","s3-website.dualstack.ap-south-1.amazonaws.com","s3-website.dualstack.ap-south-2.amazonaws.com","s3-website.dualstack.ap-southeast-1.amazonaws.com","s3-website.dualstack.ap-southeast-2.amazonaws.com","s3-website.dualstack.ap-southeast-3.amazonaws.com","s3-website.dualstack.ap-southeast-4.amazonaws.com","s3-website.dualstack.ap-southeast-5.amazonaws.com","s3-website.dualstack.ca-central-1.amazonaws.com","s3-website.dualstack.ca-west-1.amazonaws.com","s3-website.dualstack.cn-north-1.amazonaws.com.cn","s3-website.dualstack.eu-central-1.amazonaws.com","s3-website.dualstack.eu-central-2.amazonaws.com","s3-website.dualstack.eu-south-1.amazonaws.com","s3-website.dualstack.eu-south-2.amazonaws.com","s3-website.dualstack.eu-west-1.amazonaws.com","s3-website.dualstack.eu-west-3.amazonaws.com","s3-website.dualstack.il-central-1.amazonaws.com","s3-website.dualstack.me-central-1.amazonaws.com","s3-website.dualstack.sa-east-1.amazonaws.com","s3-website.dualstack.us-east-1.amazonaws.com","s3-website.dualstack.us-east-2.amazonaws.com","s3-website.dualstack.us-gov-east-1.amazonaws.com","s3-website.dualstack.us-gov-west-1.amazonaws.com","s3-website.dualstack.us-west-1.amazonaws.com","s3-website.dualstack.us-west-2.amazonaws.com","s3-website.eu-central-1.amazonaws.com","s3-website.eu-central-2.amazonaws.com","s3-website.eu-north-1.amazonaws.com","s3-website.eu-south-1.amazonaws.com","s3-website.eu-south-2.amazonaws.com","s3-website.eu-west-1.amazonaws.com","s3-website.eu-west-2.amazonaws.com","s3-website.eu-west-3.amazonaws.com","s3-website.fr-par.scw.cloud","s3-website.il-central-1.amazonaws.com","s3-website.kr.object.fin-ncloudstorage.com","s3-website.kr.object.gov-ncloudstorage.com","s3-website.kr.object.ncloudstorage.com","s3-website.krs.object.gov-ncloudstorage.com","s3-website.me-central-1.amazonaws.com","s3-website.me-south-1.amazonaws.com","s3-website.nl-ams.scw.cloud","s3-website.pl-waw.scw.cloud","s3-website.sa-east-1.amazonaws.com","s3-website.sg.object.ncloudstorage.com","s3-website.us-east-1.amazonaws.com","s3-website.us-east-2.amazonaws.com","s3-website.us-gov-east-1.amazonaws.com","s3-website.us-gov-west-1.amazonaws.com","s3-website.us-west-1.amazonaws.com","s3-website.us-west-2.amazonaws.com","s3-website.us.object.ncloudstorage.com","s3.af-south-1.amazonaws.com","s3.amazonaws.com","s3.ap-east-1.amazonaws.com","s3.ap-northeast-1.amazonaws.com","s3.ap-northeast-2.amazonaws.com","s3.ap-northeast-3.amazonaws.com","s3.ap-south-1.amazonaws.com","s3.ap-south-2.amazonaws.com","s3.ap-southeast-1.amazonaws.com","s3.ap-southeast-2.amazonaws.com","s3.ap-southeast-3.amazonaws.com","s3.ap-southeast-4.amazonaws.com","s3.ap-southeast-5.amazonaws.com","s3.ca-central-1.amazonaws.com","s3.ca-west-1.amazonaws.com","s3.cn-north-1.amazonaws.com.cn","s3.cn-northwest-1.amazonaws.com.cn","s3.dualstack.af-south-1.amazonaws.com","s3.dualstack.ap-east-1.amazonaws.com","s3.dualstack.ap-northeast-1.amazonaws.com","s3.dualstack.ap-northeast-2.amazonaws.com","s3.dualstack.ap-northeast-3.amazonaws.com","s3.dualstack.ap-south-1.amazonaws.com","s3.dualstack.ap-south-2.amazonaws.com","s3.dualstack.ap-southeast-1.amazonaws.com","s3.dualstack.ap-southeast-2.amazonaws.com","s3.dualstack.ap-southeast-3.amazonaws.com","s3.dualstack.ap-southeast-4.amazonaws.com","s3.dualstack.ap-southeast-5.amazonaws.com","s3.dualstack.ca-central-1.amazonaws.com","s3.dualstack.ca-west-1.amazonaws.com","s3.dualstack.cn-north-1.amazonaws.com.cn","s3.dualstack.cn-northwest-1.amazonaws.com.cn","s3.dualstack.eu-central-1.amazonaws.com","s3.dualstack.eu-central-2.amazonaws.com","s3.dualstack.eu-north-1.amazonaws.com","s3.dualstack.eu-south-1.amazonaws.com","s3.dualstack.eu-south-2.amazonaws.com","s3.dualstack.eu-west-1.amazonaws.com","s3.dualstack.eu-west-2.amazonaws.com","s3.dualstack.eu-west-3.amazonaws.com","s3.dualstack.il-central-1.amazonaws.com","s3.dualstack.me-central-1.amazonaws.com","s3.dualstack.me-south-1.amazonaws.com","s3.dualstack.sa-east-1.amazonaws.com","s3.dualstack.us-east-1.amazonaws.com","s3.dualstack.us-east-2.amazonaws.com","s3.dualstack.us-gov-east-1.amazonaws.com","s3.dualstack.us-gov-west-1.amazonaws.com","s3.dualstack.us-west-1.amazonaws.com","s3.dualstack.us-west-2.amazonaws.com","s3.eu-central-1.amazonaws.com","s3.eu-central-2.amazonaws.com","s3.eu-north-1.amazonaws.com","s3.eu-south-1.amazonaws.com","s3.eu-south-2.amazonaws.com","s3.eu-west-1.amazonaws.com","s3.eu-west-2.amazonaws.com","s3.eu-west-3.amazonaws.com","s3.fr-par.scw.cloud","s3.il-central-1.amazonaws.com","s3.isk01.sakurastorage.jp","s3.isk02.sakurastorage.jp","s3.k2.cloud","s3.me-central-1.amazonaws.com","s3.me-south-1.amazonaws.com","s3.nl-ams.scw.cloud","s3.pl-waw.scw.cloud","s3.ru-msk.k2.cloud","s3.ru-spb.k2.cloud","s3.sa-east-1.amazonaws.com","s3.teckids.org","s3.us-east-1.amazonaws.com","s3.us-east-2.amazonaws.com","s3.us-gov-east-1.amazonaws.com","s3.us-gov-west-1.amazonaws.com","s3.us-west-1.amazonaws.com","s3.us-west-2.amazonaws.com","sa","sa-east-1.elasticbeanstalk.com","sa.au","sa.com","sa.cr","sa.edu.au","sa.gov.au","sa.gov.pl","sa.it","sa.ngrok.io","saarland","sabae.fukui.jp","sadist.jp","sado.niigata.jp","safe","safety","safety.aero","saga.jp","saga.saga.jp","sagae.yamagata.jp","sagamihara.kanagawa.jp","saigawa.fukuoka.jp","saijo.ehime.jp","saikai.nagasaki.jp","saiki.oita.jp","sail.box","saitama.jp","saitama.saitama.jp","saito.miyazaki.jp","saka.hiroshima.jp","sakado.saitama.jp","sakae.chiba.jp","sakae.nagano.jp","sakahogi.gifu.jp","sakai.fukui.jp","sakai.ibaraki.jp","sakai.osaka.jp","sakaiminato.tottori.jp","sakaki.nagano.jp","sakata.yamagata.jp","sakawa.kochi.jp","sakegawa.yamagata.jp","saku.nagano.jp","sakuho.nagano.jp","sakura","sakura.chiba.jp","sakura.ne.jp","sakura.tochigi.jp","sakura.tv","sakuragawa.ibaraki.jp","sakurai.nara.jp","sakuratan.com","sakuraweb.com","sakyo.kyoto.jp","sal.ec","salangen.no","salat.no","sale","salerno.it","salon","saloon.jp","saltdal.no","salud.bo","salvador.br","same-app.com","same-preview.com","samegawa.fukushima.jp","samnanger.no","sampa.br","samsclub","samsung","samukawa.kanagawa.jp","sanagochi.tokushima.jp","sanda.hyogo.jp","sandbox.deno.net","sandbox.modelence.app","sandcats.io","sande.more-og-romsdal.no","sande.vestfold.no","sande.xn--mre-og-romsdal-qqb.no","sandefjord.no","sandnes.no","sandnessjoen.no","sandoy.no","sandvik","sandvikcoromant","sango.nara.jp","sanity.run","sanity.studio","sanjo.niigata.jp","sannan.hyogo.jp","sannohe.aomori.jp","sano.tochigi.jp","sanofi","sanok.pl","santamaria.br","santoandre.br","sanuki.kagawa.jp","saobernardo.br","saogonca.br","saotome.st","sap","sar.it","sardegna.it","sardinia.it","sarl","saroma.hokkaido.jp","sarpsborg.no","sarufutsu.hokkaido.jp","sas","sasaguri.fukuoka.jp","sasayama.hyogo.jp","sasebo.nagasaki.jp","sassari.it","satosho.okayama.jp","satsumasendai.kagoshima.jp","satte.saitama.jp","sauda.no","sauherad.no","sav.case","save","saves-the-whales.com","savona.it","saxo","sayama.osaka.jp","sayama.saitama.jp","sayo.hyogo.jp","sb","sb.ua","sbi","sblo.jp","sbs","sc","sc.cn","sc.gov.br","sc.ke","sc.kr","sc.leg.br","sc.ls","sc.tz","sc.ug","sc.us","scalebook.scw.cloud","scb","scbl.fr-par.scw.cloud","scbl.nl-ams.scw.cloud","scbl.pl-waw.scw.cloud","sch.ac","sch.ae","sch.bd","sch.id","sch.ir","sch.jo","sch.lk","sch.ly","sch.ng","sch.qa","sch.sa","sch.ss","sch.tf","sch.wf","sch.zm","schaeffler","schmidt","schokokeks.net","scholarships","school","school.ge","school.in","school.nz","school.za","schoolbus.jp","schuldock.de","schule","schulplattform.de","schulserver.de","schwarz","sci.eg","science","scientist.aero","scot","scrapper-site.net","scrapping.cc","scrysec.com","scw.site","sd","sd.cn","sd.us","sdn.gov.pl","sdscloud.pl","se","se.eu.org","se.gov.br","se.leg.br","se.net","sea.wa.us","search","seat","seattle.wa.us","sebastopol.ua","sec.ps","secret.jp","secure","security","securitytactics.com","seek","seg.ar","seg.br","seidat.net","seihi.nagasaki.jp","seika.kyoto.jp","seiro.niigata.jp","seirou.niigata.jp","seiyo.ehime.jp","sejny.pl","sekd1.beebyteapp.io","seki.gifu.jp","sekigahara.gifu.jp","sekikawa.niigata.jp","sel.no","selbu.no","select","selfip.biz","selfip.com","selfip.info","selfip.net","selfip.org","selje.no","seljord.no","sellfy.store","sells-for-less.com","sells-for-u.com","sells-it.net","sellsyourhome.org","semboku.akita.jp","semine.miyagi.jp","senasa.ar","sener","sennan.osaka.jp","senseering.net","seoul.kr","seprox.hooc.me","sequim.wa.us","sera.hiroshima.jp","seranishi.hiroshima.jp","servebbs.com","servebbs.net","servebbs.org","servebeer.com","serveblog.net","servebolt.cloud","servecounterstrike.com","serveexchange.com","serveftp.com","serveftp.net","serveftp.org","servegame.com","servegame.org","servehalflife.com","servehttp.com","servehumour.com","serveirc.com","serveminecraft.net","servemp3.com","servep2p.com","servepics.com","servequake.com","server-on.net","servername.us","servesarcasm.com","service.gov.scot","service.gov.uk","service.one","servicebus.usgovcloudapi.net","servicebus.windows.net","services","services.aero","setagaya.tokyo.jp","seto.aichi.jp","setouchi.okayama.jp","settsu.osaka.jp","sevastopol.ua","seven","sew","sex","sex.hu","sex.pl","sexy","sf.no","sfr","sg","sg-1.paas.massivegrid.net","sg.object.ncloudstorage.com","sg.object.private.ncloudstorage.com","sg.objectstorage.ncloud.com","sh","sh.cn","shacknet.nu","shakotan.hokkaido.jp","shangrila","shari.hokkaido.jp","sharp","sheezy.games","shell","shelton.wa.us","shia","shibata.miyagi.jp","shibata.niigata.jp","shibecha.hokkaido.jp","shibetsu.hokkaido.jp","shibukawa.gunma.jp","shibuya.tokyo.jp","shichikashuku.miyagi.jp","shichinohe.aomori.jp","shiga.jp","shiiba.miyazaki.jp","shijonawate.osaka.jp","shika.ishikawa.jp","shikabe.hokkaido.jp","shikama.miyagi.jp","shikaoi.hokkaido.jp","shikatsu.aichi.jp","shiki.saitama.jp","shikokuchuo.ehime.jp","shiksha","shima.mie.jp","shimabara.nagasaki.jp","shimada.shizuoka.jp","shimamaki.hokkaido.jp","shimamoto.osaka.jp","shimane.jp","shimane.shimane.jp","shimizu.hokkaido.jp","shimizu.shizuoka.jp","shimoda.shizuoka.jp","shimodate.ibaraki.jp","shimofusa.chiba.jp","shimogo.fukushima.jp","shimoichi.nara.jp","shimoji.okinawa.jp","shimokawa.hokkaido.jp","shimokitayama.nara.jp","shimonita.gunma.jp","shimonoseki.yamaguchi.jp","shimosuwa.nagano.jp","shimotsuke.tochigi.jp","shimotsuma.ibaraki.jp","shinagawa.tokyo.jp","shinanomachi.nagano.jp","shingo.aomori.jp","shingu.fukuoka.jp","shingu.hyogo.jp","shingu.wakayama.jp","shinichi.hiroshima.jp","shinjo.nara.jp","shinjo.okayama.jp","shinjo.yamagata.jp","shinjuku.tokyo.jp","shinkamigoto.nagasaki.jp","shinonsen.hyogo.jp","shinshinotsu.hokkaido.jp","shinshiro.aichi.jp","shinto.gunma.jp","shintoku.hokkaido.jp","shintomi.miyazaki.jp","shinyoshitomi.fukuoka.jp","shiogama.miyagi.jp","shiojiri.nagano.jp","shioya.tochigi.jp","ship.place","shiptoday.app","shiptoday.build","shirahama.wakayama.jp","shirakawa.fukushima.jp","shirakawa.gifu.jp","shirako.chiba.jp","shiranuka.hokkaido.jp","shiraoi.hokkaido.jp","shiraoka.saitama.jp","shirataka.yamagata.jp","shiriuchi.hokkaido.jp","shiroi.chiba.jp","shiroishi.miyagi.jp","shiroishi.saga.jp","shirosato.ibaraki.jp","shishikui.tokushima.jp","shiso.hyogo.jp","shisui.chiba.jp","shitara.aichi.jp","shiwa.iwate.jp","shizukuishi.iwate.jp","shizuoka.jp","shizuoka.shizuoka.jp","shobara.hiroshima.jp","shoes","shonai.fukuoka.jp","shonai.yamagata.jp","shoo.okayama.jp","shop","shop.brendly.ba","shop.brendly.hr","shop.brendly.rs","shop.ht","shop.hu","shop.pl","shop.ro","shop.th","shoparena.pl","shopitsite.com","shopping","shopselect.net","shopware.shop","shopware.store","shouji","show","show.aero","showa.fukushima.jp","showa.gunma.jp","showa.yamanashi.jp","shunan.yamaguchi.jp","si","si.eu.org","si.it","sic.it","sicilia.it","sicily.it","siellak.no","siena.it","sieradz.pl","sigdal.no","siiites.com","siljan.no","silk","silverdale.wa.us","simple-url.com","simplesite.com","simplesite.com.br","simplesite.gr","simplesite.pl","sina","sinaapp.com","singles","siracusa.it","sirdal.no","site","site.hosting-cluster.nl","site.rb-hosting.io","site.tb-hosting.com","site.transip.me","site.webhosting.be","siteleaf.net","sites.reliantlabs.dev","sj","sjc.br","sk","sk.ca","sk.eu.org","skanit.no","skanland.no","skaun.no","skedsmo.no","skedsmokorset.no","ski","ski.no","skien.no","skierniewice.pl","skierva.no","skin","skiptvet.no","skjak.no","skjervoy.no","sklep.pl","sko.gov.pl","skoczow.pl","skodje.no","skr.jp","sky","skydiving.aero","skype","sl","slask.pl","slattum.no","sld.do","sld.pa","slg.br","sling","sliplane.app","slupsk.pl","slz.br","sm","sm.run","sm.ua","small-web.org","smart","smartlabeling.scw.cloud","smile","smola.no","smushcdn.com","sn","sn.cn","sn.mynetname.net","snaase.no","snasa.no","sncf","snillfjord.no","snoasa.no","so","so.gov.pl","so.it","sobetsu.hokkaido.jp","soc.dz","soc.lk","soc.srcf.net","soccer","sochi.su","social","social.br","soctrang.vn","sodegaura.chiba.jp","soeda.fukuoka.jp","softbank","software","software.aero","sogndal.no","sogne.no","sohu","soja.okayama.jp","soka.saitama.jp","sokndal.no","sol.site","sola.no","solar","solidres.page","solund.no","solutions","soma.fukushima.jp","somna.no","sondre-land.no","sondrio.it","song","songdalen.no","soni.nara.jp","sonla.vn","sony","soo.kagoshima.jp","sopot.pl","sor-aurdal.no","sor-fron.no","sor-odal.no","sor-varanger.no","sorfold.no","sorocaba.br","sorreisa.no","sortland.no","sorum.no","sos.pl","sosa.chiba.jp","sosnowiec.pl","soundcast.me","sourcecraft.site","southafricanorth-01.azurewebsites.net","southafricawest-01.azurewebsites.net","southcentralus-01.azurewebsites.net","southcentralus2-01.azurewebsites.net","southeastasia-01.azurewebsites.net","southeastus5-01.azurewebsites.net","southindia-01.azurewebsites.net","sowa.ibaraki.jp","soy","sp.gov.br","sp.it","sp.leg.br","spa","space","space-to-rent.com","space.fast","spaincentral-01.azurewebsites.net","spawnbase.app","spb.ru","spb.su","spdns.de","spdns.eu","spdns.org","sphinx.mythic-beasts.com","spjelkavik.no","sport","sport.eg","sport.hu","spot","sprites.app","spryt.net","spydeberg.no","square.site","square7.ch","square7.de","square7.net","squares.net","sr","sr.gov.pl","sr.it","srht.site","srl","srv.br","srv.us","srvdns.de","sryze.cc","ss","ss.it","ssl.origin.cdn77-secure.org","st","st.no","staba.jp","stackhero-network.com","stackit.gg","stackit.rocks","stackit.run","stackit.zone","stada","stage.nodeart.io","staging.expo.app","stalowa-wola.pl","stange.no","staples","star","starachowice.pl","stargard.pl","starostwo.gov.pl","stat.no","statebank","statefarm","stathelle.no","static-access.net","static.hf.space","static.observableusercontent.com","statichost.page","stavanger.no","stavern.no","stc","stcgroup","steigen.no","steinkjer.no","sth.ac.at","stjordal.no","stjordalshalsen.no","stockholm","stokke.no","stor-elvdal.no","storage","storage.supabase.co","storage.yandexcloud.net","stord.no","stordal.no","store","store.bb","store.cv","store.dk","store.nf","store.ro","store.st","store.ve","storebase.store","storfjord.no","strand.no","stranda.no","strapiapp.com","streak-link.com","streaklinks.com","streakusercontent.com","stream","streamlit.app","streamlitapp.com","stripper.jp","stryn.no","student.aero","studio","studio-fips.us-gov-east-1.sagemaker.aws","studio-fips.us-gov-west-1.sagemaker.aws","studio.af-south-1.sagemaker.aws","studio.ap-east-1.sagemaker.aws","studio.ap-northeast-1.sagemaker.aws","studio.ap-northeast-2.sagemaker.aws","studio.ap-northeast-3.sagemaker.aws","studio.ap-south-1.sagemaker.aws","studio.ap-southeast-1.sagemaker.aws","studio.ap-southeast-2.sagemaker.aws","studio.ap-southeast-3.sagemaker.aws","studio.ca-central-1.sagemaker.aws","studio.cn-north-1.sagemaker.com.cn","studio.cn-northwest-1.sagemaker.com.cn","studio.eu-central-1.sagemaker.aws","studio.eu-central-2.sagemaker.aws","studio.eu-north-1.sagemaker.aws","studio.eu-south-1.sagemaker.aws","studio.eu-south-2.sagemaker.aws","studio.eu-west-1.sagemaker.aws","studio.eu-west-2.sagemaker.aws","studio.eu-west-3.sagemaker.aws","studio.il-central-1.sagemaker.aws","studio.me-central-1.sagemaker.aws","studio.me-south-1.sagemaker.aws","studio.sa-east-1.sagemaker.aws","studio.us-east-1.sagemaker.aws","studio.us-east-2.sagemaker.aws","studio.us-gov-east-1.sagemaker.aws","studio.us-gov-west-1.sagemaker.aws","studio.us-west-1.sagemaker.aws","studio.us-west-2.sagemaker.aws","study","stuff-4-sale.org","stuff-4-sale.us","stufftoread.com","style","su","su.it","sub.jp","subsc-pay.com","subsc-pay.net","subscribepage.io","sucks","sud-sardegna.it","sudsardegna.it","sue.fukuoka.jp","suedtirol.it","suginami.tokyo.jp","sugito.saitama.jp","suifu.ibaraki.jp","suita.osaka.jp","sukagawa.fukushima.jp","sukumo.kochi.jp","sula.no","suldal.no","suli.hu","sumida.tokyo.jp","sumita.iwate.jp","sumomo.ne.jp","sumoto.hyogo.jp","sumoto.kumamoto.jp","sumy.ua","sunagawa.hokkaido.jp","sund.no","sunndal.no","sunnyday.jp","suohkan.no","supabase.co","supabase.in","supabase.net","supersale.jp","supplies","supply","support","support.site","surf","surge.sh","surgery","surnadal.no","surveys.so","susaki.kochi.jp","susono.shizuoka.jp","suwa.nagano.jp","suwalki.pl","suzaka.nagano.jp","suzu.ishikawa.jp","suzuka.mie.jp","suzuki","sv","sv.it","svalbard.no","sveio.no","svelvik.no","svn-repos.de","swatch","swedencentral-01.azurewebsites.net","swedensouth-01.azurewebsites.net","sweetpepper.org","swidnica.pl","swidnik.pl","swiebodzin.pl","swinoujscie.pl","swiss","switzerlandnorth-01.azurewebsites.net","switzerlandwest-01.azurewebsites.net","sx","sx.cn","sy","sydney","sykkylven.no","syncloud.it","synology.me","systems","sytes.net","sz","szczecin.pl","szczytno.pl","szex.hu","szkola.pl","t.bg","t.se","t3.storage.dev","t3.storageapi.dev","ta.it","taa.it","tab","tabayama.yamanashi.jp","tabitorder.co.il","tabuse.yamaguchi.jp","tachiarai.fukuoka.jp","tachikawa.tokyo.jp","tadaoka.osaka.jp","tado.mie.jp","tadotsu.kagawa.jp","tagajo.miyagi.jp","tagami.niigata.jp","tagawa.fukuoka.jp","tahara.aichi.jp","taifun-dns.de","taiji.wakayama.jp","taiki.hokkaido.jp","taiki.mie.jp","tainai.niigata.jp","taipei","taira.toyama.jp","taishi.hyogo.jp","taishi.osaka.jp","taishin.fukushima.jp","taito.tokyo.jp","taiwa.miyagi.jp","taiwannorth-01.azurewebsites.net","taiwannorthwest-01.azurewebsites.net","tajimi.gifu.jp","tajiri.osaka.jp","taka.hyogo.jp","takagi.nagano.jp","takahagi.ibaraki.jp","takahama.aichi.jp","takahama.fukui.jp","takaharu.miyazaki.jp","takahashi.okayama.jp","takahata.yamagata.jp","takaishi.osaka.jp","takamatsu.kagawa.jp","takamori.kumamoto.jp","takamori.nagano.jp","takanabe.miyazaki.jp","takanezawa.tochigi.jp","takaoka.toyama.jp","takarazuka.hyogo.jp","takasago.hyogo.jp","takasaki.gunma.jp","takashima.shiga.jp","takasu.hokkaido.jp","takata.fukuoka.jp","takatori.nara.jp","takatsuki.osaka.jp","takatsuki.shiga.jp","takayama.gifu.jp","takayama.gunma.jp","takayama.nagano.jp","takazaki.miyazaki.jp","takehara.hiroshima.jp","taketa.oita.jp","taketomi.okinawa.jp","taki.mie.jp","takikawa.hokkaido.jp","takino.hyogo.jp","takinoue.hokkaido.jp","takko.aomori.jp","tako.chiba.jp","taku.saga.jp","talk","tama.tokyo.jp","tamakawa.fukushima.jp","tamaki.mie.jp","tamamura.gunma.jp","tamano.okayama.jp","tamatsukuri.ibaraki.jp","tamayu.shimane.jp","tamba.hyogo.jp","tana.no","tanabe.kyoto.jp","tanabe.wakayama.jp","tanagura.fukushima.jp","tananger.no","tank.jp","tanohata.iwate.jp","taobao","tara.saga.jp","tarama.okinawa.jp","taranto.it","target","targi.pl","tarnobrzeg.pl","tarui.gifu.jp","tarumizu.kagoshima.jp","tas.au","tas.edu.au","tas.gov.au","tashkent.su","tatamotors","tatar","tatebayashi.gunma.jp","tateshina.nagano.jp","tateyama.chiba.jp","tateyama.toyama.jp","tatsuno.hyogo.jp","tatsuno.nagano.jp","tattoo","taveusercontent.com","tawaramoto.nara.jp","tax","taxi","taxi.aero","taxi.br","tayninh.vn","tc","tc.br","tche.br","tci","tcp4.me","td","tdk","te.it","te.ua","teaches-yoga.com","team","tec.br","tec.mi.us","tec.ve","tech","tech.ec","tech.orange","technology","tecnologia.bo","tel","tel.tr","telebit.app","telebit.io","teleport.sh","temasek","temp-dns.com","tempio-olbia.it","tempioolbia.it","tempurl.host","tendo.yamagata.jp","tenei.fukushima.jp","tenkawa.nara.jp","tennis","tenri.nara.jp","teo.br","teramo.it","termez.su","terni.it","ternopil.ua","terramind.io","teshikaga.hokkaido.jp","test-iserv.de","test.tj","tests.cx","teva","tf","tg","tgory.pl","th","thaibinh.vn","thainguyen.vn","thanhhoa.vn","thanhphohochiminh.vn","thd","the.br","theater","theatre","theshop.jp","theworkpc.com","thick.jp","thingdustdata.com","thruhere.net","thuathienhue.vn","tiaa","tickets","tickets.io","tienda","tiengiang.vn","time.no","tingvoll.no","tinn.no","tips","tires","tirol","tj","tj.cn","tjeldsund.no","tjielte.no","tjmaxx","tjome.no","tjx","tk","tkmaxx","tksat.bo","tl","tlon.network","tm","tm.cy","tm.dz","tm.fr","tm.hu","tm.km","tm.mc","tm.no","tm.pl","tm.ro","tm.se","tm.za","tmall","tmp.br","tmp.now","tn","tn.it","tn.oxa.cloud","tn.us","tnx.ge","to","to.gov.br","to.it","to.leg.br","toba.mie.jp","tobe.ehime.jp","tobetsu.hokkaido.jp","tobishima.aichi.jp","tochigi.jp","tochigi.tochigi.jp","tochio.niigata.jp","toda.saitama.jp","today","toei.aichi.jp","toga.toyama.jp","togakushi.nagano.jp","togane.chiba.jp","togitsu.nagasaki.jp","togliatti.su","togo.aichi.jp","togura.nagano.jp","tohma.hokkaido.jp","tohnosho.chiba.jp","toho.fukuoka.jp","tokai.aichi.jp","tokai.ibaraki.jp","tokamachi.niigata.jp","tokashiki.okinawa.jp","toki.gifu.jp","tokigawa.saitama.jp","tokke.no","tokoname.aichi.jp","tokorozawa.saitama.jp","tokushima.jp","tokushima.tokushima.jp","tokuyama.yamaguchi.jp","tokyo","tokyo.jp","tolga.no","tomakomai.hokkaido.jp","tomari.hokkaido.jp","tome.miyagi.jp","tomi.nagano.jp","tomigusuku.okinawa.jp","tomika.gifu.jp","tomioka.gunma.jp","tomisato.chiba.jp","tomiya.miyagi.jp","tomobe.ibaraki.jp","tonaki.okinawa.jp","tonami.toyama.jp","tondabayashi.osaka.jp","tone.ibaraki.jp","tonkotsu.jp","tono.iwate.jp","tonosho.kagawa.jp","tonsberg.no","toolforge.org","tools","toon.ehime.jp","top","topaz.ne.jp","torahime.shiga.jp","toray","toride.ibaraki.jp","torino.it","torproject.net","torsken.no","torun.pl","tos.it","tosa.kochi.jp","tosashimizu.kochi.jp","toscana.it","toshiba","toshima.tokyo.jp","tosu.saga.jp","total","tottori.jp","tottori.tottori.jp","tourism.bj","tourism.pl","tourism.tn","tours","towada.aomori.jp","town","townnews-staging.com","toya.hokkaido.jp","toyako.hokkaido.jp","toyama.jp","toyama.toyama.jp","toyo.kochi.jp","toyoake.aichi.jp","toyohashi.aichi.jp","toyokawa.aichi.jp","toyonaka.osaka.jp","toyone.aichi.jp","toyono.osaka.jp","toyooka.hyogo.jp","toyosato.shiga.jp","toyota","toyota.aichi.jp","toyota.yamaguchi.jp","toyotomi.hokkaido.jp","toyotsu.fukuoka.jp","toyoura.hokkaido.jp","toys","tozawa.yamagata.jp","tozsde.hu","tp.it","tr","tr.eu.org","tr.it","tr.no","tra.kp","trade","trader.aero","trading","trading.aero","traeumtgerade.de","trafficmanager.net","trafficplex.cloud","trainer.aero","training","trana.no","tranby.no","trani-andria-barletta.it","trani-barletta-andria.it","traniandriabarletta.it","tranibarlettaandria.it","tranoy.no","transfer-webapp-fips.us-gov-east-1.on.aws","transfer-webapp-fips.us-gov-west-1.on.aws","transfer-webapp.af-south-1.on.aws","transfer-webapp.ap-east-1.on.aws","transfer-webapp.ap-east-2.on.aws","transfer-webapp.ap-northeast-1.on.aws","transfer-webapp.ap-northeast-2.on.aws","transfer-webapp.ap-northeast-3.on.aws","transfer-webapp.ap-south-1.on.aws","transfer-webapp.ap-south-2.on.aws","transfer-webapp.ap-southeast-1.on.aws","transfer-webapp.ap-southeast-2.on.aws","transfer-webapp.ap-southeast-3.on.aws","transfer-webapp.ap-southeast-4.on.aws","transfer-webapp.ap-southeast-5.on.aws","transfer-webapp.ap-southeast-6.on.aws","transfer-webapp.ap-southeast-7.on.aws","transfer-webapp.ca-central-1.on.aws","transfer-webapp.ca-west-1.on.aws","transfer-webapp.cn-north-1.on.amazonwebservices.com.cn","transfer-webapp.cn-northwest-1.on.amazonwebservices.com.cn","transfer-webapp.eu-central-1.on.aws","transfer-webapp.eu-central-2.on.aws","transfer-webapp.eu-north-1.on.aws","transfer-webapp.eu-south-1.on.aws","transfer-webapp.eu-south-2.on.aws","transfer-webapp.eu-west-1.on.aws","transfer-webapp.eu-west-2.on.aws","transfer-webapp.eu-west-3.on.aws","transfer-webapp.eusc-de-east-1.on.amazonwebservices.eu","transfer-webapp.il-central-1.on.aws","transfer-webapp.me-central-1.on.aws","transfer-webapp.me-south-1.on.aws","transfer-webapp.mx-central-1.on.aws","transfer-webapp.sa-east-1.on.aws","transfer-webapp.us-east-1.on.aws","transfer-webapp.us-east-2.on.aws","transfer-webapp.us-gov-east-1.on.aws","transfer-webapp.us-gov-west-1.on.aws","transfer-webapp.us-west-1.on.aws","transfer-webapp.us-west-2.on.aws","translate.goog","transporte.bo","trapani.it","travel","travel.in","travel.pl","travelers","travelersinsurance","travinh.vn","trd.br","trentin-sud-tirol.it","trentin-sudtirol.it","trentin-sued-tirol.it","trentin-suedtirol.it","trentino-a-adige.it","trentino-aadige.it","trentino-alto-adige.it","trentino-altoadige.it","trentino-s-tirol.it","trentino-stirol.it","trentino-sud-tirol.it","trentino-sudtirol.it","trentino-sued-tirol.it","trentino-suedtirol.it","trentino.it","trentinoa-adige.it","trentinoaadige.it","trentinoalto-adige.it","trentinoaltoadige.it","trentinos-tirol.it","trentinostirol.it","trentinosud-tirol.it","trentinosued-tirol.it","trentinosuedtirol.it","trentinsud-tirol.it","trentinsudtirol.it","trentinsued-tirol.it","trentinsuedtirol.it","trento.it","treviso.it","trieste.it","troandin.no","trogstad.no","troitsk.su","tromsa.no","tromso.no","trondheim.no","trust","trv","try-snowplow.com","trycloudflare.com","trysil.no","ts.it","ts.net","tselinograd.su","tsk.tr","tsu.mie.jp","tsubame.niigata.jp","tsubata.ishikawa.jp","tsubetsu.hokkaido.jp","tsuchiura.ibaraki.jp","tsuga.tochigi.jp","tsugaru.aomori.jp","tsuiki.fukuoka.jp","tsukigata.hokkaido.jp","tsukiyono.gunma.jp","tsukuba.ibaraki.jp","tsukui.kanagawa.jp","tsukumi.oita.jp","tsumagoi.gunma.jp","tsunan.niigata.jp","tsuno.kochi.jp","tsuno.miyazaki.jp","tsuru.yamanashi.jp","tsuruga.fukui.jp","tsurugashima.saitama.jp","tsurugi.ishikawa.jp","tsuruoka.yamagata.jp","tsuruta.aomori.jp","tsushima.aichi.jp","tsushima.nagasaki.jp","tsuwano.shimane.jp","tsuyama.okayama.jp","tt","tt.im","tube","tui","tul.ec","tula.su","tuleap-partners.com","tunes","tunk.org","tunnelmole.net","tur.ar","tur.br","tur.ec","turek.pl","turin.it","turystyka.pl","tuscany.it","tushu","tuva.su","tuxfamily.org","tuyenquang.vn","tv","tv.bb","tv.bd","tv.bo","tv.br","tv.eg","tv.im","tv.in","tv.it","tv.jo","tv.sd","tv.tr","tv.tz","tvedestrand.no","tvs","tw","tw.cn","twmail.cc","twmail.net","twmail.org","tx.us","tychy.pl","tydal.no","tynset.no","typedream.app","typo3server.info","tysfjord.no","tysnes.no","tysvar.no","tz","u.bg","u.channelsdvr.net","u.se","ua","uaecentral-01.azurewebsites.net","uaenorth-01.azurewebsites.net","ub.in","ubank","ube.yamaguchi.jp","uber.space","ubs","uchihara.ibaraki.jp","uchiko.ehime.jp","uchinada.ishikawa.jp","uchinomi.kagawa.jp","ud.it","uda.nara.jp","udi.br","udine.it","udono.mie.jp","ueda.nagano.jp","ueno.gunma.jp","uenohara.yamanashi.jp","uenorge.no","ufcfan.org","ug","ug.gov.pl","ugim.gov.pl","uh-oh.jp","ui.nabu.casa","uio.ec","uji.kyoto.jp","ujiie.tochigi.jp","ujitawara.kyoto.jp","uk","uk.cc","uk.com","uk.eu.org","uk.in","uk.net","uk.oxa.cloud","uk.primetel.cloud","uk.reclaim.cloud","uki.kumamoto.jp","ukiha.fukuoka.jp","uksouth-01.azurewebsites.net","ukwest-01.azurewebsites.net","ullensaker.no","ullensvang.no","ulsan.kr","ulstein.no","ulvik.no","um.gov.pl","umaji.kochi.jp","umb.it","umbria.it","umi.fukuoka.jp","umig.gov.pl","umso.co","unazuki.toyama.jp","uncld.dev","under.jp","undo.jp","uni5.net","unicloud.pl","unicom","union.aero","unison-services.cloud","univ.bj","univ.sn","university","unjarga.no","unnan.shimane.jp","uno","unusualperson.com","unzen.nagasaki.jp","uol","uonuma.niigata.jp","uozu.toyama.jp","up.in","up.railway.app","upow.gov.pl","upper.jp","uppo.gov.pl","ups","upsunapp.com","urakawa.hokkaido.jp","urasoe.okinawa.jp","urausu.hokkaido.jp","urawa.saitama.jp","urayasu.chiba.jp","urbino-pesaro.it","urbinopesaro.it","ureshino.mie.jp","uri.arpa","url.tw","urn.arpa","urown.cloud","uruma.okinawa.jp","uryu.hokkaido.jp","us","us-1.evennode.com","us-2.evennode.com","us-3.evennode.com","us-4.evennode.com","us-east-1.amazonaws.com","us-east-1.convex.cloud","us-east-1.convex.site","us-east-1.elasticbeanstalk.com","us-east-2.elasticbeanstalk.com","us-gov-east-1.elasticbeanstalk.com","us-gov-west-1.elasticbeanstalk.com","us-west-1.elasticbeanstalk.com","us-west-2.elasticbeanstalk.com","us.cc","us.ci","us.com","us.eu.org","us.gov.pl","us.in","us.kg","us.ngrok.io","us.object.ncloudstorage.com","us.org","us.platform.sh","us.reclaim.cloud","us.ug","us1-plenit.com","usa.oita.jp","user.aseinet.ne.jp","user.party.eus","user.srcf.net","user.webaccel.jp","usercontent.jp","usgovcloudapp.net","usgovtrafficmanager.net","ushiku.ibaraki.jp","usr.cloud.muni.cz","ustka.pl","usui.fukuoka.jp","usuki.oita.jp","ut.us","utashinai.hokkaido.jp","utazas.hu","utazu.kagawa.jp","uto.kumamoto.jp","utsira.no","utsunomiya.tochigi.jp","utwente.io","uw.gov.pl","uwajima.ehime.jp","uwu.ai","uy","uz","uz.ua","uzhgorod.ua","uzhhorod.ua","uzs.gov.pl","v-info.info","v.bg","v.ua","v0.build","v6.army","v6.navy","v6.rocks","va","va.it","va.no","va.us","vaapste.no","vacations","vadso.no","vaga.no","vagan.no","vagsoy.no","vaksdal.no","val-d-aosta.it","val-daosta.it","val.run","vald-aosta.it","valer.hedmark.no","valer.ostfold.no","valle-aosta.it","valle-d-aosta.it","valle-daosta.it","valle.no","valleaosta.it","valled-aosta.it","valledaosta.it","vallee-aoste.it","vallee-d-aoste.it","valleeaoste.it","valleedaoste.it","vana","vang.no","vanguard","vanylven.no","vao.it","vapor.cloud","vaporcloud.io","vardo.no","varese.it","varggat.no","varoy.no","vb.it","vc","vc.it","vda.it","ve","ve.it","vefsn.no","vega.no","vegarshei.no","vegas","velvet.jp","ven.it","veneto.it","venezia.it","venice.it","vennesla.no","ventures","verbania.it","verbano-cusio-ossola.it","vercel.app","vercel.dev","vercel.run","vercelli.it","verdal.no","verisign","verona.it","verran.no","verse.jp","versicherung","versus.jp","vestby.no","vestnes.no","vestre-slidre.no","vestre-toten.no","vestvagoy.no","vet","vet.br","vet.ec","veterinaire.fr","veterinaire.km","vevelstad.no","vf.no","vfs.cloud9.af-south-1.amazonaws.com","vfs.cloud9.ap-east-1.amazonaws.com","vfs.cloud9.ap-northeast-1.amazonaws.com","vfs.cloud9.ap-northeast-2.amazonaws.com","vfs.cloud9.ap-northeast-3.amazonaws.com","vfs.cloud9.ap-south-1.amazonaws.com","vfs.cloud9.ap-southeast-1.amazonaws.com","vfs.cloud9.ap-southeast-2.amazonaws.com","vfs.cloud9.ca-central-1.amazonaws.com","vfs.cloud9.eu-central-1.amazonaws.com","vfs.cloud9.eu-north-1.amazonaws.com","vfs.cloud9.eu-south-1.amazonaws.com","vfs.cloud9.eu-west-1.amazonaws.com","vfs.cloud9.eu-west-2.amazonaws.com","vfs.cloud9.eu-west-3.amazonaws.com","vfs.cloud9.il-central-1.amazonaws.com","vfs.cloud9.me-south-1.amazonaws.com","vfs.cloud9.sa-east-1.amazonaws.com","vfs.cloud9.us-east-1.amazonaws.com","vfs.cloud9.us-east-2.amazonaws.com","vfs.cloud9.us-west-1.amazonaws.com","vfs.cloud9.us-west-2.amazonaws.com","vg","vgs.no","vi","vi.it","vi.us","viajes","vibehost.space","vibekit.page","vibo-valentia.it","vibovalentia.it","vic.au","vic.edu.au","vic.gov.au","vicenza.it","vicp.fun","video","video.hu","view.fast","vig","vik.no","viking","vikna.no","villas","vin","vindafjord.no","vinhlong.vn","vinhphuc.vn","vinnica.ua","vinnytsia.ua","vip","vip.jelastic.cloud","vipsinaapp.com","virgin","virtual-user.de","virtualserver.io","virtualuser.de","visa","vision","vistablog.ir","viterbo.it","viva","vivenushop.com","vivenushop.dev","vivian.jp","vivo","vix.br","vki.kr","vlaanderen","vladikavkaz.ru","vladikavkaz.su","vladimir.ru","vladimir.su","vlog.br","vn","vn.ua","voagat.no","voati.host","vodka","volda.no","vologda.su","volvo","volyn.ua","voorloper.cloud","voss.no","vossevangen.no","vote","voting","voto","voyage","vp4.me","vpndns.net","vpnplus.to","vps-host.net","vps.hrsn.net","vps.mcdir.ru","vr.it","vs.it","vs.mythic-beasts.com","vt.it","vt.us","vu","vusercontent.net","vv.it","w-corp-staticblitz.com","w-credentialless-staticblitz.com","w-staticblitz.com","w.bg","w.se","wa.au","wa.edu.au","wa.gov.au","wa.us","wada.nagano.jp","wafflecell.com","wajiki.tokushima.jp","wajima.ishikawa.jp","wakasa.fukui.jp","wakasa.tottori.jp","wakayama.jp","wakayama.wakayama.jp","wake.okayama.jp","wakkanai.hokkaido.jp","wakuya.miyagi.jp","wal.app","walbrzych.pl","wales","walmart","walter","wang","wanggou","wanouchi.gifu.jp","warabi.saitama.jp","warmia.pl","warszawa.pl","washtenaw.mi.us","wasmer.app","wassamu.hokkaido.jp","watarai.mie.jp","watari.miyagi.jp","watch","watches","watson.jp","waw.pl","waw.scw.site","wazuka.kyoto.jp","we.bs","weather","weatherchannel","web","web.app","web.bo","web.core.usgovcloudapi.net","web.core.windows.net","web.do","web.erp.dev","web.gu","web.id","web.in","web.lk","web.nf","web.ni","web.pk","web.tj","web.tr","web.val.run","web.ve","web.za","webadorsite.com","webcam","weber","webflow.io","webflowtest.io","webhop.biz","webhop.info","webhop.me","webhop.net","webhop.org","webhosting.be","weblike.jp","webredirect.org","website","website.k2.cloud","website.one","website.ru-msk.k2.cloud","website.ru-spb.k2.cloud","website.yandexcloud.net","websitebuilder.online","websozai.jp","webspace-host.com","webspace.rocks","webspaceconfig.de","webthings.io","webview-assets.aws-cloud9.af-south-1.amazonaws.com","webview-assets.aws-cloud9.ap-east-1.amazonaws.com","webview-assets.aws-cloud9.ap-northeast-1.amazonaws.com","webview-assets.aws-cloud9.ap-northeast-2.amazonaws.com","webview-assets.aws-cloud9.ap-northeast-3.amazonaws.com","webview-assets.aws-cloud9.ap-south-1.amazonaws.com","webview-assets.aws-cloud9.ap-southeast-1.amazonaws.com","webview-assets.aws-cloud9.ap-southeast-2.amazonaws.com","webview-assets.aws-cloud9.ca-central-1.amazonaws.com","webview-assets.aws-cloud9.eu-central-1.amazonaws.com","webview-assets.aws-cloud9.eu-north-1.amazonaws.com","webview-assets.aws-cloud9.eu-south-1.amazonaws.com","webview-assets.aws-cloud9.eu-west-1.amazonaws.com","webview-assets.aws-cloud9.eu-west-2.amazonaws.com","webview-assets.aws-cloud9.eu-west-3.amazonaws.com","webview-assets.aws-cloud9.il-central-1.amazonaws.com","webview-assets.aws-cloud9.me-south-1.amazonaws.com","webview-assets.aws-cloud9.sa-east-1.amazonaws.com","webview-assets.aws-cloud9.us-east-1.amazonaws.com","webview-assets.aws-cloud9.us-east-2.amazonaws.com","webview-assets.aws-cloud9.us-west-1.amazonaws.com","webview-assets.aws-cloud9.us-west-2.amazonaws.com","webview-assets.cloud9.af-south-1.amazonaws.com","webview-assets.cloud9.ap-east-1.amazonaws.com","webview-assets.cloud9.ap-northeast-1.amazonaws.com","webview-assets.cloud9.ap-northeast-2.amazonaws.com","webview-assets.cloud9.ap-northeast-3.amazonaws.com","webview-assets.cloud9.ap-south-1.amazonaws.com","webview-assets.cloud9.ap-southeast-1.amazonaws.com","webview-assets.cloud9.ap-southeast-2.amazonaws.com","webview-assets.cloud9.ca-central-1.amazonaws.com","webview-assets.cloud9.eu-central-1.amazonaws.com","webview-assets.cloud9.eu-north-1.amazonaws.com","webview-assets.cloud9.eu-south-1.amazonaws.com","webview-assets.cloud9.eu-west-1.amazonaws.com","webview-assets.cloud9.eu-west-2.amazonaws.com","webview-assets.cloud9.eu-west-3.amazonaws.com","webview-assets.cloud9.me-south-1.amazonaws.com","webview-assets.cloud9.sa-east-1.amazonaws.com","webview-assets.cloud9.us-east-1.amazonaws.com","webview-assets.cloud9.us-east-2.amazonaws.com","webview-assets.cloud9.us-west-1.amazonaws.com","webview-assets.cloud9.us-west-2.amazonaws.com","wed","wedding","weeklylottery.org.uk","wegrow.pl","weibo","weir","west1-us.cloudjiffy.net","westcentralus-01.azurewebsites.net","westeurope-01.azurewebsites.net","westeurope.azurestaticapps.net","westindia-01.azurewebsites.net","westus-01.azurewebsites.net","westus2-01.azurewebsites.net","westus2.azurestaticapps.net","westus3-01.azurewebsites.net","wf","whitesnow.jp","whm.fr-par.scw.cloud","whm.nl-ams.scw.cloud","whoswho","wi.us","wielun.pl","wien","wien.funkfeuer.at","wif.gov.pl","wiih.gov.pl","wiki","wiki.bo","wiki.br","williamhill","win","winb.gov.pl","windows","windsurf.app","windsurf.build","wine","winners","wios.gov.pl","wiredbladehosting.com","witd.gov.pl","with.playit.plus","withgoogle.com","withyoutube.com","wiw.gov.pl","wix.run","wixsite.com","wixstudio.com","wixstudio.io","wjg.jp","wkz.gov.pl","wlocl.pl","wloclawek.pl","wmcloud.org","wme","wmflabs.org","wnext.app","wodzislaw.pl","wolomin.pl","woltlab-demo.com","woodside","work","workers.dev","workinggroup.aero","workisboring.com","works","works.aero","world","worse-than.tv","wow","wp2.host","wpdevcloud.com","wpenginepowered.com","wphostedmail.com","wpmucdn.com","wpmudev.host","wpsquared.site","writesthisblog.com","wroc.pl","wroclaw.pl","ws","wsa.gov.pl","wskr.gov.pl","wsse.gov.pl","wtc","wtf","wuoz.gov.pl","wv.us","www.ro","wy.us","wz.io","wz.org","wzmiuw.gov.pl","x.bg","x.mythic-beasts.com","x.se","x0.com","x0.to","x443.pw","xbox","xen.prgmr.com","xerox","xihuan","xii.jp","xin","xj.cn","xmit.dev","xn--0trq7p7nn.jp","xn--11b4c3d","xn--12c1fe0br.xn--o3cw4h","xn--12cfi8ixb8l.xn--o3cw4h","xn--12co0c3b4eva.xn--o3cw4h","xn--1ck2e1b","xn--1ctwo.jp","xn--1lqs03n.jp","xn--1lqs71d.jp","xn--1qqw23a","xn--2m4a15e.jp","xn--2scrj9c","xn--30rr7y","xn--32vp30h.jp","xn--3bst00m","xn--3ds443g","xn--3e0b707e","xn--3hcrj9c","xn--3pxu8k","xn--41a.xn--p1acf","xn--42c2d9a","xn--45br5cyl","xn--45brj9c","xn--45q11c","xn--4dbgdty6c.xn--4dbrk0ce","xn--4dbrk0ce","xn--4gbrim","xn--4it168d.jp","xn--4it797k.jp","xn--4pvxs.jp","xn--54b7fta0cc","xn--55qw42g","xn--55qx5d","xn--55qx5d.cn","xn--55qx5d.hk","xn--55qx5d.xn--j6w193g","xn--5dbhl8d.xn--4dbrk0ce","xn--5js045d.jp","xn--5rtp49c.jp","xn--5rtq34k.jp","xn--5su34j936bgsg","xn--5tzm5g","xn--6btw5a.jp","xn--6frz82g","xn--6orx2r.jp","xn--6qq986b3xl","xn--7t0a264c.jp","xn--80aaa0cvac.xn--p1acf","xn--80adxhks","xn--80ao21a","xn--80aqecdr1a","xn--80asehdb","xn--80aswg","xn--80au.xn--90a3ac","xn--8dbq2a.xn--4dbrk0ce","xn--8ltr62k.jp","xn--8pvr4u.jp","xn--8y0a063a","xn--90a1af.xn--p1acf","xn--90a3ac","xn--90ae","xn--90ais","xn--90amc.xn--p1acf","xn--90azh.xn--90a3ac","xn--9dbq2a","xn--9et52u","xn--9krt00a","xn--9tfky.id","xn--andy-ira.no","xn--aroport-bya.ci","xn--asky-ira.no","xn--aurskog-hland-jnb.no","xn--avery-yua.no","xn--b-5ga.nordland.no","xn--b-5ga.telemark.no","xn--b4w605ferd","xn--balsan-sdtirol-nsb.it","xn--bck1b9a5dre4c","xn--bdddj-mrabd.no","xn--bearalvhki-y4a.no","xn--berlevg-jxa.no","xn--bhcavuotna-s4a.no","xn--bhccavuotna-k7a.no","xn--bidr-5nac.no","xn--bievt-0qa.no","xn--bjddar-pta.no","xn--blt-elab.no","xn--bmlo-gra.no","xn--bod-2na.no","xn--bozen-sdtirol-2ob.it","xn--brnny-wuac.no","xn--brnnysund-m8ac.no","xn--brum-voa.no","xn--btsfjord-9za.no","xn--bulsan-sdtirol-nsb.it","xn--c1avg","xn--c1avg.xn--90a3ac","xn--c1avg.xn--p1acf","xn--c2br7g","xn--c3s14m.jp","xn--cck2b3b","xn--cckwcxetd","xn--cesena-forl-mcb.it","xn--cesenaforl-i8a.it","xn--cg4bki","xn--ciqpn.hk","xn--clchc0ea0b2g2a9gcd","xn--czr694b","xn--czrs0t","xn--czru2d","xn--d1acj3b","xn--d1alf","xn--d1at.xn--90a3ac","xn--d5qv7z876c.jp","xn--davvenjrga-y4a.no","xn--djrs72d6uy.jp","xn--djty4k.jp","xn--dnna-gra.no","xn--drbak-wua.no","xn--dyry-ira.no","xn--e1a4c","xn--eckvdtc9d","xn--efvn9s.jp","xn--efvy88h","xn--ehqz56n.jp","xn--elqq16h.jp","xn--eveni-0qa01ga.no","xn--f6qx53a.jp","xn--fct429k","xn--fhbei","xn--finny-yua.no","xn--fiq228c5hs","xn--fiq64b","xn--fiqs8s","xn--fiqz9s","xn--fjord-lra.no","xn--fjq720a","xn--fl-zia.no","xn--flor-jra.no","xn--flw351e","xn--forl-cesena-fcb.it","xn--forlcesena-c8a.it","xn--fpcrj9c3d","xn--frde-gra.no","xn--frna-woa.no","xn--frya-hra.no","xn--fzc2c9e2c","xn--fzys8d69uvgm","xn--g2xx48c","xn--gckr3f0f","xn--gecrj9c","xn--ggaviika-8ya47h.no","xn--gildeskl-g0a.no","xn--givuotna-8ya.no","xn--gjvik-wua.no","xn--gk3at1e","xn--gls-elac.no","xn--gmq050i.hk","xn--gmqw5a.hk","xn--gmqw5a.xn--j6w193g","xn--gnstigbestellen-zvb.de","xn--gnstigliefern-wob.de","xn--h-2fa.no","xn--h1ahn.xn--p1acf","xn--h1aliz.xn--p1acf","xn--h2breg3eve","xn--h2brj9c","xn--h2brj9c8c","xn--h3cuzk1di.xn--o3cw4h","xn--hamary-fya.no","xn--hbmer-xqa.no","xn--hcesuolo-7ya35b.no","xn--hebda8b.xn--4dbrk0ce","xn--hery-ira.nordland.no","xn--hery-ira.xn--mre-og-romsdal-qqb.no","xn--hgebostad-g3a.no","xn--hkkinen-5wa.fi","xn--hmmrfeasta-s4ac.no","xn--hnefoss-q1a.no","xn--hobl-ira.no","xn--holtlen-hxa.no","xn--hpmir-xqa.no","xn--hxt814e","xn--hyanger-q1a.no","xn--hylandet-54a.no","xn--i1b6b1a6a2e","xn--imr513n","xn--indery-fya.no","xn--io0a7i","xn--io0a7i.cn","xn--io0a7i.hk","xn--j1adp.xn--p1acf","xn--j1aef","xn--j1aef.xn--p1acf","xn--j1ael8b.xn--p1acf","xn--j1amh","xn--j6w193g","xn--jlq480n2rg","xn--jlster-bya.no","xn--jrpeland-54a.no","xn--jvr189m","xn--k7yn95e.jp","xn--karlsy-fya.no","xn--karmy-yua.no","xn--kbrq7o.jp","xn--kcrx77d1x4a","xn--kfjord-iua.no","xn--klbu-woa.no","xn--klt787d.jp","xn--kltp7d.jp","xn--kltx9a.jp","xn--klty5x.jp","xn--koluokta-7ya57h.no","xn--kprw13d","xn--kpry57d","xn--kput3i","xn--krager-gya.no","xn--kranghke-b0a.no","xn--krdsherad-m8a.no","xn--krehamn-dxa.no","xn--krjohka-hwab49j.no","xn--ksnes-uua.no","xn--kvfjord-nxa.no","xn--kvitsy-fya.no","xn--kvnangen-k0a.no","xn--l-1fa.no","xn--l1acc","xn--laheadju-7ya.no","xn--langevg-jxa.no","xn--lcvr32d.hk","xn--ldingen-q1a.no","xn--leagaviika-52b.no","xn--lesund-hua.no","xn--lgbbat1ad8j","xn--lgrd-poac.no","xn--lhppi-xqa.no","xn--linds-pra.no","xn--loabt-0qa.no","xn--lrdal-sra.no","xn--lrenskog-54a.no","xn--lt-liac.no","xn--lten-gra.no","xn--lury-ira.no","xn--m3ch0j3a.xn--o3cw4h","xn--mely-ira.no","xn--merker-kua.no","xn--mgb2ddes","xn--mgb9awbf","xn--mgba3a3ejt","xn--mgba3a4f16a","xn--mgba3a4f16a.ir","xn--mgba3a4fra","xn--mgba3a4fra.ir","xn--mgba7c0bbn0a","xn--mgbaam7a8h","xn--mgbab2bd","xn--mgbah1a3hjkrd","xn--mgbai9a5eva00b","xn--mgbai9azgqp6j","xn--mgbayh7gpa","xn--mgbbh1a","xn--mgbbh1a71e","xn--mgbc0a9azcg","xn--mgbca7dzdo","xn--mgbcpq6gpa1a","xn--mgberp4a5d4a87g","xn--mgberp4a5d4ar","xn--mgbgu82a","xn--mgbi4ecexp","xn--mgbpl2fh","xn--mgbqly7c0a67fbc","xn--mgbqly7cvafr","xn--mgbt3dhd","xn--mgbtf8fl","xn--mgbtx2b","xn--mgbx4cd0ab","xn--mix082f","xn--mix891f","xn--mjndalen-64a.no","xn--mk0axi.hk","xn--mk1bu44c","xn--mkru45i.jp","xn--mlatvuopmi-s4a.no","xn--mli-tla.no","xn--mlselv-iua.no","xn--moreke-jua.no","xn--mori-qsa.nz","xn--mosjen-eya.no","xn--mot-tla.no","xn--msy-ula0h.no","xn--mtta-vrjjat-k7af.no","xn--muost-0qa.no","xn--mxtq1m","xn--mxtq1m.hk","xn--mxtq1m.xn--j6w193g","xn--ngbc5azd","xn--ngbe9e0a","xn--ngbrx","xn--nit225k.jp","xn--nmesjevuemie-tcba.no","xn--nnx388a","xn--node","xn--nqv7f","xn--nqv7fs00ema","xn--nry-yla5g.no","xn--ntso0iqx3a.jp","xn--ntsq17g.jp","xn--nttery-byae.no","xn--nvuotna-hwa.no","xn--nyqy26a","xn--o1ac.xn--90a3ac","xn--o1ach.xn--90a3ac","xn--o3cw4h","xn--o3cyx2a.xn--o3cw4h","xn--od0alg.cn","xn--od0alg.hk","xn--od0alg.xn--j6w193g","xn--od0aq3b.hk","xn--ogbpf8fl","xn--oppegrd-ixa.no","xn--ostery-fya.no","xn--osyro-wua.no","xn--otu796d","xn--p1acf","xn--p1ai","xn--pgbs0dh","xn--porsgu-sta26f.no","xn--pssu33l.jp","xn--pssy2u","xn--q7ce6a","xn--q9jyb4c","xn--qcka1pmc","xn--qqqt11m.jp","xn--qxa6a","xn--qxam","xn--rady-ira.no","xn--rdal-poa.no","xn--rde-ula.no","xn--rdy-0nab.no","xn--rennesy-v1a.no","xn--rhkkervju-01af.no","xn--rholt-mra.no","xn--rhqv96g","xn--rht27z.jp","xn--rht3d.jp","xn--rht61e.jp","xn--risa-5na.no","xn--risr-ira.no","xn--rland-uua.no","xn--rlingen-mxa.no","xn--rmskog-bya.no","xn--rny31h.jp","xn--rovu88b","xn--rros-gra.no","xn--rskog-uua.no","xn--rst-0na.no","xn--rsta-fra.no","xn--rvc1e0am3e","xn--ryken-vua.no","xn--ryrvik-bya.no","xn--s-1fa.no","xn--s9brj9c","xn--sandnessjen-ogb.no","xn--sandy-yua.no","xn--sdtirol-n2a.it","xn--seral-lra.no","xn--ses554g","xn--sgne-gra.no","xn--skierv-uta.no","xn--skjervy-v1a.no","xn--skjk-soa.no","xn--sknit-yqa.no","xn--sknland-fxa.no","xn--slat-5na.no","xn--slt-elab.no","xn--smla-hra.no","xn--smna-gra.no","xn--snase-nra.no","xn--sndre-land-0cb.no","xn--snes-poa.no","xn--snsa-roa.no","xn--sr-aurdal-l8a.no","xn--sr-fron-q1a.no","xn--sr-odal-q1a.no","xn--sr-varanger-ggb.no","xn--srfold-bya.no","xn--srreisa-q1a.no","xn--srum-gra.no","xn--stjrdal-s1a.no","xn--stjrdalshalsen-sqb.no","xn--stre-toten-zcb.no","xn--t60b56a","xn--tckwe","xn--tiq49xqyj","xn--tjme-hra.no","xn--tn0ag.hk","xn--tnsberg-q1a.no","xn--tor131o.jp","xn--trany-yua.no","xn--trentin-sd-tirol-rzb.it","xn--trentin-sdtirol-7vb.it","xn--trentino-sd-tirol-c3b.it","xn--trentino-sdtirol-szb.it","xn--trentinosd-tirol-rzb.it","xn--trentinosdtirol-7vb.it","xn--trentinsd-tirol-6vb.it","xn--trentinsdtirol-nsb.it","xn--trgstad-r1a.no","xn--trna-woa.no","xn--troms-zua.no","xn--tysvr-vra.no","xn--uc0atv.hk","xn--uc0atv.xn--j6w193g","xn--uc0ay4a.hk","xn--uist22h.jp","xn--uisz3g.jp","xn--unjrga-rta.no","xn--unup4y","xn--uuwu58a.jp","xn--vads-jra.no","xn--valle-aoste-ebb.it","xn--valle-d-aoste-ehb.it","xn--valleaoste-e7a.it","xn--valledaoste-ebb.it","xn--vard-jra.no","xn--vegrshei-c0a.no","xn--vermgensberater-ctb","xn--vermgensberatung-pwb","xn--vestvgy-ixa6o.no","xn--vg-yiab.no","xn--vgan-qoa.no","xn--vgsy-qoa0j.no","xn--vgu402c.jp","xn--vhquv","xn--vler-qoa.hedmark.no","xn--vler-qoa.xn--stfold-9xa.no","xn--vre-eiker-k8a.no","xn--vrggt-xqad.no","xn--vry-yla5g.no","xn--vuq861b","xn--w4r85el8fhu5dnra","xn--w4rs40l","xn--wcvs22d.hk","xn--wcvs22d.xn--j6w193g","xn--wgbh1c","xn--wgbl6a","xn--xhq521b","xn--xkc2al3hye2a","xn--xkc2dl3a5ee0h","xn--y9a3aq","xn--yer-zna.no","xn--yfro4i67o","xn--ygarden-p1a.no","xn--ygbi2ammx","xn--ystre-slidre-ujb.no","xn--zbx025d.jp","xn--zf0avx.hk","xn--zfr164b","xs4all.space","xtooldevice.com","xwx.me","xx.kg","xxx","xxx.ec","xyz","xyz.br","xz.cn","y.bg","y.se","yabu.hyogo.jp","yabuki.fukushima.jp","yachimata.chiba.jp","yachiyo.chiba.jp","yachiyo.ibaraki.jp","yachts","yaese.okinawa.jp","yahaba.iwate.jp","yahiko.niigata.jp","yahoo","yaita.tochigi.jp","yaizu.shizuoka.jp","yakage.okayama.jp","yakumo.hokkaido.jp","yakumo.shimane.jp","yali.mythic-beasts.com","yalta.ua","yamada.fukuoka.jp","yamada.iwate.jp","yamada.toyama.jp","yamaga.kumamoto.jp","yamagata.gifu.jp","yamagata.ibaraki.jp","yamagata.jp","yamagata.nagano.jp","yamagata.yamagata.jp","yamaguchi.jp","yamakita.kanagawa.jp","yamamoto.miyagi.jp","yamanakako.yamanashi.jp","yamanashi.jp","yamanashi.yamanashi.jp","yamanobe.yamagata.jp","yamanouchi.nagano.jp","yamashina.kyoto.jp","yamato.fukushima.jp","yamato.kanagawa.jp","yamato.kumamoto.jp","yamatokoriyama.nara.jp","yamatotakada.nara.jp","yamatsuri.fukushima.jp","yamaxun","yamazoe.nara.jp","yame.fukuoka.jp","yanagawa.fukuoka.jp","yanaizu.fukushima.jp","yandex","yandexcloud.net","yao.osaka.jp","yaotsu.gifu.jp","yarrow-point.wa.us","yasaka.nagano.jp","yashio.saitama.jp","yashiro.hyogo.jp","yasu.shiga.jp","yasuda.kochi.jp","yasugi.shimane.jp","yasuoka.nagano.jp","yatomi.aichi.jp","yatsuka.shimane.jp","yatsushiro.kumamoto.jp","yawara.ibaraki.jp","yawata.kyoto.jp","yawatahama.ehime.jp","yazu.tottori.jp","ye","yenbai.vn","yicp.fun","yk.ca","yn.cn","ynh.fr","yodobashi","yoga","yoichi.hokkaido.jp","yoita.niigata.jp","yoka.hyogo.jp","yokaichiba.chiba.jp","yokawa.hyogo.jp","yokkaichi.mie.jp","yokohama","yokoshibahikari.chiba.jp","yokosuka.kanagawa.jp","yokote.akita.jp","yokoze.saitama.jp","yolasite.com","yomitan.okinawa.jp","yonabaru.okinawa.jp","yonago.tottori.jp","yonaguni.okinawa.jp","yonezawa.yamagata.jp","yono.saitama.jp","yorii.saitama.jp","yoro.gifu.jp","yoshida.saitama.jp","yoshida.shizuoka.jp","yoshikawa.saitama.jp","yoshimi.saitama.jp","yoshino.nara.jp","yoshinogari.saga.jp","yoshioka.gunma.jp","yotsukaido.chiba.jp","you","you2.pl","youtube","yt","yuasa.wakayama.jp","yufu.oita.jp","yugawa.fukushima.jp","yugawara.kanagawa.jp","yuki.ibaraki.jp","yukuhashi.fukuoka.jp","yun","yura.wakayama.jp","yurihonjo.akita.jp","yusuhara.kochi.jp","yusui.kagoshima.jp","yuu.yamaguchi.jp","yuza.yamagata.jp","yuzawa.niigata.jp","z.bg","z.se","za.bz","za.com","za.net","za.org","zabc.net","zachpomor.pl","zagan.pl","zakarpattia.ua","zakopane.pl","zama.kanagawa.jp","zamami.okinawa.jp","zao.miyagi.jp","zap.cloud","zaporizhzhe.ua","zaporizhzhia.ua","zappos","zapto.org","zara","zarow.pl","zeabur.app","zentsuji.kagawa.jp","zero","zgierz.pl","zgora.pl","zgorzelec.pl","zhitomir.ua","zhytomyr.ua","zicp.fun","zip","zj.cn","zlg.br","zm","zombie.jp","zone","zone.id","zp.gov.pl","zp.ua","zpisdn.gov.pl","zt.ua","zuerich","zushi.kanagawa.jp","zw"]);
    // Geometry uses only this plugin's trigger and viewport. No host DOM lookup.
    function placeQuotaPopup(rect, viewport) {
      if (!rect || !viewport || ![rect.left, rect.right, rect.top, rect.bottom, viewport.left, viewport.top, viewport.width, viewport.height].every(Number.isFinite)) return null;
      const margin = 12, gap = 8;
      if (viewport.width <= margin * 2 || viewport.height <= margin * 2 || rect.right <= rect.left || rect.bottom <= rect.top) return null;
      if (rect.bottom <= viewport.top || rect.top >= viewport.top + viewport.height || rect.right <= viewport.left || rect.left >= viewport.left + viewport.width) return null;
      const width = Math.min(420, viewport.width - margin * 2);
      const left = Math.max(viewport.left + margin, Math.min(rect.right - width, viewport.left + viewport.width - margin - width));
      const availableAbove = rect.top - gap - viewport.top - margin;
      if (availableAbove >= 160) return { left, width, top: rect.top - gap, maxHeight: Math.min(600, availableAbove), above: true };
      // An exceptionally short viewport gets a bounded overlay, never flow content.
      return { left, width, top: viewport.top + margin, maxHeight: viewport.height - margin * 2, above: false };
    }
    const DEFAULT_COLOR_THRESHOLDS = Object.freeze({ greenMin: 50, orangeMin: 25 });
    function validColorThresholds(value) {
      return Boolean(value && Number.isInteger(value.greenMin) && Number.isInteger(value.orangeMin) && value.orangeMin >= 0 && value.orangeMin < value.greenMin && value.greenMin <= 100);
    }
    function parseThresholdDraft(greenMin, orangeMin) {
      if (![greenMin, orangeMin].every(value => typeof value === 'string' && /^\d{1,3}$/.test(value.trim()))) return null;
      const thresholds = { greenMin: Number(greenMin.trim()), orangeMin: Number(orangeMin.trim()) };
      return validColorThresholds(thresholds) ? thresholds : null;
    }
    const PROVIDER_ROUTE_PATTERN = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
    const PROVIDER_INPUT_MODALITIES = Object.freeze(['text', 'image']);
    function validProviderRouteId(value) {
      return typeof value === 'string' && PROVIDER_ROUTE_PATTERN.test(value);
    }
    function normalizeDiscoveredModel(value) {
      if (!value || typeof value !== 'object' || Array.isArray(value) || typeof value.id !== 'string' || !value.id.trim()) return null;
      const model = { id: value.id.trim() };
      if (typeof value.name === 'string' && value.name.trim()) model.name = value.name.trim();
      for (const key of ['contextWindow', 'maxTokens']) {
        if (Number.isSafeInteger(value[key]) && value[key] > 0) model[key] = value[key];
      }
      const declaredInput = Array.isArray(value.inputModalities) ? value.inputModalities : value.input;
      if (Array.isArray(declaredInput)) {
        const input = [...new Set(declaredInput.filter(item => PROVIDER_INPUT_MODALITIES.includes(item)))];
        if (input.length) model.input = input;
      }
      return model;
    }
    function dedupeDiscoveredModels(values) {
      if (!Array.isArray(values)) return [];
      const found = new Map();
      for (const value of values) {
        const model = normalizeDiscoveredModel(value);
        if (model && !found.has(model.id)) found.set(model.id, model);
      }
      return [...found.values()];
    }
    const PROVIDER_DISCOVERY_SOURCE = Object.freeze({
      live: 'providerManagerDiscoverySourceLive',
      'dsh-catalog': 'providerManagerDiscoverySourceCatalog',
      'dsh-discovery': 'providerManagerDiscoverySourceDsh',
    });
    const PROVIDER_DISCOVERY_FALLBACK = Object.freeze({
      unsupported: 'providerManagerDiscoveryFallbackUnsupported',
      'unsafe-endpoint': 'providerManagerDiscoveryFallbackUnsafe',
      failed: 'providerManagerDiscoveryFallbackFailed',
      network: 'providerManagerDiscoveryFallbackNetwork',
      'platform-error': 'providerManagerDiscoveryFallbackPlatformError',
      timeout: 'providerManagerDiscoveryFallbackTimeout',
      authentication: 'providerManagerDiscoveryFallbackAuthentication',
      'missing-credential': 'providerManagerDiscoveryFallbackMissingCredential',
    });
    const PROVIDER_DISCOVERY_SCOPE = Object.freeze({
      credential: 'providerManagerDiscoveryScopeCredential',
      public: 'providerManagerDiscoveryScopePublic',
    });
    const PROVIDER_DISCOVERY_ERROR = Object.freeze({
      ...PROVIDER_DISCOVERY_FALLBACK,
      'invalid-request': 'providerManagerDiscoveryInvalid',
      forbidden: 'providerManagerDiscoveryForbidden',
      busy: 'providerManagerDiscoveryBusy',
      cancelled: 'providerManagerDiscoveryCancelled',
    });
    async function requestProviderModelDiscovery(baseURI, fetcher, settingsNs, request, signal) {
      try {
        signal.throwIfAborted();
        const common = { credentials: 'same-origin', cache: 'no-store', redirect: 'error', signal };
        const settings = await fetcher(new URL('api/provider-quota-settings', baseURI), {
          ...common, method: 'GET', headers: { Accept: 'application/json' },
        });
        if (!settings.ok) return { kind: 'refused' };
        const { csrf } = await settings.json();
        if (typeof csrf !== 'string' || !/^[A-Za-z0-9_-]{43}$/.test(csrf)) return { kind: 'refused' };
        signal.throwIfAborted();
        const payload = { settingsNs };
        for (const key of ['provider', 'baseURL', 'api', 'apiKey']) {
          if (typeof request[key] === 'string' && request[key]) payload[key] = request[key];
        }
        if (request.endpointChanged === true) payload.endpointChanged = true;
        const response = await fetcher(new URL('api/provider-quota-model-discovery', baseURI), {
          ...common, method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'X-Quota-Settings-CSRF': csrf },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        signal.throwIfAborted();
        if (typeof data?.error === 'string' && Object.hasOwn(PROVIDER_DISCOVERY_ERROR, data.error)) return { kind: 'refused', reason: data.error };
        if (!response.ok || !data || Object.hasOwn(data, 'error') || typeof data.source !== 'string' || !Object.hasOwn(PROVIDER_DISCOVERY_SOURCE, data.source) || !Array.isArray(data.models)) return { kind: 'refused' };
        const reason = data.source !== 'live' && typeof data.reason === 'string' && Object.hasOwn(PROVIDER_DISCOVERY_FALLBACK, data.reason) ? data.reason : null;
        const scope = data.source === 'live' && typeof data.scope === 'string' && Object.hasOwn(PROVIDER_DISCOVERY_SCOPE, data.scope) ? data.scope : null;
        return { kind: 'found', source: data.source, models: data.models, reason, scope };
      } catch {
        return { kind: 'refused' };
      }
    }
    function providerModelIssue(models, requireOne = false) {
      if (!Array.isArray(models)) return { kind: 'invalid' };
      if (requireOne && models.length === 0) return { kind: 'required' };
      const ids = new Set();
      for (let index = 0; index < models.length; index++) {
        const model = models[index];
        if (!model || typeof model.id !== 'string' || !model.id.trim()) return { kind: 'id', index, field: 'id' };
        const id = model.id.trim();
        if (ids.has(id)) return { kind: 'duplicate', index, field: 'id' };
        ids.add(id);
        for (const field of ['contextWindow', 'maxTokens']) {
          if (model[field] !== undefined && (!Number.isSafeInteger(model[field]) || model[field] <= 0)) return { kind: 'capacity', index, field };
        }
        if (model.input !== undefined && (!Array.isArray(model.input) || model.input.some(item => !PROVIDER_INPUT_MODALITIES.includes(item)))) return { kind: 'modalities', index, field: 'input' };
      }
      return null;
    }
    function providerModelsError(models, requireOne = false) {
      return providerModelIssue(models, requireOne)?.kind ?? null;
    }
    function providerReasoningCapabilities(node, protocol) {
      if (node?.type !== 'union' || node.list?.length !== 2) return null;
      const branches = node.list;
      if (!branches.some(branch => branch?.type === 'const' && branch.value === false)) return null;
      const dict = branches.find(branch => branch?.type === 'dict');
      if (!dict) return null;
      const values = dict.inner?.type === 'union' ? dict.inner.list : [dict.inner];
      if (!Array.isArray(values) || !values.some(branch => branch?.type === 'string') || values.some(branch => branch?.type !== 'string' && !(branch?.type === 'const' && branch.value === null))) return null;
      const keys = dict.sKey?.type === 'union' ? dict.sKey.list : [dict.sKey];
      if (!Array.isArray(keys) || !keys.length || keys.length > 16 || keys.some(branch => branch?.type !== 'const' || typeof branch.value !== 'string' || !/^[a-z][a-z0-9]{0,31}$/.test(branch.value) || ['constructor', 'prototype'].includes(branch.value))) return null;
      const levelsOnly = protocol === 'google-generative-ai';
      const levels = [...new Set(keys.map(branch => branch.value))].filter(level => !levelsOnly || ['minimal', 'low', 'medium', 'high'].includes(level));
      if (!levels.some(level => level !== 'off')) return null;
      return { levels, levelsOnly, allowBlankOff: values.some(branch => branch?.type === 'const' && branch.value === null) };
    }
    // A selected level with a blank API value follows the official form's
    // same-name default. A nullable off is kept as the separate protocol default.
    function providerReasoningWireValue(level, value) {
      return typeof value === 'string' && !value.trim() ? level : value;
    }
    function providerReasoningIssue(rows, capability, checkProtocolChange = false) {
      const index = rows.findIndex(row => {
        if (!row.reasoningTouched && !(checkProtocolChange && capability?.levelsOnly && row.reasoningMode === 'custom')) return false;
        if (!capability || !['inherit', 'disabled', 'custom'].includes(row.reasoningMode)) return true;
        if (row.reasoningMode !== 'custom') return false;
        const efforts = Object.entries(row.reasoningEntries);
        return !efforts.some(([level]) => level !== 'off') || efforts.some(([level, value]) => {
          const wire = row.reasoningTouched ? providerReasoningWireValue(level, value) : value;
          return !capability.levels.includes(level) || (capability.levelsOnly ? wire !== level
            : wire === null ? level !== 'off' || !capability.allowBlankOff : typeof wire !== 'string' || !wire.trim());
        });
      });
      return index < 0 ? null : { kind: 'reasoning', index, field: 'reasoningEfforts' };
    }
    function providerModelDraftRow(model, draftKey) {
      const source = model && typeof model === 'object' && !Array.isArray(model) ? { ...model } : {};
      return {
        draftKey, source, id: typeof source.id === 'string' ? source.id : '', name: typeof source.name === 'string' ? source.name : '',
        contextWindow: source.contextWindow === undefined ? '' : String(source.contextWindow),
        maxTokens: source.maxTokens === undefined ? '' : String(source.maxTokens),
        modalities: Array.isArray(source.input) ? source.input.filter(value => PROVIDER_INPUT_MODALITIES.includes(value)) : [],
        inputTouched: false, nameTouched: false, contextTouched: false, maxTokensTouched: false,
        reasoningMode: source.reasoningEfforts === undefined ? 'inherit' : source.reasoningEfforts === false ? 'disabled' : 'custom',
        reasoningEntries: source.reasoningEfforts && typeof source.reasoningEfforts === 'object' && !Array.isArray(source.reasoningEfforts) ? { ...source.reasoningEfforts } : {},
        reasoningTouched: false,
      };
    }
    function moveProviderModelDraftRow(rows, from, to) {
      if (!Number.isInteger(from) || !Number.isInteger(to) || from < 0 || to < 0 || from >= rows.length || to >= rows.length || from === to) return rows;
      const next = [...rows];
      const [row] = next.splice(from, 1);
      next.splice(to, 0, row);
      return next;
    }
    function selectVisibleProviderCandidates(current, visible, alreadyAdded, selected) {
      const next = new Set(current);
      for (const model of visible) {
        if (typeof model.id !== 'string' || alreadyAdded.has(model.id)) continue;
        if (selected) next.add(model.id); else next.delete(model.id);
      }
      return next;
    }
    function providerEditorCompany(groups, companyKey, target, mode, snapshot) {
      if (target && mode !== 'custom' && snapshot) return snapshot;
      return groups.find(group => group.key === companyKey) ?? null;
    }
    function providerRetryPolicyBranches(node) {
      const branches = new Map();
      for (const branch of Array.isArray(node?.list) ? node.list : []) {
        const mode = branch?.dict?.mode?.value;
        if (typeof mode === 'string' && mode.length > 0 && mode.length <= 64 && !branches.has(mode)) branches.set(mode, branch);
      }
      return [...branches].map(([mode, branch]) => ({ mode, branch }));
    }
    function providerRetryPolicyOperations(userPolicy, mode, node, path) {
      if (mode === 'inherit') return userPolicy === undefined ? [] : [{ op: 'unset', path: [...path] }];
      const entry = providerRetryPolicyBranches(node).find(entry => entry.mode === mode);
      if (!entry) return [];
      const previous = userPolicy && typeof userPolicy === 'object' && !Array.isArray(userPolicy) ? userPolicy : {};
      if (previous.mode === mode) return [];
      const ops = [{ op: 'set', path: [...path, 'mode'], value: mode }];
      for (const key of Object.keys(previous)) {
        if (key !== 'mode' && !Object.hasOwn(entry.branch.dict, key)) ops.push({ op: 'unset', path: [...path, key] });
      }
      return ops;
    }
    function providerCredentialPlaceholder(credential, fallback) {
      if (credential?.configured !== true) return fallback;
      return typeof credential.masked === 'string' && credential.masked.length > 0 && credential.masked.length <= 512 ? credential.masked : '••••••••••••••••';
    }
    function providerModelDraftValue(row) {
      const value = { ...row.source, id: row.id.trim() };
      for (const [field, touched] of [['name', 'nameTouched'], ['contextWindow', 'contextTouched'], ['maxTokens', 'maxTokensTouched']]) {
        const text = row[field].trim();
        if (text) value[field] = field === 'name' ? text : Number(text);
        else if (row[touched]) delete value[field];
      }
      if (row.inputTouched) { if (row.modalities.length) value.input = [...row.modalities]; else delete value.input; }
      if (row.reasoningTouched) {
        if (row.reasoningMode === 'inherit') delete value.reasoningEfforts;
        else if (row.reasoningMode === 'disabled') value.reasoningEfforts = false;
        else if (row.reasoningMode === 'custom') value.reasoningEfforts = Object.fromEntries(Object.entries(row.reasoningEntries).map(([level, wire]) => [level, providerReasoningWireValue(level, wire)]));
      }
      return value;
    }
    function filterProviderModelDraftRows(rows, query) {
      const normalized = value => typeof value === 'string' ? value.slice(0, 512).normalize('NFKC').toLowerCase() : '';
      const tokens = normalized(typeof query === 'string' ? query.slice(0, 200) : '').trim().split(/\s+/u).filter(Boolean);
      return rows.map((row, index) => ({ row, index })).filter(({ row }) => !tokens.length || tokens.every(token => [row.id, row.name].some(value => normalized(value).includes(token))));
    }
    function codexCreditsPresentation(metric) {
      if (metric?.type !== 'credits' || metric.unit !== 'credits') return { state: 'unknown' };
      if (metric.state === 'balance') {
        return typeof metric.amount === 'string' && metric.amount.length > 0 && metric.amount.length <= 128 && metric.amount.trim() === metric.amount && /^-?\d+(?:\.\d+)?$/.test(metric.amount)
          ? { state: 'balance', amount: metric.amount } : { state: 'unknown' };
      }
      return ['unlimited', 'available', 'unavailable', 'unknown'].includes(metric.state) ? { state: metric.state } : { state: 'unknown' };
    }
    function formatCodexCreditsAmount(amount) {
      if (codexCreditsPresentation({ type: 'credits', unit: 'credits', state: 'balance', amount }).state !== 'balance') return '—';
      const negative = amount.startsWith('-');
      const [integer, fraction = ''] = (negative ? amount.slice(1) : amount).split('.');
      // Decimal-string rounding avoids binary floating-point precision loss.
      const hundredths = BigInt(integer) * 100n + BigInt((fraction + '00').slice(0, 2)) + (fraction.length > 2 && fraction[2] >= '5' ? 1n : 0n);
      const decimals = (hundredths % 100n).toString().padStart(2, '0').replace(/0+$/, '');
      return `${negative && hundredths !== 0n ? '-' : ''}${hundredths / 100n}${decimals ? `.${decimals}` : ''}`;
    }
    function quotaTone(row, thresholds = DEFAULT_COLOR_THRESHOLDS) {
      if (!row) return 'idle';
      if (row.stale) return 'warn';
      if (row.status !== 'ok') return ['unsupported', 'admin-key-required', 'unsupported-auth', 'account-changed', 'codex-auth-required', 'codex-auth-expired', 'no-plan', 'team-scope-required'].includes(row.status) ? 'idle' : 'error';
      const tones = dockMetricItems(row.metrics, thresholds).filter(item => item.metric.type === 'quota-window').map(item => item.tone);
      if (tones.includes('error') || row.metrics.some(metric => metric.type === 'balance' && Number(metric.amount) <= 0 && metric.wallet !== 'bonus')) return 'error';
      return tones.includes('warn') ? 'warn' : 'success';
    }
    function formatQuotaDate(value, { includeYear = true, utc = false, dateOnly = false } = {}) {
      if (!Number.isFinite(value)) return '—';
      const date = new Date(value);
      if (!Number.isFinite(date.getTime())) return '—';
      const field = name => date[`${utc ? 'getUTC' : 'get'}${name}`]();
      const pad = number => String(number).padStart(2, '0');
      const day = `${includeYear ? String(field('FullYear')).padStart(4, '0') + '/' : ''}${pad(field('Month') + 1)}/${pad(field('Date'))}`;
      return dateOnly ? day : `${day} ${pad(field('Hours'))}:${pad(field('Minutes'))}`;
    }
    function formatQuotaCountdown(value, now) {
      if (!Number.isFinite(value) || !Number.isFinite(now)) return '—';
      const minutes = Math.max(0, Math.ceil((value - now) / 60_000));
      if (minutes < 60) return `${minutes}m`;
      if (minutes < 24 * 60) return `${Math.floor(minutes / 60)}h${minutes % 60}m`;
      const days = Math.floor(minutes / (24 * 60));
      const hours = Math.floor(minutes / 60) % 24;
      const remainder = minutes % 60;
      return `${days}d${hours}h${remainder}m`;
    }
    function quotaBarTone(remainingPercent, thresholds = DEFAULT_COLOR_THRESHOLDS) {
      if (!Number.isFinite(remainingPercent)) return 'idle';
      const { greenMin, orangeMin } = validColorThresholds(thresholds) ? thresholds : DEFAULT_COLOR_THRESHOLDS;
      return remainingPercent >= greenMin ? 'success' : remainingPercent >= orangeMin ? 'warn' : 'error';
    }
    function dockMetricItems(metrics, thresholds = DEFAULT_COLOR_THRESHOLDS) {
      return metrics.flatMap(metric => {
        if (metric.type === 'quota-window') {
          if (!Number.isFinite(metric.usedPercent)) return [];
          const remainingPercent = 100 - Math.max(0, Math.min(100, metric.usedPercent));
          return [{ metric, remainingPercent, tone: quotaBarTone(remainingPercent, thresholds) }];
        }
        return ['balance', 'spend'].includes(metric.type) ? [{ metric, tone: null }] : [];
      });
    }
    const PUBLIC_SUFFIX_EXACT = new Set();
    const PUBLIC_SUFFIX_WILDCARD = new Set();
    const PUBLIC_SUFFIX_EXCEPTION = new Set();
    for (const rule of PUBLIC_SUFFIX_RULES) {
      if (rule.startsWith('!')) PUBLIC_SUFFIX_EXCEPTION.add(rule.slice(1));
      else if (rule.startsWith('*.')) PUBLIC_SUFFIX_WILDCARD.add(rule.slice(2));
      else PUBLIC_SUFFIX_EXACT.add(rule);
    }
    function modelProviderPublicSuffixLength(labels) {
      let best = 1; // PSL prevailing '*' rule.
      for (let start = 0; start < labels.length; start += 1) {
        const suffix = labels.slice(start).join('.');
        if (PUBLIC_SUFFIX_EXCEPTION.has(suffix)) return labels.length - start - 1;
        if (PUBLIC_SUFFIX_EXACT.has(suffix)) best = Math.max(best, labels.length - start);
        if (start < labels.length - 1 && PUBLIC_SUFFIX_WILDCARD.has(labels.slice(start + 1).join('.'))) {
          best = Math.max(best, labels.length - start);
        }
      }
      return best;
    }
    function modelProviderRegistrableDomain(value) {
      if (typeof value !== 'string' || !value || value.trim() !== value || /[\/:?#@\s]/.test(value)) return null;
      let host;
      try { host = new URL(`https://${value}/`).hostname.toLowerCase().replace(/\.$/, ''); }
      catch { return null; }
      if (!host || host.startsWith('[') || /^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) return null;
      const labels = host.split('.');
      const numericAddress = labels.every(label => label.length > 0 && [...label].every(character => character >= '0' && character <= '9'));
      if (numericAddress || host.length > 253 || labels.length < 2 || labels.some(label => !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(label))) return null;
      const suffixLength = modelProviderPublicSuffixLength(labels);
      if (labels.length <= suffixLength) return null;
      return labels.slice(-(suffixLength + 1)).join('.');
    }
    // BEGIN GENERATED COMPANY RULES
    const BUNDLED_CLIENT_COMPANY_RULES = Object.freeze({"schemaVersion":1,"revision":2026111901,"updatedAt":"2026-11-19T12:43:02.000Z","companies":[{"id":"openai","names":{"en":"OpenAI","zh":"OpenAI"},"domains":["chatgpt.com","openai.com"],"icon":"openai","evidence":["https://developers.openai.com/","https://help.openai.com/"]},{"id":"deepseek","names":{"en":"DeepSeek","zh":"DeepSeek"},"domains":["deepseek.com"],"icon":"deepseek","evidence":["https://api-docs.deepseek.com/"]},{"id":"moonshot-ai","names":{"en":"Moonshot AI","zh":"月之暗面"},"domains":["moonshot.ai","moonshot.cn","kimi.com","kimi.ai"],"icon":"kimi","evidence":["https://platform.moonshot.ai/docs/","https://platform.moonshot.cn/docs/","https://www.kimi.com/code/docs/kimi-code/faq.html","https://platform.kimi.ai/docs/agreement/modeluse"]},{"id":"anthropic","names":{"en":"Anthropic","zh":"Anthropic"},"domains":["anthropic.com","claude.ai"],"icon":"anthropic","evidence":["https://platform.claude.com/docs/","https://www.anthropic.com/"]},{"id":"google-gemini","names":{"en":"Google","zh":"Google"},"domains":["google.com"],"hostSuffixes":["googleapis.com"],"icon":"google","evidence":["https://ai.google.dev/gemini-api/docs/","https://support.google.com/gemini/"]},{"id":"minimax","names":{"en":"MiniMax","zh":"MiniMax"},"domains":["minimax.cn","minimax.io","minimaxi.com"],"icon":"minimax","evidence":["https://platform.minimax.io/docs/","https://platform.minimaxi.com/"]},{"id":"zhipu-ai","names":{"en":"Zhipu AI","zh":"智谱 AI"},"domains":["bigmodel.cn","z.ai"],"icon":"glm","evidence":["https://docs.bigmodel.cn/","https://docs.z.ai/"]},{"id":"spacexsi-grok","names":{"en":"SpaceXSI","zh":"SpaceXSI"},"domains":["grok.com","x.ai"],"icon":"xai","evidence":["https://docs.x.ai/","https://grok.com/"]},{"id":"ant-group","names":{"en":"Ant Group","zh":"蚂蚁集团"},"domains":["ant-ling.com"],"icon":"ant-group","evidence":["https://developer.ant-ling.com/zh-CN/docs/faq/","https://developer.ant-ling.com/zh-CN/docs/getting-started/quickstart/"]},{"id":"baseten","names":{"en":"Baseten","zh":"Baseten"},"domains":["baseten.co"],"icon":"baseten","evidence":["https://docs.baseten.co/reference/inference-api/overview.md","https://www.baseten.co/terms-and-conditions-january-30-2026/"]},{"id":"cerebras","names":{"en":"Cerebras","zh":"Cerebras"},"domains":["cerebras.ai","cerebras.net"],"icon":"cerebras","evidence":["https://inference-docs.cerebras.ai/quickstart.md","https://www.cerebras.ai/terms-of-service"]},{"id":"fireworks-ai","names":{"en":"Fireworks AI","zh":"Fireworks AI"},"domains":["fireworks.ai"],"icon":"fireworks-ai","evidence":["https://docs.fireworks.ai/nexus/apis-and-sdks.md"]},{"id":"github","names":{"en":"GitHub","zh":"GitHub"},"domains":["githubcopilot.com","github.com"],"icon":"github","evidence":["https://docs.github.com/en/copilot/reference/copilot-allowlist-reference"]},{"id":"groq","names":{"en":"Groq","zh":"Groq"},"domains":["groq.com"],"icon":"groq","evidence":["https://console.groq.com/docs/openai.md","https://groq.com/terms-of-use"]},{"id":"hugging-face","names":{"en":"Hugging Face","zh":"Hugging Face"},"domains":["huggingface.co"],"icon":"hugging-face","evidence":["https://huggingface.co/docs/inference-providers/en/tasks/chat-completion","https://huggingface.co/terms-of-service"]},{"id":"meta","names":{"en":"Meta","zh":"Meta"},"domains":["meta.ai"],"icon":"meta","evidence":["https://about.fb.com/news/2025/04/introducing-meta-ai-app-new-way-access-ai-assistant/amp/","https://ai.meta.com/meta-ai/"]},{"id":"mistral-ai","names":{"en":"Mistral AI","zh":"Mistral AI"},"domains":["mistral.ai"],"icon":"mistral-ai","evidence":["https://docs.mistral.ai/openapi.yaml"]},{"id":"nvidia","names":{"en":"NVIDIA","zh":"NVIDIA"},"domains":["nvidia.com"],"icon":"nvidia","evidence":["https://docs.api.nvidia.com/nim/reference/llm-apis.md"]},{"id":"openrouter","names":{"en":"OpenRouter","zh":"OpenRouter"},"domains":["openrouter.ai"],"icon":"openrouter","evidence":["https://openrouter.ai/docs/quickstart.md"]},{"id":"alibaba-cloud","names":{"en":"Alibaba Cloud","zh":"阿里云"},"domains":[],"exactHosts":["token-plan.ap-southeast-1.maas.aliyuncs.com","token-plan.cn-beijing.maas.aliyuncs.com"],"icon":"alibaba-cloud","evidence":["https://www.alibabacloud.com/help/en/model-studio/openclaw.md"]},{"id":"earendil","names":{"en":"Earendil Inc.","zh":"Earendil Inc."},"domains":["pi.dev","earendil.com"],"icon":"pi","evidence":["https://pi.dev/models/radius/precise","https://earendil.com/"]},{"id":"together-ai","names":{"en":"Together AI","zh":"Together AI"},"domains":["together.ai"],"icon":"together-ai","evidence":["https://docs.together.ai/docs/inference/openai-compatibility.md"]},{"id":"vercel","names":{"en":"Vercel","zh":"Vercel"},"domains":["vercel.com"],"exactHosts":["ai-gateway.vercel.sh"],"icon":"vercel","evidence":["https://vercel.com/docs/ai-gateway/sdks-and-apis/openai-chat-completions.md"]},{"id":"xiaomi","names":{"en":"Xiaomi","zh":"小米"},"domains":["xiaomimimo.com"],"icon":"xiaomi","evidence":["https://mimo.mi.com/llms-full.txt","https://mimo.mi.com/"]},{"id":"anomaly","names":{"en":"OpenCode","zh":"OpenCode"},"domains":["opencode.ai"],"icon":"opencode","evidence":["https://opencode.ai/legal/terms-of-service","https://opencode.ai/docs/console/models/"]},{"id":"typesafe-ai","names":{"en":"TypeSafe AI","zh":"TypeSafe AI"},"domains":["typesafe.ai"],"icon":"typesafe-ai","evidence":["https://docs.typesafe.ai/sdk/javascript/api/interfaces/TypeSafeClientConfig.md","https://typesafe.ai/legal/mca"]},{"id":"amazon-web-services","names":{"en":"Amazon Web Services","zh":"亚马逊云科技"},"domains":[],"exactHosts":["bedrock-runtime.us-east-1.amazonaws.com","bedrock-runtime.eu-central-1.amazonaws.com"],"icon":"amazon-web-services","evidence":["https://docs.aws.amazon.com/general/latest/gr/bedrock.html"]},{"id":"microsoft","names":{"en":"Microsoft","zh":"微软"},"domains":["microsoft.com"],"hostSuffixes":["openai.azure.com","services.ai.azure.com"],"icon":"microsoft","evidence":["https://learn.microsoft.com/en-us/azure/foundry/openai/api-version-lifecycle"]},{"id":"cloudflare","names":{"en":"Cloudflare","zh":"Cloudflare"},"domains":["cloudflare.com"],"icon":"cloudflare","evidence":["https://developers.cloudflare.com/ai-gateway/usage/providers/openai/"]}]});
    // END GENERATED COMPANY RULES
    // BEGIN GENERATED COMPANY BRAND MARKS
    const BUNDLED_COMPANY_BRAND_MARKS = Object.freeze({"alibaba-cloud":{"viewBox":"0 0 24 24","paths":["M3.996 4.517h5.291L8.01 6.324 4.153 7.506a1.668 1.668 0 0 0-1.165 1.601v5.786a1.668 1.668 0 0 0 1.165 1.6l3.857 1.183 1.277 1.807H3.996A3.996 3.996 0 0 1 0 15.487V8.513a3.996 3.996 0 0 1 3.996-3.996m16.008 0h-5.291l1.277 1.807 3.857 1.182c.715.227 1.17.889 1.165 1.601v5.786a1.668 1.668 0 0 1-1.165 1.6l-3.857 1.183-1.277 1.807h5.291A3.996 3.996 0 0 0 24 15.487V8.513a3.996 3.996 0 0 0-3.996-3.996m-4.007 8.345H8.002v-1.804h7.995Z"]},"amazon-web-services":{"viewBox":"0 0 24 24","paths":["M6.763 11.212c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.39-.384-.59-.894-.59-1.533 0-.678.24-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272-.09.04-.184.075-.28.104a.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167 4.577 4.577 0 011.005-.36 4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586h.016zm-3.24 1.214c.263 0 .534-.048.822-.144a1.78 1.78 0 00.758-.51 1.27 1.27 0 00.272-.512c.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 6.726a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.15 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32L12.32 7.747l-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08l-.686.001zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.32.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .36.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.16.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926a2.157 2.157 0 01-.583.703c-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z","M.378 15.475c3.384 1.963 7.56 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.44-.2.814.287.383.607-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351zm23.531-.2c.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151l.175-.439c.343-.88.802-2.198.52-2.555-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399z"],"fillRule":"evenodd"},"ant-group":{"viewBox":"0 0 24 24","paths":["M15.984 1.383c-.259.593-.877.914-1.334 1.348-.702.669-.998 1.726-1.218 2.682 3.37.775 5.995 3.532 6.486 7.025.566 4.016-1.85 7.859-5.744 9.134-3.894 1.276-8.153-.38-10.126-3.935A8.339 8.339 0 016.457 6.833a18.703 18.703 0 01-.376-.802l-.174-.408a8.698 8.698 0 01-.618-1.987 7.523 7.523 0 01-.051-.37 3.717 3.717 0 01-.024-.34 2.506 2.506 0 01.132-.872 1.26 1.26 0 01.384-.594.842.842 0 011.165.11c.694.82.169 2.078.142 3.02.009.575.111 1.144.301 1.684l-.103.052a8.404 8.404 0 001.318-.79c.28-.243.45-.742.781-.864.33-.121.682.146.946.297.278.145.587.219.901.214l.462.007c.076.002.152.005.226.011.212.01.422.026.63.05l.196-1.08c.04-.216.082-.43.126-.645l.141-.641c.14-.7.42-1.367.823-1.96.305-.431.75-.746 1.262-.89.877-.217 1.24.629.937 1.348zm-2.244 5.44c-2.841.002-4.898 2.532-4.628 5.64.27 3.11 2.781 5.642 5.613 5.666 2.832.024 4.932-2.512 4.658-5.644-.273-3.133-2.802-5.666-5.643-5.663zm.357.57a4.707 4.707 0 013.304 1.445 5.703 5.703 0 011.643 3.49 4.841 4.841 0 01-1.141 3.705v.015a3.923 3.923 0 01-2.808 1.303 4.664 4.664 0 01-3.367-1.387 5.678 5.678 0 01-1.71-3.518 4.832 4.832 0 011.14-3.753 3.923 3.923 0 012.813-1.3h.126z"],"fillRule":"evenodd"},"baseten":{"viewBox":"0 0 24 24","paths":["M2.316 4.8h14.682v4.8H7.31a.302.302 0 00-.308.3v4.2c0 .171.14.3.308.3h9.688v4.8h-4.686a.302.302 0 00-.308.3v4.2c0 .171.141.3.308.3h4.378a.297.297 0 00.308-.3v-4.5h4.694a.302.302 0 00.308-.3v-4.2c0-.171-.14-.3-.308-.3h-4.694V9.6h4.694A.302.302 0 0022 9.3V5.1c0-.171-.14-.3-.308-.3h-4.694V.3c0-.171-.14-.3-.308-.3H2.316A.31.31 0 002 .3v4.2c0 .171.14.3.316.3z"],"fillRule":"evenodd"},"cerebras":{"viewBox":"0 0 24 24","paths":["M14.121 2.701a9.299 9.299 0 000 18.598V22.7c-5.91 0-10.7-4.791-10.7-10.701S8.21 1.299 14.12 1.299V2.7zm4.752 3.677A7.353 7.353 0 109.42 17.643l-.901 1.074a8.754 8.754 0 01-1.08-12.334 8.755 8.755 0 0112.335-1.08l-.901 1.075zm-2.255.844a5.407 5.407 0 00-5.048 9.563l-.656 1.24a6.81 6.81 0 016.358-12.043l-.654 1.24zM14.12 8.539a3.46 3.46 0 100 6.922v1.402a4.863 4.863 0 010-9.726v1.402z","M15.407 10.836a2.24 2.24 0 00-.51-.409 1.084 1.084 0 00-.544-.152c-.255 0-.483.047-.684.14a1.58 1.58 0 00-.84.912c-.074.203-.11.416-.11.631 0 .218.036.43.11.631a1.594 1.594 0 00.84.913c.2.093.43.14.684.14.216 0 .417-.046.602-.135.188-.09.35-.225.475-.392l.928 1.006c-.14.14-.3.261-.482.363a3.367 3.367 0 01-1.083.38c-.17.026-.317.04-.44.04a3.315 3.315 0 01-1.182-.21 2.825 2.825 0 01-.961-.597 2.816 2.816 0 01-.644-.929 2.987 2.987 0 01-.238-1.21c0-.444.08-.847.238-1.21.15-.35.368-.666.643-.929.278-.261.605-.464.962-.596a3.315 3.315 0 011.182-.21c.355 0 .712.068 1.072.204.361.138.685.36.944.649l-.962.97z"],"fillRule":"evenodd"},"cloudflare":{"viewBox":"0 0 24 24","paths":["M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727"]},"fireworks-ai":{"viewBox":"0 0 24 24","paths":["M14.8 5l-2.801 6.795L9.195 5H7.397l3.072 7.428a1.64 1.64 0 003.038.002L16.598 5H14.8zm1.196 10.352l5.124-5.244-.699-1.669-5.596 5.739a1.664 1.664 0 00-.343 1.807 1.642 1.642 0 001.516 1.012L16 17l8-.02-.699-1.669-7.303.041h-.002zM2.88 10.104l.699-1.669 5.596 5.739c.468.479.603 1.189.343 1.807a1.643 1.643 0 01-1.516 1.012l-8-.018-.002.002.699-1.669 7.303.042-5.122-5.246z"],"fillRule":"evenodd"},"github":{"viewBox":"0 0 24 24","paths":["M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"]},"groq":{"viewBox":"0 0 24 24","paths":["M12.036 2c-3.853-.035-7 3-7.036 6.781-.035 3.782 3.055 6.872 6.908 6.907h2.42v-2.566h-2.292c-2.407.028-4.38-1.866-4.408-4.23-.029-2.362 1.901-4.298 4.308-4.326h.1c2.407 0 4.358 1.915 4.365 4.278v6.305c0 2.342-1.944 4.25-4.323 4.279a4.375 4.375 0 01-3.033-1.252l-1.851 1.818A7 7 0 0012.029 22h.092c3.803-.056 6.858-3.083 6.879-6.816v-6.5C18.907 4.963 15.817 2 12.036 2z"],"fillRule":"evenodd"},"hugging-face":{"viewBox":"0 0 24 24","paths":["M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624"]},"meta":{"viewBox":"0 0 24 24","paths":["M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"]},"microsoft":{"viewBox":"0 0 24 24","paths":["M11.49 2H2v9.492h9.492V2h-.002z","M22 2h-9.492v9.492H22V2z","M11.49 12.508H2V22h9.492v-9.492h-.002z","M22 12.508h-9.492V22H22v-9.492z"],"fillRule":"evenodd"},"mistral-ai":{"viewBox":"0 0 24 24","paths":["M17.143 3.429v3.428h-3.429v3.429h-3.428V6.857H6.857V3.43H3.43v13.714H0v3.428h10.286v-3.428H6.857v-3.429h3.429v3.429h3.429v-3.429h3.428v3.429h-3.428v3.428H24v-3.428h-3.43V3.429z"]},"nvidia":{"viewBox":"0 0 24 24","paths":["M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z"]},"opencode":{"viewBox":"0 0 24 24","paths":["M16 6H8v12h8V6zm4 16H4V2h16v20z"],"fillRule":"evenodd"},"openrouter":{"viewBox":"0 0 24 24","paths":["M16.778 1.844v1.919q-.569-.026-1.138-.032-.708-.008-1.415.037c-1.93.126-4.023.728-6.149 2.237-2.911 2.066-2.731 1.95-4.14 2.75-.396.223-1.342.574-2.185.798-.841.225-1.753.333-1.751.333v4.229s.768.108 1.61.333c.842.224 1.789.575 2.185.799 1.41.798 1.228.683 4.14 2.75 2.126 1.509 4.22 2.11 6.148 2.236.88.058 1.716.041 2.555.005v1.918l7.222-4.168-7.222-4.17v2.176c-.86.038-1.611.065-2.278.021-1.364-.09-2.417-.357-3.979-1.465-2.244-1.593-2.866-2.027-3.68-2.508.889-.518 1.449-.906 3.822-2.59 1.56-1.109 2.614-1.377 3.978-1.466.667-.044 1.418-.017 2.278.02v2.176L24 6.014Z"]},"pi":{"viewBox":"125 125 550 550","paths":["M165.29 165.29 H517.36 V400 H400 V517.36 H282.65 V634.72 H165.29 Z M282.65 282.65 V400 H400 V282.65 Z","M517.36 400 H634.72 V634.72 H517.36 Z"],"fillRule":"evenodd"},"together-ai":{"viewBox":"0 0 24 24","paths":["M23.197 4.503A6 6 0 0015 2.307a5.973 5.973 0 00-2.995 4.933l5.996.008v.515h-5.996c.039.937.298 1.87.8 2.74a6 6 0 1010.39-6z","M.805 4.5A6 6 0 003 12.697a5.972 5.972 0 005.77.127L5.779 7.627l.446-.257 2.997 5.192A6 6 0 10.804 4.5z","M12 23.894a6 6 0 005.999-6c0-2.13-1.1-3.996-2.775-5.06l-3.005 5.189-.444-.258 2.997-5.192A6 6 0 1012 23.894z"],"fillRule":"evenodd"},"typesafe-ai":{"viewBox":"0 0 24 24","paths":["M16.512 2.928L16.512 7.067 20.242 9.487 20.243 18.652 12 24 7.489 21.073 7.489 16.82 3.756 14.399 3.756 5.35 4.111 5.118 12 0ZM9.697 20.65L11.998 22.144 18.032 18.227 15.732 16.735ZM12.779 10.332L12.779 14.4 9.046 16.822 9.046 19.216 14.953 15.383 14.953 8.921ZM16.512 15.384L18.684 16.794 18.684 10.332 16.512 8.922ZM5.966 13.976L8.268 15.47 10.569 13.976 8.268 12.485ZM5.316 6.193L5.316 12.544 7.487 11.134 7.487 7.066 11.221 4.643 11.221 2.36 5.316 6.193ZM9.047 11.132L11.22 12.542 11.22 10.332 9.049 8.921 9.049 11.132ZM9.697 7.487L12 8.981 14.3 7.488 12 5.994ZM12.78 4.643L14.953 6.054 14.953 3.774 12.78 2.359Z"]},"vercel":{"viewBox":"0 0 24 24","paths":["m12 1.608 12 20.784H0Z"]},"xai":{"viewBox":"0 0 24 24","paths":["M6.469 8.776L16.512 23h-4.464L2.005 8.776H6.47zm-.004 7.9l2.233 3.164L6.467 23H2l4.465-6.324zM22 2.582V23h-3.659V7.764L22 2.582zM22 1l-9.952 14.095-2.233-3.163L17.533 1H22z"],"fillRule":"evenodd"},"xiaomi":{"viewBox":"0 0 24 24","paths":["M12 0C8.016 0 4.756.255 2.493 2.516.23 4.776 0 8.033 0 12.012c0 3.98.23 7.235 2.494 9.497C4.757 23.77 8.017 24 12 24c3.983 0 7.243-.23 9.506-2.491C23.77 19.247 24 15.99 24 12.012c0-3.984-.233-7.243-2.502-9.504C19.234.252 15.978 0 12 0zM4.906 7.405h5.624c1.47 0 3.007.068 3.764.827.746.746.827 2.233.83 3.676v4.54a.15.15 0 0 1-.152.147h-1.947a.15.15 0 0 1-.152-.148V11.83c-.002-.806-.048-1.634-.464-2.051-.358-.36-1.026-.441-1.72-.458H7.158a.15.15 0 0 0-.151.147v6.98a.15.15 0 0 1-.152.148H4.906a.15.15 0 0 1-.15-.148V7.554a.15.15 0 0 1 .15-.149zm12.131 0h1.949a.15.15 0 0 1 .15.15v8.892a.15.15 0 0 1-.15.148h-1.949a.15.15 0 0 1-.151-.148V7.554a.15.15 0 0 1 .151-.149zM8.92 10.948h2.046c.083 0 .15.066.15.147v5.352a.15.15 0 0 1-.15.148H8.92a.15.15 0 0 1-.152-.148v-5.352a.15.15 0 0 1 .152-.147Z"]}});
    // END GENERATED COMPANY BRAND MARKS
    const MODEL_PROVIDER_COMPANY_FAMILIES = BUNDLED_CLIENT_COMPANY_RULES.companies;
    const MODEL_PROVIDER_COMPANY_MARKS = Object.freeze(Object.fromEntries(MODEL_PROVIDER_COMPANY_FAMILIES.map(company => [company.id, company.icon])));
    const MODEL_PROVIDER_LOCAL_ICON_KEYS = new Set(['openai', 'deepseek', 'kimi', 'anthropic', 'google', 'minimax', 'glm', 'opencode', ...Object.keys(BUNDLED_COMPANY_BRAND_MARKS)]);
    const MODEL_PROVIDER_PUBLIC_TLDS = new Set([...PUBLIC_SUFFIX_EXACT, ...PUBLIC_SUFFIX_WILDCARD, ...PUBLIC_SUFFIX_EXCEPTION].map(host => host.split('.').at(-1)));
    function modelProviderPublicRuleHostname(host) {
      return typeof host === 'string' && host === host.toLowerCase() && modelProviderVerifiedHostname(host) === host &&
        !/(?:^|\.)(?:local|localhost|internal|invalid|test|example|onion|arpa|lan|home)$/.test(host) &&
        MODEL_PROVIDER_PUBLIC_TLDS.has(host.split('.').at(-1)) && Boolean(modelProviderRegistrableDomain(host));
    }
    function modelProviderRulesSnapshot(value) {
      if (!value || !['bundled', 'cache', 'online'].includes(value.source) || typeof value.refreshing !== 'boolean' || typeof value.persistent !== 'boolean') return null;
      const rules = value.rules;
      if (!rules || rules.schemaVersion !== 1 || !Number.isSafeInteger(rules.revision) || rules.revision < BUNDLED_CLIENT_COMPANY_RULES.revision || typeof rules.updatedAt !== 'string' || rules.updatedAt.length > 64 || !Number.isFinite(Date.parse(rules.updatedAt)) || !Array.isArray(rules.companies) || !rules.companies.length || rules.companies.length > 100) return null;
      if (![value.lastCheckedAt, value.lastUpdatedAt].every(item => item === null || Number.isSafeInteger(item) && item >= 0 && item <= 8640000000000000)) return null;
      const safeErrors = ['not-published', 'network', 'timeout', 'invalid-rules', 'http-error', 'rollback', 'cache-unavailable', 'unavailable'];
      if (value.error !== null && !safeErrors.includes(value.error)) return null;
      const ids = new Set(), hosts = new Map();
      const companies = [];
      for (const company of rules.companies) {
        if (!company || typeof company.id !== 'string' || !/^[a-z][a-z0-9-]{0,63}$/.test(company.id) || ids.has(company.id)) return null;
        if (!company.names || !['en', 'zh'].every(locale => typeof company.names[locale] === 'string' && company.names[locale].trim() === company.names[locale] && company.names[locale].length > 0 && company.names[locale].length <= 80 && !/[\u0000-\u001f\u007f-\u009f\u200b-\u200f\u202a-\u202e\u2060-\u206f\ufeff]/.test(company.names[locale]))) return null;
        if (company.icon !== null && !MODEL_PROVIDER_LOCAL_ICON_KEYS.has(company.icon)) return null;
        if (!Array.isArray(company.domains) || company.domains.length > 50 || company.domains.some(domain => !modelProviderPublicRuleHostname(domain) || modelProviderRegistrableDomain(domain) !== domain)) return null;
        const suffixes = company.hostSuffixes ?? [];
        if (!Array.isArray(suffixes) || suffixes.length > 50 || suffixes.some(host => host !== 'googleapis.com' && !modelProviderPublicRuleHostname(host))) return null;
        const exactHosts = company.exactHosts ?? [];
        if (!Array.isArray(exactHosts) || exactHosts.length > 50 || exactHosts.some(host => !modelProviderPublicRuleHostname(host))) return null;
        if (!company.domains.length && !suffixes.length && !exactHosts.length) return null;
        for (const list of [company.domains, suffixes, exactHosts]) if (new Set(list).size !== list.length) return null;
        for (const host of [...company.domains, ...suffixes, ...exactHosts]) { if (hosts.has(host) && hosts.get(host) !== company.id) return null; hosts.set(host, company.id); }
        ids.add(company.id);
        companies.push({ id: company.id, names: { en: company.names.en, zh: company.names.zh }, domains: [...company.domains], hostSuffixes: [...suffixes], exactHosts: [...exactHosts], icon: company.icon });
      }
      const domainOwners = new Map(companies.flatMap(company => company.domains.map(domain => [domain, company.id])));
      const suffixClaims = companies.flatMap(company => company.hostSuffixes.map(host => ({ host, owner: company.id })));
      const within = (host, suffix) => host === suffix || host.endsWith(`.${suffix}`);
      for (const company of companies) {
        for (const host of [...company.exactHosts, ...company.hostSuffixes]) {
          const rootOwner = domainOwners.get(modelProviderRegistrableDomain(host));
          if (rootOwner && rootOwner !== company.id) return null;
          if (suffixClaims.some(claim => claim.owner !== company.id && within(host, claim.host))) return null;
        }
        for (const domain of company.domains) if (suffixClaims.some(claim => claim.owner !== company.id && within(domain, claim.host))) return null;
        for (const suffix of company.hostSuffixes) if (suffixClaims.some(claim => claim.owner !== company.id && within(claim.host, suffix))) return null;
      }
      return { rules: { schemaVersion: 1, revision: rules.revision, updatedAt: rules.updatedAt, companies }, source: value.source, lastCheckedAt: value.lastCheckedAt, lastUpdatedAt: value.lastUpdatedAt, error: value.error, refreshing: value.refreshing, persistent: value.persistent };
    }
    function providerIconKeyForGroupKey(groupKey, companyIcon) {
      if (typeof groupKey !== 'string') return null;
      if (groupKey.startsWith('company:')) return companyIcon !== undefined ? MODEL_PROVIDER_LOCAL_ICON_KEYS.has(companyIcon) ? companyIcon : null : MODEL_PROVIDER_COMPANY_MARKS[groupKey.slice('company:'.length)] ?? null;
      if (groupKey === 'unclassified' || groupKey.startsWith('alias:') || groupKey.startsWith('domain:')) return null;
      return groupKey.split(':')[0];
    }
    function modelProviderCompanyFromUrl(value) {
      if (typeof value !== 'string' || !value || value.trim() !== value) return null;
      try {
        const url = new URL(value);
        if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) return null;
        return modelProviderRegistrableDomain(url.hostname);
      } catch { return null; }
    }
    function modelProviderCompanyFamilyFromUrl(value, companies = MODEL_PROVIDER_COMPANY_FAMILIES) {
      if (typeof value !== 'string' || !value || value.trim() !== value) return null;
      try {
        const url = new URL(value);
        if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) return null;
        const hostname = url.hostname.toLowerCase().replace(/\.$/, '');
        const exactHost = companies.find(company => (company.exactHosts ?? []).includes(hostname));
        if (exactHost) return exactHost;
        const domain = modelProviderRegistrableDomain(hostname);
        const exact = domain ? companies.find(company => company.domains.includes(domain)) : null;
        if (exact) return exact;
        for (const family of companies) {
          if ((family.hostSuffixes ?? []).some(suffix => hostname === suffix || hostname.endsWith(`.${suffix}`))) return family;
        }
        return null;
      } catch { return null; }
    }
    function modelProviderVerifiedHostname(value) {
      if (typeof value !== 'string' || !value || value.length > 253) return null;
      try {
        const url = new URL(`https://${value}/`);
        return !url.username && !url.password && !url.port && url.pathname === '/' && !url.search && !url.hash && url.hostname === value ? value : null;
      } catch { return null; }
    }
    function modelProviderRequestUrlForRow(row) {
      // Live rows always carry a Host-resolved hostname (including explicit null).
      // Never fall back to a catalog URL when the Host could not verify an override.
      if (Object.prototype.hasOwnProperty.call(row ?? {}, 'routeHostname')) {
        const hostname = modelProviderVerifiedHostname(row.routeHostname);
        return hostname ? `https://${hostname}/` : undefined;
      }
      return typeof row?.profile?.baseURL === 'string' && row.profile.baseURL.trim()
        ? row.profile.baseURL
        : row?.entry?.defaultBaseURL;
    }
    function modelProviderRouteHost(row) {
      const value = modelProviderRequestUrlForRow(row);
      if (typeof value !== 'string' || !value || value.trim() !== value) return null;
      try {
        const url = new URL(value);
        if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) return null;
        return url.hostname.toLowerCase().replace(/\.$/, '') || null;
      } catch { return null; }
    }
    function modelProviderCatalogGroupingHost(row) {
      // This hint is issued separately by the Host, and only in the absence of
      // a verified route hostname. It is never substituted into endpoint data.
      return row?.routeHostname === null && row.groupingSource === 'model-catalog' && modelProviderPublicRuleHostname(row.groupingHostname)
        ? row.groupingHostname : null;
    }
    function modelProviderGroupingUrlForRow(row) {
      const hostname = modelProviderCatalogGroupingHost(row);
      return hostname ? `https://${hostname}/` : modelProviderRequestUrlForRow(row);
    }
    function modelProviderGroupHostnames(group) {
      return [...new Set((Array.isArray(group?.entries) ? group.entries : []).map(row => modelProviderRouteHost(row) ?? modelProviderCatalogGroupingHost(row)).filter(Boolean))].sort();
    }
    function modelProviderGroupRouteCounts(group) {
      const entries = Array.isArray(group?.entries) ? group.entries : [];
      const configured = entries.filter(row => row.configured || row.entry?.active).length;
      return { configured, catalog: entries.length - configured };
    }
    function modelProviderCompanyCoverage(rows, companies = MODEL_PROVIDER_COMPANY_FAMILIES) {
      const hosts = new Set(), unmatchedHosts = new Set(), unmatchedDomains = new Set();
      let noHostRoutes = 0;
      for (const row of rows) {
        const host = modelProviderRouteHost(row);
        if (!host) { noHostRoutes++; continue; }
        hosts.add(host);
        if (!modelProviderCompanyFamilyFromUrl(`https://${host}/`, companies)) {
          unmatchedHosts.add(host);
          const domain = modelProviderRegistrableDomain(host);
          if (domain) unmatchedDomains.add(domain);
        }
      }
      return { totalHosts: hosts.size, coveredHosts: hosts.size - unmatchedHosts.size, unmatchedHosts: [...unmatchedHosts].sort(), unmatchedDomains: [...unmatchedDomains].sort(), noHostRoutes };
    }
    function hasSavedProviderSettings(user, path, hasPath) {
      if (!user || typeof user !== 'object' || Array.isArray(user) || !Array.isArray(path)) return false;
      return path.length > 0 ? hasPath(user, path) === true : Object.keys(user).length > 0;
    }
    function providerRowSavedState(hasSavedSettings, credential, authConfigured) {
      return hasSavedSettings === true || credential?.configured === true || authConfigured === true;
    }
    function sortModelProviderCompanyGroups(groups, locale = 'en') {
      const collator = new Intl.Collator(locale, { usage: 'sort', sensitivity: 'base', numeric: true });
      const tier = group => group.key === 'unclassified' ? 2 : (group.entries ?? []).some(row => row.savedConfiguration === true) ? 0 : 1;
      return [...groups].sort((a, b) => {
        const priority = tier(a) - tier(b);
        if (priority) return priority;
        const name = collator.compare(typeof a.title === 'string' ? a.title : '', typeof b.title === 'string' ? b.title : '');
        if (name) return name;
        return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
      });
    }
    function groupModelProvidersByCompany(rows, unclassifiedTitle = 'Unclassified URL', resolveCompanyTitle = family => family.names.en, companies = MODEL_PROVIDER_COMPANY_FAMILIES) {
      const groups = new Map();
      for (const row of rows) {
        const groupingURL = modelProviderGroupingUrlForRow(row);
        const domain = modelProviderCompanyFromUrl(groupingURL);
        const family = modelProviderCompanyFamilyFromUrl(groupingURL, companies);
        const key = family ? `company:${family.id}` : domain ? `domain:${domain}` : 'unclassified';
        const title = family ? resolveCompanyTitle(family) : domain ?? unclassifiedTitle;
        if (!groups.has(key)) groups.set(key, { key, title, icon: family?.icon ?? null, entries: [] });
        groups.get(key).entries.push(row);
      }
      return [...groups.values()].sort((a, b) => a.key === 'unclassified' ? 1 : b.key === 'unclassified' ? -1 : a.title.localeCompare(b.title));
    }
    function filterModelProviderCompanyGroups(groups, query, companies = MODEL_PROVIDER_COMPANY_FAMILIES) {
      const searchText = value => typeof value === 'string' ? value.slice(0, 512).normalize('NFKC').toLowerCase() : '';
      const tokens = searchText(typeof query === 'string' ? query.slice(0, 200) : '').trim().split(/\s+/u).filter(Boolean);
      if (!tokens.length) return groups;
      const familyById = new Map(companies.map(company => [company.id, company]));
      return groups.filter(group => {
        const family = group.key.startsWith('company:') ? familyById.get(group.key.slice('company:'.length)) : null;
        const terms = [group.title, family?.id, family?.names?.en, family?.names?.zh,
          ...(family?.domains ?? []), ...(family?.hostSuffixes ?? []), ...(family?.exactHosts ?? []),
          ...modelProviderGroupHostnames(group)];
        for (const row of group.entries ?? []) terms.push(row.entry?.displayName, row.entry?.provider, row.profile?.displayName);
        const fields = terms.map(searchText).filter(Boolean);
        return tokens.every(token => fields.some(field => field.includes(token)));
      });
    }
    // END PURE LAYOUT

    const dictionaries = {
      zh: {
        providerManagerCatalogGroupingSource: '来自内置模型目录，仅用于归组',
        title: 'GLM Quota+', subtitle: '额度与用量展示面板：多提供商余额、订阅额度（含 GLM 团队版套餐）与 OpenAI 组织支出。', refresh: '刷新全部', refreshOne: '刷新', loading: '正在查询…', empty: '尚未发现已配置的提供商。请在官方「模型」设置中添加提供商。',
        api: 'API 余额与支出', subscription: '订阅额度', account: 'App 登录账户', current: '当前提供商额度', details: '额度详情', close: '关闭额度详情',
        balance: '可用余额', recharge: '充值余额', bonus: '赠送余额', rolling: '五小时', weekly: '周限', monthly: '月度', mcp: 'MCP 工具', quota: '额度窗口',
        used: '已用', left: '剩余', credits: '积分', codexCredits: 'Credits 余额', codexCreditsUnlimited: '不限额', codexCreditsAvailable: '可用（余额未提供）', codexCreditsUnavailable: '无可用 Credits', codexCreditsNotProvided: '未提供', codexCreditsNote: '账户用量积分，可能与其他功能共享；非 OpenAI API 余额。', tokens: 'Tokens', requests: '次', percent: '百分比', next: '重置于', updated: '更新于', stale: '数据已过期', staleDetail: '查询未成功，以下为上次成功数据。', never: '尚无成功数据', dashboard: '官方控制台', 'zai-api-billing-dashboard': '账单控制台', 'zai-plan-dashboard': '套餐用量',
        healthy: '正常', low: '额度偏低', exhausted: '额度不足', queryError: '查询异常', unavailable: '暂不可用', 'zai-api-status-only-short': '普通 API（非套餐）', partial: '部分额度', scope: '统计范围', organizationShort: '组织总额', apiKeyBreakdown: '按 API Key 细分', apiKey: 'Key', apiKeyName: 'Key 名称', apiKeyUnattributed: '组织级 / 未归属', apiSpend: 'API 支出', rangeLabel: '范围', spendRange: 'API 支出时间范围', rangeAnnouncement: '所选时间范围', range0d: '0d', range1d: '1d', range7d: '7d', range30d: '30d', completeUtcDays: '0d 为 UTC 今日（00:00 至查询时刻）；1d 为昨天，7d/30d 为截至昨天的完整 UTC 日。', costsLag: 'OpenAI Costs 数据可能延迟或回填，因此今日及已结束 UTC 日的支出都可能变化；这不是预付余额，也不包含 ChatGPT/Codex 订阅。', opencodeGo: 'OpenCode Go', glmApi: 'GLM 标准 API', minimaxPlan: 'MiniMax M Plan', zaiPlan: 'GLM Coding · 国际', 'minimax-plan': 'MiniMax 官方套餐额度接口', resourcePackages: '资源包', packageActive: '有效', packageExpired: '已过期', packageUnknown: '状态未知', expires: '到期时间', expiresServerLocal: '到期时间（提供商本地时间，未提供时区）', suitableModel: '适用模型', suitableScene: '适用场景', spentTotal: '累计支出', accountTotal: '账户总余额', 'opencode-go-only': '当前配置是通用 OpenCode Zen 路由；用量端点仅支持 OpenCode Go 订阅。请配置内置 opencode-go 路由。', kindBalance: '余额', kindSpend: 'API 支出', kindPlan: '订阅', kindOther: '查询状态', availableBalance: '可用余额', packageBalance: '资源包余量', expiredPackageBalance: '过期包余量（不可用）', frozenBalance: '冻结余额',
        ok: '已更新', unsupported: '尚不支持此提供商或中转端点；不会自动向官方发送其凭据。', 'zai-api-status-only': '这是 Z.AI 国际普通 API 路由（/api/paas/v4），不是 Coding Plan，因此不会查询 Coding Plan 订阅额度。国际站普通 API 账户接口尚未验证；请在对应控制台查看。', 'admin-key-required': '未找到 Admin Key。请在「额度」中选择 OpenAI 后输入并保存；不会使用模型调用 Key 查询费用。', 'invalid-admin-key': 'Admin Key 格式无效，需要 sk-admin- 开头的组织管理密钥；不会回退到其他密钥。', 'admin-credential-error': 'DSH 凭据服务暂不可用；请稍后重试。', adminTitle: 'OpenAI Admin Key', adminIntro: '用于查询 OpenAI 官方组织支出及可选的 API Key 名称。该凭据独立保存在 DSH 安全凭据存储中，不会替代模型调用 Key。', adminHowToGetKey: '在 OpenAI Platform 的 Organization → Settings → Admin keys 中创建（需组织所有者权限）：', adminGetKeyLink: '打开 Admin Key 设置页', adminChecking: '正在读取 Admin Key 配置状态…', adminKeyLabel: 'Admin Key', adminKeyPlaceholder: '输入 sk-admin-… 组织管理密钥', adminConfigured: '已配置 OpenAI Admin Key；出于安全考虑不会显示密钥内容。', adminMissing: '尚未配置 Admin Key。', adminSourceCredential: '当前从 DSH 凭据服务读取。', adminSave: '安全保存 Admin Key', adminSaved: 'Admin Key 已保存并确认可用。', adminSaveFailed: '未能确认 Admin Key 已安全保存，请刷新状态后重试。', adminUseOfficial: '仅官方 OpenAI API 路由可使用此设置。花费显示组织总支出，不按单一模型路由归因。', spendShort: '本月支出', organization: '整个组织，非当前路由专属', noRecords: '该时间段暂无账单记录', 'official-costs': 'OpenAI 官方 Costs API',
        'missing-credential': '未找到该路由使用的有效 API Key，请检查模型设置。', 'unsupported-auth': '此认证方式暂不支持。Codex 仅支持内置 openai-codex 的订阅授权，请检查「设置 → Codex 授权」；不会读取其他授权记录或猜测认证方式。', unauthorized: '认证失败（401），请检查该区域的 API Key。', forbidden: '无查询权限（403），请检查账户与套餐。', 'rate-limited': '提供商限流，已暂停重试约 2 分钟。', timeout: '查询超时，稍后可重试。', network: '无法连接提供商，请检查网络。', 'network-connect': '无法建立到 OpenCode Go 用量接口的请求连接。', 'network-read': '已收到 OpenCode Go 响应，但读取响应流时连接中断。', 'invalid-response': '额度响应暂无法识别，请以官方控制台为准。', upstream: '提供商查询失败或尚未订阅，请以官方控制台为准。',
        'account-changed': '账户身份正在更新，本次余额已丢弃；请稍后刷新。', serviceError: '额度服务暂不可用，请刷新页面后重试。', 'official-balance': '官方余额 API', 'glm-standard-api': 'GLM 普通 API 账户与资源包接口', 'provider-monitor': '提供商监控端点 · 个人套餐', 'zai-plan-usage': 'Z.AI 官方 Coding Plan 配额接口', 'harness-account': 'Harness 账户服务', 'opencode-usage': 'OpenCode 官方用量接口', none: '暂未查询',
        colorsTab: '设置', providerSettingsTab: '额度', providerManagerTab: '模型', providerSettingsTitle: '按提供商查看额度', providerSettingsIntro: '点击提供商查看额度状态和已配置路由。提供商配置、模型目录和 API Key 请在官方「模型」页管理。', providerSettingsBack: '返回提供商列表', providerRoutes: '已配置路由', lowestRemaining: '最低剩余额度', routesNeedAttention: '需关注路由', providerNoQuota: '暂无百分比配额', providerAdditionalSettings: '其他设置', providerSettingsNoExtra: '此提供商暂无可在本页编辑的额外设置。', companyOpenAI: 'OpenAI', companyDeepSeek: 'DeepSeek', companyGlm: 'GLM / Z.AI', companyMiniMax: 'MiniMax', companyOpenCode: 'OpenCode', companyOther: '其他 / 自定义', settingsTitle: '订阅颜色阈值', settingsIntro: '在此直接调整数值并保存，无需编辑配置文件。每个订阅窗口独立计算，现金余额颜色不受影响。', greenMin: '绿色最低剩余百分比', orangeMin: '橙色最低剩余百分比', thresholdRules: '剩余 ≥ 绿色阈值为绿色；否则剩余 ≥ 橙色阈值为橙色；其余为红色。颜色固定跟随主题，不可编辑。', save: '保存设置', defaults: '恢复默认到草稿', saved: '设置已保存并回读确认。', settingsLoading: '正在读取设置…', readOnly: '当前配置不可写；可以查看，但不能保存。', settingsRefresh: '重新载入已保存值', defaultsNote: '默认绿色 50%、橙色 25%。恢复默认只修改草稿，仍需点击保存。',
        'invalid-thresholds': '请输入非空整数，满足 0 ≤ 橙色阈值 < 绿色阈值 ≤ 100。', 'settings-unavailable': '额度设置暂不可用，请重新载入后重试。', 'settings-conflict': '设置已变化，保存未获确认。请重新载入后重试。', 'save-failed': '保存未获确认，请重新载入检查实际已保存值。', settingsForbidden: '设置校验已过期或无写入权限，请重新载入后重试。',
        'codex-usage': 'Codex 订阅用量', 'codex-auth-required': '尚未保存 Codex 订阅授权，请在「设置 → Codex 授权」中登录。', 'codex-auth-expired': 'Codex 订阅授权已过期。可正常使用内置 openai-codex 模型让原生适配器续期，或前往「设置 → Codex 授权」重新登录；本插件不会自动续期或发起推理。',
        note: '余额 / 额度约 2 分钟刷新，组织费用缓存 15 分钟。隐藏页面时暂停；密钥仅在 Host 使用。', notFound: '当前提供商尚无额度数据', counts: '用量 / 总额', sourceDetails: '数据说明', route: '提供商路由', exact: '精确金额', cnPlan: 'GLM Coding · 国内', accountName: 'DeepSeek 登录账户',
        teamPlan: '团队版', personalPlan: '个人版', remainingQuota: '剩余额度', more: '更多', planSwitch: '切换套餐', 'glm-team-plan-usage': 'GLM 官方团队版 Coding Plan 配额接口', 'no-plan': '该 Key 没有有效的 GLM Coding Plan 个人套餐。若这是团队版 Key，请在下方启用「GLM 团队版套餐」。', 'no-team-plan': '该 Key 不属于任何 GLM 团队版套餐，或该团队项目当前没有额度数据。请核对组织 / 项目 ID，或关闭团队版查询。', 'team-scope-required': '团队接口不会自动选择项目：请在此卡片中填写组织 ID 与项目 ID 后保存，才会返回额度。',
        glmTeamPlanTitle: 'GLM 团队版套餐', glmTeamPlanIntro: '为下方每条 GLM Coding Plan 路由查询团队版套餐额度。使用路由自身的 API Key 请求官方团队版接口（type=2）；组织 / 项目 ID 仅作为 bigmodel-organization / bigmodel-project 请求头发送，不会出现在页面中。', glmTeamPlanEnable: '查询团队版额度', glmTeamPlanOrg: '组织 ID（Organization ID）', glmTeamPlanProject: '项目 ID（Project ID）', glmTeamPlanOrgPlaceholder: '团队 / 组织 ID', glmTeamPlanProjectPlaceholder: '项目 ID', glmTeamPlanHint: '通常必须同时填写两者：接口在未指定项目时返回空数据，不会自动选择默认项目。ID 对应智谱开放平台中团队（组织）与项目的标识；可在官网团队用量页的浏览器网络请求里查看 bigmodel-organization / bigmodel-project 请求头的值。', glmTeamPlanOff: '未启用：不会发送团队版请求。', glmTeamPlanOn: '已启用：额度页将多出一条「团队版」路由。', glmTeamPlanSave: '保存团队版设置', glmTeamPlanChecking: '正在读取团队版设置…', glmTeamPlanSaved: '团队版设置已保存并回读确认。', glmTeamPlanError: '团队版设置暂不可用，请重新载入后重试。', 'invalid-team-plan': '组织 ID 与项目 ID 需同时填写或同时留空，且各不超过 128 个可打印 ASCII 字符。',
      },
      en: {
        providerManagerCatalogGroupingSource: 'Built-in model catalog; for grouping only',
        title: 'GLM Quota+', subtitle: 'Quota and usage dashboard: multi-provider balances, subscription quotas (incl. GLM Team Plan) and OpenAI organization spend.', refresh: 'Refresh all', refreshOne: 'Refresh', loading: 'Checking…', empty: 'No configured providers found. Add one in the official Models settings.',
        colorsTab: 'Settings', providerSettingsTab: 'Quotas', providerManagerTab: 'Models', providerSettingsTitle: 'Quotas by provider', providerSettingsIntro: 'Select a provider to review quota status and configured routes. Manage provider configurations, model catalogs, and API keys on the official Models page.', providerSettingsBack: 'Back to providers', providerRoutes: 'Configured routes', lowestRemaining: 'Lowest remaining quota', routesNeedAttention: 'Routes needing attention', providerNoQuota: 'No percentage quota available', providerAdditionalSettings: 'Additional settings', providerSettingsNoExtra: 'There are no additional settings for this provider here.', companyOpenAI: 'OpenAI', companyDeepSeek: 'DeepSeek', companyGlm: 'GLM / Z.AI', companyMiniMax: 'MiniMax', companyOpenCode: 'OpenCode', companyOther: 'Other / custom', settingsTitle: 'Subscription color thresholds', settingsIntro: 'Edit and save the values here without opening a configuration file. Each subscription window is evaluated independently; cash colors are unchanged.', greenMin: 'Minimum remaining percentage for green', orangeMin: 'Minimum remaining percentage for orange', thresholdRules: 'Remaining ≥ green threshold is green; otherwise remaining ≥ orange threshold is orange; the rest is red. Colors are fixed theme colors and cannot be edited.', save: 'Save settings', defaults: 'Restore defaults to draft', saved: 'Settings saved and confirmed by reading them back.', settingsLoading: 'Loading settings…', readOnly: 'This configuration is read-only. Values can be viewed but not saved.', settingsRefresh: 'Reload saved values', defaultsNote: 'Defaults are green 50%, orange 25%. Restoring defaults only edits the draft; click Save to persist.',
        'invalid-thresholds': 'Enter non-empty integers satisfying 0 ≤ orange < green ≤ 100.', 'settings-unavailable': 'Quota settings are unavailable. Reload and try again.', 'settings-conflict': 'Settings changed; saving was not confirmed. Reload and try again.', 'save-failed': 'Saving was not confirmed. Reload to check the actual saved values.', settingsForbidden: 'The settings check expired or write access is unavailable. Reload and try again.',
        'codex-usage': 'Codex subscription usage', 'codex-auth-required': 'No Codex subscription grant is saved. Sign in under Settings → Codex authorization.', 'codex-auth-expired': 'The Codex grant expired. Normal use of the built-in openai-codex model lets its native adapter renew it, or sign in again under Settings → Codex authorization. This plugin never refreshes grants or sends inference probes.',
        api: 'API balances & spend', subscription: 'Subscriptions', account: 'App account', current: 'Current provider quota', details: 'Quota details', close: 'Close quota details',
        balance: 'Available balance', recharge: 'Recharge balance', bonus: 'Bonus balance', rolling: '5-hour', weekly: 'Weekly limit', monthly: 'Monthly', mcp: 'MCP tools', quota: 'Quota window', used: 'Used', left: 'Left', credits: 'credits', codexCredits: 'Credits balance', codexCreditsUnlimited: 'Unlimited', codexCreditsAvailable: 'Available · balance not provided', codexCreditsUnavailable: 'No available credits', codexCreditsNotProvided: 'Not provided', codexCreditsNote: 'Account usage credits may be shared with other features; not an OpenAI API balance.', tokens: 'tokens', requests: 'requests', percent: 'percent', next: 'Reset at', updated: 'Updated', stale: 'Stale data', staleDetail: 'The query failed. Showing the last successful data.', never: 'No successful data yet', dashboard: 'Official dashboard', 'zai-api-billing-dashboard': 'Billing console', 'zai-plan-dashboard': 'Plan usage',
        healthy: 'Healthy', low: 'Running low', exhausted: 'Quota low', queryError: 'Query failed', unavailable: 'Unavailable', 'zai-api-status-only-short': 'Standard API · no plan quota', partial: 'Partial quota', scope: 'Scope', organizationShort: 'Organization', apiKeyBreakdown: 'By API key', apiKey: 'Key', apiKeyName: 'Key name', apiKeyUnattributed: 'Organization-level / unattributed', apiSpend: 'API spend', rangeLabel: 'Range', spendRange: 'API spend range', rangeAnnouncement: 'Selected range', range0d: '0d', range1d: '1d', range7d: '7d', range30d: '30d', completeUtcDays: '0d is today in UTC (00:00 through query time); 1d is yesterday, and 7d/30d are complete UTC days ending yesterday.', costsLag: 'OpenAI Costs data may lag or be backfilled, so today-so-far and completed-day totals may change. This is not a prepaid balance and does not include ChatGPT/Codex subscriptions.', opencodeGo: 'OpenCode Go', glmApi: 'GLM Standard API', minimaxPlan: 'MiniMax M Plan', zaiPlan: 'GLM Coding · Global', 'minimax-plan': 'MiniMax official plan quota API', 'opencode-go-only': 'This is the general OpenCode Zen route; the usage endpoint is only for an OpenCode Go subscription. Configure the built-in opencode-go route.', kindBalance: 'Balance', kindSpend: 'API spend', kindPlan: 'Subscription', kindOther: 'Query status', availableBalance: 'Available balance', frozenBalance: 'Frozen balance', resourcePackages: 'Resource packages', packageActive: 'Active', packageExpired: 'Expired', packageUnknown: 'Status unknown', expires: 'Expires', expiresServerLocal: 'Expires (provider time; timezone unspecified)', suitableModel: 'Suitable models', suitableScene: 'Suitable scene', spentTotal: 'Total spend', accountTotal: 'Account balance', packageBalance: 'Package balance', expiredPackageBalance: 'Expired package balance (not usable)',
        ok: 'Updated', unsupported: 'This provider or relay endpoint is not supported. Its credentials are not sent to an official provider automatically.', 'zai-api-status-only': 'This is an international Z.AI Standard API route (/api/paas/v4), not a Coding Plan endpoint. Coding Plan quotas are not queried; the international account endpoint has not been verified.', 'admin-key-required': 'No Admin key is configured. Open Provider quotas, select OpenAI, and enter one. Inference keys are never used for billing.', 'invalid-admin-key': 'Invalid Admin key format. An organization key starting with sk-admin- is required; no other key is tried.', 'admin-credential-error': 'The DSH credential service is unavailable. Try again later.', adminTitle: 'OpenAI Admin key', adminIntro: 'Used for official OpenAI organization spend and optional API-key name lookup. Stored separately in the DSH credential store; it never replaces your inference key.', adminHowToGetKey: 'Create one in OpenAI Platform → Organization → Settings → Admin keys (organization owner access required):', adminGetKeyLink: 'Open Admin key settings', adminChecking: 'Checking Admin key configuration…', adminKeyLabel: 'Admin key', adminKeyPlaceholder: 'Enter organization key starting with sk-admin-', adminConfigured: 'OpenAI Admin key configured. Its value is never shown for security.', adminMissing: 'No Admin key is configured.', adminSourceCredential: 'Currently read from DSH credentials.', adminSave: 'Save Admin key securely', adminSaved: 'The Admin key was saved and confirmed.', adminSaveFailed: 'Could not confirm the Admin key was securely saved. Refresh status and try again.', adminUseOfficial: 'Only official OpenAI API routes use this setting. Spend is organization-wide and is not attributed to an individual model route.', spend: 'Month-to-date API spend', spendShort: 'Month to date', organization: 'Entire organization, not exclusive to this route', billingLag: 'Billing data may lag. This is not a prepaid balance and does not include ChatGPT/Codex subscriptions.', noRecords: 'No billing records for this range', period: 'Billing period (UTC)',
        'official-costs': 'Official OpenAI Costs API',
        'missing-credential': 'No valid API key was found for this route. Check Models settings.', 'unsupported-auth': 'This authentication method is unsupported. Codex requires the built-in openai-codex subscription grant; check Settings → Codex authorization. Other grants are not read and authentication is never guessed.', unauthorized: 'Authentication failed (401). Check the key and region.', forbidden: 'Quota access denied (403). Check the account and plan.', 'rate-limited': 'Rate limited. Retrying is paused for about 2 minutes.', timeout: 'The quota query timed out. Try again later.', network: 'Could not reach the provider. Check the network.', 'network-connect': 'Could not establish the OpenCode Go usage request connection.', 'network-read': 'OpenCode Go responded, but its response stream was interrupted.', 'invalid-response': 'Unrecognized quota response. Check the official dashboard.', upstream: 'Quota query failed or no active plan. Check the official dashboard.',
        'account-changed': 'Account identity is changing. This balance was discarded; refresh shortly.', serviceError: 'Quota service is unavailable. Reload the page and try again.', 'official-balance': 'Official balance API', 'glm-standard-api': 'GLM Standard API account and package endpoints', 'provider-monitor': 'Provider monitor · Personal plan', 'zai-plan-usage': 'Official Z.AI Coding Plan quota API', 'harness-account': 'Harness account service', 'opencode-usage': 'OpenCode usage API', none: 'Not queried', note: 'Balances / quotas refresh about every 2 minutes; organization costs cache for 15 minutes. Paused while hidden. Keys stay on the Host.', notFound: 'No quota data for the current provider', counts: 'Used / total', sourceDetails: 'Data details', route: 'Provider route', exact: 'Exact amount', cnPlan: 'GLM Coding · China', accountName: 'DeepSeek account',
        teamPlan: 'Team', personalPlan: 'Personal', remainingQuota: 'Remaining quota', more: 'More', planSwitch: 'Switch plan', 'glm-team-plan-usage': 'Official GLM Team Plan quota API', 'no-plan': 'This key has no active GLM Coding Plan personal subscription. If it is a Team Plan key, enable GLM Team Plan below.', 'no-team-plan': 'This key belongs to no GLM Team Plan, or that team project has no quota data. Check the organization / project IDs, or turn the team query off.', 'team-scope-required': 'The team endpoint does not pick a project by itself: enter both the organization and project IDs in this card and save before quota is returned.',
        glmTeamPlanTitle: 'GLM Team Plan', glmTeamPlanIntro: 'Query Team Plan quota for each GLM Coding Plan route below. The route’s own API key is used against the official team endpoint (type=2); the organization / project IDs are only sent as bigmodel-organization / bigmodel-project headers and are never shown on this page.', glmTeamPlanEnable: 'Query Team Plan quota', glmTeamPlanOrg: 'Organization ID', glmTeamPlanProject: 'Project ID', glmTeamPlanOrgPlaceholder: 'Team / organization ID', glmTeamPlanProjectPlaceholder: 'Project ID', glmTeamPlanHint: 'Both are normally required: without a project scope the endpoint returns empty data instead of choosing a default project. The IDs identify the team (organization) and project on the BigModel platform; the official team usage page sends them as bigmodel-organization / bigmodel-project request headers, visible in the browser network panel.', glmTeamPlanOff: 'Off: no team request is sent.', glmTeamPlanOn: 'On: an extra Team route appears on the Quotas tab.', glmTeamPlanSave: 'Save Team Plan settings', glmTeamPlanChecking: 'Loading Team Plan settings…', glmTeamPlanSaved: 'Team Plan settings saved and confirmed by reading them back.', glmTeamPlanError: 'Team Plan settings are unavailable. Reload and try again.', 'invalid-team-plan': 'Enter both the organization and project IDs or leave both empty; up to 128 printable ASCII characters each.',
      },
    };
    const providerManagerStrings = {
      zh: {
        providerManagerCompanySearchLabel: '搜索提供商', providerManagerCompanySearchPlaceholder: '输入提供商名称或域名', providerManagerCompanySearchClear: '清除搜索', providerManagerCompanySearchResults: '项结果', providerManagerCompanySearchEmpty: '未找到匹配的提供商。请尝试提供商名称、品牌名称或域名。', providerManagerKeyHelp: 'API 密钥说明', providerManagerCloseDiscovery: '关闭模型选择', providerManagerSelectVisible: '全选当前可添加项', providerManagerRetryDiscovery: '重新获取', providerManagerDialogUnavailable: '当前窗口无法打开模型选择弹窗，请重新打开此设置页后重试。', providerManagerDiscoveryDraftHint: '仅将勾选的新模型加入草稿，不移除已有模型；仍需保存配置。', providerManagerRetryPolicy: '重试策略', providerManagerRetryDefault: '默认', providerManagerRetryNormal: '仅临时错误', providerManagerRetryAlways: '始终重试', providerManagerRetryCurrent: '保留现有策略', providerManagerRetryInvalid: '请选择受支持的重试策略。', providerManagerRetryAlwaysHint: '始终重试会持续到成功、取消或会话结束，可能产生更多请求。', providerManagerRestoreModels: '恢复默认模型', providerManagerCustomizeModels: '自定义模型目录', providerManagerFetchModels: '获取可用模型', providerManagerAddModel: '添加模型', providerManagerModelOrder: '调整模型顺序', providerManagerModelOrderHelp: '拖动排序，或聚焦后使用上、下方向键移动。', providerManagerOrderFiltered: '清除搜索后可排序。', providerManagerModelPosition: '模型位置', providerManagerNewKeyDraft: '新 API 密钥将在保存后生效。', providerManagerNativeAuthShort: '原生账户授权', providerManagerAuthentication: '认证', providerManagerConnectionSettings: '自定义设置', providerManagerNativeAuth: '此入口使用 DSH 原生账户授权；请在对应授权面板管理，不需要在此填写 API Key。', providerManagerModelAdvanced: '参数', providerManagerModelSearch: '搜索模型 ID 或名称', providerManagerCandidateSearch: '搜索发现的模型', providerManagerCandidatesSelected: '已选', providerManagerModelSearchEmpty: '没有匹配的模型。', providerManagerModelDraftNotice: '模型目录更改已加入草稿，点击「保存」后生效。', providerManagerModelLocateError: '定位问题模型', providerManagerCatalogInherited: '继承默认目录', providerManagerCatalogCustomized: '自定义目录', providerManagerTitle: '提供商与模型', providerManagerIntro: '各路由按生效请求主机名自动归并为提供商卡片。选择提供商查看路由并管理其配置、模型目录和 API Key。', providerManagerCompanyCellHint: '点击查看路由和配置', providerManagerRouteCountOne: '条已配置/启用路由', providerManagerRouteCount: '条已配置/启用路由', providerManagerCatalogCountOne: '项目录条目', providerManagerCatalogCount: '项目录条目', providerManagerReadOnlyRoute: '此路由在本页只读；请前往官方「模型」页或所属插件设置管理。', providerManagerManagedExternally: '配置由所属插件管理', providerManagerRouteHostsUnavailable: '部分请求主机名未能确认，已归入「无法识别请求域名」；不会按默认地址猜测提供商。请重新载入。', providerManagerNoHostSummary: '未识别主机名', providerManagerMoreHosts: '个域名', companyUnclassified: '无法识别请求域名', companyMoonshotAi: '月之暗面', companyAnthropic: 'Anthropic', companyGoogleGemini: 'Google', companySpaceXsiGrok: 'SpaceXSI', companyZhipuAi: '智谱 AI', providerManagerBackToCompanies: '返回提供商列表', providerManagerCompanyIntro: '此提供商的每个路由入口都保留独立配置；请在对应条目中新增或编辑。此处不会切换当前会话或默认模型。', providerManagerEditorBack: '返回提供商详情', providerManagerAdd: '新增提供商', providerManagerAddCustom: '新增自定义提供商', providerManagerRefresh: '重新载入', providerManagerLoading: '正在读取提供商配置…', providerManagerLoadFailed: '无法读取提供商目录或设置。请重新载入；若问题仍存在，请展开下方“安全运行时诊断”并分享状态（不含密钥或原始错误详情）。', providerManagerLoadStageLabel: '诊断阶段：', providerManagerLoadCauseLabel: '原因类别：', providerManagerLoadCauseRemoteUnavailable: '远程接口不可用', providerManagerLoadCauseMethodUnavailable: '远程方法未挂载', providerManagerLoadCauseCallRejected: '调用未返回 Remote 结果', providerManagerLoadCauseRemoteError: 'Remote 返回失败', providerManagerLoadCauseInvalidEnvelope: 'Remote 响应格式无效', providerManagerLoadCauseInvalidValue: '成功值不是数组', providerManagerLoadCauseSettingsRejected: '设置读取未完成', providerManagerLoadCauseLocalProcessing: '本地处理失败', providerManagerLoadCauseUnknown: '无法分类', providerManagerLoadCauseClientModuleGraphUnavailable: '客户端模块图不可用', providerManagerLoadCauseApiRemotesDependencyMissing: 'API Remotes 依赖未声明', providerManagerLoadCauseApiRemotesModuleMissing: 'API Remotes 模块缺失', providerManagerLoadCauseApiRemotesEntryMissing: 'API Remotes 插件入口缺失', providerManagerLoadCauseApiRemotesImportFailed: 'API Remotes 导入失败', providerManagerLoadCauseApiRemotesActivationFailed: 'API Remotes 激活失败', providerManagerLoadCauseApiRemotesEntryPending: 'API Remotes 仍在启动', providerManagerLoadCauseApiRemotesLoaderEntryMissing: '加载器中未找到 API Remotes 入口', providerManagerLoadCauseRemoteRootUnavailable: 'Remote 根服务未提供或未激活', providerManagerLoadCauseRemoteRootAccessError: 'Remote 根服务读取失败', providerManagerLoadCauseLlmNamespaceUnavailable: 'LLM Remote 命名空间未提供或未激活', providerManagerLoadCauseLlmNamespaceAccessError: 'LLM Remote 命名空间读取失败', providerManagerLoadCauseMethodAccessError: 'Remote 方法读取失败', providerManagerDiagTitle: '安全运行时诊断', providerManagerDiagNote: '仅显示预设状态类别；不包含原始错误、URL、密钥或配置值。', providerManagerDiagClientModules: '客户端模块图', providerManagerDiagApiDependency: 'API Remotes 依赖', providerManagerDiagApiModule: 'API Remotes 模块', providerManagerDiagApiEntry: 'API Remotes 插件入口', providerManagerDiagApiImport: 'API Remotes 导入', providerManagerDiagApiEntryState: 'API Remotes 生命周期', providerManagerDiagRemoteRoot: 'Remote 根服务', providerManagerDiagLlmNamespace: 'LLM Remote 命名空间', providerManagerDiagStateAvailable: '可用', providerManagerDiagStateAbsentOrInactive: '未提供或尚未激活', providerManagerDiagStateAccessError: '读取失败', providerManagerDiagStateInvalid: '格式无效', providerManagerDiagStateUnknown: '未知', providerManagerDiagStateDeclared: '已声明', providerManagerDiagStateNotDeclared: '未声明', providerManagerDiagStatePresent: '存在', providerManagerDiagStateAbsent: '缺失', providerManagerDiagStateImportFailed: '导入失败', providerManagerDiagStateNoRecordedFailure: '未记录导入失败', providerManagerDiagStateActivationFailed: '激活失败', providerManagerDiagStatePending: '等待中', providerManagerDiagStateLoading: '加载中', providerManagerDiagStateActive: '已激活', providerManagerDiagStateDisposed: '已释放', providerManagerDiagStateUnloading: '卸载中', providerManagerDiagStateMissing: '未找到', providerManagerLoadRemoteCodeLabel: 'Remote 错误代码：', providerManagerLoadStageProviders: '提供商列表', providerManagerLoadStageDirectory: '可配置提供商目录', providerManagerLoadStageSettings: '设置读取', providerManagerLoadStageProcessing: '本地数据处理', providerManagerReadOnly: '当前配置为只读；可查看但不能修改。', providerManagerNoProviders: '暂无可在此管理的提供商配置。', providerManagerNoAddable: '没有可新增的受支持提供商；可在官方「模型」页查看其他配置。', providerManagerChoose: '选择新增方式', providerManagerCatalog: '添加已知提供商', providerManagerCustom: '新增自定义 API 路由', providerManagerSelectCatalog: '选择提供商', providerManagerEdit: '编辑', providerManagerRemove: '移除配置', providerManagerCancel: '取消', providerManagerSave: '保存配置', providerManagerSaving: '正在保存…', providerManagerSaved: '更改已保存。', providerManagerSaveFailed: '配置未能保存；请检查设置权限后重试。', providerManagerConflict: '设置在编辑期间已被其他操作修改。草稿仍保留，未自动覆盖或重试；重新载入会丢弃草稿。', providerManagerChanged: '此命名空间的设置版本已变化。为避免覆盖其他修改，当前草稿不可保存；可继续查看或明确丢弃草稿后重新载入。', providerManagerDiscardReload: '丢弃草稿并载入最新值', providerManagerRouteId: '路由 ID', providerManagerDisplayName: '显示名称（可选）', providerManagerBaseUrl: 'API 地址', providerManagerProtocol: '协议', providerManagerApiKey: 'API Key（可选）', providerManagerApiKeyPlaceholder: '输入新 Key；留空表示不更改', providerManagerCredentialConfigured: '已保存凭据（内容不会显示）', providerManagerCredentialMissing: '尚未保存凭据', providerManagerCredentialUnknown: '暂时无法读取凭据状态', providerManagerCredentialHelp: '新 Key 会存入 DSH 凭据服务；不会写入提供商配置或浏览器存储。', providerManagerCredentialSaveFailed: '提供商配置已保存，但凭据写入失败。草稿和 Key 输入仍保留；重试只会补写凭据。', providerManagerCredentialFieldUnavailable: '此提供商配置不支持 API Key 引用字段；请在官方「模型」页管理认证。', providerManagerCredentialClearHelp: '留空不会删除已有凭据；要清除凭据，请在官方「模型」页操作。', providerManagerActive: '已注册', providerManagerInactive: '适配器当前未注册', providerManagerConfigured: '已有配置', providerManagerNeedsSetup: '尚未配置', providerManagerAdvanced: '高级配置请前往官方「模型」页。', providerManagerModels: '模型目录', providerManagerModelId: '模型 ID', providerManagerModelName: '显示名称（可选）', providerManagerContextWindow: '上下文窗口（可选）', providerManagerMaxTokens: '最大输出 Tokens（可选）', providerManagerInput: '输入模态（可选）', providerManagerText: '文本', providerManagerImage: '图像', providerManagerAudio: '音频', providerManagerVideo: '视频', providerManagerAddModel: '添加模型', providerManagerDeleteModel: '删除模型', providerManagerUseDefaultModels: '使用提供商默认模型目录', providerManagerDiscover: '发现模型', providerManagerDiscovering: '正在查询…', providerManagerDiscoverHelp: '仅在点击后探测提供商；结果不会自动保存。请选择建议后确认添加，也可手动录入。', providerManagerDiscoveryFailed: '模型探测失败。请检查地址、协议和认证，或手动录入模型 ID。', providerManagerDiscoveryEmpty: '未发现模型；仍可手动录入。', providerManagerSuggestions: '模型建议', providerManagerSelectSuggestions: '选择要添加的模型，然后确认加入草稿。', providerManagerAddSelected: '将所选模型加入草稿', providerManagerNoSuggestions: '请选择至少一个模型建议。', providerManagerInvalidRouteId: '路由 ID 需以小写字母开头，仅含小写字母、数字和单个连字符分段。', providerManagerDuplicateRouteId: '此路由 ID 已被使用。', providerManagerInvalidBaseUrl: '请输入有效的 HTTP 或 HTTPS 地址。', providerManagerProtocolRequired: '请选择协议。', providerManagerModelsRequired: '自定义路由至少需要一个模型。', providerManagerModelIdRequired: '每个模型都必须有非空 ID。', providerManagerDuplicateModel: '模型 ID 不可重复。', providerManagerInvalidCapacity: '上下文窗口和最大 Tokens 必须为正整数。', providerManagerInvalidModalities: '输入模态值无效。', providerManagerConflictReloaded: '已载入当前配置。', providerManagerRemoveConfirm: '确认移除此配置？此操作不会卸载适配器，也不会删除已保存凭据。', providerManagerRemove: '移除配置', providerManagerRemoveFailed: '移除未完成。设置可能已变化；请重新载入并检查。', providerManagerRemoveSuccess: '配置已移除；凭据仍保留在 DSH 凭据服务中。', providerManagerCustomOnlyPiAi: '自定义路由使用已安装的 pi-ai 适配器；不会创建自定义 DeepSeek 适配器。', providerManagerDefaultEndpoint: '留空以使用提供商默认地址。', providerManagerNoCustomNamespace: '自定义路由所需的 pi-ai 设置不可用。'
      },
      en: {
        providerManagerCompanySearchLabel: 'Search providers', providerManagerCompanySearchPlaceholder: 'Provider name or domain', providerManagerCompanySearchClear: 'Clear search', providerManagerCompanySearchResults: 'results', providerManagerCompanySearchEmpty: 'No matching providers. Try a provider name, brand name, or domain.', providerManagerKeyHelp: 'API key help', providerManagerCloseDiscovery: 'Close model selection', providerManagerSelectVisible: 'Select visible additions', providerManagerRetryDiscovery: 'Try again', providerManagerDialogUnavailable: 'The model dialog could not open. Reopen this settings page and try again.', providerManagerDiscoveryDraftHint: 'Only checked new models join the draft. Existing models are kept; Save is still required.', providerManagerRetryPolicy: 'Retry policy', providerManagerRetryDefault: 'Default', providerManagerRetryNormal: 'Transient errors only', providerManagerRetryAlways: 'Always retry', providerManagerRetryCurrent: 'Keep existing policy', providerManagerRetryInvalid: 'Choose a supported retry policy.', providerManagerRetryAlwaysHint: 'Always retry continues until success, cancellation or session disposal and may make more requests.', providerManagerRestoreModels: 'Restore default models', providerManagerCustomizeModels: 'Customize model catalog', providerManagerFetchModels: 'Fetch available models', providerManagerAddModel: 'Add model', providerManagerModelOrder: 'Reorder model', providerManagerModelOrderHelp: 'Drag to reorder, or focus and use the Up and Down arrow keys.', providerManagerOrderFiltered: 'Clear search to reorder.', providerManagerModelPosition: 'Model position', providerManagerNewKeyDraft: 'The new API key takes effect after saving.', providerManagerNativeAuthShort: 'Native account authorization', providerManagerAuthentication: 'Authentication', providerManagerConnectionSettings: 'Custom settings', providerManagerNativeAuth: 'This entry uses native DSH account authorization. Manage it in its authorization panel; no API key is needed here.', providerManagerModelAdvanced: 'Details', providerManagerModelSearch: 'Search model ID or name', providerManagerCandidateSearch: 'Search discovered models', providerManagerCandidatesSelected: 'Selected', providerManagerModelSearchEmpty: 'No matching models.', providerManagerModelDraftNotice: 'Model catalog changes are in the draft. Choose Save to apply them.', providerManagerModelLocateError: 'Show model issue', providerManagerCatalogInherited: 'Inherited catalog', providerManagerCatalogCustomized: 'Custom catalog', providerManagerTitle: 'Providers and models', providerManagerIntro: 'Routes are grouped automatically into provider tiles by their effective request hostname. Select a provider to review its routes and manage configurations, model catalogs, and API keys.', providerManagerCompanyCellHint: 'Select to view routes and settings', providerManagerRouteCountOne: 'configured/active route', providerManagerRouteCount: 'configured/active routes', providerManagerCatalogCountOne: 'catalog entry', providerManagerCatalogCount: 'catalog entries', providerManagerReadOnlyRoute: 'This route is read-only here. Manage it on the official Models page or in its owning plugin settings.', providerManagerManagedExternally: 'Configuration managed by its owning plugin', providerManagerRouteHostsUnavailable: 'Some request hostnames could not be verified and are unclassified; catalog defaults are not used to guess a provider. Reload to retry.', providerManagerNoHostSummary: 'No hostname identified', providerManagerMoreHosts: 'more', companyUnclassified: 'Unclassified request URL', companyMoonshotAi: 'Moonshot AI', companyAnthropic: 'Anthropic', companyGoogleGemini: 'Google', companySpaceXsiGrok: 'SpaceXSI', companyZhipuAi: 'Zhipu AI', providerManagerBackToCompanies: 'Back to providers', providerManagerCompanyIntro: 'Each route under this provider keeps its own configuration. Add or edit it from the corresponding entry; this does not change the current session or default model.', providerManagerEditorBack: 'Back to provider details', providerManagerAdd: 'Add provider', providerManagerAddCustom: 'Add custom provider', providerManagerRefresh: 'Reload', providerManagerLoading: 'Loading provider configuration…', providerManagerLoadFailed: 'Could not read the provider directory or settings. Reload and try again; if it persists, expand “Safe runtime diagnostics” below and share the status values (no credentials or raw error details).', providerManagerLoadStageLabel: 'Diagnostic stage: ', providerManagerLoadCauseLabel: 'Failure category: ', providerManagerLoadCauseRemoteUnavailable: 'Remote service unavailable', providerManagerLoadCauseMethodUnavailable: 'Remote method not mounted', providerManagerLoadCauseCallRejected: 'Call rejected before a Remote result', providerManagerLoadCauseRemoteError: 'Remote returned a failure', providerManagerLoadCauseInvalidEnvelope: 'Remote response envelope is invalid', providerManagerLoadCauseInvalidValue: 'Successful value is not an array', providerManagerLoadCauseSettingsRejected: 'Settings read did not complete', providerManagerLoadCauseLocalProcessing: 'Local processing failed', providerManagerLoadCauseUnknown: 'Unclassified failure', providerManagerLoadCauseClientModuleGraphUnavailable: 'Client module graph unavailable', providerManagerLoadCauseApiRemotesDependencyMissing: 'API Remotes dependency not declared', providerManagerLoadCauseApiRemotesModuleMissing: 'API Remotes module missing', providerManagerLoadCauseApiRemotesEntryMissing: 'API Remotes plugin entry missing', providerManagerLoadCauseApiRemotesImportFailed: 'API Remotes import failed', providerManagerLoadCauseApiRemotesActivationFailed: 'API Remotes activation failed', providerManagerLoadCauseApiRemotesEntryPending: 'API Remotes entry is still starting', providerManagerLoadCauseApiRemotesLoaderEntryMissing: 'API Remotes entry missing from loader', providerManagerLoadCauseRemoteRootUnavailable: 'Remote root service absent or inactive', providerManagerLoadCauseRemoteRootAccessError: 'Could not read the Remote root service', providerManagerLoadCauseLlmNamespaceUnavailable: 'LLM Remote namespace absent or inactive', providerManagerLoadCauseLlmNamespaceAccessError: 'Could not read the LLM Remote namespace', providerManagerLoadCauseMethodAccessError: 'Could not read a Remote method', providerManagerDiagTitle: 'Safe runtime diagnostics', providerManagerDiagNote: 'Only fixed status categories are shown; raw errors, URLs, keys, and configuration values are excluded.', providerManagerDiagClientModules: 'Client module graph', providerManagerDiagApiDependency: 'API Remotes dependency', providerManagerDiagApiModule: 'API Remotes module', providerManagerDiagApiEntry: 'API Remotes plugin entry', providerManagerDiagApiImport: 'API Remotes import', providerManagerDiagApiEntryState: 'API Remotes lifecycle', providerManagerDiagRemoteRoot: 'Remote root service', providerManagerDiagLlmNamespace: 'LLM Remote namespace', providerManagerDiagStateAvailable: 'Available', providerManagerDiagStateAbsentOrInactive: 'Absent or inactive', providerManagerDiagStateAccessError: 'Read failed', providerManagerDiagStateInvalid: 'Invalid shape', providerManagerDiagStateUnknown: 'Unknown', providerManagerDiagStateDeclared: 'Declared', providerManagerDiagStateNotDeclared: 'Not declared', providerManagerDiagStatePresent: 'Present', providerManagerDiagStateAbsent: 'Absent', providerManagerDiagStateImportFailed: 'Import failed', providerManagerDiagStateNoRecordedFailure: 'No import failure recorded', providerManagerDiagStateActivationFailed: 'Activation failed', providerManagerDiagStatePending: 'Pending', providerManagerDiagStateLoading: 'Loading', providerManagerDiagStateActive: 'Active', providerManagerDiagStateDisposed: 'Disposed', providerManagerDiagStateUnloading: 'Unloading', providerManagerDiagStateMissing: 'Missing', providerManagerLoadRemoteCodeLabel: 'Remote error code: ', providerManagerLoadStageProviders: 'provider list', providerManagerLoadStageDirectory: 'configurable-provider directory', providerManagerLoadStageSettings: 'settings access', providerManagerLoadStageProcessing: 'local data processing', providerManagerReadOnly: 'This configuration is read-only. You can view it but cannot edit it.', providerManagerNoProviders: 'No provider configurations are manageable here yet.', providerManagerNoAddable: 'No supported provider is available to add. See the official Models page for other configurations.', providerManagerChoose: 'Choose how to add a provider', providerManagerCatalog: 'Add a known provider', providerManagerCustom: 'Add a custom API route', providerManagerSelectCatalog: 'Select a provider', providerManagerEdit: 'Edit', providerManagerRemove: 'Remove configuration', providerManagerCancel: 'Cancel', providerManagerSave: 'Save configuration', providerManagerSaving: 'Saving…', providerManagerSaved: 'Changes saved.', providerManagerSaveFailed: 'Configuration could not be saved. Check settings access and try again.', providerManagerConflict: 'Settings changed while you were editing. Your draft is retained; it was not overwritten or retried automatically. Reloading will discard the draft.', providerManagerChanged: 'This namespace revision changed. To avoid overwriting another edit, this draft cannot be saved; keep reviewing it or explicitly discard it and reload.', providerManagerDiscardReload: 'Discard draft and reload latest', providerManagerRouteId: 'Route ID', providerManagerDisplayName: 'Display name (optional)', providerManagerBaseUrl: 'API base URL', providerManagerProtocol: 'Protocol', providerManagerApiKey: 'API key (optional)', providerManagerApiKeyPlaceholder: 'Enter a new key; leave blank to keep the current value', providerManagerCredentialConfigured: 'Credential saved (value is never shown)', providerManagerCredentialMissing: 'No credential saved', providerManagerCredentialUnknown: 'Credential status is temporarily unavailable', providerManagerCredentialHelp: 'New keys go to DSH credentials only, never provider settings or browser storage.', providerManagerCredentialSaveFailed: 'Provider settings were saved, but the credential write failed. The draft and key input are retained; retrying will only write the credential.', providerManagerCredentialFieldUnavailable: 'This provider profile cannot reference an API key here. Manage authentication on the official Models page.', providerManagerCredentialClearHelp: 'A blank field does not delete an existing credential. To clear it, use the official Models page.', providerManagerActive: 'Registered', providerManagerInactive: 'Adapter is not currently registered', providerManagerConfigured: 'Configured', providerManagerNeedsSetup: 'Not configured', providerManagerAdvanced: 'Use the official Models page for advanced configuration.', providerManagerModels: 'Model catalog', providerManagerModelId: 'Model ID', providerManagerModelName: 'Display name (optional)', providerManagerContextWindow: 'Context window (optional)', providerManagerMaxTokens: 'Maximum output tokens (optional)', providerManagerInput: 'Input modalities (optional)', providerManagerText: 'Text', providerManagerImage: 'Image', providerManagerAudio: 'Audio', providerManagerVideo: 'Video', providerManagerAddModel: 'Add model', providerManagerDeleteModel: 'Remove model', providerManagerUseDefaultModels: 'Use the provider’s default model catalog', providerManagerDiscover: 'Discover models', providerManagerDiscovering: 'Checking…', providerManagerDiscoverHelp: 'Probe the provider only when clicked. Results are not saved automatically; select and confirm suggestions, or enter model IDs manually.', providerManagerDiscoveryFailed: 'Model discovery failed. Check the endpoint, protocol, and authentication, or enter model IDs manually.', providerManagerDiscoveryEmpty: 'No models were found; you can still add one manually.', providerManagerSuggestions: 'Model suggestions', providerManagerSelectSuggestions: 'Select suggestions to add, then confirm them into the draft.', providerManagerAddSelected: 'Add selected models to draft', providerManagerNoSuggestions: 'Select at least one suggestion.', providerManagerInvalidRouteId: 'Route IDs must start with a lowercase letter and use lowercase letters, digits, and single hyphen separators.', providerManagerDuplicateRouteId: 'This route ID is already in use.', providerManagerInvalidBaseUrl: 'Enter a valid HTTP or HTTPS URL.', providerManagerProtocolRequired: 'Select a protocol.', providerManagerModelsRequired: 'A custom route needs at least one model.', providerManagerModelIdRequired: 'Every model needs a non-empty ID.', providerManagerDuplicateModel: 'Model IDs must be unique.', providerManagerInvalidCapacity: 'Context window and maximum tokens must be positive integers.', providerManagerInvalidModalities: 'Invalid input modality.', providerManagerConflictReloaded: 'Current configuration loaded.', providerManagerRemoveConfirm: 'Remove this configuration? This will not uninstall its adapter or delete its saved credential.', providerManagerRemoveFailed: 'Removal was not completed. Settings may have changed; reload and review them.', providerManagerRemoveSuccess: 'Configuration removed. Its credential remains in DSH credentials.', providerManagerCustomOnlyPiAi: 'Custom routes use the installed pi-ai adapter; this does not create a custom DeepSeek adapter.', providerManagerDefaultEndpoint: 'Leave blank to use the provider default endpoint.', providerManagerNoCustomNamespace: 'The pi-ai settings required for custom routes are unavailable.'
      },
    };
    Object.assign(dictionaries.zh, providerManagerStrings.zh);
    Object.assign(dictionaries.en, providerManagerStrings.en);
    const providerManagerUiStrings = {
      zh: {
        providerManagerUiRemoveSuccess: '配置已移除。适配器未卸载，已保存凭据保持不变。',
        providerManagerUiRemoveFailed: '无法移除配置，请重新载入后再试。',
        providerManagerUiRemoveConflict: '设置在确认移除期间已变化；此配置未移除。请检查最新信息，再重新确认。',
        providerManagerUiCredentialWriteFailed: '无法写入凭据。Key 输入仍保留；配置本身未因此更改。',
        providerManagerUiRouteIdLabel: '路由 ID', providerManagerUiDisplayNameLabel: '显示名称（可选）',
        providerManagerUiBaseUrlLabel: 'API 地址', providerManagerUiProtocolLabel: '协议',
        providerManagerUiApiKeyLabel: 'API Key（可选）', providerManagerUiApiKeyRequiredLabel: 'API Key（必填）', providerManagerUiModelIdLabel: '模型 ID',
        providerManagerUiModelNameLabel: '显示名称（可选）', providerManagerUiContextWindowLabel: '上下文窗口（可选）',
        providerManagerUiMaxTokensLabel: '最大输出 tokens（可选）', providerManagerUiModalitiesLabel: '输入类型（可选）',
        providerManagerUiInputText: '文本', providerManagerUiInputImage: '图像',
        providerManagerUiModelRow: '模型 {n}', providerManagerUiAddManualModel: '手动添加模型', providerManagerUiRemoveModel: '移除此模型',
        providerManagerUiUseDefaultCatalog: '使用继承的默认模型目录', providerManagerUiDefaultCatalogNote: '默认目录来自适配器配置；取消勾选后可编辑覆盖目录。',
        providerManagerUiDiscover: '发现模型', providerManagerUiDiscovering: '正在发现…', providerManagerUiDiscoveryHelp: '查询可能使用此路由绑定的已保存密钥；临时 Key 会发送到所填 API 地址，仅用于本次查询。请只使用可信地址；查询不会保存密钥或模型。',
         providerManagerDiscoverySourceLive: '来源：平台实时', providerManagerDiscoverySourceCatalog: '来源：DSH 内置目录（不代表当前账号可用）', providerManagerDiscoverySourceDsh: '来源：DSH 模型发现', providerManagerDiscoveryEmptyLive: '平台未返回模型。', providerManagerDiscoveryScopeCredential: '当前凭据可见', providerManagerDiscoveryScopePublic: '公共目录',
         providerManagerDiscoveryInvalid: '模型发现请求无效。', providerManagerDiscoveryForbidden: '页面授权校验失败，请刷新后重试。', providerManagerDiscoveryBusy: '模型发现服务正忙。', providerManagerDiscoveryCancelled: '模型发现已取消。',
         providerManagerDiscoveryFallbackUnsupported: '当前路由不支持实时发现。', providerManagerDiscoveryFallbackUnsafe: '无法安全查询此地址。', providerManagerDiscoveryFallbackFailed: '未能获取有效的模型列表。', providerManagerDiscoveryFallbackTimeout: '平台查询超时。', providerManagerDiscoveryFallbackAuthentication: '平台认证失败。', providerManagerDiscoveryFallbackMissingCredential: '缺少平台查询凭据。',
         providerManagerDiscoveryFallbackNetwork: '连接平台失败，请检查网络连接。', providerManagerDiscoveryFallbackPlatformError: '平台返回错误，未能获取模型列表。',
        providerManagerUiDiscoveryFailed: '模型发现失败。可手动添加模型；Key 和服务器响应不会显示在错误信息中。',
        providerManagerUiDiscoveryNone: '没有找到可添加的模型。', providerManagerUiAddSelected: '添加所选模型',
        providerManagerUiNoSelected: '请先选择至少一个模型。', providerManagerUiRouteIdInvalid: '路由 ID 格式无效：使用小写字母、数字和连字符，并以字母开头。',
        providerManagerUiRouteIdTaken: '此路由 ID 已被使用。', providerManagerUiBaseUrlInvalid: '请输入有效的 HTTP 或 HTTPS 地址（不能包含用户名或密码）。',
        providerManagerUiProtocolRequired: '请选择此路由使用的协议。', providerManagerUiKeyRequired: '此协议必须提供 API Key。', providerManagerUiModelsRequired: '至少添加一个模型。', providerManagerUiNoModelsYet: '请使用下方的“手动添加模型”按钮添加目录条目。', providerManagerUiNothingToSave: '没有需要保存的更改。',
        providerManagerUiModelIdRequired: '每个模型都需要唯一的 ID。', providerManagerUiDuplicateModel: '模型 ID 重复。',
        providerManagerUiModelCapacityInvalid: '上下文窗口和最大输出 tokens 必须为正整数。', providerManagerUiModelModalitiesInvalid: '输入类型无效。',
         providerManagerReasoning: '推理档位', providerManagerReasoningInherit: '继承', providerManagerReasoningDisabled: '禁用档位', providerManagerReasoningCustom: '自定义',
         providerManagerReasoningHelp: '勾选会话可选档位。平台参数留空时默认与档位同名；支持留空的 off 交由协议处理。不会切换当前会话的档位。',
         providerManagerReasoningUnavailable: '以下档位或参数与当前配置不兼容。请移除后重新选择。', providerManagerReasoningRemove: '移除档位',
         providerManagerReasoningWire: '平台参数', providerManagerReasoningOffBlank: '留空使用协议默认行为', providerManagerReasoningInvalid: '至少选择一个非 off 档位，并检查所选档位是否受当前协议支持。',
        providerManagerUiRemoveConfirmNote: '移除只会删除此配置，不会卸载适配器，也不会删除已保存的凭据；如需清除凭据，请前往官方「模型」页单独操作。',
      },
      en: {
        providerManagerUiRemoveSuccess: 'Configuration removed. The adapter remains installed and saved credentials are unchanged.',
        providerManagerUiRemoveFailed: 'Could not remove the configuration. Reload and try again.',
        providerManagerUiRemoveConflict: 'Settings changed while removal was being confirmed; nothing was removed. Review the latest information and confirm again if appropriate.',
        providerManagerUiCredentialWriteFailed: 'Could not write the credential. The key input is retained; this did not change the provider configuration.',
        providerManagerUiRouteIdLabel: 'Route ID', providerManagerUiDisplayNameLabel: 'Display name (optional)',
        providerManagerUiBaseUrlLabel: 'API base URL', providerManagerUiProtocolLabel: 'Protocol',
        providerManagerUiApiKeyLabel: 'API key (optional)', providerManagerUiApiKeyRequiredLabel: 'API key (required)', providerManagerUiModelIdLabel: 'Model ID',
        providerManagerUiModelNameLabel: 'Display name (optional)', providerManagerUiContextWindowLabel: 'Context window (optional)',
        providerManagerUiMaxTokensLabel: 'Maximum output tokens (optional)', providerManagerUiModalitiesLabel: 'Input modalities (optional)',
        providerManagerUiInputText: 'Text', providerManagerUiInputImage: 'Image', providerManagerUiInputAudio: 'Audio', providerManagerUiInputVideo: 'Video',
        providerManagerUiModelRow: 'Model {n}', providerManagerUiAddManualModel: 'Add model manually', providerManagerUiRemoveModel: 'Remove this model',
        providerManagerUiUseDefaultCatalog: 'Use the inherited default model catalog', providerManagerUiDefaultCatalogNote: 'The default catalog comes from the adapter. Uncheck this to edit an override.',
        providerManagerUiDiscover: 'Discover models', providerManagerUiDiscovering: 'Discovering…', providerManagerUiDiscoveryHelp: 'Discovery may use the saved key bound to this route. A temporary key is sent to the API address you enter for this request only. Use trusted addresses only. Discovery does not save keys or models.',
         providerManagerDiscoverySourceLive: 'Source: Live platform list', providerManagerDiscoverySourceCatalog: 'Source: DSH built-in catalog (not verified for this account)', providerManagerDiscoverySourceDsh: 'Source: DSH model discovery', providerManagerDiscoveryEmptyLive: 'The platform returned no models.', providerManagerDiscoveryScopeCredential: 'Visible to the current credential', providerManagerDiscoveryScopePublic: 'Public catalog',
         providerManagerDiscoveryInvalid: 'The discovery request was invalid.', providerManagerDiscoveryForbidden: 'The page authorization check failed. Refresh and try again.', providerManagerDiscoveryBusy: 'Model discovery is busy.', providerManagerDiscoveryCancelled: 'Model discovery was cancelled.',
         providerManagerDiscoveryFallbackUnsupported: 'This route does not support live discovery.', providerManagerDiscoveryFallbackUnsafe: 'This address cannot be queried safely.', providerManagerDiscoveryFallbackFailed: 'Could not get a usable model list.', providerManagerDiscoveryFallbackTimeout: 'The platform query timed out.', providerManagerDiscoveryFallbackAuthentication: 'Platform authentication failed.', providerManagerDiscoveryFallbackMissingCredential: 'No credential was available for the platform query.',
         providerManagerDiscoveryFallbackNetwork: 'Could not reach the platform. Check your network connection.', providerManagerDiscoveryFallbackPlatformError: 'The platform returned an error instead of a model list.',
        providerManagerUiDiscoveryFailed: 'Model discovery failed. You can add models manually; keys and server responses are not shown in error text.',
        providerManagerUiDiscoveryNone: 'No addable models were found.', providerManagerUiAddSelected: 'Add selected models',
        providerManagerUiNoSelected: 'Select at least one model first.', providerManagerUiRouteIdInvalid: 'Invalid route ID. Use lowercase letters, digits, and hyphens, starting with a letter.',
        providerManagerUiRouteIdTaken: 'This route ID is already in use.', providerManagerUiBaseUrlInvalid: 'Enter a valid HTTP or HTTPS URL without a username or password.',
        providerManagerUiProtocolRequired: 'Choose the protocol for this route.', providerManagerUiKeyRequired: 'This protocol requires an API key.', providerManagerUiModelsRequired: 'Add at least one model.', providerManagerUiNoModelsYet: 'Use the button below to add a model to this catalog.', providerManagerUiNothingToSave: 'There are no changes to save.',
        providerManagerUiModelIdRequired: 'Every model needs a unique ID.', providerManagerUiDuplicateModel: 'Model IDs must be unique.',
        providerManagerUiModelCapacityInvalid: 'Context window and maximum output tokens must be positive integers.', providerManagerUiModelModalitiesInvalid: 'Input modalities are invalid.',
         providerManagerReasoning: 'Reasoning levels', providerManagerReasoningInherit: 'Inherit', providerManagerReasoningDisabled: 'Disable levels', providerManagerReasoningCustom: 'Custom',
         providerManagerReasoningHelp: 'Select the levels offered in conversations. A blank platform value uses the level name; a blank off value uses protocol defaults when supported. This does not change the current conversation’s level.',
         providerManagerReasoningUnavailable: 'These levels or values are not supported by the current configuration. Remove them to choose replacements.', providerManagerReasoningRemove: 'Remove level',
         providerManagerReasoningWire: 'Platform value', providerManagerReasoningOffBlank: 'Leave blank for the protocol default', providerManagerReasoningInvalid: 'Select at least one level besides off and check that the selected levels are supported by this protocol.',
        providerManagerUiRemoveConfirmNote: 'Removing this configuration does not uninstall its adapter or clear saved credentials. Clear credentials separately on the official Models page if needed.',
      },
    };
    Object.assign(dictionaries.zh, providerManagerUiStrings.zh);
    Object.assign(dictionaries.en, providerManagerUiStrings.en);
    const codexDictionaries = {
      zh: {
        title: 'Codex 授权', subtitle: '使用本插件内置界面完成 DSH 原生授权，无需额外 OAuth UI 插件。',
        browser: '浏览器登录', device: '设备码登录', refresh: '刷新状态', cancel: '取消本次授权', busy: '正在更新…', loading: '正在读取授权状态…',
        privacy: '授权仅在您点击登录后发起，不会自动切换模型或修改提供商配置。验证码、回调链接与授权令牌不要发送到聊天。',
        saved: '已保存订阅授权，模型权限需调用确认。', noCredential: '尚未保存订阅授权。', existingKey: '当前记录不是订阅授权，请检查模型设置。',
        missingRoute: '请先在「模型」设置添加内置 openai-codex 提供商，再回到此处登录。', override: '此路由配置了 API Key 覆盖。请先在模型设置中移除该覆盖；本页不会自动修改配置。',
        endpoint: '此路由不是受支持的官方 Codex 端点，已禁止登录。请检查模型设置。', noFlow: '当前 Harness 未提供内置 Codex 授权流程，请检查版本或插件配置。',
        pluginUnavailable: 'Codex 授权服务不可用。请重启 Harness 以加载本插件的内置授权服务。',
        openOfficial: '打开 OpenAI 官方授权页', linkMissing: '正在准备官方授权页…', unsafeLink: '无法安全打开授权地址，请取消后重试。',
        deviceCode: '设备验证码', codeWarning: '只在 OpenAI 官方授权页输入此验证码。不要将验证码、回调地址或令牌粘贴到聊天。', expires: '本次授权有效至',
        manual: '无法自动返回？手动提交回调', manualHelp: '仅当官方页面已完成授权但无法返回时，粘贴完整的 http://localhost:1455/auth/callback 回调链接（含 code 与 state 参数），不能仅填写授权码。内容只发送到本机 Host，提交后立即清空。',
        callback: '完整的本机回调链接', submit: '提交回调', callbackHint: '粘贴完整回调链接（隐藏显示）',
        idle: '尚未开始', starting: '正在启动授权', pending: '等待您完成官方授权', succeeded: '授权已完成', cancelled: '授权已取消', expired: '授权已过期，请重新开始', failed: '授权未完成',
        serviceError: '授权服务暂不可用，请刷新状态后重试。', csrf: '页面授权校验已过期，请刷新状态后重试。', conflict: '授权状态已改变，请刷新状态后重试。', invalid: '请求无法处理，请刷新状态后重试。', timeout: '授权请求超时，请刷新状态确认结果。',
        otherLogin: '另一项授权正在进行，请先完成或取消该授权。', authFailed: '本次授权未成功，请取消后重试；不会显示提供商原始错误内容。', notCommitted: '授权流程结束，但订阅授权尚未保存，请重试。', unsupportedPrompt: '本次授权需要暂不支持的交互，请取消后换一种登录方式。',
        hidden: '页面隐藏时暂停状态查询；离开此页不会撤销已发起的授权。',
      },
      en: {
        title: 'Codex authorization', subtitle: 'Sign in with this plugin’s built-in interface using native DSH authorization. No extra OAuth UI plugin is required.',
        browser: 'Sign in with browser', device: 'Sign in with device code', refresh: 'Refresh status', cancel: 'Cancel this attempt', busy: 'Updating…', loading: 'Reading authorization status…',
        privacy: 'Authorization starts only when you click sign in. This page never switches your model or changes provider configuration. Do not send codes, callback URLs or tokens to chat.',
        saved: 'Subscription authorization is saved. Model access still needs to be confirmed by an actual request.', noCredential: 'No subscription authorization is saved yet.', existingKey: 'The stored record is not a subscription grant. Check Models settings.',
        missingRoute: 'First add the built-in openai-codex provider in Models settings, then return here to sign in.', override: 'This route has an API key override. Remove it in Models settings before signing in. This page never changes it automatically.',
        endpoint: 'This route does not use a supported official Codex endpoint. Sign-in is blocked; check Models settings.', noFlow: 'The built-in Codex authorization flow is unavailable. Check your Harness version or plugin configuration.',
        pluginUnavailable: 'The Codex authorization service is unavailable. Restart Harness to load this plugin’s built-in authorization service.',
        openOfficial: 'Open official OpenAI authorization', linkMissing: 'Preparing the official authorization page…', unsafeLink: 'The authorization URL could not be opened safely. Cancel and try again.',
        deviceCode: 'Device code', codeWarning: 'Enter this code only on the official OpenAI authorization page. Never paste the code, callback URL or tokens into chat.', expires: 'This attempt expires',
        manual: 'Cannot return automatically? Submit a callback', manualHelp: 'Only after completing official authorization, paste the full http://localhost:1455/auth/callback URL including code and state if automatic return failed. A bare authorization code is not accepted. It is sent only to the local Host and cleared immediately after submission.',
        callback: 'Full local callback URL', submit: 'Submit callback', callbackHint: 'Paste full callback URL (hidden)',
        idle: 'Not started', starting: 'Starting authorization', pending: 'Waiting for you to finish official authorization', succeeded: 'Authorization completed', cancelled: 'Authorization cancelled', expired: 'Authorization expired; start again', failed: 'Authorization did not complete',
        serviceError: 'Authorization service is unavailable. Refresh status and try again.', csrf: 'The page authorization check expired. Refresh status and try again.', conflict: 'Authorization state changed. Refresh status and try again.', invalid: 'The request could not be processed. Refresh status and try again.', timeout: 'The authorization request timed out. Refresh status to confirm its outcome.',
        otherLogin: 'Another authorization is in progress. Complete or cancel it first.', authFailed: 'Authorization did not succeed. Cancel and try again; raw provider errors are never displayed.', notCommitted: 'The flow ended without saving a subscription grant. Try again.', unsupportedPrompt: 'This attempt needs an unsupported interaction. Cancel and try another sign-in method.',
        hidden: 'Status checks pause while the page is hidden. Leaving this page does not revoke an attempt already started.',
      },
    };
    const codexCss = `
.pq-codex-panel{margin-top:22px;color:var(--dsw-alias-label-primary);font:inherit;font-size:14px;line-height:1.6}.pq-codex-panel h4{font-size:13px;font-weight:600;margin:0 0 5px}.pq-codex-subtitle,.pq-codex-note{color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.7;margin:0}.pq-codex-card{margin-top:12px;padding:16px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}.pq-codex-status{font-weight:500;margin:0 0 10px}.pq-codex-auth-status{display:flex;align-items:flex-start;gap:8px;font-size:13px;line-height:1.7;font-weight:500;margin:0 0 10px}.pq-codex-auth-status:before{content:'';flex:none;width:8px;height:8px;margin-top:7px;border-radius:50%;background:currentColor}.pq-codex-auth-status[data-tone=success]{color:var(--dsw-alias-state-success-primary)}.pq-codex-auth-status[data-tone=idle]{color:var(--dsw-alias-label-secondary)}.pq-codex-block,.pq-codex-error{font-size:13px;line-height:1.7;padding:10px 12px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;margin:10px 0;overflow-wrap:anywhere}.pq-codex-error{color:var(--dsw-alias-state-error-primary)}.pq-codex-block{color:var(--dsw-alias-state-warn-primary)}.pq-codex-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:14px}.pq-codex-button{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;min-height:34px;padding:6px 12px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);font:inherit;font-size:12px;text-decoration:none;cursor:pointer}.pq-codex-primary{color:var(--dsw-alias-brand-primary);border-color:var(--dsw-alias-border-l2)}.pq-codex-button:hover:not(:disabled){background:var(--dsw-alias-bg-layer-2)}.pq-codex-button:disabled{opacity:.55;cursor:default}.pq-codex-button:focus-visible,.pq-codex-input:focus-visible,.pq-codex-manual summary:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:3px}.pq-codex-code-label{font-size:12px;color:var(--dsw-alias-label-secondary);margin-top:16px}.pq-codex-code{display:inline-block;max-width:100%;padding:8px 10px;border-radius:7px;background:var(--dsw-alias-bg-layer-2);font-size:18px;letter-spacing:.08em;overflow-wrap:anywhere}.pq-codex-manual{margin-top:14px}.pq-codex-manual summary{cursor:pointer;color:var(--dsw-alias-brand-primary)}.pq-codex-input{box-sizing:border-box;width:100%;max-width:560px;min-height:36px;padding:7px 10px;border:1px solid var(--dsw-alias-border-l1);border-radius:7px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);font:inherit;font-size:13px}.pq-codex-label{display:block;font-size:12px;margin:10px 0 5px}.pq-codex-card .pq-codex-note{margin-top:8px}
`;
    const css = `
.pq-page,.pq-popup{color:var(--dsw-alias-label-primary);font:inherit;font-size:14px;line-height:1.55;box-sizing:border-box}.pq-page{width:100%;max-width:820px;padding:24px}.pq-top{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:24px}.pq-page h2{margin:0 0 6px;font-size:20px;font-weight:600}.pq-page h3{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;margin:24px 0 12px}.pq-group-count{font-size:12px;font-weight:400;color:var(--dsw-alias-label-secondary)}
.pq-muted{color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.6}.pq-row{background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l1);border-radius:12px;padding:18px;margin-bottom:12px;min-width:0}.pq-row-head,.pq-row-title,.pq-tags,.pq-footer,.pq-metric-head{display:flex;align-items:center;gap:10px}.pq-row-head,.pq-footer,.pq-metric-head{justify-content:space-between}.pq-row-title{min-width:0;flex-wrap:wrap}.pq-name{font-size:15px;font-weight:600;overflow-wrap:anywhere}.pq-tags{flex-wrap:wrap;gap:8px;margin-top:12px}.pq-pill{display:inline-flex;align-items:center;gap:5px;padding:2px 8px;border:1px solid var(--dsw-alias-border-l1);border-radius:6px;font-size:11px;font-weight:500;color:var(--dsw-alias-label-secondary);line-height:18px}.pq-dot{width:6px;height:6px;border-radius:50%;flex:none;background:var(--dsw-alias-state-idle-primary)}.pq-dot[data-tone=success]{background:var(--dsw-alias-state-success-primary)}.pq-dot[data-tone=warn]{background:var(--dsw-alias-state-warn-primary)}.pq-dot[data-tone=error]{background:var(--dsw-alias-state-error-primary)}
.pq-metrics{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr));gap:12px;margin-top:16px}.pq-metric{min-width:0;background:var(--dsw-alias-bg-layer-2);border-radius:9px;padding:14px 16px}.pq-metric-label{font-size:12px;color:var(--dsw-alias-label-secondary)}.pq-metric-head .pq-metric-label{min-width:0;overflow-wrap:anywhere}.pq-spend-head{display:flex;align-items:center;justify-content:space-between;gap:8px}.pq-spend-range{display:flex;align-items:center;gap:7px;color:var(--dsw-alias-label-secondary);font-size:12px}.pq-spend-select{max-width:86px;padding:4px 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:7px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;font-size:12px}.pq-spend-select:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}.pq-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}.pq-amount{font-size:28px;line-height:1.25;font-weight:600;letter-spacing:-.4px;margin:7px 0 10px;overflow-wrap:anywhere;font-variant-numeric:tabular-nums}.pq-credits-value{font-size:20px;line-height:1.3;font-weight:600;margin:8px 0;overflow-wrap:anywhere;font-variant-numeric:tabular-nums}.pq-credits-state{font-size:16px;line-height:1.4;font-weight:600;margin:8px 0;overflow-wrap:anywhere}.pq-quota-value{font-size:24px;line-height:1.3;font-weight:600;font-variant-numeric:tabular-nums}.pq-quota-value small{font-size:12px;font-weight:400;margin-right:6px;color:var(--dsw-alias-label-secondary)}.pq-track{height:6px;overflow:hidden;background:var(--dsw-alias-border-l1);border-radius:4px;margin:12px 0 8px}.pq-fill{height:100%;border-radius:4px;background:var(--dsw-alias-brand-primary)}.pq-breakdown{display:flex;justify-content:space-between;gap:12px;font-size:12px;color:var(--dsw-alias-label-secondary);margin-top:5px}.pq-breakdown strong{color:var(--dsw-alias-label-primary);font-weight:500;font-variant-numeric:tabular-nums}.pq-breakdown-list{margin-top:10px;display:flex;flex-direction:column;gap:6px}.pq-breakdown-list .pq-breakdown{margin-top:0;padding:8px 10px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;overflow-wrap:anywhere}.pq-scope{font-size:12px;font-weight:500;margin:8px 0}.pq-footnote{font-size:12px;line-height:1.65;color:var(--dsw-alias-label-secondary);margin-top:10px}.pq-success{color:var(--dsw-alias-state-success-primary)}.pq-reset{display:block;font-variant-numeric:tabular-nums}.pq-warn{color:var(--dsw-alias-state-warn-primary)}.pq-error{color:var(--dsw-alias-state-error-primary)}.pq-status{font-size:12px;line-height:1.7;margin:12px 0 0;overflow-wrap:anywhere;padding:10px 12px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px}.pq-footer{gap:12px;flex-wrap:wrap;margin-top:16px}.pq-link{font-size:12px;color:var(--dsw-alias-brand-primary);text-decoration:none}.pq-link:hover{text-decoration:underline}.pq-meta{font-size:12px;color:var(--dsw-alias-label-secondary);margin-top:12px}.pq-meta summary{cursor:pointer;width:max-content}.pq-meta dl{display:grid;grid-template-columns:auto minmax(0,1fr);gap:5px 12px;margin:10px 0 0}.pq-meta dt,.pq-meta dd{margin:0;overflow-wrap:anywhere}.pq-meta dd{color:var(--dsw-alias-label-primary)}
.pq-button{font:inherit;font-size:12px;line-height:20px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);border-radius:8px;padding:5px 11px;cursor:pointer;flex-shrink:0}.pq-button:hover:not(:disabled){background:var(--dsw-alias-bg-layer-2)}.pq-button:disabled{opacity:.55;cursor:default}.pq-button:focus-visible,.pq-link:focus-visible,.pq-trigger:focus-visible,.pq-meta summary:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:3px}.pq-note{font-size:12px;color:var(--dsw-alias-label-secondary);margin-top:20px;line-height:1.7}.pq-empty{padding:24px 0;color:var(--dsw-alias-label-secondary)}
.pq-dock{display:flex;min-width:0;max-width:100%;padding:1px 4px;height:30px;box-sizing:border-box;align-items:center}.pq-trigger{display:inline-flex;align-items:center;gap:8px;min-width:0;max-width:100%;height:28px;border:1px solid var(--dsw-alias-border-l1);border-radius:7px;padding:3px 9px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;line-height:20px;cursor:pointer;text-align:left}.pq-trigger:hover,.pq-trigger[aria-expanded=true]{background:var(--dsw-alias-bg-layer-2);border-color:var(--dsw-alias-border-l2)}.pq-trigger-name{max-width:125px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;flex:0 1 auto}.pq-trigger-value{font-weight:500;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-primary);min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;flex:1 1 auto}.pq-summary-item[data-tone=success]{color:var(--dsw-alias-state-success-primary)}.pq-summary-item[data-tone=warn]{color:var(--dsw-alias-state-warn-primary)}.pq-summary-item[data-tone=error]{color:var(--dsw-alias-state-error-primary)}.pq-summary-separator{color:var(--dsw-alias-label-secondary)}.pq-chevron{width:12px;height:12px;flex:none;transition:transform .12s}.pq-trigger[aria-expanded=true] .pq-chevron{transform:rotate(180deg)}
.pq-popup{position:fixed;display:flex;flex-direction:column;pointer-events:auto;z-index:1;overflow:hidden;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-overlay);box-shadow:0 10px 32px color-mix(in srgb,var(--dsw-alias-label-primary) 12%,transparent)}.pq-popup-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px;border-bottom:1px solid var(--dsw-alias-border-l1);flex:none}.pq-popup-actions{display:flex;align-items:center;gap:6px}.pq-close{font-size:20px;line-height:20px;width:30px;height:30px;padding:2px;border-color:transparent;background:transparent}.pq-popup-scroll{overflow:auto;overscroll-behavior:contain;min-height:0}.pq-popup .pq-row{border:none;border-radius:0;background:transparent;margin:0;padding:0 16px 16px}.pq-popup .pq-metrics{grid-template-columns:1fr;margin-top:12px}.pq-popup .pq-amount{font-size:27px}.pq-popup .pq-tags{margin-top:14px}.pq-popup .pq-name{font-size:14px}.pq-popup .pq-meta{margin-top:12px}
.pq-tabs{display:flex;gap:8px;border-bottom:1px solid var(--dsw-alias-border-l1);margin-bottom:20px}.pq-tab{font:inherit;font-size:13px;padding:8px 12px;border:0;border-bottom:2px solid transparent;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer}.pq-tab[aria-selected=true]{border-bottom-color:var(--dsw-alias-brand-primary);color:var(--dsw-alias-label-primary);font-weight:600}.pq-tab:focus-visible,.pq-tab-panel:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:3px}.pq-provider-settings{max-width:980px}.pq-provider-cell-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:12px;margin-top:16px}.pq-provider-cell{box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;gap:16px;width:100%;min-width:0;min-height:76px;padding:14px 16px;text-align:left;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;cursor:pointer}.pq-provider-cell:hover{border-color:var(--dsw-alias-border-l2)}.pq-provider-cell:focus-visible,.pq-provider-back:focus-visible,.pq-provider-settings h3:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:3px}.pq-provider-icon{display:grid;place-items:center;flex:0 0 32px;width:32px;height:32px;color:var(--dsw-alias-label-primary)}.pq-provider-icon svg{display:block;width:24px;height:24px;overflow:visible}.pq-provider-icon-fallback{border-radius:50%;background:var(--dsw-alias-bg-layer-1);font-size:14px;font-weight:700}.pq-provider-cell-main{display:flex;flex:1;flex-direction:column;gap:5px;min-width:0}.pq-provider-cell-title{overflow-wrap:anywhere}.pq-provider-cell-hosts{display:flex;flex-wrap:wrap;gap:4px;margin-top:2px}.pq-provider-cell-host{display:inline-block;max-width:100%;padding:1px 5px;border-radius:4px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary);font-size:11px;line-height:1.5;overflow-wrap:anywhere}.pq-provider-cell-chevron{flex:none;color:var(--dsw-alias-label-secondary);font-size:20px}.pq-provider-back{margin-bottom:12px}.pq-page h3.pq-provider-detail-title{margin:4px 0 6px;font-size:16px}.pq-provider-routes-title{margin:22px 0 10px;font-size:14px}.pq-provider-route{margin:0 0 12px;padding:14px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}.pq-provider-route-heading{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:8px 14px;min-width:0}.pq-provider-route-heading strong,.pq-provider-route-heading code{overflow-wrap:anywhere}.pq-provider-route-heading code{font-size:11px;color:var(--dsw-alias-label-secondary)}.pq-provider-route>.pq-row{margin:12px 0 0;padding:12px;border:1px solid var(--dsw-alias-border-l1)}.pq-admin-panel{box-sizing:border-box;max-width:660px;padding:16px 18px;margin:0 0 14px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}.pq-admin-route{display:inline-flex;margin:6px 6px 4px 0}.pq-admin-key-help{margin:8px 0 12px}.pq-admin-key-help .pq-link{text-decoration:underline}.pq-admin-key-status{display:flex;align-items:center;gap:8px;margin:12px 0 0}.pq-admin-key-configured{color:var(--dsw-alias-state-success-primary)}.pq-admin-form{margin-top:14px}.pq-admin-panel .pq-settings-input{max-width:440px}.pq-threshold-panel{box-sizing:border-box;margin:0 0 24px;padding:16px 18px;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsw-alias-bg-layer-1)}.pq-threshold-panel .pq-top{margin-bottom:0}.pq-threshold-panel h3{margin:0 0 6px;font-size:14px;font-weight:600}.pq-settings-form{max-width:520px;margin-top:12px}.pq-settings-label{display:block;font-size:13px;font-weight:500;margin:16px 0 6px}.pq-settings-input{box-sizing:border-box;width:100%;max-width:220px;padding:8px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit}.pq-settings-input:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:3px}.pq-settings-input:disabled{opacity:.55}.pq-settings-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
.pq-team-plan-kind{margin:16px 0 0;padding:12px 14px 14px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px}.pq-team-plan-kind legend{padding:0 6px;font-size:13px;font-weight:600}.pq-team-plan-check{display:flex;align-items:center;gap:8px;margin:0;font-size:13px;font-weight:500}.pq-team-plan-kind .pq-settings-label{margin-top:12px}
.pq-popup-title{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;min-width:0}.pq-popup-title .pq-name{font-size:16px;font-weight:600}
.pq-seg{display:inline-flex;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;overflow:hidden}.pq-seg-item{font:inherit;font-size:12px;line-height:20px;padding:3px 10px;border:0;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer}.pq-seg-item.is-active{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);font-weight:600}.pq-seg-item:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:-2px}
.pq-icon-button{width:30px;height:30px;padding:2px;border-color:transparent;background:transparent;font-size:16px;line-height:20px}.pq-more{font-size:13px;text-decoration:none;white-space:nowrap}
.pq-popup-card{padding:14px 16px 14px}.pq-card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px 22px}.pq-card-label{font-size:13px;color:var(--dsw-alias-label-secondary)}.pq-card-value{display:flex;align-items:baseline;gap:4px;margin-top:6px;font-variant-numeric:tabular-nums}.pq-card-value strong{font-size:18px;font-weight:600;line-height:1.3}.pq-card-sub{font-size:12px;color:var(--dsw-alias-label-secondary)}.pq-card-track{margin:10px 0 6px;height:6px}.pq-card-footnote{font-size:12px;color:var(--dsw-alias-label-secondary)}.pq-popup-foot{margin-top:14px;padding-top:10px;border-top:1px solid var(--dsw-alias-border-l1)}
.pq-trigger-ring{flex:none;display:inline-flex;align-items:center;gap:6px;padding:1px 8px;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-tertiary);font:inherit;font-size:13px;font-variant-numeric:tabular-nums;line-height:20px;white-space:nowrap;cursor:pointer}.pq-trigger-ring:hover,.pq-trigger-ring[aria-expanded=true]{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary)}.pq-trigger-ring:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}.pq-ring{flex:none}.pq-ring-track{fill:none;stroke:var(--dsw-alias-border-l3);stroke-width:2px}.pq-ring-fill{fill:none;stroke-width:2px;stroke-linecap:round}
.pq-provider-route .pq-row{border:0;border-radius:0;background:transparent;padding:0;margin:0}@media(max-width:520px){.pq-page{padding:16px}.pq-metrics{grid-template-columns:1fr}.pq-row{padding:14px}.pq-trigger-name{max-width:100px}.pq-trigger{gap:6px}.pq-metric{padding:12px 14px}}.pq-company-search{display:grid;gap:8px;margin:16px 0}.pq-company-search label{font-size:13px;font-weight:600}.pq-company-search-row{display:flex;align-items:center;gap:8px}.pq-company-search input{box-sizing:border-box;flex:1;min-width:0;width:100%;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);padding:9px 12px;font:inherit;font-size:13px}.pq-company-search input::placeholder{color:var(--dsw-alias-label-secondary)}.pq-company-search input:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}.pq-company-search-status{margin:0;color:var(--dsw-alias-label-secondary);font-size:12px}.pq-manager{max-width:980px;padding:0}.pq-manager-heading{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:14px}.pq-manager-heading-actions,.pq-manager-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.pq-manager-heading-title{font-size:14px;font-weight:600}.pq-manager-error-stage{display:block;margin-top:4px}.pq-manager h3{margin:8px 0 6px}.pq-manager-card{min-width:0;padding:14px;margin-top:12px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}.pq-manager-provider-list{display:grid;gap:12px;margin-top:16px}.pq-manager-provider-entry{margin:0}.pq-manager-provider-entry-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.pq-manager-provider-identity{display:flex;flex-direction:column;gap:4px;min-width:0;flex:1}.pq-manager-provider-identity strong{overflow-wrap:anywhere}.pq-manager-provider-identity code,.pq-manager-readonly-route code{overflow-wrap:anywhere;color:var(--dsw-alias-label-secondary);font-size:11px}.pq-manager-state{flex:none;padding:2px 7px;border:1px solid var(--dsw-alias-border-l1);border-radius:999px;color:var(--dsw-alias-label-secondary);font-size:11px}.pq-manager-state[data-tone=success]{color:var(--dsw-alias-state-success-primary)}.pq-manager-state[data-tone=warn]{color:var(--dsw-alias-state-warn-primary)}.pq-manager-meta,.pq-manager-note{margin:8px 0 0;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.6;overflow-wrap:anywhere}.pq-manager-diagnostics{margin-top:10px;padding:10px 12px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px}.pq-manager-diagnostics summary{cursor:pointer;font-size:12px;font-weight:600}.pq-manager-diagnostics summary:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:3px}.pq-manager-diagnostic-list{display:grid;grid-template-columns:minmax(120px,1fr) 1fr;gap:6px 12px;margin:10px 0 0;font-size:12px;line-height:1.5}.pq-manager-diagnostic-list>div{display:contents}.pq-manager-diagnostic-list dt{color:var(--dsw-alias-label-secondary)}.pq-manager-diagnostic-list dd{margin:0;overflow-wrap:anywhere;color:var(--dsw-alias-label-primary)}@media(max-width:520px){.pq-manager-diagnostic-list{grid-template-columns:minmax(0,1fr)}.pq-manager-diagnostic-list dd{margin:0 0 6px}}.pq-manager-alert,.pq-manager-error{padding:9px 11px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;font-size:12px;line-height:1.6;overflow-wrap:anywhere}.pq-manager-alert{color:var(--dsw-alias-state-warn-primary)}.pq-manager-error{color:var(--dsw-alias-state-error-primary)}.pq-manager-danger{color:var(--dsw-alias-state-error-primary)}.pq-manager-primary{color:var(--dsw-alias-brand-primary);border-color:var(--dsw-alias-border-l2)}.pq-manager-add-row{display:flex;align-items:flex-end;gap:10px;flex-wrap:wrap;margin-top:12px}.pq-manager-field{display:flex;flex:1 1 220px;flex-direction:column;gap:5px;min-width:0;margin:12px 0;color:var(--dsw-alias-label-primary);font-size:12px}.pq-manager-field>span{font-weight:500}.pq-manager-field input,.pq-manager-field select{box-sizing:border-box;width:100%;min-height:36px;padding:7px 9px;border:1px solid var(--dsw-alias-border-l1);border-radius:7px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px}.pq-manager-field input:focus-visible,.pq-manager-field select:focus-visible,.pq-manager-check input:focus-visible,.pq-manager-candidate input:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}.pq-manager-field input[aria-invalid=true]{border-color:var(--dsw-alias-state-error-primary)}.pq-manager-readonly-route{display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin:14px 0;padding:10px;border-radius:8px;background:var(--dsw-alias-bg-layer-2)}.pq-manager-model-section{margin-top:20px;padding-top:14px;border-top:1px solid var(--dsw-alias-border-l1)}.pq-manager-model-heading{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}.pq-manager-model-heading h4{margin:0;font-size:14px}.pq-manager-check{display:inline-flex;align-items:center;gap:7px;margin:10px 14px 2px 0;color:var(--dsw-alias-label-secondary);font-size:12px}.pq-manager-check input,.pq-manager-candidate input{accent-color:var(--dsw-alias-brand-primary)}.pq-manager-model-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:10px;margin-top:12px}.pq-manager-model{min-width:0;margin:0;padding:12px;border:1px solid var(--dsw-alias-border-l1);border-radius:9px}.pq-manager-model legend,.pq-manager-modalities legend{padding:0 4px;color:var(--dsw-alias-label-secondary);font-size:11px}.pq-manager-model .pq-manager-field{margin:8px 0}.pq-manager-model-numbers{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.pq-manager-modalities{display:flex;flex-wrap:wrap;gap:3px 8px;min-width:0;margin:10px 0;padding:6px 8px;border:1px solid var(--dsw-alias-border-l1);border-radius:7px}.pq-manager-remove-model{display:block;margin-left:auto}.pq-manager-discovery{margin:12px 0;padding:12px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-2)}.pq-manager-discovery>strong{font-size:12px}.pq-manager-candidate-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:6px;margin:10px 0}.pq-manager-candidate{display:flex;align-items:flex-start;gap:8px;min-width:0;padding:8px;border:1px solid var(--dsw-alias-border-l1);border-radius:7px;font-size:12px;overflow-wrap:anywhere}.pq-manager-candidate>span{display:flex;flex-direction:column;gap:3px;min-width:0}.pq-manager-candidate small{color:var(--dsw-alias-label-secondary)}.pq-manager-footer{justify-content:flex-end;margin-top:16px;padding-top:12px;border-top:1px solid var(--dsw-alias-border-l1)}@media(max-width:520px){.pq-manager{padding:12px}.pq-manager-model-numbers{grid-template-columns:1fr}.pq-provider-settings-toolbar{align-items:stretch}.pq-provider-manage-button{align-self:flex-start}}@media(prefers-reduced-motion:reduce){.pq-chevron{transition:none}}
.pq-manager-form-section{padding:12px 0;border-top:1px solid var(--dsw-alias-border-l1)}.pq-manager-form-section h4{font-size:12px;font-weight:500;margin:0 0 8px;color:var(--dsw-alias-label-secondary)}.pq-manager-connection{padding:12px 0;border-top:1px solid var(--dsw-alias-border-l1)}.pq-manager-connection>summary{font-size:12px;font-weight:500;cursor:pointer;color:var(--dsw-alias-label-secondary)}.pq-manager-connection>summary:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:3px}.pq-manager-connection-fields{display:grid;gap:8px;padding-top:12px}.pq-manager-model-section{border-top:1px solid var(--dsw-alias-border-l1);padding-top:12px}.pq-manager-model-toolbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:10px 0}.pq-manager-filter{flex:1;min-width:120px}.pq-manager-model-row input,.pq-manager-filter input{box-sizing:border-box;width:100%;min-width:0;border:1px solid var(--dsw-alias-border-l1);border-radius:6px;padding:5px 8px;font:inherit;font-size:12px;line-height:20px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}.pq-manager-model-row input:focus-visible,.pq-manager-filter input:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}.pq-manager-model-row input[aria-invalid=true]{border-color:var(--dsw-alias-state-error-primary)}.pq-manager-editor .pq-manager-model{container:pq-model-row / inline-size;min-inline-size:0;padding:8px;margin:0;border:1px solid var(--dsw-alias-border-l1);border-radius:8px}.pq-manager-model-row{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr) auto auto;align-items:center;gap:6px}.pq-manager-model-id,.pq-manager-model-name{display:flex;flex-direction:column;gap:4px;min-width:0}.pq-manager-model-name-label{display:none}.pq-manager-model-row .pq-button{padding:4px 7px;line-height:20px}.pq-manager-model-row .pq-manager-remove-model{margin:0;justify-self:auto}.pq-manager-editor .pq-manager-model-advanced{min-width:0;border:0;margin:0;padding:12px 2px 2px}.pq-manager-model-advanced[hidden]{display:none}.pq-manager-model-error{display:flex;flex-wrap:wrap;align-items:center;gap:8px}.pq-manager-model-error .pq-manager-error{flex:1;min-width:0}.pq-manager-model-row input:disabled{opacity:.65}.pq-manager-model-section>.pq-manager-note{margin:8px 0}.pq-manager-model-count{font-weight:400;color:var(--dsw-alias-label-secondary);font-size:12px}.pq-manager-editor .pq-manager-footer{border-top:1px solid var(--dsw-alias-border-l1);padding-top:14px;justify-content:flex-end}
@container pq-model-row (max-width:440px){.pq-manager-model-row{grid-template-columns:minmax(0,1fr) auto auto}.pq-manager-model-id{grid-column:1;grid-row:1}.pq-manager-model-name{display:none;grid-column:1/-1;grid-row:2}.pq-manager-model-row[data-expanded=true] .pq-manager-model-name{display:flex}.pq-manager-model-name-label{display:block;font-size:12px;color:var(--dsw-alias-label-secondary)}.pq-manager-model-toggle{grid-column:2;grid-row:1}.pq-manager-model-row .pq-manager-remove-model{grid-column:3;grid-row:1}}
.pq-manager-provider-entry-head{align-items:center;flex-wrap:wrap}.pq-manager-route-title{display:flex;align-items:center;gap:8px;min-width:0}.pq-manager-route-title strong{font-size:14px}.pq-manager-route-actions{margin:0;gap:8px}.pq-manager-route-actions .pq-manager-route-remove{border-color:transparent;background:transparent}.pq-manager-editor.pq-manager-inline-editor{max-width:none;min-width:0;margin-top:14px;padding:16px;border-radius:12px;background:var(--dsw-alias-bg-layer-2)}.pq-manager-inline-editor .pq-manager-inline-title{margin:0 0 16px;font-size:14px;line-height:20px;font-weight:500;overflow-wrap:anywhere}.pq-manager-inline-title:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:3px}.pq-manager-inline-editor .pq-manager-form-section{border:0;padding:0 0 12px}.pq-manager-key-label{display:flex;align-items:center;gap:8px}.pq-manager-key-help{display:inline-grid;place-items:center;width:15px;height:15px;border:1px solid var(--dsw-alias-border-l2);border-radius:50%;font-size:10px;color:var(--dsw-alias-label-secondary)}.pq-manager-inline-editor .pq-manager-key-preview::placeholder{color:var(--dsw-alias-label-primary);opacity:1}.pq-manager-inline-editor .pq-manager-saved-note{color:var(--dsw-alias-state-success-primary)}.pq-manager-inline-editor .pq-manager-field>input,.pq-manager-inline-editor .pq-manager-field>select{font-size:13px;line-height:20px;padding:8px 10px}.pq-manager-inline-editor .pq-manager-connection{margin-top:4px;padding-top:12px;padding-bottom:0}.pq-manager-inline-editor .pq-manager-connection>summary{list-style:none;display:flex;align-items:center;gap:8px;font-size:13px}.pq-manager-inline-editor .pq-manager-connection>summary::-webkit-details-marker{display:none}.pq-manager-inline-editor .pq-manager-connection>summary::before{content:'';width:5px;height:5px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:rotate(-45deg)}.pq-manager-inline-editor .pq-manager-connection[open]>summary::before{transform:rotate(45deg)}.pq-manager-inline-editor .pq-manager-connection-fields{padding-top:16px;gap:12px}.pq-manager-retry-field{max-width:320px}.pq-manager-inline-editor .pq-manager-model-heading{align-items:flex-start;gap:12px}.pq-manager-inline-editor .pq-manager-model-heading h4{font-size:12px;line-height:18px;font-weight:500;color:var(--dsw-alias-label-secondary);margin:0}.pq-manager-catalog-actions{display:flex;align-items:center;justify-content:flex-end;flex:1;gap:18px;flex-wrap:wrap}.pq-manager-link{font:inherit;font-size:12px;line-height:20px;border:0;padding:0;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer}.pq-manager-link:hover:not(:disabled){color:var(--dsw-alias-label-primary)}.pq-manager-link:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:3px}.pq-manager-link:disabled{opacity:.5;cursor:default}.pq-manager-inline-editor .pq-manager-model-list{display:flex;flex-direction:column;gap:8px}.pq-manager-inline-editor .pq-manager-model-row{grid-template-columns:auto minmax(0,1.4fr) minmax(0,1fr) auto auto}.pq-manager-model-row .pq-model-icon{display:grid;place-items:center;width:28px;height:28px;flex:none;border:0;padding:0;background:transparent;color:var(--dsw-alias-label-secondary)}.pq-manager-model-row .pq-model-icon:hover:not(:disabled){color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1)}.pq-manager-model-row .pq-manager-remove-model:hover:not(:disabled){color:var(--dsw-alias-state-error-primary)}.pq-manager-model-order:not(:disabled){cursor:grab}.pq-manager-model-order:active{cursor:grabbing}.pq-manager-inline-editor .pq-manager-model-section>button{display:inline-flex;align-items:center;gap:5px;margin-top:8px}.pq-manager-inline-editor .pq-manager-footer{border:0;padding-top:20px;margin-top:8px;justify-content:flex-end}.pq-manager-inline-editor .pq-manager-footer .pq-manager-primary{background:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-primary);color:var(--dsw-alias-bg-layer-1)}.pq-provider-cell:disabled{cursor:default;opacity:.6}
@container pq-model-row (max-width:440px){.pq-manager-inline-editor .pq-manager-model-row{grid-template-columns:auto minmax(0,1fr) auto auto}.pq-manager-model-order{grid-column:1;grid-row:1}.pq-manager-model-id{grid-column:2;grid-row:1}.pq-manager-model-toggle{grid-column:3;grid-row:1}.pq-manager-model-row .pq-manager-remove-model{grid-column:4;grid-row:1}}
.pq-manager-key-label{position:relative}
.pq-key-help-wrap{display:inline-flex;align-items:center}
.pq-key-help-wrap .pq-manager-key-help{width:20px;height:20px;padding:0;background:transparent;font:inherit;font-size:11px;line-height:1;cursor:pointer}
.pq-manager-key-help:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:3px}
.pq-key-help-tooltip{position:absolute;inset-inline-start:0;top:calc(100% + 6px);z-index:30;box-sizing:border-box;width:min(340px,100%);padding:10px 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);box-shadow:0 6px 22px color-mix(in srgb,var(--dsw-alias-label-primary) 10%,transparent);font-size:12px;font-weight:400;line-height:1.65;overflow-wrap:anywhere}
.pq-model-dialog{box-sizing:border-box;width:640px;max-width:calc(100vw - 32px);max-height:calc(100dvh - 48px);padding:0;margin:auto;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);box-shadow:0 16px 56px color-mix(in srgb,var(--dsw-alias-label-primary) 15%,transparent);overflow:hidden}
.pq-model-dialog:not([open]){display:none}
.pq-model-dialog[open]{display:flex;flex-direction:column}
.pq-model-dialog::backdrop{background:color-mix(in srgb,var(--dsw-alias-bg-overlay) 65%,transparent);backdrop-filter:blur(2px)}
.pq-model-dialog-content{display:flex;flex-direction:column;min-height:0;max-height:inherit;flex:1}
.pq-model-dialog-header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px;border-bottom:1px solid var(--dsw-alias-border-l1);flex:none}
.pq-model-dialog-header h3{font-size:14px;font-weight:600;margin:0}
.pq-model-dialog-close{border:0;background:transparent;font-size:20px;padding:2px 7px}
.pq-model-dialog-toolbar{padding:14px 16px 8px;flex:none}
.pq-model-dialog-selection{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px}
.pq-model-dialog-selection .pq-manager-check,.pq-model-dialog-selection .pq-manager-note{margin:0}
.pq-model-dialog-body{min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:8px 16px 16px;flex:1}
.pq-model-dialog-candidates{display:flex;flex-direction:column;gap:8px;margin:0}
.pq-model-dialog-candidates .pq-manager-candidate{align-items:flex-start;padding:10px}
.pq-model-dialog-footer{padding:12px 16px 16px;border-top:1px solid var(--dsw-alias-border-l1);flex:none}
.pq-model-dialog-footer>.pq-manager-note{margin:0 0 10px}
.pq-model-dialog-footer .pq-manager-actions{justify-content:flex-end}
.pq-model-dialog-footer .pq-manager-primary{background:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-primary);color:var(--dsw-alias-bg-layer-1)}
`;
    return {
      inject: ['slots', 'locale', 'remote', 'configForms', 'settingsSchema'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(NS, dictionaries));
        ctx.effect(() => ctx.locale.register(CODEX_NS, codexDictionaries));
        const t = ctx.locale.bind(NS);
        const codexT = ctx.locale.bind(CODEX_NS);
        let snapshot = { data: null, loading: false, error: false };
        const listeners = new Set();
        let pending, controller, timer, active = true;
        const publish = update => { snapshot = { ...snapshot, ...update }; for (const listener of listeners) listener(); };
        const load = (refresh = false, provider) => {
          if (!active || pending) return pending;
          controller = new AbortController();
          const signal = controller.signal;
          publish({ loading: true, error: false });
          pending = (async () => {
            try {
              const url = new URL('api/provider-quota', document.baseURI);
              if (provider) url.searchParams.set('provider', provider);
              const response = await fetch(url, { method: refresh ? 'POST' : 'GET', credentials: 'same-origin', cache: 'no-store', signal });
              if (!response.ok) throw new Error('quota-service');
              const data = await response.json();
              if (!Array.isArray(data.rows)) throw new Error('quota-shape');
              if (active && !signal.aborted) {
                if (provider && snapshot.data) {
                  const updates = new Map(data.rows.map(row => [row.id, row]));
                  publish({ data: { ...snapshot.data, rows: snapshot.data.rows.map(row => updates.get(row.id) || row), colorThresholds: data.colorThresholds, checkedAt: data.checkedAt }, error: false });
                } else publish({ data, error: false });
              }
            } catch {
              if (active && !signal.aborted) publish({ error: true });
            } finally {
              pending = undefined;
              if (active && !signal.aborted) publish({ loading: false });
            }
          })();
          return pending;
        };
        const visibleRefresh = () => {
          if (document.visibilityState === 'visible' && listeners.size && (!snapshot.data || Date.now() - snapshot.data.checkedAt >= 120000)) load();
        };
        const subscribe = listener => {
          listeners.add(listener);
          if (listeners.size === 1) {
            visibleRefresh();
            timer = setInterval(visibleRefresh, 15000);
          }
          return () => { listeners.delete(listener); if (!listeners.size) { clearInterval(timer); timer = undefined; } };
        };
        ctx.effect(() => {
          document.addEventListener('visibilitychange', visibleRefresh);
          return () => { active = false; controller?.abort(); clearInterval(timer); document.removeEventListener('visibilitychange', visibleRefresh); listeners.clear(); };
        });

        let popup = null, popupGeneration = 0;
        const popupListeners = new Set();
        const popupSubscribe = listener => { popupListeners.add(listener); return () => popupListeners.delete(listener); };
        const publishPopup = next => { popup = next; for (const listener of popupListeners) listener(); };
        const closePopup = (restoreFocus = false) => {
          const anchor = popup?.anchor;
          publishPopup(null);
          if (restoreFocus && anchor?.isConnected) anchor.focus({ preventScroll: true });
        };
        ctx.effect(() => () => { closePopup(false); popupListeners.clear(); });
        const viewport = () => {
          const visual = window.visualViewport;
          return { left: visual?.offsetLeft ?? 0, top: visual?.offsetTop ?? 0, width: visual?.width ?? window.innerWidth, height: visual?.height ?? window.innerHeight };
        };
        function useQuota() {
          React.useSyncExternalStore(callback => ctx.locale.subscribe(callback), () => ctx.locale.getSnapshot());
          return React.useSyncExternalStore(subscribe, () => snapshot);
        }
        function time(value) {
          return formatQuotaDate(value);
        }
        function ResetTime({ value }) {
          const [now, setNow] = React.useState(() => Date.now());
          React.useEffect(() => {
            const update = () => { if (document.visibilityState === 'visible') setNow(Date.now()); };
            const clock = setInterval(update, 15_000);
            document.addEventListener('visibilitychange', update);
            update();
            return () => { clearInterval(clock); document.removeEventListener('visibilitychange', update); };
          }, []);
          return h('time', { className: 'pq-footnote pq-reset', dateTime: new Date(value).toISOString(), title: time(value) }, `${t('next')}: ${formatQuotaDate(value, { includeYear: false })} (${formatQuotaCountdown(value, now)})`);
        }
        function number(value) {
          return new Intl.NumberFormat(ctx.locale.getLocale().active, { maximumFractionDigits: 2 }).format(value);
        }
        function money(metric, options = {}) {
          const amount = Number(metric.amount);
          if (!Number.isFinite(amount)) return '—';
          const precision = options.maximumFractionDigits ?? (amount !== 0 && Math.abs(amount) < 0.01 ? 6 : 2);
          try { return new Intl.NumberFormat(ctx.locale.getLocale().active, { style: 'currency', currency: metric.currency, maximumFractionDigits: precision }).format(amount); }
          catch { return `${metric.currency} ${number(amount)}`; }
        }
        function percent(value) { return number(Math.round(value * 10) / 10); }
        function isTeamPlanKind(kind) { return kind === 'glm-cn-team' || kind === 'zai-coding-plan-team'; }
        // 'no-plan' means different things for the personal and team monitors.
        function statusKey(row) { return row.status === 'no-plan' && isTeamPlanKind(row.kind) ? 'no-team-plan' : row.status; }
        // A provider's personal row and its Team Plan sibling share one key. The
        // popup lists both; the dock shows whichever one actually carries quota.
        function providerRows(rows, provider) {
          const personal = rows.find(item => item.id === provider);
          if (!personal) return [];
          const team = rows.find(item => item.id === `${provider}::team`);
          return team ? [personal, team] : [personal];
        }
        function preferredRow(rows, provider) {
          const candidates = providerRows(rows, provider);
          return candidates.find(row => row.metrics.length > 0) ?? candidates[0] ?? null;
        }
        function providerName(row) {
          if (isTeamPlanKind(row.kind)) return `${providerName({ ...row, kind: row.kind.slice(0, -'team'.length) })} · ${t('teamPlan')}`;
          if (row.kind === 'glm-standard-cn') return t('glmApi');
          if (row.name === 'zai-coding-cn') return t('cnPlan');
          if (row.kind === 'zai-coding-plan') return t('zaiPlan');
          if (row.name === 'DeepSeek Account') return t('accountName');
          if (row.kind === 'opencode-go') return t('opencodeGo');
          if (row.kind === 'minimax-cn') return t('minimaxPlan');
          return row.name;
        }
        const COMPANY_FILTERS = Object.freeze([
          { key: 'openai', label: 'companyOpenAI' },
          { key: 'deepseek', label: 'companyDeepSeek' },
          { key: 'glm', label: 'companyGlm' },
          { key: 'minimax', label: 'companyMiniMax' },
          { key: 'opencode', label: 'companyOpenCode' },
          { key: 'other', label: 'companyOther' },
        ]);
        // Bundled inline vectors avoid runtime image requests. Simple Icons paths: DeepSeek,
        // MiniMax, OpenCode, Google, Anthropic and KIMI (CC0); theSVG paths: OpenAI and Zhipu.
        // Simple Icons license: https://github.com/simple-icons/simple-icons/blob/develop/LICENSE
        // CC0 does not grant trademark rights; all brand marks remain their owners' trademarks.
        const PROVIDER_MARKS = Object.freeze({
          openai: { viewBox: '0 0 256 260', path: 'M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z' },
          deepseek: { viewBox: '0 0 24 24', color: '#4D6BFE', path: 'M23.748 4.651c-.254-.124-.364.113-.512.233-.051.04-.094.09-.137.137-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.155-.708-.311-.955-.65-.172-.24-.219-.509-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.094.172.187.129.323-.082.28-.18.553-.266.833-.055.179-.137.218-.328.14a5.5 5.5 0 0 1-1.737-1.179c-.857-.828-1.631-1.743-2.597-2.46a12 12 0 0 0-.689-.47c-.985-.957.13-1.743.387-1.836.27-.098.094-.433-.778-.428-.872.003-1.67.295-2.687.685a3 3 0 0 1-.465.136 9.6 9.6 0 0 0-2.883-.101c-1.885.21-3.39 1.1-4.497 2.622C.082 8.776-.231 10.854.152 13.02c.403 2.284 1.568 4.175 3.36 5.653 1.857 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.132-.284 4.994-1.86.47.234.962.328 1.78.398.629.058 1.235-.031 1.705-.129.735-.155.684-.836.418-.961-2.155-1.004-1.682-.595-2.112-.926 1.095-1.295 2.768-3.598 3.284-6.733.05-.346.115-.834.108-1.114-.004-.171.035-.238.23-.257a4.2 4.2 0 0 0 1.545-.475c1.397-.763 1.96-2.016 2.093-3.517.02-.23-.004-.467-.247-.588M11.58 18.168c-2.088-1.642-3.101-2.183-3.52-2.16-.39.024-.32.472-.234.763.09.288.207.487.371.74.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.168-1.361-.801-2.5-1.86-3.301-3.306-.775-1.393-1.225-2.888-1.299-4.482-.02-.385.094-.522.477-.592a4.7 4.7 0 0 1 1.53-.038c2.131.311 3.946 1.264 5.467 2.774.868.86 1.525 1.887 2.202 2.89.72 1.066 1.494 2.082 2.48 2.915.348.291.626.513.892.677-.802.09-2.14.109-3.055-.615zm1.001-6.44a.306.306 0 0 1 .415-.287.3.3 0 0 1 .113.074.3.3 0 0 1 .086.214c0 .17-.136.307-.308.307a.303.303 0 0 1-.306-.307m3.11 1.596c-.2.081-.4.151-.591.16a1.25 1.25 0 0 1-.798-.254c-.274-.23-.47-.358-.551-.758a1.7 1.7 0 0 1 .015-.588c.07-.327-.007-.537-.238-.727-.188-.156-.426-.199-.689-.199a.6.6 0 0 1-.254-.078.253.253 0 0 1-.114-.358 1 1 0 0 1 .192-.21c.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.392.451.462.576.685.915.176.264.336.536.446.848.066.194-.02.353-.25.45' },
          glm: { viewBox: '0 0 24 24', color: '#3859FF', path: 'M11.991 23.503a.24.24 0 00-.244.248.24.24 0 00.244.249.24.24 0 00.245-.249.24.24 0 00-.22-.247l-.025-.001zM9.671 5.365a1.697 1.697 0 011.099 2.132l-.071.172-.016.04-.018.054c-.07.16-.104.32-.104.498-.035.71.47 1.279 1.186 1.314h.366c1.309.053 2.338 1.173 2.286 2.523-.052 1.332-1.152 2.38-2.478 2.327h-.174c-.715.018-1.274.64-1.239 1.368 0 .124.018.23.053.337.209.373.54.658.96.8.75.23 1.517-.125 1.9-.782l.018-.035c.402-.64 1.17-.96 1.92-.711.854.284 1.378 1.226 1.099 2.167a1.661 1.661 0 01-2.077 1.102 1.711 1.711 0 01-.907-.711l-.017-.035c-.2-.323-.463-.58-.851-.711l-.056-.018a1.646 1.646 0 00-1.954.746 1.66 1.66 0 01-1.065.764 1.677 1.677 0 01-1.989-1.279c-.209-.906.332-1.83 1.257-2.043a1.51 1.51 0 01.296-.035h.018c.68-.071 1.151-.622 1.116-1.333a1.307 1.307 0 00-.227-.693 2.515 2.515 0 01-.366-1.403 2.39 2.39 0 01.366-1.208c.14-.195.21-.444.227-.693.018-.71-.506-1.261-1.186-1.332l-.07-.018a1.43 1.43 0 01-.299-.07l-.05-.019a1.7 1.7 0 01-1.047-2.114 1.68 1.68 0 012.094-1.101zm-5.575 10.11c.26-.264.639-.367.994-.27.355.096.633.379.728.74.095.362-.007.748-.267 1.013-.402.41-1.053.41-1.455 0a1.062 1.062 0 010-1.482zm14.845-.294c.359-.09.738.024.992.297.254.274.344.665.237 1.025-.107.36-.396.634-.756.718-.551.128-1.1-.22-1.23-.781a1.05 1.05 0 01.757-1.26zm-.064-4.39c.314.32.49.753.49 1.206 0 .452-.176.886-.49 1.206-.315.32-.74.5-1.185.5-.444 0-.87-.18-1.184-.5a1.727 1.727 0 010-2.412 1.654 1.654 0 012.369 0zm-11.243.163c.364.484.447 1.128.218 1.691a1.665 1.665 0 01-2.188.923c-.855-.36-1.26-1.358-.907-2.228a1.68 1.68 0 011.33-1.038c.593-.08 1.183.169 1.547.652zm11.545-4.221c.368 0 .708.2.892.524.184.324.184.724 0 1.048a1.026 1.026 0 01-.892.524c-.568 0-1.03-.47-1.03-1.048 0-.579.462-1.048 1.03-1.048zm-14.358 0c.368 0 .707.2.891.524.184.324.184.724 0 1.048a1.026 1.026 0 01-.891.524c-.569 0-1.03-.47-1.03-1.048 0-.579.461-1.048 1.03-1.048zm10.031-1.475c.925 0 1.675.764 1.675 1.706s-.75 1.705-1.675 1.705-1.674-.763-1.674-1.705c0-.942.75-1.706 1.674-1.706zm-2.626-.684c.362-.082.653-.356.761-.718a1.062 1.062 0 00-.238-1.028 1.017 1.017 0 00-.996-.294c-.547.14-.881.7-.752 1.257.13.558.675.907 1.225.783zm0 16.876c.359-.087.644-.36.75-.72a1.062 1.062 0 00-.237-1.019 1.018 1.018 0 00-.985-.301 1.037 1.037 0 00-.762.717c-.108.361-.017.754.239 1.028.245.263.606.377.953.305l.043-.01zM17.19 3.5a.631.631 0 00.628-.64c0-.355-.279-.64-.628-.64a.631.631 0 00-.628.64c0 .355.28.64.628.64zm-10.38 0a.631.631 0 00.628-.64c0-.355-.28-.64-.628-.64a.631.631 0 00-.628.64c0 .355.279.64.628.64zm-5.182 7.852a.631.631 0 00-.628.64c0 .354.28.639.628.639a.63.63 0 00.627-.606l.001-.034a.62.62 0 00-.628-.64zm5.182 9.13a.631.631 0 00-.628.64c0 .355.279.64.628.64a.631.631 0 00.628-.64c0-.355-.28-.64-.628-.64zm10.38.018a.631.631 0 00-.628.64c0 .355.28.64.628.64a.631.631 0 00.628-.64c0-.355-.279-.64-.628-.64zm5.182-9.148a.631.631 0 00-.628.64c0 .354.279.639.628.639a.631.631 0 00.628-.64c0-.355-.28-.64-.628-.64zm-.384-4.992a.24.24 0 00.244-.249.24.24 0 00-.244-.249.24.24 0 00-.244.249c0 .142.122.249.244.249zM11.991.497a.24.24 0 00.245-.248A.24.24 0 0011.99 0a.24.24 0 00-.244.249c0 .133.108.236.223.247l.021.001zM2.011 6.36a.24.24 0 00.245-.249.24.24 0 00-.244-.249.24.24 0 00-.244.249.24.24 0 00.244.249zm0 11.263a.24.24 0 00-.243.248.24.24 0 00.244.249.24.24 0 00.244-.249.252.252 0 00-.244-.248zm19.995-.018a.24.24 0 00-.245.248.24.24 0 00.245.25.24.24 0 00.244-.25.252.252 0 00-.244-.248z' },
          minimax: { viewBox: '0 0 24 24', path: 'M11.43 3.92a.86.86 0 1 0-1.718 0v14.236a1.999 1.999 0 0 1-3.997 0V9.022a.86.86 0 1 0-1.718 0v3.87a1.999 1.999 0 0 1-3.997 0V11.49a.57.57 0 0 1 1.139 0v1.404a.86.86 0 0 0 1.719 0V9.022a1.999 1.999 0 0 1 3.997 0v9.134a.86.86 0 0 0 1.719 0V3.92a1.998 1.998 0 1 1 3.996 0v11.788a.57.57 0 1 1-1.139 0zm10.572 3.105a2 2 0 0 0-1.999 1.997v7.63a.86.86 0 0 1-1.718 0V3.923a1.999 1.999 0 0 0-3.997 0v16.16a.86.86 0 0 1-1.719 0V18.08a.57.57 0 1 0-1.138 0v2a1.998 1.998 0 0 0 3.996 0V3.92a.86.86 0 0 1 1.719 0v12.73a1.999 1.999 0 0 0 3.996 0V9.023a.86.86 0 1 1 1.72 0v6.686a.57.57 0 0 0 1.138 0V9.022a2 2 0 0 0-1.998-1.997' },
          anthropic: { viewBox: '0 0 24 24', path: 'M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z' },
          google: { viewBox: '0 0 24 24', color: '#4285F4', path: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z' },
          kimi: { viewBox: '0 0 24 24', path: 'M21.765.351C22.998.351 24 1.353 24 2.586S22.998 4.82 21.765 4.82h-1.974c-.15 0-.26-.12-.26-.26V2.586A2.237 2.237 0 0 1 21.765.35M9.41 13.388l8.447-8.377c.16-.16.07-.471-.14-.471h-4.55s-.1.02-.14.06l-9.099 9.029c-.14.14-.35.02-.35-.21V4.81c0-.15-.1-.27-.221-.27H.22c-.12 0-.22.12-.22.27v18.57c0 .15.1.27.22.27h3.137c.12 0 .22-.12.22-.27v-3.79c0-.08.03-.16.08-.21l2.826-2.796c.07-.07.16-.08.241-.03l7.546 5.551a8.9 8.9 0 0 0 4.018 1.493c.12.01.23-.11.23-.27V19.76c0-.14-.08-.25-.19-.26a5.8 5.8 0 0 1-2.355-.942l-6.533-4.73c-.14-.09-.15-.32-.03-.441' },
          opencode: { viewBox: '0 0 24 24', path: 'M22 24H2V0h20zM17 4.8H7v14.4h10z' },
          ...BUNDLED_COMPANY_BRAND_MARKS,
        });
        function ProviderIcon({ group }) {
          const key = providerIconKeyForGroupKey(group.key, group.icon);
          const mark = key ? PROVIDER_MARKS[key] : null;
          return h('span', { className: `pq-provider-icon${mark ? '' : ' pq-provider-icon-fallback'}`, style: mark?.color ? { color: mark.color } : undefined, 'aria-hidden': true }, mark ? h('svg', { viewBox: mark.viewBox, fillRule: mark.fillRule, focusable: false }, ...(mark.paths ?? [mark.path]).map((path, index) => h('path', { key: index, d: path, fill: 'currentColor' }))) : h('span', null, String(group.title || t(group.label)).trim().slice(0, 1).toUpperCase()));
        }
        function providerCompany(row) {
          if (row.reason === 'zai-api-status-only') return 'glm';
          switch (row.kind) {
            case 'openai': case 'codex': return 'openai';
            case 'deepseek': case 'account': return 'deepseek';
            case 'glm-cn': case 'glm-standard-cn': case 'zai-coding-plan': case 'glm-cn-team': case 'zai-coding-plan-team': return 'glm';
            case 'minimax-cn': return 'minimax';
            case 'opencode-go': return 'opencode';
            default: return 'other';
          }
        }
        function kindLabel(row) {
          if (row.metrics.some(metric => metric.type === 'spend') || row.kind === 'openai') return t('kindSpend');
          if (['glm-cn', 'zai-coding-plan', 'glm-cn-team', 'zai-coding-plan-team', 'codex', 'opencode-go', 'minimax-cn'].includes(row.kind)) return t('kindPlan');
          if (row.kind === 'glm-standard-cn') return t('kindBalance');
          return t(row.metrics.some(metric => metric.type === 'balance') || ['deepseek', 'account'].includes(row.kind) ? 'kindBalance' : 'kindOther');
        }
        function statusLabel(row, colorThresholds) {
          if (row.stale) return t('stale');
          if (row.reason === 'zai-api-status-only') return t('zai-api-status-only-short');
          if (row.status !== 'ok') return t(quotaTone(row, colorThresholds) === 'error' ? 'queryError' : 'unavailable');
          return t(quotaTone(row, colorThresholds) === 'error' ? 'exhausted' : quotaTone(row, colorThresholds) === 'warn' ? 'low' : 'healthy');
        }
        function Status({ row, colorThresholds }) {
          return h('span', { className: 'pq-pill' }, h('span', { className: 'pq-dot', 'data-tone': quotaTone(row, colorThresholds), 'aria-hidden': true }), statusLabel(row, colorThresholds));
        }
        function Breakdown({ label, value }) {
          return h('div', { className: 'pq-breakdown' }, h('span', null, label), h('strong', null, value));
        }
        function ResourcePackage({ metric, colorThresholds }) {
          const remaining = Number(metric.remaining);
          const total = Number(metric.total);
          const remainingPercent = total > 0 ? Math.max(0, Math.min(100, remaining / total * 100)) : 0;
          const tone = metric.status === 'active' && total > 0 ? quotaBarTone(remainingPercent, colorThresholds) : null;
          const status = metric.status === 'active' ? 'packageActive' : metric.status === 'expired' ? 'packageExpired' : 'packageUnknown';
          return h('div', { className: 'pq-metric' },
            h('div', { className: 'pq-metric-head' }, h('span', { className: 'pq-metric-label', title: metric.name }, metric.name), h('span', { className: 'pq-pill' }, t(status))),
            h('div', { className: 'pq-breakdown' }, h('span', null, t(metric.status === 'expired' ? 'expiredPackageBalance' : metric.status === 'active' ? 'availableBalance' : 'packageBalance')), h('strong', null, `${number(remaining)} / ${number(total)} ${t(metric.unit)}`)),
            metric.status === 'active' && total > 0 ? h('div', { className: 'pq-track', role: 'progressbar', 'aria-label': `${metric.name} · ${t('availableBalance')}`, 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': remainingPercent }, h('div', { className: 'pq-fill', style: { width: `${remainingPercent}%`, ...(tone ? { background: `var(--dsw-alias-state-${tone}-primary)` } : {}) } })) : null,
            metric.expirationTime ? h('div', { className: 'pq-footnote' }, `${t(/(?:Z|[+-]\d{2}:\d{2})$/i.test(metric.expirationTime) ? 'expires' : 'expiresServerLocal')}: ${metric.expirationTime.replace('T', ' ')}`) : null,
            metric.suitableModel ? h('div', { className: 'pq-footnote' }, `${t('suitableModel')}: ${metric.suitableModel}`) : null,
            metric.suitableScene ? h('div', { className: 'pq-footnote' }, `${t('suitableScene')}: ${metric.suitableScene}`) : null,
            metric.frozen !== undefined ? h(Breakdown, { label: t('frozenBalance'), value: `${number(metric.frozen)} ${t(metric.unit)}` }) : null);
        }
        function Metric({ metric, colorThresholds }) {
          // Package metrics render independently so this component's hooks stay stable.
          const [range, setRange] = React.useState('7d');
          const rangeHelpId = React.useId();
          if (metric.type === 'credits') {
            const credits = codexCreditsPresentation(metric);
            const stateKeys = { unlimited: 'codexCreditsUnlimited', available: 'codexCreditsAvailable', unavailable: 'codexCreditsUnavailable', unknown: 'codexCreditsNotProvided' };
            const value = credits.state === 'balance' ? formatCodexCreditsAmount(credits.amount) : t(stateKeys[credits.state]);
            return h('div', { className: 'pq-metric pq-codex-credits' },
              h('div', { className: 'pq-metric-label' }, t('codexCredits')),
              h('div', { className: credits.state === 'balance' ? 'pq-credits-value' : 'pq-credits-state', title: credits.state === 'balance' ? credits.amount : value, 'aria-live': 'polite', 'aria-atomic': true }, value),
              h('div', { className: 'pq-footnote' }, t('codexCreditsNote')));
          }
          if (metric.type === 'spend') {
            const selected = metric.ranges?.[range] ?? { amount: '0', noRecords: true, breakdown: [] };
            const breakdown = Array.isArray(selected.breakdown) ? selected.breakdown : [];
            return h('div', { className: 'pq-metric' },
              h('div', { className: 'pq-spend-head' },
                h('div', { className: 'pq-metric-label' }, t('apiSpend')),
                h('label', { className: 'pq-spend-range' },
                  h('span', null, t('rangeLabel')),
                  h('select', { className: 'pq-spend-select', value: range, onChange: event => setRange(event.target.value), 'aria-label': t('spendRange'), 'aria-describedby': rangeHelpId },
                    ...['0d', '1d', '7d', '30d'].map(option => h('option', { key: option, value: option }, t(`range${option}`)))))),
              h('div', { className: 'pq-amount', title: `${metric.currency} ${selected.amount}`, 'aria-live': 'polite', 'aria-atomic': true },
                h('span', { className: 'pq-sr-only' }, `${t('rangeAnnouncement')} ${t(`range${range}`)}: `),
                money({ ...metric, amount: selected.amount })),
              h('div', { className: 'pq-scope' }, t('organization')),
              h('div', { className: 'pq-muted', id: rangeHelpId }, t('completeUtcDays')),
              breakdown.length > 0 ? h('div', { className: 'pq-breakdown-list', role: 'list', 'aria-label': t('apiKeyBreakdown') },
                ...breakdown.map(entry => {
                  const label = entry.apiKeyName || (entry.apiKeyId ? `${t('apiKey')} ${entry.apiKeyId}` : t('apiKeyUnattributed'));
                  return h('div', { className: 'pq-breakdown', role: 'listitem', key: entry.apiKeyId ?? 'org' },
                    h('span', { title: entry.apiKeyName ?? entry.apiKeyId ?? '' }, label),
                    h('strong', null, money(entry)));
                })) : null,
              selected.noRecords ? h('div', { className: 'pq-breakdown-list' },
                h('div', { className: 'pq-breakdown', role: 'status' }, h('span', null, t('noRecords')))) : null,
              h('div', { className: 'pq-footnote' }, t('costsLag')));
          }
          if (metric.type === 'balance') return h('div', { className: 'pq-metric' },
            h('div', { className: 'pq-metric-label' }, t(metric.wallet === 'glm-standard' ? 'availableBalance' : metric.wallet === 'bonus' ? 'bonus' : metric.wallet === 'recharge' ? 'recharge' : 'balance')),
            h('div', { className: `pq-amount${Number(metric.amount) <= 0 && metric.wallet !== 'bonus' ? ' pq-error' : ''}`, title: `${metric.currency} ${metric.amount}` }, money(metric)),
            metric.accountBalance !== undefined && Number(metric.accountBalance) !== Number(metric.amount) ? h(Breakdown, { label: t('accountTotal'), value: money({ ...metric, amount: metric.accountBalance }) }) : null,
            metric.toppedUp !== undefined ? h(Breakdown, { label: t('recharge'), value: money({ ...metric, amount: metric.toppedUp }) }) : null,
            metric.recharge !== undefined ? h(Breakdown, { label: t('recharge'), value: money({ ...metric, amount: metric.recharge }) }) : null,
            metric.granted !== undefined ? h(Breakdown, { label: t('bonus'), value: money({ ...metric, amount: metric.granted }) }) : null,
            metric.spent !== undefined ? h(Breakdown, { label: t('spentTotal'), value: money({ ...metric, amount: metric.spent }) }) : null,
            metric.frozen !== undefined ? h(Breakdown, { label: t('frozenBalance'), value: money({ ...metric, amount: metric.frozen }) }) : null);
          const used = Math.min(100, Math.max(0, metric.usedPercent));
          const tone = quotaBarTone(100 - used, colorThresholds);
          return h('div', { className: 'pq-metric' },
            h('div', { className: 'pq-metric-head' }, h('span', { className: 'pq-metric-label' }, `${metric.model ? `${metric.model} · ` : ''}${t(metric.label)}`), h('span', { className: `pq-quota-value${tone ? ` pq-${tone}` : ''}` }, h('small', null, t('left')), `${percent(100 - used)}%`)),
            h('div', { className: 'pq-track', role: 'progressbar', 'aria-label': `${metric.model ? `${metric.model} · ` : ''}${t(metric.label)} · ${t('used')}`, 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': used }, h('div', { className: 'pq-fill', style: { width: `${used}%`, ...(tone ? { background: `var(--dsw-alias-state-${tone}-primary)` } : {}) } })),
            h('div', { className: 'pq-breakdown' }, h('span', null, `${t('used')} ${percent(used)}%`), metric.total !== undefined ? h('strong', null, `${metric.remaining !== undefined ? number(metric.remaining) : '—'} / ${number(metric.total)} ${t(metric.unit)} ${t('left')}`) : null),
            metric.resetsAt ? h(ResetTime, { value: metric.resetsAt }) : null);
        }
        function Row({ row, loading, compact = false, colorThresholds }) {
          return h('article', { className: 'pq-row' },
            !compact ? h('div', { className: 'pq-row-head' }, h('div', { className: 'pq-row-title' }, h('div', { className: 'pq-name' }, providerName(row)), h('span', { className: 'pq-pill' }, kindLabel(row))), h('button', { className: 'pq-button', type: 'button', disabled: loading, onClick: () => load(true, row.id), 'aria-label': `${t('refreshOne')} ${providerName(row)}` }, t('refreshOne'))) : null,
            h('div', { className: 'pq-tags' }, compact ? h('span', { className: 'pq-pill' }, kindLabel(row)) : null, h(Status, { row, colorThresholds }), row.kind === 'openai' ? h('span', { className: 'pq-pill' }, t('organizationShort')) : null),
            row.status !== 'ok' ? h('p', { className: `pq-status${quotaTone(row, colorThresholds) === 'error' ? ' pq-error' : ''}`, role: 'status' }, t(row.reason || statusKey(row))) : null,
            row.stale ? h('p', { className: 'pq-status pq-warn' }, t('staleDetail')) : null,
            row.metrics.length ? h('div', { className: 'pq-metrics' },
              ...row.metrics.filter(metric => metric.type !== 'resource-package').map((metric, index) => h(Metric, { key: `metric-${index}`, metric, colorThresholds })),
              row.metrics.some(metric => metric.type === 'resource-package') ? h('h4', { className: 'pq-package-heading', style: { gridColumn: '1 / -1', margin: 0, fontSize: '0.875rem' }, key: 'package-heading' }, t('resourcePackages')) : null,
              ...row.metrics.filter(metric => metric.type === 'resource-package').map((metric, index) => h(ResourcePackage, { key: `package-${index}`, metric, colorThresholds }))) : null,
            h('div', { className: 'pq-footer' }, h('span', { className: 'pq-muted' }, row.fetchedAt ? `${t('updated')} ${time(row.fetchedAt)}` : t('never')), row.dashboardUrl ? h('a', { className: 'pq-link', href: row.dashboardUrl, target: '_blank', rel: 'noopener noreferrer' }, t(row.reason === 'zai-api-status-only' ? 'zai-api-billing-dashboard' : row.kind === 'zai-coding-plan' ? 'zai-plan-dashboard' : 'dashboard')) : null),
            h('details', { className: 'pq-meta' }, h('summary', null, t('sourceDetails')), h('dl', null,
              h('dt', null, t('route')), h('dd', null, row.id),
              h('dt', null, t('sourceDetails')), h('dd', null, t(row.source)),
              ...row.metrics.filter(metric => metric.type === 'balance').flatMap((metric, index) => [h('dt', { key: `l${index}` }, `${t('exact')} ${metric.currency}`), h('dd', { key: `v${index}` }, metric.amount)]))));
        }
        function QuotaSettings() {
          React.useSyncExternalStore(callback => ctx.locale.subscribe(callback), () => ctx.locale.getSnapshot());
          const [settings, setSettings] = React.useState(null);
          const [draft, setDraft] = React.useState({ greenMin: '', orangeMin: '' });
          const [busy, setBusy] = React.useState(true);
          const [notice, setNotice] = React.useState(null);
          const serviceRef = React.useRef(null);
          React.useEffect(() => {
            let live = true, pending = false, requestController;
            const fail = code => { throw new Error(code); };
            const publicErrors = ['invalid-thresholds', 'settings-unavailable', 'settings-conflict', 'save-failed', 'forbidden'];
            const decode = data => {
              if (!data || !validColorThresholds(data.colorThresholds) || typeof data.writable !== 'boolean' || typeof data.csrf !== 'string' || !data.csrf || data.csrf.length > 4096) fail('settings-unavailable');
              return data;
            };
            let current = null;
            const run = async candidate => {
              if (!live || !active || pending) return;
              pending = true;
              requestController = new AbortController();
              const signal = AbortSignal.any([requestController.signal, AbortSignal.timeout(20000)]);
              setBusy(true);
              setNotice(null);
              const fetchSettings = async payload => {
                const response = await fetch(new URL('api/provider-quota-settings', document.baseURI), {
                  method: payload ? 'POST' : 'GET', credentials: 'same-origin', cache: 'no-store', redirect: 'error', signal,
                  headers: payload ? { 'Content-Type': 'application/json', 'X-Quota-Settings-CSRF': csrfRef.current } : { Accept: 'application/json' },
                  ...(payload ? { body: JSON.stringify(payload) } : {}),
                });
                const data = await response.json();
                if (!response.ok) fail(publicErrors.includes(data?.error) ? data.error : candidate ? 'save-failed' : 'settings-unavailable');
                return decode(data);
              };
              try {
                let confirmed;
                if (candidate) {
                  if (!validColorThresholds(candidate)) fail('invalid-thresholds');
                  if (!current?.writable || !current.csrf) fail('forbidden');
                  const written = await fetchSettings(candidate);
                  if (written.saved !== true) fail('save-failed');
                  // A write can recompose this plugin. Never claim success merely
                  // because a POST was dispatched: verify the persisted readback.
                  confirmed = await fetchSettings();
                  if (confirmed.colorThresholds.greenMin !== candidate.greenMin || confirmed.colorThresholds.orangeMin !== candidate.orangeMin) fail('settings-conflict');
                } else confirmed = await fetchSettings();
                if (!live || !active || signal.aborted) return;
                current = confirmed;
                setSettings(confirmed);
                setDraft({ greenMin: String(confirmed.colorThresholds.greenMin), orangeMin: String(confirmed.colorThresholds.orangeMin) });
                setNotice(candidate ? 'saved' : null);
                if (snapshot.data) publish({ data: { ...snapshot.data, colorThresholds: confirmed.colorThresholds } });
              } catch (error) {
                if (live && active && !requestController.signal.aborted) setNotice(publicErrors.includes(error.message) ? error.message : candidate ? 'save-failed' : 'settings-unavailable');
              } finally {
                pending = false;
                if (live && active) setBusy(false);
              }
            };
            serviceRef.current = { run };
            run();
            return () => { live = false; requestController?.abort(); if (serviceRef.current?.run === run) serviceRef.current = null; };
          }, []);
          const candidate = parseThresholdDraft(draft.greenMin, draft.orangeMin);
          const editable = Boolean(settings?.writable) && !busy;
          const change = (key, value) => { setDraft(previous => ({ ...previous, [key]: value })); setNotice(null); };
          const noticeText = notice === 'forbidden' ? 'settingsForbidden' : notice;
          return h('section', { className: 'pq-threshold-panel', 'aria-label': t('settingsTitle') }, h('style', null, css),
            h('header', { className: 'pq-top' }, h('div', null, h('h3', null, t('settingsTitle')), h('p', { className: 'pq-muted' }, t('settingsIntro')))),
            !settings && busy ? h('p', { role: 'status', className: 'pq-muted' }, t('settingsLoading')) : null,
            settings && !settings.writable ? h('p', { className: 'pq-status pq-warn' }, t('readOnly')) : null,
            h('form', { className: 'pq-settings-form', onSubmit: event => {
              event.preventDefault();
              if (!editable) return;
              if (!candidate) { setNotice('invalid-thresholds'); return; }
              serviceRef.current?.run(candidate);
            } },
              h('label', { className: 'pq-settings-label', htmlFor: 'pq-green-min' }, t('greenMin')),
              h('input', { id: 'pq-green-min', className: 'pq-settings-input', type: 'number', min: 1, max: 100, step: 1, required: true, inputMode: 'numeric', value: draft.greenMin, disabled: !editable, onChange: event => change('greenMin', event.target.value), 'aria-describedby': 'pq-threshold-rules' }),
              h('label', { className: 'pq-settings-label', htmlFor: 'pq-orange-min' }, t('orangeMin')),
              h('input', { id: 'pq-orange-min', className: 'pq-settings-input', type: 'number', min: 0, max: 99, step: 1, required: true, inputMode: 'numeric', value: draft.orangeMin, disabled: !editable, onChange: event => change('orangeMin', event.target.value), 'aria-describedby': 'pq-threshold-rules' }),
              h('p', { id: 'pq-threshold-rules', className: 'pq-note' }, t('thresholdRules')),
              !candidate && settings ? h('p', { className: 'pq-status pq-error' }, t('invalid-thresholds')) : null,
              h('div', { className: 'pq-settings-actions' },
                h('button', { type: 'submit', className: 'pq-button', disabled: !editable || !candidate }, t(busy ? 'loading' : 'save')),
                h('button', { type: 'button', className: 'pq-button', disabled: !editable, onClick: () => {
                  setDraft({ greenMin: String(DEFAULT_COLOR_THRESHOLDS.greenMin), orangeMin: String(DEFAULT_COLOR_THRESHOLDS.orangeMin) });
                  setNotice(null);
                } }, t('defaults')),
                h('button', { type: 'button', className: 'pq-button', disabled: busy, onClick: () => serviceRef.current?.run() }, t('settingsRefresh')))),
            notice ? h('p', { className: `pq-status ${notice === 'saved' ? 'pq-success' : 'pq-error'}`, role: notice === 'saved' ? 'status' : 'alert' }, t(noticeText)) : null,
            h('p', { className: 'pq-note' }, t('defaultsNote')));
        }
        function OpenAIExtraSettings({ routes }) {
          React.useSyncExternalStore(callback => ctx.locale.subscribe(callback), () => ctx.locale.getSnapshot());
          const [data, setData] = React.useState(null);
          const [keyDraft, setKeyDraft] = React.useState('');
          const [busy, setBusy] = React.useState(true);
          const [notice, setNotice] = React.useState(null);
          const controllerRef = React.useRef(null), csrfRef = React.useRef(null), saveRef = React.useRef(null);
          React.useEffect(() => {
            let live = true, pending = false;
            const fail = code => { throw new Error(code); };
            const errors = ['invalid-admin-key', 'admin-credential-error', 'forbidden', 'save-failed'];
            const read = async payload => {
              if (!live || pending) return;
              if (payload && !csrfRef.current) { setNotice('adminFileError'); return; }
              pending = true;
              const controller = new AbortController(); controllerRef.current = controller;
              const signal = AbortSignal.any([controller.signal, AbortSignal.timeout(20000)]);
              setBusy(true); setNotice(null);
              try {
                const response = await fetch(new URL('api/provider-quota-settings', document.baseURI), {
                  method: payload ? 'POST' : 'GET', credentials: 'same-origin', cache: 'no-store', redirect: 'error', signal,
                  headers: payload ? { 'Content-Type': 'application/json', 'X-Quota-Settings-CSRF': csrfRef.current } : { Accept: 'application/json' },
                  ...(payload ? { body: JSON.stringify(payload) } : {}),
                });
                const body = await response.json();
                if (!response.ok) fail(errors.includes(body?.error) ? body.error : payload ? 'save-failed' : 'admin-credential-error');
                if (!body || !body.adminKey || typeof body.adminKey.configured !== 'boolean' || ![null, 'credential-store', 'credential-ref'].includes(body.adminKey.source) || body.adminKey.error !== undefined && !['invalid-admin-key', 'admin-credential-error'].includes(body.adminKey.error)) fail('admin-credential-error');
                if (!live || signal.aborted) return;
                if (payload && (body.saved !== true || body.savedItem !== 'adminKey' || !body.adminKey.configured || body.adminKey.source !== 'credential-store')) fail('save-failed');
                csrfRef.current = body.csrf;
                setData(body); setKeyDraft(''); setNotice(payload ? 'adminSaved' : null);
              } catch (error) {
                if (live && !controller.signal.aborted) setNotice(errors.includes(error.message) ? error.message : payload ? 'adminSaveFailed' : 'adminFileError');
              } finally { pending = false; if (live) setBusy(false); }
            };
            saveRef.current = secret => read({ action: 'saveAdminKey', adminKey: secret });
            read();
            const refresh = () => { if (document.visibilityState === 'visible') read(); };
            document.addEventListener('visibilitychange', refresh);
            return () => { live = false; controllerRef.current?.abort(); csrfRef.current = null; saveRef.current = null; document.removeEventListener('visibilitychange', refresh); };
          }, []);
          const hasKeyInput = keyDraft.trim().length > 0;
          const adminKeyConfigured = data?.adminKey?.configured === true;
          const sourceKey = ['credential-store', 'credential-ref'].includes(data?.adminKey?.source) ? 'adminSourceCredential' : 'adminMissing';
          return h('section', { className: 'pq-admin-panel', 'aria-label': t('adminTitle') }, h('style', null, css),
            h('h3', null, t('adminTitle')),
            h('p', { className: 'pq-muted' }, t('adminIntro')),
            h('p', { className: 'pq-muted pq-admin-key-help' }, t('adminHowToGetKey'), ' ', h('a', { className: 'pq-link', href: 'https://platform.openai.com/settings/organization/admin-keys', target: '_blank', rel: 'noopener noreferrer' }, t('adminGetKeyLink'))),
            h('div', { className: 'pq-tags', 'aria-label': t('route') }, routes.map(row => h('span', { key: row.id, className: 'pq-pill pq-admin-route' }, providerName(row), ' · ', row.id))),
            data || busy ? h('p', { className: `pq-note pq-admin-key-status${adminKeyConfigured ? ' pq-admin-key-configured' : ''}`, role: 'status' }, h('span', { className: 'pq-dot', ...(adminKeyConfigured ? { 'data-tone': 'success' } : {}), 'aria-hidden': true }), t(!data ? 'adminChecking' : adminKeyConfigured ? 'adminConfigured' : 'adminMissing')) : null,
            data?.adminKey?.error ? h('p', { className: 'pq-status pq-error', role: 'alert' }, t(data.adminKey.error)) : null,
            data?.adminKey?.source ? h('p', { className: 'pq-muted' }, t(sourceKey)) : null,
            h('form', { className: 'pq-admin-form', autoComplete: 'off', onSubmit: event => {
              event.preventDefault();
              if (!hasKeyInput || busy) return;
              const secret = keyDraft.trim();
              setKeyDraft('');
              // The secret lives only in this handler, one POST body and Host setter.
              saveRef.current?.(secret);
            } },
              h('label', { className: 'pq-settings-label', htmlFor: 'pq-openai-admin-key' }, t('adminKeyLabel')),
              h('input', { id: 'pq-openai-admin-key', className: 'pq-settings-input', type: 'password', value: keyDraft, onChange: event => setKeyDraft(event.target.value), autoComplete: 'new-password', autoCapitalize: 'none', spellCheck: false, maxLength: 8192, placeholder: t('adminKeyPlaceholder'), disabled: busy }),
              h('div', { className: 'pq-settings-actions' }, h('button', { type: 'submit', className: 'pq-button', disabled: busy || !hasKeyInput }, t(busy ? 'loading' : 'adminSave')))),
            notice ? h('p', { className: `pq-status ${notice === 'adminSaved' ? 'pq-success' : 'pq-error'}`, role: notice === 'adminSaved' ? 'status' : 'alert' }, t(notice)) : null,
            h('p', { className: 'pq-note' }, t('adminUseOfficial')));
        }
        // GLM Team Plan: one draft entry per personal Coding Plan kind present on
        // the page. An enabled entry with both IDs empty asks the server for the
        // account's default team project; the Host never echoes the IDs back
        // into quota rows, only into this settings form.
        const GLM_TEAM_PLAN_KINDS = Object.freeze(['glm-cn', 'zai-coding-plan']);
        const emptyTeamPlanDraft = () => ({ enabled: false, organizationId: '', projectId: '' });
        function validTeamPlanId(value) { return value.length <= 128 && !/[^\x21-\x7e]/.test(value); }
        // Normalized Host payload for the draft, or null when it is invalid.
        function teamPlanPayload(draft) {
          const payload = {};
          for (const kind of GLM_TEAM_PLAN_KINDS) {
            const entry = draft[kind] ?? emptyTeamPlanDraft();
            if (!entry.enabled) continue;
            const organizationId = entry.organizationId.trim(), projectId = entry.projectId.trim();
            if (Boolean(organizationId) !== Boolean(projectId) || !validTeamPlanId(organizationId) || !validTeamPlanId(projectId)) return null;
            payload[kind] = { organizationId, projectId };
          }
          return payload;
        }
        function sameTeamPlans(a, b) {
          const keys = Object.keys(a).sort();
          return JSON.stringify(keys) === JSON.stringify(Object.keys(b).sort()) && keys.every(kind => a[kind].organizationId === b[kind].organizationId && a[kind].projectId === b[kind].projectId);
        }
        function GlmTeamPlanSettings({ routes }) {
          React.useSyncExternalStore(callback => ctx.locale.subscribe(callback), () => ctx.locale.getSnapshot());
          const kindKey = GLM_TEAM_PLAN_KINDS.filter(kind => routes.some(row => row.kind === kind)).join(' ');
          const kinds = kindKey ? kindKey.split(' ') : [];
          const [data, setData] = React.useState(null);
          const [draft, setDraft] = React.useState({});
          const [busy, setBusy] = React.useState(true);
          const [notice, setNotice] = React.useState(null);
          const controllerRef = React.useRef(null), csrfRef = React.useRef(null), saveRef = React.useRef(null);
          const draftFrom = plans => Object.fromEntries(kinds.map(kind => [kind, { enabled: Boolean(plans?.[kind]), organizationId: plans?.[kind]?.organizationId ?? '', projectId: plans?.[kind]?.projectId ?? '' }]));
          React.useEffect(() => {
            let live = true, pending = false;
            const fail = code => { throw new Error(code); };
            const errors = ['invalid-team-plan', 'settings-unavailable', 'settings-conflict', 'save-failed', 'forbidden'];
            const read = async payload => {
              if (!live || pending) return;
              if (payload && !csrfRef.current) { setNotice('glmTeamPlanError'); return; }
              pending = true;
              const controller = new AbortController(); controllerRef.current = controller;
              const signal = AbortSignal.any([controller.signal, AbortSignal.timeout(20000)]);
              setBusy(true); setNotice(null);
              try {
                const response = await fetch(new URL('api/provider-quota-settings', document.baseURI), {
                  method: payload ? 'POST' : 'GET', credentials: 'same-origin', cache: 'no-store', redirect: 'error', signal,
                  headers: payload ? { 'Content-Type': 'application/json', 'X-Quota-Settings-CSRF': csrfRef.current } : { Accept: 'application/json' },
                  ...(payload ? { body: JSON.stringify(payload) } : {}),
                });
                const body = await response.json();
                if (!response.ok) fail(errors.includes(body?.error) ? body.error : payload ? 'save-failed' : 'settings-unavailable');
                if (!body || !body.glmTeamPlans || typeof body.glmTeamPlans !== 'object' || Array.isArray(body.glmTeamPlans) || typeof body.csrf !== 'string' || !body.csrf) fail('settings-unavailable');
                if (!live || signal.aborted) return;
                // Saving can recompose this plugin; trust only the persisted readback.
                if (payload && (body.saved !== true || body.savedItem !== 'glmTeamPlans' || !sameTeamPlans(body.glmTeamPlans, payload.glmTeamPlans))) fail('settings-conflict');
                csrfRef.current = body.csrf;
                setData(body); setDraft(draftFrom(body.glmTeamPlans)); setNotice(payload ? 'glmTeamPlanSaved' : null);
              } catch (error) {
                if (live && !controller.signal.aborted) setNotice(errors.includes(error.message) ? error.message : payload ? 'save-failed' : 'glmTeamPlanError');
              } finally { pending = false; if (live) setBusy(false); }
            };
            saveRef.current = payload => read(payload);
            read();
            const refresh = () => { if (document.visibilityState === 'visible') read(); };
            document.addEventListener('visibilitychange', refresh);
            return () => { live = false; controllerRef.current?.abort(); csrfRef.current = null; saveRef.current = null; document.removeEventListener('visibilitychange', refresh); };
          }, [kindKey]);
          const payload = teamPlanPayload(draft);
          const saved = data ? teamPlanPayload(draftFrom(data.glmTeamPlans)) : null;
          const editable = Boolean(data?.writable) && !busy;
          const enabledAny = Boolean(payload && Object.keys(payload).length);
          return h('section', { className: 'pq-admin-panel', 'aria-label': t('glmTeamPlanTitle') }, h('style', null, css),
            h('h3', null, t('glmTeamPlanTitle')),
            h('p', { className: 'pq-muted' }, t('glmTeamPlanIntro')),
            h('div', { className: 'pq-tags', 'aria-label': t('route') }, routes.map(row => h('span', { key: row.id, className: 'pq-pill pq-admin-route' }, providerName(row), ' · ', row.id))),
            data || busy ? h('p', { className: `pq-note pq-admin-key-status${enabledAny ? ' pq-admin-key-configured' : ''}`, role: 'status' }, h('span', { className: 'pq-dot', ...(enabledAny ? { 'data-tone': 'success' } : {}), 'aria-hidden': true }), t(!data ? 'glmTeamPlanChecking' : enabledAny ? 'glmTeamPlanOn' : 'glmTeamPlanOff')) : null,
            data && !data.writable ? h('p', { className: 'pq-status pq-warn' }, t('readOnly')) : null,
            h('form', { className: 'pq-admin-form', autoComplete: 'off', onSubmit: event => {
              event.preventDefault();
              if (!payload || !editable || !dirty()) return;
              saveRef.current?.({ action: 'saveGlmTeamPlans', glmTeamPlans: payload });
            } },
              ...kinds.map(kind => {
                const entry = draft[kind] ?? emptyTeamPlanDraft();
                const change = (key, value) => { setDraft(previous => ({ ...previous, [kind]: { ...(previous[kind] ?? emptyTeamPlanDraft()), [key]: value } })); setNotice(null); };
                return h('fieldset', { key: kind, className: 'pq-team-plan-kind' },
                  h('legend', null, t(kind === 'glm-cn' ? 'cnPlan' : 'zaiPlan'), ' · ', t('teamPlan')),
                  h('label', { className: 'pq-team-plan-check' }, h('input', { type: 'checkbox', checked: entry.enabled, disabled: !editable, onChange: event => change('enabled', event.target.checked) }), t('glmTeamPlanEnable')),
                  h('label', { className: 'pq-settings-label', htmlFor: `pq-team-org-${kind}` }, t('glmTeamPlanOrg')),
                  h('input', { id: `pq-team-org-${kind}`, className: 'pq-settings-input', type: 'text', value: entry.organizationId, placeholder: t('glmTeamPlanOrgPlaceholder'), disabled: !editable || !entry.enabled, onChange: event => change('organizationId', event.target.value), autoComplete: 'off', autoCapitalize: 'none', spellCheck: false, maxLength: 128 }),
                  h('label', { className: 'pq-settings-label', htmlFor: `pq-team-project-${kind}` }, t('glmTeamPlanProject')),
                  h('input', { id: `pq-team-project-${kind}`, className: 'pq-settings-input', type: 'text', value: entry.projectId, placeholder: t('glmTeamPlanProjectPlaceholder'), disabled: !editable || !entry.enabled, onChange: event => change('projectId', event.target.value), autoComplete: 'off', autoCapitalize: 'none', spellCheck: false, maxLength: 128 }),
                  h('p', { className: 'pq-note' }, t('glmTeamPlanHint')));
              }),
              data && !payload ? h('p', { className: 'pq-status pq-error', role: 'alert' }, t('invalid-team-plan')) : null,
              h('div', { className: 'pq-settings-actions' },
                h('button', { type: 'submit', className: 'pq-button', disabled: !editable || !payload || !dirty() }, t(busy ? 'loading' : 'glmTeamPlanSave')))),
            notice ? h('p', { className: `pq-status ${notice === 'glmTeamPlanSaved' ? 'pq-success' : 'pq-error'}`, role: notice === 'glmTeamPlanSaved' ? 'status' : 'alert' }, t(notice)) : null);
          function dirty() { return !saved || !payload || !sameTeamPlans(saved, payload); }
        }
        function safeCodexOfficialLink(value) {
          if (typeof value !== 'string' || value.length > 16384 || value.trim() !== value || /[\u0000-\u0020\u007f]/.test(value)) return null;
          try {
            const url = new URL(value);
            if (url.protocol !== 'https:' || url.hostname !== 'auth.openai.com' || url.username || url.password || url.port || url.hash) return null;
            if (url.pathname === '/codex/device') return url.search ? null : url.href;
            if (url.pathname !== '/oauth/authorize') return null;
            const publicKeys = ['response_type', 'client_id', 'redirect_uri', 'scope', 'code_challenge', 'code_challenge_method', 'state', 'id_token_add_organizations', 'codex_cli_simplified_flow', 'originator'];
            if ([...url.searchParams.keys()].some(key => !publicKeys.includes(key) || url.searchParams.getAll(key).length !== 1)) return null;
            if (url.searchParams.getAll('redirect_uri').length !== 1 || url.searchParams.get('redirect_uri') !== 'http://localhost:1455/auth/callback') return null;
            if (url.searchParams.getAll('state').length !== 1 || !url.searchParams.get('state')) return null;
            return url.href;
          } catch { return null; }
        }
        function validCodexCallback(value) {
          if (typeof value !== 'string' || value.length > 8192 || /[\u0000-\u001f\u007f]/.test(value)) return false;
          try {
            const url = new URL(value.trim());
            return url.protocol === 'http:' && url.hostname === 'localhost' && url.port === '1455' && url.pathname === '/auth/callback' && !url.username && !url.password && !url.hash &&
              ['code', 'state'].every(key => url.searchParams.getAll(key).length === 1 && Boolean(url.searchParams.get(key)));
          } catch { return false; }
        }
        function codexPhaseKey(value, active) {
          if (['succeeded', 'success', 'completed', 'authorized'].includes(value)) return 'succeeded';
          if (['cancelled', 'canceled'].includes(value)) return 'cancelled';
          if (value === 'expired') return 'expired';
          if (['failed', 'failure', 'error'].includes(value)) return 'failed';
          if (['starting', 'initializing'].includes(value)) return 'starting';
          return active ? 'pending' : 'idle';
        }
        function codexFailureKey(value) {
          if (['csrf', 'csrf-invalid', 'invalid-csrf', 'csrf-expired', 'forbidden'].includes(value)) return 'csrf';
          if (value === 'flow-unavailable') return 'noFlow';
          if (value === 'route-missing') return 'missingRoute';
          if (value === 'api-key-override') return 'override';
          if (value === 'endpoint-override') return 'endpoint';
          if (value === 'busy') return 'otherLogin';
          if (value === 'auth-failed') return 'authFailed';
          if (value === 'not-committed') return 'notCommitted';
          if (value === 'unsupported-prompt') return 'unsupportedPrompt';
          if (value === 'unsafe-auth-link') return 'unsafeLink';
          if (['conflict', 'attempt-mismatch', 'attempt-not-found', 'prompt-mismatch', 'not-active', 'stale-attempt', 'stale-prompt'].includes(value)) return 'conflict';
          if (['timeout', 'expired'].includes(value)) return 'timeout';
          if (['invalid-request', 'invalid-response', 'invalid-mode', 'invalid-callback'].includes(value)) return 'invalid';
          return 'serviceError';
        }
        function validCodexSnapshot(data) {
          if (!data || typeof data !== 'object' || Array.isArray(data)) return false;
          const keys = ['flowAvailable', 'routeConfigured', 'apiKeyOverride', 'endpointSupported', 'credentialConfigured', 'credentialKind', 'otherLoginInFlight', 'active', 'csrf', 'phase', 'failure', 'attempt'];
          if (Object.keys(data).some(key => !keys.includes(key))) return false;
          if (!['flowAvailable', 'routeConfigured', 'apiKeyOverride', 'endpointSupported', 'credentialConfigured', 'otherLoginInFlight', 'active'].every(key => typeof data[key] === 'boolean')) return false;
          if (!['grant', 'api-key', null].includes(data.credentialKind) || typeof data.csrf !== 'string' || !/^[A-Za-z0-9_-]{43}$/.test(data.csrf) || !['idle', 'starting', 'pending', 'succeeded', 'failed', 'cancelled', 'expired'].includes(data.phase)) return false;
          if (data.failure != null && !['flow-unavailable', 'route-missing', 'api-key-override', 'endpoint-override', 'busy', 'auth-failed', 'not-committed', 'unsupported-prompt', 'unsafe-auth-link', 'timeout', 'expired', 'service-unavailable', 'conflict'].includes(data.failure)) return false;
          if (!data.active) return data.attempt === null;
          const attempt = data.attempt;
          const id = value => typeof value === 'string' && /^[A-Za-z0-9_-]{16,128}$/.test(value);
          if (!attempt || typeof attempt !== 'object' || Array.isArray(attempt) || Object.keys(attempt).some(key => !['id', 'mode', 'expiresAt', 'authUrl', 'deviceCode', 'pending'].includes(key))) return false;
          if (!id(attempt.id) || !['browser', 'device_code'].includes(attempt.mode) || !Number.isSafeInteger(attempt.expiresAt) || attempt.expiresAt <= 0) return false;
          if (attempt.authUrl != null && !safeCodexOfficialLink(attempt.authUrl)) return false;
          if (attempt.deviceCode != null && (attempt.mode !== 'device_code' || typeof attempt.deviceCode !== 'string' || !/^[A-Za-z0-9-]{1,64}$/.test(attempt.deviceCode))) return false;
          const pending = attempt.pending;
          return pending == null || (attempt.mode === 'browser' && typeof pending === 'object' && !Array.isArray(pending) && Object.keys(pending).every(key => ['id', 'kind'].includes(key)) && pending.kind === 'callback' && id(pending.id));
        }
        function CodexAuthorizationPanel() {
          React.useSyncExternalStore(callback => ctx.locale.subscribe(callback), () => ctx.locale.getSnapshot());
          const [state, setState] = React.useState({ data: null, busy: false, posting: false, error: null });
          const [callback, setCallback] = React.useState('');
          const serviceRef = React.useRef(null);
          React.useEffect(() => {
            let live = true, pending = false, timer, controller, current = null;
            const update = value => { if (live) setState(previous => ({ ...previous, ...value })); };
            const clearTimer = () => { window.clearTimeout(timer); timer = undefined; };
            const schedule = () => {
              clearTimer();
              if (live && document.visibilityState === 'visible') timer = window.setTimeout(() => request(), current?.active ? 1000 : 15000);
            };
            const request = async payload => {
              if (!live || pending || (!payload && document.visibilityState !== 'visible')) return;
              if (payload && !current?.csrf) { update({ error: 'csrf' }); return; }
              clearTimer();
              pending = true;
              controller = new AbortController();
              const signal = AbortSignal.any([controller.signal, AbortSignal.timeout(20000)]);
              update({ busy: true, posting: Boolean(payload), error: null });
              try {
                const url = new URL(payload ? 'api/provider-quota-codex-oauth/action' : 'api/provider-quota-codex-oauth', document.baseURI);
                const response = await fetch(url, {
                  method: payload ? 'POST' : 'GET', credentials: 'same-origin', cache: 'no-store', redirect: 'error', signal,
                  headers: payload ? { 'Content-Type': 'application/json', 'X-Quota-Codex-CSRF': current.csrf } : { Accept: 'application/json' },
                  ...(payload ? { body: JSON.stringify(payload) } : {}),
                });
                if (!response.ok) {
                  let failure;
                  try { failure = (await response.json())?.error; } catch { /* Error bodies may be empty or non-JSON. */ }
                  update({ error: response.status === 404 ? 'pluginUnavailable' : codexFailureKey(failure) });
                  return;
                }
                const data = await response.json();
                if (!validCodexSnapshot(data)) throw new Error('local-shape');
                current = data;
                update({ data, error: null });
              } catch {
                if (live && !controller.signal.aborted) update({ error: signal.aborted ? 'timeout' : 'serviceError' });
              } finally {
                pending = false;
                update({ busy: false, posting: false });
                schedule();
              }
            };
            const visible = () => {
              clearTimer();
              if (document.visibilityState === 'visible') request();
            };
            serviceRef.current = { request };
            document.addEventListener('visibilitychange', visible);
            request();
            return () => {
              live = false;
              clearTimer();
              controller?.abort();
              document.removeEventListener('visibilitychange', visible);
              if (serviceRef.current?.request === request) serviceRef.current = null;
            };
          }, []);
          const data = state.data;
          const authorizationComplete = data?.credentialConfigured === true && data.credentialKind === 'grant';
          const credentialMessage = authorizationComplete ? 'saved' : data?.credentialConfigured ? 'existingKey' : 'noCredential';
          const attempt = data?.active ? data.attempt : null;
          const prompt = attempt?.pending?.kind === 'callback' && typeof attempt.pending.id === 'string' ? attempt.pending : null;
          React.useEffect(() => { setCallback(''); }, [attempt?.id, prompt?.id]);
          const blocked = !data || !data.flowAvailable || !data.routeConfigured || data.apiKeyOverride || !data.endpointSupported || data.otherLoginInFlight === true;
          const canStart = !blocked && !state.busy && !data.active && data.phase !== 'starting';
          const canAct = !state.busy && Boolean(data?.csrf);
          const authUrl = safeCodexOfficialLink(attempt?.authUrl);
          const code = attempt?.mode === 'device_code' && typeof attempt.deviceCode === 'string' && /^[A-Za-z0-9-]{1,64}$/.test(attempt.deviceCode) ? attempt.deviceCode : null;
          const request = payload => serviceRef.current?.request(payload);
          const expires = Number.isFinite(attempt?.expiresAt) && attempt.expiresAt > 0 ? formatQuotaDate(attempt.expiresAt) : null;
          const messages = data ? [
            !data.routeConfigured ? 'missingRoute' : null,
            data.apiKeyOverride ? 'override' : null,
            !data.endpointSupported ? 'endpoint' : null,
            !data.flowAvailable ? 'noFlow' : null,
            data.otherLoginInFlight === true ? 'otherLogin' : null,
          ].filter(Boolean) : [];
          return h('section', { className: 'pq-codex-panel', 'aria-label': codexT('title') }, h('style', null, codexCss),
            h('header', null, h('h4', null, codexT('title')), h('p', { className: 'pq-codex-subtitle' }, codexT('subtitle'))),
            h('p', { className: 'pq-codex-note' }, codexT('privacy')),
            h('div', { className: 'pq-codex-card', 'aria-busy': state.busy },
              h('p', { className: 'pq-codex-status', role: 'status', 'aria-live': 'polite' }, data ? codexT(codexPhaseKey(data.phase, data.active)) : codexT('loading')),
              data ? h('p', { className: 'pq-codex-auth-status', 'data-tone': authorizationComplete ? 'success' : 'idle', role: 'status', 'aria-live': 'polite' }, codexT(credentialMessage)) : null,
              ...messages.map(key => h('p', { key, className: 'pq-codex-block' }, codexT(key))),
              state.error ? h('p', { className: 'pq-codex-error', role: 'alert' }, codexT(state.error)) : null,
              data?.failure ? h('p', { className: 'pq-codex-error', role: 'status' }, codexT(codexFailureKey(data.failure))) : null,
              h('div', { className: 'pq-codex-actions' },
                h('button', { type: 'button', className: 'pq-codex-button pq-codex-primary', disabled: !canStart, onClick: () => request({ action: 'start', mode: 'browser' }) }, codexT('browser')),
                h('button', { type: 'button', className: 'pq-codex-button', disabled: !canStart, onClick: () => request({ action: 'start', mode: 'device_code' }) }, codexT('device')),
                h('button', { type: 'button', className: 'pq-codex-button', disabled: state.busy, onClick: () => request() }, codexT(state.busy ? 'busy' : 'refresh'))),
              attempt ? h('div', null,
                h('div', { className: 'pq-codex-actions' }, authUrl ? h('a', { href: authUrl, className: 'pq-codex-button pq-codex-primary', target: '_blank', rel: 'noopener noreferrer', referrerPolicy: 'no-referrer' }, codexT('openOfficial')) : h('p', { className: 'pq-codex-note' }, codexT(attempt.authUrl ? 'unsafeLink' : 'linkMissing')),
                  h('button', { type: 'button', className: 'pq-codex-button', disabled: !canAct, onClick: () => request({ action: 'cancel', attemptId: attempt.id }) }, codexT('cancel'))),
                code ? h('div', null, h('div', { className: 'pq-codex-code-label' }, codexT('deviceCode')), h('code', { className: 'pq-codex-code', 'aria-label': codexT('deviceCode') }, code)) : null,
                h('p', { className: 'pq-codex-note' }, codexT('codeWarning')),
                expires ? h('p', { className: 'pq-codex-note' }, `${codexT('expires')} ${expires}`) : null,
                prompt ? h('details', { className: 'pq-codex-manual', key: `${attempt.id}:${prompt.id}` },
                  h('summary', null, codexT('manual')),
                  h('p', { className: 'pq-codex-note' }, codexT('manualHelp')),
                  h('form', { autoComplete: 'off', onSubmit: event => {
                    event.preventDefault();
                    if (!canAct || !callback.trim()) return;
                    const value = callback.trim();
                    setCallback('');
                    if (!validCodexCallback(value)) { setState(previous => ({ ...previous, error: 'invalid' })); return; }
                    request({ action: 'respond', attemptId: attempt.id, promptId: prompt.id, value });
                  } }, h('label', { className: 'pq-codex-label', htmlFor: 'pq-codex-callback-input' }, codexT('callback')),
                    h('input', { id: 'pq-codex-callback-input', className: 'pq-codex-input', type: 'password', value: callback, onChange: event => setCallback(event.target.value), autoComplete: 'off', autoCapitalize: 'none', spellCheck: false, maxLength: 8192, placeholder: codexT('callbackHint'), disabled: state.posting || !data?.csrf }),
                    h('div', { className: 'pq-codex-actions' }, h('button', { type: 'submit', className: 'pq-codex-button', disabled: !canAct || !callback.trim() }, codexT('submit'))))) : null) : null),
            h('p', { className: 'pq-codex-note' }, codexT('hidden')));
        }
        function createProviderManager(context, { readRouteHosts = async () => null, readCompanyRules = async () => null, refreshCompanyRules = async () => null } = {}) {
          const schema = context.settingsSchema;
          let routeHostController = null;
          let rulesController = null;
          let rulesGeneration = 0;
          const routeIdentity = entry => JSON.stringify([entry.settingsNs, entry.settingsPath, entry.provider]);
          const validatedRouteHosts = outcome => {
            if (outcome.status !== 'fulfilled' || !Array.isArray(outcome.value?.routes) || outcome.value.routes.length > 2000) return null;
            const hosts = new Map();
            for (const route of outcome.value.routes) {
              if (!route || typeof route.provider !== 'string' || !route.provider || route.provider.length > 256 || typeof route.settingsNs !== 'string' || !route.settingsNs || route.settingsNs.length > 256 || !Array.isArray(route.settingsPath) || route.settingsPath.length > 32 || route.settingsPath.some(key => typeof key !== 'string' || !key || key.length > 256)) return null;
              if (route.hostname !== null) {
                if (typeof route.hostname !== 'string' || !route.hostname || route.hostname.length > 253) return null;
                try {
                  const url = new URL(`https://${route.hostname}/`);
                  if (url.hostname !== route.hostname || url.username || url.password || url.port || url.pathname !== '/' || url.search || url.hash) return null;
                } catch { return null; }
              }
              const key = routeIdentity(route);
              if (hosts.has(key)) return null;
              const routeHost = { routeHostname: route.hostname };
              const groupingHost = modelProviderCatalogGroupingHost({ ...routeHost, groupingHostname: route.groupingHostname, groupingSource: route.groupingSource });
              if (groupingHost) {
                routeHost.groupingHostname = groupingHost;
                routeHost.groupingSource = 'model-catalog';
              }
              hosts.set(key, routeHost);
            }
            return hosts;
          };
          const describeFace = context.configForms.describe();
          const listeners = new Set();
          let generation = 0;
          let disposed = false;
          let state = { status: 'idle', error: false, errorStage: null, errorReason: null, errorCode: null, remoteDiagnostics: null, credentialError: false, routeHostsError: false, companyRules: null, companyRulesError: false, companyRulesRefreshing: false, companyRulesRefreshResult: null, writable: false, entries: [], namespaces: new Map(), registered: [] };
          const publish = update => {
            state = { ...state, ...update };
            for (const listener of listeners) listener();
          };
          const safeRemoteErrorCodes = new Set([
            'gateway/ambiguous-endpoint', 'gateway/arguments-invalid', 'gateway/bad-request', 'gateway/binding-invalid',
            'gateway/cancelled', 'gateway/context-failed', 'gateway/context-not-found', 'gateway/context-unavailable',
            'gateway/definition-unavailable', 'gateway/input-invalid', 'gateway/internal', 'gateway/interactions-forbidden',
            'gateway/invocation-unavailable', 'gateway/lookup-failed', 'gateway/lookup-not-found', 'gateway/lookup-unavailable',
            'gateway/method-unavailable', 'gateway/peer-disposed', 'gateway/protocol', 'gateway/provider-mismatch',
            'gateway/result-invalid', 'gateway/service-unavailable', 'gateway/signature-invalid', 'gateway/uplink-overflow',
          ]);
          const API_REMOTES_PACKAGE = '@deepseek-ai/dsh-api-remotes';
          const PROVIDER_PACKAGE = 'dsh-glmteam-quota';
          const remoteReadinessReasons = new Set([
            'client-module-graph-unavailable', 'api-remotes-dependency-missing', 'api-remotes-module-missing',
            'api-remotes-entry-missing', 'api-remotes-import-failed', 'api-remotes-activation-failed',
            'api-remotes-entry-pending', 'api-remotes-loader-entry-missing', 'remote-root-unavailable',
            'remote-root-access-error', 'llm-namespace-unavailable', 'llm-namespace-access-error',
            'method-unavailable', 'method-access-error',
          ]);
          const readReflectedService = name => {
            try {
              const reflect = context?.reflect;
              if (!reflect || typeof reflect.get !== 'function') return { value: undefined, status: 'access-error' };
              const value = reflect.get(name);
              return value == null ? { value: undefined, status: 'absent-or-inactive' } : { value, status: 'present' };
            } catch {
              return { value: undefined, status: 'access-error' };
            }
          };
          const inspectClientModuleGraph = () => {
            const diagnostics = {
              clientModules: 'absent-or-inactive',
              apiRemotesDependency: 'unknown',
              apiRemotesModule: 'unknown',
              apiRemotesEntry: 'unknown',
              apiRemotesImport: 'unknown',
              apiRemotesEntryState: 'unknown',
            };
            let modules;
            let reflect;
            try {
              reflect = context?.reflect;
              if (!reflect || typeof reflect.get !== 'function') {
                diagnostics.clientModules = 'access-error';
                return { diagnostics, reason: 'client-module-graph-unavailable' };
              }
              modules = reflect.get('modules');
            } catch {
              diagnostics.clientModules = 'access-error';
              return { diagnostics, reason: 'client-module-graph-unavailable' };
            }
            if (!modules || typeof modules !== 'object') return { diagnostics, reason: 'client-module-graph-unavailable' };
            let manifestModules;
            let manifestPlugins;
            try {
              const manifest = modules.manifest;
              manifestModules = manifest?.modules;
              manifestPlugins = manifest?.plugins;
            } catch {
              diagnostics.clientModules = 'access-error';
              return { diagnostics, reason: 'client-module-graph-unavailable' };
            }
            if (!Array.isArray(manifestModules) || !Array.isArray(manifestPlugins)) {
              diagnostics.clientModules = 'invalid';
              return { diagnostics, reason: 'client-module-graph-unavailable' };
            }
            diagnostics.clientModules = 'available';
            try {
              const providerModule = manifestModules.find(row => row?.id === PROVIDER_PACKAGE);
              const apiRemotesModule = manifestModules.find(row => row?.id === API_REMOTES_PACKAGE);
              const apiRemotesEntry = manifestPlugins.find(row => row?.id === API_REMOTES_PACKAGE);
              if (providerModule && Array.isArray(providerModule.inject)) {
                diagnostics.apiRemotesDependency = providerModule.inject.includes(API_REMOTES_PACKAGE) ? 'declared' : 'not-declared';
              }
              diagnostics.apiRemotesModule = apiRemotesModule ? 'present' : 'absent';
              diagnostics.apiRemotesEntry = apiRemotesEntry ? 'present' : 'absent';
            } catch {
              diagnostics.clientModules = 'access-error';
              return { diagnostics, reason: 'client-module-graph-unavailable' };
            }
            try {
              if (typeof modules.importError === 'function') {
                diagnostics.apiRemotesImport = modules.importError(API_REMOTES_PACKAGE) ? 'import-failed' : 'no-recorded-failure';
              }
            } catch {}
            let reconciliationFailed = false;
            try {
              const failures = modules.entries?.state?.getSnapshot?.()?.failures;
              reconciliationFailed = Array.isArray(failures) && failures.some(failure => failure?.id === API_REMOTES_PACKAGE);
            } catch {}
            if (reconciliationFailed) diagnostics.apiRemotesEntryState = 'activation-failed';
            else {
              try {
                const loader = reflect.get('loader');
                const entries = loader?.entries;
                if (typeof entries === 'function') {
                  const entry = Array.from(entries.call(loader)).find(item => item?.options?.name === API_REMOTES_PACKAGE);
                  if (!entry) diagnostics.apiRemotesEntryState = 'missing';
                  else if (!entry.fiber) diagnostics.apiRemotesEntryState = 'pending';
                  else {
                    // Cordis 0.2.2-rc.3 FiberState: PENDING=0, LOADING=1, ACTIVE=2, FAILED=3, DISPOSED=4, UNLOADING=5.
                    const fiberState = entry.fiber.state;
                    diagnostics.apiRemotesEntryState = fiberState === 0 ? 'pending' : fiberState === 1 ? 'loading' : fiberState === 2 ? 'active' : fiberState === 3 ? 'activation-failed' : fiberState === 4 ? 'disposed' : fiberState === 5 ? 'unloading' : 'unknown';
                  }
                }
              } catch {}
            }
            const reason = diagnostics.apiRemotesDependency === 'not-declared' ? 'api-remotes-dependency-missing'
              : diagnostics.apiRemotesModule === 'absent' ? 'api-remotes-module-missing'
                : diagnostics.apiRemotesEntry === 'absent' ? 'api-remotes-entry-missing'
                  : diagnostics.apiRemotesImport === 'import-failed' ? 'api-remotes-import-failed'
                    : diagnostics.apiRemotesEntryState === 'activation-failed' ? 'api-remotes-activation-failed'
                      : diagnostics.apiRemotesEntryState === 'missing' ? 'api-remotes-loader-entry-missing'
                        : ['pending', 'loading'].includes(diagnostics.apiRemotesEntryState) ? 'api-remotes-entry-pending' : null;
            return { diagnostics, reason };
          };
          const inspectRemoteAvailability = () => {
            const remoteRoot = readReflectedService('remote');
            const remoteLlm = readReflectedService('remote.llm');
            const graph = inspectClientModuleGraph();
            let reason = remoteRoot.status === 'access-error' ? 'remote-root-access-error'
              : remoteLlm.status === 'access-error' ? 'llm-namespace-access-error'
                : graph.reason
                  ?? (remoteRoot.status !== 'present' ? 'remote-root-unavailable'
                    : remoteLlm.status !== 'present' ? 'llm-namespace-unavailable' : null);
            return {
              remoteRoot: remoteRoot.value,
              remoteLlm: remoteLlm.value,
              reason,
              diagnostics: { ...graph.diagnostics, remoteRoot: remoteRoot.status, llmNamespace: remoteLlm.status },
            };
          };
          const inspectRemoteOutcome = outcome => {
            if (outcome.status !== 'fulfilled') return { reason: 'call-rejected', code: null };
            try {
              const result = outcome.value;
              if (!result || typeof result !== 'object' || Array.isArray(result) || typeof result.ok !== 'boolean') return { reason: 'invalid-envelope', code: null };
              if (!result.ok) {
                const code = safeRemoteErrorCodes.has(result.error?.code) ? result.error.code : null;
                return { reason: 'remote-error', code };
              }
              if (!Array.isArray(result.value)) return { reason: 'invalid-value', code: null };
              return null;
            } catch {
              return { reason: 'invalid-envelope', code: null };
            }
          };
          const deriveKeyRef = provider => `${String(provider).toUpperCase().replace(/[^A-Z0-9]+/g, '_')}_API_KEY`;
          const entryPriority = provider => provider === 'deepseek-account' ? 0 : provider === 'deepseek-official' ? 1 : 2;
          const protocolChoices = namespace => {
            if (!namespace) return [];
            const node = schema.nodeAtPath(schema.rehydrate(namespace.schema), ['providers', '\u0000pq-probe', 'api']);
            return node?.type === 'union' && Array.isArray(node.list) ? node.list.map(item => item.value).filter(value => typeof value === 'string') : [];
          };
          async function load() {
            if (disposed) return;
            const token = ++generation;
            routeHostController?.abort();
            const hostController = new AbortController();
            routeHostController = hostController;
            publish({ status: 'loading', error: false, errorStage: null, errorReason: null, errorCode: null, remoteDiagnostics: null, credentialError: false, routeHostsError: false });
            let remoteDiagnostics = null;
            const fail = (stage, reason = 'unknown', code = null) => {
              if (!disposed && token === generation) publish({ status: 'error', error: true, errorStage: stage, errorReason: reason, errorCode: safeRemoteErrorCodes.has(code) ? code : null, remoteDiagnostics });
            };
            let failureStage = 'providers';
            try {
              const availability = inspectRemoteAvailability();
              remoteDiagnostics = availability.diagnostics;
              const remoteLlm = availability.remoteLlm;
              if (!remoteLlm) { fail('providers', availability.reason ?? 'remote-unavailable'); return; }
              let listProviders;
              try { listProviders = remoteLlm.listProviders; } catch { fail('providers', 'method-access-error'); return; }
              if (typeof listProviders !== 'function') { fail('providers', 'method-unavailable'); return; }
              let listConfigurableProviders;
              try { listConfigurableProviders = remoteLlm.listConfigurableProviders; } catch { fail('directory', 'method-access-error'); return; }
              if (typeof listConfigurableProviders !== 'function') { fail('directory', 'method-unavailable'); return; }
              const activeRulesGeneration = rulesGeneration;
              const [registeredOutcome, configurableOutcome, settingsOutcome, routeHostsOutcome, companyRulesOutcome] = await Promise.allSettled([
                Promise.resolve().then(() => listProviders.call(remoteLlm)),
                Promise.resolve().then(() => listConfigurableProviders.call(remoteLlm)),
                Promise.resolve().then(() => describeFace.ensure()),
                Promise.resolve().then(() => readRouteHosts(hostController.signal)),
                Promise.resolve().then(() => readCompanyRules(hostController.signal)),
              ]);
              if (disposed || token !== generation) return;
              const registeredFailure = inspectRemoteOutcome(registeredOutcome);
              if (registeredFailure) {
                fail('providers', registeredFailure.reason, registeredFailure.code);
                return;
              }
              failureStage = 'directory';
              const configurableFailure = inspectRemoteOutcome(configurableOutcome);
              if (configurableFailure) {
                fail('directory', configurableFailure.reason, configurableFailure.code);
                return;
              }
              if (settingsOutcome.status !== 'fulfilled') {
                fail('settings', 'settings-rejected');
                return;
              }
              const registeredResult = registeredOutcome.value;
              const configurableResult = configurableOutcome.value;
              failureStage = 'settings';
              const mirrored = describeFace.getSnapshot();
              if (!Array.isArray(mirrored?.view?.namespaces)) {
                fail('settings', 'invalid-envelope');
                return;
              }
              const view = mirrored.view;
              failureStage = 'processing';
              const namespaces = new Map(view.namespaces.map(namespace => [namespace.ns, namespace]));
              const activeIds = new Set(registeredResult.value.map(provider => provider.id));
              const declaredIds = new Set(configurableResult.value.map(entry => entry.provider));
              const directory = configurableResult.value.map(entry => ({
                provider: entry.provider,
                displayName: entry.displayName,
                settingsNs: entry.settingsNs,
                settingsPath: Array.isArray(entry.settingsPath) ? [...entry.settingsPath] : [],
                active: activeIds.has(entry.provider),
                declared: entry.declared,
                defaultBaseURL: entry.defaultBaseURL,
                baseURLEnv: entry.baseURLEnv,
                nativeAuth: entry.nativeAuth,
                error: entry.error,
              }));
              for (const provider of registeredResult.value) {
                if (!declaredIds.has(provider.id)) directory.push({ provider: provider.id, displayName: provider.name, settingsNs: '', settingsPath: [], active: true, unsupported: true });
              }
              directory.sort((left, right) => entryPriority(left.provider) - entryPriority(right.provider));
              const routeHosts = validatedRouteHosts(routeHostsOutcome);
              const authConfiguredRoutes = new Set(routeHosts ? routeHostsOutcome.value.routes.filter(route => route.authConfigured === true).map(routeIdentity) : []);
              const routeHostsError = !routeHosts || directory.some(entry => !entry.unsupported && !routeHosts.has(routeIdentity(entry)));
              const rows = directory.map(entry => {
                const namespace = namespaces.get(entry.settingsNs);
                const path = entry.settingsPath;
                const configured = Boolean(namespace && path.length > 0 && schema.getPath(namespace.value, path) !== undefined);
                // SDK hasPath delegates to this.getPath; preserve its service receiver.
                const savedConfiguration = Boolean(namespace && hasSavedProviderSettings(namespace.user, path, (value, keys) => schema.hasPath(value, keys)));
                const profile = namespace && path.length > 0 ? schema.getPath(namespace.value, path) : undefined;
                const safeProfile = profile && typeof profile === 'object' && !Array.isArray(profile) ? profile : {};
                const schemaRoot = namespace ? schema.rehydrate(namespace.schema) : undefined;
                const profileNode = namespace && path.length > 0 ? schema.nodeAtPath(schemaRoot, path) : undefined;
                const modelNode = namespace && path.length > 0 ? schema.nodeAtPath(schemaRoot, [...path, 'models']) : undefined;
                const keyNode = namespace && path.length > 0 ? schema.nodeAtPath(schemaRoot, [...path, 'apiKeyEnv']) : undefined;
                const baseNode = namespace && path.length > 0 ? schema.nodeAtPath(schemaRoot, [...path, 'baseURL']) : undefined;
                const displayNameNode = namespace && path.length > 0 ? schema.nodeAtPath(schemaRoot, [...path, 'displayName']) : undefined;
                const apiNode = namespace && path.length > 0 ? schema.nodeAtPath(schemaRoot, [...path, 'api']) : undefined;
                const routeProtocols = entry.settingsNs === 'llm-pi-ai' ? protocolChoices(namespace) : [];
                const supported = Boolean(namespace && path.length > 0 && profileNode !== undefined && modelNode !== undefined
                  && (entry.settingsNs !== 'llm-pi-ai' || (apiNode !== undefined && routeProtocols.length > 0)));
                const apiKeyEnv = typeof safeProfile.apiKeyEnv === 'string' && safeProfile.apiKeyEnv.length > 0 ? safeProfile.apiKeyEnv : undefined;
                const credentialRef = apiKeyEnv ?? deriveKeyRef(entry.provider);
                const removable = Boolean(namespace && path.length > 0 && schema.hasPath(namespace.user, path) && !schema.hasPath(namespace.base, path));
                return {
                  entry, namespace, path, profile: safeProfile, configured, savedConfiguration, removable,
                  ...(routeHosts?.get(routeIdentity(entry)) ?? { routeHostname: null }),
                  supported, profileNode, modelNode, keyNode, baseNode, displayNameNode, apiNode,
                  credentialRef, credential: undefined,
                  protocolChoices: routeProtocols,
                  useDefaultCatalog: Boolean(namespace && Array.isArray(schema.getPath(namespace.base, [...path, 'models'])) && !schema.hasPath(namespace.user, [...path, 'models'])),
                };
              });
              const refs = new Set();
              for (const row of rows) {
                if (!row.namespace || row.path.length === 0 || row.entry.provider === 'deepseek-account') continue;
                refs.add(row.credentialRef);
                if (typeof row.profile.apiKeyEnv !== 'string' || !row.profile.apiKeyEnv) {
                  for (const ref of row.entry.nativeAuth?.env ?? []) refs.add(ref);
                }
              }
              const credentials = {};
              let credentialError = false;
              const references = [...refs];
              const credentialsRemote = readReflectedService('remote.credentials').value;
              for (let index = 0; index < references.length; index += 64) {
                try {
                  const result = await credentialsRemote.describe(references.slice(index, index + 64));
                  if (!result?.ok) { credentialError = true; break; }
                  Object.assign(credentials, result.value);
                } catch {
                  // Credential status is optional: keep the provider directory usable.
                  credentialError = true;
                  break;
                }
              }
              if (disposed || token !== generation) return;
              const enriched = rows.map(row => {
                const nativeRefs = typeof row.profile.apiKeyEnv === 'string' && row.profile.apiKeyEnv
                  ? [row.profile.apiKeyEnv]
                  : row.entry.nativeAuth?.env ?? [];
                const primaryCredential = credentials[row.credentialRef];
                const credential = primaryCredential?.configured === true ? primaryCredential : nativeRefs.map(ref => credentials[ref]).find(info => info?.configured === true) ?? primaryCredential;
                return { ...row, credential, savedConfiguration: providerRowSavedState(row.savedConfiguration, credential, authConfiguredRoutes.has(routeIdentity(row.entry))) };
              });
              const candidateRules = companyRulesOutcome.status === 'fulfilled' ? modelProviderRulesSnapshot(companyRulesOutcome.value) : null;
              const acceptRules = candidateRules && candidateRules.rules.revision >= (state.companyRules?.rules.revision ?? 0);
              const rulesUpdate = activeRulesGeneration === rulesGeneration ? { companyRules: acceptRules ? candidateRules : state.companyRules, companyRulesError: !acceptRules } : {};
              publish({ status: 'ready', error: false, errorStage: null, errorReason: null, errorCode: null, remoteDiagnostics: null, credentialError, routeHostsError, ...rulesUpdate, writable: view.writable, entries: enriched, namespaces, registered: registeredResult.value });
            } catch {
              fail(failureStage, 'local-processing');
            } finally {
              hostController.abort();
              if (routeHostController === hostController) routeHostController = null;
            }
          }
          async function refreshRules() {
            if (disposed || state.companyRulesRefreshing) return;
            const token = ++rulesGeneration;
            rulesController?.abort();
            const controller = new AbortController();
            rulesController = controller;
            publish({ companyRulesRefreshing: true, companyRulesError: false, companyRulesRefreshResult: null });
            try {
              const candidate = modelProviderRulesSnapshot(await refreshCompanyRules(controller.signal));
              if (disposed || token !== rulesGeneration) return;
              if (!candidate || candidate.rules.revision < (state.companyRules?.rules.revision ?? 0)) publish({ companyRulesError: true });
              else publish({ companyRules: candidate, companyRulesError: false, companyRulesRefreshResult: candidate.error ? null : candidate.rules.revision > (state.companyRules?.rules.revision ?? BUNDLED_CLIENT_COMPANY_RULES.revision) ? 'updated' : 'current' });
            } catch { if (!disposed && token === rulesGeneration) publish({ companyRulesError: true }); }
            finally {
              controller.abort();
              if (rulesController === controller) rulesController = null;
              if (!disposed && token === rulesGeneration) publish({ companyRulesRefreshing: false });
            }
          }
          const subscribe = listener => { listeners.add(listener); return () => listeners.delete(listener); };
          return {
            getSnapshot: () => state,
            refreshCompanyRules: refreshRules,
            subscribe,
            protocolChoices,
            load,
            refreshIfLoaded: () => { if (!disposed && state.status !== 'idle') void load(); },
            retryAfterRemoteReady: () => {
              if (disposed || state.status !== 'error' || !['providers', 'directory'].includes(state.errorStage) || !remoteReadinessReasons.has(state.errorReason)) return;
              return load();
            },
            writeSettings: async (namespace, ops, expectedRevision) => {
              try {
                const remoteSettings = readReflectedService('remote.settings').value;
                const result = await remoteSettings.mutate(namespace, ops, expectedRevision);
                if (result.ok) {
                  describeFace.acceptView(result.value);
                  return { kind: 'written', view: result.value };
                }
                return { kind: result.error.code === 'settings/conflict' ? 'conflict' : 'refused' };
              } catch {
                return { kind: 'refused' };
              }
            },
            storeCredential: async (reference, value) => {
              try {
                const remoteCredentials = readReflectedService('remote.credentials').value;
                const result = await remoteCredentials.set(reference, value);
                return Boolean(result.ok);
              } catch {
                return false;
              }
            },
            discoverModels: (namespace, request, signal) => requestProviderModelDiscovery(document.baseURI, fetch, namespace, request, signal),
            dispose: () => { disposed = true; generation++; rulesGeneration++; routeHostController?.abort(); routeHostController = null; rulesController?.abort(); rulesController = null; listeners.clear(); },
          };
        }
        function providerGroupSummary(group) {
          const remaining = group.routes.flatMap(row => (row.metrics ?? []).filter(metric => typeof metric.usedPercent === 'number' && Number.isFinite(metric.usedPercent)).map(metric => 100 - Math.min(100, Math.max(0, metric.usedPercent))));
          const quota = remaining.length ? `${t('lowestRemaining')} ${percent(Math.min(...remaining))}%` : t('providerNoQuota');
          const needsAttention = group.routes.filter(row => row.status !== 'ok' || row.stale).length;
          return needsAttention ? `${quota} · ${t('routesNeedAttention')}: ${needsAttention}` : quota;
        }
        function useProviderManager(manager) {
          return React.useSyncExternalStore(manager.subscribe, manager.getSnapshot, manager.getSnapshot);
        }
        function ProviderManager({ manager }) {
          React.useSyncExternalStore(callback => ctx.locale.subscribe(callback), () => ctx.locale.getSnapshot());
          const state = useProviderManager(manager);
          const headingRef = React.useRef(null);
          const launcherNodesRef = React.useRef(new Map());
          const launcherCallbacksRef = React.useRef(new Map());
          const returnFocusKeyRef = React.useRef(null);
          const editingCompanyRef = React.useRef(null);
          const editorWasOpenRef = React.useRef(false);
          const previousConfirmIdRef = React.useRef(null);
          const removeCancelRef = React.useRef(null);
          const removalConfirmationRef = React.useRef(null);
          const [target, setTarget] = React.useState(null);
          const [formMode, setFormMode] = React.useState('edit');
          const [confirmId, setConfirmId] = React.useState(null);
          const [removingId, setRemovingId] = React.useState(null);
          const [removeError, setRemoveError] = React.useState(null);
          const [notice, setNotice] = React.useState(null);
          const [addOpen, setAddOpen] = React.useState(false);
          const [addProvider, setAddProvider] = React.useState('');
          const [selectedCompanyKey, setSelectedCompanyKey] = React.useState(null);
          const [companyQuery, setCompanyQuery] = React.useState('');
          const companySearchRef = React.useRef(null);
          const companySearchId = React.useId();
          const companySearchStatusId = React.useId();
          const previousSelectedCompanyKeyRef = React.useRef(null);
          const launcherRefFor = key => {
            if (!launcherCallbacksRef.current.has(key)) launcherCallbacksRef.current.set(key, node => {
              if (node) launcherNodesRef.current.set(key, node); else launcherNodesRef.current.delete(key);
            });
            return launcherCallbacksRef.current.get(key);
          };
          const focusLauncher = key => {
            const preferred = key ? launcherNodesRef.current.get(key) : null;
            const fallback = launcherNodesRef.current.get('add');
            const targetNode = preferred?.isConnected ? preferred : fallback?.isConnected ? fallback : headingRef.current;
            targetNode?.focus({ preventScroll: true });
          };
          React.useEffect(() => { void manager.load(); }, [manager]);
          React.useEffect(() => {
            const previous = previousSelectedCompanyKeyRef.current;
            if (selectedCompanyKey) {
              previousSelectedCompanyKeyRef.current = selectedCompanyKey;
              headingRef.current?.focus({ preventScroll: true });
            } else if (previous) {
              previousSelectedCompanyKeyRef.current = null;
              focusLauncher(`company:${previous}`);
            }
          }, [selectedCompanyKey]);
          React.useEffect(() => {
            if (target) { editorWasOpenRef.current = true; return; }
            if (!editorWasOpenRef.current) return;
            editorWasOpenRef.current = false;
            focusLauncher(returnFocusKeyRef.current);
            returnFocusKeyRef.current = null;
          }, [target]);
          React.useEffect(() => {
            if (confirmId) {
              previousConfirmIdRef.current = confirmId;
              removeCancelRef.current?.focus({ preventScroll: true });
              return;
            }
            const previous = previousConfirmIdRef.current;
            if (previous) {
              previousConfirmIdRef.current = null;
              focusLauncher(`remove:${previous}`);
            }
          }, [confirmId]);
          React.useEffect(() => {
            if (removingId) removalConfirmationRef.current?.focus({ preventScroll: true });
          }, [removingId]);
          const t = ctx.locale.bind(NS);
          const errorStageKey = ({
            providers: 'providerManagerLoadStageProviders',
            directory: 'providerManagerLoadStageDirectory',
            settings: 'providerManagerLoadStageSettings',
            processing: 'providerManagerLoadStageProcessing',
          })[state.errorStage];
          const errorReasonKey = ({
            'remote-unavailable': 'providerManagerLoadCauseRemoteUnavailable',
            'method-unavailable': 'providerManagerLoadCauseMethodUnavailable',
            'method-access-error': 'providerManagerLoadCauseMethodAccessError',
            'client-module-graph-unavailable': 'providerManagerLoadCauseClientModuleGraphUnavailable',
            'api-remotes-dependency-missing': 'providerManagerLoadCauseApiRemotesDependencyMissing',
            'api-remotes-module-missing': 'providerManagerLoadCauseApiRemotesModuleMissing',
            'api-remotes-entry-missing': 'providerManagerLoadCauseApiRemotesEntryMissing',
            'api-remotes-import-failed': 'providerManagerLoadCauseApiRemotesImportFailed',
            'api-remotes-activation-failed': 'providerManagerLoadCauseApiRemotesActivationFailed',
            'api-remotes-entry-pending': 'providerManagerLoadCauseApiRemotesEntryPending',
            'api-remotes-loader-entry-missing': 'providerManagerLoadCauseApiRemotesLoaderEntryMissing',
            'remote-root-unavailable': 'providerManagerLoadCauseRemoteRootUnavailable',
            'remote-root-access-error': 'providerManagerLoadCauseRemoteRootAccessError',
            'llm-namespace-unavailable': 'providerManagerLoadCauseLlmNamespaceUnavailable',
            'llm-namespace-access-error': 'providerManagerLoadCauseLlmNamespaceAccessError',
            'call-rejected': 'providerManagerLoadCauseCallRejected',
            'remote-error': 'providerManagerLoadCauseRemoteError',
            'invalid-envelope': 'providerManagerLoadCauseInvalidEnvelope',
            'invalid-value': 'providerManagerLoadCauseInvalidValue',
            'settings-rejected': 'providerManagerLoadCauseSettingsRejected',
            'local-processing': 'providerManagerLoadCauseLocalProcessing',
          })[state.errorReason] ?? (state.errorReason ? 'providerManagerLoadCauseUnknown' : null);
          const errorDiagnostic = errorStageKey
            ? `${t('providerManagerLoadStageLabel')}${t(errorStageKey)}${errorReasonKey ? ` · ${t('providerManagerLoadCauseLabel')}${t(errorReasonKey)}` : ''}${state.errorCode ? ` · ${t('providerManagerLoadRemoteCodeLabel')}${state.errorCode}` : ''}`
            : null;
          const diagnosticFields = [
            ['clientModules', 'providerManagerDiagClientModules'],
            ['apiRemotesDependency', 'providerManagerDiagApiDependency'],
            ['apiRemotesModule', 'providerManagerDiagApiModule'],
            ['apiRemotesEntry', 'providerManagerDiagApiEntry'],
            ['apiRemotesImport', 'providerManagerDiagApiImport'],
            ['apiRemotesEntryState', 'providerManagerDiagApiEntryState'],
            ['remoteRoot', 'providerManagerDiagRemoteRoot'],
            ['llmNamespace', 'providerManagerDiagLlmNamespace'],
          ];
          const diagnosticStatusKeys = {
            clientModules: { available: 'providerManagerDiagStateAvailable', 'absent-or-inactive': 'providerManagerDiagStateAbsentOrInactive', 'access-error': 'providerManagerDiagStateAccessError', invalid: 'providerManagerDiagStateInvalid', unknown: 'providerManagerDiagStateUnknown' },
            apiRemotesDependency: { declared: 'providerManagerDiagStateDeclared', 'not-declared': 'providerManagerDiagStateNotDeclared', unknown: 'providerManagerDiagStateUnknown' },
            apiRemotesModule: { present: 'providerManagerDiagStatePresent', absent: 'providerManagerDiagStateAbsent', unknown: 'providerManagerDiagStateUnknown' },
            apiRemotesEntry: { present: 'providerManagerDiagStatePresent', absent: 'providerManagerDiagStateAbsent', unknown: 'providerManagerDiagStateUnknown' },
            apiRemotesImport: { 'import-failed': 'providerManagerDiagStateImportFailed', 'no-recorded-failure': 'providerManagerDiagStateNoRecordedFailure', unknown: 'providerManagerDiagStateUnknown' },
            apiRemotesEntryState: { 'activation-failed': 'providerManagerDiagStateActivationFailed', pending: 'providerManagerDiagStatePending', loading: 'providerManagerDiagStateLoading', active: 'providerManagerDiagStateActive', disposed: 'providerManagerDiagStateDisposed', unloading: 'providerManagerDiagStateUnloading', missing: 'providerManagerDiagStateMissing', unknown: 'providerManagerDiagStateUnknown' },
            remoteRoot: { present: 'providerManagerDiagStatePresent', 'absent-or-inactive': 'providerManagerDiagStateAbsentOrInactive', 'access-error': 'providerManagerDiagStateAccessError', unknown: 'providerManagerDiagStateUnknown' },
            llmNamespace: { present: 'providerManagerDiagStatePresent', 'absent-or-inactive': 'providerManagerDiagStateAbsentOrInactive', 'access-error': 'providerManagerDiagStateAccessError', unknown: 'providerManagerDiagStateUnknown' },
          };
          const diagnosticPanel = state.remoteDiagnostics ? h('details', { className: 'pq-manager-diagnostics' },
            h('summary', null, t('providerManagerDiagTitle')),
            h('p', { className: 'pq-manager-note' }, t('providerManagerDiagNote')),
            h('dl', { className: 'pq-manager-diagnostic-list' }, ...diagnosticFields.map(([field, labelKey]) => {
              const statusKey = diagnosticStatusKeys[field]?.[state.remoteDiagnostics[field]] ?? 'providerManagerDiagStateUnknown';
              return h('div', { key: field }, h('dt', null, t(labelKey)), h('dd', null, t(statusKey)));
            }))) : null;
          const supported = state.entries.filter(row => row.supported);
          const addable = supported.filter(row => !row.configured && row.entry.declared !== true && row.path.length > 0 && state.writable);
          const currentCompanyRules = state.companyRules?.rules ?? BUNDLED_CLIENT_COMPANY_RULES;
          const companyGroups = sortModelProviderCompanyGroups(groupModelProvidersByCompany(state.entries, t('companyUnclassified'), family => ctx.locale.resolveText(family.names), currentCompanyRules.companies), ctx.locale.resolveText({ zh: 'zh', en: 'en' }));
          const visibleCompanyGroups = filterModelProviderCompanyGroups(companyGroups, companyQuery, currentCompanyRules.companies);
          const selectedCompany = providerEditorCompany(companyGroups, selectedCompanyKey, target, formMode, editingCompanyRef.current);
          const companyAddable = selectedCompany ? addable.filter(row => selectedCompany.entries.includes(row)) : [];
          const addableInView = companyAddable;
          const customNamespace = state.namespaces.get('llm-pi-ai');
          const customProtocols = manager.protocolChoices(customNamespace);
          const customSchemaRoot = customNamespace ? ctx.settingsSchema.rehydrate(customNamespace.schema) : undefined;
          const customNode = customNamespace ? ctx.settingsSchema.nodeAtPath(customSchemaRoot, ['providers', '\u0000pq-probe']) : undefined;
          const customModelNode = customNamespace ? ctx.settingsSchema.nodeAtPath(customSchemaRoot, ['providers', '\u0000pq-probe', 'models']) : undefined;
          const customBaseNode = customNamespace ? ctx.settingsSchema.nodeAtPath(customSchemaRoot, ['providers', '\u0000pq-probe', 'baseURL']) : undefined;
          const customApiNode = customNamespace ? ctx.settingsSchema.nodeAtPath(customSchemaRoot, ['providers', '\u0000pq-probe', 'api']) : undefined;
          const customAvailable = Boolean(state.writable && customNamespace && customNode !== undefined && customModelNode !== undefined && customBaseNode !== undefined && customApiNode !== undefined && customProtocols.length);
          const unsupported = state.entries.filter(row => !row.supported);
          const openRow = (row, mode, focusKey = `provider:${row.entry.provider}`) => { if (!row.supported || target) return; editingCompanyRef.current = selectedCompany; returnFocusKeyRef.current = focusKey; setNotice(null); setConfirmId(null); setTarget(row); setFormMode(mode); };
          const openCompany = group => {
            setSelectedCompanyKey(group.key);
            setAddOpen(false);
            setAddProvider('');
            setNotice(null);
            setRemoveError(null);
            setConfirmId(null);
          };
          const backToCompanies = () => {
            setSelectedCompanyKey(null);
            setAddOpen(false);
            setAddProvider('');
            setConfirmId(null);
            setRemoveError(null);
          };
          const openCustom = (focusKey = 'add-custom') => {
            if (!customAvailable) return;
            returnFocusKeyRef.current = focusKey;
            setNotice(null);
            setConfirmId(null);
            setTarget({
              entry: { provider: '', displayName: '', settingsNs: 'llm-pi-ai', settingsPath: ['providers'], active: false, declared: true },
              namespace: customNamespace, path: ['providers'], profile: {}, configured: false, removable: false,
              supported: true, protocolChoices: customProtocols, customNew: true,
            });
            setFormMode('custom');
            setAddOpen(false);
          };
          const confirmRemoval = async row => {
            if (!row.namespace || !state.writable || removingId) return;
            setRemovingId(row.entry.provider);
            setRemoveError(null);
            const result = await manager.writeSettings(row.entry.settingsNs, [{ op: 'unset', path: row.path }], row.namespace.revision);
            setRemovingId(null);
            if (result.kind !== 'written') {
              setRemoveError(result.kind === 'conflict' ? 'providerManagerUiRemoveConflict' : 'providerManagerUiRemoveFailed');
              if (result.kind === 'conflict') {
                setConfirmId(null);
                await manager.load();
                focusLauncher(`remove:${row.entry.provider}`);
              }
              return;
            }
            setConfirmId(null);
            setNotice('providerManagerUiRemoveSuccess');
            await manager.load();
            focusLauncher('add');
          };
          const renderEditor = () => h(ProviderManagerEditor, {
            key: `${target.entry.settingsNs}:${target.entry.provider}:${formMode}`,
            manager, target, mode: formMode,
            onBack: () => { editingCompanyRef.current = null; setTarget(null); setNotice(null); },
            onSaved: async () => { await manager.load(); editingCompanyRef.current = null; setTarget(null); setNotice('providerManagerSaved'); },
          });
          const renderProviderEntry = row => {
            const pendingRemoval = confirmId === row.entry.provider;
            const isEditing = target === row && formMode !== 'custom';
            const profileName = typeof row.profile?.displayName === 'string' && row.profile.displayName.trim() ? row.profile.displayName : row.entry.displayName || row.entry.provider;
            const editorId = `pq-provider-editor-${encodeURIComponent(row.entry.settingsNs)}-${encodeURIComponent(row.entry.provider)}`;
            const catalogGroupingHost = modelProviderCatalogGroupingHost(row);
            return h('article', { key: `${row.entry.settingsNs}:${row.entry.provider}`, className: 'pq-manager-card pq-manager-provider-entry', 'data-editing': isEditing || undefined },
              h('div', { className: 'pq-manager-provider-entry-head' },
                h('div', { className: 'pq-manager-provider-identity' },
                  h('div', { className: 'pq-manager-route-title' }, h('strong', null, profileName), h('span', { className: 'pq-dot', 'data-tone': row.entry.active ? 'success' : 'warn', role: 'img', 'aria-label': t(row.entry.active ? 'providerManagerActive' : 'providerManagerInactive'), title: t(row.entry.active ? 'providerManagerActive' : 'providerManagerInactive') })),
                  profileName !== row.entry.provider ? h('code', null, row.entry.provider) : null),
                row.supported ? h('div', { className: 'pq-manager-actions pq-manager-route-actions' },
                  h('button', { ref: launcherRefFor(`provider:${row.entry.provider}`), type: 'button', className: 'pq-button', disabled: !state.writable || Boolean(target) || Boolean(removingId), 'aria-expanded': isEditing, 'aria-controls': editorId, onClick: () => openRow(row, row.configured ? 'edit' : 'create') }, t(row.configured ? 'providerManagerEdit' : 'providerManagerAdd')),
                  row.removable ? h('button', { ref: launcherRefFor(`remove:${row.entry.provider}`), type: 'button', className: 'pq-button pq-manager-danger pq-manager-route-remove', disabled: !state.writable || Boolean(target) || Boolean(removingId), onClick: () => { setRemoveError(null); setConfirmId(row.entry.provider); } }, t('providerManagerRemove')) : null) : null),
              catalogGroupingHost ? h('p', { className: 'pq-manager-meta' }, `${catalogGroupingHost} · ${t('providerManagerCatalogGroupingSource')}`) : null,
              !row.configured && !isEditing && row.supported ? h('p', { className: 'pq-manager-meta' }, t('providerManagerNeedsSetup')) : null,
              row.entry.error ? h('p', { className: 'pq-manager-meta' }, t('providerManagerAdvanced')) : null,
              !row.supported ? h('p', { className: 'pq-manager-note' }, t('providerManagerReadOnlyRoute')) : pendingRemoval ? h('div', { ref: removalConfirmationRef, className: 'pq-manager-confirm', role: 'group', tabIndex: -1, 'aria-busy': removingId === row.entry.provider, 'aria-label': t('providerManagerRemoveConfirm') },
                h('p', null, t('providerManagerRemoveConfirm')), h('p', { className: 'pq-manager-note' }, t('providerManagerUiRemoveConfirmNote')),
                h('div', { className: 'pq-manager-actions' },
                  h('button', { ref: removeCancelRef, type: 'button', className: 'pq-button', disabled: removingId === row.entry.provider, onClick: () => setConfirmId(null) }, t('providerManagerCancel')),
                  h('button', { type: 'button', className: 'pq-button pq-manager-danger', disabled: removingId === row.entry.provider, onClick: () => { void confirmRemoval(row); } }, t(removingId === row.entry.provider ? 'providerManagerSaving' : 'providerManagerRemove')))) : null,
              h('div', { id: editorId, hidden: !isEditing }, isEditing ? renderEditor() : null));
          };
          return h('section', { className: 'pq-manager', 'aria-label': selectedCompany?.title || t('providerManagerTitle') },
            selectedCompany ? h('button', { type: 'button', className: 'pq-button pq-provider-back', disabled: Boolean(target), onClick: backToCompanies }, `‹ ${t('providerManagerBackToCompanies')}`) : null,
            h('div', { className: 'pq-manager-heading' },
              h('h3', { ref: headingRef, tabIndex: -1, className: 'pq-provider-detail-title' }, selectedCompany?.title || t('providerManagerTitle')),
              h('div', { className: 'pq-manager-heading-actions' },
                h('button', { type: 'button', className: 'pq-button', disabled: Boolean(target) || state.status === 'loading', onClick: () => { setNotice(null); void manager.load(); } }, t('providerManagerRefresh')),
                selectedCompany && companyAddable.length ? h('button', { ref: launcherRefFor('add'), type: 'button', className: 'pq-button pq-manager-primary', disabled: Boolean(target) || !state.writable || state.status === 'loading', onClick: () => { setAddOpen(value => !value); setAddProvider(''); setNotice(null); } }, t('providerManagerAdd')) : !selectedCompany && customAvailable ? h('button', { ref: launcherRefFor('add-custom'), type: 'button', className: 'pq-button pq-manager-primary', disabled: Boolean(target) || state.status === 'loading', onClick: () => openCustom('add-custom') }, t('providerManagerAddCustom')) : null)),
            h('p', { className: 'pq-muted' }, t(selectedCompany ? 'providerManagerCompanyIntro' : 'providerManagerIntro')),
            !selectedCompany ? h('div', { className: 'pq-company-search', role: 'search', 'aria-label': t('providerManagerCompanySearchLabel') },
              h('label', { htmlFor: companySearchId }, t('providerManagerCompanySearchLabel')),
              h('div', { className: 'pq-company-search-row' },
                h('input', { id: companySearchId, ref: companySearchRef, type: 'search', value: companyQuery, maxLength: 200, autoComplete: 'off', spellCheck: false,
                  placeholder: t('providerManagerCompanySearchPlaceholder'), 'aria-describedby': companyGroups.length ? companySearchStatusId : undefined,
                  onChange: event => setCompanyQuery(event.target.value.slice(0, 200)) }),
                companyQuery ? h('button', { type: 'button', className: 'pq-button', onClick: () => { setCompanyQuery(''); companySearchRef.current?.focus({ preventScroll: true }); } }, t('providerManagerCompanySearchClear')) : null),
              companyGroups.length ? h('p', { id: companySearchStatusId, className: 'pq-company-search-status', role: 'status', 'aria-live': 'polite', 'aria-atomic': true }, `${visibleCompanyGroups.length} / ${companyGroups.length} ${t('providerManagerCompanySearchResults')}`) : null) : null,
            !state.writable && state.status === 'ready' ? h('p', { className: 'pq-manager-alert', role: 'status' }, t('providerManagerReadOnly')) : null,
            state.routeHostsError && state.status === 'ready' ? h('p', { className: 'pq-manager-alert', role: 'status' }, t('providerManagerRouteHostsUnavailable')) : null,
            state.error ? h('div', null,
              h('p', { className: 'pq-manager-error', role: 'alert' }, t('providerManagerLoadFailed'), errorDiagnostic ? h('small', { className: 'pq-manager-error-stage' }, errorDiagnostic) : null),
              diagnosticPanel) : null,
            state.status === 'loading' && !state.entries.length ? h('p', { className: 'pq-muted', role: 'status' }, t('providerManagerLoading')) : null,
            notice ? h('p', { className: 'pq-manager-alert', role: 'status' }, t(notice)) : null,
            removeError ? h('p', { className: 'pq-manager-error', role: 'alert' }, t(removeError)) : null,
            target && formMode === 'custom' ? h('article', { className: 'pq-manager-card' }, renderEditor()) : null,
            addOpen && selectedCompany ? h('section', { className: 'pq-manager-card', 'aria-label': t('providerManagerChoose') },
              h('strong', null, t('providerManagerChoose')),
              addableInView.length ? h('div', { className: 'pq-manager-add-row' },
                h('label', { className: 'pq-manager-field' }, h('span', null, t('providerManagerSelectCatalog')),
                  h('select', { value: addProvider, onChange: event => setAddProvider(event.target.value) },
                    h('option', { value: '' }, t('providerManagerSelectCatalog')),
                    ...addableInView.map(row => h('option', { key: `${row.entry.settingsNs}:${row.entry.provider}`, value: JSON.stringify([row.entry.settingsNs, row.entry.provider]) }, `${row.entry.displayName} (${row.entry.provider})`)))),
                h('button', { type: 'button', className: 'pq-button pq-manager-primary', disabled: !addProvider, onClick: () => {
                  const row = addableInView.find(candidate => JSON.stringify([candidate.entry.settingsNs, candidate.entry.provider]) === addProvider);
                  if (row) { setAddOpen(false); openRow(row, 'create', 'add'); }
                } }, t('providerManagerCatalog'))) : h('p', { className: 'pq-muted' }, t('providerManagerNoAddable'))) : null,
            !selectedCompany && !state.entries.length && state.status === 'ready' ? h('p', { className: 'pq-muted' }, t('providerManagerNoProviders')) : null,
            !selectedCompany && state.status === 'ready' && companyGroups.length > 0 && !visibleCompanyGroups.length ? h('p', { className: 'pq-manager-note' }, t('providerManagerCompanySearchEmpty')) : null,
            selectedCompany ? h('div', { className: 'pq-manager-provider-list' }, ...selectedCompany.entries.map(renderProviderEntry)) : visibleCompanyGroups.length ? h('div', { className: 'pq-provider-cell-list' }, ...visibleCompanyGroups.map(group => {
               const title = group.title || t(group.label);
               const hostnames = modelProviderGroupHostnames(group);
               const counts = modelProviderGroupRouteCounts(group);
               const routeCountLabel = t(counts.configured === 1 ? 'providerManagerRouteCountOne' : 'providerManagerRouteCount');
               const routeSummary = [counts.configured || !counts.catalog ? `${counts.configured} ${routeCountLabel}` : '', counts.catalog ? `${counts.catalog} ${t(counts.catalog === 1 ? 'providerManagerCatalogCountOne' : 'providerManagerCatalogCount')}` : ''].filter(Boolean).join(' · ');
               const requestHosts = new Set(group.entries.map(modelProviderRouteHost).filter(Boolean));
               const hostLabels = hostnames.map(host => requestHosts.has(host) ? host : `${host} · ${t('providerManagerCatalogGroupingSource')}`);
               const hostNodes = hostnames.slice(0, 3).map((host, index) => h('span', { key: host, className: 'pq-provider-cell-host' }, hostLabels[index]));
               if (!hostnames.length) hostNodes.push(h('span', { key: 'no-host', className: 'pq-provider-cell-host' }, t('providerManagerNoHostSummary')));
               if (hostnames.length > 3) hostNodes.push(h('span', { key: 'more-hosts', className: 'pq-provider-cell-host' }, `+${hostnames.length - 3} ${t('providerManagerMoreHosts')}`));
               return h('button', {
              key: group.key,
              ref: launcherRefFor(`company:${group.key}`),
              type: 'button',
              className: 'pq-provider-cell', disabled: Boolean(target),
              'aria-label': `${title}. ${routeSummary}. ${hostLabels.length ? hostLabels.join(', ') : t('providerManagerNoHostSummary')}. ${t('providerManagerCompanyCellHint')}`,
              onClick: () => openCompany(group),
            }, h(ProviderIcon, { group }), h('span', { className: 'pq-provider-cell-main' }, h('strong', { className: 'pq-provider-cell-title' }, title), h('span', { className: 'pq-muted' }, routeSummary), h('span', { className: 'pq-provider-cell-hosts' }, ...hostNodes), h('span', { className: 'pq-muted' }, t('providerManagerCompanyCellHint'))), h('span', { className: 'pq-provider-cell-chevron', 'aria-hidden': true }, '›')); })) : null,
            !selectedCompany && unsupported.length ? h('p', { className: 'pq-manager-note' }, `${t('providerManagerAdvanced')} ${unsupported.map(row => row.entry.provider).join(', ')}`) : null,
            !selectedCompany && supported.length && !addable.length && state.writable ? h('p', { className: 'pq-manager-note' }, t('providerManagerNoAddable')) : null);
        }
        function ProviderKeyHelp({ text, label, disabled }) {
          const [hovered, setHovered] = React.useState(false);
          const [focused, setFocused] = React.useState(false);
          const [pinned, setPinned] = React.useState(false);
          const wrapperRef = React.useRef(null);
          const hideTimer = React.useRef(null);
          const tooltipId = React.useId();
          const clearHide = () => { if (hideTimer.current !== null) clearTimeout(hideTimer.current); hideTimer.current = null; };
          const close = () => { clearHide(); setHovered(false); setFocused(false); setPinned(false); };
          const open = !disabled && (hovered || focused || pinned);
          React.useEffect(() => () => clearHide(), []);
          React.useEffect(() => { if (disabled) close(); }, [disabled]);
          React.useEffect(() => {
            if (!open) return;
            const outside = event => { if (!wrapperRef.current?.contains(event.target)) close(); };
            const escape = event => { if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(); } };
            document.addEventListener('pointerdown', outside, true);
            document.addEventListener('keydown', escape, true);
            return () => { document.removeEventListener('pointerdown', outside, true); document.removeEventListener('keydown', escape, true); };
          }, [open]);
          return h('span', { ref: wrapperRef, className: 'pq-key-help-wrap',
            onPointerEnter: () => { clearHide(); setHovered(true); },
            onPointerLeave: () => { clearHide(); hideTimer.current = setTimeout(() => { hideTimer.current = null; setHovered(false); }, 180); } },
            h('button', { type: 'button', className: 'pq-manager-key-help', disabled, 'aria-label': label, 'aria-describedby': open ? tooltipId : undefined, 'aria-expanded': open,
              onFocus: () => { clearHide(); setFocused(true); }, onBlur: event => { if (!wrapperRef.current?.contains(event.relatedTarget)) { setFocused(false); setPinned(false); } },
              onClick: () => { clearHide(); if (pinned) close(); else setPinned(true); } }, '?'),
            open ? h('span', { id: tooltipId, className: 'pq-key-help-tooltip', role: 'tooltip', onPointerEnter: () => { clearHide(); setHovered(true); } }, text) : null);
        }
        function ProviderDiscoveryDialog({ titleId, onDismiss, onFailure, triggerRef, fallbackRef, children }) {
          const dialogRef = React.useRef(null);
          const dismissRef = React.useRef(onDismiss);
          const closingRef = React.useRef(false);
          dismissRef.current = onDismiss;
          React.useEffect(() => {
            const dialog = dialogRef.current;
            closingRef.current = false;
            if (!dialog) return;
            try { if (!dialog.open) dialog.showModal(); } catch { onFailure?.(); dismissRef.current(); return; }
            return () => {
              closingRef.current = true;
              if (dialog.open) dialog.close();
              const trigger = triggerRef.current;
              if (trigger?.isConnected && !trigger.disabled) trigger.focus({ preventScroll: true });
              else fallbackRef.current?.focus({ preventScroll: true });
            };
          }, []);
          return h('dialog', { ref: dialogRef, className: 'pq-model-dialog', 'aria-modal': true, 'aria-labelledby': titleId,
            onCancel: event => { event.preventDefault(); dismissRef.current(); },
            onClose: event => { if (!closingRef.current && !event.currentTarget.open) dismissRef.current(); },
            onClick: event => { if (event.target !== event.currentTarget) return; const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dismissRef.current(); } },
            h('div', { className: 'pq-model-dialog-content' }, children));
        }
        function ProviderModelReasoning({ row, capability, helpId, fieldRef, invalid, describedBy, onChange }) {
          const field = 'reasoningEfforts';
          const setEntries = entries => onChange({ reasoningEntries: entries, reasoningTouched: true });
          const entries = row.reasoningEntries;
          const modes = [['inherit', 'Inherit'], ['disabled', 'Disabled'], ['custom', 'Custom']];
          const unavailable = Object.keys(entries).filter(level => !capability.levels.includes(level) || capability.levelsOnly && entries[level] !== level);
          return h('fieldset', { className: 'pq-manager-modalities' },
            h('legend', null, t('providerManagerReasoning')),
            h('div', { className: 'pq-manager-field' }, h('select', { ref: fieldRef(field), value: row.reasoningMode, 'aria-label': t('providerManagerReasoning'), 'aria-invalid': invalid(field), 'aria-describedby': [helpId, describedBy(field)].filter(Boolean).join(' '), onChange: event => onChange({ reasoningMode: event.target.value, reasoningTouched: true }) },
              ...modes.map(([value, label]) => h('option', { key: value, value }, t(`providerManagerReasoning${label}`))))),
            h('p', { id: helpId, className: 'pq-manager-note' }, t('providerManagerReasoningHelp')),
            row.reasoningMode === 'custom' ? h('div', null,
              unavailable.length ? h('div', null, h('p', { className: 'pq-manager-note' }, t('providerManagerReasoningUnavailable')),
                ...unavailable.map(level => h('button', { key: level, type: 'button', className: 'pq-button', onClick: () => {
                  const next = { ...entries }; delete next[level]; setEntries(next);
                } }, `${t('providerManagerReasoningRemove')} ${level}`))) : null,
              h('div', { className: 'pq-manager-model-numbers' }, ...capability.levels.map(level => {
              const included = Object.hasOwn(entries, level);
              const blankAllowed = level === 'off' && capability.allowBlankOff;
              return h('div', { key: level }, h('label', { className: 'pq-manager-check' }, h('input', { type: 'checkbox', checked: included, onChange: event => {
                const next = { ...entries };
                if (event.target.checked) next[level] = capability.levelsOnly ? level : blankAllowed ? null : '';
                else delete next[level];
                setEntries(next);
              } }), h('span', null, level)),
              !included || capability.levelsOnly ? null : h('label', { className: 'pq-manager-field' }, h('span', null, `${level} · ${t('providerManagerReasoningWire')}`),
                h('input', { type: 'text', value: typeof entries[level] === 'string' ? entries[level] : '', autoComplete: 'off', spellCheck: false, placeholder: blankAllowed ? t('providerManagerReasoningOffBlank') : level, onChange: event => setEntries({ ...entries, [level]: blankAllowed && !event.target.value.trim() ? null : event.target.value }) })));
              }))) : null);
        }
        function ProviderQuotaNavIcon({ size = 16 }) {
          return h('svg', { width: size, height: size, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.45, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false' },
            h('path', { d: 'M2.8 12.5a6 6 0 1 1 10.4 0ZM8 10l2.7-3.1M4.3 8.2l.8.3M8 5.6v.7M11.7 8.2l-.6.3' }));
        }
        function ProviderModelIcon({ name }) {
          const paths = { drag: 'M6 6h12M6 12h12M6 18h12', right: 'm9 5 7 7-7 7', down: 'm5 9 7 7 7-7', trash: 'M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 10v7M14 10v7', plus: 'M12 5v14M5 12h14' };
          return h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: false }, h('path', { d: paths[name] || paths.right }));
        }
        function ProviderManagerEditor({ manager, target, mode, onBack, onSaved }) {
          React.useSyncExternalStore(callback => ctx.locale.subscribe(callback), () => ctx.locale.getSnapshot());
          const state = useProviderManager(manager);
          const t = ctx.locale.bind(NS);
          const schema = ctx.settingsSchema;
          const namespaceId = target.entry.settingsNs;
          const openedNamespace = target.namespace ?? state.namespaces.get(namespaceId);
          const openedRevision = React.useRef(openedNamespace?.revision);
          const openedProfile = mode === 'custom' ? {} : target.profile ?? {};
          const isNewCustom = mode === 'custom';
          const isCustomRoute = isNewCustom || (target.entry.declared === true && namespaceId === 'llm-pi-ai');
          const [connectionOpen, setConnectionOpen] = React.useState(isCustomRoute);
          const [routeDraft, setRouteDraft] = React.useState(isNewCustom ? '' : target.entry.provider);
          const [displayName, setDisplayName] = React.useState(typeof openedProfile.displayName === 'string' ? openedProfile.displayName : '');
          const [baseURL, setBaseURL] = React.useState(typeof openedProfile.baseURL === 'string' ? openedProfile.baseURL : target.entry.defaultBaseURL ?? '');
          const [protocol, setProtocol] = React.useState(typeof openedProfile.api === 'string' ? openedProfile.api : target.protocolChoices?.[0] ?? '');
          const [keyDraft, setKeyDraft] = React.useState('');
          const nextModelDraftKey = React.useRef(0);
          const makeModelDraft = model => providerModelDraftRow(model, `model-${nextModelDraftKey.current++}`);
          const [modelRows, setModelRows] = React.useState(() => (Array.isArray(openedProfile.models) ? openedProfile.models : []).map(makeModelDraft));
          const [modelQuery, setModelQuery] = React.useState('');
          const [candidateQuery, setCandidateQuery] = React.useState('');
          const [expandedModels, setExpandedModels] = React.useState(() => new Set());
          const [modelDraftNotice, setModelDraftNotice] = React.useState(null);
          const modelFieldRefs = React.useRef(new Map());
          const pendingModelFocus = React.useRef(null);
          const draggedModelKey = React.useRef(null);
          const [modelOrderAnnouncement, setModelOrderAnnouncement] = React.useState('');
          const modelSearchRef = React.useRef(null);
          const addModelButtonRef = React.useRef(null);
          const modelEditorId = React.useId();
          const apiKeyInputId = React.useId();
          const discoveryTitleId = React.useId();
          const fetchModelsButtonRef = React.useRef(null);
          const candidateSearchRef = React.useRef(null);
          const [discoveryOpen, setDiscoveryOpen] = React.useState(false);
          const [useDefaultCatalog, setUseDefaultCatalog] = React.useState(!isNewCustom && target.useDefaultCatalog === true);
          const [catalogChoiceTouched, setCatalogChoiceTouched] = React.useState(false);
          const [modelsTouched, setModelsTouched] = React.useState(false);
          const [baseTouched, setBaseTouched] = React.useState(false);
          const [displayTouched, setDisplayTouched] = React.useState(false);
          const [protocolTouched, setProtocolTouched] = React.useState(false);
          const [busy, setBusy] = React.useState(false);
          const [formError, setFormError] = React.useState(null);
          const [profileCommitted, setProfileCommitted] = React.useState(false);
          const [discoveryBusy, setDiscoveryBusy] = React.useState(false);
          const [discoveryCompleted, setDiscoveryCompleted] = React.useState(false);
          const [discoveryError, setDiscoveryError] = React.useState(false);
          const [candidates, setCandidates] = React.useState([]);
          const [selectedCandidates, setSelectedCandidates] = React.useState(() => new Set());
          const backButtonRef = React.useRef(null);
          const discoveryController = React.useRef(null);
          const profileCommittedRef = React.useRef(false);
          const initialKeyRef = typeof openedProfile.apiKeyEnv === 'string' && openedProfile.apiKeyEnv.trim().length ? openedProfile.apiKeyEnv : undefined;
          const credentialReferenceCommittedRef = React.useRef(Boolean(initialKeyRef));
          const liveNamespace = state.namespaces.get(namespaceId);
          const namespace = liveNamespace ?? openedNamespace;
          const currentRevision = namespace?.revision;
          const stale = !profileCommittedRef.current && Number.isFinite(openedRevision.current) && Number.isFinite(currentRevision) && openedRevision.current !== currentRevision;
          const routeId = isNewCustom ? routeDraft.trim() : target.entry.provider;
          const path = isNewCustom ? ['providers', routeId] : target.path ?? target.entry.settingsPath;
          const schemaRoot = namespace ? schema.rehydrate(namespace.schema) : undefined;
          const profileNode = namespace && path.length && routeId ? schema.nodeAtPath(schemaRoot, path) : undefined;
          const modelNode = namespace && path.length && routeId ? schema.nodeAtPath(schemaRoot, [...path, 'models']) : undefined;
          const keyNode = namespace && path.length && routeId ? schema.nodeAtPath(schemaRoot, [...path, 'apiKeyEnv']) : undefined;
          const baseNode = namespace && path.length && routeId ? schema.nodeAtPath(schemaRoot, [...path, 'baseURL']) : undefined;
          const displayNameNode = namespace && path.length && routeId ? schema.nodeAtPath(schemaRoot, [...path, 'displayName']) : undefined;
          const apiNode = namespace && path.length && routeId ? schema.nodeAtPath(schemaRoot, [...path, 'api']) : undefined;
          const retryNode = namespace && path.length && routeId ? schema.nodeAtPath(schemaRoot, [...path, 'retryPolicy']) : undefined;
          const retryBranches = providerRetryPolicyBranches(retryNode);
          const userRetryPolicy = openedNamespace ? schema.getPath(openedNamespace.user, [...path, 'retryPolicy']) : undefined;
          const inheritedRetryPolicy = namespace ? schema.getPath(namespace.base, [...path, 'retryPolicy']) : undefined;
          const inheritedRetryMode = retryBranches.some(entry => entry.mode === inheritedRetryPolicy?.mode) ? inheritedRetryPolicy.mode : retryBranches[0]?.mode ?? '';
          const [retryMode, setRetryMode] = React.useState(() => userRetryPolicy === undefined ? 'inherit' : typeof userRetryPolicy?.mode === 'string' ? userRetryPolicy.mode : inheritedRetryMode);
          const [retryTouched, setRetryTouched] = React.useState(false);
          const retryModeLabel = value => t(value === 'normal' ? 'providerManagerRetryNormal' : value === 'always' ? 'providerManagerRetryAlways' : value);
          const reasoningCapability = modelNode === undefined ? null : providerReasoningCapabilities(schema.nodeAtPath(modelNode, ['0', 'reasoningEfforts']), typeof openedProfile.api === 'string' || isCustomRoute ? protocol : undefined);
           const modelValue = modelRows.map(providerModelDraftValue);
          const inheritedCatalog = namespace ? schema.getPath(namespace.base, [...path, 'models']) : undefined;
          const shownModelRows = useDefaultCatalog && Array.isArray(inheritedCatalog) ? inheritedCatalog.map((model, index) => providerModelDraftRow(model, `inherited-${index}`)) : modelRows;
          const visibleModelRows = filterProviderModelDraftRows(shownModelRows, modelQuery);
          const visibleCandidates = filterProviderModelDraftRows(candidates, candidateQuery);
          const addedModelIds = new Set(shownModelRows.map(row => row.id.trim()).filter(Boolean));
          const selectedCandidateCount = candidates.filter(model => selectedCandidates.has(model.id) && !addedModelIds.has(model.id)).length;
          const visibleSelectableCandidates = visibleCandidates.map(({ row }) => row).filter(model => !addedModelIds.has(model.id));
          const allVisibleSelected = visibleSelectableCandidates.length > 0 && visibleSelectableCandidates.every(model => selectedCandidates.has(model.id));
          const someVisibleSelected = visibleSelectableCandidates.some(model => selectedCandidates.has(model.id));
          const hasInheritedCatalog = Boolean(namespace && path.length && Array.isArray(schema.getPath(namespace.base, [...path, 'models'])));
          const hasUserCatalog = Boolean(namespace && path.length && schema.hasPath(namespace.user, [...path, 'models']));
          const routeTaken = isNewCustom && !profileCommittedRef.current && routeId.length > 0 && (
            state.entries.some(row => row.entry.provider === routeId)
            || state.registered.some(provider => provider.id === routeId));
          const urlText = baseURL.trim();
          const initialBaseURL = typeof openedProfile.baseURL === 'string' ? openedProfile.baseURL : target.entry.defaultBaseURL ?? '';
          const endpointChanged = !isNewCustom && baseTouched && urlText !== initialBaseURL.trim();
          let urlValid = true;
          if (urlText) {
            try {
              const url = new URL(urlText);
              urlValid = (url.protocol === 'http:' || url.protocol === 'https:') && Boolean(url.hostname) && !url.username && !url.password;
            } catch { urlValid = false; }
          }
          const modelIssue = useDefaultCatalog ? null : providerModelIssue(modelValue, isCustomRoute) ?? providerReasoningIssue(modelRows, reasoningCapability, protocolTouched && protocol !== openedProfile.api);
          const modelFailure = modelIssue?.kind ?? null;
          const customProtocolChoices = target.protocolChoices?.length ? target.protocolChoices : manager.protocolChoices(namespace);
          const protocolRequiresKey = isCustomRoute && protocol === 'google-generative-ai';
          const keyRequired = protocolRequiresKey && !keyDraft.trim() && target.credential?.configured !== true;
          let validationKey = null;
          if (isNewCustom && !validProviderRouteId(routeId)) validationKey = 'providerManagerUiRouteIdInvalid';
          else if (routeTaken) validationKey = 'providerManagerUiRouteIdTaken';
          else if (isCustomRoute && !urlText) validationKey = 'providerManagerUiBaseUrlInvalid';
          else if (!urlValid) validationKey = 'providerManagerUiBaseUrlInvalid';
          else if (isCustomRoute && !protocol) validationKey = 'providerManagerUiProtocolRequired';
          else if (keyRequired) validationKey = 'providerManagerUiKeyRequired';
          else if (modelFailure === 'required') validationKey = 'providerManagerUiModelsRequired';
          else if (modelFailure === 'id') validationKey = 'providerManagerUiModelIdRequired';
          else if (modelFailure === 'duplicate') validationKey = 'providerManagerUiDuplicateModel';
          else if (modelFailure === 'capacity') validationKey = 'providerManagerUiModelCapacityInvalid';
          else if (modelFailure === 'modalities') validationKey = 'providerManagerUiModelModalitiesInvalid';
           else if (modelFailure === 'reasoning') validationKey = 'providerManagerReasoningInvalid';
          else if (modelFailure) validationKey = 'providerManagerUiModelIdRequired';
          if (isCustomRoute && !customProtocolChoices.length) validationKey = 'providerManagerNoCustomNamespace';
          if (retryTouched && retryMode !== 'inherit' && !retryBranches.some(entry => entry.mode === retryMode)) validationKey = 'providerManagerRetryInvalid';
          const keylessNativeAuth = target.entry.nativeAuth?.env?.length === 0 && target.entry.nativeAuth?.oauth;
          const canKey = !keylessNativeAuth && (keyNode !== undefined || credentialReferenceCommittedRef.current);
          const readOnly = !state.writable || state.status !== 'ready' || !liveNamespace;
          const profileDisabled = readOnly || busy || stale || profileCommitted;
          const savedCredential = target.credential?.configured === true;
          const credentialLabel = state.credentialError ? t('providerManagerCredentialUnknown') : t(savedCredential ? 'providerManagerCredentialConfigured' : 'providerManagerCredentialMissing');
          const keyRef = isNewCustom ? (routeId ? `${routeId.toUpperCase().replace(/[^A-Z0-9]+/g, '_')}_API_KEY` : '') : initialKeyRef ?? `${routeId.toUpperCase().replace(/[^A-Z0-9]+/g, '_')}_API_KEY`;
          const modelErrorKey = failure => failure === 'required' ? 'providerManagerUiModelsRequired'
            : failure === 'duplicate' ? 'providerManagerUiDuplicateModel'
              : failure === 'capacity' ? 'providerManagerUiModelCapacityInvalid'
                : failure === 'modalities' ? 'providerManagerUiModelModalitiesInvalid'
                  : failure === 'reasoning' ? 'providerManagerReasoningInvalid'
                     : failure ? 'providerManagerUiModelIdRequired' : null;
          React.useEffect(() => {
            backButtonRef.current?.focus({ preventScroll: true });
          }, []);
          React.useLayoutEffect(() => () => { discoveryController.current?.abort(); }, []);
          function updateModel(index, values) {
            // Keep the edited input mounted even when its ID/name stops matching.
            setModelQuery('');
            setModelRows(current => current.map((row, rowIndex) => rowIndex === index ? { ...row, ...values } : row));
            setModelDraftNotice('providerManagerModelDraftNotice');
            setModelsTouched(true);
            setUseDefaultCatalog(false);
            setFormError(null);
          }
          function revealModel(row, field = 'id') {
            if (!row) return;
            pendingModelFocus.current = `${row.draftKey}:${field}`;
            setModelQuery('');
            setExpandedModels(current => new Set(current).add(row.draftKey));
          }
          React.useEffect(() => {
            const key = pendingModelFocus.current;
            const field = key ? modelFieldRefs.current.get(key) : null;
            if (field) { pendingModelFocus.current = null; field.focus(); }
          }, [modelRows, expandedModels, modelQuery]);
          React.useEffect(() => {
            if (modelIssue?.index === undefined || modelIssue.field === 'id') return;
            const row = modelRows[modelIssue.index];
            if (row) setExpandedModels(current => current.has(row.draftKey) ? current : new Set(current).add(row.draftKey));
          }, [modelIssue?.index, modelIssue?.field, modelRows[modelIssue?.index]?.draftKey]);
          function addManualModel() {
            const inheritedBase = useDefaultCatalog ? shownModelRows.map(row => makeModelDraft(row.source)) : null;
            const row = makeModelDraft({});
            setModelRows(current => [...(inheritedBase ?? current), row]);
            setModelsTouched(true);
            setUseDefaultCatalog(false);
            setModelDraftNotice('providerManagerModelDraftNotice');
            setFormError(null);
            revealModel(row);
          }
          function customizeCatalog() {
            const rows = shownModelRows.map(row => makeModelDraft(row.source));
            setModelRows(rows); setUseDefaultCatalog(false); setCatalogChoiceTouched(true); setModelQuery('');
            setModelDraftNotice('providerManagerModelDraftNotice'); setFormError(null);
            if (rows[0]) pendingModelFocus.current = `${rows[0].draftKey}:id`;
          }
          function restoreCatalog() {
            setUseDefaultCatalog(true); setCatalogChoiceTouched(true); setModelQuery('');
            setExpandedModels(new Set()); setModelDraftNotice('providerManagerModelDraftNotice'); setFormError(null);
          }
          function moveModel(from, to) {
            if (editorDisabled || useDefaultCatalog || modelQuery.trim()) return;
            const next = moveProviderModelDraftRow(modelRows, from, to);
            if (next === modelRows) return;
            pendingModelFocus.current = `${modelRows[from].draftKey}:order`;
            setModelRows(next); setModelsTouched(true); setFormError(null);
            setModelDraftNotice('providerManagerModelDraftNotice');
            setModelOrderAnnouncement(`${modelRows[from].id || from + 1}: ${t('providerManagerModelPosition')} ${to + 1}`);
          }
          function modelDraftFromDiscovery(model) { return makeModelDraft(model); }
          function removeModel(index) {
            const row = modelRows[index];
            setModelRows(current => current.filter((_, rowIndex) => rowIndex !== index));
            setExpandedModels(current => { const next = new Set(current); next.delete(row.draftKey); return next; });
            setModelsTouched(true);
            setModelDraftNotice('providerManagerModelDraftNotice');
            setFormError(null);
            const next = modelRows[index + 1] ?? modelRows[index - 1];
            if (next) revealModel(next); else addModelButtonRef.current?.focus();
          }
          function closeDiscovery() {
            discoveryController.current?.abort();
            setDiscoveryOpen(false); setDiscoveryBusy(false);
            setSelectedCandidates(new Set()); setCandidateQuery('');
            setCandidates([]); setDiscoveryCompleted(false); setDiscoveryError(false);
          }
          React.useEffect(() => {
            if (discoveryOpen && !discoveryBusy) candidateSearchRef.current?.focus();
          }, [discoveryOpen, discoveryBusy]);
          // Discard pending and visible results when the connection draft or configuration changes.
          React.useLayoutEffect(() => {
            if (discoveryOpen) closeDiscovery();
          }, [namespaceId, routeId, baseURL, protocol, keyDraft, currentRevision, profileDisabled]);
          async function discover() {
            if (!namespace || discoveryBusy || profileDisabled) return;
            setDiscoveryOpen(true);
            discoveryController.current?.abort();
            const controller = new AbortController();
            discoveryController.current = controller;
            setDiscoveryBusy(true);
            setDiscoveryCompleted(false);
            setDiscoveryError(false);
            setCandidateQuery('');
            setCandidates([]);
            setSelectedCandidates(new Set());
            const request = {};
            if (!isNewCustom) request.provider = routeId;
            if (urlText) request.baseURL = urlText;
            if (endpointChanged) request.endpointChanged = true;
            if (isCustomRoute && protocol) request.api = protocol;
            const secret = keyDraft.trim();
            if (secret) request.apiKey = secret;
            try {
              const result = await manager.discoverModels(namespaceId, request, controller.signal);
              if (controller.signal.aborted) return;
              if (result.kind !== 'found') { setDiscoveryError(result.reason ?? true); return; }
              setCandidates(dedupeDiscoveredModels(result.models));
              setDiscoveryCompleted({ source: result.source, reason: result.reason, scope: result.scope });
            } catch {
              if (!controller.signal.aborted) setDiscoveryError(true);
            } finally {
              if (!controller.signal.aborted) setDiscoveryBusy(false);
            }
          }
          function appendSelectedCandidates() {
            if (profileDisabled || discoveryBusy || !discoveryOpen) return;
            const currentIds = new Set((useDefaultCatalog ? shownModelRows : modelRows).map(row => row.id.trim()).filter(Boolean));
            const chosen = candidates.filter(model => selectedCandidates.has(model.id) && !currentIds.has(model.id));
            if (!chosen.length) { setFormError('providerManagerUiNoSelected'); return; }
            const inheritedBase = useDefaultCatalog ? shownModelRows.map(row => makeModelDraft(row.source)) : null;
            const added = chosen.map(modelDraftFromDiscovery);
            setModelRows(current => [...(inheritedBase ?? current), ...added]);
            setModelDraftNotice('providerManagerModelDraftNotice');
            setCandidateQuery('');
            revealModel(added[0]);
            setModelsTouched(true);
            setUseDefaultCatalog(false);
            setCandidates([]);
            setSelectedCandidates(new Set());
            setDiscoveryCompleted(false);
            setDiscoveryOpen(false);
            setFormError(null);
          }
          function addFieldOperation(ops, field, nextValue, touched) {
            if (!touched || !namespace || path.length === 0) return;
            const fieldPath = [...path, field];
            if (schema.nodeAtPath(schemaRoot, fieldPath) === undefined) return;
            const userHas = schema.hasPath(namespace.user, fieldPath);
            const currentValue = schema.getPath(namespace.value, fieldPath);
            const inheritedValue = schema.getPath(namespace.base, fieldPath);
            if (nextValue === undefined) {
              if (userHas) ops.push({ op: 'unset', path: fieldPath });
              return;
            }
            const same = (left, right) => {
              try { return JSON.stringify(left) === JSON.stringify(right); } catch { return left === right; }
            };
            if (same(nextValue, currentValue)) return;
            if (userHas && same(nextValue, inheritedValue)) ops.push({ op: 'unset', path: fieldPath });
            else ops.push({ op: 'set', path: fieldPath, value: nextValue });
          }
          async function save() {
            if (busy || readOnly || stale || validationKey) return;
            if (!profileCommittedRef.current && !isNewCustom && profileNode === undefined) { setFormError('providerManagerSaveFailed'); return; }
            const typedKey = keyDraft.trim();
            const ops = [];
            const nextModels = useDefaultCatalog ? undefined : modelValue;
            if (!profileCommittedRef.current) {
              if (isNewCustom) {
                const profile = {
                  ...(displayName.trim() ? { displayName: displayName.trim() } : {}),
                  ...(typedKey ? { apiKeyEnv: keyRef } : {}),
                  api: protocol,
                  baseURL: urlText,
                  models: modelValue,
                  ...(retryTouched && retryMode !== 'inherit' ? { retryPolicy: { mode: retryMode } } : {}),
                };
                if (profileNode === undefined || modelNode === undefined || apiNode === undefined || baseNode === undefined) {
                  setFormError('providerManagerSaveFailed');
                  return;
                }
                ops.push({ op: 'set', path, value: profile });
              } else {
                const shouldSetModels = !useDefaultCatalog && (modelsTouched || catalogChoiceTouched || mode === 'create');
                if (useDefaultCatalog && hasInheritedCatalog && hasUserCatalog && catalogChoiceTouched) {
                  ops.push({ op: 'unset', path: [...path, 'models'] });
                } else if (shouldSetModels) addFieldOperation(ops, 'models', nextModels, true);
                if (baseTouched) addFieldOperation(ops, 'baseURL', urlText || undefined, true);
                if (retryTouched && retryNode !== undefined) ops.push(...providerRetryPolicyOperations(userRetryPolicy, retryMode, retryNode, [...path, 'retryPolicy']));
                if (isCustomRoute && protocolTouched) addFieldOperation(ops, 'api', protocol || undefined, true);
                if (isCustomRoute && displayTouched) addFieldOperation(ops, 'displayName', displayName.trim() || undefined, true);
                const currentProfile = target.profile ?? {};
                if (typedKey && !(typeof currentProfile.apiKeyEnv === 'string' && currentProfile.apiKeyEnv.trim().length)) {
                  if (keyNode === undefined) { setFormError('providerManagerCredentialFieldUnavailable'); return; }
                  ops.push({ op: 'set', path: [...path, 'apiKeyEnv'], value: keyRef });
                }
              }
            }
            if (!ops.length && !typedKey) { setFormError('providerManagerUiNothingToSave'); return; }
            setBusy(true);
            setFormError(null);
            try {
              if (ops.length) {
                const result = await manager.writeSettings(namespaceId, ops, openedRevision.current);
                if (result.kind !== 'written') {
                  setFormError(result.kind === 'conflict' ? 'providerManagerConflict' : 'providerManagerSaveFailed');
                  if (result.kind === 'conflict') void manager.load();
                  return;
                }
                openedRevision.current = result.view.revision;
                profileCommittedRef.current = true;
                setProfileCommitted(true);
                if (typedKey) credentialReferenceCommittedRef.current = true;
              }
              if (typedKey) {
                if (!canKey && (keylessNativeAuth || !credentialReferenceCommittedRef.current)) { setFormError('providerManagerCredentialFieldUnavailable'); return; }
                const stored = await manager.storeCredential(keyRef, typedKey);
                if (!stored) {
                  setFormError(profileCommittedRef.current ? 'providerManagerCredentialSaveFailed' : 'providerManagerUiCredentialWriteFailed');
                  return;
                }
                setKeyDraft('');
              }
              await onSaved();
            } finally {
              setBusy(false);
            }
          }
          const hasChanges = isNewCustom || baseTouched || displayTouched || protocolTouched || modelsTouched || catalogChoiceTouched || retryTouched || keyDraft.trim().length > 0;
          const saveDisabled = busy || readOnly || stale || Boolean(validationKey) || !hasChanges || (isCustomRoute && profileNode === undefined && !profileCommittedRef.current);
          const editorDisabled = profileDisabled;
          const urlInvalid = Boolean(urlText) && !urlValid;
          React.useEffect(() => { if (urlInvalid || modelFailure) setConnectionOpen(true); }, [urlInvalid, modelFailure]);
          return h('section', { className: 'pq-manager pq-manager-editor pq-manager-inline-editor', 'aria-label': target.entry.displayName || t('providerManagerTitle') },
            h('h3', { ref: backButtonRef, tabIndex: -1, className: 'pq-manager-inline-title' }, isNewCustom ? t('providerManagerCustom') : displayName.trim() || target.entry.displayName || target.entry.provider),
            stale ? h('div', { className: 'pq-manager-error', role: 'alert' },
              h('p', null, t('providerManagerChanged')),
              h('button', { type: 'button', className: 'pq-button', disabled: busy, onClick: async () => { await manager.load(); onBack(); } }, t('providerManagerDiscardReload'))) : null,
            formError ? h('p', { className: 'pq-manager-error', role: 'alert' }, t(formError)) : null,
            readOnly ? h('div', { className: 'pq-manager-alert', role: 'status' }, h('p', null, t('providerManagerReadOnly')), h('button', { type: 'button', className: 'pq-button', disabled: busy || state.status === 'loading', onClick: () => { void manager.load(); } }, t('providerManagerRefresh'))) : null,
             h('section', { className: 'pq-manager-form-section', 'aria-label': t('providerManagerAuthentication') },
               keylessNativeAuth ? h('p', { className: 'pq-manager-note' }, t('providerManagerNativeAuth')) : null,
            canKey ? h('div', { className: 'pq-manager-field' }, h('div', { className: 'pq-manager-key-label' }, h('label', { htmlFor: apiKeyInputId }, t(protocolRequiresKey ? 'providerManagerUiApiKeyRequiredLabel' : 'providerManagerUiApiKeyLabel')), h(ProviderKeyHelp, { label: t('providerManagerKeyHelp'), text: `${t('providerManagerCredentialHelp')} ${t('providerManagerCredentialClearHelp')}`, disabled: discoveryOpen })),
              h('input', { id: apiKeyInputId, type: 'password', value: keyDraft, autoComplete: 'new-password', className: savedCredential && !keyDraft ? 'pq-manager-key-preview' : undefined, placeholder: providerCredentialPlaceholder(target.credential, t('providerManagerApiKeyPlaceholder')), disabled: readOnly || busy || stale, 'aria-invalid': keyRequired, onChange: event => { setKeyDraft(event.target.value); setFormError(null); } }),
              h('span', { className: savedCredential && !keyDraft && !state.credentialError ? 'pq-manager-note pq-manager-saved-note' : 'pq-manager-note' }, keyDraft.trim() ? t('providerManagerNewKeyDraft') : credentialLabel)) : null,
            keyRequired ? h('p', { className: 'pq-manager-error', role: 'alert' }, t('providerManagerUiKeyRequired')) : null,
            !canKey && !keylessNativeAuth ? h('p', { className: 'pq-manager-note' }, t('providerManagerCredentialFieldUnavailable')) : null),
             h('details', { className: 'pq-manager-connection', open: connectionOpen, onToggle: event => setConnectionOpen(event.currentTarget.open) },
               h('summary', null, t('providerManagerConnectionSettings')),
               h('div', { className: 'pq-manager-connection-fields' },
            isNewCustom ? h('label', { className: 'pq-manager-field' }, h('span', null, t('providerManagerUiRouteIdLabel')),
              h('input', { type: 'text', value: routeDraft, autoComplete: 'off', placeholder: 'acme-gateway', disabled: editorDisabled, 'aria-invalid': validationKey === 'providerManagerUiRouteIdInvalid' || validationKey === 'providerManagerUiRouteIdTaken', onChange: event => { setRouteDraft(event.target.value); setFormError(null); } })) : null,
            isNewCustom && validationKey === 'providerManagerUiRouteIdInvalid' ? h('p', { className: 'pq-manager-error', role: 'alert' }, t('providerManagerUiRouteIdInvalid')) : null,
            isNewCustom && validationKey === 'providerManagerUiRouteIdTaken' ? h('p', { className: 'pq-manager-error', role: 'alert' }, t('providerManagerUiRouteIdTaken')) : null,
            isCustomRoute ? h('label', { className: 'pq-manager-field' }, h('span', null, t('providerManagerUiDisplayNameLabel')),
              h('input', { type: 'text', value: displayName, autoComplete: 'off', placeholder: routeId || t('providerManagerUiDisplayNameLabel'), disabled: editorDisabled || displayNameNode === undefined, onChange: event => { setDisplayName(event.target.value); setDisplayTouched(true); setFormError(null); } })) : null,
            isCustomRoute ? h('label', { className: 'pq-manager-field' }, h('span', null, t('providerManagerUiProtocolLabel')),
              h('select', { value: protocol, disabled: editorDisabled || apiNode === undefined, 'aria-invalid': !protocol || apiNode === undefined, onChange: event => { setProtocol(event.target.value); setProtocolTouched(true); setFormError(null); } },
                h('option', { value: '' }, t('providerManagerUiProtocolRequired')),
                ...customProtocolChoices.map(choice => h('option', { key: choice, value: choice }, choice)))) : null,
            isCustomRoute && (!protocol || apiNode === undefined) ? h('p', { className: 'pq-manager-error', role: 'alert' }, t(apiNode === undefined ? 'providerManagerNoCustomNamespace' : 'providerManagerUiProtocolRequired')) : null,
            baseNode !== undefined || isNewCustom ? h('label', { className: 'pq-manager-field' }, h('span', null, t('providerManagerUiBaseUrlLabel')),
              h('input', { type: 'url', value: baseURL, autoComplete: 'url', placeholder: target.entry.defaultBaseURL || 'https://api.example.com/v1', disabled: editorDisabled || (!isNewCustom && baseNode === undefined), 'aria-invalid': isCustomRoute && (!urlText || !urlValid), onChange: event => { setBaseURL(event.target.value); setBaseTouched(true); setFormError(null); } })) : null,
            isCustomRoute && (!urlText || urlInvalid) ? h('p', { className: 'pq-manager-error', role: 'alert' }, t('providerManagerUiBaseUrlInvalid')) : null,
             retryBranches.length ? h('label', { className: 'pq-manager-field pq-manager-retry-field' }, h('span', null, t('providerManagerRetryPolicy')),
               h('select', { value: retryMode, disabled: editorDisabled, onChange: event => { setRetryMode(event.target.value); setRetryTouched(true); setFormError(null); } },
                 h('option', { value: 'inherit' }, `${t('providerManagerRetryDefault')} (${retryModeLabel(inheritedRetryMode)})`),
                 ...retryBranches.map(({ mode: value }) => h('option', { key: value, value }, retryModeLabel(value))),
                 retryMode !== 'inherit' && !retryBranches.some(entry => entry.mode === retryMode) ? h('option', { value: retryMode, disabled: true }, t('providerManagerRetryCurrent')) : null)) : null,
             retryMode === 'always' || retryMode === 'inherit' && inheritedRetryMode === 'always' ? h('p', { className: 'pq-manager-note' }, t('providerManagerRetryAlwaysHint')) : null,
            !isCustomRoute && typeof target.entry.defaultBaseURL === 'string' && !baseURL ? h('p', { className: 'pq-manager-note' }, t('providerManagerAdvanced')) : null),
            modelNode !== undefined ? h('section', { className: 'pq-manager-model-section', 'aria-label': t('providerManagerModels') },
              h('div', { className: 'pq-manager-model-heading' }, h('div', null, h('h4', null, t('providerManagerModels'), h('span', { className: 'pq-manager-model-count' }, ` · ${shownModelRows.length}`)), hasInheritedCatalog || hasUserCatalog ? h('span', { className: 'pq-manager-note' }, t(useDefaultCatalog ? 'providerManagerCatalogInherited' : 'providerManagerCatalogCustomized')) : null),
                h('div', { className: 'pq-manager-catalog-actions' }, hasInheritedCatalog ? h('button', { type: 'button', className: 'pq-manager-link', disabled: editorDisabled, onClick: useDefaultCatalog ? customizeCatalog : restoreCatalog }, t(useDefaultCatalog ? 'providerManagerCustomizeModels' : 'providerManagerRestoreModels')) : null, h('button', { type: 'button', className: 'pq-manager-link', ref: fetchModelsButtonRef, 'aria-describedby': `${discoveryTitleId}-help`, disabled: editorDisabled || discoveryBusy || !namespace, onClick: () => { void discover(); } }, t(discoveryBusy ? 'providerManagerUiDiscovering' : 'providerManagerFetchModels')))),
              h('p', { id: `${discoveryTitleId}-help`, className: 'pq-manager-note' }, t('providerManagerUiDiscoveryHelp')),
              modelFailure ? h('div', { className: 'pq-manager-model-error' }, h('p', { id: modelIssue?.index !== undefined ? 'pq-model-validation-error' : undefined, className: 'pq-manager-error', role: 'alert' }, t(modelErrorKey(modelFailure))), modelIssue?.index !== undefined ? h('button', { type: 'button', className: 'pq-button', onClick: () => revealModel(modelRows[modelIssue.index], modelIssue.field) }, t('providerManagerModelLocateError')) : null) : null,
               shownModelRows.length > 5 || modelQuery ? h('div', { className: 'pq-manager-model-toolbar' },
                 h('label', { className: 'pq-manager-filter' }, h('span', { className: 'pq-sr-only' }, t('providerManagerModelSearch')),
                   h('input', { ref: modelSearchRef, type: 'search', value: modelQuery, maxLength: 200, autoComplete: 'off', placeholder: t('providerManagerModelSearch'), onChange: event => setModelQuery(event.target.value.slice(0, 200)) })),
                 modelQuery ? h('button', { type: 'button', className: 'pq-button', onClick: () => { setModelQuery(''); modelSearchRef.current?.focus(); } }, t('providerManagerCompanySearchClear')) : null,
                 h('span', { className: 'pq-manager-note', role: 'status', 'aria-live': 'polite' }, `${visibleModelRows.length} / ${shownModelRows.length}`)) : null,
               visibleModelRows.length ? h('div', { className: 'pq-manager-model-list' }, ...visibleModelRows.map(({ row, index }) => {
                 const invalid = field => modelIssue?.index === index && modelIssue.field === field;
                 const describedBy = field => invalid(field) ? 'pq-model-validation-error' : undefined;
                 const expanded = expandedModels.has(row.draftKey);
                 const disabled = editorDisabled || useDefaultCatalog;
                 const advancedId = `${modelEditorId}-${row.draftKey}-advanced`;
                 const fieldRef = field => element => { const key = `${row.draftKey}:${field}`; if (element) modelFieldRefs.current.set(key, element); else modelFieldRefs.current.delete(key); };
                 return h('fieldset', { key: row.draftKey, className: 'pq-manager-model', 'data-row-key': row.draftKey,
                   onDragOver: event => { if (draggedModelKey.current && !disabled && !modelQuery.trim()) { event.preventDefault(); event.dataTransfer.dropEffect = 'move'; } },
                   onDrop: event => { if (!draggedModelKey.current || disabled || modelQuery.trim()) return; event.preventDefault(); const from = modelRows.findIndex(model => model.draftKey === draggedModelKey.current); const to = modelRows.findIndex(model => model.draftKey === row.draftKey); draggedModelKey.current = null; moveModel(from, to); } },
                   h('legend', { className: 'pq-sr-only' }, t('providerManagerUiModelRow').replace('{n}', String(index + 1))),
                   h('div', { className: 'pq-manager-model-row', 'data-expanded': expanded ? 'true' : undefined },
                     h('button', { ref: fieldRef('order'), type: 'button', className: 'pq-button pq-model-icon pq-manager-model-order', disabled: disabled || Boolean(modelQuery.trim()), draggable: !disabled && !modelQuery.trim(), title: t(modelQuery.trim() ? 'providerManagerOrderFiltered' : 'providerManagerModelOrderHelp'), 'aria-label': `${t('providerManagerModelOrder')} ${row.id || index + 1}`, 'aria-keyshortcuts': 'ArrowUp ArrowDown',
                       onKeyDown: event => { if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return; event.preventDefault(); event.stopPropagation(); moveModel(index, index + (event.key === 'ArrowUp' ? -1 : 1)); },
                       onDragStart: event => { if (disabled || modelQuery.trim()) { event.preventDefault(); return; } draggedModelKey.current = row.draftKey; event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('application/x-pq-model-draft', row.draftKey); }, onDragEnd: () => { draggedModelKey.current = null; } }, h(ProviderModelIcon, { name: 'drag' })),
                     h('label', { className: 'pq-manager-model-id' }, h('span', { className: 'pq-sr-only' }, t('providerManagerUiModelIdLabel')),
                       h('input', { ref: fieldRef('id'), type: 'text', value: row.id, required: true, disabled, autoComplete: 'off', spellCheck: false, placeholder: t('providerManagerUiModelIdLabel'), 'aria-invalid': invalid('id'), 'aria-describedby': describedBy('id'), onChange: event => updateModel(index, { id: event.target.value }) })),
                     h('label', { className: 'pq-manager-model-name' }, h('span', { className: 'pq-manager-model-name-label' }, t('providerManagerUiModelNameLabel')),
                       h('input', { ref: fieldRef('name'), type: 'text', value: row.name, disabled, autoComplete: 'off', placeholder: t('providerManagerUiModelNameLabel'), onChange: event => updateModel(index, { name: event.target.value, nameTouched: true }) })),
                     h('button', { type: 'button', className: 'pq-button pq-model-icon pq-manager-model-toggle', title: t('providerManagerModelAdvanced'), 'aria-expanded': expanded, 'aria-controls': advancedId, 'aria-label': `${t('providerManagerModelAdvanced')} ${row.id || index + 1}`, onClick: () => setExpandedModels(current => { const next = new Set(current); if (next.has(row.draftKey)) next.delete(row.draftKey); else next.add(row.draftKey); return next; }) }, h(ProviderModelIcon, { name: expanded ? 'down' : 'right' })),
                     h('button', { type: 'button', className: 'pq-button pq-model-icon pq-manager-danger pq-manager-remove-model', title: t('providerManagerUiRemoveModel'), disabled, 'aria-label': `${t('providerManagerUiRemoveModel')} ${row.id || index + 1}`, onClick: () => removeModel(index) }, h(ProviderModelIcon, { name: 'trash' }))),
                   h('fieldset', { id: advancedId, className: 'pq-manager-model-advanced', hidden: !expanded, disabled },
                     h('legend', { className: 'pq-sr-only' }, t('providerManagerModelAdvanced')),
                     h('div', { className: 'pq-manager-model-numbers' },
                       h('label', { className: 'pq-manager-field' }, h('span', null, t('providerManagerUiContextWindowLabel')),
                         h('input', { ref: fieldRef('contextWindow'), type: 'text', inputMode: 'numeric', value: row.contextWindow, 'aria-invalid': invalid('contextWindow'), 'aria-describedby': describedBy('contextWindow'), onChange: event => updateModel(index, { contextWindow: event.target.value, contextTouched: true }) })),
                       h('label', { className: 'pq-manager-field' }, h('span', null, t('providerManagerUiMaxTokensLabel')),
                         h('input', { ref: fieldRef('maxTokens'), type: 'text', inputMode: 'numeric', value: row.maxTokens, 'aria-invalid': invalid('maxTokens'), 'aria-describedby': describedBy('maxTokens'), onChange: event => updateModel(index, { maxTokens: event.target.value, maxTokensTouched: true }) }))),
                     h('fieldset', { ref: fieldRef('input'), tabIndex: -1, className: 'pq-manager-modalities', 'aria-invalid': invalid('input'), 'aria-describedby': describedBy('input') }, h('legend', null, t('providerManagerUiModalitiesLabel')),
                       ...PROVIDER_INPUT_MODALITIES.map(modality => h('label', { key: modality, className: 'pq-manager-check' },
                         h('input', { type: 'checkbox', checked: row.modalities.includes(modality), onChange: event => {
                           const modalities = event.target.checked ? [...new Set([...row.modalities, modality])] : row.modalities.filter(value => value !== modality);
                           updateModel(index, { modalities, inputTouched: true });
                         } }), h('span', null, t(`providerManagerUiInput${modality[0].toUpperCase()}${modality.slice(1)}`))))),
                      reasoningCapability ? h(ProviderModelReasoning, { row, capability: reasoningCapability, helpId: `${advancedId}-reasoning-help`, fieldRef, invalid, describedBy, onChange: values => updateModel(index, values) }) : null));
               })) : h('p', { className: 'pq-manager-note', role: 'status' }, modelQuery ? t('providerManagerModelSearchEmpty') : useDefaultCatalog ? t('providerManagerUiDefaultCatalogNote') : t('providerManagerUiNoModelsYet')),
               modelDraftNotice ? h('p', { className: 'pq-manager-note', role: 'status' }, t(modelDraftNotice)) : null,
               modelOrderAnnouncement ? h('p', { className: 'pq-sr-only', role: 'status' }, modelOrderAnnouncement) : null,
              h('button', { type: 'button', className: 'pq-button', ref: addModelButtonRef, disabled: editorDisabled, onClick: addManualModel }, h(ProviderModelIcon, { name: 'plus' }), t('providerManagerAddModel'))) : h('p', { className: 'pq-manager-note' }, t('providerManagerAdvanced')),
             ),
            h('div', { className: 'pq-manager-actions pq-manager-footer' },
              h('button', { type: 'button', className: 'pq-button', disabled: busy, onClick: onBack }, t('providerManagerCancel')),
              h('button', { type: 'button', className: 'pq-button pq-manager-primary', disabled: saveDisabled, onClick: () => { void save(); } }, t(busy ? 'providerManagerSaving' : 'providerManagerSave'))),
            discoveryOpen ? h(ProviderDiscoveryDialog, { titleId: discoveryTitleId, onDismiss: closeDiscovery, onFailure: () => { closeDiscovery(); setFormError('providerManagerDialogUnavailable'); }, triggerRef: fetchModelsButtonRef, fallbackRef: backButtonRef },
              h('header', { className: 'pq-model-dialog-header' }, h('h3', { id: discoveryTitleId }, t('providerManagerFetchModels')),
                h('button', { type: 'button', className: 'pq-button pq-model-dialog-close', 'aria-label': t('providerManagerCloseDiscovery'), onClick: closeDiscovery }, '×')),
              h('div', { className: 'pq-model-dialog-toolbar' },
                h('label', { className: 'pq-manager-filter' }, h('span', { className: 'pq-sr-only' }, t('providerManagerCandidateSearch')),
                  h('input', { ref: candidateSearchRef, type: 'search', value: candidateQuery, maxLength: 200, autoComplete: 'off', disabled: discoveryBusy, placeholder: t('providerManagerCandidateSearch'), onChange: event => setCandidateQuery(event.target.value.slice(0, 200)) })),
                h('div', { className: 'pq-model-dialog-selection' },
                  h('label', { className: 'pq-manager-check' }, h('input', { type: 'checkbox', ref: element => { if (element) element.indeterminate = someVisibleSelected && !allVisibleSelected; }, checked: allVisibleSelected, disabled: profileDisabled || discoveryBusy || !visibleSelectableCandidates.length,
                    onChange: event => { const selected = event.target.checked; setSelectedCandidates(current => selectVisibleProviderCandidates(current, visibleCandidates.map(({ row }) => row), addedModelIds, selected)); } }), h('span', null, t('providerManagerSelectVisible'))),
                  h('span', { className: 'pq-manager-note', role: 'status', 'aria-live': 'polite' }, `${visibleCandidates.length} / ${candidates.length} · ${t('providerManagerCandidatesSelected')} ${selectedCandidateCount}`))),
              h('div', { className: 'pq-model-dialog-body', 'aria-busy': discoveryBusy },
                profileDisabled ? h('p', { className: 'pq-manager-alert', role: 'status' }, t(stale ? 'providerManagerChanged' : 'providerManagerReadOnly')) : null,
                discoveryCompleted?.source ? h('p', { className: 'pq-manager-note', role: 'status' }, t(PROVIDER_DISCOVERY_SOURCE[discoveryCompleted.source]), discoveryCompleted.scope ? ` · ${t(PROVIDER_DISCOVERY_SCOPE[discoveryCompleted.scope])}` : null, discoveryCompleted.reason ? ` · ${t(PROVIDER_DISCOVERY_FALLBACK[discoveryCompleted.reason])}` : null) : null,
                discoveryBusy ? h('p', { className: 'pq-manager-note', role: 'status' }, t('providerManagerUiDiscovering')) : discoveryError ? h('div', { className: 'pq-manager-error', role: 'alert' }, h('p', null, t(PROVIDER_DISCOVERY_ERROR[discoveryError] ?? 'providerManagerUiDiscoveryFailed')),
                  h('button', { type: 'button', className: 'pq-button', disabled: profileDisabled, onClick: () => { void discover(); } }, t('providerManagerRetryDiscovery'))) : !candidates.length ? h('p', { className: 'pq-manager-note', role: 'status' }, (discoveryCompleted?.source === 'live' ? t('providerManagerDiscoveryEmptyLive') : t(discoveryCompleted ? 'providerManagerUiDiscoveryNone' : 'providerManagerUiDiscoveryHelp'))) : !visibleCandidates.length ? h('p', { className: 'pq-manager-note', role: 'status' }, t('providerManagerModelSearchEmpty')) :
                  h('div', { className: 'pq-manager-candidate-list pq-model-dialog-candidates' }, ...visibleCandidates.map(({ row: model }) => {
                    const alreadyAdded = addedModelIds.has(model.id);
                    return h('label', { key: model.id, className: 'pq-manager-candidate' },
                      h('input', { type: 'checkbox', checked: alreadyAdded || selectedCandidates.has(model.id), disabled: alreadyAdded || profileDisabled || discoveryBusy, onChange: event => {
                        setSelectedCandidates(current => { const next = new Set(current); if (event.target.checked) next.add(model.id); else next.delete(model.id); return next; });
                      } }), h('span', null, h('code', null, model.id), model.name ? h('span', null, model.name) : null, alreadyAdded ? h('small', null, t('providerManagerConfigured')) : null));
                  }))),
              h('footer', { className: 'pq-model-dialog-footer' }, h('p', { className: 'pq-manager-note' }, t('providerManagerDiscoveryDraftHint')),
                h('div', { className: 'pq-manager-actions' }, h('button', { type: 'button', className: 'pq-button', onClick: closeDiscovery }, t('providerManagerCancel')),
                  h('button', { type: 'button', className: 'pq-button pq-manager-primary', disabled: profileDisabled || discoveryBusy || selectedCandidateCount === 0, onClick: appendSelectedCandidates }, `${t('providerManagerUiAddSelected')} (${selectedCandidateCount})`)))) : null);
        }
        function ProviderSettings({ rows, loading, error, colorThresholds }) {
          React.useSyncExternalStore(callback => ctx.locale.subscribe(callback), () => ctx.locale.getSnapshot());
          const [selectedKey, setSelectedKey] = React.useState(null);
          const viewFocusRef = React.useRef(null); const previousSelectedKey = React.useRef(selectedKey);
          const groups = COMPANY_FILTERS.flatMap(option => {
            const routes = rows.filter(row => providerCompany(row) === option.key);
            if (option.key === 'other') return routes.map(row => ({ ...option, key: `other:${row.id}`, title: providerName(row), routes: [row] }));
            return routes.length ? [{ ...option, routes }] : [];
          });
          const selected = groups.find(group => group.key === selectedKey);
          React.useEffect(() => { if (previousSelectedKey.current !== selectedKey) { previousSelectedKey.current = selectedKey; viewFocusRef.current?.focus({ preventScroll: true }); } }, [selectedKey]);
          if (selected) {
            const adminRoutes = selected.routes.filter(row => row.kind === 'openai');
            const codexRoutes = selected.key === 'openai' ? selected.routes.filter(row => row.kind === 'codex') : [];
            const teamPlanRoutes = selected.key === 'glm' ? selected.routes.filter(row => row.kind === 'glm-cn' || row.kind === 'zai-coding-plan') : [];
            return h('section', { className: 'pq-provider-settings' },
              h('button', { type: 'button', className: 'pq-button pq-provider-back', ref: viewFocusRef, onClick: () => setSelectedKey(null) }, `‹ ${t('providerSettingsBack')}`),
              h('h3', { className: 'pq-provider-detail-title' }, selected.title || t(selected.label)),
              h('p', { className: 'pq-muted' }, t('providerSettingsIntro')),
              h('h4', { className: 'pq-provider-routes-title' }, `${t('providerRoutes')} (${selected.routes.length})`),
              ...selected.routes.map(row => h('section', { key: row.id, className: 'pq-provider-route' },
                h('div', { className: 'pq-provider-route-heading' }, h('strong', null, providerName(row)), h('code', null, row.id)),
                h(Row, { row, loading, compact: true, colorThresholds }))),
              codexRoutes.length ? h(CodexAuthorizationPanel) : null,
              adminRoutes.length ? h('section', { className: 'pq-provider-extra-settings' },
                h('h4', { className: 'pq-provider-routes-title' }, t('providerAdditionalSettings')),
                h(OpenAIExtraSettings, { routes: adminRoutes }))
                : teamPlanRoutes.length ? h('section', { className: 'pq-provider-extra-settings' },
                  h('h4', { className: 'pq-provider-routes-title' }, t('providerAdditionalSettings')),
                  h(GlmTeamPlanSettings, { routes: teamPlanRoutes }))
                : codexRoutes.length ? null : h('p', { className: 'pq-note' }, t('providerSettingsNoExtra')));
          }
          return h('section', { className: 'pq-provider-settings' },
            h('h3', { ref: viewFocusRef, tabIndex: -1, className: 'pq-provider-detail-title' }, t('providerSettingsTitle')),
            h('p', { className: 'pq-muted' }, t('providerSettingsIntro')),
            groups.length ? h('div', { className: 'pq-provider-cell-list' }, ...groups.map(group => h('button', {
              type: 'button', key: group.key, className: 'pq-provider-cell', onClick: () => setSelectedKey(group.key),
              'aria-label': `${(group.title || t(group.label))}, ${group.routes.length} ${t('providerRoutes')}, ${providerGroupSummary(group)}`,
            }, h(ProviderIcon, { group }), h('span', { className: 'pq-provider-cell-main' }, h('strong', { className: 'pq-provider-cell-title' }, (group.title || t(group.label))), h('span', { className: 'pq-muted' }, `${group.routes.length} ${t('providerRoutes')}`), h('span', { className: 'pq-muted' }, providerGroupSummary(group))), h('span', { className: 'pq-provider-cell-chevron', 'aria-hidden': true }, '›')))) : error ? null : h('p', { role: 'status', className: 'pq-muted' }, t(loading ? 'loading' : 'empty')));
        }
        function Page() {
          const state = useQuota();
          const rows = state.data?.rows ?? [];
          const [tab, setTab] = React.useState('providers');
          const tabRefs = React.useRef({});
          // Provider/model editing lives in DSH's official Models page; this
          // plugin's settings only expose quotas and thresholds.
          const tabs = ['providers', 'colors'];
          const selectTab = setTab;
          React.useEffect(() => { if (!tabs.includes(tab)) selectTab('providers'); }, [tab]);
          const tabKey = event => {
            let target;
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') target = tabs[(tabs.indexOf(tab) + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
            else if (event.key === 'Home') target = tabs[0];
            else if (event.key === 'End') target = tabs[tabs.length - 1];
            if (target) { event.preventDefault(); selectTab(target); tabRefs.current[target]?.focus(); }
          };
          const tabLabel = id => t(id === 'colors' ? 'colorsTab' : 'providerSettingsTab');
          return h('section', { className: 'pq-page', 'aria-label': t('title') }, h('style', null, css),
            h('header', { className: 'pq-top' }, h('div', null, h('h2', null, t('title')), h('div', { className: 'pq-muted' }, t('subtitle'))), tab === 'providers' ? h('button', { type: 'button', className: 'pq-button', disabled: state.loading, onClick: () => load(true) }, t(state.loading ? 'loading' : 'refresh')) : null),
            h('div', { className: 'pq-tabs', role: 'tablist', 'aria-label': t('title'), onKeyDown: tabKey }, ...tabs.map(id => h('button', {
              key: id, id: `pq-tab-${id}`, type: 'button', role: 'tab', className: 'pq-tab',
              ref: node => { tabRefs.current[id] = node; }, 'aria-selected': tab === id, 'aria-controls': `pq-panel-${id}`,
              tabIndex: tab === id ? 0 : -1, onClick: () => selectTab(id),
            }, tabLabel(id)))),
            h('div', { id: 'pq-panel-providers', role: 'tabpanel', 'aria-labelledby': 'pq-tab-providers', className: 'pq-tab-panel', hidden: tab !== 'providers', tabIndex: 0 }, tab === 'providers' ? h(React.Fragment, null,
              state.error ? h('p', { role: 'alert', className: 'pq-error' }, t('serviceError')) : null,
              h(ProviderSettings, { rows, loading: state.loading, error: state.error, colorThresholds: state.data?.colorThresholds })) : null),
            h('div', { id: 'pq-panel-colors', role: 'tabpanel', 'aria-labelledby': 'pq-tab-colors', className: 'pq-tab-panel', hidden: tab !== 'colors', tabIndex: 0 }, tab === 'colors' ? h(QuotaSettings) : null));
        }
        function useClock() {
          const [now, setNow] = React.useState(() => Date.now());
          React.useEffect(() => {
            const update = () => { if (document.visibilityState === 'visible') setNow(Date.now()); };
            const clock = setInterval(update, 15_000);
            document.addEventListener('visibilitychange', update);
            update();
            return () => { clearInterval(clock); document.removeEventListener('visibilitychange', update); };
          }, []);
          return now;
        }
        function formatMonthDay(value) {
          if (!Number.isFinite(value)) return '—';
          try { return new Intl.DateTimeFormat(ctx.locale.getLocale().active, { month: 'long', day: 'numeric' }).format(new Date(value)); }
          catch { return formatQuotaDate(value, { includeYear: false, dateOnly: true }); }
        }
        // Short clock-style countdown (20:57) for the 5-hour window.
        function formatClockCountdown(value, now) {
          if (!Number.isFinite(value) || !Number.isFinite(now)) return '—';
          const minutes = Math.max(0, Math.ceil((value - now) / 60_000));
          if (minutes >= 24 * 60) return formatQuotaCountdown(value, now);
          return `${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, '0')}`;
        }
        function isRollingWindow(metric) { return metric.label === 'rolling' || metric.durationSeconds === 18_000; }
        function remainingOf(metric) { return 100 - Math.min(100, Math.max(0, metric.usedPercent)); }
        // Mirrors DSH's built-in ContextMeter ring (14px, r 5.5, 2px stroke) so the
        // two composer-dock widgets read as one family; only the stroke carries
        // the quota tone.
        function QuotaRing({ metric, colorThresholds }) {
          const remaining = remainingOf(metric);
          const tone = quotaBarTone(remaining, colorThresholds);
          const radius = 5.5, circumference = 2 * Math.PI * radius;
          return h('svg', { className: 'pq-ring', viewBox: '0 0 14 14', width: 14, height: 14, 'aria-hidden': true },
            h('circle', { className: 'pq-ring-track', cx: 7, cy: 7, r: radius }),
            h('circle', { className: 'pq-ring-fill', cx: 7, cy: 7, r: radius, stroke: `var(--dsw-alias-state-${tone}-primary)`, strokeDasharray: `${circumference * remaining / 100} ${circumference}`, transform: 'rotate(-90 7 7)' }));
        }
        // One "remaining quota" tile: label, remaining %, reset countdown/date, bar.
        function QuotaTile({ metric, colorThresholds, now }) {
          const remaining = remainingOf(metric);
          const tone = quotaBarTone(remaining, colorThresholds);
          const label = `${metric.model ? `${metric.model} · ` : ''}${t(metric.label)}`;
          const suffix = metric.resetsAt ? (isRollingWindow(metric) ? formatClockCountdown(metric.resetsAt, now) : formatMonthDay(metric.resetsAt)) : null;
          return h('div', { className: 'pq-card-tile' },
            h('div', { className: 'pq-card-label' }, label),
            h('div', { className: 'pq-card-value' }, h('strong', null, `${percent(remaining)}%`), suffix ? h('span', { className: 'pq-card-sub' }, ` · ${suffix}`) : null),
            h('div', { className: 'pq-track pq-card-track', role: 'progressbar', 'aria-label': `${label} · ${t('left')}`, 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': remaining }, h('div', { className: 'pq-fill', style: { width: `${remaining}%`, background: `var(--dsw-alias-state-${tone}-primary)` } })),
            metric.total !== undefined ? h('div', { className: 'pq-card-footnote' }, `${number(metric.remaining ?? Math.max(0, metric.total - (metric.used ?? 0)))} / ${number(metric.total)} ${t(metric.unit)} ${t('left')}`) : null);
        }
        function PopupSurface({ opened }) {
          const state = useQuota();
          const now = useClock();
          const rows = providerRows(state.data?.rows ?? [], opened.provider);
          // Default to the plan that carries quota; the user's choice wins afterwards.
          const [planChoice, setPlanChoice] = React.useState(null);
          const withData = rows.findIndex(item => item.metrics.length > 0);
          const selected = Math.min(planChoice ?? (withData >= 0 ? withData : 0), Math.max(0, rows.length - 1));
          const row = rows[selected];
          const tiles = row ? row.metrics.filter(metric => metric.type === 'quota-window') : [];
          const panelRef = React.useRef(null);
          const [position, setPosition] = React.useState(() => placeQuotaPopup(opened.anchor.getBoundingClientRect(), viewport()));
          React.useLayoutEffect(() => {
            let frame;
            const anchor = opened.anchor;
            const update = () => {
              if (!anchor.isConnected || !anchor.getClientRects().length) { closePopup(false); return; }
              const next = placeQuotaPopup(anchor.getBoundingClientRect(), viewport());
              if (!next) { closePopup(false); return; }
              setPosition(previous => previous && Object.keys(next).every(key => previous[key] === next[key]) ? previous : next);
              frame = window.requestAnimationFrame(update);
            };
            update();
            panelRef.current?.focus({ preventScroll: true });
            const outside = event => {
              if (!panelRef.current?.contains(event.target) && !anchor.contains(event.target)) closePopup(false);
            };
            const escape = event => {
              if (event.key === 'Escape' && !event.isComposing) { event.preventDefault(); event.stopPropagation(); closePopup(true); }
            };
            const hidden = () => { if (document.visibilityState !== 'visible') closePopup(false); };
            document.addEventListener('pointerdown', outside, true);
            document.addEventListener('focusin', outside, true);
            document.addEventListener('keydown', escape, true);
            document.addEventListener('visibilitychange', hidden);
            return () => {
              window.cancelAnimationFrame(frame);
              document.removeEventListener('pointerdown', outside, true);
              document.removeEventListener('focusin', outside, true);
              document.removeEventListener('keydown', escape, true);
              document.removeEventListener('visibilitychange', hidden);
            };
          }, [opened]);
          React.useEffect(() => { if (!row) closePopup(false); }, [row]);
          if (!row || !position) return null;
          const titleId = `${POPUP_ID}-title`;
          return h('section', { id: POPUP_ID, className: 'pq-popup', ref: panelRef, tabIndex: -1, role: 'dialog', 'aria-modal': false, 'aria-labelledby': titleId, style: { left: position.left, top: position.top, width: position.width, maxHeight: position.maxHeight, transform: position.above ? 'translateY(-100%)' : 'none' } },
            h('style', null, css),
            h('header', { className: 'pq-popup-head' },
              h('div', { className: 'pq-popup-title' },
                h('div', { id: titleId, className: 'pq-name' }, tiles.length ? t('remainingQuota') : providerName(row)),
                rows.length > 1 ? h('div', { className: 'pq-seg', role: 'group', 'aria-label': t('planSwitch') }, ...rows.map((item, index) =>
                  h('button', { key: item.id, type: 'button', className: `pq-seg-item${index === selected ? ' is-active' : ''}`, 'aria-pressed': index === selected, onClick: () => setPlanChoice(index) }, t(isTeamPlanKind(item.kind) ? 'teamPlan' : 'personalPlan')))) : null),
              h('div', { className: 'pq-popup-actions' },
                h('button', { className: 'pq-button pq-icon-button', type: 'button', disabled: state.loading, onClick: () => load(true, rows.length > 1 ? undefined : row.id), 'aria-label': t('refreshOne'), title: t('refreshOne') }, state.loading ? '…' : '↻'),
                row.dashboardUrl ? h('a', { className: 'pq-link pq-more', href: row.dashboardUrl, target: '_blank', rel: 'noopener noreferrer' }, t('more'), ' ›') : null)),
            h('div', { className: 'pq-popup-scroll' },
              state.error ? h('p', { className: 'pq-status pq-error', role: 'alert' }, t('serviceError')) : null,
              row.status !== 'ok' && !tiles.length ? h('p', { className: `pq-status${quotaTone(row, state.data?.colorThresholds) === 'error' ? ' pq-error' : ''}`, role: 'status' }, t(row.reason || statusKey(row))) : null,
              row.stale ? h('p', { className: 'pq-status pq-warn' }, t('staleDetail')) : null,
              tiles.length ? h('div', { className: 'pq-popup-card' },
                row.status !== 'ok' && !row.metrics.length ? h('p', { className: 'pq-status', role: 'status' }, t(statusKey(row))) : null,
                h('div', { className: 'pq-card-grid' }, ...tiles.map((metric, index) => h(QuotaTile, { key: `tile-${index}`, metric, colorThresholds: state.data?.colorThresholds, now }))),
                h('div', { className: 'pq-popup-foot' }, h('span', { className: 'pq-muted' }, `${providerName(row)} · ${t('updated')} ${row.fetchedAt ? time(row.fetchedAt) : t('never')}`)))
                : h('div', { className: 'pq-popup-card' }, h(Row, { row, loading: state.loading, compact: true, colorThresholds: state.data?.colorThresholds }))));
        }
        function Popup() {
          const opened = React.useSyncExternalStore(popupSubscribe, () => popup);
          return opened ? h(PopupSurface, { key: opened.generation, opened }) : null;
        }
        function Dock(props) {
          const state = useQuota();
          const colorThresholds = state.data?.colorThresholds;
          const opened = React.useSyncExternalStore(popupSubscribe, () => popup);
          const anchorRef = React.useRef(null);
          const projectedProvider = props.useProjection('modelSelection', value => value?.next?.provider);
          const provider = projectedProvider ?? state.data?.defaultProvider;
          const row = preferredRow(state.data?.rows ?? [], provider);
          React.useEffect(() => () => {
            if (popup?.sessionId === props.sessionId && popup?.provider === provider) closePopup(false);
          }, [props.sessionId, provider]);
          if (!row) return state.error ? h('div', { className: 'pq-dock pq-muted' }, t('serviceError')) : null;
          const segments = dockMetricItems(row.metrics, colorThresholds).map(item => {
            const { metric } = item;
            const text = metric.type === 'spend' ? `${t('spendShort')} ${money(metric)} · ${t('organizationShort')}` : metric.type === 'balance' ? `${metric.wallet === 'bonus' ? t('bonus') + ' ' : ''}${money(metric)}` : `${metric.model ? `${metric.model} · ` : ''}${t(metric.label)} ${t('left')} ${percent(item.remainingPercent)}%`;
            return { text, tone: item.tone };
          });
          const text = segments.map(segment => segment.text).join(' · ');
          const isOpen = opened?.anchor === anchorRef.current;
          const openPopup = () => {
            if (popup?.anchor === anchorRef.current) closePopup(true);
            else publishPopup({ provider, sessionId: props.sessionId, anchor: anchorRef.current, generation: ++popupGeneration });
          };
          // A plan row with a 5-hour window collapses into one energy ring; other
          // providers (balances, spend, weekly-only plans) keep the text summary.
          const ringMetric = row.metrics.find(metric => metric.type === 'quota-window' && isRollingWindow(metric));
          const summary = `${providerName(row)} · ${text || statusLabel(row, colorThresholds)}${row.stale ? ` · ${t('stale')}` : ''}`;
          return h('div', { className: 'pq-dock' }, h('style', null, css),
            ringMetric ? h('button', { ref: anchorRef, type: 'button', className: 'pq-trigger-ring', 'aria-haspopup': 'dialog', 'aria-expanded': isOpen, 'aria-controls': isOpen ? POPUP_ID : undefined, 'aria-label': `${t('current')} · ${summary}`, onClick: openPopup },
              h(QuotaRing, { metric: ringMetric, colorThresholds }), h('span', null, `${percent(remainingOf(ringMetric))}%`)) :
            h('button', { ref: anchorRef, type: 'button', className: 'pq-trigger', 'aria-haspopup': 'dialog', 'aria-expanded': isOpen, 'aria-controls': isOpen ? POPUP_ID : undefined, 'aria-label': `${t('current')} · ${providerName(row)} · ${text || statusLabel(row, colorThresholds)} · ${statusLabel(row, colorThresholds)}`, title: t('details'), onClick: openPopup }, h('span', { className: 'pq-dot', 'data-tone': state.error ? 'error' : quotaTone(row, colorThresholds), 'aria-hidden': true }), h('span', { className: 'pq-trigger-name' }, providerName(row)), h('span', { className: 'pq-trigger-value' }, segments.length ? segments.map((segment, index) => h(React.Fragment, { key: index }, index ? h('span', { className: 'pq-summary-separator', 'aria-hidden': true }, ' · ') : null, h('span', { className: 'pq-summary-item', 'data-tone': segment.tone }, segment.text))) : statusLabel(row, colorThresholds), row.stale ? ` · ${t('stale')}` : state.error || row.status !== 'ok' && text ? ` · ${t('queryError')}` : ''), h('svg', { className: 'pq-chevron', viewBox: '0 0 16 16', 'aria-hidden': true }, h('path', { d: 'm4 10 4-4 4 4', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }))));
        }
        ctx.slots.inject('settings.section', () => ctx.slots.register({ name: 'settings.section', id: 'provider-quota', order: 12, label: () => t('title') }, Page));
         // Injection activates only while this optional slot is declared.
         ctx.slots.inject('settings.section.icon', () => ctx.slots.register({ name: 'settings.section.icon', id: 'provider-quota' }, ProviderQuotaNavIcon));
        ctx.slots.inject('conversation.composer.dock', () => ctx.slots.register({ name: 'conversation.composer.dock', id: 'provider-quota', order: 5 }, Dock));
        ctx.slots.inject('shell.overlay', () => ctx.slots.register({ name: 'shell.overlay', id: 'provider-quota.popup', order: 5 }, Popup));
      },
    };
  },
});
