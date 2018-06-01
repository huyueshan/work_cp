// 购彩查询数据类
export class GOUC {
  id: { number; string }; //注单编号
  time: string; //投注时间
  user: string; //用户
  style: string; //彩种
  playtype: string; //玩法
  content: string; //投注内容
  issue: string; //投注期号
  money: { number; string }; //投注金额
  rebates: { number; string }; //投注返点
  bonus: { number; string }; //奖金
  currentnumber: string; //开奖号码
  state: { boolean; string }; //中奖状态
}
//购彩查询数据默认值
const Goucdef = {
  id: "0",
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
export class ACCHANGE {
  user: string; //用户名
  time: string; //投注时间
  type: string; //帐变类型
  expend: { number; string }; // 支出
  income: { number; string }; //收入
  money: { number; string }; //余额
  rebates: string; //备注
}
const Acchangedef = {
  user: "test01",
  time: "2018-08-08",
  type: "-",
  expend: "-",
  income: "-",
  money: "-",
  rebates: "-"
};
// 充值记录数据类型
export class MONEYCO {
  numb: { number; string }; //订单号
  user: string; //用户名
  time: string; //充值时间
  money: { number; string }; //充值金额
  type: string; //充值方式
  expense: { number; string }; //入款手续费
  discounts: { number; string }; //优惠
  status: { number; string }; //充值状态
  lastmoney: { number; string }; //实际充值金额
}
// 充值记录数据默认值
const Moneycodef = {
  numb: "-",
  user: "test01",
  time: "2018-08-08",
  money: "-",
  type: "-",
  expense: "-",
  discounts: "-",
  status: "-",
  lastmoney: "-"
};

// 个人报表数据类型
export class MYREPORT {
  date: string; //日期
  recharge: number; //充值
  atm: number; //提款
  caitou: number; //彩票投注
  vaildtou: number; //有效投注
  winning: number; //彩票中奖
  rebates: number; //投注返点
  rebatesage: number; //代理返点
  bonus: number; //活动奖金
  profitorloss: number; //彩票盈亏
}
const Myreportdef = {
  date: "-",
  recharge: 0,
  atm: 0,
  caitou: 0,
  vaildtou: 0,
  winning: 0,
  rebates: 0,
  rebatesage: 0,
  bonus: 0,
  profitorloss: 0
};

//优惠活动数据类型
export class DISCOUNT {
  name: string; //活动名称
  wastevalid: { number; string }; //有效投注流水
  wasteneed: { number; string }; //所需流水
  status: string; //活动状态
  rebates: string; //备注
  time: string; //创建时间
  action: string; //操作
}
const Discountdef = {
  name: "-",
  wastevalid: "-",
  wasteneed: "-",
  status: "-",
  rebates: "-",
  time: "2018-08-08",
  action: "详情",
  link: "-" //详情链接
};
// 彩种限额数据类型
export class QUOTA {
  type: string; //玩法类型
  min: number; //单注最低
  maxbonus: number; //最高奖金
  max: number; //单项最高
}
const Quotadef = {
  type:"-",
  min: 1,
  maxbonus: 1,
  max: 1,
}
//用户列表数据类型
export class USERLIST {
  name: string; //用户名
  type: string; //用户类型
  time: string; //注册时间
  lasttime: string ; //最后登陆时间
  money: { number; string };//余额
  rebates: { number; string }; //返点
  status: string; //状态
  action: string[]; //操作
}
const Userlistdef={
  name: "-",
  type: "-",
  time: "-",
  lasttime: "-",
  money: "-", 
  rebates: "-", 
  status: "-",
  action: ["详情"], 
}


export const userdef = {
  Goucdef, //购彩查询数据默认值
  Acchangedef, //帐变报表数据默认值
  Moneycodef, //充值记录数据默认值
  Myreportdef, //个人报表数据默认值
  Discountdef, //优惠活动数据默认值
  Quotadef, // 彩种限额数据默认值
  Userlistdef, // 用户列表数据默认值
};
