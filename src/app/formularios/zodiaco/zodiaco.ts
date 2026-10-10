import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './zodiaco.html'
})
export class Zodiaco {
  
  nombreCompleto: string = '';
  edad: number = 0;
  signo: string = '';
  imagenSigno: string = '';

  formulario = new FormGroup({
    nombre: new FormControl(''),
    apaterno: new FormControl(''),
    amaterno: new FormControl(''),
    dia: new FormControl(''),
    mes: new FormControl(''),
    anio: new FormControl(''),
    sexo: new FormControl('Masculino') 
  });

  imprimir() {
    this.nombreCompleto = this.formulario.value.nombre + ' ' + 
                          this.formulario.value.apaterno + ' ' + 
                          this.formulario.value.amaterno;

    this.edad = 2026 - Number(this.formulario.value.anio);

    let animales = ['Mono', 'Gallo', 'Perro', 'Cerdo', 'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra'];
    let imagenes = [
      'https://img.icons8.com/color/96/monkey.png',   
      'https://img.icons8.com/color/96/rooster.png', 
      'https://img.icons8.com/color/96/dog.png',     
      'https://img.icons8.com/color/96/pig.png',     
      'https://img.icons8.com/color/96/rat.png',     
      'https://img.icons8.com/color/96/ox.png',      
      'https://img.icons8.com/color/96/tiger.png',   
      'https://img.icons8.com/color/96/rabbit.png',   
      'https://img.icons8.com/color/96/dragon.png',  
      'https://img.icons8.com/color/96/snake.png',    
      'https://img.icons8.com/color/96/horse.png',    
      'https://img.icons8.com/color/96/goat.png'      
    ];

    let residuo = Number(this.formulario.value.anio) % 12;
    
    this.signo = animales[residuo];
    this.imagenSigno = imagenes[residuo];
  }
}