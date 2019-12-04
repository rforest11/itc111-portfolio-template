import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BiographyComponent } from '../biography/biography.component';
import { ReduxQuizComponent } from '../redux-quiz/redux-quiz.component';
import { ResumeComponent } from '../resume/resume.component';
import { SocialMediaComponent } from '../social-media/social-media.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: '', component: HomeComponent },

    { path: 'resume', component: ResumeComponent },

    { path: 'biography', component: BiographyComponent },

    { path: 'redux-quiz', component: ReduxQuizComponent },

    { path: 'social-media', component: SocialMediaComponent }


    // ATTENTION: Information about path construction below:

   // { path: 'PUT YOUR NEWLY CREATED COMPONENT NAME HERE: lowercase, e.g., - resume -', component: "PUT YOUR NewNameCOMPONENT NAME HERE: first word is Uuppercase only, e.g.,SeattleComponent" }

  ]) ],
  declarations: [ AppComponent, HomeComponent, BiographyComponent, ReduxQuizComponent, ResumeComponent, SocialMediaComponent  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
