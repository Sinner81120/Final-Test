import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DangkiComponent } from './dangki/dangki.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ThiComponent } from './thi/thi.component';
import { DangthiComponent } from './dangthi/dangthi.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { QuenpassComponent } from './quenpass/quenpass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DangkiComponent,
    DangnhapComponent,
    AboutusComponent,
    ThiComponent,
    DangthiComponent,
    DoimatkhauComponent,
    QuenpassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'Home', component: HomeComponent },
      { path: 'About-us', component: AboutusComponent },
      { path: 'Testing/:subjectId', component: DangthiComponent },
      { path: 'Test', component: ThiComponent },
      { path: 'ChangePassword', component: DoimatkhauComponent },
      { path: 'ForgetPass', component: QuenpassComponent },
      { path: 'Register', component: DangkiComponent },
      { path: 'Login', component: DangnhapComponent },
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
