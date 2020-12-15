import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {materia} from '../materia';

@Component({
  selector: 'app-mosmaterias',
  templateUrl: './mosmaterias.component.html',
  styleUrls: ['./mosmaterias.component.css']
})
export class MosmateriasComponent implements OnInit {
  materias:materia[];
  selectedMateria:materia={cve:'',snombre:'', screditos:null};
  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.readMateria();
  }
  readMateria() {
    this.apiService.readMateria().subscribe((materias: materia[])=>{
      this.materias = materias;
      console.log(this.materias);
  })
 }
/* createOrUpdateMateria(form){
  if(this.selectedMateria && this.selectedMateria.cve){
    form.value.cve = this.selectedMateria.cve;
    console.log(this.selectedMateria.cve);
  this.apiService.updateMateria(form.value).subscribe((materias: materia)=>{
  this.readMateria();
  console.log(form.value.cve);
  console.log("Materia actualizado" , materias);
  });
  } else{
  this.apiService.createMateria(form.value).subscribe((materias: materia)=>{
    this.readMateria();
    console.log("MAteria creado", materias);
  });
  }
}*/
selectMateria(materias: materia){
  this.selectedMateria = materias;
}
/*deleteMateria(cve){
  this.apiService.deleteMateria(cve).subscribe((materias: materia)=>{
    this.readMateria();
    console.log("materia eliminado ", materias);
  });
    this.readMateria();
}*/

}
