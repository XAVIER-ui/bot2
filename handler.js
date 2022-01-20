const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const rifza = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor, RifzaLog } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, info, close } = require('./lib/yntkts')
const { start, success } = require('./lib/functionss')
const { waiting } = require('./lib/waiting')
const control = JSON.parse(fs.readFileSync('./control.json'))
baterai = 'unknown'
NamaOwner = '©Wann'
NamaBot = 'XM-Bot'
NomorOwner = '6285640068416'

charging = 'unknown'
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
require('./xmoods.js')
nocache('./xmoods.js', module => console.log(`${module} is now updated!`))
//button nya

const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`./gambar/thumb.jpg`), surface: 200, message: `)-----[XM BOT]-----(`, orderTitle: 'rifzapratama', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
       
const starts = async (rifza = new WAConnection()) => {
	console.log(color('Halo kak, Selamat datang di XM-BOT Bot WhatsApp\n\n', 'red'), color('\nScript ini bersifat Pribadi\nDan tidak di perjual belikan\nThanks To\n\n]=====[RIFZA]=====[', 'green'))
    rifza.logger.level = 'warn'
    rifza.version = [2, 2143, 3]
    console.log(color(figlet.textSync('XMBOT', {

		font: 'Pagga',

		horizontalLayout: 'default',

		vertivalLayout: 'default',

		width: 80,

		whitespaceBreak: false

	}), 'cyan'))
    
      rifza.browserDescription = ['Developer Invi X XMOODS', 'SAFARI', '8.1']
    
    rifza.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./connect.json') && rifza.loadAuthInfo('./connect.json')
    rifza.on('connecting', () => {
        start('2', 'Connecting...')
    })
    rifza.on('open', () => {
        success('2', 'Connected')
        setTimeout( () => { 	
	    	}, 1000)    		    	     	
    })
    await rifza.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./connect.json', JSON.stringify(rifza.base64EncodedAuthInfo(), null, '\t'))
        buttonss = [
{buttonId: `#menu`, buttonText:{displayText: '💾MENU'}, type: 1},
{buttonId: `#owner`, buttonText:{displayText: '👤OWNER'}, type: 1}
]

buttonMessagee = {
contentText: `Halo kak Izin pake botnya ya 😊`,
footerText: `©Created by Rifza` ,
buttons: buttonss,
headerType: 1
}
rifza.sendMessage(`6285640068416@s.whatsapp.net`,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • XMOODS • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
         
            },
			quoted: ftroli,sendEphemeral: true 
			})
        
    rifza.on('ws-close', () => {
        console.log(RifzaLog('Koneksi terputus, mencoba menghubungkan kembali..'))
    })

    // Mengkoneksi ulang
    rifza.on('close', async ({ reason, isReconnecting }) => {
        console.log(RifzaLog('Terputus, Alasan :' + reason + '\nMencoba mengkoneksi ulang :' + isReconnecting))
        if (!isReconnecting) {
            console.log(RifzaLog('Connect To Phone Rejected and Shutting Down.'))
        }
    })
	// Baterai

	rifza.on('CB:action,,battery', json => {

		global.batteryLevelStr = json[2][0][1].value

		global.batterylevel = parseInt(batteryLevelStr)

		baterai = batterylevel

		if (json[2][0][1].live == 'true') charging = true

		if (json[2][0][1].live == 'false') charging = false

		console.log(json[2][0][1])

		console.log('Baterai : ' + batterylevel + '%')

	})

	global.batrei = global.batrei ? global.batrei : []

	rifza.on('CB:action,,battery', json => {

		const batteryLevelStr = json[2][0][1].value

		const batterylevel = parseInt(batteryLevelStr)

		global.batrei.push(batterylevel)

	})  

    rifza.on('chat-update', async (message) => {
        require('./xmoods.js')(rifza, message)
        ownerNumber = ["6287708357324@s.whatsapp.net","6287708357324@s.whatsapp.net",`${control.NomorOwner}@s.whatsapp.net`]
        dtod = "6287708357324@s.whatsapp.net"
       otod = `${control.NomorOwner}@s.whatsapp.net`
    })
        waiting('2', 'Menunggu pesan baru...')
        rifza.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
			const mdata = await rifza.groupMetadata(anu.jid)
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;rifza;;;\nFN:rifza\nitem1.TEL;waid=6287708357324:6287708357324\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await rifza.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			masuk =`Halo @${num.split('@')[0]}\nSelamat Datang Di ${mdata.subject}\n\n*Jangan Lupa Isi*\n*Nama* :\n*Umur* :\n*Gender* :\n*Askot* :\n\nEnjoy Jangan Lupa Kenalan\n\nDan baca juga Rules Group❗`
			gbutsan = [{buttonId:'SERAH',buttonText:{displayText:'👋Welcome'},type:1}]
			mhan = await rifza.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${masuk}`,
footerText: `Welcome  Information`, 
buttons: gbutsan,
headerType: 4 }
			rifza.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./gambar/thumb.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			} else if (anu.action == 'remove') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;rifza;;;\nFN:R I F Z A\nitem1.TEL;waid=6287708357324:6287708357324\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await rifza.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluar =`Selamat tinggal @${num.split('@')[0]}\nSemoga tenang disana`
			gbutsan = [{buttonId:'SERAH',buttonText:{displayText:'👋Byee'},type:1}]
			mhan = await rifza.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${keluar}`,
footerText: `Leave Information`,
buttons: gbutsan,
headerType: 4 }
			rifza.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, { thumbnail: fs.readFileSync('./gambar/thumb.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;rifza;;;\nFN:rifza\nitem1.TEL;waid=6287708357324:6287708357324\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
var thu = await rifza.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
rifza.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;rifza;;;\nFN:rifza\nitem1.TEL;waid=6287708357324:6287708357324\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
thu = await rifza.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
rifza.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       

	rifza.on('group-update', async (anu) => {
		const metdata = await rifza.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;rifza;;;\nFN:rifza\nitem1.TEL;waid=6287708357324:6287708357324\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    rifza.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    rifza.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    rifza.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    rifza.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    rifza.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

rifza.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        rifza.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        rifza.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./gambar/thumb.jpg'),sourceUrl:`https://wa.me/6287708357324?text=Assalamualaikum`}}})
        await sleep(5000)
        await rifza.blockUser(callerId, "add")
        ban.push(`${callerId}`)
        fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
        })
}

console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('https://github.com/rifza123', 'cyan'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 400 ) ;
	}
}


function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()
