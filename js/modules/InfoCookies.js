import { Cookies } from "./Cookies.js";

export class InfoCookies extends Cookies{

    constructor(){
        super();

        this.InfoCookie ='Informujemy, że korzystamy z informacji zapisanych w plikach cookie. Jeśli Twoja przeglądarka akceptuje obsługę Cookies, oznacza to wyrażenie zgody na stosowanie cookies przez naszą stronę.';

        this.textClose = '<a href="#">X</a>';

        this.textColor = '#000';
         
        this.infoPlace = document.querySelector('.cookies');

        if(!this.getCookie('Accept')) {
            this.showInfo();
        }

        this.setInfoProperties();
    }

    showInfo(){
        this.infoPlace.style.display = 'block';
    }
    hideInfo(){
        this.infoPlace.style.display = 'none';
    }

    setInfoProperties() {
       
        const text = document.querySelector('.cookies__text');
       
        text.innerHTML = this.InfoCookie;
       
        text.style.color = this.textColor;

        const close = document.querySelector('.cookies__close');

        close.innerHTML = this.textClose;

    }

    setCookie() {
        
        super.setCookie({
            name: 'Accept',
            value: 'yes',
            days: 90

        });

        this.hideInfo();


    }


}