import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivos';


@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  constructor(private _http: HttpClient) { }

  getListadoDispositivos (): Promise<Dispositivo[]> {
    return firstValueFrom(this._http.get<Dispositivo[]>('http://localhost:8000/devices'))
  }
  getListadoElectrovalvulas (): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/electrovalvulas'))
  }

  getListadoMediciones (): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/mediciones'))
  }
}
