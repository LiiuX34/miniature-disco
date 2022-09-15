import { Component } from '@angular/core';

export interface Alumno{
  nombre:string;
  apellido:string;
  run:string;
  edad:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './alumno.component.html',
  styleUrls: []
})
