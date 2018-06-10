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
		    id: 6,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 7,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 8,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 9,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	}, 
	  	{
		    id: 10,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	}, 
	  	{
		    id: 11,
		    path: 'placeholder-happy.jpg', 
		    status: 'happy'
	  	}, 
	  	  	{
		    id: 12,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 13,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 14,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 15,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	}, 
	  	{
		    id: 16,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	}, 
	  	{
		    id: 17,
		    path: 'placeholder-happy.jpg', 
		    status: 'happy'
	  	}, 
	  	  	{
		    id: 18,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 19,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 20,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 21,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	}, 
	  	{
		    id: 22,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	}, 
	  	{
		    id: 23,
		    path: 'placeholder-happy.jpg', 
		    status: 'happy'
	  	}, 
	  	  	{
		    id: 24,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	},
	  	{
		    id: 25,
		    path: 'placeholder.jpg', 
		    status: 'sad'
	  	}
  	];

  	faces_asset_path:string = 'assets/faces/'; 

  	constructor() { }

  	ngOnInit() { }
  	
	check(status) {
		if(status==='happy') {
			this.fetchNewFacesFromServer(); 
		}
	}

	fetchNewFacesFromServer() {
		console.log('method to fetch new faces from server'); 


	}
}
