import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent implements OnInit {

  examenId:any;
  examen:any;

  constructor(
    private examenService: ExamenService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    this.examenService.obtenerExamen(this.examenId).subscribe(
      (data:any) => {
        console.log(data)
        this.examen = data;
      },
      (error) => {
        console.log(error)
      }
    )
    
  }

}
