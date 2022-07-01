import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas:Persona[]=[]
  constructor() { }

  getAllPersonas():Persona[]{
    let persona1= new Persona("hernan","Borre",28)
    this.personas.push(persona1)
    let persona2=new Persona("alejandro","Fantino",55)
    this.personas.push(persona2)
    this.personas.push(new Persona("nicky","Nicole",22))
    return this.personas
  }
  // solo un ejemplo de los servicios que se pueden ofrecer
  removePersona(listaDePersonas:Persona[],personaToDelete:Persona):Persona[]{
 return listaDePersonas.filter(p=>p.nombre !==personaToDelete.nombre)

  }

}



