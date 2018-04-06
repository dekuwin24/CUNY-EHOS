import { Component, OnInit } from '@angular/core';
import { ITEM } from '../mock';
import { WasteManagementService } from "../services/waste-management.service";
import { UserService } from '../services/user.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-waste-request',
  templateUrl: './waste-request.component.html',
  styleUrls: ['./waste-request.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class WasteRequestComponent implements OnInit {
  items = ITEM;
  loading: Boolean = false;
  wasteItems: any[] = [];
  wasteForm: FormGroup;
  chemicalForm: FormGroup;
  chemicals: any[] = [];

  constructor(private waste: WasteManagementService, private formBuilder: FormBuilder, private user: UserService) {

  } 
  // TODO: implement FormArray/FormBuilders for the waste and chemical portions
  createChemical(): FormGroup {
    return this.formBuilder.group({
      name: '',
      percentFraction: ''
    });
  }
  addChemical() {
    // this.wasteItems = this.pickupRequestForm.get('wasteItems') as FormArray;
    // this.wasteItems.push(this.createWasteItem());
  }
  createWasteItem(): FormGroup{
    return this.formBuilder.group({
      containerType: '',
      hazardClass: '',
      quantity: 0,
      chemicals: this.formBuilder.array([this.createChemical()])
    });
  }
  addWasteItem() {
    this.wasteItems = this.wasteForm.get('wasteItems') as FormArray;
    this.wasteItems.push(this.createWasteItem());  
  }
  createRequest() {
    
  }
  loadScript(src){
      var script = document.createElement("script");
      script.type = "text/javascript";
      document.getElementsByTagName("body")[0].appendChild(script);
      script.src = src;
    }
  ngOnInit() {
    this.user.getProfile().subscribe( (data) => {
      this.wasteForm = this.formBuilder.group({
        requester: [data._id],
        location: data.building,
        items: this.formBuilder.array([this.createWasteItem])
      });
    });
    this.loadScript('./assets/js/table.js')
  }

}
