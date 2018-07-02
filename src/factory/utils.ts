const Matchrule = {
	chooseball(nowarr,len){
		let allarr = [];
		for(let j=0;j<len.datarule[1];j++){
			let arr = []
			for (let i in nowarr[j]) {
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
		for(let i=0;i<allarr.length;i++){
			if(allarr[i].length==0){
				Isaddball = false;
			}
			totalbet = totalbet*allarr[i].length
		}
		obj = {'status':Isaddball,'allarr':allarr,'totalbet':totalbet}
		obj.ball = TranBall(obj,len)
		return obj
	},
	Rule_2(nowarr,len){
		let allarr = [],totalbet = 1
		let obj = {}
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
		return obj
	}
}

//-- 改造选号显示
const TranBall = (data,mat) => {
	let format = mat.format || ''
	let arr = format.join(',').split('|')
	let res = ''
	
	switch (format.join(',')){
		case 'n|n|n|n|n':
			for(var i=0;i<arr.length;i++){
				res = res!=''?res+'|'+data.allarr[i].join(','):res+data.allarr[i].join(',')
			}
			return res;
	}
	return res;
}

export const Utils= {
	Matchrule,
	TranBall
};

