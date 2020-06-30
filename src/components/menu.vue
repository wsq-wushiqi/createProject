<template>
  <div>
    <div class="logo-image">
      <!-- <img src="../assets/logo1.png" style="width: 123px; height:50px; margin:4px 5px 2px 5px;"> -->
      <el-image
        style="width: 100%; height:50px; margin:4px 5px 2px 5px;"
        :src="require('../assets/logo1.png')"
      />
    </div>
    <el-menu>
      <!-- <fragment> -->
        <template v-for="item in menuList">
          <div v-if="item != null" :key="item.url">
            <el-submenu v-if="item.childMenuInfoTreeSet && item.childMenuInfoTreeSet.length > 0" :key="item.url" :index="item.url.toString()" :title="item.menuName">
              <template slot="title">
                <!-- <i :class="item.iconcls.toString()" class="iconSize" /> -->
                <span slot="title">{{ item.menuName }}</span>
              </template>
              <el-menu-item v-for="val in item.childMenuInfoTreeSet" :key="val.title" :index="val.url.toString()" :title="val.menuName">
                <!-- <i :class="val.iconcls.toString()" class="iconSize" /> -->
                <span slot="title">{{ val.menuName }}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :key="item.url" :index="item.url.toString()" :title="item.menuName">
              <!-- <i :class="item.iconcls" class="iconSize" /> -->
              <span slot="title">{{ item.menuName }}</span>
            </el-menu-item>
          </div>
        </template>
      <!-- </fragment> -->
    </el-menu>
  </div>
</template>

<script>
import { menu } from '../utils/api'
export default {
  name: 'Menu',
  data() {
    return {
      menuList: []
    }
  },
  mounted() {
    menu().then(response => {
      console.log(response);
      if (response.flag === 'success') {
        this.menuList = response.data.menuList
        
      }
    })
  }
}
</script>

<style scoped>
.logo-image {
  padding: 0;
}
</style>