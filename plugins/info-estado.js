/**
POR FAVOR TENGAN LA AMABILIDAD Y BONDAD DE NO CAMBIAR MÍNIMAMENTE LOS CRÉDITOS DE GATABOT-MD, 
SI VAS A AÑADIR TUS DATOS O CRÉDITOS, ESTA BIEN. PERO NO QUITEN LOS QUE YA ESTAN DE GATABOT-MD, GRACIAS 
**/

/** PLEASE BE KIND AND KINDNESS NOT TO MINIMALLY CHANGE GATABOT-MD CREDITS, 
IF YOU ARE GOING TO ADD YOUR DATA OR CREDITS, IT'S OK. BUT DO NOT REMOVE THOSE THAT ARE ALREADY FROM GATABOT-MD, THANK YOU **/
let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './media/menus/Menu1.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
╭━━━━[ *𝙀𝙎𝙏𝘼𝘿𝙊* ]━━━━━⬣
┃ *¡𝙃𝙤𝙡𝙖 𝙘𝙤𝙢𝙤 𝙚𝙨𝙩𝙖!* ${name}✨
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ 𝘽𝙤𝙩 𝙪𝙨𝙤 ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ 𝘼𝙘𝙩𝙞𝙫𝙤 𝙙𝙪𝙧𝙖𝙣𝙩𝙚
┃➥ ${uptime}
╰━━━━━━━━━━━━━━━━━━⬣`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/elrebelde21/The-LoliBot-MD', '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', null, null, [
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤', '.allmenu'],
['𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙', '/ping'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́', '#menu']
], m,)}

/*conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m)}*/

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats|botstat(us)?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
