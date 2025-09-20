import { Component } from '@angular/core';
import { DemoModel } from '../models/demo-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoService } from '../services/demo/demo.service';

@Component({
  selector: 'app-demo',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})

export class DemoComponent {
  demoModel: DemoModel = {
    email: '',
    password: ''
  };

  constructor(private demoService: DemoService) { }


  btnSubmit(): void {
    this.demoService.submitData(this.demoModel).subscribe(
      response => {
        console.log('yo soy el primer mensaje:', response);
      }
    );
    console.log('yo soy el segundo mensaje');
  }
}
