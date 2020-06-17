<template>
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
</template>

<script>
import { encrypt, decrypt } from '../utils/aes'
import { login } from '../utils/api'

export default {
  data() {
    return {
      username: 'ppu_wbzxryA',
      password: 'Dm123456'
    }
  },
  methods: {
    login: function() {
      const data = {
        username: encrypt(this.username),
        password: encrypt(this.password)
      }
      login(data).then(response => {
        console.log(response.data);
      })
    }
  }
}
</script>

<style scoped>
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
