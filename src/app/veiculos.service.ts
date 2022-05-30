import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  private server = environment.apiServer
  private apiUri = this.server + "/veiculo"

  constructor(private http: HttpClient) { }

  index(){
    return lastValueFrom(this.http.get(this.apiUri))
  }

  create(body : any){
    return lastValueFrom(this.http.post(this.apiUri, body))  
  }

  read(id: string){
    return lastValueFrom(this.http.get(this.apiUri + '/' + id))
  }

  update(body: any, id:string){
    return lastValueFrom(this.http.put(this.apiUri + '/' + id, body))
  }

  delete(id: string){
    return lastValueFrom(this.http.delete(this.apiUri + '/' + id))
  }

}
