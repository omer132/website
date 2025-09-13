(()=>{var a={};a.id=746,a.ids=[746],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14985:a=>{"use strict";a.exports=require("dns")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:a=>{"use strict";a.exports=require("os")},27910:a=>{"use strict";a.exports=require("stream")},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},34631:a=>{"use strict";a.exports=require("tls")},44870:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},55511:a=>{"use strict";a.exports=require("crypto")},55591:a=>{"use strict";a.exports=require("https")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},74075:a=>{"use strict";a.exports=require("zlib")},78335:()=>{},79551:a=>{"use strict";a.exports=require("url")},79646:a=>{"use strict";a.exports=require("child_process")},81630:a=>{"use strict";a.exports=require("http")},84468:(a,b,c)=>{"use strict";c.r(b),c.d(b,{handler:()=>D,patchFetch:()=>C,routeModule:()=>y,serverHooks:()=>B,workAsyncStorage:()=>z,workUnitAsyncStorage:()=>A});var d={};c.r(d),c.d(d,{POST:()=>x});var e=c(95736),f=c(9117),g=c(4044),h=c(39326),i=c(32324),j=c(261),k=c(54290),l=c(85328),m=c(38928),n=c(46595),o=c(3421),p=c(17679),q=c(41681),r=c(63446),s=c(86439),t=c(51356),u=c(10641),v=c(52731);let w=new Map;async function x(a){try{console.log("=== EMAIL API CALLED ===");let{name:b,email:c,subject:d,message:e}=await a.json();console.log("Received data:",{name:b,email:c,subject:d,message:e});let f=a.headers.get("x-forwarded-for"),g=f?f.split(",")[0]:a.headers.get("x-real-ip")||"Unknown",h=new Date().toISOString(),i=Date.now(),j=w.get(g);if(j)if(i<j.resetTime){if(j.count>=3)return console.log(`Rate limit exceeded for IP: ${g}`),u.NextResponse.json({error:"\xc7ok fazla istek g\xf6nderdiniz. L\xfctfen 15 dakika sonra tekrar deneyin."},{status:429});j.count++}else w.set(g,{count:1,resetTime:i+9e5});else w.set(g,{count:1,resetTime:i+9e5});if(!b||!c||!d||!e)return console.log("Validation failed: missing required fields"),u.NextResponse.json({error:"T\xfcm alanlar zorunludur"},{status:400});console.log("=== CONTACT FORM DATA RECEIVED ==="),console.log("Name:",b),console.log("Email:",c),console.log("Subject:",d),console.log("Message:",e),console.log("Timestamp:",new Date().toISOString());let k={host:process.env.SMTP_HOST||"smtp.gmail.com",port:parseInt(process.env.SMTP_PORT||"587"),secure:"true"===process.env.SMTP_SECURE,auth:{user:process.env.SMTP_USER||"destekakkus@gmail.com",pass:process.env.SMTP_PASS||"nucg ullz ojaw snob"},tls:{rejectUnauthorized:!1}},l=v.createTransport(k);try{await l.verify(),console.log("SMTP connection verified successfully")}catch(a){return console.error("SMTP verification failed:",a),u.NextResponse.json({error:"E-posta servisi yapılandırması hatası. L\xfctfen daha sonra tekrar deneyin."},{status:500})}let m={from:process.env.SMTP_USER||"destekakkus@gmail.com",to:process.env.CONTACT_EMAIL||"destekakkus@gmail.com",subject:`[Site] Yeni İletişim Formu - ${d}`,text:`
AKKUS - Yeni İletişim Mesajı

G\xf6nderen Bilgileri:
- Ad Soyad: ${b}
- E-posta: ${c}
- Konu: ${d}

Mesaj:
${e}

Teknik Bilgiler:
- IP Adresi: ${g}
- Tarih: ${new Date(h).toLocaleString("tr-TR")}

Bu mesaj AKKUS website iletişim formundan otomatik olarak g\xf6nderilmiştir.
\xa9 2024 AKKUS - Modern Teknolojinin \xd6nc\xfcs\xfc
      `,html:`
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
            
            <!-- Header with Logo -->
            <div style="background: linear-gradient(135deg, #00f5ff 0%, #8A2BE2 100%); padding: 40px 30px; text-align: center; position: relative;">
              <!-- Logo Container with Image -->
              <div style="display: inline-block; background: rgba(255,255,255,0.15); padding: 20px 30px; border-radius: 15px; margin-bottom: 15px; border: 2px solid rgba(255,255,255,0.3); backdrop-filter: blur(10px);">
                <img src="https://akkus.vercel.app/AKKUS.png" alt="AKKUS Logo" style="max-width: 120px; height: auto;">
              </div>
              <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px; font-weight: 300;">Modern Teknolojinin \xd6nc\xfcs\xfc</p>
            </div>
            
            <!-- Content Area -->
            <div style="padding: 40px 30px;">
              
              <!-- Status Badge -->
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; background: #007bff; color: white; padding: 12px 25px; border-radius: 6px; font-size: 16px; font-weight: 600;">
                  📧 Yeni İletişim Mesajı
                </div>
              </div>
              
              <!-- Sender Info Card -->
              <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #007bff; border: 1px solid #e0e0e0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #007bff; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">👤</span>
                  G\xf6nderen Bilgileri
                </h3>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                    <span style="color: #007bff; font-weight: 600; min-width: 80px;">Ad Soyad:</span>
                    <span style="color: #333333; font-weight: 500;">${b}</span>
                  </div>
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                    <span style="color: #007bff; font-weight: 600; min-width: 80px;">E-posta:</span>
                    <span style="color: #333333; font-weight: 500;">${c}</span>
                  </div>
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                    <span style="color: #007bff; font-weight: 600; min-width: 80px;">Konu:</span>
                    <span style="color: #333333; font-weight: 500;">${d}</span>
                  </div>
                </div>
              </div>
              
              <!-- Message Card -->
              <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #28a745; border: 1px solid #e0e0e0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #28a745; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">💬</span>
                  Mesaj İ\xe7eriği
                </h3>
                <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #e0e0e0;">
                  <p style="line-height: 1.7; color: #333333; margin: 0; font-size: 15px; white-space: pre-wrap;">${e}</p>
                </div>
              </div>
              
              <!-- Additional Info -->
              <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #ffc107; border: 1px solid #e0e0e0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #ffc107; color: #333333; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">🔍</span>
                  Teknik Bilgiler
                </h3>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                    <span style="color: #007bff; font-weight: 600; min-width: 80px;">IP Adresi:</span>
                    <span style="color: #333333; font-weight: 500;">${g}</span>
                  </div>
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                    <span style="color: #007bff; font-weight: 600; min-width: 80px;">Tarih:</span>
                    <span style="color: #333333; font-weight: 500;">${new Date(h).toLocaleString("tr-TR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}</span>
                  </div>
                </div>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="color: #666666; margin: 0 0 15px 0; font-size: 14px; line-height: 1.5;">
                Bu mesaj AKKUS website iletişim formundan otomatik olarak g\xf6nderilmiştir.
              </p>
              <div style="border-top: 1px solid #e0e0e0; padding-top: 15px;">
                <p style="color: #999999; margin: 0; font-size: 12px;">
                  \xa9 2024 AKKUS - Modern Teknolojinin \xd6nc\xfcs\xfc | İstanbul, T\xfcrkiye
                </p>
              </div>
            </div>
            
          </div>
          
        </body>
        </html>
      `};console.log("Attempting to send email..."),console.log("Email config:",{...k,auth:{...k.auth,pass:"***"}}),console.log("Mail options:",m);let n=await l.sendMail(m);console.log("Email sent successfully:",n.messageId),console.log("=== ADMIN EMAIL SENT ==="),console.log("Event: mail_sent"),console.log("Type: admin_notification"),console.log("To:",process.env.CONTACT_EMAIL||"destekakkus@gmail.com"),console.log("MessageId:",n.messageId),console.log("Timestamp:",h);let o={from:process.env.SMTP_USER||"destekakkus@gmail.com",to:c,subject:"Mesajınız alındı — Teşekk\xfcrler",text:`
Merhaba ${b},

Mesajınızı aldık. En kısa s\xfcrede size d\xf6n\xfcş yapacağız.

G\xf6nderdiğiniz konu: ${d}
Tahmini d\xf6n\xfcş s\xfcresi: 24-72 saat

Mesajınız:
${e}

Sonraki Adımlar:
1. Mesajınız ekibimiz tarafından incelenecek
2. Tahmini d\xf6n\xfcş s\xfcresi: 24-72 saat
3. Acil durumlar i\xe7in: +90 552 507 91 46

İyi g\xfcnler,
Akkus Destek

Bu otomatik bir onay e-postasıdır. L\xfctfen yanıtlamayın.
\xa9 2024 AKKUS - Modern Teknolojinin \xd6nc\xfcs\xfc
      `,html:`
        <!DOCTYPE html>
        <html lang="tr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>AKKUS Onay Mesajı</title>
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          
          <!-- Main Container -->
          <div style="max-width: 650px; margin: 20px auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15);">
            
            <!-- Header with Logo -->
            <div style="background: linear-gradient(135deg, #00f5ff 0%, #8A2BE2 100%); padding: 40px 30px; text-align: center; position: relative;">
              <!-- Logo Container with Image -->
              <div style="display: inline-block; background: rgba(255,255,255,0.15); padding: 20px 30px; border-radius: 15px; margin-bottom: 15px; border: 2px solid rgba(255,255,255,0.3); backdrop-filter: blur(10px);">
                <img src="https://akkus.vercel.app/AKKUS.png" alt="AKKUS Logo" style="max-width: 120px; height: auto;">
              </div>
              <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px; font-weight: 300;">Modern Teknolojinin \xd6nc\xfcs\xfc</p>
            </div>
            
            <!-- Content Area -->
            <div style="padding: 40px 30px;">
              
              <!-- Success Badge -->
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; background: #28a745; color: white; padding: 15px 30px; border-radius: 6px; font-size: 18px; font-weight: 600;">
                  ✅ Mesajınız Başarıyla Alınmıştır
                </div>
              </div>
              
              <!-- Welcome Message -->
              <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #28a745; border: 1px solid #e0e0e0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #28a745; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">👋</span>
                  Merhaba ${b},
                </h3>
                <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #e0e0e0;">
                  <p style="line-height: 1.7; color: #333333; margin: 0; font-size: 15px;">
                    Mesajınızı aldık. En kısa s\xfcrede size d\xf6n\xfcş yapacağız.
                  </p>
                </div>
              </div>
              
              <!-- Message Details Card -->
              <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #007bff; border: 1px solid #e0e0e0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #007bff; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">📋</span>
                  Mesaj Detayları
                </h3>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                    <span style="color: #007bff; font-weight: 600; min-width: 80px;">Konu:</span>
                    <span style="color: #333333; font-weight: 500;">${d}</span>
                  </div>
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                    <span style="color: #007bff; font-weight: 600; min-width: 80px;">Tarih:</span>
                    <span style="color: #333333; font-weight: 500;">${new Date().toLocaleString("tr-TR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}</span>
                  </div>
                </div>
                <div style="margin-top: 15px; padding: 15px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
                  <p style="color: #007bff; font-weight: 600; margin: 0 0 10px 0; font-size: 14px;">Mesajınız:</p>
                  <p style="line-height: 1.6; color: #333333; margin: 0; font-size: 14px; white-space: pre-wrap; background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 3px solid #007bff;">${e}</p>
                </div>
              </div>
              
              <!-- Next Steps Card -->
              <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #ffc107; border: 1px solid #e0e0e0;">
                <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #ffc107; color: #333333; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">🚀</span>
                  Sonraki Adımlar
                </h3>
                <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #e0e0e0;">
                  <div style="display: grid; gap: 15px;">
                    <div style="display: flex; align-items: center; padding: 12px; background: #f8f9fa; border-radius: 6px; border-left: 4px solid #007bff;">
                      <span style="background: #007bff; color: white; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">1</span>
                      <span style="color: #333333; font-weight: 500;">Mesajınız ekibimiz tarafından incelenecek</span>
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px; background: #f8f9fa; border-radius: 6px; border-left: 4px solid #007bff;">
                      <span style="background: #007bff; color: white; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">2</span>
                      <span style="color: #333333; font-weight: 500;">Tahmini d\xf6n\xfcş s\xfcresi: 24-72 saat</span>
                    </div>
                    <div style="display: flex; align-items: center; padding: 12px; background: #f8f9fa; border-radius: 6px; border-left: 4px solid #ffc107;">
                      <span style="background: #ffc107; color: #333333; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">📞</span>
                      <span style="color: #333333; font-weight: 500;">Acil durumlar i\xe7in: <strong>+90 552 507 91 46</strong></span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Contact Info -->
              <div style="text-align: center; margin: 30px 0;">
                <div style="display: inline-block; background: #007bff; color: white; padding: 15px 25px; border-radius: 6px; font-size: 14px; font-weight: 600;">
                  💼 AKKUS - Modern Teknolojinin \xd6nc\xfcs\xfc
                </div>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="color: #666666; margin: 0 0 15px 0; font-size: 14px; line-height: 1.5;">
                Bu otomatik bir onay e-postasıdır. L\xfctfen yanıtlamayın.
              </p>
              <div style="border-top: 1px solid #e0e0e0; padding-top: 15px;">
                <p style="color: #999999; margin: 0; font-size: 12px;">
                  \xa9 2024 AKKUS - Modern Teknolojinin \xd6nc\xfcs\xfc | İstanbul, T\xfcrkiye
                </p>
              </div>
            </div>
            
          </div>
          
        </body>
        </html>
      `};try{let a=await l.sendMail(o);console.log("Confirmation email sent successfully to:",c),console.log("=== USER CONFIRMATION EMAIL SENT ==="),console.log("Event: mail_sent"),console.log("Type: user_confirmation"),console.log("To:",c),console.log("MessageId:",a.messageId),console.log("Timestamp:",h)}catch(a){console.error("Confirmation email failed:",a),console.log("=== USER CONFIRMATION EMAIL FAILED ==="),console.log("Event: mail_failed"),console.log("Type: user_confirmation"),console.log("To:",c),console.log("Error:",a),console.log("Timestamp:",h)}return u.NextResponse.json({message:"Mesaj başarıyla g\xf6nderildi! Onay e-postası g\xf6nderildi."},{status:200})}catch(a){return console.error("=== EMAIL ERROR ==="),console.error("Email g\xf6nderme hatası:",a),console.log("=== EMAIL SEND FAILED ==="),console.log("Event: mail_failed"),console.log("Type: admin_notification"),console.log("Error:",a),console.log("Timestamp:",new Date().toISOString()),a instanceof Error&&(console.error("Error message:",a.message),console.error("Error stack:",a.stack)),console.error("Full error object:",JSON.stringify(a,null,2)),u.NextResponse.json({error:"Mesaj g\xf6nderilirken bir hata oluştu. L\xfctfen tekrar deneyin."},{status:500})}}let y=new e.AppRouteRouteModule({definition:{kind:f.RouteKind.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:"app/api/contact/route"},distDir:".next",relativeProjectDir:"",resolvedPagePath:"C:\\Users\\\xd6MER\\OneDrive\\Masa\xfcst\xfc\\akkus\\src\\app\\api\\contact\\route.ts",nextConfigOutput:"",userland:d}),{workAsyncStorage:z,workUnitAsyncStorage:A,serverHooks:B}=y;function C(){return(0,g.patchFetch)({workAsyncStorage:z,workUnitAsyncStorage:A})}async function D(a,b,c){var d;let e="/api/contact/route";"/index"===e&&(e="/");let g=await y.prepare(a,b,{srcPage:e,multiZoneDraftMode:!1});if(!g)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:u,params:v,nextConfig:w,isDraftMode:x,prerenderManifest:z,routerServerContext:A,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,resolvedPathname:D}=g,E=(0,j.normalizeAppPath)(e),F=!!(z.dynamicRoutes[E]||z.routes[D]);if(F&&!x){let a=!!z.routes[D],b=z.dynamicRoutes[E];if(b&&!1===b.fallback&&!a)throw new s.NoFallbackError}let G=null;!F||y.isDev||x||(G="/index"===(G=D)?"/":G);let H=!0===y.isDev||!F,I=F&&!H,J=a.method||"GET",K=(0,i.getTracer)(),L=K.getActiveScopeSpan(),M={params:v,prerenderManifest:z,renderOpts:{experimental:{cacheComponents:!!w.experimental.cacheComponents,authInterrupts:!!w.experimental.authInterrupts},supportsDynamicResponse:H,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:null==(d=w.experimental)?void 0:d.cacheLife,isRevalidate:I,waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:void 0,onInstrumentationRequestError:(b,c,d)=>y.onRequestError(a,b,d,A)},sharedContext:{buildId:u}},N=new k.NodeNextRequest(a),O=new k.NodeNextResponse(b),P=l.NextRequestAdapter.fromNodeNextRequest(N,(0,l.signalFromNodeResponse)(b));try{let d=async c=>y.handle(P,M).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=K.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${J} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${J} ${a.url}`)}),g=async g=>{var i,j;let k=async({previousCacheEntry:f})=>{try{if(!(0,h.getRequestMeta)(a,"minimalMode")&&B&&C&&!f)return b.statusCode=404,b.setHeader("x-nextjs-cache","REVALIDATED"),b.end("This page could not be found"),null;let e=await d(g);a.fetchMetrics=M.renderOpts.fetchMetrics;let i=M.renderOpts.pendingWaitUntil;i&&c.waitUntil&&(c.waitUntil(i),i=void 0);let j=M.renderOpts.collectedTags;if(!F)return await (0,o.I)(N,O,e,M.renderOpts.pendingWaitUntil),null;{let a=await e.blob(),b=(0,p.toNodeOutgoingHttpHeaders)(e.headers);j&&(b[r.NEXT_CACHE_TAGS_HEADER]=j),!b["content-type"]&&a.type&&(b["content-type"]=a.type);let c=void 0!==M.renderOpts.collectedRevalidate&&!(M.renderOpts.collectedRevalidate>=r.INFINITE_CACHE)&&M.renderOpts.collectedRevalidate,d=void 0===M.renderOpts.collectedExpire||M.renderOpts.collectedExpire>=r.INFINITE_CACHE?void 0:M.renderOpts.collectedExpire;return{value:{kind:t.CachedRouteKind.APP_ROUTE,status:e.status,body:Buffer.from(await a.arrayBuffer()),headers:b},cacheControl:{revalidate:c,expire:d}}}}catch(b){throw(null==f?void 0:f.isStale)&&await y.onRequestError(a,b,{routerKind:"App Router",routePath:e,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})},A),b}},l=await y.handleResponse({req:a,nextConfig:w,cacheKey:G,routeKind:f.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:z,isRoutePPREnabled:!1,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,responseGenerator:k,waitUntil:c.waitUntil});if(!F)return null;if((null==l||null==(i=l.value)?void 0:i.kind)!==t.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==l||null==(j=l.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,h.getRequestMeta)(a,"minimalMode")||b.setHeader("x-nextjs-cache",B?"REVALIDATED":l.isMiss?"MISS":l.isStale?"STALE":"HIT"),x&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,p.fromNodeOutgoingHttpHeaders)(l.value.headers);return(0,h.getRequestMeta)(a,"minimalMode")&&F||m.delete(r.NEXT_CACHE_TAGS_HEADER),!l.cacheControl||b.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,q.getCacheControlHeader)(l.cacheControl)),await (0,o.I)(N,O,new Response(l.value.body,{headers:m,status:l.value.status||200})),null};L?await g(L):await K.withPropagatedContext(a.headers,()=>K.trace(m.BaseServerSpan.handleRequest,{spanName:`${J} ${a.url}`,kind:i.SpanKind.SERVER,attributes:{"http.method":J,"http.target":a.url}},g))}catch(b){if(L||b instanceof s.NoFallbackError||await y.onRequestError(a,b,{routerKind:"App Router",routePath:E,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})}),F)throw b;return await (0,o.I)(N,O,new Response(null,{status:500})),null}}},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},91645:a=>{"use strict";a.exports=require("net")},94735:a=>{"use strict";a.exports=require("events")},96487:()=>{}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[586,692,112],()=>b(b.s=84468));module.exports=c})();