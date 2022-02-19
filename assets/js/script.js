//IIFE
const showVideo = (() => {

    //Función privada
    const callAtt = (url, id) => {
        id.setAttribute('src', url);
    };

    //Función pública
    return {

        showAtt(url, id) {
            callAtt(url, id);
        },
    };
})();

class Multimedia {
    constructor(url) {
        let _url = url;

        //clausuras...
        this.getUrl = () => _url
        this.setUrl = () => (_url = value)
    }

    get url() {
        return this.getUrl();
    }

    set url(value) {
        this.setUrl(value)
    }

    setInicio() {

    }
};

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        let _id = id

        //clausuras ...
        this.getId = () => _id;
        this.setId = () => (_id = value);
    }

    get id() {
        return this.getId();
    }

    set id(value) {
        this.setId(value)
    }

    //llamar a la función pública del IIFE

    playMultimedia() {
        showVideo.showAtt(this.getUrl(), this.getId())
    }

    setInicio(tiempo) {
        showVideo.showAtt(`${this.getUrl()}?start=${tiempo}`, this.getId());
    }
};

//Llamar elementos del DOM

const videoMusic = document.querySelector('#musica');
const videoMovie = document.querySelector('#peliculas');
const videoSerie = document.querySelector('#series');

const videoUno = new Reproductor('https://www.youtube.com/embed/12kcpP-8jfM', videoMusic);

const videoDos = new Reproductor('https://www.youtube.com/embed/naQr0uTrH_s', videoMovie);

const videoTres = new Reproductor('https://www.youtube.com/embed/faJAT35j5Ss', videoSerie);

console.log(videoUno);
videoUno.playMultimedia();

console.log(videoDos);
videoDos.setInicio(60);

console.log(videoTres);
videoTres.playMultimedia();