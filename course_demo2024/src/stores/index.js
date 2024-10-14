import { defineStore } from 'pinia'
import Cookie from 'js-cookie';

export const useMainStore = defineStore('main', {
  state: () => ({
  	isUserLoggedIn: false, //是否登入
	  userPicture: "", //會員照片
		userName: "", //會員名稱
		userUid: "", //會員 uid (firebase)
		courses: [],
		id_token: "",
		refreshToken: "" //系統需要一段時間去交換 id_token (免得被登出)
  }),
  getters: {
    demoGet: (state) => state.demo + "get",
  },
  actions: {
		setUserLoggedIn(payload) {
			this.isUserLoggedIn = true;
			this.userPicture = payload.userPicture || "/userhead.png";
			this.userName =payload.displayName;
			this.userUid = payload.userUid;
			this.id_token = payload.idToken;
			this.refreshToken = payload.refreshToken;
			Cookie.set("id_token",this.id_token);
			Cookie.set("refresh_token",this.refreshToken);
			Cookie.set('userUid', this.userUid);
			Cookie.set('userPicture', this.userPicture); 
			Cookie.set('userName', this.userName);

		},
		setUserlogout(payload){
			this.isUserLoggedIn = false;
			this.userPicture = "",
			this.userName = ""
			Cookie.remove('id_token');
			Cookie.remove('refresh_token');
			Cookie.remove('userUids');
			Cookie.remove('userPicture'); 
			Cookie.remove('userName');
			this.$router.push({ name: 'home' });
		},
		loadCookie() {
			if(!Cookie.get("id_token")) return // 沒有cookie (這邊可能要檢查cookie 的正確性)
			this.isUserLoggedIn = true;
			this.userPicture = Cookie.get('userPicture') || "/userhead.png";
			this.userName = Cookie.get('userName');
			this.userUid = Cookie.get('userUid');
			this.id_token = Cookie.get("id_token");
			this.refreshToken = Cookie.get("refresh_token");
		}
  }
})