<template>
  <div id='indexpage'>
    <el-container>
      <el-header class='hd'>
        <el-breadcrumb separator="/" class='bread'>
          <el-breadcrumb-item class='bread-top'>TMS</el-breadcrumb-item>
          <el-breadcrumb-item class='bread-top'>Test</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      
      <test/>

    </el-container>
  </div>
</template>

<script lang="ts">
  // @ is an alias to /src
  import {
    Component,
    Vue
  } from 'vue-property-decorator';
  import test from "@/components/test/index.vue";

  @Component({

    components: {
      test
    },
  })
  export default class Home extends Vue {}
</script>

<style scoped lang="scss">
  #indexpage {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; // text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    height: 100%;
  }

  #indexpage>section {
    height: 100%;
  }
</style>