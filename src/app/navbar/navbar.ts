import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Agrega esta importación

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink], // 2. Decláralo aquí para que el HTML lo reconozca
  templateUrl: './navbar.html'
})
export class Navbar {
   // ...
}