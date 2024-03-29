import { Component , EventEmitter, Output} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {
  @Output() updateInput: EventEmitter<string> = new EventEmitter();

  emailFormControl = new FormControl('', [

  ]);

  changeInput(event: any) {
    this.updateInput.emit(event.target.value);
  }
}
