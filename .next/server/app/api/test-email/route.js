(()=>{var a={};a.id=573,a.ids=[573],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14985:a=>{"use strict";a.exports=require("dns")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:a=>{"use strict";a.exports=require("os")},27910:a=>{"use strict";a.exports=require("stream")},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},34631:a=>{"use strict";a.exports=require("tls")},44870:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},45115:(a,b,c)=>{"use strict";c.r(b),c.d(b,{handler:()=>C,patchFetch:()=>B,routeModule:()=>x,serverHooks:()=>A,workAsyncStorage:()=>y,workUnitAsyncStorage:()=>z});var d={};c.r(d),c.d(d,{POST:()=>w});var e=c(95736),f=c(9117),g=c(4044),h=c(39326),i=c(32324),j=c(261),k=c(54290),l=c(85328),m=c(38928),n=c(46595),o=c(3421),p=c(17679),q=c(41681),r=c(63446),s=c(86439),t=c(51356),u=c(10641),v=c(52731);async function w(a){try{console.log("=== EMAIL TEST API CALLED ===");let a={host:process.env.SMTP_HOST||"smtp.gmail.com",port:parseInt(process.env.SMTP_PORT||"587"),secure:"true"===process.env.SMTP_SECURE,auth:{user:process.env.SMTP_USER||"destekakkus@gmail.com",pass:process.env.SMTP_PASS||"nucg ullz ojaw snob"},tls:{rejectUnauthorized:!1}},b=v.createTransport(a);try{await b.verify(),console.log("SMTP connection verified successfully")}catch(a){return console.error("SMTP verification failed:",a),u.NextResponse.json({success:!1,error:"SMTP bağlantısı başarısız",details:a instanceof Error?a.message:"Unknown error"},{status:500})}let c={from:process.env.SMTP_USER||"destekakkus@gmail.com",to:process.env.CONTACT_EMAIL||"destekakkus@gmail.com",subject:"\uD83E\uDDEA AKKUS - E-posta Sistemi Test",text:`
AKKUS E-posta Sistemi Test

Bu bir test e-postasıdır.

Test Detayları:
- Tarih: ${new Date().toLocaleString("tr-TR")}
- SMTP Host: ${a.host}
- SMTP Port: ${a.port}
- SMTP User: ${a.auth.user}

E-posta sistemi başarıyla \xe7alışıyor!

\xa9 2024 AKKUS - Modern Teknolojinin \xd6nc\xfcs\xfc
      `,html:`
        <!DOCTYPE html>
        <html lang="tr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>AKKUS E-posta Test</title>
        </head>
        <body style="margin: 0; padding: 0; background: #ffffff; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          
          <div style="max-width: 650px; margin: 20px auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: #f8f9fa; padding: 30px; text-align: center; border-bottom: 1px solid #e0e0e0;">
              <div style="display: inline-block; background: #ffffff; padding: 20px 30px; border-radius: 10px; margin-bottom: 15px; border: 1px solid #e0e0e0; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <img src="https://akkus.vercel.app/AKKUS.png" alt="AKKUS Logo" style="max-width: 120px; height: auto;">
              </div>
              <h1 style="color: #333333; margin: 0; font-size: 24px;">🧪 E-posta Sistemi Test</h1>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; background: #28a745; color: white; padding: 15px 30px; border-radius: 6px; font-size: 18px; font-weight: 600;">
                  ✅ Test Başarılı
                </div>
              </div>
              
              <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #28a745; border: 1px solid #e0e0e0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px;">Test Detayları</h3>
                <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #e0e0e0;">
                  <p style="margin: 5px 0; color: #333333;"><strong>Tarih:</strong> ${new Date().toLocaleString("tr-TR")}</p>
                  <p style="margin: 5px 0; color: #333333;"><strong>SMTP Host:</strong> ${a.host}</p>
                  <p style="margin: 5px 0; color: #333333;"><strong>SMTP Port:</strong> ${a.port}</p>
                  <p style="margin: 5px 0; color: #333333;"><strong>SMTP User:</strong> ${a.auth.user}</p>
                </div>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <div style="display: inline-block; background: #007bff; color: white; padding: 15px 25px; border-radius: 6px; font-size: 14px; font-weight: 600;">
                  🚀 E-posta sistemi başarıyla \xe7alışıyor!
                </div>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="color: #666666; margin: 0; font-size: 14px;">
                Bu bir test e-postasıdır.
              </p>
              <p style="color: #999999; margin: 5px 0 0 0; font-size: 12px;">
                \xa9 2024 AKKUS - Modern Teknolojinin \xd6nc\xfcs\xfc
              </p>
            </div>
            
          </div>
          
        </body>
        </html>
      `},d=await b.sendMail(c);return console.log("Test email sent successfully:",d.messageId),u.NextResponse.json({success:!0,message:"Test e-postası başarıyla g\xf6nderildi",messageId:d.messageId,timestamp:new Date().toISOString(),config:{host:a.host,port:a.port,user:a.auth.user}})}catch(a){return console.error("=== EMAIL TEST ERROR ==="),console.error("Test email error:",a),u.NextResponse.json({success:!1,error:"Test e-postası g\xf6nderilirken hata oluştu",details:a instanceof Error?a.message:"Unknown error"},{status:500})}}let x=new e.AppRouteRouteModule({definition:{kind:f.RouteKind.APP_ROUTE,page:"/api/test-email/route",pathname:"/api/test-email",filename:"route",bundlePath:"app/api/test-email/route"},distDir:".next",relativeProjectDir:"",resolvedPagePath:"C:\\Users\\\xd6MER\\OneDrive\\Masa\xfcst\xfc\\akkus\\src\\app\\api\\test-email\\route.ts",nextConfigOutput:"",userland:d}),{workAsyncStorage:y,workUnitAsyncStorage:z,serverHooks:A}=x;function B(){return(0,g.patchFetch)({workAsyncStorage:y,workUnitAsyncStorage:z})}async function C(a,b,c){var d;let e="/api/test-email/route";"/index"===e&&(e="/");let g=await x.prepare(a,b,{srcPage:e,multiZoneDraftMode:!1});if(!g)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:u,params:v,nextConfig:w,isDraftMode:y,prerenderManifest:z,routerServerContext:A,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,resolvedPathname:D}=g,E=(0,j.normalizeAppPath)(e),F=!!(z.dynamicRoutes[E]||z.routes[D]);if(F&&!y){let a=!!z.routes[D],b=z.dynamicRoutes[E];if(b&&!1===b.fallback&&!a)throw new s.NoFallbackError}let G=null;!F||x.isDev||y||(G="/index"===(G=D)?"/":G);let H=!0===x.isDev||!F,I=F&&!H,J=a.method||"GET",K=(0,i.getTracer)(),L=K.getActiveScopeSpan(),M={params:v,prerenderManifest:z,renderOpts:{experimental:{cacheComponents:!!w.experimental.cacheComponents,authInterrupts:!!w.experimental.authInterrupts},supportsDynamicResponse:H,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:null==(d=w.experimental)?void 0:d.cacheLife,isRevalidate:I,waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:void 0,onInstrumentationRequestError:(b,c,d)=>x.onRequestError(a,b,d,A)},sharedContext:{buildId:u}},N=new k.NodeNextRequest(a),O=new k.NodeNextResponse(b),P=l.NextRequestAdapter.fromNodeNextRequest(N,(0,l.signalFromNodeResponse)(b));try{let d=async c=>x.handle(P,M).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=K.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${J} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${J} ${a.url}`)}),g=async g=>{var i,j;let k=async({previousCacheEntry:f})=>{try{if(!(0,h.getRequestMeta)(a,"minimalMode")&&B&&C&&!f)return b.statusCode=404,b.setHeader("x-nextjs-cache","REVALIDATED"),b.end("This page could not be found"),null;let e=await d(g);a.fetchMetrics=M.renderOpts.fetchMetrics;let i=M.renderOpts.pendingWaitUntil;i&&c.waitUntil&&(c.waitUntil(i),i=void 0);let j=M.renderOpts.collectedTags;if(!F)return await (0,o.I)(N,O,e,M.renderOpts.pendingWaitUntil),null;{let a=await e.blob(),b=(0,p.toNodeOutgoingHttpHeaders)(e.headers);j&&(b[r.NEXT_CACHE_TAGS_HEADER]=j),!b["content-type"]&&a.type&&(b["content-type"]=a.type);let c=void 0!==M.renderOpts.collectedRevalidate&&!(M.renderOpts.collectedRevalidate>=r.INFINITE_CACHE)&&M.renderOpts.collectedRevalidate,d=void 0===M.renderOpts.collectedExpire||M.renderOpts.collectedExpire>=r.INFINITE_CACHE?void 0:M.renderOpts.collectedExpire;return{value:{kind:t.CachedRouteKind.APP_ROUTE,status:e.status,body:Buffer.from(await a.arrayBuffer()),headers:b},cacheControl:{revalidate:c,expire:d}}}}catch(b){throw(null==f?void 0:f.isStale)&&await x.onRequestError(a,b,{routerKind:"App Router",routePath:e,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})},A),b}},l=await x.handleResponse({req:a,nextConfig:w,cacheKey:G,routeKind:f.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:z,isRoutePPREnabled:!1,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,responseGenerator:k,waitUntil:c.waitUntil});if(!F)return null;if((null==l||null==(i=l.value)?void 0:i.kind)!==t.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==l||null==(j=l.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,h.getRequestMeta)(a,"minimalMode")||b.setHeader("x-nextjs-cache",B?"REVALIDATED":l.isMiss?"MISS":l.isStale?"STALE":"HIT"),y&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,p.fromNodeOutgoingHttpHeaders)(l.value.headers);return(0,h.getRequestMeta)(a,"minimalMode")&&F||m.delete(r.NEXT_CACHE_TAGS_HEADER),!l.cacheControl||b.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,q.getCacheControlHeader)(l.cacheControl)),await (0,o.I)(N,O,new Response(l.value.body,{headers:m,status:l.value.status||200})),null};L?await g(L):await K.withPropagatedContext(a.headers,()=>K.trace(m.BaseServerSpan.handleRequest,{spanName:`${J} ${a.url}`,kind:i.SpanKind.SERVER,attributes:{"http.method":J,"http.target":a.url}},g))}catch(b){if(L||b instanceof s.NoFallbackError||await x.onRequestError(a,b,{routerKind:"App Router",routePath:E,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})}),F)throw b;return await (0,o.I)(N,O,new Response(null,{status:500})),null}}},55511:a=>{"use strict";a.exports=require("crypto")},55591:a=>{"use strict";a.exports=require("https")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},74075:a=>{"use strict";a.exports=require("zlib")},78335:()=>{},79551:a=>{"use strict";a.exports=require("url")},79646:a=>{"use strict";a.exports=require("child_process")},81630:a=>{"use strict";a.exports=require("http")},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},91645:a=>{"use strict";a.exports=require("net")},94735:a=>{"use strict";a.exports=require("events")},96487:()=>{}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[586,692,112],()=>b(b.s=45115));module.exports=c})();