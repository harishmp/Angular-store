import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Subject, Subscription } from 'rxjs';
import { Contact } from '../model/contact';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectContacts, selectContactType } from '../store/app.reducer';
import { allcontactList } from '../store/app.actions';

@Component({
  selector: 'app-rolodex',
  templateUrl: './rolodex.component.html',
  styleUrls: ['./rolodex.component.css'],
})
export class RolodexComponent implements OnInit, OnDestroy {
  public contacts!: Contact[];
  public contact!: Contact;
  private destroyed: Subject<any> = new Subject();

  subscription!: Subscription;

  contacts$ = this.store.select(selectContactType).pipe(
    map((contactType) => contactType),
    switchMap((contactType) => this.store.select(selectContacts(contactType)))
  );

  constructor(private contactsService: ContactsService, private store: Store) { }

  public async ngOnInit() {
    this.subscription = (await this.contactsService.getContacts())
      .pipe(takeUntil(this.destroyed))
      .subscribe(contacts => {
        this.contacts = contacts;
        this.store.dispatch(allcontactList({ contacts: this.contacts }));
      });
  }

  public ngOnDestroy() {
    this.destroyed.next(null);
    this.subscription.unsubscribe();
  }

  public setContact(contact: Contact): void {
    this.contact = contact;
  }
}
