import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Transaction } from '../transaction-list/transactions'
import { map  } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) {}
  transaction!: Transaction
  getTranscations() : Observable<Transaction[]>{
	return this.http.get<Transaction[]>("./in-memory-date.services.ts")
	}
  setTransaction(transaction:any):Observable<any>{
	const options = new HttpHeaders({'Content-Type':'application/json'})
	return this.http.put('./in-memory-date.services.ts',transaction,{headers:options})
  }
}
