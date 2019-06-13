import { HttpHeaders } from '@angular/common/http';

export class Utils{
    public static serverUrl: string = "http://localhost:8080/";

    public static manyToManyHttpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "text/uri-list"
        })
      };

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
        return a!==null && b!==null && this.getIdFromLink(a) === this.getIdFromLink(b);
    }
}