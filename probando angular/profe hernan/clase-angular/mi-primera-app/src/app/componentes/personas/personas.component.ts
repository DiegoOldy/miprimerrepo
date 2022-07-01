import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  //atributos
  personas: Persona[]=[]


  //contructor
  constructor(private personasService:PersonaService) { }

  ngOnInit(): void {
    this.getAllPersonas()
  }
  getAllPersonas():void{
    this.personas=this.personasService.getAllPersonas()
  }
  borrarPersonaDeLista(personaParaBorrar:Persona){

    this.personas=this.personasService.removePersona(this.personas,personaParaBorrar)
   }
}
