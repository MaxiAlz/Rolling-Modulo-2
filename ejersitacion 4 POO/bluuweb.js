//creando un objeto de forma literal
const web={
    nombre: `amazon`,
    links:{
        enlaces:`www.amazon.com`
    },
    redesSociales:{
        youtube:{
            enlace:`www.youtube/amazon`,
            nombre:`amazon youtube`
        },
        facebook:{
            enlace: `www.facebook/amazon`,
            nombre:`amazon facebook`
        }
    }
        
}

console.log(web.redesSociales.youtube.enlace);