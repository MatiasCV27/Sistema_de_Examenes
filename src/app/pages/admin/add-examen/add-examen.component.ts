import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
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

  constructor(private categoriaService: CategoriaService) { }

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

}
