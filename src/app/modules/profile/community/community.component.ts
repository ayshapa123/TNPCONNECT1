import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {
 community:any=[{
  "name":"SoulDEVS",
  "description":"The lost souls of developers 👻"
 },
 {
  "name":"🎨 Designers",
  "description":"Magicians of all things visual"
 },
 {
  "name":"TNP Alerts",
  "description":"Official announcements, info or news related to organization"
 },
 {
  "name":"Digital Team",
  "description":"Byte-sized Brilliance"
 },
 {
  "name":"Flavor Fiesta",
  "description":"Nothing but food🍔🍕🍟🧆"
 }];


 
}
