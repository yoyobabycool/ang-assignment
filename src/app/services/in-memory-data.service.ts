import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Transaction } from '../transaction-list/transactions'
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const transactions: Transaction[] = [
	{
		"id": 1,
		"date": "01/10/2020",
		"comments": "hello"
	},
	{
		"id": 2,
		"date": "18/12/2020",
		"comments": ""
	},
	{
		"id": 3,
		"date": "31/01/2021",
		"comments": ""
	},
	{
		"id": 4,
		"date": "31/01/2022",
		"comments": ""
	},
	{
		"id": 5,
		"date": "01/10/2023",
		"comments": ""
	},
	{
		"id": 6,
		"date": "12/03/2024",
		"comments": ""
	}
];

    return { transactions };
  }
}
