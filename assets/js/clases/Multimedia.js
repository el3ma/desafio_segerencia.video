export default class Multimedia{
    #url;
    
    constructor(url){
        this.#url = url;
    }

    get url(){
        return this.#url;
    }

    set url(nuevoUrl){
        return this.#url = nuevoUrl;
    }

    setInicio() {
        return 'Este método es para realizar un cambio en la URL del video'
    
    }
} 