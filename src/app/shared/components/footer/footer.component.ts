import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contactPhone: string = '+57 3102105253';
  contactEmail: string = 'info@viveroelotonio.com';
  contactName: string = '@viveroelotonio';
  contact: string = '';

  ngOnInit(): void {
    this.contact = `Contact us: ${this.contactPhone} - ${this.contactEmail} - ${this.contactName}`;
  }

}
