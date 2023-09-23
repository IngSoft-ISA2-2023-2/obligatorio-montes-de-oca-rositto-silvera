import { Component, OnInit } from '@angular/core';
import { cilUser, cilLockLocked } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { CommonService } from '../../services/CommonService';
import { LoginService } from 'src/app/services/login.service';
import { LoginRequest } from 'src/app/interfaces/login';
import { Router } from '@angular/router';
import { StorageManager } from 'src/app/utils/storage-manager';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: string = "";
  password: string = "";

  constructor(
    public iconSet: IconSetService,
    private commonService: CommonService,
    private loginService: LoginService,
    private router: Router,
    private storageManager: StorageManager
  ) {
    iconSet.icons = { cilUser, cilLockLocked };
  }

  ngOnInit(): void {
    this.storageManager.saveData('login', null);
  }

  goLogin(): void {
    let loginRequest = new LoginRequest(this.user, this.password);
    this.loginService.login(loginRequest)
      .subscribe(
        (login) => {
          // Manejar la respuesta exitosa aquí
          this.commonService.updateToastData(
            'Welcome: ' + login.userName,
            'success',
            'Login successful.'
          );
  
          this.storageManager.saveData("login", JSON.stringify(login));
          if (login.role === 'Administrator') {
            this.router.navigate(['/admin']);
          } else if (login.role === 'Owner') {
            this.router.navigate(['/owner']);
          } else if (login.role === 'Employee') {
            this.router.navigate(['/employee']);
          } else {
            this.router.navigate(['/home']);
          }
        },
        (error) => {
          // Manejar el error aquí
          console.error('Error during login:', error);
          // Puedes mostrar un mensaje de error al usuario o realizar otras acciones necesarias.
        }
      );
  }
}
