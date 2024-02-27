import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button.component';
import { PlayerCardComponent } from './components/player-card.component';
import { InputComponent } from './components/input.component';
import { CheckboxComponent } from './components/checkbox.component';
import { RadioButtonComponent } from './components/radio-button.component';
import { DropdownComponent } from './components/dropdown.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    PlayerCardComponent,
    InputComponent,
    CheckboxComponent,
    RadioButtonComponent,
    DropdownComponent,
  ],
  exports: [
    PlayerCardComponent,
    InputComponent,
    CheckboxComponent,
    RadioButtonComponent,
    DropdownComponent,
  ],
})
export class UiKitModule {}
