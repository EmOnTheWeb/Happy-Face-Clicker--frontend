import { Component, OnInit } from '@angular/core';
import { Face } from '../face';

@Component({
  selector: 'app-faces',
  templateUrl: './faces.component.html',
  styleUrls: ['./faces.component.css']
})
export class FacesComponent implements OnInit {
  	faces: Array<Face> = [
	  	{
		    id: 1,
		    path: '', 
		    status: 'sad'
	  	},
	  	{
		    id: 2,
		    path: '', 
		    status: 'sad'
	  	},
	  	{
		    id: 3,
		    path: '', 
		    status: 'sad'
	  	},
	  	{
		    id: 4,
		    path: '', 
		    status: 'sad'
	  	} 
  	];

  constructor() { }

  ngOnInit() {
  }

}
