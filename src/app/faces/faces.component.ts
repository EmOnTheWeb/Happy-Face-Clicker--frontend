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
		    status: 'frown'
	  	},
	  	{
		    id: 2,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	},
	  	{
		    id: 3,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	},
	  	{
		    id: 4,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	}, 
	  	{
		    id: 5,
		    path: 'placeholder-happy.jpg', 
		    status: 'smile'
	  	}, 
	  	  	{
		    id: 6,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	},
	  	{
		    id: 7,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	},
	  	{
		    id: 8,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	},
	  	{
		    id: 9,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	}, 
	  	{
		    id: 10,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	}, 
	  	{
		    id: 11,
		    path: 'placeholder-happy.jpg', 
		    status: 'smile'
	  	}, 
	  	  	{
		    id: 12,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	},
	  	{
		    id: 13,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	},
	  	{
		    id: 14,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	},
	  	{
		    id: 15,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	}, 
	  	{
		    id: 16,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	}, 
	  	{
		    id: 17,
		    path: 'placeholder-happy.jpg', 
		    status: 'smile'
	  	}, 
	  	  	{
		    id: 18,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	},
	  	{
		    id: 19,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	},
	  	{
		    id: 20,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	},
	  	{
		    id: 21,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	}, 
	  	{
		    id: 22,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	}, 
	  	{
		    id: 23,
		    path: 'placeholder-happy.jpg', 
		    status: 'happy'
	  	}, 
	  	  	{
		    id: 24,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	},
	  	{
		    id: 25,
		    path: 'placeholder.jpg', 
		    status: 'frown'
	  	}
  	];

  	facesAssetPath:string = 'assets/faces/'; 

  	constructor() { }

  	ngOnInit() { 
  		this.fetchFacesFromServer(); 
  	}
  	
	check(status) {
		if(status==='smile') {
			this.fetchFacesFromServer(); 
		}
	}

	fetchFacesFromServer() {
		console.log('method to fetch new faces from server'); 
		let numFacesToFetch = this.calculateNumFacesToFetch(); 
		console.log(numFacesToFetch); 
	
	}

	calculateNumFacesToFetch():Number {

		let viewportWidthWOMargin = (window.innerWidth >= 1200) ? 1200 - 8 : window.innerWidth - 8; //8px is the extra margin 
		let imgWidthWMargin = viewportWidthWOMargin/5; //also img height w margin 
		let viewportHeightWOMargin = window.innerHeight - 8; 
		
		//how many fit 
		let numImgFitHeightways = Math.floor(viewportHeightWOMargin/imgWidthWMargin);
		let numImgToFetch = numImgFitHeightways*5; 

		return numImgToFetch; 
	}
}
