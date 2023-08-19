import { Component, OnInit } from '@angular/core';
import { Radionica } from '../modeli/radionica';
import { KorisniciService } from '../servisi/korisnici.service';
import { RadioniceService } from '../servisi/radionice.service';

@Component({
  selector: 'app-organizator-uredjivanje',
  templateUrl: './organizator-uredjivanje.component.html',
  styleUrls: ['./organizator-uredjivanje.component.css']
})
export class OrganizatorUredjivanjeComponent implements OnInit {

  constructor(private radioniceServis: RadioniceService, private korisniciServis: KorisniciService) { }

  ngOnInit(): void {
    this.radionica = JSON.parse(localStorage.getItem('radionica'))
    this.radionica.datum = new Date(this.radionica.datum)
  }

  radionica: Radionica
  slika: File

  uredi() {
    this.radionica.slika = (this.slika ? this.slika.name : this.radionica.slika)
    this.radioniceServis.azuriraj(this.radionica).subscribe(()=>{
      if (this.slika)
        this.korisniciServis.postaviSliku(this.slika).subscribe(()=>{

      })
      else 
        console.log("slika")
    })
  }

  postaviSliku(e){
    this.slika=e.target.files[0];
  }

  menuItems = [
    { title: 'Profil', link: '/organizatorProfil' },
    { title: 'Radionice', link: '/organizatorRadionice' },
    { title: 'Promeni lozinku', link: '/promenaLozinke' },
    { title: 'Odjavi se', link: '/odjava'}
  ];

}
