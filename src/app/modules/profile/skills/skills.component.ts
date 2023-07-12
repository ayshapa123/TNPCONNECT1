import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  constructor() { }
  newlabel1:boolean=false
  newskill:any='';
  skillset:any=["abc","absaf",'dgsg',"sgfh",'dfsh','fdhh','fdsh','gsdah']
  ngOnInit(): void {
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
