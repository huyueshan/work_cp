// 服务内容：（创建目的）
// 集合网站内所有公用变量
// 获取和设置尽量都统一在此服务完成
// 只作储存、获取和修改三个功能。不做其他任何逻辑和运算操作
// 可能所有页面都需要调用，尽量不引入其他库和模块，实现精简



import {
    Injectable
} from '@angular/core';

@Injectable()
export class TransferService {

            // 页面信息
            
    public nowOnline:number = 0;    //在线人数


            // 用户登录状态
 
    public isLoaded:boolean = false;    //  /* true为正常登录 */
    
    
            // 用户信息
            // /* 包含用户名字、余额、等所有信息 */

    public user_name:string = '';
 
    public user_moneytype:string = 'RMB';
 
    public user_money:number = 0;

    public user_odds:number = 7.8 ;      // 用户最大返点 || 赔率

    public user_rangevalue:number = 7.8 ;      // 用户选择的 返点 || 赔率 值

    public user_rastep:number = 0.1 ;      // 用户 返点 || 赔率 可选步长（赔率拖动条的步长值）
 
 


            // 页面信息
            //  /* 包含所有页面当前路由及状态的信息 */
    public cur_URL:string = '';

    public cur_gameID:string = '';

    public cur_gameNAME:string = '';

    public cur_gameTYPE:string = 'official';   // 'official' || 'credit'

    public cur_tolonghu:boolean = false;     // 是否定位龙虎投注页面



    // 信用页面数据

    public Credit_setnumb:boolean = false; // 快选金额弹出隐藏

    public Credit_selmoeny = [100, 200, 500, 1000, 5000]; // 快选金额默认数组

    public Credit_sel_on = true; // 快选金额开启关闭， true为开启状态







    constructor() {}



    // /* 浏览器缓存里的数据 此服务暂时只操作判断是否登录数据 */

            //  获取方法

    get(name){
        let _that = this;
        if (name === 'isLoaded') {
            this.isLoaded = JSON.parse(window.sessionStorage.getItem(name))
        }
        return _that[name]
    }

            //  设置方法
    set(name, value){
        let _that = this;
        if (name === 'isLoaded') {
            try{
                value = JSON.stringify(value)
            }catch(e){
                console.warn('数据格式不正确')
            }
            window.sessionStorage.setItem(name,value);
        }
        _that[name] = value;
    }

            // 初始服务数据  主要是统一初始用户保存在LocalStorage的数据
            // 统一在app.component.js中 初始。
    initdata(){
        // 初始信用玩法快选金额数据
        if (JSON.parse(window.localStorage.getItem("selmoeny"))) {
            this.Credit_selmoeny = JSON.parse(window.localStorage.getItem("selmoeny"));
        } 
        if (window.localStorage.getItem("sel_on").toString()) {    // 此处判断不能使用JSON.parse！
            this.Credit_sel_on = JSON.parse(window.localStorage.getItem("sel_on"));
        }
    }

}