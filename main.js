process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
process.on('uncaughtException', console.error)
const { default: makeWALegacySocket, DisconnectReason, makeInMemoryStore, useMultiFileAuthState, downloadContentFromMessage, generateForwardMessageContent, generateWAMessageFromContent, jidDecode, fetchLatestBaileysVersion, MessageRetryMap, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC } = (await import('baileys-wa')).default
const { version } = await fetchLatestBaileysVersion();
import fs from "fs"
import path from 'path'
import chalk from 'chalk';
import fetch from 'node-fetch'
import Pino from 'pino';
import './lib/ObjectPath.js'
import './lib/FuncTerm.js'
import './lib/FuncListen.js'
import { smsg, fetchJson, getBuffer } from "./lib/func_Server.js"
import { nocache, uncache } from './lib/Chache_Data.js'
import readline from "readline"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
import { parsePhoneNumber} from "libphonenumber-js"
import { auto_BlockCaller } from './lib/Data_Server_Bot/Call_AutoBlock.js'
let setting = JSON.parse(fs.readFileSync('./config.json'));
import { imageToWebp, videoToWebp, writeExifImg, writeExifVid } from './lib/Exif_Write.js'
import {  fileTypeFromBuffer } from 'file-type'
import { handler } from './handler.js'
import { updateGroup } from "./lib/update_Group.js"
function _0x5689(){const _0x5471df=['question','11hrScAs','1794095RcYErQ','ram','reset','75HNovPJ','CspFH','pairing','memoryUsag','java','nCHGJ','sqVzn','24xEaRJC','316323JxztpV','2397958iMxGpy','1933695ZqdhXQ','1016575gCCGcb','send','144092AeCPHc','rss','jnirZ','27786890tcWDhs','30YTmmUR','divGG','ZGXiw'];_0x5689=function(){return _0x5471df;};return _0x5689();}const _0x4cf9e8=_0x4365;(function(_0x6b737b,_0x547516){const _0x280892=_0x4365,_0x46a665=_0x6b737b();while(!![]){try{const _0x4f2095=parseInt(_0x280892(0x1f4))/(-0x1e26+-0x123f+0x6*0x811)+parseInt(_0x280892(0x1f2))/(-0x55e*-0x3+-0x35*-0xb6+-0x35c6)+-parseInt(_0x280892(0x1e9))/(-0x1c7d+0x61*-0x66+0x1*0x4326)*(parseInt(_0x280892(0x1dd))/(-0x142e+0x749+0xce9))+-parseInt(_0x280892(0x1e6))/(0x47*-0x17+0x4*0x4ef+-0xd56)*(-parseInt(_0x280892(0x1e1))/(0x739+0x954+-0x1*0x1087))+-parseInt(_0x280892(0x1f1))/(-0x1e7d+0x21de+-0x35a)+-parseInt(_0x280892(0x1f0))/(-0x1412*0x1+0x1*0xe45+0x5d5*0x1)*(-parseInt(_0x280892(0x1f3))/(-0x1*-0xb77+0x263+-0xdd1))+-parseInt(_0x280892(0x1e0))/(0x3c3*0x7+-0x1691+-0x3ba)*(parseInt(_0x280892(0x1e5))/(0x1d9*-0x1+0x156a+-0x1386));if(_0x4f2095===_0x547516)break;else _0x46a665['push'](_0x46a665['shift']());}catch(_0x58a87d){_0x46a665['push'](_0x46a665['shift']());}}}(_0x5689,-0x1c4bc8+-0xd57*-0xe9+0x1e577a));var ramCheck=setInterval(()=>{const _0x54d589=_0x4365,_0x3aba95={'nCHGJ':function(_0x3aa6d2,_0x2253f3){return _0x3aa6d2/_0x2253f3;},'divGG':function(_0x3590b5,_0x2d14fc){return _0x3590b5*_0x2d14fc;},'ZGXiw':function(_0x3d829e,_0x43b5e0){return _0x3d829e>=_0x43b5e0;},'jnirZ':function(_0x15d5a2,_0x51cd28){return _0x15d5a2(_0x51cd28);},'CspFH':_0x54d589(0x1e8)};var _0x356591=_0x3aba95[_0x54d589(0x1ee)](process[_0x54d589(0x1ec)+'e']()[_0x54d589(0x1de)],_0x3aba95[_0x54d589(0x1e2)](-0x1*-0x24a4+-0x25b6+-0x3b*-0x16,0x2*-0x35b+-0x495*-0x1+0x621*0x1));_0x3aba95[_0x54d589(0x1e3)](_0x356591,setting[_0x54d589(0x1e7)])&&(_0x3aba95[_0x54d589(0x1df)](clearInterval,ramCheck),process[_0x54d589(0x1f5)](_0x3aba95[_0x54d589(0x1ea)]));},0x3*-0x7ca+0x1010+0x1ad6),interval=(-0x4*-0x60c+0x1*-0x1709+-0xeb)*(0x52*0x23+-0x1d35+-0x1*-0x123b)*(0x44*0x4d+-0xfbb+-0xd1);setInterval(()=>{const _0xd07dfc=_0x4365,_0x17f2f3={'sqVzn':_0xd07dfc(0x1e8)};process[_0xd07dfc(0x1f5)](_0x17f2f3[_0xd07dfc(0x1ef)]);},interval);import _0x2cbc3f from'node-cache';const pairingCode=setting[_0x4cf9e8(0x1eb)],useQr=setting['qr'],question=_0x4b5bf8=>new Promise(_0x37e6b7=>rl[_0x4cf9e8(0x1e4)](_0x4b5bf8,_0x37e6b7));function _0x4365(_0x4273b4,_0x3dbb19){const _0x548a60=_0x5689();return _0x4365=function(_0x4762c5,_0x183b88){_0x4762c5=_0x4762c5-(0x6*0x1d3+-0x636+-0xf5*0x3);let _0xb758a6=_0x548a60[_0x4762c5];return _0xb758a6;},_0x4365(_0x4273b4,_0x3dbb19);}global[_0x4cf9e8(0x1ed)]='⭔';const msgRetryCounterCache=new _0x2cbc3f(),msgRetryCounterMap=_0x36a504=>{};
const connectToWhatsApp = async () => {
    try {
        const _0x24096e=_0x123d;(function(_0x5d741f,_0x25ed1c){const _0x46503f=_0x123d,_0x4802df=_0x5d741f();while(!![]){try{const _0x59cc1c=parseInt(_0x46503f(0x1c5))/(0x1dc2+0x1217+0x2fd8*-0x1)+parseInt(_0x46503f(0x1b3))/(-0x26d0+-0x1*-0x20f3+0x5df)+-parseInt(_0x46503f(0x1fb))/(-0xe63+-0xf78+0x1dde)+parseInt(_0x46503f(0x1d7))/(0x33b*-0xa+0x1ca9*0x1+0x3a9*0x1)+parseInt(_0x46503f(0x1a5))/(-0xd7d+0x1*0x2022+-0x12a0)+-parseInt(_0x46503f(0x1bb))/(-0xd86+-0x1*-0x2433+-0x16a7)+-parseInt(_0x46503f(0x1df))/(0xe3f+-0x23*0xb+-0xcb7);if(_0x59cc1c===_0x25ed1c)break;else _0x4802df['push'](_0x4802df['shift']());}catch(_0x5a9433){_0x4802df['push'](_0x4802df['shift']());}}}(_0x46af,0x4a30f*0x1+0x56*-0x47fb+0x20908f));const authState=await useMultiFileAuthState(_0x24096e(0x1a0)),store=await makeInMemoryStore({'logger':Pino()[_0x24096e(0x1ee)]({'level':_0x24096e(0x1a4),'stream':_0x24096e(0x1ba)})}),connectionOptions={...useQr&&{'printQRInTerminal':!![]},...pairingCode&&{'printQRInTerminal':!pairingCode},'msgRetryCounterMap':msgRetryCounterMap,'logger':Pino({'level':_0x24096e(0x1a4)}),'auth':{'creds':authState[_0x24096e(0x1e9)][_0x24096e(0x1c9)],'keys':makeCacheableSignalKeyStore(authState[_0x24096e(0x1e9)][_0x24096e(0x1aa)],Pino()[_0x24096e(0x1ee)]({'level':_0x24096e(0x1a4),'stream':_0x24096e(0x1ba)}))},'browser':[_0x24096e(0x1a3)+_0x24096e(0x1e5),'',''],'version':version,'getMessage':async _0x6f3e3a=>{const _0x3b145b=_0x24096e,_0x4206dd={'lmPxZ':function(_0x7b0aa6,_0x3ba586){return _0x7b0aa6(_0x3ba586);}};let _0xe18c6c=_0x4206dd[_0x3b145b(0x1bc)](jidNormalizedUser,_0x6f3e3a[_0x3b145b(0x1fc)]),_0x2583d1=await store[_0x3b145b(0x1e4)+'e'](_0xe18c6c,_0x6f3e3a['id']);return _0x2583d1?.[_0x3b145b(0x193)]||'';},'msgRetryCounterCache':msgRetryCounterCache,'emitOwnEvents':!![],'fireInitQueries':!![]};global[_0x24096e(0x1fd)]=await makeWALegacySocket(connectionOptions),store[_0x24096e(0x1a7)](conn['ev']);if(pairingCode&&!conn[_0x24096e(0x1fa)][_0x24096e(0x1c9)][_0x24096e(0x194)]){console[_0x24096e(0x1e3)](chalk[_0x24096e(0x199)](_0x24096e(0x1af)+_0x24096e(0x1af)+'•')),console[_0x24096e(0x1e3)](chalk[_0x24096e(0x1f2)+'ht'](_0x24096e(0x1c2)+_0x24096e(0x1f8)+_0x24096e(0x1ae)+_0x24096e(0x19a)+_0x24096e(0x1a6)+_0x24096e(0x1d1)+_0x24096e(0x1f1)+_0x24096e(0x1f9)+_0x24096e(0x1d5)+_0x24096e(0x1b0)+_0x24096e(0x1b9)+_0x24096e(0x1b7)+_0x24096e(0x1a9)+_0x24096e(0x1ec)+_0x24096e(0x1dc)+_0x24096e(0x1f6)+_0x24096e(0x1c4)+_0x24096e(0x1de)+_0x24096e(0x1e6)+_0x24096e(0x202)+_0x24096e(0x1b4)+_0x24096e(0x1ad)+_0x24096e(0x19d)+_0x24096e(0x197)+_0x24096e(0x1b6)+_0x24096e(0x1cd)+_0x24096e(0x1cc))+':'),console[_0x24096e(0x1e3)](chalk[_0x24096e(0x199)](_0x24096e(0x1af)+_0x24096e(0x1af)+'•'));let phoneNumber=await question(_0x24096e(0x1d6)+chalk[_0x24096e(0x199)](_0x24096e(0x1c3))+':\x20');console[_0x24096e(0x1e3)](chalk[_0x24096e(0x199)](_0x24096e(0x1d9)+_0x24096e(0x1c0)+_0x24096e(0x1c0)+_0x24096e(0x1be)+'··')),phoneNumber=phoneNumber[_0x24096e(0x1e8)](/[^0-9]/g,'');if(!Object[_0x24096e(0x1aa)](PHONENUMBER_MCC)[_0x24096e(0x201)](_0x16d85e=>phoneNumber[_0x24096e(0x1ef)](_0x16d85e))){const taQjUG=(_0x24096e(0x1b1)+_0x24096e(0x1c7))[_0x24096e(0x1a8)]('|');let HKTIDC=0x810+-0x4db*-0x2+-0x11c6;while(!![]){switch(taQjUG[HKTIDC++]){case'0':phoneNumber=await question(_0x24096e(0x1d6)+chalk[_0x24096e(0x199)](_0x24096e(0x1c3))+':\x20');continue;case'1':console[_0x24096e(0x1e3)](chalk[_0x24096e(0x199)](_0x24096e(0x1d9)+_0x24096e(0x1c0)+_0x24096e(0x1c0)+_0x24096e(0x1c0)+_0x24096e(0x1c0)+_0x24096e(0x1ce)));continue;case'2':console[_0x24096e(0x1e3)](chalk[_0x24096e(0x199)](_0x24096e(0x1af)+_0x24096e(0x1af)+'•'));continue;case'3':console[_0x24096e(0x1e3)](chalk[_0x24096e(0x199)](_0x24096e(0x1d9)+_0x24096e(0x1c0)+_0x24096e(0x1c0)+_0x24096e(0x1be)+'··'));continue;case'4':console[_0x24096e(0x1e3)](chalk[_0x24096e(0x199)](_0x24096e(0x1af)+_0x24096e(0x1af)+_0x24096e(0x1da)));continue;case'5':console[_0x24096e(0x1e3)](chalk[_0x24096e(0x199)](_0x24096e(0x1af)+_0x24096e(0x1af)+_0x24096e(0x1a2)+_0x24096e(0x1f0)));continue;case'6':phoneNumber=phoneNumber[_0x24096e(0x1e8)](/[^0-9]/g,'');continue;case'7':console[_0x24096e(0x1e3)](_0x24096e(0x1d2)+chalk[_0x24096e(0x1d8)](_0x24096e(0x1dd)+_0x24096e(0x1e0)+_0x24096e(0x1c6)+'er')+':');continue;case'8':console[_0x24096e(0x1e3)](_0x24096e(0x1f3)+chalk[_0x24096e(0x1d8)](_0x24096e(0x1ed)+_0x24096e(0x195)+_0x24096e(0x1d0)+_0x24096e(0x198)+_0x24096e(0x1db)+_0x24096e(0x1f5))+':');continue;}break;}}let code=await conn[_0x24096e(0x1b8)+_0x24096e(0x1b5)](phoneNumber);code=code?.[_0x24096e(0x1eb)](/.{1,4}/g)?.[_0x24096e(0x1ab)]('-')||code,console[_0x24096e(0x1e3)](chalk[_0x24096e(0x199)](_0x24096e(0x1af)+_0x24096e(0x1af))),console[_0x24096e(0x1e3)](_0x24096e(0x196)+chalk[_0x24096e(0x1f2)+'ht'](_0x24096e(0x1ac)+_0x24096e(0x1a1))+':'),console[_0x24096e(0x1e3)](chalk[_0x24096e(0x199)](_0x24096e(0x19b))),console[_0x24096e(0x1e3)](_0x24096e(0x1d6)+chalk[_0x24096e(0x199)](_0x24096e(0x1ca))+':\x20'+code),console[_0x24096e(0x1e3)](chalk[_0x24096e(0x199)](_0x24096e(0x1af)+_0x24096e(0x1af))),rl[_0x24096e(0x19c)]();}function _0x123d(_0x4ace5e,_0x35acf4){const _0x3c0829=_0x46af();return _0x123d=function(_0x20600e,_0x5acb33){_0x20600e=_0x20600e-(-0xe5*0x1d+0x20ed+0x16*-0x3f);let _0x33fda2=_0x3c0829[_0x20600e];return _0x33fda2;},_0x123d(_0x4ace5e,_0x35acf4);}function _0x46af(){const _0x56c1fb=['whatsapp\x20y','1222253rokViu','tsApp\x20numb','2|0|3|6','Epozm','creds','-\x20Code','key','t\x20!','engan\x20cepa','···','ephemeralM','try\x27s\x20What','will\x20use\x20b','📨\x20','CB:call','lnmiw','\x20212xxxx\x0a\x0aT','\x20\x20\x20','946000eLxIZY','blueBright','╰─────────','•──···','\x20Example\x206','IAN\x20:\x0aMasu','Please\x20typ','ang\x20ingin\x20','16766197BoMeJB','e\x20your\x20Wha','ggVMj','status@bro','log','loadMessag','inux)','di\x20jadikan','VaOZz','replace','state','2|1|4|0|3|','match','\x0a\x0a\x0aINDONES','Start\x20with','child','startsWith','────···','ecome\x20bot\x20','yellowBrig','💬\x20','psert','2xxx','kan\x20nomor\x20','HbyGS','\x0a\x0aENGLISH:','start\x20with','authState','2462781IqDHHF','remoteJid','conn','adcast','essage','gJXCU','some','\x20bot\x20di\x20aw','reply','message','registered','\x20your\x20coun','\x20💻\x20','s\x2060\x20detik','sApp\x20code,','cyan','put\x20WhatsA','~~~~~~~~~~','close','Waktu\x20Habi','readMessag','jUWkV','./sessions','ng\x20Code','•─────────','Firefox\x20(L','silent','5866200MgwynX','pp\x20number\x20','bind','split','(MEMASANG)','keys','join','Your\x20Pairi','\x2062xxxx\x20\x0a\x0a','\x0aPlease\x20in','••••••••••','imeout\x2060\x20','5|8|1|4|7|','jzdQd','2996972esIZjG','ali\x20dengan','ringCode','\x20lakukan\x20d','\x20fast!\x20\x0a\x0a\x0a','requestPai','seconds\x20do','store','366342tiVoVK','lmPxZ','sendMessag','─────────·','messages.u','──────────','messages','(PAIRING)\x0a','-\x20Number'];_0x46af=function(){return _0x56c1fb;};return _0x46af();}conn['ev']['on'](_0x24096e(0x1bf)+_0x24096e(0x1f4),async _0x3345b1=>{const _0x1d9556=_0x24096e,_0x2fef72={'HbyGS':_0x1d9556(0x1ea)+'5','Epozm':function(_0x250461,_0x44d464,_0x22d441,_0x53be5c){return _0x250461(_0x44d464,_0x22d441,_0x53be5c);},'VaOZz':function(_0x2a3fa5,_0x57858a){return _0x2a3fa5==_0x57858a;},'ggVMj':_0x1d9556(0x1e2)+_0x1d9556(0x1fe),'gJXCU':function(_0x230281,_0x349b22){return _0x230281===_0x349b22;},'lnmiw':_0x1d9556(0x1cf)+_0x1d9556(0x1ff),'jUWkV':function(_0x920cf1,_0x1963ce,_0x5048af,_0x1f1e31,_0x294c87){return _0x920cf1(_0x1963ce,_0x5048af,_0x1f1e31,_0x294c87);}};try{const _0x4bb45b=_0x2fef72[_0x1d9556(0x1f7)][_0x1d9556(0x1a8)]('|');let _0x559785=0x2*-0xa97+-0x572*0x2+0x335*0xa;while(!![]){switch(_0x4bb45b[_0x559785++]){case'0':var _0x12e167=await _0x2fef72[_0x1d9556(0x1c8)](smsg,conn,_0xaf18a0,store);continue;case'1':if(!_0xaf18a0[_0x1d9556(0x193)])return;continue;case'2':var _0xaf18a0=_0x3345b1[_0x1d9556(0x1c1)][-0x4c1*0x5+-0x3b3*-0xa+-0xd39];continue;case'3':if(_0x2fef72[_0x1d9556(0x1e7)](_0xaf18a0[_0x1d9556(0x1cb)][_0x1d9556(0x1fc)],_0x2fef72[_0x1d9556(0x1e1)]))return conn[_0x1d9556(0x19e)+'es']([_0x12e167[_0x1d9556(0x1cb)]]);continue;case'4':_0xaf18a0[_0x1d9556(0x193)]=_0x2fef72[_0x1d9556(0x200)](Object[_0x1d9556(0x1aa)](_0xaf18a0[_0x1d9556(0x193)])[0x11a0+-0x2b*0x5c+-0x22c],_0x2fef72[_0x1d9556(0x1d4)])?_0xaf18a0[_0x1d9556(0x193)][_0x1d9556(0x1cf)+_0x1d9556(0x1ff)][_0x1d9556(0x193)]:_0xaf18a0[_0x1d9556(0x193)];continue;case'5':await _0x2fef72[_0x1d9556(0x19f)](handler,conn,_0x12e167,_0x3345b1,store);continue;}break;}}catch(_0x23125f){console[_0x1d9556(0x1e3)](_0x23125f);}}),conn[_0x24096e(0x192)]=(_0x47ef98,_0x2406e4,_0x467300)=>conn[_0x24096e(0x1bd)+'e'](_0x47ef98,{'text':_0x2406e4},{'quoted':_0x467300}),conn['ws']['on'](_0x24096e(0x1d3),async _0x357a08=>{const _0x169d22=_0x24096e,_0x130db8={'jzdQd':function(_0x35527b,_0x4e8f0c){return _0x35527b(_0x4e8f0c);}};_0x130db8[_0x169d22(0x1b2)](auto_BlockCaller,_0x357a08);});
        conn.ev.on('connection.update', async (update) => {
            const {
                connection,
                lastDisconnect
            } = update
            if (connection === 'close') {
                lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? connectToWhatsApp() : console.log('تم فقدان الاتصال...')
            }
            console.log('Online', update)
        })

        conn.credsUpdate = authState.saveCreds.bind(global.conn, true);
        conn.ev.on('creds.update', conn.credsUpdate);
        const _0x1b88a7=_0x2a96;function _0x2a96(_0x591fde,_0xca3ca3){const _0x2f6114=_0x4e83();return _0x2a96=function(_0x2bf865,_0x2f8148){_0x2bf865=_0x2bf865-(-0x1*-0x11d5+-0xfb2+0x7*-0x17);let _0x55a7ad=_0x2f6114[_0x2bf865];return _0x55a7ad;},_0x2a96(_0x591fde,_0xca3ca3);}function _0x4e83(){const _0x5af8ce=['split','./database','uXlQY','18812ZJnfTd','image','tang\x20@','xtbLi','catch','qqAXA','link','existsSync','participan','.json','uJlEn','readFileSy','groupMetad','528CZQeRe','tureUrl','sendMessag','XDCjr','!text_grup','group','4612OkcUhF','COVwW','Welcome','action','\x20di\x20Grup\x20','\x0aTelah\x20Kel','add','icipants.u','pdate','thumbnail','parse','1533480fndoGb','Selamat\x20Da','68955jbIlyj','Bye','PDF','931680cZJBGn','/group','EfCdA','XONbe','welcome','buffer','11GLHavW','ata','36967aMLAkV','uar\x20Dari\x20','remove','join','idXOA','footer','subject','profilePic','vOdCE','group-part','Bye\x20Beban\x20','Group\x0a@','find','OUCCF','bwmJr','872896UsCLZp','log','54vAYADp'];_0x4e83=function(){return _0x5af8ce;};return _0x4e83();}(function(_0x40c670,_0x86e0e2){const _0x437cbc=_0x2a96,_0x5070d7=_0x40c670();while(!![]){try{const _0xa505cc=parseInt(_0x437cbc(0x184))/(-0x17e2+-0x1ff6+0x37d9)*(parseInt(_0x437cbc(0x19b))/(0x1ed+0x1a5a+-0x1*0x1c45))+-parseInt(_0x437cbc(0x1a8))/(0x1e30+-0x21d1+-0x2*-0x1d2)*(parseInt(_0x437cbc(0x1ae))/(-0x2*-0x48b+-0x403+0x5*-0x103))+parseInt(_0x437cbc(0x1bb))/(-0x13b3+-0x1*0xd7c+0x2134)+parseInt(_0x437cbc(0x197))/(0x1ac6+0x1*0x2654+-0x4114)*(parseInt(_0x437cbc(0x186))/(-0x3*-0x6c4+0x9fd+-0xf21*0x2))+parseInt(_0x437cbc(0x195))/(-0xb62+-0x20*-0x25+0x6ca)+-parseInt(_0x437cbc(0x1be))/(-0x2499+-0x863*-0x2+0x13dc)+parseInt(_0x437cbc(0x1b9))/(-0x1aa2+0x693+0x1419);if(_0xa505cc===_0x86e0e2)break;else _0x5070d7['push'](_0x5070d7['shift']());}catch(_0x20fc4b){_0x5070d7['push'](_0x5070d7['shift']());}}}(_0x4e83,-0x395a7+0x151*-0x1b1+0x7a786),conn['ev']['on'](_0x1b88a7(0x18f)+_0x1b88a7(0x1b5)+_0x1b88a7(0x1b6),async _0x1c66bb=>{const _0x2276bc=_0x1b88a7,_0x5ef59c={'bwmJr':_0x2276bc(0x199)+_0x2276bc(0x1bf),'COVwW':function(_0x224719){return _0x224719();},'qqAXA':_0x2276bc(0x19c),'EfCdA':function(_0x20439d,_0x31a1e6){return _0x20439d==_0x31a1e6;},'idXOA':_0x2276bc(0x188),'OUCCF':_0x2276bc(0x1ac),'vOdCE':_0x2276bc(0x1bc),'XDCjr':_0x2276bc(0x1bd),'uJlEn':function(_0x3c042a,_0x280261){return _0x3c042a(_0x280261);},'uXlQY':_0x2276bc(0x1b4),'xtbLi':_0x2276bc(0x1b0),'XONbe':function(_0x3f0d75,_0x580046){return _0x3f0d75(_0x580046);}},_0x145b43=_0x5ef59c[_0x2276bc(0x194)],_0x41b7ee=path[_0x2276bc(0x189)](_0x145b43,_0x1c66bb['id']+_0x2276bc(0x1a4));function _0x356dae(){const _0x559f02=_0x2276bc;return fs[_0x559f02(0x1a2)](_0x41b7ee)?JSON[_0x559f02(0x1b8)](fs[_0x559f02(0x1a6)+'nc'](_0x41b7ee)):null;}const _0x439ae6=_0x5ef59c[_0x2276bc(0x1af)](_0x356dae),_0x3ba132=_0x439ae6[_0x2276bc(0x192)](_0x265246=>_0x265246['id']===_0x1c66bb['id']);if(!_0x3ba132)return;if(!_0x3ba132[_0x2276bc(0x182)])return;const _0x34feec=setting[_0x2276bc(0x1b7)],_0x143a87=setting[_0x2276bc(0x18b)],_0x5e51d6=setting[_0x2276bc(0x1ad)][_0x2276bc(0x1a1)];try{const _0x511c3c=await conn[_0x2276bc(0x1a7)+_0x2276bc(0x185)](_0x1c66bb['id']);let _0xd8131e;for(let _0x2fbe95 of _0x1c66bb[_0x2276bc(0x1a3)+'ts']){try{let _0x3e9a16=await conn[_0x2276bc(0x1a7)+_0x2276bc(0x185)](_0x1c66bb['id']),_0x178c44=_0x1c66bb[_0x2276bc(0x1a3)+'ts'];for(let _0x3cd227 of _0x178c44){_0xd8131e=await conn[_0x2276bc(0x18d)+_0x2276bc(0x1a9)](_0x3cd227,_0x5ef59c[_0x2276bc(0x1a0)])[_0x2276bc(0x19f)](_0x3e871d=>_0x34feec);if(_0x5ef59c[_0x2276bc(0x1c0)](_0x1c66bb[_0x2276bc(0x1b1)],_0x5ef59c[_0x2276bc(0x18a)])){var _0xe8c869=[{'buttonId':_0x5ef59c[_0x2276bc(0x193)],'buttonText':{'displayText':_0x5ef59c[_0x2276bc(0x18e)]},'type':0x1}];await conn[_0x2276bc(0x1aa)+'e'](_0x1c66bb['id'],{'text':_0x2276bc(0x190)+_0x2276bc(0x191)+_0x3cd227[_0x2276bc(0x198)]('@')[0x11b1+-0x195a+0x7a9*0x1]+(_0x2276bc(0x1b3)+_0x2276bc(0x187))+_0x3e9a16[_0x2276bc(0x18c)],'contextInfo':{'forwardingScore':0x499602d2,'isForwarded':!![],'mentionedJid':[_0x3cd227],'externalAdReply':{'body':_0x5e51d6,'containsAutoReply':![],'mediaType':0x1,'mediaUrl':_0x5e51d6,'renderLargerThumbnail':!![],'showAdAttribution':!![],'sourceId':_0x5e51d6,'sourceType':_0x5ef59c[_0x2276bc(0x1ab)],'previewType':_0x5ef59c[_0x2276bc(0x1ab)],'sourceUrl':_0x5e51d6,'thumbnail':await(await _0x5ef59c[_0x2276bc(0x1a5)](fetch,_0xd8131e))[_0x2276bc(0x183)](),'thumbnailUrl':await(await _0x5ef59c[_0x2276bc(0x1a5)](fetch,_0xd8131e))[_0x2276bc(0x183)](),'title':_0x143a87}}});}else{if(_0x5ef59c[_0x2276bc(0x1c0)](_0x1c66bb[_0x2276bc(0x1b1)],_0x5ef59c[_0x2276bc(0x19a)])){var _0xe8c869=[{'buttonId':_0x5ef59c[_0x2276bc(0x193)],'buttonText':{'displayText':_0x5ef59c[_0x2276bc(0x19e)]},'type':0x1}];await conn[_0x2276bc(0x1aa)+'e'](_0x1c66bb['id'],{'text':_0x2276bc(0x1ba)+_0x2276bc(0x19d)+_0x3cd227[_0x2276bc(0x198)]('@')[-0x65c+0x1fcf+-0x517*0x5]+_0x2276bc(0x1b2)+_0x3e9a16[_0x2276bc(0x18c)],'contextInfo':{'forwardingScore':0x499602d2,'isForwarded':!![],'mentionedJid':[_0x3cd227],'externalAdReply':{'body':_0x5e51d6,'containsAutoReply':![],'mediaType':0x1,'mediaUrl':_0x5e51d6,'renderLargerThumbnail':!![],'showAdAttribution':!![],'sourceId':_0x5e51d6,'sourceType':_0x5ef59c[_0x2276bc(0x1ab)],'previewType':_0x5ef59c[_0x2276bc(0x1ab)],'sourceUrl':_0x5e51d6,'thumbnail':await(await _0x5ef59c[_0x2276bc(0x1c1)](fetch,_0xd8131e))[_0x2276bc(0x183)](),'thumbnailUrl':await(await _0x5ef59c[_0x2276bc(0x1c1)](fetch,_0xd8131e))[_0x2276bc(0x183)](),'title':_0x143a87}}});}}}}catch(_0x3fa7f8){console[_0x2276bc(0x196)](_0x3fa7f8);}}}catch(_0x2f4434){console[_0x2276bc(0x196)](_0x2f4434);}}));
        conn.ev.on('group-update', async (anu) => {
            updateGroup(conn, anu, MessageType)
        })

        conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
            let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            return await conn.sendMessage(jid, {
                image: buffer,
                caption: caption,
                ...options
            }, {
                quoted
            })
        }
        
        conn.decodeJid = (jid) => {
            if (!jid) return jid
            if (/:\d+@/gi.test(jid)) {
                let decode = jidDecode(jid) || {}
                return decode.user && decode.server && decode.user + '@' + decode.server || jid
            } else return jid
        }

        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
        };

        const _0x3507f1=_0x38a6;(function(_0x102a2a,_0x95afd4){const _0x873419=_0x38a6,_0x189e36=_0x102a2a();while(!![]){try{const _0x13af26=parseInt(_0x873419(0x1b6))/(0x24e5+-0x11f0+-0x4*0x4bd)*(-parseInt(_0x873419(0x1c3))/(0x9*0x19+-0x26bb+0x977*0x4))+-parseInt(_0x873419(0x1d9))/(0x121c+0x200e+-0x15b*0x25)+-parseInt(_0x873419(0x1c5))/(-0x2*-0x8bf+-0x17f6+0x67c)+parseInt(_0x873419(0x19e))/(0x1*0x1e2b+-0x9f7+0x142f*-0x1)+parseInt(_0x873419(0x1c2))/(0x748*0x5+-0x18dc+-0xb86)*(parseInt(_0x873419(0x194))/(0x13e9+-0x1b64+-0x3e*-0x1f))+parseInt(_0x873419(0x1d6))/(-0x24e4*-0x1+-0x79*-0x32+-0x3a*0x10b)*(parseInt(_0x873419(0x1a8))/(0x5*-0xd5+-0x1006+0x1438))+parseInt(_0x873419(0x1ce))/(0x213*0x1+0x2161+0x3*-0xbce);if(_0x13af26===_0x95afd4)break;else _0x189e36['push'](_0x189e36['shift']());}catch(_0x15e83d){_0x189e36['push'](_0x189e36['shift']());}}}(_0x1b55,-0x1248d*0x3+-0x189e*0x10+0x6e4bf));const getFile=async _0x501133=>{const _0x144b8e=_0x38a6,_0x50aa50={'YvOCs':function(_0x51d7e8,_0xeb94c0){return _0x51d7e8(_0xeb94c0);},'PCqSB':_0x144b8e(0x1bc)+_0x144b8e(0x1ca)+'er','fctHm':_0x144b8e(0x193)+_0x144b8e(0x198)+_0x144b8e(0x1cf),'UnfLi':_0x144b8e(0x1d5)};let _0x170abd=Buffer[_0x144b8e(0x1b5)](_0x501133)?_0x501133:_0x50aa50[_0x144b8e(0x18f)](isUrl,_0x501133)?await(await _0x50aa50[_0x144b8e(0x18f)](fetch,_0x501133))[_0x144b8e(0x197)]():fs[_0x144b8e(0x18a)](_0x501133)?fs[_0x144b8e(0x192)+'nc'](_0x501133):/^data:.*?\/.*?;base64,/i[_0x144b8e(0x19f)](_0x501133)?Buffer[_0x144b8e(0x1af)](_0x501133[_0x144b8e(0x1a7)](',')[-0x15e7+-0x2b*-0x4+0x4*0x54f]):null;if(!_0x170abd)return new Error(_0x50aa50[_0x144b8e(0x1a2)]);let _0x17c9f3=await _0x50aa50[_0x144b8e(0x18f)](fileTypeFromBuffer,_0x170abd)||{'mime':_0x50aa50[_0x144b8e(0x1b2)],'ext':_0x50aa50[_0x144b8e(0x1a1)]};return{'data':_0x170abd,..._0x17c9f3};};function _0x38a6(_0x1eadf9,_0xaf517){const _0x1181a2=_0x1b55();return _0x38a6=function(_0x54937c,_0x3c08ef){_0x54937c=_0x54937c-(0xa64+0x5ba*0x1+-0xe94);let _0x21f460=_0x1181a2[_0x54937c];return _0x21f460;},_0x38a6(_0x1eadf9,_0xaf517);}conn[_0x3507f1(0x1d2)]=(_0x32caf5,_0x4e7861,_0x477a86='',_0x532408)=>conn[_0x3507f1(0x1d7)+'e'](_0x32caf5,{'text':_0x4e7861,..._0x532408},{'quoted':_0x477a86}),conn[_0x3507f1(0x18d)]=async(_0x22a31c,_0xc36a3a,_0x5f3542={})=>{const _0x1871d3=_0x3507f1,_0xee69d9={'TVsEQ':function(_0x29ba4f,_0x17d4d8){return _0x29ba4f(_0x17d4d8);},'kWtPR':function(_0xb19546,_0x37cfc2){return _0xb19546==_0x37cfc2;},'kwIMa':_0x1871d3(0x1bb),'Tajjp':_0x1871d3(0x1b1),'LSClp':_0x1871d3(0x195),'ciAXp':_0x1871d3(0x1be),'IamWG':function(_0x24e3ef,_0x510399){return _0x24e3ef==_0x510399;},'CaQgZ':_0x1871d3(0x1a9),'mDkBZ':function(_0x20542d,_0x1d1455){return _0x20542d==_0x1d1455;},'yJuHh':_0x1871d3(0x1a0),'jvgMz':_0x1871d3(0x1b3),'VeLzf':function(_0x4a29dd,_0x2ba75f){return _0x4a29dd==_0x2ba75f;},'IbIXu':_0x1871d3(0x1d4),'VafRK':_0x1871d3(0x1c7),'hkTjm':_0x1871d3(0x1b0),'SAAEG':_0x1871d3(0x19b),'WXvQw':_0x1871d3(0x1ac)};let _0x3f3500=await _0xee69d9[_0x1871d3(0x1ab)](getFile,_0xc36a3a),_0xf4ca22=_0x3f3500[_0x1871d3(0x1c1)],_0xfe9e98;if(_0xee69d9[_0x1871d3(0x196)](_0xf4ca22,_0xee69d9[_0x1871d3(0x190)]))_0xfe9e98=_0xee69d9[_0x1871d3(0x1a5)],_0x5f3542[_0x1871d3(0x1ae)]=_0xee69d9[_0x1871d3(0x1a3)],_0x5f3542[_0x1871d3(0x1d3)]=_0x5f3542[_0x1871d3(0x1d3)]||![];else{if(_0xee69d9[_0x1871d3(0x196)](_0xf4ca22,_0xee69d9[_0x1871d3(0x19a)])||_0xee69d9[_0x1871d3(0x1d0)](_0xf4ca22,_0xee69d9[_0x1871d3(0x1cd)])||_0xee69d9[_0x1871d3(0x1b8)](_0xf4ca22,_0xee69d9[_0x1871d3(0x1d8)]))_0xfe9e98=_0xee69d9[_0x1871d3(0x18e)];else{if(_0xee69d9[_0x1871d3(0x1c8)](_0xf4ca22,_0xee69d9[_0x1871d3(0x1ad)]))_0xfe9e98=_0xee69d9[_0x1871d3(0x1b7)];else{if(_0xee69d9[_0x1871d3(0x1d0)](_0xf4ca22,_0xee69d9[_0x1871d3(0x1bd)]))_0xfe9e98=_0xee69d9[_0x1871d3(0x1a4)];else _0xfe9e98=_0xee69d9[_0x1871d3(0x1b4)];}}}return conn[_0x1871d3(0x1d7)+'e'](_0x22a31c,{[_0xfe9e98]:_0x3f3500[_0x1871d3(0x19d)],..._0x5f3542},{..._0x5f3542});},conn[_0x3507f1(0x18b)+_0x3507f1(0x1d1)+_0x3507f1(0x1ba)]=async(_0x33c856,_0x69f1b3,_0x342f1c=!![])=>{const _0x458f19=_0x3507f1,_0x11240f={'NgCFI':function(_0x364b36,_0xdb145f){return _0x364b36*_0xdb145f;},'lJwHJ':function(_0x2cee49,_0x492735,_0x4f5c6d){return _0x2cee49(_0x492735,_0x4f5c6d);},'xlJgZ':function(_0x864c6f,_0x3b430b){return _0x864c6f(_0x3b430b);},'OLVBJ':function(_0x12a210,_0x5dd997){return _0x12a210+_0x5dd997;},'yUKIY':function(_0x4f8b30,_0x36282d){return _0x4f8b30+_0x36282d;},'WhPFN':_0x458f19(0x1c0)};let _0x4e015c=_0x33c856[_0x458f19(0x1bf)]?_0x33c856[_0x458f19(0x1bf)]:_0x33c856,_0x18849f=(_0x33c856[_0x458f19(0x1bf)]||_0x33c856)[_0x458f19(0x1ae)]||'',_0x355c0a=_0x33c856[_0x458f19(0x1b9)]?_0x33c856[_0x458f19(0x1b9)][_0x458f19(0x1c4)](/Message/gi,''):_0x18849f[_0x458f19(0x1a7)]('/')[0x25*-0x40+0x49e+0x4a2];const _0x24bd56=await _0x11240f[_0x458f19(0x199)](downloadContentFromMessage,_0x4e015c,_0x355c0a);let _0x2e8ef6=Buffer[_0x458f19(0x1af)]([]);for await(const _0x41b180 of _0x24bd56){_0x2e8ef6=Buffer[_0x458f19(0x1aa)]([_0x2e8ef6,_0x41b180]);}function _0x5e5fec(_0x1e2cfc){const _0x1b41d3=_0x458f19;return''+Math[_0x1b41d3(0x1c6)](_0x11240f[_0x1b41d3(0x1cc)](Math[_0x1b41d3(0x1cb)](),0x12ee+-0x1282*0x2+0x10a*0x37))+_0x1e2cfc;}let _0x45ee23=await await _0x11240f[_0x458f19(0x18c)](fileTypeFromBuffer,_0x2e8ef6),_0x5246ba=_0x342f1c?_0x11240f[_0x458f19(0x19c)](_0x11240f[_0x458f19(0x1a6)](_0x69f1b3,'.'),_0x45ee23[_0x458f19(0x1c1)]):_0x69f1b3,_0x2f2c98=_0x11240f[_0x458f19(0x19c)](_0x11240f[_0x458f19(0x1da)],_0x11240f[_0x458f19(0x18c)](_0x5e5fec,_0x5246ba));return await fs[_0x458f19(0x1c9)+_0x458f19(0x191)](_0x2f2c98,_0x2e8ef6),_0x2f2c98;};function _0x1b55(){const _0x5ee10a=['CaQgZ','31750HNKwku','ream','IamWG','dSaveMedia','sendText','ptt','webp','.ts','1252520DHQIaT','sendMessag','yJuHh','238752uExVIM','WhPFN','existsSync','downloadAn','xlJgZ','sendFile','jvgMz','YvOCs','kwIMa','ync','readFileSy','applicatio','217nBvocK','audio/mpeg','kWtPR','buffer','n/octet-st','lJwHJ','ciAXp','video','OLVBJ','data','137280dcDWpY','test','png','UnfLi','PCqSB','LSClp','SAAEG','Tajjp','yUKIY','split','9DqiqyS','jpeg','concat','TVsEQ','document','IbIXu','mimetype','from','mp4','audio','fctHm','image','WXvQw','isBuffer','41761CXfuJg','VafRK','mDkBZ','mtype','Message','mp3','Result\x20is\x20','hkTjm','jpg','msg','./tmp/','ext','28854mUOLNc','6vFGGhN','replace','20576cbXULP','floor','sticker','VeLzf','writeFileS','not\x20a\x20buff','random','NgCFI'];_0x1b55=function(){return _0x5ee10a;};return _0x1b55();}

        conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
            let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            let buffer
            if (options && (options.packname || options.author)) {
                buffer = await writeExifImg(buff, options)
            } else {
                buffer = await imageToWebp(buff)
            }
            await conn.sendMessage(jid, {
                    sticker: {
                        url: buffer
                    },
                    ...options
                }, {
                    quoted
                })
                .then(response => {

                    return response
                })
        }

        conn.downloadMediaMessage = async (message) => {
            let mime = (message.msg || message).mimetype || ''
            let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }
            return buffer
        }

        conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
            let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            let buffer
            if (options && (options.packname || options.author)) {
                buffer = await writeExifVid(buff, options)
            } else {
                buffer = await videoToWebp(buff)
            }
            await conn.sendMessage(jid, {
                    sticker: {
                        url: buffer
                    },
                    ...options
                }, {
                    quoted
                })
                .then(response => {

                    return response
                })
        }
        return conn
    } catch (error) {
        console.error(error);
    }
}

connectToWhatsApp();