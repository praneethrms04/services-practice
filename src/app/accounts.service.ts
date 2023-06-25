import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdated = new EventEmitter <string>();

  constructor(private logger: LoggerService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.logger.logStatus(status);
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logger.logStatus(status);
  }
}
