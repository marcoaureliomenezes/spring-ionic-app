import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { CredencialDTO } from "../models/credenciais.dto";

@Injectable()
export class AuthService {

    constructor(public http: HttpClient) {

    }

    authenticate(creds: CredencialDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            })
    }
}