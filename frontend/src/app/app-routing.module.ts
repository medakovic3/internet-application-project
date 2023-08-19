import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminKorisniciComponent } from './admin-korisnici/admin-korisnici.component';
import { AdminProfilComponent } from './admin-profil/admin-profil.component';
import { AdminRadioniceComponent } from './admin-radionice/admin-radionice.component';
import { DetaljiRadioniceComponent } from './detalji-radionice/detalji-radionice.component';
import { NeregistrovanPocetnaComponent } from './neregistrovan-pocetna/neregistrovan-pocetna.component';
import { NeregistrovanRadioniceComponent } from './neregistrovan-radionice/neregistrovan-radionice.component';
import { OdjavaComponent } from './odjava/odjava.component';
import { OrganizatorPorukeComponent } from './organizator-poruke/organizator-poruke.component';
import { OrganizatorProfilComponent } from './organizator-profil/organizator-profil.component';
import { OrganizatorRadioniceComponent } from './organizator-radionice/organizator-radionice.component';
import { OrganizatorUredjivanjeComponent } from './organizator-uredjivanje/organizator-uredjivanje.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { UcesnikProfilComponent } from './ucesnik-profil/ucesnik-profil.component';
import { UcesnikRadioniceComponent } from './ucesnik-radionice/ucesnik-radionice.component';

const routes: Routes = [
  {path: "", component: NeregistrovanPocetnaComponent},
  {path: "prijava", component: PrijavaComponent},
  {path: "registracija", component: RegistracijaComponent},
  {path: "neregistrovanRadionice", component: NeregistrovanRadioniceComponent},
  {path: "ucesnikProfil", component: UcesnikProfilComponent},
  {path: "organizatorProfil", component: OrganizatorProfilComponent},
  {path: "adminProfil", component: AdminProfilComponent},
  {path: "odjava", component: OdjavaComponent},
  {path: "promenaLozinke", component: PromenaLozinkeComponent},
  {path: "ucesnikRadionice", component: UcesnikRadioniceComponent}, 
  {path: "detaljiRadionice", component: DetaljiRadioniceComponent},
  {path: "organizatorPoruke", component: OrganizatorPorukeComponent},
  {path: "organizatorRadionice", component: OrganizatorRadioniceComponent},
  {path: "organizatorUredjivanje", component: OrganizatorUredjivanjeComponent},
  {path: "adminKorisnici", component: AdminKorisniciComponent},
  {path: "adminRadionice", component: AdminRadioniceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
