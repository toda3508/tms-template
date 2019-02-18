<template>
    <tms-search-group>
        <tms-search-inputs flex="8">
            <div class="fl" v-if="setAuthority(authorityMap,'date')">
                <el-date-picker style="width:300px;" v-model="date" type="daterange" value-format='yyyy-MM-dd' start-placeholder="开始日期" end-placeholder="结束日期"
                    unlink-panels>
                </el-date-picker>
            </div>
   
        </tms-search-inputs>
        <tms-search-button btnPlace="right" flex="2">
          <el-button v-if="setAuthority(authorityMap,'search')" icon="el-icon-search" type="primary" @click="collectParams">搜索</el-button>
          {{#if_eq isSimple false}}
            <el-button v-if="setAuthority(authorityMap,'empty')" type="primary" plain @click="empty">清空</el-button>
          {{/if_eq}}
            {{#if_eq isSimple true}}
            <el-button v-if="setAuthority(authorityMap,'empty')" type="primary" plain >清空</el-button>
          {{/if_eq}}
         
        </tms-search-button>
    </tms-search-group>

</template>

<script lang="ts">
type obj = {
  [key: string]: any;
};
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { AuthorityManager,EventBus } from "tms-component";
{{#if_eq isSimple false}}
import SelectList from "@/class/paramsItem/SelectList";
import SearchParams from "@/class/paramsItem/SearchParams";
{{/if_eq}}


@Component({
  name: "all-header",
  components: {}
})
export default class AllHeader extends Vue {
  @Prop({
    default: {}
  })
  authorityMap!: obj;

  private date: string[] = [];

{{#if_eq isSimple false}}
  private searchData: obj = SearchParams;
{{/if_eq}}

{{#if_eq isSimple true}}
  private searchData: obj = {};
{{/if_eq}}


{{#if_eq isSimple false}}
    get newSearchData() {
    let _searchData = { ...this.searchData };
    for (let key in _searchData) {
      if (!_searchData[key]) delete _searchData[key];
    }

    return _searchData;
  }
{{/if_eq}}


  setAuthority(name) {
    return AuthorityManager.setAuthority(this.authorityMap, name);
  }


{{#if_eq isSimple false}}
 collectParams() {
    EventBus.$emit("sendParams", this.newSearchData, true);
  }

    empty() {
    this.date = [];
    SearchParams.emptyParams();
  }
{{/if_eq}}

{{#if_eq isSimple true}}
 collectParams() {
    EventBus.$emit("sendParams", this.searchData, true);
  }

{{/if_eq}}
 


}
</script>