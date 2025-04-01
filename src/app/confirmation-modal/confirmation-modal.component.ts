import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  @Input() orderTrackingNumber!:string;
  @Output() confirmed=new EventEmitter<void>();

  closeModal()
  {
    this.confirmed.emit();
  }
}
