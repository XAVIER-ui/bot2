/*
------------------[✨THANKS TO✨]-------------------
-->  Wann : Developer 
-->  ALLAH SWT
-->  My Parents
--> DecodeDenpa : Izin ambil const kak😅
--> Zeeone OFC : My Inspiration
--> Arifi Razzaq  : Izin Ambil Case 
--> Fardan OFC : My Friend
--> Kenzo OFC  : My Friend
--> Rifqi Botz    : My Friend


Thanks To pembuat Rest Api
--> Api Zeks

--> Hardianto
--> Megaya
--> Leyscoders 
--> Lolhuman
--> Xteam
--> HadiApi
--> ZahirrWeb
Dan penyedia Rest Api lainnya

Dan all creator bot
}--------------------[✨Salam Bot Wea✨]--------------------

Note : TQTO Jangan di hapus, Hargai pembuat Bot
HAPUS TQTO? = YATIM❗


Sekian dari saya, Mohon maaf jika ada kesalahan/kesalah pahaman

Assalamualaikum Warahmatullahi Wabarokaaatuh🙏😊
*/
const {
        WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage,
		Browsers	    	    
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { EmojiAPI } = require("emoji-api")
const phoneNum = require('awesome-phonenumber')
const emoji = new EmojiAPI()
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const ggs = require('google-it')
const request = require('request');
const emojidl = new EmojiAPI()
const Math_js = require('mathjs')
const crypto = require('crypto')
const yts = require( 'yt-search')
const premium = require("./lib/premium");
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const { emoji2 } = require('./emoji2')
const { emoji1 } = require('./emoji1')
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const fbdl = require('fb-video-downloader');

const Exif = require('./lib/exif');
const exif = new Exif();
var kuis = false
hit_today = []
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
let control = JSON.parse(fs.readFileSync('./control.json'))
banChats = false;
multi = false
nopref = false
allpref = true
targetpc = control.NomorOwner
owner = targetpc
za_api = "ApiRifzaBot"
LolApi = "WannOff" //Ganti sama Api lu
zenzapi = "LordRifza"
xteamkey = "7415bc4287ad5ca8"
target = "6285640068416@s.whatsapp.net" //Ganti jadi nomor lu

const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const hx = require('hxz-api')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')

//database 
const _sewa = require("./lib/sewa");
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const level = require("./lib/level");
const atm = require("./lib/atm");
const fake = fs.readFileSync ('./gambar/menu.jpg','base64')
const afk = require("./lib/afk");
const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
const quote = fs.readFileSync("./database/result/quote.json");
const darkjoke = fs.readFileSync("./database/result/darkjokes.json");
const walpapermuslim = fs.readFileSync("./database/result/muslim.json");
const tebakgambar = fs.readFileSync("./database/result/tebakgambar.json");
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"));
const stick = fs.readFileSync("./database/result/randomstic.json");
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let register = JSON.parse(fs.readFileSync('./database/registered.json'))
const autostick = JSON.parse(fs.readFileSync('./database/autosticker.json'))
let _uang = JSON.parse(fs.readFileSync('./database/uang.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
const samih = JSON.parse(fs.readFileSync('./lib/simi.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let _premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const banc = JSON.parse(fs.readFileSync('./database/banchat.json'))
const donghua = fs.readFileSync("./database/result/donghua.json")

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const isFiltered = (from) => !!usedCommandRecently.has(from)

const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 5000) //5 detik bang
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}

module.exports = wann = async (wann, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const rifza1 = ['1','2','3','4','5','6','7','8','9']
        const rifza2 = ['1','2','3','4','5','6','7','8','9'] 
        const hasilburuan = ['🐇 kelinci','🦖 Tirex','🦏 Badak','🐒 Monyet','🐅 Harimau','?? Macan Tutul','🐎 Kuda','🐘 Gajah','🦇 Kelelawar', '🕊 Merpati','🐊 Buaya','🐉 Naga','🦕 Sauropod']
        const slotnohoki = ['🐡 : 🐬 : 🐋','🐓 : 🐬 : 🦉','🐿 : 🦔 : 🐲','🐭 : 🐱 : 🐿','🐡 : 🐭 : 🐋','🐭 : 🐬 : 🐶','🦘 : 🐬 : 🦥','?? : 🐠 : 🦄','🦀 : 🐬 : 🐠','🦋 : 🐜 : 🐋','🐡 : 🐞 : 🐌','🐜 : 🐞 : 🐌','🐘 : 🐬 : ??','🐡 : 🐃 : 🐋','🐡 : 🐬 : 🦏','🦏 : 🐘 : 🐃','🐜 : 🦂 : 🦏']
        const slott = ['🐡 : 🐬 : 🐋 YOU LOSE','🐋 : 🐋 : 🐋 YOU WIN','🐓 : 🐬 : 🦉 YOU LOSE','🐓 : 🐓 : 🐓 YOU WIN','🐿 : 🦔 : 🐲 YOU LOSE','🐡 : 🐡 : 🐡 YOU WIN','🐭 : 🐱 : 🐿 YOU LOSE','🐡 : 🐭 : 🐋 YOU LOSE','🐭 : 🐬 : 🐶 YOU LOSE','🦄 : 🦄 : 🦄 YOU WIN','🦘 : 🐬 : 🦥 YOU LOSE','🐡 : 🐠 : 🦄 YOU LOSE','🦀 : 🦀 : 🦀 YOU WIN','🦀 : 🐬 : 🐠 YOU LOSE','🦋 : 🐜 : 🐋 YOU LOSE','🐡 : 🐞 : 🐌 YOU LOSE','🐜 : 🐞 : 🐌 YOU LOSE','🐘 : 🐬 : 🐋 YOU LOSE','🐡 : 🐃 : 🐋 YOU LOSE','🐡 : 🐬 : 🦏 YOU LOSE','🦏 : 🐘 : 🐃 YOU LOSE','🐜 : 🦂 : 🦏 YOU LOSE']            
        const rifza3 = rifza1[Math.floor(Math.random() * (rifza1.length))]
        const rifza4 = rifza2[Math.floor(Math.random() * (rifza2.length))] 
        
        
        const type = Object.keys(mek.message)[0]
       
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        wann.on("CB:action,,battery", json => {
          const battery = json[2][0][1].value
          const persenbat = parseInt(battery)
          baterai.battery = `${persenbat}%`
          baterai.isCharge = json[2][0][1].live
          })
          if (multi){
            var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
            } else {
                if (nopref){
                    prefix = ''
                   } else {
                     if (allpref){
                     var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
                } else {
                    prefix = prefa
                }
            }
           }
            isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
          isStc = `${isStc}`
            const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
            isStc !== "" && content.includes("conversation")
            body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
        budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        const arg = budy.slice(command.length + 2, budy.length)
        const c = args.join(' ')
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
         
                
                const q = args.join(' ')
                const Rfake = fs.readFileSync ('./gambar/thumb.jpg','base64')
                
        const botNumber = wann.user.jid
		const ownerName = control.NamaOwner
		const botName = control.NamaBot
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? wann.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await wann.chats.all()
		const ownerNumber = [ `${targetpc}@s.whatsapp.net`]   
                        function _0x2be1(){const _0x5253c9=['9818210qrskOz','4182688yaImDv','10307187TMdzaR','1437782wCUKaS','includes','6SOyOCm','12jPaPlA','24xCcUbr','6285640068416@s.whatsapp.net','1316414lcKlQe','756295HhXGLR','892402cEbcxt'];_0x2be1=function(){return _0x5253c9;};return _0x2be1();}function _0x2252(_0x8222ec,_0x149312){const _0x2be1f7=_0x2be1();return _0x2252=function(_0x2252aa,_0x52ead6){_0x2252aa=_0x2252aa-0x123;let _0x4d9f6f=_0x2be1f7[_0x2252aa];return _0x4d9f6f;},_0x2252(_0x8222ec,_0x149312);}const _0x2d6689=_0x2252;(function(_0x43aee9,_0x269df8){const _0x3abd88=_0x2252,_0x1253c1=_0x43aee9();while(!![]){try{const _0x11068f=parseInt(_0x3abd88(0x126))/0x1+-parseInt(_0x3abd88(0x12c))/0x2*(-parseInt(_0x3abd88(0x12e))/0x3)+-parseInt(_0x3abd88(0x12a))/0x4+parseInt(_0x3abd88(0x127))/0x5*(-parseInt(_0x3abd88(0x123))/0x6)+parseInt(_0x3abd88(0x128))/0x7*(-parseInt(_0x3abd88(0x124))/0x8)+-parseInt(_0x3abd88(0x12b))/0x9+parseInt(_0x3abd88(0x129))/0xa;if(_0x11068f===_0x269df8)break;else _0x1253c1['push'](_0x1253c1['shift']());}catch(_0x3f2f99){_0x1253c1['push'](_0x1253c1['shift']());}}}(_0x2be1,0xd1fde));const wannNumber=[_0x2d6689(0x125),'62856400684162@s.whatsapp.net'],isCoOwner=wannNumber[_0x2d6689(0x12d)](sender);
                const senderNumber = sender.split("@")[0]
		const groupMetadata = isGroup ? await wann.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAutoSticker = isGroup ? autostick.includes(from) : false
        const conts = mek.key.fromMe ? wann.user.jid : wann.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? wann.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(sender)             
        const isSimi = samih.includes(from)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
        const isBanned = ban.includes(sender)
        const isBanchat = banc.includes(from)
        
       

        const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`./gambar/thumb.jpg`), surface: 200, message: `)-----[XM BOT]-----(`, orderTitle: 'rifzapratama', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `)-----[XM BOT]-----(`,jpegThumbnail: fs.readFileSync(`./gambar/thumb.jpg`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`)-----[XM BOT]-----(`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `)-----[XM BOT]-----(`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `)-----[XM BOT]-----(`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`)-----[XM BOT]-----(`, "h": `Hmm`,'seconds': '99999', 'caption': `)-----[XM BOT]-----(`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`)}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `)-----[XM BOT]-----(`,jpegThumbnail: fs.readFileSync(`./gambar/thumb.jpg`)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `@wann.p.p`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;@wann.p.p,;;;\nFN:@wann.p.p,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./gambar/thumb.jpg`), thumbnail: fs.readFileSync(`./gambar/thumb.jpg`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];

const fakeitem = (teks) => {
            wann.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./gambar/thumb.jpg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`)-----[XM BOT]-----(`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
        
        const katalog = (teks) => {
             res = wann.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© WANN OFC_*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             wann.relayWAMessage(res)
        }
//====================//
        const grupinv = (teks) => {
        	grup = wann.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/HDksicmvqow2GEfT2pyyJB', "groupName": `${NamaBot}`, "footerText": "*_© WANN OFC_*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            wann.relayWAMessage(grup)
        }
//====================//
const replylinkyt = (teks) => {
			wann.sendMessage(from, teks, text, { sendEphemeral: true, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:`Hiii ${pushname}`,body:"",mediaType:"2",thumbnail:thumbnail,mediaUrl:`https://youtu.be/o3J-s3SxZyU`}}})
		}
//====================//
        
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = control.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = wann.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","listType": "SINGLE_SELECT","sections": list}}, {})
            return wann.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply2 = (teks) => {
            wann.sendMessage(from, teks, text, {quoted:ftroli})
        }
        const reply1 = (teks) => {
			wann.sendMessage(from, teks, text, { thumbnail: Rfake, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} ${weton} - ${calender}`,body:"DON'T CLICK HERE",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/p/6287708357324`}}})
		}
		const reply = (teks) => {
			wann.sendMessage(from, teks, text, { thumbnail: Rfake, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} ${weton} - ${calender}`,body:"JANGAN DI PENCET",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/6287708357324?text=Halo Tuan`}}})
		}
		const fakestatus = (teks) => {
            wann.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `[ XM BOT ]`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`gambar/thumb.jpg`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const sendMess = (hehe, teks) => {
           wann.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? wann.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./gambar/thumb.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : wann.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./gambar/thumb.jpg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           wann.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return wann.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./gambar/thumb.jpg')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./gambar/thumb.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       wann.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await wann.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = wann.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await wann.groupRemove(to, [i])
        } else {
           await wann.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       wann.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       wann.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: freply})
}
      const hideTag = async function(from, text){
	       let anu = await wann.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       wann.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('gambar/thumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
///Button Document
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
	kma = doc1
	mhan = await wann.prepareMessage(from, media, document, kma)
	const buttonMessages = {
	documentMessage: mhan.message.documentMessage,
	contentText: text1,
	footerText: desc1,
	buttons: but,
	headerType: "DOCUMENT"
	}
	wann.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
	}
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           wann.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
        }
        
        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        const isRegistered = checkRegisteredUser(sender)
 ///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      wann.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           wann.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
wann.sendMessage(from, hasil, type, options).catch(e => {
fetchh(link).then((hasil) => {
wann.sendMessage(from, hasil, type, options).catch(e => {
wann.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Error!')
console.log(e)
})
})
})
})
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       wann.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       wann.sendMessage(from, hasil, type, options).catch(e => {
	       wann.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await wann.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = wann.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await wann.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFIED]'
			}
}
           const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await wann.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = wann.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await wann.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
          let authorname = wann.contacts[from] != undefined ? wann.contacts[from].vname || wann.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}

     const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
	try {
		pporang = await wann.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }       
	const ofrply = await getBuffer(pporang)	       
     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
const levelRole = level.getLevelingLevel(sender, _level)
var role = 'Warrior III'
if (levelRole <= 5) {
role = 'Warrior II'
} else if (levelRole <= 10) {
role = 'Warrior I'
} else if (levelRole <= 15) {
role = 'Elite III'
} else if (levelRole <= 20) {
role = 'Elite II'
} else if (levelRole <= 25) {
role = 'Elite I'
} else if (levelRole <= 30) {
role = 'Master III'
} else if (levelRole <= 35) {
role = 'Master II'
} else if (levelRole <= 40) {
role = 'Master I'
} else if (levelRole <= 45) {
role = 'GrandMaster III'
} else if (levelRole <= 50) {
role = 'GrandMaster II'
} else if (levelRole <= 55) {
role = 'GrandMaster I'
} else if (levelRole <= 60) {
role = 'Epic III'
} else if (levelRole <= 65) {
role = 'Epic II'
} else if (levelRole <= 70) {
role = 'Epic I'
} else if (levelRole <= 75) {
role = 'Legend III'
} else if (levelRole <= 80) {
role = 'Legend II'
} else if (levelRole <= 85) {
role = 'Legend I'
} else if (levelRole <= 90) {
role = 'Mythic'
} else if (levelRole <= 95) {
role = 'Mythical Glory'
} else if (levelRole >= 100) {
role = 'Immortal'
}  

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
  
//--------------------[ANTI TOXIC]--------------------\\
if (bad.includes(messagesD)) {
if (isGroupAdmins) return reply("Admin mah bebas ye kan😎");
kntl = `${args.join(' ')}`
nama = ("TOXIC DETECTED")
impostor = ("NIH PERGI KE ARAB, TOBAT SONO\nSUPAYA GAK TOXIC")
wann.sendMessage(`6285640068416@s.whatsapp.net`, `wa.me/${sender.split("@")[0]}\n Toxic Digrup ❗`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "X MOODS",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./gambar/thumb.jpg'),sourceUrl:"https://wa.me/6287708357324"}}})            
wann.sendMessage(from, { degreesLatitude: 21.422487, degreesLongitude: 39.826206,
name: nama,
address: impostor,
jpegThumbnail: fs.readFileSync('./gambar/thumb.jpg')}, MessageType.liveLocation, {quoted:floc})
}
//--------------------[ANTI TOXIC]--------------------\\
//--------------------[STIKER ANJENG]--------------------\\
const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					wann.sendMessage(to, media, sticker, {quoted:fkontak})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
//--------------------[STIKER ANJENG]--------------------\\

//--------------------[LEVELING]--------------------\\

   if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}   
//--------------------[LEVELING]--------------------\\

if (isGroup && isAutoSticker) {
			if (mek.message && mek.message.imageMessage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await wann.downloadAndSaveMediaMessage(encmedia)
							ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                wann.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftrol})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                 sendStickerUrl(from, media, ran)
			}
		}
		
         
//--------------------[AFK]--------------------\\
	if (isGroup) {
		if (!mek.key.fromMe && banChats === true) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
		}
	    }
//--------------------[AFK]--------------------\\
   
//--------------------[ANTILINK]--------------------\\ 
      const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
      const messagesC = cmd.slice(0).trim().split(/ +/).shift().toLowerCase()
        if (messagesC.match("https://chat.whatsapp.com")){
       if (!isGroup) return
       if (!isAntiLink) return
       if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Gc*')
       wann.updatePresence(from, Presence.composing)
       var kic = `${sender.split("@")[0]}@s.whatsapp.net`
       reply(`*「 Link Gc Detect 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
       setTimeout( () => {
              wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
wann.sendMessage(`6285640068416@s.whatsapp.net`, `wa.me/${sender.split("@")[0]}\n telah Mengirim Link Gc❗`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "X MOODS",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./gambar/thumb.jpg'),sourceUrl:"https://wa.me/6287708357324"}}})            
        }, 7000)
        setTimeout( () => {
        wann.sendMessage(from, '_1 Detik lagi..._', text, {quoted: fkontak})
        }, 6000)
        setTimeout( () => {
        wann.sendMessage(from, '_2 Detik lagi..._', text, {quoted: fkontak})
        }, 5000)
        setTimeout( () => {
        wann.sendMessage(from, '_3 Detik lagi..._', text, {quoted: fkontak})
        }, 2500)
        setTimeout( () => {    
              wann.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Hanya Di Hari Ahad.*")
       }, 0)
}


//--------------------[ANTILINK]--------------------\\


//--------------------[ANTIVIRTEX]--------------------\\
//Anti virtex time by Lord_Rifza
if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 1200) {
        if (isGroupAdmins) return reply("Admin mah bebas ye kan😎");
        wann.updatePresence(from, Presence.composing)
        let ayhd = "\n".repeat(420)
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`        
		setTimeout( () => {
		wann.groupRemove(from, [kic]).catch((e) => { wann.reply(from, global.db.mess.BotAdmin, mek) })
		wann.sendMessage(`6285640068416@s.whatsapp.net`, `wa.me/${sender.split("@")[0]}\n telah mengirim Virtex ❗`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "X MOODS",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./gambar/thumb.jpg'),sourceUrl:"https://wa.me/6287708357324"}}})            
        }, 7000)
        setTimeout( () => {
        wann.sendMessage(from, '_1 Detik lagi..._', text, {quoted: fkontak})
        }, 6000)
        setTimeout( () => {
        wann.sendMessage(from, '_2 Detik lagi..._', text, {quoted: fkontak})
        }, 5000)
        setTimeout( () => {
        wann.sendMessage(from, '_3 Detik lagi..._', text, {quoted: fkontak})
        }, 2500)
        setTimeout( () => {    
        wann.reply(from, `${ayhd}\nAnti Virtex Terdeteksi, pengguna ${kic} Telah Mengirimkan Virtex\n\nMaaf ${pushname} Anda akan di kick 3 detik lagi❗`, mek)                
        }, 0)               
               
        }
        }
//--------------------[ANTIVIRTEX]--------------------\\    

//--------------------[SIMI]--------------------\\
if (isSimi) {		
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
                     sami = simi.success
                        wann.sendMessage(from, `${sami}`, text, {thumbnail: ofrply, sendEphemeral: true, quoted:mek, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }
//--------------------[SIMI]--------------------\\                      
    
	  
	    
//--------------------[AUTO KETIK]--------------------\\	    
	    wann.updatePresence(from, Presence.composing)// hapus aja bang kalo risih
//--------------------[AUTO KETIK]--------------------\\

//--------------------[AUTO READ]--------------------\\		
        wann.chatRead(from, "read")// hapus aja bang kalo risih
//--------------------[AUTO READ]--------------------\\  

//--------------------[AUTO BIO]--------------------\\
runt = process.uptime() 
           wann.setStatus(`Aktif Selama : ${kyun(runt)} `).catch((_)=>_);

           settingstatus = new Date() * 1;            
//--------------------[AUTO BIO]--------------------\\
        
//--------------------[CMD]--------------------\\
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
//--------------------[CMD]--------------------\\
                   
        if (budy.toLowerCase() === `5173`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    atm.addKoinUser(sender, randomNomor(100), _uang)
		    wann.sendMessage(from, teks, text, {quoted: freply })
}          if (!mek.key.fromMe && banChats === true) return 
	              switch(command){

case 'owner':
case 'creator':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

               buttons = [{buttonId: '!groupowner',buttonText:{displayText: 'GROUP OWNER'},type:1},{buttonId:'!igowner',buttonText:{displayText:'INSTAGRAM'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Jangan Sungkan Chat Ya Kak',
               buttons: buttons,
               headerType: 1
}

               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{})
               wann.relayWAMessage(prep)
               break      
               
case 'set':
	      case 'mode':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
        if (!isOwner && mek.key.fromMe) return reply(mess.only.owner)
        sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `👤 SELF `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `👥 PUBLIC`,
            },
            type: 1,
          },
        ]);
        break;
        
case 'public':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
              if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.owner)
              if (banChats === false) return
        	  uptime = process.uptime()
        	  banChats = false
              fakeitem (' ```「 PUBLIC MODE 」``` ')
              break       
case 'self':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
        	    if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.owner)
              if (banChats === true) return 
              banChats = true
              fakeitem (' ```「 SELF MODE 」``` ')
              break

case 'menu':
case 'help': 
              if (isBanned) return reply(mess.ban)
if (isBanchat) return       
              reply('Menampilkan menu.....')
              groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await wann.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        menu =`[ • XMOODS • ]`

               buttons =  [
   {buttonId: `${prefix}command`, buttonText: {displayText: '💾MENU'}, type: 1},
   {buttonId: `${prefix}rules`, buttonText: {displayText: '📃RULES'}, type: 1},
  {buttonId: `${prefix}owner`, buttonText: {displayText: '👤OWNER'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/menu.jpg`), 'imageMessage', { thumbnail:fake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `
]=====[XM-BOT]=====[

]-----Owner Menu-----[

1. #delete
2. #del
3. #d
4. #bc
5. #broadcast
6. #bc2
7. #broadcast2
8. #bc3
9. #broadcast3
10. #premium add
11. #premium del
12. #setcmd
13. #delcmd
14. #listcmd
15. #spam _teks|jumlah_
16. #upswteks
17. #spamsw _teks|jumlah_
18. #ban
17. #banned
18. #unban
19. #unbanned
20. #listban
21. #banchat
22. #unbanchat

]-----Group Menu-----[

1. #welcome _enable/disable_
2. #pakgirl
3. #hidetag _teks_
4. #afk _alasan_
5. #add _nomor target_
6. #kick _tag/reply target_
7. #promote _tag/reply member_
8. #demote _tag/reply member_
9. #antilink
10. #cantik
11. #ganteng
12. #beban
13. #babi
14. #sadboy
15. #sadgirl
16. #wibu
17. #hebat
18. #jelek
19. #goblok
20. #bego
21. #pinter
22. #jago
23. #nolep
24. #monyet
25. #baik
26. #jahat
27. #anjing
28. #haram
29. #kontol
30. #pakboy
31. #opentime
    Example : #opentime 10 detik
32. #closetime
    Example : #closetime 10 detik
33. #jadian  
34. #tag
35. #tagme 
36. #totag
37. #fitnah
  CONTOH : #fitnah @⁨dony⁩|Hy|Apa
38. #getpp _tag orangnya_
39. #leveling
40. #level
		

]-----Download Menu-----[

1. #play _query_
2. #playy _link_
3. #play2 _link_
4. #tiktoknowm _link_
5. #image _query_
6. #gimage _query_
7. #googleimage _query_
8. #facebook _link_
9. #instagram _link_
10. #pinterest _query_
11. #pinterest2 _query_
12. #pinterest3 _query_

]-----Maker Menu-----[

1. #sticker
2. #stiker
3. #stickergif
4. #s
5. #nulis
6. #nuliskanan
7. #nuliskiri
8. #foliokanan
9. #foliokiri
10. #glitch
11. #googletxt
12. #pubg
13. #battlefield
14. #neon
14. #glow
16. #golden
17. #wooden
18. #quote
19. #textburn
20. #summer
21. #flower
22. #coffeecup
23. #coffeecup2
24. #maker
25. #maker2
26. #maker3
27. #maker4
28. #maker3d
29. #maker3d2
30. #maker3d3
31. #maker3d4
32. #ttp _teks_
33. #txtopng _teks_
34. #balik _reply audio/vn_
35. #toimg
36. #tovideo
37. #tomp4
38. #gay
39. #emoji _emoji_
    CONTOH : .emoji 🐟
40. #attp _teks_


]-----Other Menu-----[

1. #tts _kodebahasa_
2. #kodebahasa
3. #sswebpc _link_
4. #sswebhp _link_
5. #sharelock _teks1|teks2_ 
6. #tourl
7. #imgtourl
8. #simi
9. #linkwa _query_
10. #runtime
11. #ping
12. #speed
13. #translate _teks_
14. #detikvn
15. #detikvideo   
16. #gemuk

17. #robot

18. #bass   
19. #sider
20. #waktu
21. #kalkulator
    CONTOH : 1+1
22. #googlelink _yang mau di cari_
23. #kbbi _kata_
24. #rules
25. #hit
25. #totalhit
26. #caripesan _teks|jumlah_
27. #brainly _soal_


]-----Asupan Menu-----[

1. #bocil
2. #santuy
3. #ghea
4. #rika
5. #ukhty


]-----Fun Menu-----[

1. #darkjoke
2. #meme
3. #wangy _nama_
4. #tebakgambar

]-----Game Menu-----[

1. #tictactoe
2. #ttt
3. #delttt
4. #suit

]-----Cek Menu-----[

1.  #cantikcek
2.  #jelekcek
3.  #goblokcek
4.  #begocek
5.  #pintercek
6.  #jagocek
7.  #nolepcek
8.  #babicek
9.  #bebancek
10.  #baikcek
11.  #jahatcek
12.  #anjingcek
13.  #bapercek
14.  #kontolcek
15.  #kontolcek
16.  #sangecek
17.  #pakgirlcek
18.  #pakboycek
19.  #bapercek
20.  #cekwatak

]-----Anime Menu-----[

1. #waifu
2. #loli
3. #husbu
4. #milf
5. #cosplay
6. #wallml
7. #waifuhd
8. #kemonomimi
9. #smug
10. #baka
11. #tickle
12. #slap
13. #poke
14. #pat
16. #meow
17. #lizard
18. #kiss
19. #hug
20. #feed
21. #cuddle
22. #holo
23. #woof
24. #goose
25. #gecg
26. #avatar

]-----Storage Menu-----[

1. #addvn _nama audionya_
2. #getvn _nama audionya_
3. #listvn 

]-----Primbon Menu-----[
               
1. #artikata
2. #tahilalat
3. #bisakah
4. #apakah
5. #kapankah
6. #cekmati _nama_

]-----Gacha Cecan-----[

1. #indo
2. #jepang
3. #china
4. #vietnam
5. #malaysia
6. #korea

7. #thailand

]-----RANDOM STICKER-----[

1. #dadu
2. #doge
3. #toimg
4. #patrick
5. #garwgura

]-----RANDOM TEXT-----[

1. #quotes
2. #truth
3. #dare

`,
               footerText:  `

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}


©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break

case 'command':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
 stod = `${sender}`
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: '*_© XM BOT_*',
 description: `Hai kak @${stod.split('@')[0]}, Silahkan pilih menu disini\n NOTE : \nKALO EROR SEGERA CHAT OWNER❗\n wa.me/6287708357324`,
 sections: [
                     {
                      "title": `${jmn} - ${week} ${weton} - ${calender}`,
 rows: [
                          
                           {
                              "title": ")-----[GROUP MENU]-----(",
                              "description": `Menu Ke 1`,
                              "rowId": "#groupmenu"
                           },                                                                                                            
                           {
                              "title": ")-----[DOWNLOAD]-----(",
                              "description": `Menu Ke 2`,
                              "rowId": "#downloadmenu"
                           },
                           {
                              "title": ")-----[OWNER MENU]-----(",
                              "description": `Menu Ke 3`,
                              "rowId": "#ownermenu"
                           },
                           {
                              "title": ")-----[OTHER MENU]-----(",
                              "description": `Menu Ke 4`,
                              "rowId": "#othermenu"
                           },
                           {
                              "title": ")-----[ASUPAN MENU]-----(",
                              "description": `Menu Ke 5`,
                              "rowId": "#asupanmenu"
                           }, 
                           {
                              "title": ")-----[ANIME MENU]-----(",
                              "description": `Menu Ke 6`,
                              "rowId": "#animemenu"
                           },
                           {
                              "title": ")-----[MAKER MENU]-----(",
                              "description": `Menu Ke 7`,
                              "rowId": "#makermenu"
                           },
                           {
                              "title": ")-----[FUN MENU]-----(",
                              "description": `Menu Ke 8`,
                              "rowId": "#funmenu"
                           },
                           {
                              "title": ")-----[GAME MENU]-----(",
                              "description": `Menu Ke 9`,
                              "rowId": "#gamemenu"
                           },
                           {
                              "title": ")-----[CEK MENU]-----(",
                              "description": `Menu Ke 10`,
                              "rowId": "#cekmenu"
                           },
                           {
                              "title": ")-----[STORAGE MENU]-----(",
                              "description": `Menu Ke 11`,
                              "rowId": "#storagemenu"
                           },
                           {
                              "title": ")-----[PRIMBON MENU]-----(",
                              "description": `Menu Ke 12`,
                              "rowId": "#primbonmenu"
                           },
                           {
                              "title": ")-----[GACHA CEWE]-----(",
                              "description": `Menu Ke 13`,
                              "rowId": "#gachacecan"
                           },
                           {
                              "title": ")-----[RANDOM STICKER]-----(",
                              "description": `Menu Ke 14`,
                              "rowId": "#randomsticker"
                           },
                           {
                              "title": ")-----[RANDOM TEXT]-----(",
                              "description": `Menu Ke 14`,
                              "rowId": "#randomtext"
                           },
                           {
                              "title": ")-----[RANDOM VIDEO]-----(",
                              "description": `Menu Ke 15`,
                              "rowId": "#randomvideo"
                           }
                           
                        ]
                     }],
 listType: 1
}
wann.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftroli})
break

case 'groupmenu':
        case 'menugroup':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
        
              groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await wann.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/thumb.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Group Menu-----[

1. #welcome _enable/disable_
2. #pakgirl
3. #hidetag _teks_
4. #afk _alasan_
5. #add _nomor target_
6. #kick _tag/reply target_
7. #promote _tag/reply member_
8. #demote _tag/reply member_
9. #antilink
10. #cantik
11. #ganteng
12. #beban
13. #babi
14. #sadboy
15. #sadgirl
16. #wibu
17. #hebat
18. #jelek
19. #goblok
20. #bego
21. #pinter
22. #jago
23. #nolep
24. #monyet
25. #baik
26. #jahat
27. #anjing
28. #haram
29. #kontol
30. #pakboy
31. #opentime
    Example : #opentime 10 detik
32. #closetime
    Example : #closetime 10 detik
33. #jadian
34. #tag
35. #tagme    
36. #totag
37. #fitnah
  CONTOH : #fitnah @dony⁩|Hy|Apa
38. #getpp _tag orangnya_
39. #leveling
40. #level
		

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 ©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break  
case 'cekmenu':
        case 'menucek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
        
              groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await wann.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/thumb.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Cek Menu-----[

1.  #cantikcek
2.  #jelekcek
3.  #goblokcek
4.  #begocek
5.  #pintercek
6.  #jagocek
7.  #nolepcek
8.  #babicek
9.  #bebancek
10.  #baikcek
11.  #jahatcek
12.  #anjingcek
13.  #bapercek
14.  #kontolcek
15.  #kontolcek
16.  #sangecek
17.  #pakgirlcek
18.  #pakboycek
19.  #bapercek
20.  #cekwatak

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 ©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break               
case 'gamemenu':
        case 'menugame':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
        
              groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await wann.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/thumb.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Game Menu-----[

1. #tictactoe
2. #ttt
3. #delttt
4. #suit


=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 ©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break                 
       case 'asupanmenu':
        case 'menuasupan':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
        
              groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await wann.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/thumb.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Asupan Menu-----[

1. #bocil
2. #santuy
3. #ghea
4. #rika
5. #ukhty

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 ©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break               

case 'downloadmenu':
        case 'menudownload':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
        
              groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await wann.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/thumb.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Download Menu-----[

1. #play _query_
2. #playy _link_
3. #play2 _link_
4. #tiktoknowm _link_
5. #image _query_
6. #gimage _query_
7. #googleimage _query_
8. #facebook _link_
9. #instagram _link_
10. #pinterest _query_
11. #pinterest2 _query_
12. #pinterest3 _query_

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 ©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break
               
        case 'animemenu':
        case 'menuanime':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
        
              groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await wann.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/thumb.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Anime Menu-----[

1. #waifu
2. #loli
3. #husbu
4. #milf
5. #cosplay
6. #wallml
7. #waifuhd
8. #kemonomimi
9. #smug
10. #baka
11. #tickle
12. #slap
13. #poke
14. #pat
16. #meow
17. #lizard
18. #kiss
19. #hug
20. #feed
21. #cuddle
22. #holo
23. #woof
24. #goose
25. #gecg
26. #avatar

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 ©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break               
case 'ownermenu':
case 'menuowner':
if (isBanned) return reply(mess.ban)
if (isBanchat) return        
groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
uptime = process.uptime();
timestampe = speed();
totalChat = await wann.chats.all()
latensie = speed() - timestampe
total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/thumb.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Owner Menu-----[
1. #delete
2. #del
3. #d
4. #bc
5. #broadcast
6. #bc2
7. #broadcast2
8. #bc3
9. #broadcast3
10. #premium add
11. #premium del
12. #setcmd
13. #delcmd
14. #listcmd
15. #spam _teks|jumlah_
16. #upswteks
17. #spamsw _teks|jumlah_
18. #ban
17. #banned
18. #unban
19. #unbanned
20. #listban
21. #banchat
22. #unbanchat

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 ©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break 
case 'storagemenu':
case 'menustorage':
if (isBanned) return reply(mess.ban)
if (isBanchat) return        
groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
uptime = process.uptime();
timestampe = speed();
totalChat = await wann.chats.all()
latensie = speed() - timestampe
total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/thumb.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Storage Menu-----[
               
1. #addvn _nama audionya_
2. #getvn _nama audionya_
3. #listvn

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 ©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break     
 case 'primbonmenu':
case 'menuprimbon':
if (isBanned) return reply(mess.ban)
if (isBanchat) return        
groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
uptime = process.uptime();
timestampe = speed();
totalChat = await wann.chats.all()
latensie = speed() - timestampe
total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/thumb.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Primbon Menu-----[
               
1. #artikata
2. #tahilalat
3. #bisakah
4. #apakah
5. #kapankah
6. #cekmati _nama_

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 ©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break                        
case 'makermenu':
        case 'menumaker':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
        
              groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await wann.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/thumb.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Maker Menu-----[

1. #sticker
2. #stiker
3. #stickergif
4. #s
5. #nulis
6. #nuliskanan
7. #nuliskiri
8. #foliokanan
9. #foliokiri
10. #glitch
11. #googletxt
12. #pubg
13. #battlefield
14. #neon
14. #glow
16. #golden
17. #wooden
18. #quote
19. #textburn
20. #summer
21. #flower
22. #coffeecup
23. #coffeecup2
24. #maker
25. #maker2
26. #maker3
27. #maker4
28. #maker3d
29. #maker3d2
30. #maker3d3
31. #maker3d4
32. #ttp _teks_
33. #txtopng _teks_
34. #balik _reply audio/vn_
35. #toimg
36. #tovideo
37. #tomp4
38. #gay
39. #emoji _emoji_
    CONTOH : .emoji 🐟
40. #attp _teks_    
    

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 ©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break               
case 'othermenu':
        case 'menuother':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
        
              groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await wann.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/thumb.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Other Menu-----[

1. #tts _kodebahasa_
2. #kodebahasa
3. #sswebpc _link_
4. #sswebhp _link_
5. #sharelock _teks1|teks2_ 
6. #tourl
7. #imgtourl
8. #simi
9. #linkwa _query_
10. #runtime
11. #ping
12. #speed
13. #translate _teks_
14. #detikvn
15. #detikvideo   
16. #gemuk

17. #robot

18. #bass   
19. #sider
20. #waktu
21. #kalkulator
    CONTOH : 1+1
22. #googlelink _yang mau di cari_
23. #kbbi _kata_
24. #rules
25. #hit
25. #totalhit
26. #caripesan _teks|jumlah_
27. #brainly _soal_

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 ©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break  
case 'funmenu':
case 'menufun':
if (isBanned) return reply(mess.ban)
if (isBanchat) return        
              groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await wann.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/thumb.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Fun Menu-----[

1. #darkjoke
2. #meme
3. #wangy _nama_
4. #tebakgambar


=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 ©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break    
case 'randomsticker':
if (isBanned) return reply(mess.ban)
if (isBanchat) return    
              groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await wann.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/thumb.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----RANDOM STICKER-----[

1. #dadu
2. #doge
3. #toimg
4. #patrick
5. #garwgura


=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 ©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break  
case 'randomtext':
if (isBanned) return reply(mess.ban)
if (isBanchat) return    
              groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await wann.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./gambar/thumb.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----RANDOM TEXT-----[

1. #quotes
1. #quotes
2. #truth
3. #dare

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 ©Created by Wann`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          wann.relayWAMessage(prep)
               break                            
                                                                                                                                                                          
        case 'd':
        case 'del':
        case 'delete':
if (isBanned) return reply(mess.ban)
if (isBanchat) return 
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
               wann.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
      
     case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
				
					     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await wann.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                wann.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await wann.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
              
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            wann.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break  
        
       case 'welcome':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break                  
                                                           
       case 'take':
       case 'colong':
if (isBanned) return reply(mess.ban)
if (isBanchat) return   
              if (!isQuotedSticker) return reply('Stiker aja om')
              if (args.length < 1) return reply(`Teksnya mana kak?`)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await wann.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `Wann`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, rifza, mek, from)
              break

              
        case 'ghea':
if (isBanned) return reply(mess.ban)
if (isBanchat) return 
		reply('Proses kak')  
				anu = await fetchJson(`https://za-api.herokuapp.com/api/asupan/ghea?apikey=ApiRifzaBot`)			
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url)
				wann.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `ghea.mp4`, quoted:ftroli, caption: 'Nih Gan'})
					break  
			case 'rika':
if (isBanned) return reply(mess.ban)
if (isBanchat) return 
		reply('Proses kak')  
				anu = await fetchJson(`https://za-api.herokuapp.com/api/asupan/rikagusriani?apikey=ApiRifzaBot`)			
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url)
				wann.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `rikagusriani.mp4`, quoted:ftroli, caption: 'Nih Gan'})
					break  
		     	
	        case 'santuy':
if (isBanned) return reply(mess.ban)
if (isBanchat) return 
		reply('Proses kak')  
				anu = await fetchJson(`https://za-api.herokuapp.com/api/asupan/santuy?apikey=ApiRifzaBot`)			
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url)
				wann.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `asupan.mp4`, quoted:ftroli, caption: 'Nih Gan'})
					break  	
		   case 'ukhty':
if (isBanned) return reply(mess.ban)
if (isBanchat) return 
		reply('Proses kak')  
				anu = await fetchJson(`https://za-api.herokuapp.com/api/asupan/ukty?apikey=ApiRifzaBot`)			
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url)
				wann.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `asupan.mp4`, quoted:ftroli, caption: 'Nih Gan'})
					break
		 case 'bocil':
if (isBanned) return reply(mess.ban)
if (isBanchat) return 
		reply('Proses kak')  
				anu = await fetchJson(`https://za-api.herokuapp.com/api/asupan/bocil?apikey=ApiRifzaBot`)			
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url)
				wann.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `asupan.mp4`, quoted:ftroli, caption: 'Nih Gan'})
					break
//=====[API RIFZA]=====\\        
             
case 'igdl': 



       case 'instagram':



       case 'instagramdownload':



              if (!q) return reply('Link Yang Mana? ')



              if (!q.includes('instagram')) return reply(mess.error.Iv)



              reply(mess.wait)



              anu = await igDownloader(`${q}`)



             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, wan) })



             .catch((err) => { reply(String(err)) })



              break



  case 'scplay': 



  case 'soundcloud':



  if (!q) return reply('Link Yang Mana? ')



 if (!q.includes('soundcloud')) return reply(mess.error.Iv)



reply(mess.wait)



 anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=WannOff&url=${q}`)



 .then((data) => { sendMediaURL(from, data.result, wan) })



 .catch((err) => { reply(String(err)) })



 break



 case 'image':



 case 'gimage':



 case 'googleimage':



 if (args.length < 1) return reply('Apa Yang Mau Dicari?')



reply(mess.wait)



 teks = args.join(' ')



 res = await googleImage(teks, google)



 function google(error, result){



if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}



  else {



 gugIm = result



 random =  gugIm[Math.floor(Math.random() * gugIm.length)].url



 sendFileFromUrl(random, image, {quoted: freply, caption: `*Hasil Pencarian Dari :* ${teks}`})



  }



}



break



case 'ytmp3':



if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})



  if (args.length < 1) return reply('Link Nya Mana?')



 if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)



teks = args.join(' ')



 reply(mess.wait)



 res = await y2mateA(teks).catch(e => {



reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')



 })



 result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



 ┆ *YOUTUBE MP3*



 └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







 *Data Berhasil Didapatkan!*



 \`\`\`🐥 Title : ${res[0].judul}\`\`\`



 \`\`\`🐥 Ext : MP3\`\`\`



 \`\`\`🐥 Size : ${res[0].size}\`\`\`







 _Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`







 sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: freply}).then((lalu) => {



sendFileFromUrl(res[0].link, document, {quoted: freply, mimetype: 'audio/mp3', filename: res[0].output})



 })



 break



 case 'ytmp4':



 if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})



if (args.length < 1) return reply('Link Nya Mana?')



  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)



 teks = args.join(' ')



  reply(mess.wait)



  res = await y2mateV(teks).catch(e => {



 reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')



  })



  result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



  ┆ *YOUTUBE MP4*



  └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







  *Data Berhasil Didapatkan!*



  \`\`\`🐥 Title : ${res[0].judul}\`\`\`



  \`\`\`🐥 Ext : MP4\`\`\`



  \`\`\`🐥 Size : ${res[0].size}\`\`\`







  _Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`







  sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: freply}).then((lalu) => {



 sendFileFromUrl(res[0].link, video, {quoted: freply, mimetype: 'video/mp4', filename: res[0].output})



  })



  break



  case 'ytmp4hd':



  case 'ythd':



  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})



 if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)



let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)



 if (!isLinkks2) return reply(mess.error.Iv)



try {



  reply(mess.wait)



  ythd(args[0])



  .then((res) => {



 const { dl_link, thumb, title, filesizeF, filesize } = res



 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)



 .then((a) => {



if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 



  `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



  ┆ *YOUTUBE MP4*



  └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







  *Data Berhasil Didapatkan!*



  \`\`\`🐥 Title : ${title}\`\`\`



  \`\`\`🐥 Kualitas* : 720p\`\`\`



  \`\`\`🐥 Size* : ${filesizeF}\`\`\`



  \`\`\`🐥 Link* : ${a.data}\`\`\`







  _Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)







  const captionsYtmp4 = 



`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



┆ *YOUTUBE MP4*



└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







*Data Berhasil Didapatkan!*



\`\`\`🐥 Title : ${title}\`\`\`



\`\`\`🐥 Kualitas : 720p\`\`\`



\`\`\`🐥 Size : ${filesizeF}\`\`\`







_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`







sendMediaURL(from, thumb, captionsYtmp4)



sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))



 })		



  })



} catch (err) {



  reply(`eror`)



}



break



case 'google':



if (!q) return reply(mess.wrongFormat)



  ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=86951200d52c4e2eafa6b5a43a857939&url=http://google.com/search?q=${q}&oq={q}&aqs=chrome..69i57j0i433i512l2j0i512l2.858j0j4&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8`)



reply(mess.wait)



if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)



  ggs({ 'query': q }).then(results => {



 vars = `_*Hasil Pencarian : ${q}*_\n`



 for (let i = 0; i < results.length; i++) {



vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`



 } 



 wann.sendMessage(from, ss, image, {thumbnail: Buffer.alloc(0), caption: vars, quoted : wan})



  }).catch(e => {



console.log(e)



reply(`${e}`)



 })



  break


  case 'mediafire':



               if (args.length < 1) return reply('Link Nya Mana? ')



               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)



               reply(mess.wait)



               teks = args.join(' ')



               res = await mediafireDl(teks)



               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



┆ *MEDIAFIRE DOWNLOAD*



└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







*Data Berhasil Didapatkan!*



\`\`\`▢ Nama : ${res[0].nama}\`\`\`



\`\`\`▢ Ukuran : ${res[0].size}\`\`\`



\`\`\`▢ Link : ${res[0].link}\`\`\`







_*Tunggu Proses Upload Media......*_`



             reply(result)



             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: teks})



             break



  case 'tt':



if (!q) return reply('Linknya?')



if (!q.includes('tiktok')) return



reply(mess.error.Iv)



reply(mess.wait)



anu = await TiktokDownloader(`${q}`)



memek ='hi.mp4'



kntl = 'hasil.mp4'



fs.writeFileSync(input,await getBuffer(data.result.watermark))



exec(`ffmpeg -i ${memek} -b:a 192K -vn  ${kntl}`,(err,res)=> {



if (err) return reply(`${err}`)



wann.sendMessage(from,{url:'./'+memek},audio,{mimetype:'audio/mpeg'})



})



       



       case 'ttdl':



       case 'tiktokdl':



       case 'tiktoknowm':



              if (!q) return reply('Linknya?')



              if (!q.includes('tiktok')) return reply(mess.error.Iv)



              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${setting.lolkey}&url=${q}`)



              result = `⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n📑 *Desc*: ${data.result.title}`



              buttons = [{buttonId: `${prefix}tt1 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]



              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))



              imageMsg = ( await wann.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage



              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,



              contentText:`${result}`,buttons,headerType:4}



              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})



              wann.relayWAMessage(prep)



              fs.unlinkSync(`./${sender}.jpeg`)



              break



      case 'tt1': 







             if (!q) return reply('Linknya?')



             if (!q.includes('tiktok')) return reply(mess.error.Iv)



             reply(mess.wait)



             anu = await TiktokDownloader(`${q}`)



            .then((data) => { sendMediaURL(from, data.result.nowatermark) })



            .catch((err) => { reply(String(err)) })



             break

      case 'infott':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!c) return fakegroup('Linknya?')
		ini_url = args[0]
		 		reply(mess.wait)
		            ini_urlnya = `https://hardianto-chan.herokuapp.com/api/download/tiktok?url=${ini_url}&apikey=hardianto`
                    get_result = await fetchJson(ini_urlnya)
                    ini_txt = `*DATA BERHASIL DI TEMUKAN*\n\nAuthor : ${get_result.author}\n`
                    ini_txt += `Caption : ${get_result.caption}\n`
                    ini_txt += `Views : ${get_result.views}`
                    ini_img = await getBuffer(get_result.thumbnail)
                    await wann.sendMessage(from, ini_img , image, { quoted: mek, caption: ini_txt })
                    ini_buffer = await getBuffer(get_result.audio)
                    wann.sendMessage(from, ini_buffer, audio, {mimetype: 'audio/mp4', filename: `${get_result.caption}.mp3`, quoted: mek })
            		break               	        	 	        	 	        	 	        	 	        	 	        	
      case 'igstory':
if (isBanned) return reply(mess.ban)
if (isBanchat) return 
           if(!c) return reply('Usernamenya?')
            hx.igstory(`${c}`)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    wann.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    wann.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break    
               	        	 	        	 	        	 	        	 	        	 	        	 	        	 	        	     	        	 	        	 	        	 	        	 	        	 	        	 	        	 	        	
       case 'image':
       case 'gimage':
       case 'googleimage':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
       
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
          

      case 'stalktiktok':
      case 'tiktokstalk':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
      
             if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
              
             stalk_tt = args[0]
             get_result = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tiktok-stalk?name=${stalk_tt}&apikey=IkyOgiwara`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user.avatarLarger)
             ini_txt = `「 *TIKTOK STALKER* 」

*Data Berhasil Didapatkan!*
\`\`\`🔖 ID : ${get_result.user.id}\`\`\`
\`\`\`🔖 Short id : ${get_result.user.shortId}\`\`\`
\`\`\`🔖 Username : @${get_result.user.uniqueId}\`\`\`
\`\`\`🔖 Nickname : ${get_result.user.nickname}\`\`\`
\`\`\`🔖 Pengikut : ${get_result.stats.followerCount}\`\`\`
\`\`\`🔖 Mengikuti : ${get_result.stats.followingCount}\`\`\`
\`\`\`🔖 Heart : ${get_result.stats.heart}\`\`\`
\`\`\`🔖 Video : ${get_result.stats.videoCount}\`\`\`
\`\`\`🔖 Deskripsi : ${get_result.user.signature}\`\`\`
`
              wann.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break


//==========[SIMI/AUTO BALAS]==========\\
case 'simi':
if (isBanned) return reply(mess.ban)
if (isBanchat) return              
              if (args[0] === 'enable'){
              if (isSimi) return reply(`Udah aktif`)
              samih.push(from)
              fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
              reply('SIMI DI AKTIFKAN')
              } else if (args[0] === 'disable'){
              let anu = samih.indexOf(from)
              samih.splice(anu, 1)
              fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
              reply('SIMI DI NONAKTIFKAN')
              } else if (!q) {
              	var ini_gopayy =`Halo @${senderr.split('@')[0]} klik button atau Gunakan ${prefix + command } enable / disable jika button tidak merespon`
var buttonss = [
{buttonId: `!simi enable`, buttonText:{displayText: 'ENABLE'}, type: 1},
{buttonId: `!simi disable`, buttonText:{displayText: 'DISABLE'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `©Created by Rifza` ,
buttons: buttonss,
headerType: 1
}
wann.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • XMOODS • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
			}
          break
case 'jeoehejeheke':
if (!isOwner && mek.key.fromMe) return             
              if (args[0] === 'enable'){
              if (isBanchat) return reply(`Udah aktif`)
              banc.push(from)
              fs.writeFileSync('./database/banchat.json', JSON.stringify(banc))
              reply('SUKSES BANCHAT')
              } else if (args[0] === 'disable'){
              let anu = banc.indexOf(from)
              banc.splice(anu, 1)
              fs.writeFileSync('./database/banchat.json', JSON.stringify(banc))
              reply('SUKSES UNBANCHAT')
              } 
              break                            
              case "banchat":
if (!isOwner && mek.key.fromMe) return
        sendButMessage(from, `Ban Chat disini?`, `Nah kak silahkan pilih salah satu tombol di bawah`, [
          {
            buttonId: `${prefix}jeoehejeheke enable`,
            buttonText: {
              displayText: `DONE❗ `,
            },
            type: 1,
          },  
          ]);        
        break     
        case "unbanchat":
if (!isOwner && mek.key.fromMe) return
        sendButMessage(from, `UnBan Chat disini?`, `Nah kak silahkan pilih salah satu tombol di bawah`, [
          {
            buttonId: `${prefix}jeoehejeheke disable`,
            buttonText: {
              displayText: `DONE❗ `,
            },
            type: 1,
          }, 
          ]);         
          break   

                                  
case 'igowner':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
reply('https://instagram.com/wann.p.p?utm_medium=copy_link')
break
case 'tts':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (args.length < 1) return wann.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
const gtts = require('./lib/gtts')(args[0])
if (args.length < 0) return wann.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
var bby = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300
? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(dla.stikga())
wann.sendMessage(from, buff, audio, { duration: 999999999, ptt: true, quoted: ftroli })
fs.unlinkSync(rano)
})
})
break
case 'kodebahasa':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
let BAHASA = `
  'af': 'Afrikaans',
  'sq': 'Albanian',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'zh-cn': 'Chinese (Mandarin/China)',
  'zh-tw': 'Chinese (Mandarin/Taiwan)',
  'zh-yue': 'Chinese (Cantonese)',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'en-au': 'English (Australia)',
  'en-uk': 'English (United Kingdom)',
  'en-us': 'English (United States)',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pt-br': 'Portuguese (Brazil)',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'es-es': 'Spanish (Spain)',
  'es-us': 'Spanish (United States)',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'`
reply(`${BAHASA}`)
break


     case 'igvideo': 
      case 'instagramvideo':  
      case 'instavideo':
      case 'igvid':
      case 'ignstavid':
if (isBanned) return reply(mess.ban)
if (isBanchat) return


				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				ig = args.join(" ")
				anu = await fetchJson(`https://neoxr-api.herokuapp.com/api/ig?url=${ig}&apikey=shS8uZn0vJ`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 INSTAGRAM VIDEO 」*
								
*[Wait] Tunggu Sebentar..*`
				buffer1 = await getBuffer(anu.data.url)
				wann.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', Type: `${anu.data.type}`, quoted:ftroli, caption: 'Nih Gan'})
					break

       case 'igdl': 
       case 'instagram':
       case 'instagramdownload':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
       
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, mek) })
             .catch((err) => { reply(String(err)) })
              break


          case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                     
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              reply(mess.wait)
              
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `⏭️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'👤OWNER'},type:1}]
              imageMsg = ( await wann.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Follow ig ownerku ya kak😊: @wann.p.p', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              wann.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break


     
      
case 'sswebhp':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
      fakestatus(' ```PROSES KAK...``` ')
					sendMediaURL(from, `https://leyscoders-api.herokuapp.com/api/ssweb-hp?url=${args[0]}&apikey=IkyOgiwara`)
					break
 

case 'sswebpc':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
      fakestatus(' ```PROSES KAK...``` ')
					sendMediaURL(from, `https://leyscoders-api.herokuapp.com/api/ssweb-pc?url=${args[0]}&apikey=IkyOgiwara`)
					break


case 'hidetag':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
                    if (!isGroupAdmins) return reply(`Kamu bukan Admin Anjing`)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break

case 'pinterest':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
         
         	   if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                 reply (mess.wait)
                    ini_url = await fetchJson(`https://api.zeks.me/api/pinimg?apikey=ApiRifzaBot&q=${query}`)
                    ini_url = ini_url.data
                    let ppk = ini_url[Math.floor(Math.random() * ini_url.length)];
                    buff = await getBuffer(ppk)
                    buttons = [{buttonId: `${prefix + command} ${query}`,buttonText:{displayText: `➡️LANJUT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'©Created by Rifza', imageMessage: imageMsg,
              contentText:`klik LANJUT untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              wann.relayWAMessage(prep)
        break	
        		          		          
case 'pinterest2':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
        if (!q) return reply("gambar apa?");
        reply(mess.wait)
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(di, "imageMessage", { thumbnail: di, })).imageMessage
              buttonsMessage = {footerText:'[ • XMOODS • ]︎', imageMessage: imageMsg,
              contentText:`Follow ig owner @wann.p.p`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              wann.relayWAMessage(prep)
        break;
case 'pinterest3':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
         
         	   if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                 reply (mess.wait)
                    ini_url = await fetchJson(`https://hardianto-chan.herokuapp.com/api/search/pinterest?query=${query}&apikey=hardianto`)
                    ini_url = ini_url
                    let ajg = ini_url[Math.floor(Math.random() * ini_url.length)];
                    buff = await getBuffer(ajg)
                    buttons = [{buttonId: `${prefix + command} ${query}`,buttonText:{displayText: `➡️LANJUT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'©Created by Rifza', imageMessage: imageMsg,
              contentText:`klik LANJUT untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              wann.relayWAMessage(prep)
        break


case 'afk':
if (isBanned) return reply(mess.ban)
if (isBanchat) return 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break

case 'nulis':
        case 'tulis':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
        
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
              
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               wann.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
case 'foliokanan':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
                                
                    if (args.length == 0) return reply(`Example: ${prefix + command} Rifza bot`)
                    fakestatus(' ```Proses kak....``` ')
                    ini_txt = args.join(" ")
                    getBuffer(`http://zekais-api.herokuapp.com/foliokanan?text=${ini_txt}&apikey=4ioFQZbq`).then((gambar) => {
                        wann.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow @wann.p.p`, quoted : freply})
                    })
                    break  
case 'foliokiri':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
                           
                    if (args.length == 0) return reply(`Example: ${prefix + command} XMOODS`)
                    fakestatus(' ```Proses kak....``` ')
                    ini_txt = args.join(" ")
                    getBuffer(`http://zekais-api.herokuapp.com/foliokiri?text=${ini_txt}&apikey=4ioFQZbq`).then((gambar) => {
                        wann.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow @wann.p.p`, quoted : freply})
                    })
                    break                                  
case 'nuliskanan':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
                           
                    if (args.length == 0) return reply(`Example: ${prefix + command} XMOODS`)
                    fakestatus(' ```Proses kak....``` ')
                    ini_txt = args.join(" ")
                    getBuffer(`http://zekais-api.herokuapp.com/bukukanan?text=${ini_txt}&apikey=4ioFQZbq`).then((gambar) => {
                        wann.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow @wann.p.p`, quoted : freply})
                    })
                    break
                  
case 'nuliskiri':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
                           
                    if (args.length == 0) return reply(`Example: ${prefix + command} XMOODS`)
                    fakestatus(' ```Proses kak....``` ')
                    ini_txt = args.join(" ")
                    getBuffer(`http://zekais-api.herokuapp.com/bukukiri?text=${ini_txt}&apikey=4ioFQZbq`).then((gambar) => {
                        wann.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow @wann.p.p`, quoted : freply})
                    })
                    break

case 'glitch':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} _text1_|_text2_`)
gl1 = q.split('|')[0]
gl2 = q.split('|')[1]
reply(mess.wait)
photooxy = await fetchJson(`https://za-api.herokuapp.com/api/textmaker?text=${gl1}&text2=${gl2}&theme=${command}&apikey=${za_api}`)
photooxy2 = await getBuffer(photooxy.result.url)
wann.sendMessage(from, photooxy2, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break
case 'googletxt':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} _text1_|_text2_|_text3_`)
ggl1 = q.split('|')[0]
ggl2 = q.split('|')[1]
ggl3 = q.split('|')[2]
reply(mess.wait)
googletxt = await fetchJson(`https://za-api.herokuapp.com/api/textmaker?text=${ggl1}&text2=${ggl2}&text3=${ggl3}&theme=google-suggestion&apikey=${za_api}`)
googletxt2 = await getBuffer(googletxt.result.url)
wann.sendMessage(from, googletxt2, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break
case 'pubg':
case 'battlefield':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} _text1_|_text2_`)
gmmkl = q.split('|')[0]
gmmkl2 = q.split('|')[1]
reply(mess.wait)
game = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/game?text=${gmmkl}&text2=${gmmkl2}&theme=${command}&apikey=${za_api}`)
game2 = await getBuffer(game.result.url)
wann.sendMessage(from, game2, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break
case 'neon':
case 'glow':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
reply(mess.wait)
metalic = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/metallic?text=${q}&theme=${command}&apikey=${za_api}`)
metalic2 = await getBuffer(metalic.result.url)
wann.sendMessage(from, metalic2, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break
case 'golden':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
reply(mess.wait)
roses = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/roses?text=${q}&theme=golden&apikey=${za_api}`)
roses2 = await getBuffer(roses.result.url)
wann.sendMessage(from, roses2, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break
case 'wooden':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
reply(mess.wait)
roses = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/roses?text=${q}&theme=wooden-boarch&apikey=${za_api}`)
roses2 = await getBuffer(roses.result.url)
wann.sendMessage(from, roses2, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break
case 'quote':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
reply(mess.wait)
random = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/random?text=${q}&theme=art-quote&apikey=${za_api}`)
random2 = await getBuffer(random.result.url)
wann.sendMessage(from, random2, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break
case 'textburn':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
reply(mess.wait)
random = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/random?text=${q}&theme=text-burn&apikey=${za_api}`)
random2 = await getBuffer(random.result.url)
wann.sendMessage(from, random2, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break
case 'summer':
case 'flower':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
reply(mess.wait)
alam = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/alam?text=${q}&theme=${command}&apikey=${za_api}`)
alam2 = await getBuffer(alam.result.url)
wann.sendMessage(from, alam2, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break
case 'coffeecup':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
reply(mess.wait)
alam = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/senja?text=${q}&theme=coffee-cup&apikey=${za_api}`)
alam2 = await getBuffer(alam.result.url)
wann.sendMessage(from, alam2, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break
case 'coffeecup2':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
reply(mess.wait)
alam = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/senja?text=${q}&theme=coffee-cup2&apikey=${za_api}`)
alam2 = await getBuffer(alam.result.url)
wann.sendMessage(from, alam2, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break

// Text Maker 2d
case 'maker':
case 'maker2':
case 'maker3':
case 'maker4':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
reply(mess.wait)
makell = await fetchJson(`https://za-api.herokuapp.com/api/${command}?text=${q}&apikey=${za_api}`)
makell2 = await getBuffer(makell.result.results)
wann.sendMessage(from, makell2, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break

// Text Maker 3d
case 'maker3d':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
reply(mess.wait)
maker3d = await fetchJson(`https://za-api.herokuapp.com/api/maker3d?text=${q}&apikey=${za_api}`)
maker3d2 = await getBuffer(maker3d.result.results)
wann.sendMessage(from, makell2, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break
case 'maker3d2':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
reply(mess.wait)
maker3d2 = await fetchJson(`https://za-api.herokuapp.com/api/maker3d/no2?text=${q}&apikey=${za_api}`)
maker3d22 = await getBuffer(maker3d2.result.results)
wann.sendMessage(from, maker3d22, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break
case 'maker3d3':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
reply(mess.wait)
maker3d3 = await fetchJson(`https://za-api.herokuapp.com/api/maker3d/no3?text=${q}&apikey=${za_api}`)
maker3d32 = await getBuffer(maker3d3.result.results)
wann.sendMessage(from, maker3d32, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break
case 'maker3d4':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
reply(mess.wait)
maker3d4 = await fetchJson(`https://za-api.herokuapp.com/api/maker3d/no4?text=${q}&apikey=${za_api}`)
maker3d42 = await getBuffer(maker3d4.result.results)
wann.sendMessage(from, maker3d42, image, {quoted:mek,caption:`${q}`,thumbnail:Rfake})
break
case 'kick':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
kick(from, mentionUser)
break
case 'add':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = arg.split("|")[0]
entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
entah = `${entah}@s.whatsapp.net`
wann.groupAdd(from, [entah])
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
wann.groupAdd(from, [entah])
}
break

case "demote":
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
if (!isGroup) return;
if (!isBotGroupAdmins) return reply("Bot not admin");
wann.groupDemoteAdmin(from, mentionUser)
break;
case "promote":
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
if (!isGroup) return;
if (!isBotGroupAdmins) return reply("Bot not admin");
wann.groupMakeAdmin(from, mentionUser)
break;
case 'bc':
case 'broadcast':
              if (!isOwner && !isCoOwner && mek.key.fromMe) return  reply(mess.only.owner)
if (args.length < 1) return reply('teks?')
anu = await wann.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await wann.downloadMediaMessage(encmedia)
for (let _ of anu) {
wann.sendMessage(_.jid, bc, image, {quoted:ftroli,caption: `*「 BROADCAST [ • XMOODS • ] 」*\n\n${body.slice(4)}`})
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `*「 XMOODS BROADCAST 」*\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break

case 'bc2':
case 'broadcast2':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
             if (!isOwner && !isCoOwner && mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             reply('Wait.....')
             anu = await wann.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await wann.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             wann.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 BROADCAST [ • XMOODS • ] 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
wann.sendMessage(_.jid, 
	    {"contentText": `*「 BROADCAST [ • XMOODS • ] 」*\n\n${body.slice(4)}`,
	    "footerText": '©Created by Rifza',
	    "buttons": [
	    {"buttonId": `!owner`,
	    "buttonText": {"displayText": "OWNER"
	    },"type": "RESPONSE"}
	    ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted:freply})
}
             reply('Suksess broadcast')
}
             break
case 'bc3':
case 'broadcast3':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
             if (!isOwner && !isCoOwner && mek.key.fromMe) return  reply(mess.only.owner)
            if (args.length < 1) return reply('teks?')
             anu = await wann.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc2 = await wann.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             wann.sendMessage(_.jid, { contentText: `*🔖 BROADCAST [ • XMOODS • ] 🔖*\n\n${body.slice(4)}`, footerText: '©Created by Rifza', buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'MENU' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }], headerType: 6, locationMessage: { degreesLatitude: 0, degreesLongitude: 0, jpegThumbnail: bc2 }}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
case 'kontag':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
            if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.admin)
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            wann.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
case 'sharelock':
if (isBanned) return reply(mess.ban)
if (isBanchat) return 
tama = `${args.join(' ')}`
nama = tama.split("|")[0];
impostor = tama.split("|")[1];
wann.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:floc})
break
case 'ttt':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
wann.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
case 't':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
     
       titid =  `SILAHKAN PILIH DI BAWAH UNTUK MELANJUTKAN`
          
                   sendButMessage(from, titid, `©Created by Rifza`, [
          {
            buttonId: `Y`,
            buttonText: {
              displayText: `Y`,
            },
            type: 1,
            
            
    },
          {
            buttonId: `N`,
            buttonText: {
              displayText: `N`,
            },
            type: 1,
          },
        ]);
          break
                case 'delttt':
                case 'delttc':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses')
break
     case 't':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
     
       titid =  `SILAHKAN PILIH DI BAWAH UNTUK MELANJUTKAN`
          
                   sendButMessage(from, titid, `©Created by Rifza`, [
          {
            buttonId: `Y`,
            buttonText: {
              displayText: `Y`,
            },
            type: 1,
            
            
    },
          {
            buttonId: `N`,
            buttonText: {
              displayText: `N`,
            },
            type: 1,
          },
        ]);
          break
case 'ttp':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('wait....')
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break
       
case 'txtopng':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
reply('Wait.....')
if (args.length == 0) return reply(`Teksnya mana?...`)
ini_txt = args.join(" ")
getBuffer(`https://leyscoders-api.herokuapp.com/api/textto-image?text=${ini_txt}`).then((gambar) => {
wann.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow @wann.p.p`, quoted : freply})
})
break   



case 'meme':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara')
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️LANJUT`},type:1}]
imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Created by Rifza', imageMessage: imageMsg,
contentText:`klik LANJUT untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
wann.relayWAMessage(prep)    
break
case 'balik':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await wann.downloadAndSaveMediaMessage(encmediau)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
wann.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
})
break

case 'antilink':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins && !isGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (args[0] === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('ANTILINK DI AKTIFKAN')
              } else if (args[0] === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('ANTILINK DI NONAKTIFKAN')
              } else if (!q) {
              	var ini_gopayy =`Halo ${pushname} klik button atau Gunakan ${prefix + command }antilink enable / disable jika button tidak merespon`
var buttonss = [
{buttonId: `!antilink enable`, buttonText:{displayText: 'ENABLE'}, type: 1},
{buttonId: `!antilin disable`, buttonText:{displayText: 'DISABLE'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `©Created by Rifza` ,
buttons: buttonss,
headerType: 1
}
wann.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • XMOODS • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
			}
          break
case "antivirtex":
if (isBanned) return reply(mess.ban)
if (isBanchat) return
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;          
case 'ganteng': 
case 'cantik': 
case 'jelek': 
case 'goblok':  
case 'bego': 
case 'pinter': 
case 'jago': 
case 'nolep': 
case 'monyet':                 	 
case 'babi': 
case 'beban': 
case 'baik': 
case 'jahat': 
case 'anjing': 
case 'haram': 
case 'kontol': 
case 'pakboy': 
case 'pakgirl': 
case 'wibu': 
case 'hebat': 
case 'sadboy': 
case 'sadgirl':
if (isBanned) return reply(mess.ban)
if (isBanchat) return       
if (!isGroup) return reply('Khusus group kak') 
jds = []
const A1 = groupMembers
const B1 = groupMembers
const C1 = A1[Math.floor(Math.random() * A1.length)]
D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
jds.push(C1.jid)
mentions(D1, jds, true)
break
case 'gantengcek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                    
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 😎`
                    reply(N)
                    break 
      case 'cantikcek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                    
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}% 😁*`
                    reply(N)
                    break
       case 'jelekcek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return  
                                          	
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 🤢`
                    reply(N)
                    break 
      case 'goblokcek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                    
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 🤣`
                    reply(N)
                    break 
      case 'begocek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                    
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 😂`
                    reply(N)
                    break 
      case 'pintercek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                     
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 😗`
                    reply(N)
                    break 
     case 'jagocek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                     
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 💪`
                    reply(N)
                    break 
     case 'nolepcek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                     
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 🧐`
                    reply(N)
                    break 
     case 'babicek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                     
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 🤪`
                    reply(N)
                    break 
     case 'bebancek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                    
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 🤬`
                    reply(N)
                    break 
      case 'baikcek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                     
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 😇`
                    reply(N)
                    break 
      case 'jahatcek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                     
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 😈`
                    reply(N)
                    break 
      case 'anjingcek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                     
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 👀`
                    reply(N)
                    break                      
      case 'haramcek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                    
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 🥴`
                    reply(N)
                    break  
      case 'kontolcek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                     
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 🙂`
                    reply(N)
                    break 
       case 'pakboycek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                     
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 😏`
                    reply(N)
                    break 
       case 'pakgirlcek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	  
                    	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 😏`
                    reply(N)
                    break             
       case 'sangecek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	                      
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 🤤`
                    reply(N)
                    break
       case 'bapercek':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                      	                      
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${rifza3}${rifza4}%* 😘`
                    reply(N)
                    break                  
       case 'cekwatak':
if (isBanned) return reply(mess.ban)
if (isBanchat) return       
              var namao = pushname
              var prfx = await wann.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Coldas','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
if (isBanned) return reply(mess.ban)
if (isBanchat) return       
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              wann.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
              break
case 'waifuhd':
if (isBanned) return reply(mess.ban)
if (isBanchat) return    
if (!isPremium) return reply(mess.only.premium)                  
v = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
reply(mess.wait)              
buff = sendMediaURL(from, v.url, )
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
wann.relayWAMessage(prep)
break
case 'tourl':
if (isBanned) return reply(mess.ban)
if (isBanchat) return              
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
reply(mess.wait)              
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await wann.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
break
case 'imgtourl':
case 'img2url':
if (isBanned) return reply(mess.ban)
if (isBanchat) return              
reply(mess.wait)
var imgbb = require('imgbb-uploader')
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var media = await  wann.downloadAndSaveMediaMessage(encmedia)       
imgbb('39d895963468b814fad0514bd28787e2', media)
.then(data => {
var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
ibb = fs.readFileSync(media)
wann.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
.catch(err => {
throw err
})
break

case 'menu3':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
	stod = `${sender}`
   stst = await wann.getStatus(`${sender.split('@')[0]}@c.us`)
			stst = stst.status == 401 ? '' : stst.status
	//	num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
   menu = `❏「 \`\`\`INFO USER\`\`\` 」

╾ _Status : ${isOwner ? 'Owner' : 'User'}_
╾ _Nama : ${pushname}_
╾ _Bio : ${stst}_
╾ _Nomor : @${stod.split('@')[0]}_`
//╾ _Info Nomor : ${num.data.country_code} - ${num.data.carrier.type} - ${num.data.carrier.name}_`
sendButDocument(from, `${menu}`, "*_© XMOODS_*", fs.readFileSync('./gambar/RIFZA'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./gambar/thumb.jpg'), filename:`${jmn} - ${week} - ${calender}`}, [{buttonId:`menu`,buttonText:{displayText:'Menu YT'},type:1},{buttonId:`menu2`,buttonText:{displayText:'Menu IG'},type:1},{buttonId:`Menu3`,buttonText:{displayText:'Menu PDF'},type:1}], {quoted:mek, contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`Hy ${pushname}`,body:`*click here to play music`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://youtu.be/g0lQESej9zc`}}})
break

case 'addvn':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
			              if (!isOwner && !isCoOwner)return reply(`Kamu bukan owner say:v`)
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await wann.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./database/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
				wann.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self [ • XMOODS • ]_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('gambar/thumb.jpg')} }} }) 
				break
case 'getvn':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = body.slice(7)
				buffer = fs.readFileSync(`./database/audio/${namastc}.mp3`)
				wann.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self [ • XMOODS • ]_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('gambar/thumb.jpg')} }}, ptt: true })
				break
case 'listvn':
case 'vnlist':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				wann.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self [ • XMOODS • ]_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('gambar/thumb.jpg')} }}, contextInfo: { "mentionedJid": audionye } })
				break
case 'artikata':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
                
                if (args.length < 1) return reply('Apa Yang Mau di artikan?')
              reply(mess.wait)
              
                    teks = args.join(' ')
                    get_result = await fetchJson(`https://leyscoders-api.herokuapp.com/api/arti-kata?q=${teks}&apikey=IkyOgiwara`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik lagi jika suka Ilham`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ LANJUT `,
            },
            type: 1,
          },]);
        break;
        case 'tahilalat':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
                
                    get_result = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tahi-lalat?apikey=IkyOgiwara`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik lanjut untuk lagi...`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ LANJUT `,
            },
            type: 1,
          },]);
        break;
case 'suit': //nyolong dari zenz
       if (isBanned) return reply(mess.ban)
if (isBanchat) return
              if (!q) return reply(`Kirim perintah ${prefix}suit Gunting✂️ / Batu🪨 / kertas📄`)
              const userspilih = q
              if (!userspilih.match(/Batu|Gunting️|kertas/)) return reply(`Pilih Batu🪨, kertas📄, Gunting✂️`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'Batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'Gunting️';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'Batu' ) {
              if( computer == 'Gunting' ) {
              reply(`Kamu memilih Batu🪨 dan bot Gunting✂️\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu🪨 dan bot memilih Kertas📄\nKamu kalah!`)
}
              } else if ( userspilih == 'Gunting' ) {
              if( computer == 'Batu' ) {
              reply(`Kamu memilih Gunting✂️ dan bot memilih Batu🪨\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting✂️ dan bot Kertas📄\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'Batu' ) {
              reply(`Kamu memilih kertas📄 dan bot Batu🪨🪨\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas📄 dan bot memilih Gunting✂️\nKamu kalah`)
}
}
              break
//===========[ Premium ]==========\\
       case 'premium':
if (isBanned) return reply(mess.ban)
if (isBanchat) return 
              if (!isOwner && !isCoOwner  && !mek.key.fromMe) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
case 'toimg':      
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)              
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await wann.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              wann.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break

case 'togif':
if (isBanned) return reply(mess.ban)
if (isBanchat) return        
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)              
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await wann.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               wann.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break

case 'tovideo':
case 'tomp4':
if (isBanned) return reply(mess.ban)
if (isBanchat) return        
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)              
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               mediaaa = await wann.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               wann.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break

case 'gay':
if (isBanned) return reply(mess.ban)
if (isBanchat) return		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  wann.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					wann.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break                              
case 'closetime'://====Dari Pena bot=====\\
if (isBanned) return reply(mess.ban)
if (isBanchat) return
      if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isGroup) return reply("Khusus di grup");		 
        reply("AKSES WAKTU DIPROSES")   	
                wann.updatePresence(from, Presence.composing) 
                if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"0000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
				var nomor = mek.participant
				const close = {
				text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪᴛᴜᴛᴜᴘ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ʜᴀɴʏᴀ ᴀᴅᴍɪɴ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
				contextInfo: { mentionedJid: [nomor] }
				}
				wann.groupSettingChange (from, GroupSettingChange.messageSend, true);
				reply(close)
				}, timer)
				break 
case 'opentime'://====Dari Pena bot=====\\  
if (isBanned) return reply(mess.ban)
if (isBanchat) return
		     	if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isGroup) return reply("Khusus di grup");		    
                reply("AKSES WAKTU DIPROSES")   
                wann.updatePresence(from, Presence.composing) 
                if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"00000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
				var nomor = mek.participant
				const open = {
				text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪʙᴜᴋᴀ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ᴍᴇᴍʙᴇʀ* ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
				contextInfo: { mentionedJid: [nomor] }
				}
				wann.groupSettingChange (from, GroupSettingChange.messageSend, false);
				reply(open)
				}, timer)
				break
case 'linkwa':
if (isBanned) return reply(mess.ban)
if (isBanchat) return 
if(!q) return reply('cari group apa?')
hx.linkwa(q)
.then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
case "tes":
if (isBanned) return reply(mess.ban)
if (isBanchat) return
        sendButMessage(from, `Siap Lapor!, Bot Aktif!`, `Nah kak silahkan pilih salah satu tombol di bawah`, [
          {
            buttonId: `${prefix}runtime`,
            buttonText: {
              displayText: `⬡ RUNTIME `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}menu`,
            buttonText: {
              displayText: `⬡ MENU`,
            },
            type: 1,
          },
        ]);
        break
case 'runtime':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
textImg(`${runtime(process.uptime())}`)
break       
case 'ping':
case 'speed':
if (isBanned) return reply(mess.ban)
if (isBanchat) return              
timestampe = speed();
latensie = speed() - timestampe
reply(`「 *[ • XMOODS • ]* 」\n //==[${latensie.toFixed(4)} detik 💬]==\\`)
break
case 'gachacecan':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
 stod = `${sender}`
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: '*_© XM BOT_*',
 description: `Hai kak @${stod.split('@')[0]}, Silahkan pilih menu disini`,
 sections: [
                     {
                      "title": `${jmn} - ${week} ${weton} - ${calender}`,
 rows: [
                          
                           {
                              "title": ")-----[INDONESIA]-----(",
                              "description": `Cecan 1`,
                              "rowId": "#indonesia"
                           },                                                                                                            
                           {
                              "title": ")-----[THAILAND]-----(",
                              "description": `Cecan 2`,
                              "rowId": "#thailand"
                           },
                           {
                              "title": ")-----[VIETNAM]-----(",
                              "description": `Cecan 3`,
                              "rowId": "#vietnam"
                           },
                           {
                              "title": ")-----[MALAYSIA]-----(",
                              "description": `Cecan 4`,
                              "rowId": "#malaysia"
                           },
                           {
                              "title": ")-----[KOREA]-----(",
                              "description": `Cecan 5`,
                              "rowId": "#korea"
                           }, 
                           {
                              "title": ")-----[JEPANG]-----(",
                              "description": `Cecan 6`,
                              "rowId": "#jepang"
                           },
                           {
                              "title": ")-----[CHINA]-----(",
                              "description": `Cecan 7`,
                              "rowId": "#china"
                           }                           
                           
                        ]
                     }],
 listType: 1
}
wann.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftroli})
break
case 'randomvideo':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
 stod = `${sender}`
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: '*_© XM BOT_*',
 description: `Hai kak @${stod.split('@')[0]}, Silahkan pilih menu disini`,
 sections: [
                     {
                      "title": `${jmn} - ${week} ${weton} - ${calender}`,
 rows: [
                          
                           {
                              "title": ")-----[DONGHUA]-----(",
                              "description": `Random Video 1`,
                              "rowId": "#donghua"
                           },                                                                                                                                       
                        ]
                     }],
 listType: 1
}
wann.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftroli})
break
case 'vietnam':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
author = await fetchJson(`https://za-api.herokuapp.com/api/cewe/vietnam?apikey=ApiRifzaBot`)
buff = await getBuffer(author.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Rifza', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
wann.relayWAMessage(prep)
break 
case 'china':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
author = await fetchJson(`https://za-api.herokuapp.com/api/cewe/china?apikey=ApiRifzaBot`)
buff = await getBuffer(author.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Rifza', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
wann.relayWAMessage(prep)
break
case 'malaysia':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
author = await fetchJson(`https://za-api.herokuapp.com/api/cewe/malaysia?apikey=ApiRifzaBot`)
buff = await getBuffer(author.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Rifza', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
wann.relayWAMessage(prep)
break
case 'korea':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
author = await fetchJson(`https://za-api.herokuapp.com/api/cewe/korea?apikey=ApiRifzaBot`)
buff = await getBuffer(author.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Rifza', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
wann.relayWAMessage(prep)
break
case 'indonesia':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
author = await fetchJson(`https://za-api.herokuapp.com/api/cewe/indonesia?apikey=ApiRifzaBot`)
buff = await getBuffer(author.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Rifza', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
wann.relayWAMessage(prep)
break
case 'thailand':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
author = await fetchJson(`https://za-api.herokuapp.com/api/cewe/thailand?apikey=ApiRifzaBot`)
buff = await getBuffer(author.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Rifza', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
wann.relayWAMessage(prep)
break
case 'japan':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
author = await fetchJson(`https://za-api.herokuapp.com/api/cewe/japan?apikey=ApiRifzaBot`)
buff = await getBuffer(author.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Rifza', imageMessage: imageMsg,
contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
wann.relayWAMessage(prep)
break
case 'translate':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://za-api.herokuapp.com/api/translate?kata=${q}&apikey=ApiRifzaBot`, {method: 'get'})
teks = `Translate : ${anu.result.text}\n\nFrom : ${anu.result.from}`                   
reply(teks)
break
case 'bisakah':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','YO NDAK TAU KOK TANYA SAYA']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
wann.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
break
case 'kapankah':
if (isBanned) return reply(mess.ban)
if (isBanchat) return       
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
wann.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
break
case 'apakah':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
wann.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
break
case 'addcmd': 
case 'setcmd':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
textImg("Done!")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)        
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
textImg("Done!")
break
case 'listcmd':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
case 'kemonomimi':
case 'smug':
case 'baka':
case 'tickle':
case 'slap':
case 'poke':
case 'pat':
case 'meow': 
case 'lizard':
case 'kiss':
case 'hug':
case 'feed':
case 'cuddle':
case 'holo':
case 'woof':
case 'goose':
case 'gecg':
case 'avatar':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                
reply('Wait.....')
buff = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=${command}&apikey=hardianto`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️LANJUT`},type:1}]
imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Created by Rifza', imageMessage: imageMsg,
contentText:`Follow @wann.p.p`,buttons,headerType:4}
prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
wann.relayWAMessage(prep)
break 
case 'detikvn':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isQuotedAudio) return reply('Reply audionya!')			
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediam = await wann.downloadAndSaveMediaMessage(encmediam)
cokmatane = Number(args[0])
hah = fs.readFileSync(mediam)
wann.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:fvn})
fs.unlinkSync(mediam)
break	
case 'detikvideo':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isQuotedVideo) return reply('Reply videonya blokk!')
encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
median = await wann.downloadAndSaveMediaMessage(encmedian)
cokmatane = Number(args[0])
hah = fs.readFileSync(median)
wann.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: fvid})
fs.unlinkSync(median)
break 
case 'robot':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await wann.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
wann.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediaz = await wann.downloadAndSaveMediaMessage(encmediaz)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediaz)
if (err) return ephe('Error!')
hah = fs.readFileSync(ran)
wann.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
})
break
case 'bass':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                 
encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediao = await wann.downloadAndSaveMediaMessage(encmediao)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediao)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
wann.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
})
break
case 'sider':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isGroup) return reply(mess.only.group)
infom = await wann.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'jadian':
if (isBanned) return reply(mess.ban)
if (isBanchat) return       
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian@${akuu.jid.split('@')[0]}  (♥️) @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid) 
mentions(teks, jds, true)            
sendButMessage(from, `SEMOGA NIKAH😂`, `klik tombol di bawah untuk menjodohkan lagi`, [
{
buttonId: `${prefix}jadian`,
buttonText: {
displayText: `PASANGAN SELANJUTNYA ➡️ `,
},
type: 1,
},          
]);
break;
case 'wangy':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!q) return
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
break
case 'waktu':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
break
case 'cekmati':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!q) return reply(mess.wrongFormat)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
case 'spam':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
argzi = arg.split("|")
if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
if (Number(argzi[1]) >= 5000) return reply('Kebanyakan!')
if (isNaN(argzi[1])) return reply(`harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
wann.sendMessage(from, argzi[0], MessageType.text)
}
break
case 'spamsw':
if (!isOwner && mek.key.fromMe) return reply(mess.only.owner)
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
argzi = arg.split("|")
if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
if (isNaN(argzi[1])) return reply(`harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
wann.sendMessage('status@broadcast', argzi[0], MessageType.text)
}
break

case 'tag':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
var nomqm = `${body.slice(5)}@s.whatsapp.net`
tagq = `@${nomqm.split('@')[0]}` 
wann.sendMessage(from, tagq, text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'tagme':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
var nomqm = mek.participant
tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
wann.sendMessage(from, tagu, text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break    	
case 'upswteks':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
wann.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
break
case 'kalkulator':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
var mtk = body.slice(12)
teks = `${mtk} = ${Math_js.evaluate(mtk)}`
reply(teks)
break
case "totag":
if (isBanned) return reply(mess.ban)
if (isBanchat) return
       if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await wann.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await wann.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          wann.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await wann.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await wann.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          wann.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await wann.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await wann.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          wann.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await wann.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await wann.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          wann.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
case 'googlelink':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                             
anu = await fetchJson(`http://hadi-api.herokuapp.com/api/googlesearch?q=${q}&length=10`)
itu = anu.hasil
let ini = itu[Math.floor(Math.random() * (itu.length))]
ini_hasil = `Hasil : ${ini.title}\n`
ini_hasil += `Link : ${ini.link}`
sendButMessage(from, ini_hasil, `Klik Untuk Ke pencarian selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `➡️ LANJUT `,
},
type: 1,
},]);
break;

case 'emoji':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!q) return fakegroup('emojinya?')
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerUrl(from,`${teks}`)	
console.log(teks)
})
break
case 'fitnah':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
            if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				wann.sendMessage(from, cs[2], MessageType.text, target)
				break      
case 'kbbi':
if (isBanned) return reply(mess.ban)
if (isBanchat) return               
if (args.length < 1) return reply('Apa Yang Mau di artikan?')
reply(mess.wait)             
kbbi = args.join(' ')
memeks = await fetchJson(`https://zenzapi.xyz/api/kbbi?query=${kbbi}&apikey=${zenzapi}`)
kontol  = `Title : ${memeks.result.title}\n\n`
kontol += `Caption : ${memeks.result.arti}`
sendButMessage(from, kontol, `Tuh artinya, klik tombol di bawah untuk kembali ke menu`, [
{
buttonId: `${prefix} command`,
buttonText: {
displayText: `⬅️️ BACK TO MENU `,
},
type: 1,
},]);
break;
case 'rules':
if (isBanned) return reply(mess.ban)
if (isBanchat) return               
anjeng = `
)-----[RULES BOT]-----(

1.teks dan nama pengguna whatsapp
anda akan kami simpan di dalam
server selama bot aktif
2.data akan di hapus ketika bot offline
3.kami tidak menyimpan
gambar,video,file,audio,dan dokumen
yang anda kirim
4.kami tidak akan pernah meminta
anda untuk memberikan informasi
pribadi
5.jika menemukan bug/error silahkan
langsung lapor ke owner bot
6.jangan spam bot,sangsi block
7.jangan telepon bot,sangsi block
permanen
8.apapun yang anda perintahkan
pada bot ini,KAMI TIDAK AKAN
BERTANGGUNG JAWAB!
TERIMAKASIH TELAH
MENGGUNAKAN BOT KAMI
Owner XM Bot:

wa.me/6287708357324`
sendButMessage(from, anjeng, `Baca rulesnya!, Jangan di baca doang, Patuhi juga ajg❗`, [
{
buttonId: `${prefix} command`,
buttonText: {
displayText: `💾MENU `,
},
type: 1,
},]);
break;

case 'hit':  
case 'totalhit':
if (isBanned) return reply(mess.ban)
if (isBanchat) return             
babi = totalhit
sendButMessage(from, babi, `Hit Hari ini`, [
{
buttonId: `${prefix} command`,
buttonText: {
displayText: `💾MENU `,
},
type: 1,
},]);
break;
case 'quotes':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
reply(mess.wait)
data = quote
jsonData = JSON.parse(data);
xmoods1 = Math.floor(Math.random() * jsonData.length);
xmoods2 = jsonData[xmoods1];
hasil  = `Author : ${xmoods2.author}\n\n`
hasil += `Author : ${xmoods2.quotes}`
sendButMessage(from, hasil, `Tuh artinya, klik tombol di bawah untuk kembali ke menu`, [
{
buttonId: `${prefix} command`,
buttonText: {
displayText: `⬅️️ BACK TO MENU `,
},
type: 1,
},]);
break;


case 'darkjoke':
case 'darkjokes': 
case 'memegelap':
if (isBanned) return reply(mess.ban)
if (isBanchat) return				
reply(mess.wait)
data = darkjoke
jsonData = JSON.parse(data);
xm1 = Math.floor(Math.random() * jsonData.length);
xm2 = jsonData[xm1];
hasil = await getBuffer(xm2.result)
buttons = [{buttonId: `#darkjoke`,buttonText:{displayText: ` ➡️LANJUT`},type:1}]
imageMsg = (await wann.prepareMessageMedia(hasil, "imageMessage", { thumbnail: hasil, })).imageMessage
buttonsMessage = {footerText:'crated by rifza ganz', imageMessage: imageMsg,
contentText:`Follow @wann.p.p`,buttons,headerType:4}
prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
wann.relayWAMessage(prep)
break
case 'walpapermuslim':
if (isBanned) return reply(mess.ban)
if (isBanchat) return			
reply(mess.wait)
data = walpapermuslim
jsonData = JSON.parse(data);
xm1 = Math.floor(Math.random() * jsonData.length);
xm2 = jsonData[xm1];
hasil = await getBuffer(xm2.result)
buttons = [{buttonId: `#walpapermuslim`,buttonText:{displayText: ` ➡️LANJUT`},type:1}]
imageMsg = (await wann.prepareMessageMedia(hasil, "imageMessage", { thumbnail: hasil, })).imageMessage
buttonsMessage = {footerText:'crated by rifza ganz', imageMessage: imageMsg,
contentText:`Follow @wann.p.p`,buttons,headerType:4}
prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
wann.relayWAMessage(prep)
break
/*
1. #dadu
2. #doge
3. #toimg
4. #patrick
5. #garwgura
*/
case 'patrick':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (isBanned) return reply(mess.ban)
if (isBanchat) return
reply(mess.wait)              
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
break
case 'gura':
case 'gawrgura':
if (isBanned) return reply(mess.ban)
if (isBanchat) return       
if (!isPremium) return reply(mess.only.premium)
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
break
case 'animestick':
case 'stickeranime':
if (isBanned) return reply(mess.ban)
if (isBanchat) return       
if (!isPremium) return reply(mess.only.premium)
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendStickerUrl(from, pjrr)
}
)
break
case 'dadu':
if (isBanned) return reply(mess.ban)
if (isBanchat) return    
if (!isPremium) return reply(mess.only.premium)  
reply(mess.wait)
dadu()
.then(async (body) => {
dadugerak = body.split('\n')
dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
sendStickerUrl(from, dadugerakx)
})
.catch(async (err) => {
console.error(err)
reply('Error!')
})
break
case 'doge':
if (isBanned) return reply(mess.ban)
if (isBanchat) return  
if (!isPremium) return reply(mess.only.premium)    
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
break

case 'caripesan':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await wann.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
wann.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
case 'getpp':
if (isBanned) return reply(mess.ban)
if (isBanchat) return        
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
linkpp = await wann.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
wann.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
} else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
mberr = mek.message.extendedTextMessage.contextInfo.participant
linkpp = await wann.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
wann.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
} else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
linkpp = await wann.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
wann.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
break
case 'truth':
if (isBanned) return reply(mess.ban)
if (isBanchat) return       
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
wann.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
break
case 'dare':
if (isBanned) return reply(mess.ban)
if (isBanchat) return       
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️LANJUT`},type:1}]
imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
contentText:'*Dare*\n\n'+ der,buttons,headerType:4}
prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
wann.relayWAMessage(prep)
break
case 'attp':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                
try {                
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
xbotz = args.join(' ')
reply(mess.wait)
dapuhy = await getBuffer(`https://api.xteam.xyz/attp?file&text=${xbotz}`)
wann.sendMessage(from, dapuhy, sticker, {quoted: ftroli})
} catch (e) {
console.log(`Error :`, color(e,'red'))
}
break
case 'brainly':
if (isBanned) return reply(mess.ban)
if (isBanchat) return                   
ayah = await fetchJson(`https://api.xteam.xyz/brainly?soal=${q}&APIKEY=${xteamkey}`)
adik_kakak = `Soal📄 : ${ayah.soal}\n\n`
adik_kakak += `Jawaban🗣️ : ${ayah.jawaban}\n`
sendButMessage(from, adik_kakak, `Klik tombol di bawah untuk hasil selanjutnya`, [
{
buttonId: `${prefix}brainly ${q}`,
buttonText: {
displayText: `➡️ LANJUT `,
},
type: 1,
},]);
break;
case 'tebakgambar':
if (isBanned) return reply(mess.ban)
if (isBanchat) return               
data = tebakgambar
jsonData = JSON.parse(data);
xmm1 = Math.floor(Math.random() * jsonData.length);
xmm2 = jsonData[xmm1];
ngebuff = await getBuffer(xmm2.result.soalImg)
tebak = `➸ Jawaban : ${xmm2.result.jawaban}`
setTimeout( () => {
wann.sendMessage(from, tebak, text, {quoted: fkontak})
}, 30000)
setTimeout( () => {
wann.sendMessage(from, '_10 Detik lagi..._', text, {quoted: fkontak})
}, 20000)
setTimeout( () => {
wann.sendMessage(from, '_20 Detik lagi..._', text, {quoted: fkontak})
}, 10000)
setTimeout( () => {
wann.sendMessage(from, '_30 Detik lagi..._', text, {quoted: fkontak})
}, 2500)
setTimeout( () => {
wann.sendMessage(from, ngebuff, image, { caption: '_Hayo jawabannya apa😅, Kalo salah donasj ya😀_', quoted: freply })
}, 0)
break
case 'leveling':
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isGroup) return reply(mess.only.group)
if (ar[0] === 'enable') {
if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
_leveling.push(from)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
reply('Fitur leveling berhasil diaktifkan.')
} else if (ar[0] === 'disable') {
var anup = _leveling.indexOf(from)
_leveling.splice(anup, 1)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
reply('Fitur leveling berhasil dimatikan.')
} else {
var ini_rifza =`Halo @${senderr.split('@')[0]} klik button atau Gunakan ${prefix + command } enable / disable jika button tidak merespon`
var buttonss = [
{buttonId: `#leveling enable`, buttonText:{displayText: 'ENABLE'}, type: 1},
{buttonId: `#leveling disable`, buttonText:{displayText: 'DISABLE'}, type: 1}
]

buttonMessagee = {
contentText: ini_rifza,
footerText: `©Created by Rifza` ,
buttons: buttonss,
headerType: 1
}
wann.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • XMOODS • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
			}
          break
case 'ban':
case 'banned':
if (!isOwner && !mek.key.fromMe) return reply(mess.own)
bnnd = body.slice(5)
ban.push(`${args[0].replace('@','')}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
break
case 'unban': 
case 'unbanned':
if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
delp = body.slice(7)
ban.splice(`${delp}@s.whatsapp.net`, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
break
case 'listban':
case 'banlist':
teks = '*List Ban:*\n\n'
for (let manikgans of ban) {
teks += `- ${manikgans}\n`
}
teks += `\n*Total : ${ban.length}*`
wann.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": ban } })
break
case 'level': 
if (isBanned) return reply(mess.ban)
if (isBanchat) return
if (!isGroup) return reply(mess.only.group)
if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
let userLevel = level.getLevelingLevel(sender, _level)
let userXp = level.getLevelingXp(sender, _level)
let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
let userRank = level.getUserRank(sender, _level)
try {
profilePic = await wann.getProfilePicture(sender)
} catch {
profilePic = errorImg
}
buffer = await getBuffer(`http://Api.lolhuman.xyz/api/rank?apikey=${LolApi}&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
buttons = [{ buttonId: `${prefix}mining`, buttonText: { displayText: 'MINING' }, type: 1 },{ buttonId: `${prefix}leaderboard`, buttonText: { displayText: 'LEADEBOARD' },type:1}]
imageMsg = (await wann.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
buttonsMessage = {footerText:'© Lord_Rifza', imageMessage: imageMsg,
contentText:`${teks}`,buttons,headerType:4}
prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
wann.relayWAMessage(prep)
break

case 'donghua'://case by rifza, Hapus WM = yatim!
if (isBanned) return reply(mess.ban)
if (isBanchat) return   
reply('Loading.... ')
data = donghua
jsonData = JSON.parse(data);
xm1 = Math.floor(Math.random() * jsonData.length);
xm2 = jsonData[xm1];
xm3 = await getBuffer(xm2.result)
wann.sendMessage(from, xm3, video, {mimetype: 'video/mp4', filename: `donghua.mp4`, quoted:ftroli, caption: 'Nih Gan'})
break
case 'groupowner':
menu = ` RA ENK GRUP GRUP AN`
fakeitem(menu)
break
case 'store':
stod = `${sender}`
p = wann.prepareMessageFromContent(from, {	"listMessage": {
"title": "",
"description": `${tampilWaktu}\n\nHai kak ${pushname} Pilih Menu Invibot Shop Dibawah Ini\n\nJaga kesehatan Ya Kak`,
"buttonText": `List Command`,
"listType": "SINGLE_SELECT",
"sections": [{
"rows": [
{"title":"dmff","rowId":"dmff","description":"Diamond FreeFire Via ID "},
{"title":"dmml","rowId":"dmml","description":"Diamond Mobile Legends Via ID"},
{"title":"sewabot","rowId":"sewabot","description":"Sewa Bot"},
{"title":"jasher","rowId":"jasher","description":"Jasa Share"},
{"title":"codm","rowId":"codm","description":"Diamond CODM "},
{"title":"ucpubg","rowId":"ucpubg","description":"UC PUBG VIA ID"},
{"title":"sausageman","rowId":"sausageman","description":"Diamond Game Sosis"},
{"title":"payment","rowId":"payment","description":"List Payment"}]
}]
}}, {})
wann.relayWAMessage(p, {waitForAck: true})
break  
case 'proses':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
menu = `_Orderan Sedang Di Proses Silakan Di Tunggu_

*⏰ Jam ⵓ* _${time2} WIB_
*📅 Tanggal ⵓ* _${tampilTanggal}_

_Pesanan Sedang Di Proses Harap Di Tunggu Ya Kak !!_`
reply(menu)
break
case 'done':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
menu =`_Done Kak Orderan Telah Di Terima_

*⏰ Jam ⵓ* _${time2} WIB_
*📅 Tanggal ⵓ* _${tampilTanggal}_


_All Trx No Reff Jadi Barang Tidak Bisa  Di Kembalikan Karna Sudah Bilang Done !!_`
katalog(menu)
break

case 'masukandata':
gambar = fs.readFileSync('./wann.jpg')
menu =`*${ucapannya2}*
*Sebelum lanjut, Mohon diisi dulu !!*


*𖣘 ɴᴀᴍᴀ :*
*𖣘 ɪᴅ :*
*𖣘 ɴᴏᴍɪɴᴀʟ :*
*𖣘 ʜᴀʀɢᴀ ᴅɪᴀᴍᴏɴᴅ :*`
teks =`*Pastikan Format Benar !!*
*Jika Salah Isi Format Maka Diamond Gak Masuk*
*Kami tidak akan bertanggung jawab !!*
*Jika Sudah Selesai Isi Format Harap Kirim Ke Owner !!*
*Terima kasih*`
teks = `${ucapannya2}`
but = [
          { buttonId: `payment`, buttonText: { displayText: 'ᴘᴀʏᴍᴇɴᴛ' }, type: 1 },
          { buttonId: `masukandata`, buttonText: { displayText: 'Beli' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break
case 'dmff':
case 'diamondfreefire':
stod = `${sender}`
       stst = await wann.getStatus(`${sender.split('@')[0]}@c.us`)
       nama = 'WANN '
       ownerJid = "6282138919347@s.whatsapp.net"
				stst = stst.status == 401 ? '' : stst.status
gambar = fs.readFileSync('./wann.jpg')
menunya = `*「 DIAMOND FREEFIRE 」*

• *12 DIAMOND = 2.000*
• *20 DIAMOND = 3.000*
• *50 DIAMOND = 7.000*
• *70 DIAMOND = 10.000*
• *100 DIAMOND = 14.000*
• *140 DIAMOND = 19.000*
• *150 DIAMOND = 20.000*
• *210 DIAMOND = 28.000*
• *280 DIAMOND = 37.000*
• *355 DIAMOND = 47.000*
• *425 DIAMOND = 56.000*
• *500 DIAMOND = 65.000*
• *635 DIAMOND = 83.000*
• *720 DIAMOND = 92.000*
• *1.075 DIAMOND = 138.000*
• *2.000 DIAMOND = 251.000*
• *3.440 DIAMOND = 434.000*
• *4.000 DIAMOND = 500.000*
• *6.000 DIAMOND = 750.000*
• *7.290 DIAMOND = 918.000*
• *8.010 DIAMOND = 1.167.600*

*「 Member Ship 」*

• *MM = Rp 29.000*
• *MB = Rp 140.000*`
teks =
`「 ${NamaBot} 」\n*${tampilTanggal}*`

if(menuall == false){
   //Masih langka
anu = wann.prepareMessageFromContent(from,{
					"productMessage": {
						"product": {
								"productImage": {
								 "url": "https://mmg.whatsapp.net/d/f/Ahb4wGLv5WRRHNDjX0oscWGguHSUTuBXrBLUDCzO0_0Z.enc",
						"mimetype": "image/jpeg",
						"fileSha256": "LxreCgbGFLCuMD0STZaaTDsyHuNg/s06FHXg9vm+qmo=",
						"fileLength": "109459",
						"height": 1280,
						"width": 1274,
						"mediaKey": "1SBZlmQxZQR+qZBVlBR5RcvDQNfYSRiYPT8uWDaEzLY=",
						"fileEncSha256": "V6JNiialXPUGHn1j7Tz7YkXpU+QzOkBvOV7GZL2PRS4=",
						"jpegThumbnail": fs.readFileSync("./wann.jpg")
                                },
                            "productId": "9999999",
							"title": `${teks}`, 
							"description": `${menu}`,
							"productImageCount": 1
						},
						"businessOwnerJid": `${ownerJid}`,
						"contextInfo": {
							"forwardingScore": 9999,
							"isForwarded": true
						}
					}
				},{quoted: ftrol, contextInfo: { mentionedJid: [dtod,otod,stod]}})
                  wann.relayWAMessage(anu)
                  } else if(menuall = true){
gbutsan = [
{buttonId:`owner`,buttonText:{displayText:'👑𝙊𝙒𝙉𝙀𝙍'},type:1},
{buttonId:`payment`,buttonText:{displayText:'💰 PAYMENT'},type:1},
{buttonId:`script`,buttonText:{displayText:'🍁𝙔𝙊𝙐𝙏𝙐𝘽𝙀'},type:1}
]
mhan = await wann.prepareMessage(from, gambar, image, {thumbnail: gambar})
const btnBngsat = {
imageMessage: mhan.message.imageMessage,
contentText: `${menu}`,
footerText: `٬࿊⃟𝑯𝒆𝒍𝒈𝒂𝒂 𝒁𝒆𝒙'𝒔シ`,
buttons: gbutsan,
headerType: 4
}
wann.sendMessage(from, btnBngsat, MessageType.buttonsMessage, { quoted: ftrol, caption: menu, contextInfo: { mentionedJid: [dtod,otod,stod]}})
                  }
break
break
case 'dmml':
case 'diamondmobilelegend':
gambar = fs.readFileSync('./wann.jpg')
menunya = `*「 DIAMOND MOBA 」*

• *5 DIAMOND = 2.000*
• *12 DIAMOND = 4.000*
• *19 DIAMOND = 6.000*
• *28 DIAMOND = 9.000*
• *36 DIAMOND = 11.000*
• *86 DIAMOND = 21.000*
• *172 DIAMOND = 41.000*
• *257 DIAMOND = 61.000*
• *343 DIAMOND = 81.000*
• *429 DIAMOND = 102.000*
• *514 DIAMOND = 122.000*
• *600 DIAMOND = 142.000*
• *706 DIAMOND = 163.000*
• *878 DIAMOND = 204.000*
• *963 DIAMOND = 224.000*
• *1.049 DIAMOND = 244.000*

*「 Starlight Member 」*

• *SM = 134.000*
• *TP = 134.000*
• *SMP = 305.000*`
teks =
`「 ${NamaBot} 」\n*${tampilTanggal}*`
but = [
          { buttonId: `payment`, buttonText: { displayText: 'ᴘᴀʏᴍᴇɴᴛ' }, type: 1 },
          { buttonId: `masukandata`, buttonText: { displayText: 'Beli' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'ucpubg':
gambar = fs.readFileSync('./wann.jpg')
menunya = `*「 UC PUBG 」*

• *35 UC = 8.000*
• *50 UC = 4.000*
• *70 UC = 6.000*
• *150 UC = 9.000*
• *250 UC = 11.000*
• *500 UC = 21.000*
• *700 UC = 41.000*
• *1.000 UC = 61.000*
• *1.250 UC = 81.000*
• *1.750 UC = 102.000*
• *2.500 UC = 122.000*`
teks =
`「 ${NamaBot} 」\n*${tampilTanggal}*`
but = [
          { buttonId: `payment`, buttonText: { displayText: 'ᴘᴀʏᴍᴇɴᴛ' }, type: 1 },
          { buttonId: `masukandata`, buttonText: { displayText: 'Beli' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'callofdutymobile':
case 'codm':
case 'cod':
gambar = fs.readFileSync('./wann.jpg')
menunya = `*「 Call of Duty Mobile 」*

• *62 CP = 10.000*
• *127 CP = 20.000*
• *317 CP = 49.000*
• *634 CP = 97.000*
• *1.373 CP = 193.000*
• *2.059 CP = 290.000*
• *3.564 CP = 483.000*
• *7.656 UC = 964.000*`
teks =
`「 ${NamaBot} 」\n*${tanggal}*`
but = [
          { buttonId: `payment`, buttonText: { displayText: 'ᴘᴀʏᴍᴇɴᴛ' }, type: 1 },
          { buttonId: `masukandata`, buttonText: { displayText: 'Beli' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'sausageman':
gambar = fs.readFileSync('./wann.jpg')
menunya = `*「 SAUSAGE MAN 」*

• *60 Candy = 8.000*
• *180 Candy = 4.000*
• *300 + 16 Candy = 6.000*
• *680 + 38 Candy = 9.000*
• *1.280 + 88 Candy = 11.000*
• *1.980 + 138 Candy = 21.000*`
teks =
`「 ${NamaBot} 」\n*${tanggal}*`
but = [
          { buttonId: `payment`, buttonText: { displayText: 'ᴘᴀʏᴍᴇɴᴛ' }, type: 1 },
          { buttonId: `masukandata`, buttonText: { displayText: 'Beli' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'jasasher':
case 'jasher':
gambar = fs.readFileSync('./wann.jpg')
menunya = `🇯‌‌🇦‌‌🇸‌‌🇦‌•‌🇸‌‌🇭‌‌🇦‌‌🇷‌‌🇪‌

┏━━━━━━━━━━━━━━━━━━
┃  *⎙ MENYEDIAKAN ⎙*
┃     *JASA SHARE*
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃      *50 GRUP*
┃• *1X SHARE : 300P*
┃• *3X SHARE : 700P*
┃• *4X SHARE : 900P*
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃      *100 GRUP*
┃• *1X SHARE : 1000*
┃• *2X SHARE : 1.400*
┃• *3X SHARE : 1.900*
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃      *200 GRUP*
┃• *1X SHARE : 2.200*
┃• *2X SHARE : 2.300*
┃• *3X SHARE : 2.500*
┃• *5X SHARE : 2.700*
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃     *300 GRUP*
┃• *1X SHARE : 2.500*
┃• *2X SHARE : 2.900*
┃• *3X SHARE : 3.100*
┗━━━━━━━━━━━━━━━━━━━


*DIJAMIN NGALIRRRR POLL🤖*
🗣️ : *ADA TESTI GK BG*
👤 : *TESTI JIBUN POKOKNYA  DIJAMIN NGALIRR*🤑
*▰▰▰▰▰▰▰▰▰▰▰▰▰*


*⎙ PAKET PERJAM ⎙*
*[ 2JAM 6K 200GRUB ]*
*[ 3JAM 13K 330 GRUB ]*
*[ 5JAM 20K 450 GRUB ]*

*JEDA UNTUK PERJAM HANYA 5MENIT 4×SHARE UNTUK 1JAM*


*PAKET PERHARI*

*1HARI = 10K*
*2HARI = 18K*
*3HARI = 25K*
*4HARI = 34K*
*5HARI = 40K*`
teks =
`「 ${NamaBot} 」\n*${tanggal}*`
but = [
          { buttonId: `payment`, buttonText: { displayText: 'ᴘᴀʏᴍᴇɴᴛ' }, type: 1 },
          { buttonId: `masukandata`, buttonText: { displayText: 'Beli' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'bayar':
case 'payment':
gambar = fs.readFileSync('./wann.jpg')
menunya = `*「 PAYMENT 」*

• *Gopay 
• *Dana 
• *Ovo 
• *Pulsa 
• *Silahkan Klik Button sesuai Payment & Harga!!*`
teks =
`「 ${NamaBot} 」\n*${tampilTanggal}*`
but = [
          { buttonId: `gopay`, buttonText: { displayText: 'ᴍᴇɴᴜ' }, type: 1 },
             { buttonId: `dana`, buttonText: { displayText: 'ᴍᴇɴᴜ' }, type: 1 },
          { buttonId: `ovo`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'gopay':
gambar = `${gopayqr}`
menunya = `*「 GOPAY 」*

• *Silahkan Scan Sesuai Harga!!*`
teks =
`「 ${NamaBot} 」\n*${tampilTanggal}*`
but = [
          { buttonId: `dana`, buttonText: { displayText: 'Payment Dana' }, type: 1 },
             { buttonId: `ovo`, buttonText: { displayText: 'Payment Gopay' }, type: 1 },
          { buttonId: `owner`, buttonText: { displayText: 'Penjual' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'dana':
gambar = `${danaqr}`
menunya = `*「 GOPAY 」*

• *Silahkan Scan Sesuai Harga!!*`
teks =
`「 ${NamaBot} 」\n*${tampilTanggal}*`
but = [
          { buttonId: `gopay`, buttonText: { displayText: 'Payment Gopay' }, type: 1 },
             { buttonId: `ovo`, buttonText: { displayText: 'Payment Ovo' }, type: 1 },
          { buttonId: `owner`, buttonText: { displayText: 'Penjual' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break
case 'ovo':
gambar = `${ovoqr}`
menunya = `*「 GOPAY 」*

• *Silahkan Scan Sesuai Harga!!*`
teks =
`「 ${NamaBot} 」\n*${tampilTanggal}*`
but = [
          { buttonId: `dana`, buttonText: { displayText: 'Payment Dana' }, type: 1 },
             { buttonId: `gopay`, buttonText: { displayText: 'Payment Gopay' }, type: 1 },
          { buttonId: `owner`, buttonText: { displayText: 'Penjual' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break
case 'tembak': 
case 'tombak': 
case 'buru':
case 'panah':
if (!isGroup) return reply(mess.only.group)
const hasilburuann = hasilburuan[Math.floor(Math.random() *   hasilburuan.length)]
if (args.length < 1) return reply(` CONTOH\n${prefix + command} hmm`)
ini = body.slice(6)
setTimeout( () => {
reply(`[ PERINTAH DILAKSANAKAN ]`)
}, 1000)
setTimeout( () => {
reply(`[ ${command +  ini} ]`)
}, 5000)
setTimeout( () => {
reply(`[ SEDANG BERBURU ]`)
}, 8000)
setTimeout( () => {
reply(`[ SUKSES !! DAN ANDA MENDAPATKAN ]`)
}, 18000)
setTimeout( () => {
reply(`[ WOW ANDA MENDAPATKAN ]\n[ ${hasilburuann} ]`)
}, 20000)
gameAdd(sender, glimit)
break
case 'slot2':
const slottt = slott[Math.floor(Math.random() *   slott.length)]
const slote = slotnohoki[Math.floor(Math.random() *   slotnohoki.length)]
wann.sendMessage(from, `[ SLOTS ]\n\n${slote}\n${slottt}\n${slote}\n\n[ SLOTS ]`, text, { quoted: floc })
gameAdd(sender, glimit)
break 


case 'trolii':
for (let i = 0; i < args[0]; i++) {
wann.sendMessage(from, `Punten !!!`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: 'Bug Troly By Wann',
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break

case 'buggc3':
for (let i = 0; i < args[0]; i++) {
await wann.toggleDisappearingMessages(from, 0)
reply(`Sukses SendBugg`)
}
break
case 'hadiah':
        	case 'gift':
if (!isOwner && !isCoOwner && mek.key.fromMe) return  reply(mess.only.owner)
listMsg = {
 buttonText: `Buka Untuk Mendapatkan Hadiah`,
 footerText: '',
 description: `Silahkan DIBUKA`,
 sections: [
                     {
                      "title": `Bagaimana hadiahnya?`,
 rows: [{
"title": `${emoji1(prefix)}`,
"description": 'Virus Anonymous',
"rowId": "/menu"
}]
                     }],
 listType: 1,
 ListMessageListType: 2
}
if (!args[0]) {
wann.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}})
} else {
  wann.sendMessage(`${args[0]}@s.whatsapp.net`, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}})
}
            break
case 'piltek':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
gifnya = await getBuffer('https://telegra.ph/file/a92a5a213055a6a48f023.mp4')
anu =`${emoji2(prefix)}`
await wann.sendMessage(from, gifnya, MessageType.video, {mimetype : 'video/mp4', quoted: ftrol, caption: anu})
break

case 'autosticker':
                 if (!isGroup) return reply(mess.only.group)
					if (arg.length < 1) return reply('Pilih on atau off!')
					if (args[0] == 'on') {
						if (isAutoSticker) return reply('Udah lu nyalain pantek:v')
						autostick.push(from)
						fs.writeFileSync('./database/autosticker.json', JSON.stringify(autostick))
						reply('Success Enable Auto sticker!')
					} else if (args[0] == 'off') {
						autostick.splice(from, 1)
						fs.writeFileSync('./database/autosticker.json', JSON.stringify(autostick))
						reply('Success Disable Auto sticker!')
					} else {
						reply(`𝗸𝗲𝘁𝗶𝗸 𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 on 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻, off 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻\n𝗰𝗼𝗻𝘁𝗼𝗵: ${prefix}${command} on`)
					}
					break

case 'bego':
      case 'tolol':
      case 'pinter':
      case 'pintar':
      case 'asu':
      case 'bodoh':
      case 'gay':
      case 'lesby':
      case 'bajingan':
      case 'jancok':
      case 'anjing':
      case 'ngentod':
      case 'ngentot':
      case 'monyet':
      case 'mastah':
      case 'newbie':
      case 'bangsat':
      case 'bangke':
      case 'sange':
      case 'sangean':
      case 'dakjal':
      case 'horny':
      case 'wibu':
      case 'puki':
      case 'pantex':
      case 'pantek':
      
      if (!isGroup) return reply(mess.only.group)
        membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
        teks = `*Yang Paling ${command} Disini Adalah :* @${goo.jid.split('@')[0]} Awokawokk ${command}`
        membr.push(goo.jid)
        mentions(teks, membr, true)
        break        

case 'asupan':
 
 
asu = await getBuffer(`https://api.lolhuman.xyz/api/asupan?apikey=17486bd5a6dc19b0bae44527`)
wann.sendMessage(from, asu, video, { quoted: mek})
break
case 'asupan2': 
anu = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=17486bd5a6dc19b0bae44527`)
ano = await getBuffer(anu.result.result)
wann.sendMessage(from, ano, video, { quoted: mek})
break
case 'asupant3':
 
   
anu = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=17486bd5a6dc19b0bae44527`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, video, { quoted: mek})
break
case 'randombokep':
              bokep = body.slice(1)
              const bo =['https://www.mediafire.com/download/8hnhjcf3pseubgy','https://www.mediafire.com/download/cty9phda3d1s62u','https://www.mediafire.com/download/8hnhjcf3pseubgy']
              const kep = bo[Math.floor(Math.random() * bo.length)]
              wann.sendMessage(from, '*PERMINTAAN:* '+bokep+'\n*DOSA TANGGUNG PRIBADI*\n*NI BRO FREE BUAT KAMU DOWNLOAD SENDIRI:* '+ kep, text, { quoted: ftrol, caption: `NI BOKEP SAYA DAPAT DARI *©wann* DOSA TANGGUNG SENDIRI🗿`})
              break
//Cecan
case 'cogan':
 
   
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/cogan?apikey=${lolkey}`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecan':
 
   
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/cecan?apikey=${lolkey}`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecanvietnam':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecanrandom':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecanmalaysia':
 
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecankorea':
 
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecanindonesia':
 
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecanjapan':
 
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'cecanthailand':
 
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
 case 'hijaber':
   
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
  case 'santuy':
   
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, video, { quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'ukty': 
   
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT77`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, video, { quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'bocil':
  
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, video, { quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
 case 'ghea':
 
   
anu = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`)
ano = await getBuffer(anu.result.url)
wann.sendMessage(from, ano, video, { quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
case 'maker': case 'maker2': 
case 'maker3': case 'maker4':
 
   
if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/${command}?text=${c}&apikey=${YuzApi}`)
ano = await getBuffer(anu.result.results)
wann.sendMessage(from, ano, image, { quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
break
       case 'maker2d2': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
		case 'maker2d3': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
		case 'maker2d4': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'maker3d': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = body.slice(8)
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'maker3d2': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'maker3d3': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'maker3d4': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'transformer': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'googletxt':
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} tsukasa|chan|kawai`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					ll3 = makell.split("|")[0];
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'battlefield': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Yuzzu|Kamiyaka`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'coffeecup': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'coffeecup2': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'neon': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
             case 'glow': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'summer': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'flower': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'burn': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'quote': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'wooden': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break
			case 'golden': 
 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Wann Ofc`)
					makell = args.join(" ")
					 
					anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${YuzApi}`)
					buffer1 = await getBuffer(anu.result.url)
					wann.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./wann.jpg')})
					break















//kasi case di atas⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️	
	









































































default:
/* Panduan bagi yang belum paham aja
   ini balasan otomatis
   
if (budy.includes(``)) { /Di dalam kurung (``) isi teks yang akan di balas bot
                reply(``) /Di dalam kurung (``) isi balasan bot  
                }  
                
// bisa anda tiru seperti di bawah ini  ↓
*/                                                           
if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
if (budy.includes(`assalamu'alaikum`)) {
                  reply(`Waalaikumsalam`)
                  }                  
if (budy.includes(`Assalamu'alaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
if (budy.includes(`asalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }    
if (budy.includes(`asalamu'alaikum`)) {
                  reply(`Waalaikumsalam`)
                  }   
if (budy.includes(`Asalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  } 
if (budy.includes(`Asalamu'alaikum`)) {
                  reply(`Waalaikumsalam`)
                  }                                                                
		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }   
       if(budy.includes('wann')){
wann.sendMessage(from, "hayo ngomongin owner gua ya", text)
wann.sendMessage("6285640068416@s.whatsapp.net", `bang di gosipin Ama wa.me/${sender} Labrak Bang`, text)
wann.sendMessage(from, "Mampus Udh Ku Laporin", text)
}  
/*
> Nah untuk yang ini adalah balasan berupa audio

if (budy.includes(``)) {    /teks yang akan di balas oleh bot
                const teks = fs.readFileSync('');   /di dalam kurung ('') isi lokasi di mana terdapat anda menyimpan audio contoh : ('./database/audio/bot.mp3')
                wann.sendMessage(from, teks, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true})
                  }
                  
bisa anda buat seperti di bawah ini                   
*/                             
}



if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   wann.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		wann.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: mek, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  wann.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
wann.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
wann.sendMessage(from, ucapan1, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
wann.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
wann.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🎟️👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 wann.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (!isOwner || mek.key.fromMe)){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

 } catch(e){

 return reply(require('util').format(e))

}
}
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Pesan : ${budy} Dari`, color(pushname))
}		

} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     wann.sendMessage(`${target}`, `─────「 *EROR DITEMUKAN* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "X MOODS",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./gambar/thumb.jpg'),sourceUrl:"https://wa.me/6287708357324"}}})
	}
    }
    }
    }
    }
    }
    }
