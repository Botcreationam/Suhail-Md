const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://josiahngosa:Franklin04@cluster0.xf7afri.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Zambia";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "FRANKLIN ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "260978277538";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260978277538";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_43_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkwLFxuICAgICAgICA1NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExLFxuICAgICAgICAzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzLFxuICAgICAgICA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDUyLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI5LFxuICAgICAgICA4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MixcbiAgICAgICAgMTU4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NixcbiAgICAgICAgMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDk1LFxuICAgICAgICA4MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCc3FlYWdubTVOcTBQS3daa1dRODVLTGtkRWd4Q3BQZmhlUUdGRzA2OHI0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MDk3ODI3NzUzOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkI1N0Y5RjhFOUMyREMwMDQxQjA2MTE1MUEwNkMyMzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4Mjg2MjE5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkttRzdNZjQ1UTVXWU1vY2dCcFBxWXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGYzZmI1NDUtODc0NC00NTNkLWJlNjItZDA1ZWM3ODg1YmQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgNjgsXG4gICAgICAzNixcbiAgICAgIDU2LFxuICAgICAgMjEsXG4gICAgICAxNDIsXG4gICAgICA1LFxuICAgICAgMTQ1LFxuICAgICAgMTc3LFxuICAgICAgMTQ5LFxuICAgICAgNDgsXG4gICAgICAxMjMsXG4gICAgICAxNzAsXG4gICAgICA1MSxcbiAgICAgIDIzOSxcbiAgICAgIDgwLFxuICAgICAgOTIsXG4gICAgICAxNjEsXG4gICAgICAxMzYsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgsXG4gICAgICAxMjMsXG4gICAgICAxMDksXG4gICAgICAxNjAsXG4gICAgICA5MSxcbiAgICAgIDQ1LFxuICAgICAgMjI3LFxuICAgICAgMTc0LFxuICAgICAgMTE2LFxuICAgICAgMzYsXG4gICAgICAxNjYsXG4gICAgICAyMTUsXG4gICAgICA4NixcbiAgICAgIDMxLFxuICAgICAgMjE3LFxuICAgICAgNTQsXG4gICAgICAzMixcbiAgICAgIDE3LFxuICAgICAgMTc1LFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU05EUTM5TDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDk3ODI3NzUzODo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQzNjQ5ODk1NjY1ODg3OjU1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lEWTdESVFndStyc3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQlhJZXJjV1VNRHYvaXVwUjNvU0FHbXd3MHh0M25ZcXJrcGRKNXlaUUhXcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEVFFWOUJyenV5Zzc2VlVZWXJSeDFwOEc0M1oyOVZrRmNZanBtUG1ua3Z5S3hNdEVDczJtMmNrbWFkZlp3OGlSejVzL3J4bFJzRnRYYkZGL0FBVnVEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlWXdpREtaQ0JoZFAraVB4UDY4eDU0QW90aDgyU2g0WXVOaTFtQnJXMllmNzQvZDJ4QlY5RnZUai9ueWo0Q1ljdGcwcHhVOHZPOU5tVENqbkU0VlRDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA5NzgyNzc1Mzg6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODI4NjIxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBIM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUEgzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVjg4RnBxdE4zcTJoajZBWnFGbXpUaXJNS0tzTmhYSU5LdWZRcFVqT2dOaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDY2MzgzMzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODI4NjIyMTI5NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "FRANKLIN 💓🥲",
  packname: process.env.PACK_NAME || "+260978277538 FRANKLIN LOVES YOU💓🥲🌏",
  botname : process.env.BOT_NAME  || "FRANKLIN",
  ownername:process.env.OWNER_NAME|| "FRANKLIN 😄",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
