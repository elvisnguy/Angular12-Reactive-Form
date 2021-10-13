import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  @Output() data = new EventEmitter();

  constructor(
    private common: CommonService,
    private formBuilder: FormBuilder
  ) { }

  public formCovid = this.formBuilder.group({
    name: ['', [Validators.required, (Validators.minLength(3))]],
    phoneNumber: ['', Validators.required],
    gender: ['', Validators.required],
    date: ['', Validators.required],
    idNumber: ['', Validators.required],
  });

  public ngOnInit(): void {

  }

  public onSubmit(): void {
    this.data.emit({
      ...this.formCovid.value,
      date: this.formCovid.get('date')?.value.toISOString(),
    });
  }
}
