import { Component, OnInit } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

declare let jQuery : any;
declare let $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  title = 'Katalist';

  ngOnInit() {
    $("#time-rise").pickatime({
      default: 'now', // Set default time 'now'
      fromnow: 0, // Set default time to * milliseconds from now (using with default = 0)
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // Text for done-button
      cleaartext: 'Clear', // Text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, //make AM PM clickable
      aftershow: function(){} // Function for after opening timepicker
    });
    $('#carousel-1').carousel({});
    $('#carousel-2').carousel({
      indicators: true
    });
  }
}
