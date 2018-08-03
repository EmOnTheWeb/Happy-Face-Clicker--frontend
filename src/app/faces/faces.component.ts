import { ViewChild, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Face } from '../face';
import { FaceService } from './faces.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faces',
  templateUrl: './faces.component.html',
  styleUrls: ['./faces.component.css']
})
export class FacesComponent implements OnInit {
  	allFrowns: Array<Face> = []; 

  	facesToShow: Array<Face> = []; 

  	facesAssetPath:string = 'assets/faces/'; 

  	numFacesToShow:number; 

  	@ViewChild('content') modalContent;

  	constructor(private faceService: FaceService, private modalService: NgbModal, private changeDetector: ChangeDetectorRef) { }

  	ngOnInit() { 

  		this.fetchFacesFromServer(); 
  		
  		let alreadyReadModal = localStorage.getItem('hfc-modal');
  		if(!alreadyReadModal) {
  			setTimeout(() => {this.openModal(this.modalContent)},0); 
  		}
  	}

  	openModal(content) {
    	this.modalService.open(content, { centered: true }).result.then((result) => {
      		localStorage.setItem('hfc-modal', '1');
    	}, 
    	() => {});
  	}
  	
	check(status) {
		if(status==='smile') {
			this.fetchFacesFromServer(); 
		}
	}

	fetchFacesFromServer() {
		
		console.log('method to fetch new faces from server'); 
		let frownPromise = new Promise((resolve,reject) => {
			this.faceService.getFrowns().subscribe(
	            (frowns) => {
	                // console.log(JSON.stringify(frowns));
	                resolve(frowns);  
	            }, 
	            (error) => {
	                console.error(error); 
	                reject(error); 
	            }
        	);
		}); 

        let smilePromise = new Promise((resolve,reject) => {
        	this.faceService.getSmile().subscribe(
	            (smile) => {
	                // console.log(JSON.stringify(smile)); 
	                resolve(smile); 
	            }, 
	            (error) => {
	            	reject(error); 
	                console.error(error); 
	            }
        	); 
        }); 

        Promise.all([frownPromise, smilePromise]).then(
        	(frownsAndSmile) => { 
            	this.allFrowns=frownsAndSmile[0]['faces']; //save all fronts incase of browser resize
            	
            	let filteredFrowns = this.filterNumFrowns(); 

           		this.facesToShow = this.insertSmileIntoFrowns({frowns:filteredFrowns,smile:frownsAndSmile[1]['faces']}); 

        	}, 
        	(error) => console.error(error));
	}

	insertSmileIntoFrowns(faces) {		
		
		let {frowns, smile} = faces; 
	 	let index = Math.floor((Math.random() * this.numFacesToShow));

	 	frowns.splice(index, 0, smile[0]);

	 	return frowns; 
	}

	filterNumFrowns() { //filter frowns. always need the smile
		
		this.numFacesToShow = this.calculateNumFacesToShow(); 
		let allFrownsCopy = JSON.parse(JSON.stringify(this.allFrowns));
	
		return allFrownsCopy.filter((item, index) => (index < this.numFacesToShow - 1));  
	}

	calculateNumFacesToShow():number {

		let numImgToFitWidthways; 

		if(window.innerWidth > 600) {
			numImgToFitWidthways = 5; 
		}
		else if(window.innerWidth > 400 && window.innerWidth < 601) {
			numImgToFitWidthways = 4; 
		}
		else if(window.innerWidth < 400) {
			numImgToFitWidthways = 2; 
		}

		let viewportWidthWOMargin = (window.innerWidth >= 1200) ? 1200 - 8 : window.innerWidth - 8; //8px is the extra margin 
		let imgWidthWMargin = viewportWidthWOMargin/numImgToFitWidthways; //also img height w margin 
		let viewportHeightWOMargin = window.innerHeight - 8; 
		
		//how many fit 
		let numImgFitHeightways = Math.floor(viewportHeightWOMargin/imgWidthWMargin);
		let numImgToShow = numImgFitHeightways*numImgToFitWidthways; 
		console.log(numImgToShow); 
		return numImgToShow; 
	}

	c() {
		console.log('modal closed'); 
	}
}
