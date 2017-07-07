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

const Mundo = () =>{
    const mundo = $('<section class="row"><section>');
    const contenedor = $('<div class="col s12"></div>');
    
    const div = $('<div class></div>');
    const titulo = $('<div class="news__"></div>');
    
    const img=$('<img src="" />');
    
    const col = $('<div></div>');
    
    //Implementar
    /*$.getJSON("http://localhost:3000/api/categories/1", (data)=>{

    });*/
   
    $.getJSON("http://localhost:3000/api/news/",(data)=>{
         $.each(data, (i,value)=>{
             console.log(data);
              if(value.categories == 1){
                  console.log(value.categories);
                  div.append(img.attr('src','../img/'+value.img));
               }
           }); 
     });
}

const Educacion = () =>{
    const educacion = $('<section class="row"></section>');
    const div = $('<div class="col s12"></div>');
    const contImg = $('<div class="col s4">');
    const imagen = $('<img src="" />');
    
}

const Tecnologia = () =>{
    const tecnologia = $('<section class="row"></section>');
    const div = $('<div class="col s12"></div>');
    const contImg = $('<div class="col s4">');
    const imagen = $('<img src="" />');
}

/*TEST*/
$.getJSON("http://localhost:3000/api/news", (response)=>{
     console.log("news"+response);
});

const Carousel = () =>{
    const carousel = $('<section class="carouselNews row col s12 hidden-xs"><section>');
    const items =$('<div></div>');
    const fleLeft =$('<div class="fleLeft"></div>');
    $.getJSON("http://localhost:3000/api/news",(data)=>{
        $.each(data,(i,val)=>{
            items.append(imagen(val.img));
        }); 
    });
    
    return carousel;    
}

function imagen(src){
    const contenedor = $('<div class="content__imagen"></div>');
    const img = $('<img src="assets/img/news/'+src+'"/>');
    
    contenedor.append(img);
    
    return contenedor;
}

const Footer = () =>{
    const footer = $('<footer class="row"></footer>');
    const left = $('<div class="col s4"></div>');
    const rigth = $('<div class="col s4"></div>');
    const center = $('<div class="col s4 border"></div>');
    
    const logo =$('<img src="assets/img/logo-footer.png">');
    const copy =$('<div class=""><p>© Editado por Laboratoria Av. José Pardo #601 Lima 1 Perú Copyright © Laboratoria.la Todos los derechos reservados. </p></div>');
    
    const texto = $('<div class="items__fonts"><h3>DIRECTOR GENERAL:</h3><p>Francisco Miró Quesada Cantuarias</p></div><div class="items__fonts"><h3>DIRECTOR PERIODÍSTICO:</h3><p>Fernando Berckemeyer Olaechea</p></div><div class="items__fonts"><h3>SUSCRIPCIONES:</h3><p>suscriptores@comercio.com.pe</p></div><div class="items__fonts"><h3>PUBLICIDAD ONLINE:</h3><p>Ffonoavisos@comercio.com.pe</p></div><div class="items__fonts"><h3>CLUB EL COMERCIO:</h3><p>clubelcomercio@comercio.com.pe <br>Compromiso de Autorregulación Comercial</p></div>');
    
    center.append(texto);
   
    left.append(logo);
    left.append(copy);
        
    return footer;
}

const wrapper = $('<div></div>');

wrapper.append(Header());
wrapper.append(News());
wrapper.append(Mundo());
wrapper.append(Tecnologia());
wrapper.append(Educacion());
wrapper.append(Footer());
$('#root').append(wrapper);