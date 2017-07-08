

//FUNCION RECOPILA LA DATA DEL API Y  DEVUELVE UNA STRUCTURA PARA IMAGENES
function imagen(data){
    const contenedor = $('<div class="news news__item"></div>');
    const image = $('<img clas="news__image" src="assets/img/news/'+data.img+'"/>');
    const video = $('<span class="news__item--playbutton"><img src="assets/img/play-button.png"></span>');
    const titulo = $('<div class="news__title news__title"><h6>'+data.title+'</h6></div>');
    if(data.isVideo == true){
        contenedor.append(video);
    }
    
    contenedor.append(image);
    contenedor.append(titulo);
    return contenedor;
}

const Header = () =>{
    const header = $('<header></header>');
    
    const main = $('<div class="main"></div>');
    
    const social = $('<div class="main__social"><div>');
    const iFac = $('<div class="main__social--fb"></div>');
    const iTw = $('<div class="main__social--tw"></div>');
    const iIn = $('<div class="main__social--in"></div>');
    
    const confi = $('<div class="main__confi"></div>');
    const iHmb = $('<div class="main__confi--hmb"></div><h5>SECTIONS</h5>');
    const iSer = $('<div class="main__confi--search"></div><h5>SEARCH</h5>');
    
    const logo = $('<div class="logo"><img src="assets/img/logoicon.png"/></div>');
    
    const nav = $('<nav></nav>');
    const ul = $('<ul></ul>');
    const li= $('<li><a>Lo último</a></li><li><a>Opinión</a></li><li><a>Cultura</a></li><li><a>Perú</a></li><li><a>Tecnología</a></li><li><a>Mundo</a></li><li><a>Mundo</a></li><li><a>Economía</a></li><li><a>LifeStyle</a></li><li><a>Deporte</a></li>');
    
    ul.append(li);
    nav.append(ul);
    
    confi.append(iHmb);
    confi.append(iSer);
    
    social.append(iFac);
    social.append(iFac);
    social.append(iFac);
    
    main.append(confi);
    main.append(social);
    
    header.append(main);
    header.append(nav);
    
    return header;
}

const Noticias = () =>{
    const noticia = $('<section class="row"></section>');
    const contenedor = $('<div class="col s12"></div>');
    const div = $('<div class="news__item"></div>');   
    $.getJSON("/api/news/1",(data)=>{
         const image = $('<img class="news__image" src="assets/img/news/news-0.png"/>');
         const titulo = $('<div class="news__title news__title--bg-none"><h4>Hola</h4></div>');
          div.append(image);
        div.append(titulo);
    });
    
  
    contenedor.append(div),
    noticia.append(contenedor);
    
    return noticia;
}

const Mundo = () =>{
    const mundo = $('<section id="mundo" class="row"></section>');
    const contenedor = $('<div class="col s12"></div>');
    const title =$('<h1><p class="news__section">MUNDO</p></h1>');
    const hr = $('<hr class="line-orange">');
   
    const div = $('<div class="news__item"></div>');
    const unit=$('<div class="news__item--image">');
    $.getJSON("/api/news", (data)=>{
        $.each(data,(i,val)=>{
           if(i > 1 && i < 7){
               unit.append(imagen(val)); 
           } 
           div.append(unit);
        }); 
    });
    
    
    mundo.append(title);
    mundo.append(hr);
    contenedor.append(div);
    mundo.append(contenedor);
    
    return mundo;
}

const Tecnologia = () =>{
    const tecnologia = $('<section id="tecnologia" class="row"></section>');
    const contenedor = $('<div class="col s12"></div>');
    const title =$('<h1><p class="news__section">TECNOLOGÍA</p></h1>');
    const hr = $('<hr class="line-orange">');
   
    const div = $('<div class="news__item"></div>');
    const unit=$('<div class="news__item--image">');
    $.getJSON("/api/news", (data)=>{
        $.each(data,(i,val)=>{
           if(i > 7 && i < 13){
               unit.append(imagen(val)); 
           } 
           div.append(unit);
        }); 
    });
    
    
    tecnologia.append(title);
    tecnologia.append(hr);
    contenedor.append(div);
    tecnologia.append(contenedor);
    
    return tecnologia;
}

const Educacion = () =>{
    const educacion = $('<section id="educacion" class="row"></section>');
    const contenedor = $('<div class="col s12 flex"></div>');
    const title =$('<h1><p class="news__section">EDUCACIÓN</p></h1>');
    const hr = $('<hr class="line-orange">');
   
    const div = $('<div class="news__item"></div>');
    const unit=$('<div class="news__item--image">');
    $.getJSON("/api/news", (data)=>{
        $.each(data,(i,val)=>{
           if(i > 13 && i < 18){
               unit.append(imagen(val)); 
           } 
           div.append(unit);
        }); 
    });
    
    educacion.append(title);
    educacion.append(hr);
    contenedor.append(div);
    educacion.append(contenedor);
    
    return educacion;
}

const Opinion =()=>{
    const opinion = $('<section id="opinion" class="row"></section>');
    const contenedor = $('<div class="col s12 flex"></div>');
    const title =$('<h1><p class="news__section">OPINIÓN</p></h1>');
    const hr = $('<hr class="line-orange">');
    const div = $('<div class="news__item"></div>');
    const unit=$('<div class="news__item--image">');
    $.getJSON("/api/news", (data)=>{
        $.each(data,(i,val)=>{
           if( i > 18 && i < 24){
               unit.append(imagen(val)); 
           } 
           div.append(unit);
        }); 
    });
    
    opinion.append(title);
    opinion.append(hr);
    contenedor.append(div);
    opinion.append(contenedor);
    
    return opinion;
      
}

const Carousel = () =>{
    const carousel = $('<section id="carousel" class="carouselNews row col s12 hidden-xs"><section>');
    const items =$('<div class="mycarousel"></div>');
    const fleLeft =$('<div class="fleLeft"></div>');
    const fleRight =$('<div class="fleRight"></div>');
     const div = $('<div class="news__item"></div>');
    $.getJSON("http://localhost:3000/api/news",(data)=>{
         $.each(data,(i,val)=>{
           if(i > 20 && i < 31){
               items.append(imagen(val)); 
           } 
           div.append(unit);
        }); 
    });
    
    carousel.append(items);
    carousel.append(fleLeft);
    carousel.append(fleRight);
   return carousel;
}

const Footer = () =>{
    const footer = $('<footer class="row"></footer>');
    const left = $('<div class="col s4"></div>');
    const rigth = $('<div class="col s4"></div>');
    const center = $('<div class="col s4 border"></div>');
    
    const logo =$('<img src="assets/img/logo-footer.png">');
    const copy =$('<div class=""><p>© Editado por Laboratoria Av. José Pardo #601 Lima 1 Perú Copyright © Laboratoria.la Todos los derechos reservados. </p></div>');
    
    const social = $('<div class="main__social"><div>');
    const iFac = $('<div class="main__social--fb"></div>');
    const iTw = $('<div class="main__social--tw"></div>');
    const iIn = $('<div class="main__social--in"></div>');
    
    const texto = $('<div class="items__fonts"><h3>DIRECTOR GENERAL:</h3><p>Francisco Miró Quesada Cantuarias</p></div><div class="items__fonts"><h3>DIRECTOR PERIODÍSTICO:</h3><p>Fernando Berckemeyer Olaechea</p></div><div class="items__fonts"><h3>SUSCRIPCIONES:</h3><p>suscriptores@comercio.com.pe</p></div><div class="items__fonts"><h3>PUBLICIDAD ONLINE:</h3><p>Ffonoavisos@comercio.com.pe</p></div><div class="items__fonts"><h3>CLUB EL COMERCIO:</h3><p>clubelcomercio@comercio.com.pe <br>Compromiso de Autorregulación Comercial</p></div>');
    
    const terminos=$('<div class="items__fonts"><p>TÉRMINOS Y CONDICIONES DE USO</p><p>TRABAJA CON NOSOTROS</p><p>LIBRO DE RECLAMACIONES</p><p>SEDES PRINCIPALES</p><p>POLITICAS DE PRIVACIDAD</p></div>');
    
    center.append(texto);
    
    rigth.append();
    left.append(logo);
    left.append(copy);
    
    center.append(texto);
    
    rigth.append(terminos);
    
    footer.append(left);
    footer.append(center);
    footer.append(rigth);
    return footer;
}

const navMobile =() =>{
    const div = $('<div class="navMobile"><img src="assets/img/logoicon.png"><div class="navMobile__menu"><img src="assets/img/menu.png"></div></div>');
    
    return div;
}

$('#root').append(navMobile());
$('#root').append(Header());
$('#root').append(Noticias());
$('#root').append(Mundo());
$('#root').append(Tecnologia());
$('#root').append(Educacion());
$('#root').append(Opinion());
$('#root').append(Carousel());
$('#root').append(Footer());


$('.mycarousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


//CODIGO TEST RETORNA TODAS LA IMAGENES
/*
const wrapper ="<div></div>";
$.getJSON("http://localhost:3000/api/news",(data)=>{
    console.log("ESTA ES LA DATA"+data);
    console.log(data.img);
    $.each(data,(i,val)=>{
        console.log(val);
        console.log(i);
        wrapper.append(imagen(val));
    }); 
});

$('#root').append(wrapper);
*/


