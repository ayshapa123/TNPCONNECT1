import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  newlabel1:boolean=false;
  newskill:any='';
  skillset : any=["abc", "absaf", "dgsg", "sgfh", "dfsh", "fdhh", "fdsh", "gsdah", "ytkyftt", "hyuui", "twsqaa"];

  passion:any=["Club Soccer Paris","CLub Motor Paris",'Club Raquettes Marseille','ghiwwaa','ydwdwks','jjsqwwo'];
  maxTopassion=3;
  maxToShow = 8;

  displayedItems: string[]=[];
  viewMore = false;
  viewPMore=false;
  constructor()
   {  }
  ngOnInit(): void {

  }


  toggleView() {
    this.viewMore = !this.viewMore;
    
    console.log(this.skillset)

  }
  toggleP()
  {
    this.viewPMore = !this.viewPMore;
  }  
  
  getRemainingItemCount(): number {
    return Math.max(0, this.skillset.length - this.maxToShow);
  }
  
 

  
  addSkill(){

    this.newlabel1=false;

    this.skillset.push(this.newskill)

    this.newskill=''
  }

  newlabel(){

    this.newlabel1=true

  }

  removeskill(j:any){
    console.log(j);
    this.skillset.splice(j,1)

  }
  
}


