import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neregistrovan-pocetna',
  templateUrl: './neregistrovan-pocetna.component.html',
  styleUrls: ['./neregistrovan-pocetna.component.css']
})
export class NeregistrovanPocetnaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuItems = [
    { title: 'Prijava', link: '/prijava' },
    { title: 'Registracija', link: '/registracija' },
    { title: 'Radionice', link: '/neregistrovanRadionice' }
  ];

}
