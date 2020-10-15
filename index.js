const Discord  = require('discord.js')
const fs = require('fs')
const { resolve } = require('path')
const client = new Discord.Client()
const nombreSimp = ['male','maleja','benitez','alejandra','maria alejandra']
const commands = [':help',':vergazos',':momos']
const groserias = ['mierda','puta','puto','pto','pta','gonorrea','nea','zorra','chimba','chimbo','huevon','guevon','idiota','imbecil','mk','maricon','pirobo','sapo','sapa']
const insultos = ['NO SEA GROSERO CATRE HPTA :middle_finger: ','COMASE SU MIERDA HUEVON NO SEA GROSERO :angry: ','GROSERO DE LA PUTA MIERDA :angry: ','HPTA GONORREA GROSERO :middle_finger: ','DEJE LA GRAN HPTA MARICADA :angry: ']
const malejaInsultos = ['CALLATE IMBECIL MALEJA NO TE QUIERE','SILENCIO RECHAZADO DE MALEJA','MALEJA NO TE QUIERO IMBECIL DE MIERDA']
const msgHelp = `
        
    HOLA CABRON 

    TODOS LOS PUTOS COMANDOS ENMPIEZAN POR ":"

    SI QUIERES VER MAS ESPECIFICAMENTE ESCRIBE

    Para memes ==> :momos-help

    Para vergasos ==> :vergazos-help    


`


client.on('ready', ()=>{
    console.log('BOT RUNNING')

})

client.on('message', message => {

    if(message.author.username === 'app'){

    }else{
        if(message.channel === 'commands-admins'){
            
        }
        if(message.content.startsWith(':')){
            const command = message.content
            if(command.includes(':help')){
                message.channel.send(msgHelp)
            }else if(command.includes(':momos')){
                if(command === ':momos-help'){
                    fs.readdir('./img',function(err,files){
                        if(err){
                            message.channel.send('',{files: ['./img/error.jpg']})
                        }else{
                            const msg = `
                                HOLA PT@
    
                                LOS MEMES DISPONIBLES SON
    
                                ${files}

                                PUEDES USARLOS ASI

                                EJEMPLO:

                                :momos-brutal
                            `
                            message.channel.send(msg)
                        }
                    })
                }
                const name = command.substring(command.indexOf('-')+1,)
                knowMeme(name).then(data => {
                    message.channel.send('',{files:[`./img/${data}`]})
                }).catch(e => {
                    message.channel.send('',{files:['./img/error.jpg']})
                })
            }else if(command.includes(':vergazos')){
                if(command === ':vergazos-help'){
                    const msg = `
                        HOLA HIJO/HIJA DE TU PUTA MADRE

                        PARA INSULTA A ALGUIEN DEBES HACERLO ASI:

                        :vergazos-@usuario-INSULTOOOO

                        EJEMPLO

                        :vergazos-@tumadre-PUTA
                    
                    `
                }else{
                    const arrayMensaje = command.split('-')
                    message.channel.send(`${arrayMensaje[2]} ${arrayMensaje[1]} Eso te manda a decir @${message.author.username}`)
                }
            }else{
                message.channel.send(msgHelp)
            }
        }else{
            if(knowSimp(message.author.username,message.content)){
                message.reply('MALEJA NO TE AMA PUTO CALLATE',{files:['./img/simp.png']})
            }else{
                if(Array.isArray(knowGrosero(message.content,message.author.username))){
                    const random = numeroAleatorio(0,2)
                    message.reply(malejaInsultos[random])
                }else if(knowGrosero(message.content,message.author.username)){
                    const random = numeroAleatorio(0,4)
                    message.reply(insultos[random])
                }else{

                }
            }
        }
    }
})

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function knowMeme(name){
    console.log(name)
    name = name.toLowerCase()
    return new Promise((resolve,reject) => {
        const main = []
        fs.readdir('./img', function(err,archivos){
            if(err){
                console.log(err)
                reject('err');
            }else{
                archivos.forEach(archivo => {

                    if(archivo.substring(0,archivo.lastIndexOf('.')) === name){
                        main.push(archivo)
                    }else{
    
                    }
                })
                if(main.length > 0){
                    resolve(main[0])
                }else{
                    resolve('404.png')
                }
            }
        })
    })
}

function knowSimp(author,msg){
    const message = msg.toLowerCase()
    const main = []
    if(author === 'nisera_erdc' || author === 'manupuentes02'){
        for (let i = 0; i < nombreSimp.length; i++) {
            if(message.includes(nombreSimp[i])){
                main.push(true)
                break
            }else{

            }
        }

        if(main.length > 0){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}

function knowGrosero(message,user){
    if(user === 'juanchosoft' || user === 'A Nameless User'){
        return false
    }else if(user === 'nisera_erdc' || user === 'manupuentes02'){
        const msg = message.toLowerCase()
        const main = []
        if(user !== 'app'){
            for (let i = 0; i < groserias.length; i++) {
                if(msg.includes(groserias[i])){
                    main.push(true)
                    break
                }else{
        
                }
            }
            if(main.length > 0){
                return main
            }else{
                return false
            }
        }else{

        }
    }else{

        const msg = message.toLowerCase()
        const main = []
        if(user !== 'app'){
            for (let i = 0; i < groserias.length; i++) {
                if(msg.includes(groserias[i])){
                    main.push(true)
                    break
                }else{
        
                }
            }
            if(main.length > 0){
                return true
            }else{
                return false
            }
        }else{
    
        }
    }
}
client.login('NzY1NDEyODU2MDA2NDQzMDA4.X4UcRQ.9LsFFTLaNcL14u2DcuSFJOVHVzc')