
// 购彩查询数据类
export class GOUC {
  id: {number,string}; //注单编号
  time: string; //投注时间
  user: string; //用户
  style: string; //彩种
  playtype: string; //玩法
  content: string; //投注内容
  issue: string; //投注期号
  money: {number,string}; //投注金额
  rebates: {number,string}; //投注返点
  bonus: {number,string}; //奖金
  currentnumber: string; //开奖号码
  state: {boolean,string}; //中奖状态
}
//购彩查询数据默认值
const Goucdef = {
  id: '0', 
  time: "2018-08-08",
  user: "test02", 
  style: "all", 
  playtype: "all",
  content: "0,0,0,0,0", 
  issue: "088",
  money: 0, 
  rebates: 0,
  bonus: 0, 
  currentnumber: "0,0,0,0,0",
  state: false 
};

// 帐变报表数据类型
export class ACCHANGE{
  user: string; //用户名
  time: string; //投注时间
  type: string; //帐变类型
  expend: {number,string}; // 支出
  income: {number,string}; //收入
  money: {number,string}; //余额
  rebates: string; //备注
}
const Acchangedef = {
  user: 'test01',
  time: '2018-08-08',
  type: '_',
  expend: '_',
  income: '_',
  money: '_', 
  rebates: '_',

}
// 充值记录数据类型
export class MONEYCO{
  numb: {number,string}; //订单号
  user: string; //用户名
  time: string; //充值时间
  money: {number,string}; //充值金额
  type: string; //充值方式
  expense: {number,string}; //入款手续费
  discounts: {number,string}; //优惠
  status: {number,string}; //充值状态  
  lastmoney: {number,string};//实际充值金额
}
// 充值记录数据默认值
const Moneycodef = {
  numb: '_',
  user: 'test01',
  time: '2018-08-08',
  money: '_',
  type: '_',
  expense: '_',
  discounts: '_',
  status: '_',
  lastmoney: '_',
}

export const userdef = {
  Goucdef, //购彩查询数据默认值
  Acchangedef, //帐变报表数据默认值
  Moneycodef, //充值记录数据默认值
};
