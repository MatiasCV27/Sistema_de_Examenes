import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-pregunta',
  templateUrl: './add-pregunta.component.html',
  styleUrls: ['./add-pregunta.component.css']
})
export class AddPreguntaComponent implements OnInit {

  examenId:any
  titulo:any
  pregunta:any = {
    examen: {},
    contenido: '',
    opcion1: '',
    opcion2: '',
    opcion3: '',
    opcion4: '',
    respuesta: ''
  }

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.examenId = this.route.snapshot.params['examenId'];
      this.titulo = this.route.snapshot.params['titulo']
      this.pregunta.examen['examenId'] = this.examenId;
  }

}
