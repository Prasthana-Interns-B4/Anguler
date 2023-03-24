import { Component, EventEmitter, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

enteredSearchText:string='';
@Output()
searchTextChanged:EventEmitter<string>=new EventEmitter<string>();
faMagnifyingGlass= faMagnifyingGlass;

onSearchTextChange(){
  this.searchTextChanged.emit(this.enteredSearchText);
}
}
