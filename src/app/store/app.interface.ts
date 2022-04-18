import { Contact } from "../model/contact";
import { ContactType } from "../model/contact.type";

export interface IAppState {
    contactType: ContactType;
    contacts: Contact[];
}
  
export const initialAppState: IAppState = {
    contactType: ContactType.ALL,
    contacts: []
};