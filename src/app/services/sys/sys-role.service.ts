import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, QueryCondition, QuerySort, PageSet, AjaxResult } from '../core/http.service';

@Injectable()
export class SysRoleService {
    constructor(private http: Http) { }

    /**
     * 获取单个对象
     * @param keyValue 主键
     */
    public getFormJson(keyValue: string): Observable<AjaxResult> {
        let url = this.http.baseUrl + 'sys/role/GetFormJson';
        url += "?keyValue=" + keyValue;

        return this.http.get(url).map(res => { return res; });
    }

    /**
     * 获取对象列表
     * @param conditions 查询条件列表
     * @param sorts 排序条件列表
     */
    public getListJson(conditions?: QueryCondition[], sorts?: QuerySort[]): Observable<AjaxResult> {
        let url = this.http.baseUrl + 'sys/role/GetListJson';
        let data = {
            conditionJson: conditions,
            sortJson: sorts
        };

        return this.http.post(url, data).map(res => { return res; });
    }

    /**
     * 获取分页对象列表
     * @param conditions 查询条件列表
     * @param sorts 排序条件列表
     * @param pageSet 分页设置对象
     */
    public getPageJson(pageSet: PageSet, conditions?: QueryCondition[], sorts?: QuerySort[]): Observable<AjaxResult> {
        let url = this.http.baseUrl + 'sys/role/GetPageJson';
        let data = {
            conditionJson: conditions,
            sortJson: sorts,
            pageSet: pageSet
        };

        return this.http.post(url, data).map(res => { return res; });
    }

    /**
     * 删除对象
     * @param keyValue 主键
     */
    public deleteFormJson(keyValue: string): Observable<AjaxResult> {
        let url = this.http.baseUrl + 'sys/role/DeleteFormJson';
        url += "?keyValue=" + keyValue;

        return this.http.get(url).map(res => { return res; });
    }

    /**
     * 新增/更新对象
     * @param keyValue 主键
     * @param entity 对象，实体映射
     */
    public saveForm(keyValue: string, entity: any): Observable<AjaxResult> {
        let url = this.http.baseUrl + 'sys/role/SaveForm';
        let data = {
            keyValue: keyValue,
            entity: entity
        };

        return this.http.post(url, data).map(res => { return res; });
    }
}