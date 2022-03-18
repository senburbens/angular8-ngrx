import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthReducer } from "./state/auth.reducer";
import { AUTH_STATE_NAME } from "./state/auth.selectors";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
