import { PaisesService } from './../../services/paises.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miFormulario:FormGroup= this.fb.group({
    region:['',Validators.required]
  })

  //Lenar selectores
  regiones:string[]=[];

  constructor(
    private fb:FormBuilder,
    private paisesService:PaisesService
    ) { }

  ngOnInit(): void {
    this.regiones=this.paisesService.regiones;
  }

  guardar(){
    console.log(this.miFormulario.value);
  }
}
