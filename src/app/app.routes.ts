import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
// import { AboutComponent } from '../components/about/about.component';
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
import { FoodComponent } from '../components/adminpanel/updatefood/updatefood.component';
// import { LandingpageComponent } from './landingpage/landingpage.component';
import { OrderdisplayComponent } from '../components/adminpanel/orderdisplay/orderdisplay.component';
// import { NanthaComponent } from '../components/members/nantha/nantha.component';
import { ArunComponent } from '../components/members/arun/arun.component';
import { MohanComponent } from '../components/members/mohan/mohan.component';
import { ViswaComponent } from '../components/members/viswa/viswa.component';
import { NanthaComponent } from '../components/members/nantha/nantha.component';
import { AboutComponent } from '../components/about/about.component';
import { RegisterComponent } from '../components/register/register.component';
import { StaffComponent } from '../staff/staff.component';
import { ServicesComponent } from '../components/services/services.component';
// import { ProfileComponent } from '../components/profile/profile.component';
// import { ContactComponent } from '../components/contact/contact.component';


export const routes: Routes = [
   
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'services',
        component:ServicesComponent
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
    },
    {
        path:'updatefood',
        component:FoodComponent
    },
    {
        path:'orderdetails',
        component:OrderdisplayComponent
    },
    {
        path:'nantha',
        component:NanthaComponent
    },
    {
        path:'arun',
        component:ArunComponent
    },
    {
        path:'mohan',
        component:MohanComponent
    },
    {
        path:'viswa',
        component:ViswaComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'staff',
        component:StaffComponent
    },
    


];
