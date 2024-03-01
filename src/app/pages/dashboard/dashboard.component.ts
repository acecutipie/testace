import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})



export class DashboardComponent implements OnInit {
  markAce:string = ''

  apol:any[] = [
    {
      name:'mark'
    },
    {
      name:'ace'
    },
    {
      name:'aranez'
    },
  ]
  ngOnInit(): void {

  }

  mark(name:string) {
    alert(name)
    this.markAce = name
  }
}
