<template>
  <div class="page-container">
    <!-- <div class="page-head" /> -->
    <el-select
      v-model="value"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="login-box">
      <span class="login-title">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</span>
      <el-form>
        <el-form-item>
          <span>账号：</span>
          <el-input v-model="username" class="login-item" />
        </el-form-item>
        <el-form-item>
          <span>密码：</span>
          <el-input v-model="password" type="password" class="login-item" />
        </el-form-item>
      </el-form>
      <el-button class="login-button" plain type="primary" @click="login">登录</el-button>
    </div>
    <!-- <div class="page-foot" /> -->
  </div>
</template>

<script>
import { encrypt, decrypt } from '../utils/aes'
import { login } from '../utils/api'
import router from '../router'

export default {
  data() {
    return {
      username: 'ppu_wbzxryA',
      password: 'Dm123456',
      options: [],
      value: [],
      list: [],
      loading: false,
      states: ["Alabama1111111111111111111111111111111", "Alaska", "Arizona",
      "Arkansas11111112222222222222222", "California", "Colorado",
      "Connecticut", "Delaware", "Florida",
      "Georgia", "Hawaii", "Idaho", "Illinois",
      "Indiana", "Iowa", "Kansas", "Kentucky",
      "Louisiana", "Maine", "Maryland",
      "Massachusetts", "Michigan", "Minnesota",
      "Mississippi", "Missouri", "Montana",
      "Nebraska", "Nevada", "New Hampshire",
      "New Jersey", "New Mexico", "New York",
      "North Carolina", "North Dakota", "Ohio",
      "Oklahoma", "Oregon", "Pennsylvania",
      "Rhode Island", "South Carolina",
      "South Dakota", "Tennessee", "Texas",
      "Utah", "Vermont", "Virginia",
      "Washington", "West Virginia", "Wisconsin",
      "Wyoming"]
    }
  },
  mounted() {
    this.list = this.states.map(item => {
        return { value: `${item}`, label: `${item}` };
      });
  },
  methods: {
    login: function() {
      // const _this = this
      const data = {
        username: encrypt(this.username),
        password: encrypt(this.password)
      }
      login(data).then(response => {
        sessionStorage.setItem('token', response.data._csrf)
        this.$router.push({ path: '/main' })
      })
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    }
  }
}
</script>

<style scoped>
.page-container {
  /* background-color: antiquewhite; */
  width: 100%;
  height: calc(100vh);
}
.page-head {
  background-color: rgba(56, 148, 223, 0.253);
  height: 90px;
  width: 100%;
}
.page-foot {
  background-color: rgba(56, 148, 223, 0.253);
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0;
}
.login-box {
  padding-top: 20px;
  height: 350px;
  width: 300px;
  position: fixed;
  top: 20%;
  left: 50%;
  margin-left: -150px;
  border: rgb(132, 182, 216) 1px solid;
  box-shadow: 10px 10px 5px #888888;
  background-color: rgb(255, 255, 255);
}
.login-title {
  display: block;
  height: 60px;
  line-height: 45px;
  font-size: 24px;
  font-weight: 500;
}
.login-item {
  width: 200px;
}
.login-button {
  width: 80%;
}
</style>
