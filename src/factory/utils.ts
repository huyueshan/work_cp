const Matchrule = {
	chooseball(nowarr,len){
		let allarr = [];
		for(let j=0;j<len.arr.length;j++){
			let arr = []
			for (let i in nowarr[j]) {
				// arr.push(i)
				if(i!=''){
					if(parseInt(nowarr[j][i])>=0){
						arr.push(nowarr[j][i]); 
					}
				}
			}
			allarr.push(arr)
		}
		return allarr
	},
	Rule_1(nowarr,len){
		let allarr = [],totalbet = 1
		let obj :any = {}
		allarr = Matchrule.chooseball(nowarr,len)
		let Isaddball = true
		console.log(allarr)
		for(let i=0;i<allarr.length;i++){
			if(allarr[i].length==0){
				Isaddball = false;
			}
			totalbet = totalbet*allarr[i].length
		}
		obj = {'status':Isaddball,'allarr':allarr,'totalbet':totalbet}
		obj.ball = TranBall(obj,len)
		console.log(obj)
		return obj
	},
	Rule_2(nowarr,len){
		let allarr = [],totalbet = 1
		let obj :any = {}
		allarr = Matchrule.chooseball(nowarr,len)
		let Isaddball = true   
		for(let i=0;i<allarr.length;i++){
			if(allarr[i].length==0){
				Isaddball = false;
			}
			totalbet = totalbet*allarr[i].length
		}
		totalbet = totalbet * allarr.length
		obj = {'status':Isaddball,'allarr':allarr,'totalbet':totalbet}
		obj.ball = TranBall(obj,len)
		return obj
	},
	Rule_3(nowarr,len){
		let allarr = [],totalbet = 1,ballarr = []
		let obj :any = {}
		ballarr = Matchrule.chooseball(nowarr,len)
		let Isaddball = false 
		if(len.arr.length === 1){
			ballarr[0].map(function(res){  
			   allarr.push([res])
			});
			if(allarr.length>=len.datarule[1]){
				Isaddball = true;
			}
			totalbet = algorithm.arrangement(allarr.length,len.datarule[1])
		}
		
		if(len.arr.length === 2){
			allarr = Matchrule.chooseball(nowarr,len)
			let a = [],c = 0
			allarr[allarr.length-1].map(function(res){
				a.push(res)
			})
			for(var l = 0;l<allarr[0].length;l++){
				if(algorithm.hasArr(allarr[0][l],allarr[1])){
					var _selfs;
					var _arr = [];
					var _indexs = []; //初始排列组合，即对应的_arr的索引下标为0,1,2
					var _where = 0;
					var _total = [];
					if(len.datarule[1]<len.datarule[2]){
						for(var q = 0;q<len.datarule[2];q++){
							_indexs.push(q)
						}
						_arr = allarr[1]
						_selfs = new Array(len.datarule[2])
						algorithm.plzh(_selfs, _arr, _indexs, _total, _where);
						for(var j = 0;j<_total.length;j++){
							if(algorithm.hasArr(allarr[0][l],_total[j])){
								c = c + 1
							}
						}
					}
					if(len.datarule[1]>=len.datarule[2]){
						for(var q = 0;q<len.datarule[1];q++){
							_indexs.push(q)
						}
						_arr = allarr[0]
						_selfs = new Array(len.datarule[1])
						algorithm.plzh(_selfs, _arr, _indexs, _total, _where);
						for(var j = 0;j<_total.length;j++){
							if(algorithm.hasArr(allarr[0][l],_total[j])){
								c = c + 1
							}
						}
					}
					
				}
			}
			for(let i=0;i<allarr.length;i++){
				if(allarr[i].length<len.datarule[i+1]){
					Isaddball = false;
				}else{
					if(len.datarule[1]>=len.datarule[2]){
						allarr[1].map(function(res){
							if(!algorithm.hasArr(res,allarr[0])){
								a.push(res)
							}
						})
					}else{
						allarr[0].map(function(res){
							if(!algorithm.hasArr(res,allarr[1])){
								a.push(res)
							}
						})
					}
					if(a.length>=len.datarule[1]+len.datarule[2] && allarr[0].length>=len.datarule[1] && allarr[1].length>=len.datarule[2]){
						Isaddball = true
						if(len.datarule[1]>=len.datarule[2]){
							totalbet = algorithm.arrangement(allarr[0].length,len.datarule[1])*allarr[1].length - c
						}
						if(len.datarule[1]<len.datarule[2]){
							totalbet = algorithm.arrangement(allarr[1].length,len.datarule[2])*allarr[0].length - c
						}
					}
				}
			}
			console.log(c)
			console.log(allarr)
			if(c == 1 || allarr[0].length == 1 || allarr[1].length == 1 || totalbet == 1){
				allarr[0].map(function(res){
					if(algorithm.hasArr(res,allarr[1])){
						if(allarr[1].length == 1 && len.datarule[1]>=len.datarule[2]){
							algorithm.removeArr(res,allarr[0])
						}else if(allarr[1].length != 1 && len.datarule[1]>=len.datarule[2]){
							algorithm.removeArr(res,allarr[1])
						}
						if(allarr[0].length == 1 && len.datarule[1]<len.datarule[2]){
							algorithm.removeArr(res,allarr[1])
						}else if(allarr[0].length != 1 && len.datarule[1]<len.datarule[2]){
							algorithm.removeArr(res,allarr[0])
						}
					}
				})
			}
		}
		console.log(allarr)
		obj = {'status':Isaddball,'allarr':allarr,'totalbet':totalbet}
		obj.ball = TranBall(obj,len)
		return obj
	}
}

const Randomrule = (obj) =>{
	var basearr = ["w", "q", "b", "s", "g"]
	var m = [],a = [],o = ''
	for(var i=0;i<10;i++){
		m.push(i)
	}
	if(algorithm.hasArr(obj.arr[0],basearr)){
		obj.arr.map(function(res){
			a.push(algorithm.RandomArray(m,1)[0])
		})
		a.map(function(res){
			o = o ==''?obj.format[0].replace('n',res):o.replace('n',res)
		})
	}else{
		var l=0
		if(obj.arr.length==1){
			l = obj.datarule[1]
		}else{
			l = obj.datarule[1]+obj.datarule[2]
		}
		a = algorithm.RandomArray(m,l)
		a.map(function(res){
			o = o ==''?obj.format[0].replace('m',res):o.replace('n',res)
		})
	}
	console.log(o)
	return o
}

//-- 改造选号显示
const TranBall = (data,mat) => {
	let res = ''
	for(var i=0;i<data.allarr.length;i++){
		res = res!=''?res+'|'+data.allarr[i].join(','):res+data.allarr[i].join(',')
	}
	return res;
}

const algorithm = { 
	arrangement(total, target){　　　　// 阶乘算法total：总的排列数　　@target：组合的总数
        var nTotal = 1;
        var nTarget = 1;
        var nNum = 1;
        for(var i=1; i<=total; i++){
            nTotal *= i;
        }
        for(var k=1, tar=total-target; k<=tar; k++){
            nTarget *= k;
        }
        for(var s=1; s<=target; s++){
            nNum *= s;    
        }
        return nTotal/(nTarget*nNum);
    },
	arrnum(t,arr){
		var a = [];
		
	},
	hasArr(val,array){
		let res = false
		array.map((value) => {
			if(value === val){
				res = true
			}
		})
		return res
	},
	removeArr(val,array){
		array.map((value,i) => {
			value === val && array.splice(i,1)
		})
		return array
	},
	// 排列组合
	plzh(_selfs, _arr, _indexs, _total, _where) {
		if (_selfs != null && _arr.length >= _selfs.length) {
			if (_where < _selfs.length - 1) { 
				var index = _indexs[_where];
				if (index == _arr.length) { 
					--_where;
					if (_where == -1) { 
						return;
					} else {
						_indexs[_where] = _indexs[_where] + 1;
						for (var i = _where + 1; i < _selfs.length; i++) {
							_indexs[i] = _indexs[i - 1] + 1;
						}
						this.plzh(_selfs, _arr, _indexs, _total, _where);
					}
				} else {
					_selfs[_where] = _arr[index];
					this.plzh(_selfs, _arr, _indexs, _total, ++_where);
				}
			} else {
				var index = _indexs[_where];
				if (index == _arr.length) {
					--_where;
					if (_where == -1) { 
						return;
					}
					_indexs[_where] = _indexs[_where] + 1;
					for (var i = _where + 1; i < _selfs.length; i++) {
						_indexs[i] = _indexs[i - 1] + 1;
					}
					this.plzh(_selfs, _arr, _indexs, _total, _where);
				} else {
					_selfs[_where] = _arr[index];
					_total.push(algorithm.deepCoby(_selfs));
					var _nextIndex = _indexs[_where] + 1;
					if (_nextIndex < _arr.length) {
						_indexs[_where] = _nextIndex;
						this.plzh(_selfs, _arr, _indexs, _total, _where);
					} else { 
						--_where;
						if (_where == -1) {
							return;
						}
						_indexs[_where] = _indexs[_where] + 1;
						for (var i = _where + 1; i < _selfs.length; i++) {
							_indexs[i] = _indexs[i - 1] + 1;
						}
						this.plzh(_selfs, _arr, _indexs, _total, _where);
					}
				}
			}
		}
	},
	// 深度复制
	deepCoby(obj) {
		if (null == obj || "object" != typeof obj)
			return obj;
		if (obj instanceof Date) {
			var copy1 = new Date();
			copy1.setTime(obj.getTime());
			return copy1;
		}

		if (obj instanceof Array) {
			var copy2 = [];
			for (var i = 0, len = obj.length; i < len; ++i) {
				copy2[i] = this.deepCoby(obj[i]);
			}
			return copy2;
		}
		if (obj instanceof Object) {
			var copy3 = {};
			for (var attr in obj) {
				if (obj.hasOwnProperty(attr)) copy3[attr] = this.deepCoby(obj[attr]);
			}
			return copy3;
		}
		throw new Error("Unable to copy obj! Its type isn't supported.");
	},
	// 随机从数组中取出几个元素
	RandomArray(arr, count) {
		var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
		while (i-- > min) {
			index = Math.floor((i + 1) * Math.random());
			temp = shuffled[index];
			shuffled[index] = shuffled[i];
			shuffled[i] = temp;
		}
		return shuffled.slice(min);
	},
	add(a,b){
		var args = arguments,
			lens = args.length,
			d = 0,
			sum = 0;
		for(var key in args){
			var str = ""+args[key];
			if(str.indexOf(".")!=-1){
				var temp = str.split(".")[1].length;
				d = d < temp ? temp : d;
			}
		}
		var m = Math.pow(10,d);
		for(var key in args){
			sum += args[key]*m;
		}
		return sum/m;

	}
}

export const Utils= {
	Matchrule,
	TranBall,
	algorithm,
	Randomrule
};

