const d = document,
    n = navigator,
    ua = n.userAgent;

export default function userDeviceInfo(id) {
    const $id = d.getElementById(id),
    isMovil = {
        android:()=>ua.match(/android/i),
        ios:()=>ua.match(/iphone|ipad|ipod/i),
        windows:()=>ua.match(/windows phone/i),
        any:function(){
            return this.android()|| this.ios() || this.windows();
        },
    },
    isDesktop = {
        linux:()=>ua.match(/linux/i),
        mac:()=>ua.match(/mac/i),
        windows:()=>ua.match(/windows nt/i),
        any:function(){
            return this.linux()|| this.mac() || this.windows();
        },
    },
    isBrowser = {
        chrome:()=>ua.match(/chrome/i),
        safari:()=>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera:()=>ua.match(/opera/i),
        ie:()=>ua.match(/msie|iemobile/i),
        edge:()=>ua.match(/edge/i),
        any:function(){
            return this.chrome()|| this.safari() || this.firefox()|| this.opera()|| this.ie()|| this.edge();
        },

    };
    
    $id.innerHTML = `
        <ul>
            <li>User Agent: ${ua}</li> 
            <li>Plataforma: ${isMovil.any()?isMovil.any():isDesktop.any() }</li>
        </ul>  
    `
   // console.log(isMovil.android());
    /*********Contenido Exclusivo**********/


    if(isBrowser.chrome()){
        $id.innerHTML += `<p>Contenido exclusivo para chirome</p>`;
    }

    /*********Redireccion**********/
    if(isMovil.android()){
        window.location.href = "http://ferreteriabulcano.com";
    }

}