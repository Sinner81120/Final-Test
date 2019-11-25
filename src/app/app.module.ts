import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown'
//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

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
import { DoithongtinComponent } from './doithongtin/doithongtin.component';
import { KetquaComponent } from './ketqua/ketqua.component';
import { UserComponent } from './user/user.component';

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
    QuenpassComponent,
    DoithongtinComponent,
    KetquaComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'final-test'),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features
    CountdownModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'User', component: UserComponent },
      { path: 'Result', component: KetquaComponent },
      { path: 'Home', component: HomeComponent },
      { path: 'About-us', component: AboutusComponent },
      { path: 'Testing/:subjectId', component: DangthiComponent },
      { path: 'Test', component: ThiComponent },
      { path: 'ChangeInfo', component: DoithongtinComponent },
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
