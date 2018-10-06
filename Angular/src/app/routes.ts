import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BlogAddComponent  } from './user-profile/blog-add/blog-add.component';
import { BlogDetailsComponent } from './user-profile/blog-details/blog-details.component';
import { BlogDemoComponent } from './user-profile/blog-demo/blog-demo.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard],
        children: [{ path: '', component: BlogAddComponent }],
    },
    {
        path: 'viewBlogs', component: UserProfileComponent,canActivate:[AuthGuard],
        children: [{ path: '', component: BlogDetailsComponent }, { path: 'demo', component:BlogDemoComponent }]
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }
];