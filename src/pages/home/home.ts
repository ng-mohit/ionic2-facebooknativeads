import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

declare var FacebookAds: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
start:any = 0;
  constructor(public navCtrl: NavController, public platform:Platform) {
    platform.ready().then(()=>{
      console.log("inside platform ready event");
      if(FacebookAds){
        FacebookAds.createNativeAd('763416880384578_1139417452784517');
         this.start = 1;
      }

      document.addEventListener("onAdLoaded", function(data){
        let temp: any = data;
        console.log(temp);
        if(temp.adType == "native")
        {
         
          document.getElementById('adIcon').setAttribute("src", temp.adRes.icon.url);
          document.getElementById('adCover').setAttribute("src", temp.adRes.coverImage.url);
          document.getElementById('adTitle').innerHTML = temp.adRes.title;
          document.getElementById('adBody').innerHTML = temp.adRes.body;
          document.getElementById('adSocialContext').innerHTML = temp.adRes.socialContext;
          document.getElementById('adBtn').innerHTML = temp.adRes.buttonText;
        }
      })
    })
  }

}
