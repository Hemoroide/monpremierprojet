import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Angular';
  description = 'Bonjour il pleut';
 
  user = {
    name: 'Patrick',
    age : '42',
    birthday :  new Date ('1985/09/03') 
    };

  getDescription() {
    return this.description.toUpperCase();
  }

  changeTitle() {
   if ( this.title === "Test Angular") {
     this.title = "Retour button";
   }
     else if (this.title === "Retour button")
      {
       this.title = "Test Angular";
     }
    }

    couleur:string = 'red';
  
    changeColor() {
      if (this.couleur==='red') {
        this.couleur = 'blue';
      }
      else {this.couleur='red';}
      }

      changeLog ($event) {
        console.log($event.target.value);
      }

      isChecked ($event) {
        
      }
 }
