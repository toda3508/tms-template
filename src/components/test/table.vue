<template>
  <tms-table 
    height="100%" 
    :tableData="tableData"
    :loading="isLoading" 
    :curPage="pageNo" 
    :pageSize="pageSize"
    :total="total"
    @sizeChange="sizeChange"
    @currentChange="currentChange">
    <el-table-column slot="column" v-for="(item,i) in  tableHeader" v-bind="item" :key="i">
    </el-table-column>
  </tms-table>
</template>
<script lang="ts">
type obj = {
  [key: string]: any;
};
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { AuthorityManager, MessageBox,EventBus } from "tms-component";
{{#if_eq isSimple false}}
import DataHelper from "@/class/DataHelper";
{{/if_eq}}

import TableItem from "@/class/paramsItem/TableItem";

@Component({
  name: "all-table",
  components: {}
})
export default class AllTable extends Vue {
  private isLoading: boolean = false;
  private pageNo: number = 1;
  private pageSize: number = 10;
  private total: number = 0;
  private paramsData: obj = {};
  private tableHeader: obj[] = [
    {
      label: "表头",
      prop: "params"
    },
    {
      label: "表头2",
      prop: "params"
    },
    {
      label: "表头3",
      prop: "params"
    },
    {
      label: "表头4",
      prop: "params"
    },
    {
      label: "表头5",
      prop: "params"
    }
  ];
  private tableData: obj[] = [];

  created() {
    this.search(this.paramsData, true);
  }
  mounted() {
    EventBus.$on("sendParams", (params, isLoading) => {
      this.paramsData = params;
      this.search(this.paramsData, isLoading);
    });
  }

  search(params, isLoading) {
    this.tableData = [];
    this.isLoading = isLoading;
    setTimeout(() => {
      this.tableData.push(new TableItem("test"));
      this.tableData.push(new TableItem("test2"));
      this.tableData.push(new TableItem("test3"));
      this.tableData.push(new TableItem("test4"));
      this.tableData.push(new TableItem("test5"));
      this.isLoading = false;
    }, 1000);
  }

  currentChange(page) {
    this.pageNo = page;
    this.search(this.paramsData, true);
  }

  sizeChange(size) {
    this.pageSize = size;
    this.search(this.paramsData, true);
  }
}
</script>