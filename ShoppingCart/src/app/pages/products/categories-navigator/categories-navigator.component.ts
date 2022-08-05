import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories-navigator',
  templateUrl: './categories-navigator.component.html',
  styleUrls: ['./categories-navigator.component.css']
})
export class CategoriesNavigatorComponent implements OnInit {

  @Input() listOfCategories: { categoryName: string, total: number }[] = [];
  @Output() categorySelected: EventEmitter<string>= new EventEmitter<string>();
  @Input() categorySelectedItem: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  handlerChipClick(category: { categoryName: string, total: number }) {
    this.categorySelectedItem = category.categoryName;
    this.categorySelected.emit(category.categoryName);
  }

}
