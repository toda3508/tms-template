<template>
  <el-container class="{{name}}" direction="vertical">
    <allHeader :authorityMap="authorityMap"></allHeader>
    <!-- 主体表格 -->
    <el-main class='mainbody'>
      <allTable></allTable>
    </el-main>
  </el-container>
</template>
<script lang="ts">
type obj = {
  [key: string]: any;
};
import { Component, Watch, Vue } from "vue-property-decorator";

import { AuthorityManager } from "tms-component";
{{#if_eq isSimple false}}
import SelectList from "@/class/paramsItem/SelectList";
import DataHelper from "@/class/DataHelper";   
{{/if_eq}}

import allHeader from "./header.vue";
import allTable from "./table.vue";

@Component({
  name: "all-main",
  components: {
    allHeader,
    allTable
  }
})
export default class AllMain extends Vue {
  private authorityMap: obj = {};

  created() {
    // 权限
    this.authorityMap =
      AuthorityManager.getAuthorityMap(process.env.VUE_APP_ID) || {};
    window.addEventListener("message", e => {
      if (e.data.type == "authority") {
        this.authorityMap =
          AuthorityManager.getAuthorityMap(process.env.VUE_APP_ID) || {};
      }
    });
  }

}
</script>
<style scope lang="scss">
</style>