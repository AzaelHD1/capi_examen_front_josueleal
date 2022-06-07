import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

 /* @obtenemos los usuarios y agregamos la ruta /usuarios */
  GetUsuarios() {
    const url = environment.URL_API + '/usuarios';
    return this.http.get( url );
  }
}
