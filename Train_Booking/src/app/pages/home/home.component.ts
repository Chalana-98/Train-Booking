import { Component, OnInit } from '@angular/core';
import { StationsService } from '../../services/stations.service';
import { IStation, IStationResponse } from '../../models/Station';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  stationList : IStation[] = [];
  constructor (private stationSrv : StationsService){
    
  }

  ngOnInit(): void {
      this.loadStations();
  }

  loadStations(){
    this.stationSrv.getAllStations().subscribe((res:IStationResponse)=>{
      this.stationList = res.data;

    }, error=>{
      alert("Error Occured" + JSON.stringify(error));
    })
  }
}
