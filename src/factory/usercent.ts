export class GOUC {
    id: number;  //注单编号
    time: string; //投注时间
    user: string; //用户
    style: string; //彩种
    playtype: string; //玩法
    content: string; //投注内容
    issue: string; //投注期号
    money: number; //投注金额
    rebates: number; //投注返点
    bonus: number; //奖金
    currentnumber: string; //开奖号码
    state: boolean; //中奖状态
  }

  export const Goucdef =  {
    id: 0,  //注单编号
    time: '2018-08-08', //投注时间
    user: 'test02', //用户
    style: 'all', //彩种
    playtype: 'all', //玩法
    content: '0,0,0,0,0', //投注内容
    issue: '088', //投注期号
    money: 0, //投注金额
    rebates: 0, //投注返点
    bonus: 0, //奖金
    currentnumber: '0,0,0,0,0', //开奖号码
    state: false, //中奖状态
  }