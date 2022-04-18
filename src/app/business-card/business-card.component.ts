import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Contact} from '../model/contact';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessCardComponent {
  @Input() contact!: Contact;

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }
}
