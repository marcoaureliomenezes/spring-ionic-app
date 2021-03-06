import { API_CONFIG } from './../../config/api.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ClienteDTO } from '../../models/cliente.dto';
import { Observable } from 'rxjs';
import { StorageService } from '../storage.service';



@Injectable()
export class ClienteService {

    constructor (public http: HttpClient,
                public storage: StorageService) {

    }
    findByEmail(email: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
    }

    getImageFromBucket(id: string) : Observable<any> {
        let url = `${API_CONFIG.bucketUrl}/cp${id}.jpg`;
        return this.http.get(url, {responseType: 'blob'});
    }

    insert(obj: ClienteDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/clientes`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}