import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactType } from './model/contact.type';
import { Contact } from './model/contact';
import { contactsInjectionToken } from './contacts';
import { Store } from '@ngrx/store';
import { setContactType } from './store/app.actions';

@Injectable()
export class ContactsService {
  
  constructor(@Inject(contactsInjectionToken) private contactsList: Contact[], private store: Store) {
  }

  public getContacts(): Promise<Observable<Contact[]>> {
    const contacts = Observable.create((observer: any) => {
      observer.next(this.contactsList);
    });
    return contacts;
  }

  public setTypeOfContacts(chosenElement: ContactType) {
    this.store.dispatch(setContactType({ contactType: chosenElement }));
  }
}
