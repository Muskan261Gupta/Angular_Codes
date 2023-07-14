import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constant from './constats/Constants';
import { Login } from './models/Login';
import { Product } from './models/Product';
import { Review } from './models/Review';
import { User } from './models/User';
import Utils from './utils';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }
  
  /* Stats API */
  getUsersCountAPI () {
    return this.http.get(Constant.BASE_URL + '/stats/getUsersCount');
  }
  
  getProdCountAPI () {
    return this.http.get(Constant.BASE_URL + '/stats/getProdCount');
  }

  getReviewCountAPI () {
    return this.http.get(Constant.BASE_URL + '/stats/getReviewCount')
  }

  /* User Auth */
  registerAPI (form: User) :Observable<any> {
    return this.http.post(Constant.REGISTER, form);
  }

  loginAPI (form: Login) :Observable<any> {
    return this.http.post(Constant.LOGIN, form);
  }

  /* Product */
  addProductAPI(product: Product): Observable<any> {
    return this.http.post(Constant.ADD_PRODUCT, product, {headers: Utils.createAuthHeader()});
  }

  productAPI(code: string): Observable<any> {
    let httpParams = new HttpParams().set('code', code);
    return this.http.get(Constant.GET_PRODUCT, {headers: Utils.createAuthHeader(), params: httpParams});
  }

  getProductAPI(query: string): Observable<any> {
    let httpParams = new HttpParams().set('query', query);
    return this.http.get(Constant.GET_PRODUCTS, {headers: Utils.createAuthHeader(), params: httpParams});
  }

  /* Review */
  getReviewByProdCodeAPI(code: string): Observable<any> {
    let httpParams = new HttpParams().set('code', code);
    return this.http.get(Constant.GET_REVIEW_BY_PROD_CODE, {headers: Utils.createAuthHeader(), params: httpParams});
  }

  addReviewAPI(review: Review): Observable<any> {
    return this.http.post(Constant.ADD_REVIEW, review, {headers: Utils.createAuthHeader()});
  }
}
