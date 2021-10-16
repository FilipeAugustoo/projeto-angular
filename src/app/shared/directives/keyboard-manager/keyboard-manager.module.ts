import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';
import { KeyboardManagerDirective } from './keyboard-manager.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    KeyboardManagerDirective,
    KeyboardManagedItemDirective],
  imports: [CommonModule],
  exports: [
    KeyboardManagerDirective,
    KeyboardManagedItemDirective]
})

export class KeyboardManagerModule {}
