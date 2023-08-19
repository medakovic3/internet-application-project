import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { NeregistrovanPocetnaComponent } from './neregistrovan-pocetna/neregistrovan-pocetna.component';
import { NeregistrovanRadioniceComponent } from './neregistrovan-radionice/neregistrovan-radionice.component';
import { HttpClientModule } from '@angular/common/http';
import { UcesnikProfilComponent } from './ucesnik-profil/ucesnik-profil.component';
import { OrganizatorProfilComponent } from './organizator-profil/organizator-profil.component';
import { AdminProfilComponent } from './admin-profil/admin-profil.component';
import { OdjavaComponent } from './odjava/odjava.component';
import { UcesnikRadioniceComponent } from './ucesnik-radionice/ucesnik-radionice.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { DetaljiRadioniceComponent } from './detalji-radionice/detalji-radionice.component';
import { OrganizatorPorukeComponent } from './organizator-poruke/organizator-poruke.component';
import { OrganizatorRadioniceComponent } from './organizator-radionice/organizator-radionice.component';
import { OrganizatorUredjivanjeComponent } from './organizator-uredjivanje/organizator-uredjivanje.component';
import { AdminKorisniciComponent } from './admin-korisnici/admin-korisnici.component';
import { AdminRadioniceComponent } from './admin-radionice/admin-radionice.component';


@NgModule({
  declarations: [
    AppComponent,
    PrijavaComponent,
    RegistracijaComponent,
    NeregistrovanPocetnaComponent,
    NeregistrovanRadioniceComponent,
    UcesnikProfilComponent,
    OrganizatorProfilComponent,
    AdminProfilComponent,
    OdjavaComponent,
    UcesnikRadioniceComponent,
    PromenaLozinkeComponent,
    DetaljiRadioniceComponent,
    OrganizatorPorukeComponent,
    OrganizatorRadioniceComponent,
    OrganizatorUredjivanjeComponent,
    AdminKorisniciComponent,
    AdminRadioniceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
