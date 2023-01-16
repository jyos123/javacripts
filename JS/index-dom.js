
import hamburgerMenu from "./menu-hamburge.js";
import { digitalClock, alarm } from "./reloj.js";
import { shordcuts, moveball } from "./teclado.js";
import countDown from "./cuenta-regresiva.js";
import scrollTopButtom from "./botton-scroll.js";
import darkTheme from "./tema-oscuro.js";
import reponsiveMedia from "./objeto -responsive.js";
import reponsiveTester from "./reponsive- texter.js";
import userDeviceInfo from "./detector-dispositivos.js";
import networkStatus from "./deteccion-red.js";
import webCam from "./deteccion-webcam.js";
import getGeolocalizacion from "./geolocalizacion.js";
import searchFilters from "./busqueda-filtro.js";
import draw from "./sorteo.js";
import slider from "./slider.js";
import contacFormValidations from "./formularioContacto.js";
import speechReader from "./narrador.js";


const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/Cascade.mp3", "#activar-alarma", "#desactivar-alarma");
    countDown("countdown", "Dec 24, 2022 11:59:00", "Feliz Navidad!!!!!");
    scrollTopButtom(".scroll-top-btn");
    reponsiveMedia("youtube", "(min-width:1024px)", `<a href="https://www.youtube.com/watch?v=4AcS3lDOlAE" target="_blank" rel="noopener noreferrer">Ver video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/4AcS3lDOlAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    reponsiveMedia("gmaps", "(min-width:1024px)", `<a href="https://www.youtube.com/watch?v=4AcS3lDOlAE" target="_blank" rel="noopener noreferrer">Ver mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5903615699212!2d-68.1420590145201!3d-16.496267199995053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20740f995505%3A0xdf697c2a08595767!2sBas%C3%ADlica%20Menor%20de%20San%20Francisco!5e0!3m2!1ses!2sbo!4v1671286695660!5m2!1ses!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
    reponsiveTester("responsive-tester");
    userDeviceInfo("deteccion-dispositivos");
    webCam("webcam");
    getGeolocalizacion("geolocalizacion");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    contacFormValidations();

});

d.addEventListener("keydown", (e)=>{
    /* shordcuts(e); */
    moveball(e, ".ball", ".stage"); 
    
});
darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
