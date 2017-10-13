import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {
    constructor() { }

    /**
     * 将日期格式化本地格式格式
     * @date 待格式化日期对象
     */
    formatLocalDate(date: Date): string {
        if (date == null) {
            return null;
        }
        let tzo = -date.getTimezoneOffset();
        let dif = tzo >= 0 ? '+' : '-';
        let pad = function (num) {
            var norm = Math.abs(Math.floor(num));
            return (norm < 10 ? '0' : '') + norm;
        };
        return date.getFullYear()
            + '-' + pad(date.getMonth() + 1)
            + '-' + pad(date.getDate())
            + 'T' + pad(date.getHours())
            + ':' + pad(date.getMinutes())
            + ':' + pad(date.getSeconds())
            + dif + pad(tzo / 60)
            + ':' + pad(tzo % 60);
    }

    /**
     * 日期格式化
     * @param date 日期对象
     * @param fmt 格式字符串，如 yyyy-MM-dd
     */
    format(date: Date, fmt: string): string {
        var o = {
            "M+": date.getMonth() + 1, //月份 
            "d+": date.getDate(), //日 
            "h+": date.getHours(), //小时 
            "m+": date.getMinutes(), //分 
            "s+": date.getSeconds(), //秒 
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds() //毫秒 
        };

        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));

        return fmt;
    }

}