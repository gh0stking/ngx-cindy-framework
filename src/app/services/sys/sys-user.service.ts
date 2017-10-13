import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, QueryCondition, QuerySort, PageSet, AjaxResult } from '../core/http.service';

@Injectable()
export class SysUserService {
    constructor(private http: Http) { }

    /**
     * 获取单个对象
     * @param keyValue 主键
     */
    public getFormJson(keyValue: string): Observable<AjaxResult> {
        let url = this.http.baseUrl + 'sys/user/GetFormJson';
        url += "?keyValue=" + keyValue;

        return this.http.get(url).map(res => { return res; });
    }

    /**
     * 获取对象列表
     * @param conditions 查询条件列表
     * @param sorts 排序条件列表
     */
    public getListJson(conditions?: QueryCondition[], sorts?: QuerySort[]): Observable<AjaxResult> {
        let url = this.http.baseUrl + 'sys/user/GetListJson';
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
        let url = this.http.baseUrl + 'sys/user/GetPageJson';
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
        let url = this.http.baseUrl + 'sys/user/DeleteFormJson';
        url += "?keyValue=" + keyValue;

        return this.http.get(url).map(res => { return res; });
    }

    /**
     * 新增/更新对象
     * @param keyValue 主键
     * @param entity 对象，实体映射
     */
    public saveForm(keyValue: string, entity: any): Observable<AjaxResult> {
        let url = this.http.baseUrl + 'sys/user/SaveForm';
        let data = {
            keyValue: keyValue,
            entity: entity
        };

        return this.http.post(url, data).map(res => { return res; });
    }

    /**
     * 模拟数据
     * @param conditions 
     * @param sorts 
     */
    public getMockUsers(conditions?: QueryCondition[], sorts?: QuerySort[]): Observable<AjaxResult> {
        let url = 'assets/data/sys-user.data.json';
        return this.http.get(url).map(res => {
            let result: AjaxResult = {
                retCode: 1,
                errorCode: '0',
                message: '获取数据成功',
                resultType: 3,
                resultData: res
            };

            return result;
        });
    }
}