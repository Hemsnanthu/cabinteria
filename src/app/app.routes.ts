import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { LoginComponent } from '../components/login/login.component';
import { ContactComponent } from '../components/contact/contact.component';
import { SudhirComponent } from '../components/members/sudhir/sudhir.component';
import {  FoodorderingcomponentComponent } from '../components/foodorderingcomponent/foodorderingcomponent.component';
import { OrdercomponentComponent } from '../components/ordercomponent/ordercomponent.component';
import { LoginFormComponent } from '../components/loginform/loginform.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from '../components/admin/admin.component';
import { AdminpanelComponent } from '../components/adminpanel/adminpanel.component';
import { DisplayusersComponent } from '../components/adminpanel/displayusers/displayusers.component';
// import { ContactComponent } from '../components/contact/contact.component';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'login',
        component:LoginFormComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'sudhir',
        component:SudhirComponent
    },
    {
       path:'foodorder',
       component:FoodorderingcomponentComponent
    },
     { path: 'checkout', component: CheckoutComponent },
    {
        path:'order',
        component:OrdercomponentComponent
    },
    {
        path:'admin',
        component:AdminComponent
    },
    {
        path:'adminpanel',
        component:AdminpanelComponent

    },{
        path:'userfromdb',
        component:DisplayusersComponent
    }
    

];
