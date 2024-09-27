import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  ruta = inject(ActivatedRoute)

  comics = [
    {
      id: "c001",
      titulo: "OLDMAN LOGAN",
      autor: "Mark Millar",
      numero_paginas: 160,
      genero: "Acción",
      lanzamiento: 2008,
      url_imagen: "https://www.milcomics.com/1452357-home_default/marvel-essentials-6-el-viejo-logan.jpg",
      
    },
    {
      id: "c002",
      titulo: "WOLVERINE ADAMANTIUM",
      autor: "Chris Claremont",
      numero_paginas: 128,
      genero: "Superhéroes",
      lanzamiento: 2011,
      url_imagen: "https://www.milcomics.com/1452333-home_default/lobezno-46.jpg"
    },
    {
      id: "c003",
      titulo: "ARMA X",
      autor: "Barry Windsor-Smith",
      numero_paginas: 240,
      genero: "Aventura",
      lanzamiento: 1991,
      url_imagen: "https://www.milcomics.com/1308767-home_default/lobezno-arma-x-marvel-gallery-edition.jpg"
    },
    {
      id: "c004",
      titulo: "WOLVERINE VS DEPREDADOR",
      autor: "John Arcudi",
      numero_paginas: 110,
      genero: "Crossover",
      lanzamiento: 2017,
      url_imagen: "https://www.milcomics.com/1449941-home_default/predator-versus-lobezno-4-de-4.jpg"
    },
    {
      id: "c005",
      titulo: "WOLVERINE Y CAPITAN AMERICA",
      autor: "Mark Gruenwald",
      numero_paginas: 144,
      genero: "Acción",
      lanzamiento: 1994,
      url_imagen: "https://www.milcomics.com/1343370-home_default/lobezno-40.jpg"
    },
    {
      id: "c006",
      titulo: "ULTIMATE HULK",
      autor: "Jeph Loeb",
      numero_paginas: 200,
      genero: "Superhéroes",
      lanzamiento: 2009,
      url_imagen: "https://www.milcomics.com/1339598-home_default/coleccionable-marvel-ultimate-28-hulk-vs-lobezno-iron-man.jpg"
    },
    {
      id: "c007",
      titulo: "WOLVERINE Y DEADPOOL",
      autor: "Rob Liefeld",
      numero_paginas: 120,
      genero: "Aventura",
      lanzamiento: 2010,
      url_imagen: "https://www.milcomics.com/1292281-home_default/lobezno-23.jpg"
    },
    {
      id: "c008",
      titulo: "WOLVERINE Y LA CIUDAD DEL CRIMEN",
      autor: "Greg Rucka",
      numero_paginas: 130,
      genero: "Policiaco",
      lanzamiento: 2003,
      url_imagen: "https://www.milcomics.com/1295140-home_default/lobezno-parche.jpg"
    },
    {
      id: "c009",
      titulo: "WOLVERINE VS GHOST RIDER",
      autor: "Howard Mackie",
      numero_paginas: 96,
      genero: "Crossover",
      lanzamiento: 1993,
      url_imagen: "https://www.milcomics.com/1340867-home_default/lobezno-38.jpg"
    },
    {
      id: "c010",
      titulo: "WOLVERINE Y SPIDERMAN UNIDOS",
      autor: "Todd McFarlane",
      numero_paginas: 160,
      genero: "Aventura",
      lanzamiento: 1990,
      url_imagen: "https://www.milcomics.com/1449352-home_default/lobezno-41.jpg"
    }
]

  comic:any
  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ruta.paramMap.subscribe(parametro => {
      console.log(parametro);
      this.comics.forEach(element => {
        if (element.id == parametro.get('id')){
          this.comic=element
        }
        
      });
      
    })
  }
}
