let userModel = {
  isLogin: false,　// 判断是否登录
  accout: '',
  password: '',
  platform: false,
  currenturl:location.hash.split('#')[1],
  lang_config:{
	  default_lan:'zh',
	  lang_expt:10000000000
  },
  langpackage:{},
  now_lang_type:''
};
export default userModel;