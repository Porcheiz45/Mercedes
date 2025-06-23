const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVBRWEE0UlpaM1hBTWg1NGZEak1BeHBuR3JxZTN2MEtqL0RvcWl3bkkyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1pHVWVlMjlYV1ljM2NLUDgyTUwxelFnbWZwUkZmbnFGMWNHM3hXYm5Ibz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Tk14WTF5dG81MVBNY3A3dUV0RkIrOVpsZzZyMlNTWWkxdExZb00rYzEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGeW11NkJTSWdMei9pOGpjRS9hN2tIdWJ0aFl2Rm9QazBVZVhzNmh4LzBzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdMc0dESHVqbTQwSWpBUzZLcGg5U3NqclVMeHB6RlgyN2FheDNiTUdPMEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPWjZISU9zNHVsKzlvNC96QTlLZHNHcW5IYjRFV0w1aEZ0eUtBYjhYUm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09vSmQ2VDQ3TXBDSGs3TTk0V01Tc25uV2ZWMERkUkc4bE05UzgycW1FST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEl4bUNPVjhaMG5nUVZNTkZXNTVUTFlDWWo1eEMvYjk4VkpVc1UzU3lGVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVUc2lvVTlzYjNLamZ4czlHUkZVUUZ4WC96emg5UkhvVnhwR3dKbFc3R2RKazl3eTgwVzk1K01iVlg2eUk4WUc4RGo0TXQ4WHhYc21wTGlUbE8wL2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6InZTRzhrRDl4ZmVIY1RUS0JSUktpbnZybUdDSUcvS0JOY1ZscGZwZWxNK3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzEwNTYzMzE2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFGNENDMjBBRkYwMUVDREVDQjlDMTFBNEI0NzBDRTAwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA2ODc0MTJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTcxMDU2MzMxNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4NUE4Q0EwNjYyOTNDMkQ0MEU3RkQ4ODQzMjdDRDUwRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwNjg3NDEyfV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJLOFdCU0Q0VCIsIm1lIjp7ImlkIjoiMjU1NzEwNTYzMzE2OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUG9yY2hlaXouLi4uLi4uLi4uLi4iLCJsaWQiOiIyMzIzMTEyMDc1MTQzNTg6NkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xtOXp1a0hFS0c5NWNJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Iis1VC9CWDNCUUFYclNtS0I3RS9lK1k1R1pQTllrRkpYKzBRc29SMkNxZ2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNpTVkxa0UvUkRubXdGcmpiaEtiTHZ1SWc1bmJodnI3WDdqV1JRNVY2QXRlV2tTa2Zmb3h1c1MxVkZtcHZja3A2cG4yVXN6UVlibHZUTmZBeHMvb0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxdGdmVlkzemNCRGVrb0lkWFBlRXFCSWxrYkxwbDNYdFJYZjl0ejNmcnQ4ZDUxbjk1M1VFVkJZRmVBR2twbk1raUpleTZpVWt4dnpVdHpsb01ScnppQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTcxMDU2MzMxNjo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZ1VS93Vjl3VUFGNjBwaWdleFAzdm1PUm1UeldKQlNWL3RFTEtFZGdxb0oifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDY4NzQwNywibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJOE4ifQ==",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/7zfdcq.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Mercedes",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Marisel",
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
