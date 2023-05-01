import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivos';
import { Electrovalvulas } from '../interfaces/electrovalvulas';
import { Mediciones } from '../interfaces/mediciones';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  constructor(private _http: HttpClient) { }

  getListadoDispositivos (): Promise<Dispositivo[]> {
    return firstValueFrom(this._http.get<Dispositivo[]>('http://localhost:8000/devices'))
  }
  getListadoElectrovalvulas (): Promise<Electrovalvulas[]> {
    return firstValueFrom(this._http.get<Electrovalvulas[]>('http://localhost:8000/electrovalvulas'))
  }

  getListadoMediciones (): Promise<Mediciones[]> {
    return firstValueFrom(this._http.get<Mediciones[]>('http://localhost:8000/mediciones'))
  }
  getUpdateMedicion (): Promise<Mediciones[]> {
    return firstValueFrom(this._http.get<Mediciones.idMedicion>('http://localhost:8000/medicionesUpdate'))
  }
  getDeleteMedicion (): Promise<Mediciones[]> {
    return firstValueFrom(this._http.get<Mediciones.idMedicion>('http://localhost:8000/medicionesDelete'))
  }

 
}
