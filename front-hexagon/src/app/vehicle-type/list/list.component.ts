import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VehicleType } from 'src/app/Model/VehicleType';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListTypeVehicleComponent implements OnInit {

  vehiclesType: VehicleType[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getVehiclesType().subscribe(data => {
      this.vehiclesType = data;
    });
  }

  Edit(vehicleType: VehicleType) {
    localStorage.setItem('id', vehicleType.id.toString());
    this.router.navigate(['editVehicleType']);
  }

  Delete(vehicleType: VehicleType) {
    this.service.deleteVehicleType(vehicleType).subscribe(res => {
      this.vehiclesType = this.vehiclesType.filter(v => v !== vehicleType);
      alert('Veículo retirado');
    });
  }

}