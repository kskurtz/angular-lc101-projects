import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos Assignment';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://images.pexels.com/photos/3857215/pexels-photo-3857215.jpeg?cs=srgb&dl=pexels-nick-wehrli-3857215.jpg&fm=jpg';
  image3 = 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5615998036001/8c03b6a8-d2f8-467e-ad16-8d8eab0493fa/0f5104ad-e415-4602-8f9d-63738eb62d07/1280x720/match/image.jpg';
  constructor() { }

  ngOnInit() {
  }

}