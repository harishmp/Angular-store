import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../model/contact';
import { ContactType } from '../model/contact.type';

@Component({
  selector: 'app-contact-type-selector',
  templateUrl: './contact-type-selector.component.html',
  styleUrls: ['./contact-type-selector.component.css'],
})
export class ContactTypeSelectorComponent {
  public contactTypes = ContactType;
  public selectedContactType: ContactType = ContactType.ALL;
  public contactTypesData: Contact[] = [];

  constructor(private contactsService:ContactsService){}

  setContactType($event: ContactType) {
    this.contactsService.setTypeOfContacts($event);
  }
}
