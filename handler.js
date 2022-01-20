const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const fetch = require('node-fetch')
const { color, bgcolor, RifzaLog } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, info, close } = require('./lib/yntkts')
const { start, success } = require('./lib/functionss')
const { waiting } = require('./lib/waiting')
const control = JSON.parse(fs.readFileSync('./control.json'))
const welcome = require('./lib/group')
baterai = 'unknown'
NamaOwner = '©Wann'
NamaBot = 'XM-Bot'
NomorOwner = '6285640068416'
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')			
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')			
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')	

var date = new Date();

var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes(); 
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = 'Minggu'; break;
case 1: hari = 'Senin'; break;
case 2: hari = 'Selasa'; break;
case 3: hari = 'Rabu'; break;
case 4: hari = 'Kamis'; break;
case 5: hari = 'Jum`at'; break;
case 6: hari = 'Sabtu'; break;
}

switch(bulan1) { 
case 0: bulan1 = 'Januari'; break;
case 1: bulan1 = 'Februari'; break; 
case 2: bulan1 = 'Maret'; break;
case 3: bulan1 = 'April'; break;
case 4: bulan1 = 'Mei'; break;
case 5: bulan1 = 'Juni'; break;
case 6: bulan1 = 'Juli'; break;
case 7: bulan1 = 'Agustus'; break;
case 8: bulan1 = 'September'; break;
case 9: bulan1 = 'Oktober'; break; 
case 10: bulan1 = 'November'; break;
case 11: bulan1 = 'Desember'; break; 
}

switch(jams){
case 0: pada = "Malem"; break;
case 1: pada = "Malem"; break;
case 2: pada = "Malem"; break;
case 3: pada = "Pagi"; break;
case 4: pada = "Pagi"; break;
case 5: pada = "Pagi"; break;
case 6: pada = "Pagi"; break;
case 7: pada = "Pagi"; break;
case 8: pada = "Pagi"; break;
case 9: pada = "Pagi"; break;
case 10: pada = "Pagi"; break;
case 11: pada = "Siang"; break;
case 12: pada = "Siang"; break;
case 13: pada = "Siang"; break;
case 14: pada = "Siang"; break;
case 15: pada = "Sore"; break;
case 16: pada = "Sore"; break;
case 17: pada = "Sore"; break;
case 18: pada = "Malem"; break;
case 19: pada = "Malem"; break;
case 20: pada = "Malem"; break;
case 21: pada = "Malem"; break;
case 22: pada = "Malem"; break;
case 23: pada = "Malem"; break;
}

var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun; 
var tampilJam = '' + 'Jams : ' + jams + ':' + menit + ':' + detik + ' Wib';
tampilTanggal = hari + " "+ tanggal + " " + bulan1 + " " + tahun; 
tampilWaktu =jams + ":" + menit + ":" + detik;



var ase = new Date();
var waktoonyabro = ase.getHours(); 
switch(waktoonyabro){
case 0: waktoonyabro = `Selamat Malam Owner..`; break;
case 1: waktoonyabro = `Selamat Malam Owner..`; break;
case 2: waktoonyabro = `Selamat Malam Owner..`; break;
case 3: waktoonyabro = `Selamat Pagi Owner..`; break;
case 4: waktoonyabro = `Selamat Pagi Owner..`; break; 
case 5: waktoonyabro = `Selamat Pagi Owner..`; break;
case 6: waktoonyabro = `Selamat Pagi Owner..`; break;
case 7: waktoonyabro = `Selamat Pagi Owner..`; break;
case 8: waktoonyabro = `Selamat Pagi Owner..`; break;
case 9: waktoonyabro = `Selamat Pagi Owner..`; break;
case 10: waktoonyabro = `Selamat Pagi Owner..`; break;
case 11: waktoonyabro = `Selamat Siang Owner..`; break; 
case 12: waktoonyabro = `Selamat Siang Owner..`; break;
case 13: waktoonyabro = `Selamat Siang Owner..`; break;
case 14: waktoonyabro = `Selamat Siang Owner..`; break;
case 15: waktoonyabro = `Selamat Sore Owner..`; break;
case 16: waktoonyabro = `Selamat Sore Owner..`; break;
case 17: waktoonyabro = `Selamat Sore Owner..`; break;
case 18: waktoonyabro = `Selamat Malam Owner..`; break; 
case 19: waktoonyabro = `Selamat Malam Owner..`; break;
case 20: waktoonyabro = `Selamat Malam Owner..`; break;
case 21: waktoonyabro = `Selamat Malam Owner..`; break;
case 22: waktoonyabro = `Selamat Malam Owner..`; break; 
case 23: waktoonyabro = `Selamat Malam Owner..`; break;
}

var tampilUcapan = '' + waktoonyabro;



charging = 'unknown'
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
require('./xmoods.js')
nocache('./xmoods.js', module => console.log(`${module} is now updated!`))
//button nya

const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`./gambar/thumb.jpg`), surface: 200, message: `)-----[XM BOT]-----(`, orderTitle: 'rifzapratama', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
       
const starts = async (wann = new WAConnection()) => {
	console.log(color('Halo kak, Selamat datang di XM-BOT Bot WhatsApp\n\n', 'red'), color('\nScript ini bersifat Pribadi\nDan tidak di perjual belikan\nThanks To\n\n]=====[RIFZA]=====[', 'green'))
    wann.logger.level = 'warn'
    wann.version = [2, 2147, 14]
    console.log(color(figlet.textSync(`         INVIBOTZ  `, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))
	console.log(color('\n> WIBb ','silver'), color(`${time}`,'mediumseagreen'))
console.log(color('> WITA ','silver'), color(`${wita}`,'mediumseagreen'))
console.log(color('> WIT ','silver'), color(`${wit}`,'mediumseagreen'))
console.log(color('> HARI ','silver'), color(`${tampilHari}\n`,'mediumseagreen'))

      wann.browserDescription = ['WANN OFC', 'SAFARI', '8.1']
    
    wann.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./connect.json') && wann.loadAuthInfo('./connect.json')
    wann.on('connecting', () => {
        start('2', 'Connecting...')
    })
    wann.on('open', () => {
        success('2', 'Connected')
        setTimeout( () => { 	
	    	}, 1000)    		    	     	
    })
    await wann.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./connect.json', JSON.stringify(wann.base64EncodedAuthInfo(), null, '\t'))
        buttonss = [
{buttonId: `#menu`, buttonText:{displayText: '💾MENU'}, type: 1},
{buttonId: `#owner`, buttonText:{displayText: '👤OWNER'}, type: 1}
]

buttonMessagee = {
contentText: `Halo kak Izin pake botnya ya 😊`,
footerText: `©Created by Wannn` ,
buttons: buttonss,
headerType: 1
}
wann.sendMessage(`6285640068416@s.whatsapp.net`,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '[ • XMOODS • ]',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
         
            },
			quoted: ftroli,sendEphemeral: true 
			})
        
    wann.on('ws-close', () => {
        console.log(RifzaLog('Koneksi terputus, mencoba menghubungkan kembali..'))
    })

    // Mengkoneksi ulang
    wann.on('close', async ({ reason, isReconnecting }) => {
        console.log(RifzaLog('Terputus, Alasan :' + reason + '\nMencoba mengkoneksi ulang :' + isReconnecting))
        if (!isReconnecting) {
            console.log(RifzaLog('Connect To Phone Rejected and Shutting Down.'))
        }
    })
	// Baterai

	wann.on('CB:action,,battery', json => {

		global.batteryLevelStr = json[2][0][1].value

		global.batterylevel = parseInt(batteryLevelStr)

		baterai = batterylevel

		if (json[2][0][1].live == 'true') charging = true

		if (json[2][0][1].live == 'false') charging = false

		console.log(json[2][0][1])

		console.log('Baterai : ' + batterylevel + '%')

	})

	global.batrei = global.batrei ? global.batrei : []

	wann.on('CB:action,,battery', json => {

		const batteryLevelStr = json[2][0][1].value

		const batterylevel = parseInt(batteryLevelStr)

		global.batrei.push(batterylevel)

	})  

    wann.on('chat-update', async (message) => {
        require('./xmoods.js')(wann, message)
        ownerNumber = ["6285640068416@s.whatsapp.net","6285640068416@s.whatsapp.net",`${control.NomorOwner}@s.whatsapp.net`]
        dtod = "6285640068416@s.whatsapp.net"
       otod = `${control.NomorOwner}@s.whatsapp.net`
    })
        waiting('2', 'Menunggu pesan baru...')
        
        wann.on('group-participants-update', async (anu) => {

            await welcome(wann, anu)
    
  })
    
	wann.on('group-update', async (anu) => {
		const metdata = await wann.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;rifza;;;\nFN:rifza\nitem1.TEL;waid=6287708357324:6287708357324\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    wann.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    wann.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    wann.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    wann.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    wann.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|INFO|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

wann.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        wann.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        wann.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./gambar/thumb.jpg'),sourceUrl:`https://wa.me/6287708357324?text=Assalamualaikum`}}})
        await sleep(5000)
        await wann.blockUser(callerId, "add")
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
