import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css']
})
export class AddExamenComponent implements OnInit {

  cateogrias:any = [];

  examenData = {
    titulo: '',
    descripcion: '',
    puntosMaximos: '',
    numeroDePreguntas: '',
    activo: true,
    categoria: {
      categoriaId: ''
    }
  }

  constructor(
    private categoriaService: CategoriaService, 
    private snack: MatSnackBar,
    private examenService: ExamenService,
    private router: Router) { }

  ngOnInit(): void {
      this.categoriaService.listarCategorias().subscribe(
        (dato:any) => {
          this.cateogrias = dato;
          console.log(this.cateogrias);
        },
        (error) => {
          console.log(error);
          Swal.fire('Error!!', 'Error al cargar las datos', 'error');
        }
      )
  }

  guardarCuestionario() {
    console.log(this.examenData)
    if (this.examenData.titulo.trim() == '' || this.examenData.titulo == null) {
      this.snack.open('El titulo es requerido', '', {
        duration: 3000
      });
      return;
    }
    this.examenService.agregarExamen(this.examenData).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Examen guardado', 'El examen ha sido guardado con exito', 'success');
        this.examenData = {
          titulo: '',
          descripcion: '',
          puntosMaximos: '',
          numeroDePreguntas: '',
          activo: true,
          categoria: {
            categoriaId: ''
          }
        }
        this.router.navigate(['/admin/examenes'])
      },
      (error) => {
        Swal.fire('Error', 'Error al guardar el examen', 'error');
      }
    )
  }

}
