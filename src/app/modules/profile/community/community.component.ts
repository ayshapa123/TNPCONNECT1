import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {
  imageUrl :any="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
  m:any="more";
 community:any=[{
  name:"SoulDEVS",
  description:"The lost souls of developers 👻",
  image: "\'../../../../assets/blue.png\'"
 },
 {
  "name":"🎨 Designers",
  "description":"Magicians of all things visual",
  image: "\'../../../../assets/brush.png\'"

 },
 {
  "name":"TNP Alerts",
  "description":"Official announcements, info or news related to organization",
  image: "\'../../../../assets/Rectangle 9.png\'"

 },
 {
  "name":"Digital Team",
  "description":"Byte-sized Brilliance",
  image: "\'../../../../assets/error.png\'"

 },
 {
  "name":"Flavor Fiesta",
  "description":"Nothing but food🍔🍕🍟🧆",
  image: "\'../../../../assets/pancake.png\'"
 }
];

//  toggleExpansion(i:any){
//   this.post[i].isExpanded=!this.post[i].isExpanded
//   if(this.post[i].isExpanded)
//     this.m="less"
//   else
//    this.m="more"
// }
 
}
