const GetName = (arr) => {
	let obj = {}
	arr.map(function(el){
		obj[el] = document.getElementsByName(el)[0]
	})
	return obj
};
const WARN = (name,str) => {	
	let warn = GetName([name])
	warn[name].style.border=str!=''?"1px solid #AB003A":""
	$(".errtip").find('.alltip').text(str)
	if(str!=''){
		$(".tipsh").show()
	}else{
		$(".tipsh").hide()
	}
	return false
};
const CANCLEWARN = (name,str) => {	
	let warn = GetName([name])
	warn[name].style.border=""
	$("input[name="+name+"]").parent().find('.tip').css("color",'green')
	// $("input[name="+name+"]").parent().find('.tip').text(str)
	return false
	
};
const WARNPOST = (type,title) => {	
	if(type=='success'){
		$.fn.sharkToastr({
			type: 'success',
			content: title?title:'保存成功！',
			duration: 2000
		});
	}else{
		$.fn.sharkToastr({
			type: 'success',
			content: title?title:'保存失败！',
			duration: 2000
		});
	}
	
};
const Vaildform = function(dom){
	const formtype = {			
		"cash"        	:	/^[\d]{1,20}$/,
		"tel"				:	/^0[\d]{8,13}$/,
		"price2"			:   /^[\d]{1,6}[.][\d]{1,2}$/,
		"email"			:	/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
		"mobile"			:	/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$|17[0-9]{9}/,
		"v_code"		:	/^(\d){4}$/,
		"name"			:	/^[\w\W]{1,10}$/,
		"address"		:	/^[\w\W]{1,30}$/,
		"password"		:	/^[\d]{1,15}$/,
		"passwords"		:	/^[\d]{1,15}$/,
		"mobile_tel"		:	/^(13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$|17[0-9]{9})|^(0[\d]{8,13})|^(400[\d]{6,8})$/,
		"string"		:	/^[\w\W]{1,25}$/,
		"cardno"        :	/^[\d]{1,30}$/,
	}
	const formtip = {
		"cash"        :   "请填写正确整数金额",
		"tel"				:	"电话号码为纯数字，至少6位，至多16位",
		"price2"			:	"价格不高于100万，保留小数点后一至二位",
		"email"			:	"邮箱格式为xxx@xx.xxx！",
		"mobile"			:	"请填写正确手机号格式！",
		"v_code"		:	'验证码格式为4位数字',
		"name"			:    "用户名填写10个字符以内",
		"address"		:	"地址在30字符以内",
		"password"		:	"需填15字符以内",
		"passwords"		:	"需填15字符以内",
		"mobile_tel"		:	'请填写手机号码或固话',
		"string"		:	'请正确填写',
		"cardno"        :   "请填写正确的卡号",
	}
	for(let name in dom){
		let val = dom[name]
		if(!val.dataset.ignore){
			//-- 非空判断
			if(!val.value){
				val.nodeName == 'INPUT' && WARN(name,'输入项未填写')
				val.focus()
				return false
			}else if(val.value.match(/^\s+$/)){
				val.nodeName == 'INPUT' && WARN(name,'输入项不能全为空格')
				val.focus()
				return false
			}
		}
		
		//-- 正则判断
		if(val.getAttributeNode('rule')){
			let getatt = val.getAttributeNode('rule').nodeValue
			
			if(getatt && val.value && !val.value.match(formtype[getatt])){
					val.nodeName == 'INPUT' && WARN(name,formtip[getatt])
					val.focus()
					return false
				}
				
				val.nodeName == 'INPUT' && WARN(name,'')
		}else{
			val.nodeName == 'INPUT' && WARN(name,'')
		}
	}
		
	return true
};
export const formmod = {
	GetName,
	CANCLEWARN,
    WARN,
	Vaildform,
	WARNPOST
};

