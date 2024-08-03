//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBocmcrcENrVmhNN0xySU9jZElhSjltdzJlK3AvU1dhZCtRVUFHU1hXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlpxTncvOGJObGVaNnFjRU40UTFxdGliUFVYR3d0L3VwV0VXWk1lQWltaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUCtYbktBOVNXQmx1aTI2Wm5zVzREL3FlNE0ydFNscEU5a1VqWUhhRkZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJySFhZa1NYNjRrUHo3MmVVSXo5VXRiOGUyN0hzYSttWlUzcS9oOFB3VGhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVCYXV0cHl4Q29FVWUzd2R4R0gxQnY4ZHNxMHVZQWtVZ1ZaWE1wOTV0a2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9xeXRWYVdGdFRIUUZvRzRmWFcwZXQ0WENBYnBWK2dDejRib1dKeEFmVG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0Z3U0FsbmlxV3pwVTY0clJHam9wR2NOU2RCRTkxZDZ2MmdkTjdFZVdYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielU1bkVENkJZamFMNWZBWVFjVlB6UGp5VXllUS9LSzN0WThjSzVkZENoOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5qdDVXeTNHMExtVEFxdUFXZEdnQVEvK2duWUd3enMyWTR0RU5Ub25WLy9ldUZoWWxxUzVVc2k4ZHNycjFtN3lJRHFsZmJibzFjVTkvU3pXRExWUURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiJuOUhMblY2TmNobzlXNDZCaHkvUmpZZGl2ZEwyMHMrOXhaTXRacGl6S2R3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg1NTQ3MjYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU1QUU5M0M1M0EwQjRGNTQ0N0Q0NEU3RTlCQTQzRkQyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI2NzkzNDV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg1NTQ3MjYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM2NjBCRDJERjMxODNFQkI1NzEzNjZCMzMyQzVFQ0VCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI2NzkzNDZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlNHY1cyWEFfUnQ2dWFGemFKY1NoWnciLCJwaG9uZUlkIjoiM2FiY2I3NGUtNmMyMi00NzIwLThlNDMtZWEzOGNkNGUyNGZmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9QWXVLWHlNbHh0cURlZnhpRW15Y0l1MmVXVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhd01QVUR3dFpRYXdRczB5S0NOZitsYlRQWlk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUlpORDU5TVEiLCJtZSI6eyJpZCI6Ijk0Nzg1NTQ3MjYwOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSU1FU0gifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01uKzBQVUdFS0tBdUxVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilhac1JELzJjSDZtd29WdGI5aU5RQVU3aSt5aG11bW1XYUlySysvcDVmbkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9FakUwc3R6dHVDSlg5QmRvUUdNSzVKTVgvV0x6NmpUeVN5SURFM3kyWktZU3FxS21YMGt3TG9iYUlvQnlpeCszOU9iamY2TWxXcjYrRThGa3RGcERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZYUZTUk5YOGdCeGI2d0dWV2lPN0FSTS9BZ29rVUZwSnhKaS8xV3BoeWZNYkxEWXZmMXZQZVJXY1gvY2wxMmdYRzVxZC9td0RWeE1aTXRWZWpTUEhEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg1NTQ3MjYwOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjJiRVEvOW5CK3BzS0ZiVy9ZalVBRk80dnNvWnJwcGxtaUt5dnY2ZVg1eSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjY3OTM0MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQOUUifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
