import { Component, OnInit,Input } from '@angular/core';

@Component({

  selector: 'app-errtip',
  templateUrl: './errtip.component.html',
  styleUrls: ['./errtip.component.scss']
})
export class ErrtipComponent implements OnInit {

  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}
