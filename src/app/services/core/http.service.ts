import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Http extends HttpClient {
    public baseUrl: string = 'http://192.168.2.206/api/';
}

/**
 * http请求返回结果标准模型
 */
export class AjaxResult {
    /**
     * 操作结果
     * 0：消息
     * 1：成功
     * 2：警告
     * 3：异常
     */
    retCode?: number;

    /**
     * 异常代码
     */
    errorCode?: string;

    /**
     * 消息内容
     */
    message?: string;

    /**
     * 返回结果类型
     * 0：空
     * 1：单记录
     * 2：数组
     * 3：分页数据
     */
    resultType?: number;

    /**
     * 返回数据
     */
    resultData?: any;
}

/**
 * 分页返回的数据模型
 */
export class PageResult {
    /**
     * 总记录数
     */
    Total?: number;

    /**
     * 每页记录数
     */
    PageSize?: number;

    /**
     * 总页数
     */
    PageCount?: number;

    /**
     * 当前页记录数
     */
    PageIndex?: number;

    /**
     * 当前页记录，对象数组
     */
    Records?: Array<any>;
}

/**
 * 查询条件模型
 */
export class QueryCondition {
    /**
     * 表名（对象名称）
     */
    table: string;

    /**
     * 字段名
     */
    field: string;

    /**
     * 字段类型
     * Number
     * String
     * DateTime
     */
    fieldType: string;

    /**
     * 条件
     * =
     * !=
     * >
     * <
     * >=
     * <=
     * in：包含
     * out：不包含
     * between：之间，存在otherValue
     */
    condition: string;

    /**
     * 值
     */
    value?: string;

    /**
     * 值
     * 只在condition=between时使用
     */
    otherValue?: string;
}

/**
 * 排序模型
 */
export class QuerySort {
    /**
     * 表名（对象名）
     */
    table: string;

    /**
     * 字段名
     */
    field: string;

    /**
     * 顺序
     * true：正序
     * false：倒序
     */
    isASC: boolean = true;
}

/**
 * 分页设置模型
 */
export class PageSet {
    /**
     * 每页记录数
     */
    PageSize: number;

    /**
     * 当前页码
     */
    PageIndex: number;
}