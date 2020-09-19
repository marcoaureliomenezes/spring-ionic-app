import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ClienteDTO } from '../../models/cliente.dto';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../../config/api.config';
import { StorageService } from '../storage.service';



@Injectable()
export class ClienteService {

    constructor (public http: HttpClient,
                public storage: StorageService) {

    }
    findByEmail(email: string) : Observable<ClienteDTO> {
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({
            'Authorization': 'Bearer ' + token
        })  

        return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`, { 'headers': authHeader });
    }
}