import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  aceForm = new FormGroup({
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    age: new FormControl<string>('')
  });

  firstname: string = ''
  lastname: string = ''
  age: string = ''
  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.aceForm.value)
    this.firstname = this.aceForm.value.firstName as string
    this.lastname = this.aceForm.value.lastName as string
    this.age =  this.aceForm.value.age as string
  }

}
