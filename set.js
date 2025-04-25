/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUk3UjM5S0IvQnNGRTZQSUNLYllxcFhmdVFuSW1jQWJjdzRudjBwd2xIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDZ3SC9NUUd3aWZ5Y1FQYmlBTzJTVHZ5bVZoWW9icmdjNHJmUVQ3L0N4az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSFNTbkN3MTVXRXpFQUdoUUF1akRpNTc5Z0kvVjdFRlVzcVZ1Wm4vajI0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKajhVMkYzY0VmeTdTaXdrM3JUa2Y5VzBNdFRJMmFVZFd3UVRnSTc0eG1BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MMHIyaDEyVitQVGZKbGFBNnJTN3VVTFZ3VlJQeCtOZS8yRUpWQk9jMnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFZb3pNdXV5TEIwL3BNUkVmNGI3emVZc0JWUnd6TEhLMHJTNlJsNVozU009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV012bk5QSUlMd1RpMG14V3puVW1OZldHRlhlTGY2c2U2ZWp3YS8wRmFuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVm9XQ0ZvWjdRU1QvTUhHVy9DYVVrbDBCdlJtQXFNMWU2NDFJd3dhNUUwbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQ5dk1Sd2s2dHZ0ZDJQc2tWMkJFM0hYWXhIZ3BsbkRvc1A1LzVwSU1WYmNXdEtkZjIrcUdPYm1yV3BXR3NKOEJCMzVWRloxZWRRZ0w4Y3lBVXpycmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiJmVVR5UTdkVVB3WFRjenVla3ZzZzcrSmM4Y0g0TDhtakZGUkVKL3BqR1VnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwMjYxMzgzODRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkZENTg0QTMzMkY1OEU5RjMyQTkxRjQzRTgwOEEyQ0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTYxNTYwNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzAyNjEzODM4NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4QUM5ODJBNDEzMjEzQjQ0QjY5QzJCQjMyNzU2MTJDQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1NjE1NjA4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlNXBWUWwyalEzU2RBcUQ5aUd4a21RIiwicGhvbmVJZCI6ImQ1MTJmZjkxLTIzYjItNGMxYS1iNjA2LWVmNGYwMDE3MTQzNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUFBXQ0k5STFRdVZ5ZnNWbzczcWxUQ3dPcHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHpvZ1NLM0VGem8zcE0yUnV5Wm56MHgxSW40PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJFMjlGTjNDIiwibWUiOnsiaWQiOiIyMzQ3MDI2MTM4Mzg0OjQxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdlbTwnZW/8J2WhSDwnZWt8J2VvfCdlbTwnZWs8J2VuSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmFQMHBrSEVOcjFyOEFHR0I4Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMlVGZmYrb25yNXlNWVpPeWpPb1RUMmVjU05Tdzh6Mml3ODVNT21BSnNBRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoib0poMGFNYlVmT0ZucjFGTC9nTUFTbXpwY29jVzFUVzZOT2ptaWR5WFJ3U0QxZzBJZGxKVitjcVZOTGlQVFZmTTJZVHVIY2lRU3dZMlp1UFYxUDRzRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IlRhRjZWSzA5UjFjd29TZDVhKzhKZjJ5WmE4WkEzWkNORkpJYmd0Qm5ua1d0VkI2UkI4eDR6dHVNamZnZkJqb3JLcWZENEJZTnBzcHZnYlloTlJ5QWhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzAyNjEzODM4NDo0MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkbEJYMy9xSjYrY2pHR1Rzb3pxRTA5bm5FalVzUE05b3NQT1REcGdDYkFCIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ1NjE1NTkyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtCNCJ9';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'FALSE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'FALSE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || ',';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'FALSE';
const botname = process.env.BOTNAME || 'SPIDER-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || 'spider';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254112011036';
const menu = process.env.MENU_TYPE || 'VIDEO';
const DevRaven = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
