import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isIos: boolean;
  isCore: boolean;
  isAndroid: boolean;

  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];


  data = [
    {
      name: "AiA",
      code: "AI101",
      limit: 25000,
      account: "Life Insurance"
    },
    {
      name: "Cargills",
      code: "CF001",
      limit: 30000,
      account: "Food City"
    }
  ]; 

  constructor(public navCtrl: NavController, public platform: Platform) {

    console.log(this.platform.platforms());

    this.isIos = platform.is('ios');
    this.isAndroid = platform.is('android');
    this.isCore = platform.is('core');    

  }

}
