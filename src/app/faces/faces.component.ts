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
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 2,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 3,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 4,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	}, 
	  	{
		    id: 5,
		    path: 'placeholder-happy.jpg', 
		    status: 'happy'
	  	}, 
	  	  	{
		    id: 1,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 2,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 3,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 4,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	}, 
	  	{
		    id: 5,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	}
  	];

  	faces_asset_path:string = 'assets/faces/'; 

  	constructor() { }

	check(status) {
		if(status==='happy') {
			console.log('a happy face'); 
		}
	}
}
