import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla2',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './tabla2.component.html',
  styleUrl: './tabla2.component.css'
})
export class Tabla2Component {
  opcion:any = 'OLDMAN LOGAN'
  comics = [
    {
      id: "c001",
      titulo: "OLDMAN LOGAN",
      autor: "Mark Millar",
      numero_paginas: 160,
      genero: "Acción",
      lanzamiento: 2008,
      url_imagen: "https://www.milcomics.com/1452357-home_default/marvel-essentials-6-el-viejo-logan.jpg"
    },
    {
      id: "c002",
      titulo: "WOLVERINE ADAMANTIUM",
      autor: "Chris Claremont",
      numero_paginas: 128,
      genero: "Superhéroes",
      lanzamiento: 2011,
      url_imagen: "https://example.com/wolverine_adamantium.jpg"
    },
    {
      id: "c003",
      titulo: "ARMA X",
      autor: "Barry Windsor-Smith",
      numero_paginas: 240,
      genero: "Aventura",
      lanzamiento: 1991,
      url_imagen: "https://example.com/arma_x.jpg"
    },
    {
      id: "c004",
      titulo: "WOLVERINE VS DEPREDADOR",
      autor: "John Arcudi",
      numero_paginas: 110,
      genero: "Crossover",
      lanzamiento: 2017,
      url_imagen: "https://example.com/wolverine_vs_predator.jpg"
    },
    {
      id: "c005",
      titulo: "WOLVERINE Y CAPITAN AMERICA",
      autor: "Mark Gruenwald",
      numero_paginas: 144,
      genero: "Acción",
      lanzamiento: 1994,
      url_imagen: "https://example.com/wolverine_captain_america.jpg"
    },
    {
      id: "c006",
      titulo: "ULTIMATE HULK",
      autor: "Jeph Loeb",
      numero_paginas: 200,
      genero: "Superhéroes",
      lanzamiento: 2009,
      url_imagen: "https://example.com/ultimate_hulk.jpg"
    },
    {
      id: "c007",
      titulo: "WOLVERINE Y DEADPOOL",
      autor: "Rob Liefeld",
      numero_paginas: 120,
      genero: "Aventura",
      lanzamiento: 2010,
      url_imagen: "https://example.com/wolverine_deadpool.jpg"
    },
    {
      id: "c008",
      titulo: "WOLVERINE Y LA CIUDAD DEL CRIMEN",
      autor: "Greg Rucka",
      numero_paginas: 130,
      genero: "Policiaco",
      lanzamiento: 2003,
      url_imagen: "https://example.com/wolverine_ciudad_del_crimen.jpg"
    },
    {
      id: "c009",
      titulo: "WOLVERINE VS GHOST RIDER",
      autor: "Howard Mackie",
      numero_paginas: 96,
      genero: "Crossover",
      lanzamiento: 1993,
      url_imagen: "https://example.com/wolverine_ghost_rider.jpg"
    },
    {
      id: "c010",
      titulo: "WOLVERINE Y SPIDERMAN UNIDOS",
      autor: "Todd McFarlane",
      numero_paginas: 160,
      genero: "Aventura",
      lanzamiento: 1990,
      url_imagen: "https://example.com/wolverine_spiderman.jpg"
    }
]
}
