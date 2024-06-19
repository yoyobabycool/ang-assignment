import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TransactionDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TransactionListModule { }
