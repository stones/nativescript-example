import Detail from './detail';


export default class DetailsService {

    get() {
        return this.getDetails()
    }

    getDetails() {
        let details = [];
        details.push(new Detail("Awesomeness", this.getValue(100, 10000)));
        return details;
    }

     getValue(min, max) {
         return (Math.floor(Math.random() * (max - min)) + min) +'';
    }

}