<template>
  <div id="app">
    {{#if_eq isRoute true}}
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    {{/if_eq}}
    
    {{#unless_eq isRoute true}}
    <page></page>
    {{/unless_eq}}

  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "vue-property-decorator";
  {{#if_eq isSimple false}}
  import DataHelper from "@/class/DataHelper";
  {{/if_eq}}

  import page from "@/views/page.vue";

  @Component({
    components: {
      page
    }
  })
  export default class App extends Vue {
    created() {
      // 初始化请求
      // DataHelper.init();
    }
  }
</script>


<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; // text-align: center;
    color: #2c3e50;
    height: 100%;
  }
</style>