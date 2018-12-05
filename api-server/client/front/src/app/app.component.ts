import { Component }             from '@angular/core';
//import { BASE_URL, API_VERSION } from './shared'; 
import { LoopBackConfig }        from './shared/sdk';
import { Account, AccessToken }  from './shared/sdk/models';
import { AccountApi }            from './shared/sdk/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor() {
      LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
      LoopBackConfig.setApiVersion('api');
    }
  }

  title = 'front';
}
