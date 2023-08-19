import { Component, OnInit } from '@angular/core';
import { Radionica } from '../modeli/radionica';
import { RadioniceService } from '../servisi/radionice.service';

@Component({
  selector: 'app-neregistrovan-radionice',
  templateUrl: './neregistrovan-radionice.component.html',
  styleUrls: ['./neregistrovan-radionice.component.css']
})
export class NeregistrovanRadioniceComponent implements OnInit {

  constructor(private radioniceServis: RadioniceService) { }

  ngOnInit(): void {
    this.dohvatiSve()
  }

  aktuelneRadionice: Radionica[] = []
  pretragaNaziv: string
  pretragaMesto: string
  danas: Date = new Date()

  dohvatiSve() {
    this.radioniceServis.dohvatiSve().subscribe((radionice: Radionica[])=>{
      //Postavljanje datuma
      for (const radionica of radionice)
        radionica.datum = new Date(radionica.datum)
      //Aktuelne radionice
      for (const radionica of radionice) {
        if (radionica.datum > this.danas) {
          this.aktuelneRadionice.push(radionica)
        }
      }
    })
  }

  pretraziPoMestu() {
    this.radioniceServis.dohvatiSve().subscribe((radionice: Radionica[])=>{
      //Postavljanje datuma
      for (const radionica of radionice)
        radionica.datum = new Date(radionica.datum)
      //Aktuelne radionice
      this.aktuelneRadionice = []
      for (const radionica of radionice) {
        if (radionica.datum > this.danas) {
          this.aktuelneRadionice.push(radionica)
        }
      }
      this.aktuelneRadionice = this.aktuelneRadionice.filter(radionica=>radionica.mesto.includes(this.pretragaMesto))
    })
  }

  pretraziPoNazivu() {
    this.radioniceServis.dohvatiSve().subscribe((radionice: Radionica[])=>{
      //Postavljanje datuma
      for (const radionica of radionice)
        radionica.datum = new Date(radionica.datum)
      //Aktuelne radionice
      this.aktuelneRadionice = []
      for (const radionica of radionice) {
        if (radionica.datum > this.danas) {
          this.aktuelneRadionice.push(radionica)
        }
      }
      this.aktuelneRadionice = this.aktuelneRadionice.filter(radionica=>radionica.naziv.includes(this.pretragaNaziv))
    })
  }

  sortirajPoNazivu() {
    this.aktuelneRadionice = this.aktuelneRadionice.sort((rad1, rad2)=>{
      if (rad1.naziv > rad2.naziv)
        return -1
      else if (rad1.naziv == rad2.naziv)
        return 0
      else 
        return 1
    })
  }

  sortirajPoDatumu() {
    this.aktuelneRadionice = this.aktuelneRadionice.sort((rad1, rad2)=>{
      if (rad1.datum < rad2.datum)
        return -1
      else if (rad1.datum == rad2.datum)
        return 0
      else 
        return 1
    })
  }

  menuItems = [
    { title: 'Prijava', link: '/prijava' },
    { title: 'Registracija', link: '/registracija' },
    { title: 'Radionice', link: '/neregistrovanRadionice' }
  ];

}
