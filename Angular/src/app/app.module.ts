// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorModule } from '@tinymce/tinymce-angular';
import '../assets/Javascript/ckeditor/ckeditor.js';


// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { BlogAddService } from './shared/blog-add.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { BlogDetailsComponent } from './user-profile/blog-details/blog-details.component';
import { BlogAddComponent } from './user-profile/blog-add/blog-add.component';
import { BlogDemoComponent } from './user-profile/blog-demo/blog-demo.component';
import { BlogEditComponent } from './user-profile/blog-edit/blog-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    BlogDetailsComponent,
    BlogAddComponent,
    BlogDemoComponent,
    BlogEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    EditorModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService,BlogAddService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
