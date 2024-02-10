import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-examen',
  templateUrl: './actualizar-examen.component.html',
  styleUrls: ['./actualizar-examen.component.css']
})
export class ActualizarExamenComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private examenService: ExamenService,
    private categoriaService: CategoriaService
  ) { }

  examenId = 0;
  examen:any;
  categorias:any;

  ngOnInit(): void {
      this.examenId = this.route.snapshot.params['examenId'];
      this.examenService.obtenerExamen(this.examenId).subscribe(
        (data) => {
          this.examen = data;
          console.log(data)
        },
        (error) => {
          console.log(error);
        }
      )

      this.categoriaService.listarCategorias().subscribe(
        (data:any) => {
          this.categorias = data;
        },
        (error) => {
          alert('Error al cargar las categorias')
        }
      )
  }

  public actualizarDatos() {
    this.examenService.actualizarExamen(this.examen).subscribe(
      (data) => {
        Swal.fire('Examen actualizado', 'El examen ha sido actualizado con exito', 'success').then(
          (e) => {
            this.router.navigate(['/admin/examenes']);
          }
        )
      },
      (erro) => {
        Swal.fire('Erro en el sistema', 'No se ha podido actualizar el examen ', 'error');
        console.log(erro);
      }
    )
  }

}
