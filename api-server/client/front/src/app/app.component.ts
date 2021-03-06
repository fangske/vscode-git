import { Component }             from '@angular/core';
import { BASE_URL, API_VERSION } from './shared/base.url'; 
import { LoopBackConfig }        from './shared/sdk';
import { Account, AccessToken }  from './shared/sdk/models';
import { AccountApi }            from './shared/sdk/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Create model instances and set the right type effortless
  private account: Account = new Account();
  
  // Configure LoopBack Once or Individually by Component
  constructor(private accountApi: AccountApi) {
      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);
  }
  
  // Start making API calls right away
  private signup(): void {
      this.accountApi.create(this.account).subscribe((account: Account) => this.signin());
  }

  // Built-in LoopBack Authentication and Typings like Account and TokenInterface
  private signin(): void {
      this.accountApi.login(this.account).subscribe((token: AccessToken) => alert('Fake Redirect'));
  }
}