import { HttpHeaders } from "@angular/common/http";

export default class Utils {

    static getToken(): string {
        return JSON.parse(sessionStorage.getItem('userToken'))?.token;
    }

    static getEmail(): string {
        return JSON.parse(sessionStorage.getItem('userToken'))?.email;
    }

    static createAuthHeader(): HttpHeaders {
        const header = new HttpHeaders({Authorization: 'Bearer ' + this.getToken()});
        return header;
    }
}