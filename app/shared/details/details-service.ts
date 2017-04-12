import Detail from './detail';


export default class DetailsService {

    get() {
        return this.getDetails()
    }

    getDetails() {
        let details = [];
        details.push(new Detail("Awesomeness", "80000000"));
        return details;
    }
}