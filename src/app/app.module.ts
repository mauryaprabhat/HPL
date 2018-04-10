import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { BidComponent } from './bid/bid.component';
import { TeamPlayerDetailComponent } from './team-player-detail/team-player-detail.component';
import { TeamPlayerAmountDetailComponent } from './team-player-amount-detail/team-player-amount-detail.component';
import { AuctionHomeComponent } from './auction-home/auction-home.component';
import { PlayerDetailService } from './services/player-detail.service';
import { BidService } from './services/bid.service';
import { TeamPlayerDetailService } from './services/team-player-detail.service';




const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'auctionHome', component: AuctionHomeComponent },
  { path: 'playerDetail', component: PlayerDetailComponent },
  { path: 'bid', component: BidComponent },
  { path: 'teamPlayerDetail', component: TeamPlayerDetailComponent },
  { path: 'teamPlayerAmoutDetail', component: TeamPlayerAmountDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**' , component: PageNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    PlayerDetailComponent,
    BidComponent,
    TeamPlayerDetailComponent,
    TeamPlayerAmountDetailComponent,
    AuctionHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlayerDetailService, BidService, TeamPlayerDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
