import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service'
import { Transaction } from './transactions'
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  constructor( private transactionService:TransactionService) { }
  transactions! : Transaction[]
  ngOnInit(): void {
	this.getTransactions()
  }
  
  getTransactions(){
	this.transactionService.getTranscations().subscribe({
		next: transactions => this.transactions = transactions 
	})
  }
}
