import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-odjava',
  templateUrl: './odjava.component.html',
  styleUrls: ['./odjava.component.css']
})
export class OdjavaComponent implements OnInit {

  constructor(private ruter: Router) { }

  ngOnInit(): void {
  }

  odjava(){
    localStorage.clear()
    this.ruter.navigate(['prijava'])
  }

  povratak() {
    window.history.back()
  }

}
