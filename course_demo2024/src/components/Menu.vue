<template>
  <div style="display: inherit;">
    <div v-if="!store.isUserLoggedIn" class="navbar-item">
      <div class="field is-grouped">
        <p class="control">
          <a @click="$emit('loginClick')" class="button is-rounded is-small">
            <span>登入</span>
          </a>
        </p>
        <p class="control">
          <a @click="$emit('registeredClick')" class="button is-primary is-rounded is-small">
            <span>註冊</span>
          </a>
        </p>
      </div>
    </div>
    <div v-else class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">
        <figure class="image is-32x32" style="margin-right:10px;display:inline-block">
          <img style="max-height: inherit;" class="is-rounded" :src="getUserPicture">
        </figure>
        <span style=" vertical-align: top;line-height: 32px;">
          {{store.userName}}
        </span>
      </a>
      <div class="navbar-dropdown is-boxed">
        <RouterLink class="navbar-item" :to="{ name: 'about' }">
          我的課程
        </RouterLink>
        <hr class="navbar-divider">
        <a class="navbar-item" @click="logout">登出</a>
      </div>
    </div>
  </div>
</template>

<script>
import { useMainStore } from '../stores/index.js'
	
export default {
	setup(){
		return {
			store : useMainStore()
		}
	},
  data () {
      return {}
  },
  computed: {
    getUserPicture () {
 			if(!this.store.userPicture) return "/userhead.png"
      return this.store.userPicture
    },
  },
  methods: {
		logout () {
			this.store.setUserlogout();
		}
  }
}
</script>


