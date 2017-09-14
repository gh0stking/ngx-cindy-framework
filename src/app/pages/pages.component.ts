import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PAGES_MENU } from './pages.menu';

@Component({
    selector: 'pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
    animations: [
        trigger('menuState', [
            state('inactive', style({
                left: '0px'
            })),
            state('active', style({
                left: '-143px'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ]),
        trigger('routerState', [
            state('inactive', style({
                marginLeft: '180px'
            })),
            state('active', style({
                marginLeft: '40px'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ]),
        trigger('imgState', [
            state('inactive', style({
                left: '16px'
            })),
            state('active', style({
                left: '150px'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ])
    ]
})
export class Pages implements OnInit {
    isDisabled: boolean = true;
    constructor(public router: Router) {
    };

    ngOnInit() {
        this.getMenu();
    }

    /*************************  ********************************/
    informationNumber: any = 18;                      //头部我的消息数量
    menus: any[];                                    //菜单
    msgs: any[] = [];                            //消息
    state: string = 'inactive';                      //菜单状态
    pTooltipIf: boolean = false;                     //pTooltipIf状态
    beforeUrl: string;                   //api前缀地址
    timeout: any;                                    //错误信息时间
    realname: string;                                  //头部账号名字
    menumsg: string;


    /************************* 获取菜单 ********************************/
    getMenu() {
        this.menus = PAGES_MENU[0].children;
    }

    /************************* 改变左侧菜单宽度 ********************************/
    changeMenuWidth() {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
        //dom操作
        let fa = document.getElementsByClassName('ui-accordion-header');
        if (this.state == 'active') {
            for (let i = 0; i < fa.length; i++) {
                fa[i].getElementsByTagName('span')[0].style.display = 'none';
            }
            this.pTooltipIf = true;
        } else {
            for (let i = 0; i < fa.length; i++) {
                fa[i].getElementsByTagName('span')[0].style.display = 'block';
            }
            this.pTooltipIf = false;
        }
    }

    /************************* 退出登录 ********************************/
    loginOut() {
        sessionStorage.removeItem('userToken');
        this.router.navigateByUrl('login');
    }
}