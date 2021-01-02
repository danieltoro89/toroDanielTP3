import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {

  id:string;
  param:string;

  constructor(private route: ActivatedRoute) { 
    this.id = route.snapshot.params['id'];
    this.param = route.snapshot.params['param'];
  }

  ngOnInit() {
    console.log(this.param);
  }

}
