import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactTypeSelectorComponent } from './contact-type-selector/contact-type-selector.component';
import { RolodexComponent } from './rolodex/rolodex.component';
import { ContactsService } from './contacts.service';
import { FormsModule } from '@angular/forms';
import { BusinessCardComponent } from './business-card/business-card.component';
import { contacts, contactsInjectionToken } from './contacts';
import { StoreModule } from '@ngrx/store';
import { AppReducer, reducer, userFeatureKey } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ContactTypeSelectorComponent,
    RolodexComponent,
    BusinessCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(AppReducer),
    StoreModule.forFeature(userFeatureKey, reducer),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    ContactsService,
    {
      provide: contactsInjectionToken,
      useValue: contacts,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
