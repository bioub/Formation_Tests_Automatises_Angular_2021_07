import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() selected: string;
  @Input() values: string[] = [];
  @Output() selectedChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if (!this.values.length) {
      throw new Error('values must be filled');
    }

    if (!this.selected) {
      this.selected = this.values[0];
    }
  }

  onClick(selected) {
    this.selected = selected;
    this.selectedChange.emit(selected);
  }

}
