import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TradeData } from '../api/tradeData';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvFileDataService {

  constructor(private http: HttpClient) { }

  getCsvFileData(formData: FormData) {
    return this.http.post('https://localhost:7010/api/FileData', formData);
  }
}



