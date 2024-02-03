import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  //Generar token
  public generateToken(loginData: any) {
    return this.httpClient.post(`${baserUrl}/generate-token`, loginData);
  }
}
