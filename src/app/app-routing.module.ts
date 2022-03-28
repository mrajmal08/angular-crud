import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EditcontactComponent } from './components/editcontact/editcontact.component';

const routes: Routes = [

  {
    path: "contacts",
    component: ContactsComponent
  },
  {
    path: "addContact",
    component: AddContactComponent
  },
  {
    path: "edit/:id",
    component: EditcontactComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
