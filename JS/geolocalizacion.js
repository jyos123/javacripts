const d = document,
    n = navigator;
;
export default function getGeolocalizacion(id) {
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        },
        success = (posi)=>{
            let coords = posi.coords;
            $id.innerHTML = `
            <p>Posicion actual</p>
            <ul>
                <li>Latitud<b>${coords.latitude}</b> </li>
                <li>longitud:<b>${coords.longitude}</b></li>
                <li>Precision:<b>${coords.accuracy}</b></li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_black" rel="noopener">Localizacion</a>
            `

            console.log(posi);
        },
        error = (errores)=>{
            $id.innerHTML = `<p><mark>Erro ${errores.code}:${errores.message}</mark></p>`;
            console.log(`Erro ${errores.code}:${errores.message}`);  
        };

        n.geolocation.getCurrentPosition(success, error, options)
}