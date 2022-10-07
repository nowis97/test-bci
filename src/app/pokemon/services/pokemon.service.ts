import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../dtos/pokemon.dto";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  apiUrl = 'https://pokeapi.co/api/v2';
  
  constructor(private readonly httpClient:HttpClient) {}
  
  obtenerPokemones(limit: number){
    return this.httpClient.get<{results: Array<Pokemon>}>(`${this.apiUrl}/pokemon`, {params: { limit }}).pipe(map(res => res.results));
  }
}
