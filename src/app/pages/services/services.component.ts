import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';



function kim<T>(names: T): number {
  return 100
}


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  constructor(private http: HttpClient) {

  }
  apiData: any = [{}]
  apiDataOne: any = {}
  images: string = ''

  ishmael = kim<string>('hahah')


  ngOnInit(): void {
    this.apiCall()
  }

  apiCall() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/').subscribe((e) => {
      this.apiData = e
      console.log(e)
    })
  }

  getOne(api: any) {
    this.http.get(api).subscribe((e) => {
      this.apiDataOne = e
      console.log(this.apiDataOne)
      this.images = this.apiDataOne.sprites.back_default
    })
  }
}
