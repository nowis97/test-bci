import {
  Component,
  ViewChild
} from '@angular/core';
import {Pokemon} from "../../dtos/pokemon.dto";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Subscription} from "rxjs";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent {

  dataSource: MatTableDataSource<Pokemon> = new MatTableDataSource<Pokemon>([])
  tamanio = 0;
  
  textoBusqueda = '';
  
  @ViewChild(MatPaginator) paginador!: MatPaginator;
  @ViewChild(MatSort) orden!: MatSort;
  
  suscripciones:Subscription[] = [];
  nombreColumnas = ['ID','nombre', 'borrar'];
  
  constructor(private readonly pokemonService: PokemonService) {
    this.cargarPokemones();
  }

  cargarPokemones(){
    const suscripcionCargarPokemones = this.pokemonService.obtenerPokemones(151).subscribe((pokemones) => {
      this.tamanio = pokemones.length;
      this.dataSource = new MatTableDataSource<Pokemon>(pokemones);
      this.dataSource.paginator = this.paginador;
      this.dataSource.sort = this.orden;
    })

    this.suscripciones.push(suscripcionCargarPokemones);
  }
  
  buscar(){
    this.dataSource.filter = this.textoBusqueda.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  borrarPokemon(id:number){
    this.dataSource.data.splice(id, 1);
    this.dataSource._updateChangeSubscription();
  }
}
