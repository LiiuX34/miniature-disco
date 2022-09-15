import { Component, Input } from '@angular/core';
import { Alumno } from './alumno';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba1';
  public Alumno:Array<Alumno>=[];

  public nuevoAlumno(nuevo:Alumno):void{
    nuevo.nombre = "Nombre";
    nuevo.apellido = "Apellido";
    nuevo.run = "run";
    nuevo.edad = 1;
    this.Alumno.push(nuevo)
  }
}
