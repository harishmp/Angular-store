import { createAction, props } from '@ngrx/store';
import { Contact } from '../model/contact';
import { ContactType } from '../model/contact.type';

export const allcontactList = createAction(
  '[appModule] initialising contact list Action',
  props<{ contacts: Contact[] }>()
);

export const setContactType = createAction(
  '[appModule] setting contact type Action',
  props<{ contactType: ContactType }>()
);