export class Utils{
    static getIdFromLink(link:string){
        let tempId = "";
        for( let i = link.length-1; i>=0; i--){
            if(link[i] !== "/"){
                tempId = link[i]+tempId;
            }else{
                return +tempId;
            }
        }
    }
}