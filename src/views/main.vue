<template>
  <div class="main-container">
    <el-container>
      <el-aside class="page-aside" width="260px">
        <Menu />
      </el-aside>
      <el-container>
        <el-header height="60px" class="page-header">
          <el-button class="logout-button" @click="logout">退出</el-button>
        </el-header>
        <el-main class="page-main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { logout } from '../utils/api'
import { Menu } from '../components/index'
export default {
  components: {
    Menu
  },
  data() {
    return {

    }
  },
  mounted() {
    
  },
  methods: {
    logout: function() {
      logout({ _csrf: sessionStorage.token }).then(response => {
        console.log(response);
        if (response.flag === 'success') {
          this.$router.push({ path: '/' })
          sessionStorage.removeItem('token')
        }
      })
    }
  }
}
</script>

<style scoped>
.main-container {
  height: calc(100vh);
  width: 100%;
  background-color: antiquewhite;
  margin: 0;
  padding: 0;
}
.page-header {
  text-align: right;
  /* width: 100%; */
  padding: 0;
  background-color: rgb(229, 234, 235);
}
.page-aside {
  background-color: rgb(255, 255, 255);
  /* height: calc(100vh - 60px); */
  height: calc(100vh);
}
.page-main {
  background-color: rgb(201, 223, 224);
}
</style>