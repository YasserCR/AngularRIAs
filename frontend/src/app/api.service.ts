import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuario } from  './usuario';
import {materia} from './materia';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER="http://127.0.0.1:80";
  constructor(private httpClient: HttpClient) { }

  readUsuario():Observable<usuario[]>{
    return this.httpClient.get<usuario[]>(`${this.PHP_API_SERVER}/Alumnos-Angular-crud-php/backend/api/read.php`);
  }

  createUsuario(usuarios: usuario):Observable<usuario>{
    return this.httpClient.post<usuario>(`${this.PHP_API_SERVER}/Alumnos-Angular-crud-php/backend/api/create.php`,usuarios);
  }

  updateUsuario(usuarios: usuario){
    return this.httpClient.put<usuario>(`${this.PHP_API_SERVER}/Alumnos-Angular-crud-php/backend/api/update.php`,usuarios);
  }

  deleteUsuario(cve: string){
    return this.httpClient.delete<usuario>(`${this.PHP_API_SERVER}/Alumnos-Angular-crud-php/backend/api/delete.php/?cve=${cve}`);
  }
  readMateria():Observable<materia[]>{
    return this.httpClient.get<materia[]>(`${this.PHP_API_SERVER}/Alumnos-Angular-crud-php/backend/api/readMateria.php`);
  }
}
