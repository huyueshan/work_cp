//获取cookie、
export function getCookie(name) {
    // var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    // if (arr = document.cookie.match(reg))
    //  return (arr[2]);
    // else
    //  return null;
	localStorage.getItem(name);
	console.log(localStorage.getItem(name))
	if (localStorage.getItem(name)==null) {
		return null
	}else{
		return localStorage.getItem(name)
	}
}
 
//设置cookie,增加到vue实例方便全局调用
export function setCookie (c_name, value, expiredays) {
	 // var exdate = new Date();
	 // exdate.setDate(exdate.getDate() + expiredays);
	 // document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toUTCString());
	 localStorage.setItem(c_name,value);
};
 
//删除cookie
export function delCookie (name) {
	// var exp = new Date();
	// exp.setTime(exp.getTime() - 1);
	// var cval = getCookie(name);
	// if (cval != null)
	//  document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
	localStorage.removeItem(name);
};