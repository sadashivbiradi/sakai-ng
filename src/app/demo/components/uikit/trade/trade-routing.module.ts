import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TradeComponent } from './trade.component';



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    		{ path: '', component: TradeComponent }
    	])],
      exports: [RouterModule]
})
export class TradeRoutingModule { }



