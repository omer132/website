(()=>{var a={};a.id=910,a.ids=[910],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},83548:(a,b,c)=>{"use strict";c.r(b),c.d(b,{handler:()=>W,patchFetch:()=>V,routeModule:()=>R,serverHooks:()=>U,workAsyncStorage:()=>S,workUnitAsyncStorage:()=>T});var d={};c.r(d),c.d(d,{POST:()=>Q});var e=c(95736),f=c(9117),g=c(4044),h=c(39326),i=c(32324),j=c(261),k=c(54290),l=c(85328),m=c(38928),n=c(46595),o=c(3421),p=c(17679),q=c(41681),r=c(63446),s=c(86439),t=c(51356),u=c(10641),v=Object.defineProperty,w=Object.defineProperties,x=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,B=(a,b,c)=>b in a?v(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,C=(a,b)=>{for(var c in b||(b={}))z.call(b,c)&&B(a,c,b[c]);if(y)for(var c of y(b))A.call(b,c)&&B(a,c,b[c]);return a},D=(a,b,c)=>new Promise((d,e)=>{var f=a=>{try{h(c.next(a))}catch(a){e(a)}},g=a=>{try{h(c.throw(a))}catch(a){e(a)}},h=a=>a.done?d(a.value):Promise.resolve(a.value).then(f,g);h((c=c.apply(a,b)).next())}),E=class{constructor(a){this.resend=a}create(a){return D(this,arguments,function*(a,b={}){return yield this.resend.post("/api-keys",a,b)})}list(){return D(this,null,function*(){return yield this.resend.get("/api-keys")})}remove(a){return D(this,null,function*(){return yield this.resend.delete(`/api-keys/${a}`)})}},F=class{constructor(a){this.resend=a}create(a){return D(this,arguments,function*(a,b={}){return yield this.resend.post("/audiences",a,b)})}list(){return D(this,null,function*(){return yield this.resend.get("/audiences")})}get(a){return D(this,null,function*(){return yield this.resend.get(`/audiences/${a}`)})}remove(a){return D(this,null,function*(){return yield this.resend.delete(`/audiences/${a}`)})}};function G(a){var b;return{attachments:null==(b=a.attachments)?void 0:b.map(a=>({content:a.content,filename:a.filename,path:a.path,content_type:a.contentType,content_id:a.contentId})),bcc:a.bcc,cc:a.cc,from:a.from,headers:a.headers,html:a.html,reply_to:a.replyTo,scheduled_at:a.scheduledAt,subject:a.subject,tags:a.tags,text:a.text,to:a.to}}var H=class{constructor(a){this.resend=a}send(a){return D(this,arguments,function*(a,b={}){return this.create(a,b)})}create(a){return D(this,arguments,function*(a,b={}){let d=[];for(let b of a){if(b.react){if(!this.renderAsync)try{let{renderAsync:a}=yield c.e(762).then(c.t.bind(c,81762,19));this.renderAsync=a}catch(a){throw Error("Failed to render React component. Make sure to install `@react-email/render`")}b.html=yield this.renderAsync(b.react),b.react=void 0}d.push(G(b))}return yield this.resend.post("/emails/batch",d,b)})}},I=class{constructor(a){this.resend=a}create(a){return D(this,arguments,function*(a,b={}){if(a.react){if(!this.renderAsync)try{let{renderAsync:a}=yield c.e(762).then(c.t.bind(c,81762,19));this.renderAsync=a}catch(a){throw Error("Failed to render React component. Make sure to install `@react-email/render`")}a.html=yield this.renderAsync(a.react)}return yield this.resend.post("/broadcasts",{name:a.name,audience_id:a.audienceId,preview_text:a.previewText,from:a.from,html:a.html,reply_to:a.replyTo,subject:a.subject,text:a.text},b)})}send(a,b){return D(this,null,function*(){return yield this.resend.post(`/broadcasts/${a}/send`,{scheduled_at:null==b?void 0:b.scheduledAt})})}list(){return D(this,null,function*(){return yield this.resend.get("/broadcasts")})}get(a){return D(this,null,function*(){return yield this.resend.get(`/broadcasts/${a}`)})}remove(a){return D(this,null,function*(){return yield this.resend.delete(`/broadcasts/${a}`)})}update(a,b){return D(this,null,function*(){return yield this.resend.patch(`/broadcasts/${a}`,{name:b.name,audience_id:b.audienceId,from:b.from,html:b.html,text:b.text,subject:b.subject,reply_to:b.replyTo,preview_text:b.previewText})})}},J=class{constructor(a){this.resend=a}create(a){return D(this,arguments,function*(a,b={}){return yield this.resend.post(`/audiences/${a.audienceId}/contacts`,{unsubscribed:a.unsubscribed,email:a.email,first_name:a.firstName,last_name:a.lastName},b)})}list(a){return D(this,null,function*(){return yield this.resend.get(`/audiences/${a.audienceId}/contacts`)})}get(a){return D(this,null,function*(){return a.id||a.email?yield this.resend.get(`/audiences/${a.audienceId}/contacts/${(null==a?void 0:a.email)?null==a?void 0:a.email:null==a?void 0:a.id}`):{data:null,error:{message:"Missing `id` or `email` field.",name:"missing_required_field"}}})}update(a){return D(this,null,function*(){return a.id||a.email?yield this.resend.patch(`/audiences/${a.audienceId}/contacts/${(null==a?void 0:a.email)?null==a?void 0:a.email:null==a?void 0:a.id}`,{unsubscribed:a.unsubscribed,first_name:a.firstName,last_name:a.lastName}):{data:null,error:{message:"Missing `id` or `email` field.",name:"missing_required_field"}}})}remove(a){return D(this,null,function*(){return a.id||a.email?yield this.resend.delete(`/audiences/${a.audienceId}/contacts/${(null==a?void 0:a.email)?null==a?void 0:a.email:null==a?void 0:a.id}`):{data:null,error:{message:"Missing `id` or `email` field.",name:"missing_required_field"}}})}},K=class{constructor(a){this.resend=a}create(a){return D(this,arguments,function*(a,b={}){return yield this.resend.post("/domains",{name:a.name,region:a.region,custom_return_path:a.customReturnPath},b)})}list(){return D(this,null,function*(){return yield this.resend.get("/domains")})}get(a){return D(this,null,function*(){return yield this.resend.get(`/domains/${a}`)})}update(a){return D(this,null,function*(){return yield this.resend.patch(`/domains/${a.id}`,{click_tracking:a.clickTracking,open_tracking:a.openTracking,tls:a.tls})})}remove(a){return D(this,null,function*(){return yield this.resend.delete(`/domains/${a}`)})}verify(a){return D(this,null,function*(){return yield this.resend.post(`/domains/${a}/verify`)})}},L=class{constructor(a){this.resend=a}send(a){return D(this,arguments,function*(a,b={}){return this.create(a,b)})}create(a){return D(this,arguments,function*(a,b={}){if(a.react){if(!this.renderAsync)try{let{renderAsync:a}=yield c.e(762).then(c.t.bind(c,81762,19));this.renderAsync=a}catch(a){throw Error("Failed to render React component. Make sure to install `@react-email/render`")}a.html=yield this.renderAsync(a.react)}return yield this.resend.post("/emails",G(a),b)})}get(a){return D(this,null,function*(){return yield this.resend.get(`/emails/${a}`)})}update(a){return D(this,null,function*(){return yield this.resend.patch(`/emails/${a.id}`,{scheduled_at:a.scheduledAt})})}cancel(a){return D(this,null,function*(){return yield this.resend.post(`/emails/${a}/cancel`)})}},M="undefined"!=typeof process&&process.env&&process.env.RESEND_BASE_URL||"https://api.resend.com",N="undefined"!=typeof process&&process.env&&process.env.RESEND_USER_AGENT||"resend-node:6.0.3",O=class{constructor(a){if(this.key=a,this.apiKeys=new E(this),this.audiences=new F(this),this.batch=new H(this),this.broadcasts=new I(this),this.contacts=new J(this),this.domains=new K(this),this.emails=new L(this),!a&&("undefined"!=typeof process&&process.env&&(this.key=process.env.RESEND_API_KEY),!this.key))throw Error('Missing API key. Pass it to the constructor `new Resend("re_123")`');this.headers=new Headers({Authorization:`Bearer ${this.key}`,"User-Agent":N,"Content-Type":"application/json"})}fetchRequest(a){return D(this,arguments,function*(a,b={}){try{let c=yield fetch(`${M}${a}`,b);if(!c.ok)try{let a=yield c.text();return{data:null,error:JSON.parse(a)}}catch(b){if(b instanceof SyntaxError)return{data:null,error:{name:"application_error",message:"Internal server error. We are unable to process your request right now, please try again later."}};let a={message:c.statusText,name:"application_error"};if(b instanceof Error){let c,d;return{data:null,error:(c=C({},a),d={message:b.message},w(c,x(d)))}}return{data:null,error:a}}return{data:yield c.json(),error:null}}catch(a){return{data:null,error:{name:"application_error",message:"Unable to fetch data. The request could not be resolved."}}}})}post(a,b){return D(this,arguments,function*(a,b,c={}){let d=new Headers(this.headers);c.idempotencyKey&&d.set("Idempotency-Key",c.idempotencyKey);let e=C({method:"POST",headers:d,body:JSON.stringify(b)},c);return this.fetchRequest(a,e)})}get(a){return D(this,arguments,function*(a,b={}){let c=C({method:"GET",headers:this.headers},b);return this.fetchRequest(a,c)})}put(a,b){return D(this,arguments,function*(a,b,c={}){let d=C({method:"PUT",headers:this.headers,body:JSON.stringify(b)},c);return this.fetchRequest(a,d)})}patch(a,b){return D(this,arguments,function*(a,b,c={}){let d=C({method:"PATCH",headers:this.headers,body:JSON.stringify(b)},c);return this.fetchRequest(a,d)})}delete(a,b){return D(this,null,function*(){let c={method:"DELETE",headers:this.headers,body:JSON.stringify(b)};return this.fetchRequest(a,c)})}};let P=process.env.RESEND_API_KEY?new O(process.env.RESEND_API_KEY):null;async function Q(a){try{console.log("=== RESEND EMAIL API CALLED ===");let{name:b,email:c,subject:d,message:e}=await a.json();if(!b||!c||!d||!e)return u.NextResponse.json({error:"T\xfcm alanlar zorunludur"},{status:400});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c))return u.NextResponse.json({error:"Ge\xe7erli bir e-posta adresi giriniz"},{status:400});if(console.log("Contact form data:",{name:b,email:c,subject:d,message:e}),!P||!process.env.RESEND_API_KEY)return console.log("Resend API key not set, using test mode"),u.NextResponse.json({message:"Mesaj başarıyla alındı! (Test modu - Resend API key eksik)"},{status:200});let f=await P.emails.send({from:"AKKUS Contact <noreply@akkus.com>",to:[process.env.CONTACT_EMAIL||"omer.akkus4661@gmail.com"],subject:`🚀 AKKUS - Yeni İletişim Mesajı: ${d}`,html:`
        <!DOCTYPE html>
        <html lang="tr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>AKKUS İletişim Mesajı</title>
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          
          <!-- Main Container -->
          <div style="max-width: 650px; margin: 20px auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #00f5ff 0%, #8A2BE2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">AKKUS Teknoloji</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Modern Teknolojinin \xd6nc\xfcs\xfc</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; background: linear-gradient(135deg, #00f5ff, #8A2BE2); color: white; padding: 12px 25px; border-radius: 25px; font-size: 16px; font-weight: 600;">
                  📧 Yeni İletişim Mesajı
                </div>
              </div>
              
              <!-- Sender Info -->
              <div style="background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%); border-radius: 15px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #00f5ff;">
                <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">👤 G\xf6nderen Bilgileri</h3>
                <div style="display: grid; gap: 12px;">
                  <div style="padding: 12px; background: white; border-radius: 10px;">
                    <strong style="color: #00f5ff;">Ad Soyad:</strong> ${b}
                  </div>
                  <div style="padding: 12px; background: white; border-radius: 10px;">
                    <strong style="color: #00f5ff;">E-posta:</strong> ${c}
                  </div>
                  <div style="padding: 12px; background: white; border-radius: 10px;">
                    <strong style="color: #00f5ff;">Konu:</strong> ${d}
                  </div>
                </div>
              </div>
              
              <!-- Message -->
              <div style="background: linear-gradient(135deg, #fff5f8 0%, #f0f8ff 100%); border-radius: 15px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #8A2BE2;">
                <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">💬 Mesaj İ\xe7eriği</h3>
                <div style="background: white; padding: 20px; border-radius: 12px;">
                  <p style="line-height: 1.7; color: #2c3e50; margin: 0; font-size: 15px; white-space: pre-wrap;">${e}</p>
                </div>
              </div>
              
              <!-- Timestamp -->
              <div style="text-align: center; margin: 30px 0;">
                <div style="display: inline-block; background: rgba(0,245,255,0.1); color: #00f5ff; padding: 10px 20px; border-radius: 20px; font-size: 13px; font-weight: 500;">
                  📅 ${new Date().toLocaleString("tr-TR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}
                </div>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding: 25px 30px; text-align: center;">
              <p style="color: rgba(255,255,255,0.8); margin: 0 0 15px 0; font-size: 14px;">
                Bu mesaj AKKUS website iletişim formundan otomatik olarak g\xf6nderilmiştir.
              </p>
              <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">
                \xa9 2024 AKKUS - Modern Teknolojinin \xd6nc\xfcs\xfc | İstanbul, T\xfcrkiye
              </p>
            </div>
          </div>
        </body>
        </html>
      `});console.log("Main email sent:",f.data?.id);try{await P.emails.send({from:"AKKUS Contact <noreply@akkus.com>",to:[c],subject:"✅ AKKUS - Mesajınız Başarıyla Alınmıştır",html:`
          <!DOCTYPE html>
          <html lang="tr">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AKKUS Onay Mesajı</title>
          </head>
          <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            
            <div style="max-width: 650px; margin: 20px auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15);">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #00f5ff 0%, #8A2BE2 100%); padding: 40px 30px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">AKKUS Teknoloji</h1>
                <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Modern Teknolojinin \xd6nc\xfcs\xfc</p>
              </div>
              
              <!-- Content -->
              <div style="padding: 40px 30px;">
                <div style="text-align: center; margin-bottom: 30px;">
                  <div style="display: inline-block; background: linear-gradient(135deg, #00C851, #00f5ff); color: white; padding: 15px 30px; border-radius: 25px; font-size: 18px; font-weight: 600;">
                    ✅ Mesajınız Başarıyla Alınmıştır
                  </div>
                </div>
                
                <div style="background: linear-gradient(135deg, #e8f5e8 0%, #f0f8ff 100%); border-radius: 15px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #00C851;">
                  <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">👋 Merhaba ${b},</h3>
                  <div style="background: white; padding: 20px; border-radius: 12px;">
                    <p style="line-height: 1.7; color: #2c3e50; margin: 0; font-size: 15px;">
                      AKKUS'a g\xf6nderdiğiniz mesaj başarıyla alınmıştır. Değerli g\xf6r\xfcşleriniz bizim i\xe7in \xe7ok \xf6nemli. En kısa s\xfcrede size d\xf6n\xfcş yapacağız.
                    </p>
                  </div>
                </div>
                
                <div style="background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%); border-radius: 15px; padding: 25px; margin-bottom: 25px; border-left: 5px solid #00f5ff;">
                  <h3 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">📋 Mesaj Detayları</h3>
                  <div style="padding: 15px; background: white; border-radius: 10px;">
                    <p style="color: #00f5ff; font-weight: 600; margin: 0 0 10px 0; font-size: 14px;">Konu: ${d}</p>
                    <p style="line-height: 1.6; color: #2c3e50; margin: 0; font-size: 14px; white-space: pre-wrap; background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 3px solid #00f5ff;">${e}</p>
                  </div>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                  <div style="display: inline-block; background: linear-gradient(135deg, #00f5ff, #8A2BE2); color: white; padding: 15px 25px; border-radius: 25px; font-size: 14px; font-weight: 600;">
                    💼 AKKUS - Modern Teknolojinin \xd6nc\xfcs\xfc
                  </div>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding: 25px 30px; text-align: center;">
                <p style="color: rgba(255,255,255,0.8); margin: 0 0 15px 0; font-size: 14px;">
                  Bu otomatik bir onay e-postasıdır. L\xfctfen yanıtlamayın.
                </p>
                <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">
                  \xa9 2024 AKKUS - Modern Teknolojinin \xd6nc\xfcs\xfc | İstanbul, T\xfcrkiye
                </p>
              </div>
            </div>
          </body>
          </html>
        `}),console.log("Confirmation email sent successfully")}catch(a){console.error("Confirmation email failed:",a)}return u.NextResponse.json({message:"Mesaj başarıyla g\xf6nderildi! Onay e-postası g\xf6nderildi."},{status:200})}catch(a){return console.error("Resend email error:",a),a instanceof Error&&(console.error("Error message:",a.message),console.error("Error stack:",a.stack)),u.NextResponse.json({error:"Mesaj g\xf6nderilirken bir hata oluştu. L\xfctfen tekrar deneyin."},{status:500})}}let R=new e.AppRouteRouteModule({definition:{kind:f.RouteKind.APP_ROUTE,page:"/api/contact-resend/route",pathname:"/api/contact-resend",filename:"route",bundlePath:"app/api/contact-resend/route"},distDir:".next",relativeProjectDir:"",resolvedPagePath:"C:\\Users\\\xd6MER\\OneDrive\\Masa\xfcst\xfc\\akkus\\src\\app\\api\\contact-resend\\route.ts",nextConfigOutput:"",userland:d}),{workAsyncStorage:S,workUnitAsyncStorage:T,serverHooks:U}=R;function V(){return(0,g.patchFetch)({workAsyncStorage:S,workUnitAsyncStorage:T})}async function W(a,b,c){var d;let e="/api/contact-resend/route";"/index"===e&&(e="/");let g=await R.prepare(a,b,{srcPage:e,multiZoneDraftMode:!1});if(!g)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:u,params:v,nextConfig:w,isDraftMode:x,prerenderManifest:y,routerServerContext:z,isOnDemandRevalidate:A,revalidateOnlyGenerated:B,resolvedPathname:C}=g,D=(0,j.normalizeAppPath)(e),E=!!(y.dynamicRoutes[D]||y.routes[C]);if(E&&!x){let a=!!y.routes[C],b=y.dynamicRoutes[D];if(b&&!1===b.fallback&&!a)throw new s.NoFallbackError}let F=null;!E||R.isDev||x||(F="/index"===(F=C)?"/":F);let G=!0===R.isDev||!E,H=E&&!G,I=a.method||"GET",J=(0,i.getTracer)(),K=J.getActiveScopeSpan(),L={params:v,prerenderManifest:y,renderOpts:{experimental:{cacheComponents:!!w.experimental.cacheComponents,authInterrupts:!!w.experimental.authInterrupts},supportsDynamicResponse:G,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:null==(d=w.experimental)?void 0:d.cacheLife,isRevalidate:H,waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:void 0,onInstrumentationRequestError:(b,c,d)=>R.onRequestError(a,b,d,z)},sharedContext:{buildId:u}},M=new k.NodeNextRequest(a),N=new k.NodeNextResponse(b),O=l.NextRequestAdapter.fromNodeNextRequest(M,(0,l.signalFromNodeResponse)(b));try{let d=async c=>R.handle(O,L).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=J.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${I} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${I} ${a.url}`)}),g=async g=>{var i,j;let k=async({previousCacheEntry:f})=>{try{if(!(0,h.getRequestMeta)(a,"minimalMode")&&A&&B&&!f)return b.statusCode=404,b.setHeader("x-nextjs-cache","REVALIDATED"),b.end("This page could not be found"),null;let e=await d(g);a.fetchMetrics=L.renderOpts.fetchMetrics;let i=L.renderOpts.pendingWaitUntil;i&&c.waitUntil&&(c.waitUntil(i),i=void 0);let j=L.renderOpts.collectedTags;if(!E)return await (0,o.I)(M,N,e,L.renderOpts.pendingWaitUntil),null;{let a=await e.blob(),b=(0,p.toNodeOutgoingHttpHeaders)(e.headers);j&&(b[r.NEXT_CACHE_TAGS_HEADER]=j),!b["content-type"]&&a.type&&(b["content-type"]=a.type);let c=void 0!==L.renderOpts.collectedRevalidate&&!(L.renderOpts.collectedRevalidate>=r.INFINITE_CACHE)&&L.renderOpts.collectedRevalidate,d=void 0===L.renderOpts.collectedExpire||L.renderOpts.collectedExpire>=r.INFINITE_CACHE?void 0:L.renderOpts.collectedExpire;return{value:{kind:t.CachedRouteKind.APP_ROUTE,status:e.status,body:Buffer.from(await a.arrayBuffer()),headers:b},cacheControl:{revalidate:c,expire:d}}}}catch(b){throw(null==f?void 0:f.isStale)&&await R.onRequestError(a,b,{routerKind:"App Router",routePath:e,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:H,isOnDemandRevalidate:A})},z),b}},l=await R.handleResponse({req:a,nextConfig:w,cacheKey:F,routeKind:f.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:y,isRoutePPREnabled:!1,isOnDemandRevalidate:A,revalidateOnlyGenerated:B,responseGenerator:k,waitUntil:c.waitUntil});if(!E)return null;if((null==l||null==(i=l.value)?void 0:i.kind)!==t.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==l||null==(j=l.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,h.getRequestMeta)(a,"minimalMode")||b.setHeader("x-nextjs-cache",A?"REVALIDATED":l.isMiss?"MISS":l.isStale?"STALE":"HIT"),x&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,p.fromNodeOutgoingHttpHeaders)(l.value.headers);return(0,h.getRequestMeta)(a,"minimalMode")&&E||m.delete(r.NEXT_CACHE_TAGS_HEADER),!l.cacheControl||b.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,q.getCacheControlHeader)(l.cacheControl)),await (0,o.I)(M,N,new Response(l.value.body,{headers:m,status:l.value.status||200})),null};K?await g(K):await J.withPropagatedContext(a.headers,()=>J.trace(m.BaseServerSpan.handleRequest,{spanName:`${I} ${a.url}`,kind:i.SpanKind.SERVER,attributes:{"http.method":I,"http.target":a.url}},g))}catch(b){if(K||b instanceof s.NoFallbackError||await R.onRequestError(a,b,{routerKind:"App Router",routePath:D,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:H,isOnDemandRevalidate:A})}),E)throw b;return await (0,o.I)(M,N,new Response(null,{status:500})),null}}},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},96487:()=>{}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[586,692],()=>b(b.s=83548));module.exports=c})();