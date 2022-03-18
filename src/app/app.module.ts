import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './store/app.state';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/@components/header/header.component';
import { PostsListComponent } from './post/posts-list/posts-list.component';
import { CounterComponent } from './counter/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    PostsListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
