class SearchParams {

    startDate: string = "";
    endDate: string = "";


    constructor(){

    };

    emptyParams(){
 
        this.startDate = "";
        this.endDate = "";

    }
}

export default new SearchParams()