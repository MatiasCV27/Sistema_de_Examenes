import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-categorias',
  templateUrl: './view-categorias.component.html',
  styleUrls: ['./view-categorias.component.css']
})
export class ViewCategoriasComponent implements OnInit {

  categorias = [
    {
      categoriaId: 1,
      titulo: 'Lenguajes de programación',
      descripcion: 'Esta es una categoria prueba'
    },
    {
      categoriaId: 1,
      titulo: 'Lenguajes de programación',
      descripcion: 'Esta es una categoria prueba'
    },
    {
      categoriaId: 1,
      titulo: 'Lenguajes de programación',
      descripcion: 'Esta es una categoria prueba'
    },
    {
      categoriaId: 1,
      titulo: 'Lenguajes de programación',
      descripcion: 'Esta es una categoria prueba'
    }
  ]

  constructor() { }

  ngOnInit(): void {
      
  }

}
