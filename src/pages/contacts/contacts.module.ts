import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contacts } from './contacts';

@NgModule({
  declarations: [
    Contacts,
  ],
  imports: [
    IonicPageModule.forChild(Contacts),
  ],
})
export class ContactsPageModule {}
