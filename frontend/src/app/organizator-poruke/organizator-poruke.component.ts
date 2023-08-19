import { Component, OnInit } from '@angular/core';
import { Caskanje } from '../modeli/caskanje';
import { Korisnik } from '../modeli/korisnik';
import { Poruka } from '../modeli/poruka';
import { Radionica } from '../modeli/radionica';
import { CaskanjaService } from '../servisi/caskanja.service';

@Component({
  selector: 'app-organizator-poruke',
  templateUrl: './organizator-poruke.component.html',
  styleUrls: ['./organizator-poruke.component.css']
})
export class OrganizatorPorukeComponent implements OnInit {

  constructor(private caskanjaServis: CaskanjaService) { }

  ngOnInit(): void {
    this.organizator = JSON.parse(localStorage.getItem('korisnik'))
    this.radionica = JSON.parse(localStorage.getItem('radionica'))
    this.tekstPoruke = ""

    this.dohvatiCaskanja()
  }

  organizator: Korisnik
  radionica: Radionica
  caskanja: Caskanje[]
  kor_ime_uces: string = ''
  tekstPoruke: string

  dohvatiCaskanja() {
    this.caskanjaServis.dohvPoRadionici(this.radionica.id).subscribe((caskanja: Caskanje[])=>{
      if (caskanja)
        this.caskanja = caskanja
    })
  }

  poruka: Poruka = new Poruka()

  upisiPoruku() {
    this.poruka = {
      kor_ime: this.organizator.kor_ime,
      tekst: this.tekstPoruke,
      vreme_poruke: new Date()
    }

    this.caskanjaServis.upisiPorukuOrg(this.organizator.kor_ime, this.kor_ime_uces, this.poruka).subscribe(()=>{
      this.ngOnInit()
    })
  }

  menuItems = [
    { title: 'Profil', link: '/organizatorProfil' },
    { title: 'Radionice', link: '/organizatorRadionice' },
    { title: 'Promeni lozinku', link: '/promenaLozinke' },
    { title: 'Odjavi se', link: '/odjava'}
  ];

}
