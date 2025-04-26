/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0pCVHNFeWQ5ZFhxbXhWczZSSkdwQkwreVZRSTczeTZCenZlNnR5alZscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTRDQ1gveTdVMHdCNzlXb1h1c1dzajdmd3RFTmhyV2xqVWRZR0NnMEZBUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRUw2QmJLalVLVWhvN01YTmpHY2NhRDBUTndEZ004dDFqdXpJU1hXeEhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQ3pSVUJFQjhPTzY5eERUVENGSUVucWNlUk9oSFhtditqeDJWelhZN1ZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFCZWs1QVpJTitDTVd0OVUzcGRyaVhVcllFT1dOa2taTDVjV2VmZVNMbnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE1WDl2WFYrS2VjOVdHVlhXZlQyR3FWeXl2dEtGUzNGbFE5UWd4b1g1V2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1tc2JEeElkUU0va3htNlhTNEpNU0haMEhuVlM2RWNvOWVDaTVEQmJWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3ZUdDFzNG5RZFpxTHFveDNKaHk5cWFFckNHN1B1aElIOXVpd3VMS1loUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZvT3hLRjlnN3NtVkZ0UUswVDRDMXlWamwzc2JpdnV4Z0NLTGFtakR6Y3lKdUZNR0FwTGtMUUF5N0xZaGN0VkxUbERId1A1cU9LazN4NXRLZTZTcmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiJBTHBIbjl0MXE3aVo4WHZHd05ZVEs2U3VQQzdDMktLK2NWbkFJeGk1VWRJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwMjYxMzgzODRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDMyMjgxQjg2MTUyN0M3REQzODM5MzUzNUE0NzYxRUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTY4Nzc3OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzAyNjEzODM4NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwOEZCRTlCN0ZGMTkxODg2OUNFNjQzMzQwQzJDRERGRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1Njg3Nzg2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxZV9LVzhxTVFzSy1IQUlPcndwMFZRIiwicGhvbmVJZCI6IjZhZTExNWMwLTAwNjQtNDBlZC04NTQ3LTg4MTUyNDZkNGVkMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNeHFJRXc3R0NIMEhHM3JPYUxta2VDUUtDQ2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXQxa0xJeTAxTXVzZGJOdjlsbnhZeUNJOGRzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iks5MlY3QUhEIiwibWUiOnsiaWQiOiIyMzQ3MDI2MTM4Mzg0OjQ2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdlbTwnZW/8J2WhSDwnZWt8J2VvfCdlbTwnZWs8J2VuSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmFQMHBrSEVNZXB0TUFHR0NRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMlVGZmYrb25yNXlNWVpPeWpPb1RUMmVjU05Tdzh6Mml3ODVNT21BSnNBRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV1RROWZIU0xjMEtMUXZWVXNNVGZ2czlyY0pZcUZNU25nRzR6bkRwNEZISGs0Z3d1aGswZ292cExqSGJnaEZPdkFYWnk4eWRRZEFjR3ZlSmNGa0hNQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IlJpdkJKWHRFRDd5bkROeDFTMnVid2tvZGh4TXRFZ0tBWlNFTFNkNzk1UEVYWkVCTWxmMS9wQ3NYNEVvcWNoZjFNeUFyd1p2VDhtNWRRSG9ZNkl2OWpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzAyNjEzODM4NDo0NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkbEJYMy9xSjYrY2pHR1Rzb3pxRTA5bm5FalVzUE05b3NQT1REcGdDYkFCIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ1Njg3NzY2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtCNCJ9';
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
