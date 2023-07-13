import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {
  m:any="more";
 community:any=[{
  "name":"SoulDEVS HJKIJIJIM",
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

//  toggleExpansion(i:any){
//   this.post[i].isExpanded=!this.post[i].isExpanded
//   if(this.post[i].isExpanded)
//     this.m="less"
//   else
//    this.m="more"
// }
 
}
