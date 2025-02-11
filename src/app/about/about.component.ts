import { Component } from '@angular/core';
import { About } from '../_models/about';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about : About = {id:1, title:"Başlık", description:"lorem ipum dolor sit amet"}
  about2 : About = {id:2, title:"Başlı 2", description:"lorem ipum dolor sit amet constructıtıttııtıtıt"}
  about3 : About = {id:3, title:"Başlık 3", description:"lorem ipum dolor sit amet constereererere"}
  about4 : About = {id:4, title:"Başlık 4", description:"lorem ipum dolor sit amet constereererere"}

  abouts : About[] = [this.about, this.about2, this.about3, this.about4]
}
