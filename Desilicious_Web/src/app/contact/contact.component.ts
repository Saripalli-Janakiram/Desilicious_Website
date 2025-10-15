// src/app/contact/contact.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  whatsappNumber = '15126161212'; // must be in international format for WhatsApp
  whatsappMessage = 'Hi Desilicious Cafe, I’d like to know more about your catering services.';

  openWhatsApp() {
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
    window.open(url, '_blank');
  }
}
