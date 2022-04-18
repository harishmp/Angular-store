import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { Contact } from '../model/contact';
import { allcontactList, setContactType } from './app.actions';
import { IAppState, initialAppState } from './app.interface';

export const userFeatureKey = 'AppState';

export const reducer = createReducer(
  initialAppState as IAppState,
  on(setContactType, (state, action) => ({
    ...state,
    contactType: action.contactType,
  })),
  on(allcontactList, (state, action) => ({
    ...state,
    contacts: action.contacts,
  }))
);

export const selectFeature = (state: any): IAppState => state.AppState;

export const selectContactType = createSelector(
  selectFeature,
  (state: IAppState) => state.contactType
);

export const selectContacts = (type: string) => createSelector(
  selectFeature,
  (state: IAppState) => {
    let contacts: Contact[];
    if (type && (type === 'Private') || (type === 'Business')) {
      contacts = state.contacts.filter(contact => contact.contactType === type)
    } else {
      contacts = state.contacts;
    }
    return contacts;
  }
);

export function AppReducer(state: IAppState, action: Action): IAppState {
  return reducer(state as IAppState, action as Action);
}