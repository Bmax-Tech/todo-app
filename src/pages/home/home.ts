import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: Array<any>;

  constructor(public navCtrl: NavController, private storage: Storage) {
    storage.get('users').then((val) => {
      this.users = val;
    });
  }

}
