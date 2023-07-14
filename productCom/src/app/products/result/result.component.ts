import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private restAPI: RestApiService) { }

  ngOnInit(): void {
  }

  results: Product[];
  resultCount: number | undefined;

  changeQuery(query: string) {
    if (query !== '' && query !== null && query !== undefined) {
      this.restAPI.getProductAPI(query).subscribe(d => {
        this.results = d;
        this.resultCount = this.results.length;
      });
    } else {
      this.results = [];
      this.resultCount = undefined
    }
  }

}
