import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transactions';
import { TransactionService } from '../../services/transaction.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

   constructor( private transactionService:TransactionService, private activatedRoute:ActivatedRoute) { }
  transaction! : any
  id!: number
  date!: string
  comments!: string
result!: string
  ngOnInit(): void {
	this.activatedRoute.params.subscribe(id=>{
	this.id = id['id']
	})
	this.getTransactions()
  }
  
    getTransactions(){
	this.transactionService.getTranscations().subscribe(res=>{
		for(let i=0;i<res.length;i++){
			if(res[i].id == this.id){
				this.date=res[i].date
				this.comments = res[i].comments
			}
		}
	})
  }
  pushComments(){
	this.transactionService.setTransaction({
		"id": this.id,
		"date": this.date,
		"comments": this.comments
	}).subscribe(() => {
      this.result = 'Transaction added successfully';
    }, error => {
      this.result = `Error: ${error}`;
    })
  }
}
