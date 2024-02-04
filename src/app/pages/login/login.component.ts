import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
      "username": '',
      "password": ''
  }

  constructor(private snack: MatSnackBar, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
      
  }

  formSubmit() {

    if (this.loginData.username.trim() == '' || this.loginData.username.trim() == null) {
      this.snack.open('El nombre de usuario es requerido!!', 'Aceptar', {
        duration: 3000
      })
      return;
    }
    if (this.loginData.password.trim() == '' || this.loginData.password.trim() == null) {
      this.snack.open('La contraseña es requerido!!', 'Aceptar', {
        duration: 3000
      })
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data)
        
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any) => {
          this.loginService.setUser(user);
          console.log(user);

          if (this.loginService.getUserRole() == "ADMIN") {
            // Dashboard admin
            //window.location.href = '/admin';
            this.router.navigate(['admin']);
          } else if (this.loginService.getUserRole() == "NORMAL") {
            // User dashnoard
            //window.location.href = '/user-dashboard';
            this.router.navigate(['user-dashboard']);
          } else {
            this.loginService.logout();
          }
        })
      }, (error) => { 
        console.log(error);
        this.snack.open('Detalles invalidos, vuelva a intentarlo!!', 'Aceptar', {
          duration: 3000
        })
      }
    )

  }

}
