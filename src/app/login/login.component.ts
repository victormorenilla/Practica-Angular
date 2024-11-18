import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    if (this.username === 'admin' && this.password === '1234') {
      console.log("OK");
      this.router.navigate(['/gallery']); // Navegar a la galería
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Incorrecto',
        text: 'Usuario o contraseña incorrectos',
        timer: 2000,
        position: 'top-end'
      });
    }
  }
}
