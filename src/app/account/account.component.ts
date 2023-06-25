import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LoggerService } from '../logger.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  constructor(
    private logger: LoggerService,
    private accountsService: AccountsService
    
  ) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusUpdated.emit(status)
  }
}
