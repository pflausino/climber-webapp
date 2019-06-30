import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/shared/person.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  constructor(private service: PersonService) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) { form.resetForm(); }

    this.service.formData = {
      Id: null,
      Name: '',
      Email: ''
    };
  }

  onSubmit(form: NgForm){
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPerson(form.value).subscribe(res => {
      this.resetForm(form);
    }

    );
  }
}
