import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avis } from './avis';

@Injectable({
  providedIn: 'root'
})
export class ServiceavisService {


  constructor(private httpClient:HttpClient) { }

  getAvis():Observable <Avis[]>{
    return this.httpClient.get<Avis[]>('http://localhost:8580/application/getAllavis');
  }

}
