export class Utils{
    private static getIdFromHref(link:string){
        let tempId = "";
        for( let i = link.length-1; i>=0; i--){
            if(link[i] !== "/"){
                tempId = link[i]+tempId;
            }else{
                return +tempId;
            }
        }
    }

    static getIdFromLink(obj){
        return this.getIdFromHref(obj["_links"]["self"]["href"]);
    }
    
    static areSame(a ,b){
        return this.getIdFromLink(a) === this.getIdFromLink(b);
    }
}