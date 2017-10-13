import { Injectable } from '@angular/core';
import { Http } from '../core/http.service';

@Injectable()
export class SysRoleService {
    constructor(private http: Http) { }
}