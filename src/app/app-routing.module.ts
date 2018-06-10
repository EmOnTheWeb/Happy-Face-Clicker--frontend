import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacesComponent }      from './faces/faces.component';

const routes: Routes = [
	{ path: '', component: FacesComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule { 
	
}
