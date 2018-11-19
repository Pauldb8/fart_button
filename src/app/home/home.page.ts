import { Component } from '@angular/core';
import { Button } from '@ionic/angular';
import { NavController, Platform } from "ionic-angular";
import { NativeAudio } from '@ionic-native/native-audio';
 
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  createfart(){}
   constructor(public navCtrl: NavController,public platform: Platform,private nativeAudio: NativeAudio) {
    this.platform.ready().then(() => {
      this.nativeAudio.preloadSimple('uniqueId1', 'C:\Users\cobraunie\Downloads\fartsound/fart.mp3').then((success)=>{
        console.log("success");
      },(error)=>{
        console.log(error);
      });
    });
  }
 
  play(){
    this.nativeAudio.play('uniqueId1').then((success)=>{
      console.log("success playing");
    },(error)=>{
      console.log(error);
    });
  }
  }
