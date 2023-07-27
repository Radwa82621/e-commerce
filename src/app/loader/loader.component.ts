import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../shared/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  isLoading:Subject<boolean>=this._loader.isLoading
constructor(private _loader:LoaderService){

}

}
