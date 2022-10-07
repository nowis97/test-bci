import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';
import { PokemonContainerComponent } from './components/pokemon-container/pokemon-container.component';
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    PokemonTableComponent,
    PokemonContainerComponent
  ],
  exports: [
    PokemonContainerComponent
  ],
    imports: [
        CommonModule,
        MatTableModule,
        HttpClientModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class PokemonModule { }
