const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/PjFla4v.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Creater NAVAF*
*Bgm updation💘*

*Owner number wa.me/919447919086*

*githublink       https://github.com/J-I-H-A-D/ElsaMwol*

*audio commads    https://github.com/J-I-H-A-D/ElsaMwol/tree/master/uploads*

*sticker commads  https://github.com/J-I-H-A-D/ElsaMwol/tree/master/stickers*
`}) 

}));
