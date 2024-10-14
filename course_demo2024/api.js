const server = "http://localhost:5886/api"
const API = {
  member:{
    //Login a user with email / password
    login: {
      url: server + "/member/login",
      method: "post"
    },
    //會員註冊 with email / password
    registered: {
      url: server + "/member/add",
      method: "post"
    },
		course:{
			url: server + "/member/course",
      method: "get"
		}
  },
  //取得課程資訊
  getCourses: {
    url: server + "/courses",
    method: "get"
  },
};

export default API

