import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {HomePage} from "../home/home";

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-register-page',
  templateUrl: 'register-page.html',
})
export class RegisterPage {

  registerForm = {
    email: '',
    username: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doRegister() {
    if (this.registerForm.email == "" || this.registerForm.username == "" || this.registerForm.password == "") {
      let alert = this.alertCtrl.create({
        title: 'Warning !',
        subTitle: 'Please fill all registration form details',
        buttons: ['OK']
      });
      alert.present();
    } else {
      this.storage.get('users').then((val) => {
        if (val != null && val.length > 0) {
          val.push({
            email: this.registerForm.email,
            username: this.registerForm.username,
            password: this.registerForm.password
          });
        } else {
          val = {
            email: this.registerForm.email,
            username: this.registerForm.username,
            password: this.registerForm.password
          }
        }
        this.storage.set('users', val);
        this.navCtrl.setRoot(HomePage);
      });
    }
  }

  showAlert(val) {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: val,
      buttons: ['OK']
    });
    alert.present();
  }

}
