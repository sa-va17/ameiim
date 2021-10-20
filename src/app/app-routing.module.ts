import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CfpComponent } from './cfp/cfp.component';
import { AdvComComponent } from './committee/adv-com/adv-com.component';
import { CommitteeComponent } from './committee/committee.component';
import { OrgComComponent } from './committee/org-com/org-com.component';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path:'committee', component: CommitteeComponent},

    {
      path:'organizing-committee', component: OrgComComponent,
    },
  
    {
      path: 'advisory-committee', component:AdvComComponent
    },
  
  
  
  {path:'call-for-paper', component: CfpComponent},
  {path:'contact-us', component: ContactComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent, ContactComponent, CommitteeComponent, RegisterComponent, CfpComponent
]