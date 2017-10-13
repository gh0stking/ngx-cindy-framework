import { Injectable } from '@angular/core';
import { Http } from '../core/http.service';

@Injectable()
export class SysUserRoleService {
    constructor(private http: Http) { }
}