import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasComponent } from './tablas/tablas.component';
import { TablesComponent } from './tables/tables.component';
import { TablePipePipe } from '../pipes/table-pipe.pipe';



@NgModule({
  declarations: [TablasComponent, TablesComponent, TablePipePipe],
  imports: [CommonModule],
  exports: [TablasComponent, TablesComponent]
})

export class MymoduleModule { }
