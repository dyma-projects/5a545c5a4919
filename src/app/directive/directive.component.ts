import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  // sample1
  public sample1: String = 'String Interpolation';
  public url: String = 'monUrl';

  // sample3
  public inputText: String = '';

  public status: Boolean = true;
  public texts: Array<String> = ['un', 'deux', 'trois'];
  constructor() { }

  // sample2
  public onClick(): void {
    console.log('sample2');
  }
  ngOnInit() {
  }

}
