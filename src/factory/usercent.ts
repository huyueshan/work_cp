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

export const userdef = {
  Goucdef
};
