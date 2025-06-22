const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEpBRWIxaDEyZG1sRUNHdWoxTGF2MFczSkUyUGl6NS9RZTZYUGdYallWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlFxUkdFZzYvMWhoQS9aL3NLQ1Y1c25pNzk1cTR6TFljdG1MN3BhNDh5RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUDJiVFJQb1FJNXVWZTJYTnpuVlBzUW5TOUNuRmI4eFdTNktxTXI1K1VnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkOTcvaEhqVTNVZ1RyNDFWSDdWS21XU3NPdTJjL1JISHcrUHRMbE5ockQ4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNHVHlmS1FlaWJMbW5aNStoSHhpMmZhUk5CY2NFM0xka3E0ZC8vTTFaSFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNiMGFGUVNUNTVZTVhQeHlIdjZvcExLQUF2cThuQU84L0Y0WFR3ZXJuWEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0EwRzZZYXNSakp2Z2V0N01EQVlOOEFpMTZNalJHdC9XY0NvR2k3Zmkzbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2FlajUraklsVU9GRGd1V1dhL0IycnpQdGlGMUZ6OWhwVlhScnd3MmtFUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVpKzBmOUh0anBOTnNvZjArOTc3bTg5QkNPc3N0SWVqeWVuMWk0NGlBK1VQVXBXTGcwTUNWbGMrK3RoblA5YlBEMG1jQWtrWVY0NHhGcnlZTkhaMEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYxLCJhZHZTZWNyZXRLZXkiOiIxb1hEU3BhbEZiNDJhcC9WbUlKQ0oxTmRpc3F0eWF3SWYxU3NPL3RGSlk4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTcxMDU2MzMxNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2RkY1NDdERjJERTQyRTA4MzJCOTJEODFBOEJBODRFOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwNjI4MjgzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU3MTA1NjMzMTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzE1MkJFMTlGNTZBM0M2NUY2RjEwRjA3QTU1MTM1NDUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDYyODI4NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQVpWSzg1TVYiLCJtZSI6eyJpZCI6IjI1NTcxMDU2MzMxNjo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBvcmNoZWl6Li4uLi4uLi4uLi4uIiwibGlkIjoiMjMyMzExMjA3NTE0MzU4OjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMaTl6dWtIRUtudjRjSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIrNVQvQlgzQlFBWHJTbUtCN0UvZStZNUdaUE5Za0ZKWCswUXNvUjJDcWdrPSIsImFjY291bnRTaWduYXR1cmUiOiJGVFJ2OWRBblAwUkZpUGNSamN0VWtadURvUUhlUndnQkJ2TlNDM1BVaFc1NGtZemRoUDlPbWt3cVZlc0kzZGxjNm5lZkJpbVJMR3ljdGhkYk5VbWFBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaWdaYlNWUGJtVFVZRENTb2EvMGtPdFB0YnpjeCt5TWxxd2p5MjA2QU5ucWFMYTNEajhxMURxYkdyUVBhY2pmQ051N01EMDZnT294UGN3VTRkbzVoREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3MTA1NjMzMTY6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmdVUvd1Y5d1VBRjYwcGlnZXhQM3ZtT1JtVHpXSkJTVi90RUxLRWRncW9KIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA2MjgyNzgsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSThLIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*seen*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/zzcckn.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KHAN-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "KHAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "254740007567",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Marisel",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*Made By Marisel*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/avqa3c.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> *Marisel Made It*",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "254740007567",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
