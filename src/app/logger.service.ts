export class LoggerService {
  logStatus(status: string) {
    console.log(`A server status changed , new status ${status}`);
  }
}
