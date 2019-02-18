import SelectItem from "@/class/SelectItem";
import SelectList from "@/class/paramsItem/SelectList";
import { AjaxManager, MessageBox, DateUtil} from "tms-component";
import Vue from 'vue';
const api = AjaxManager.fetchers(JSON.parse(process.env.VUE_APP_API));


function initSomething(list) {

    //dosomething

}

// blob下载默认方法
function downFilewithBlob(blob) {
    if (typeof window.navigator.msSaveBlob !== "undefined") {
        window.navigator.msSaveBlob(blob);
    } else {
        let URL = window.URL;
        let objectUrl = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = objectUrl;
        a.download = `excel名字-${DateUtil.dateFormat(new Date())}.xlsx`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
}

class DataHelper {

    constructor() {

    }

    // 初始化接口数据
    static init() {

        let promise0 = AjaxManager.ajaxPro("url", api);

        Promise.all([promise0])
            .then((values) => {
                initSomething(values[0]);
            })
    }

    // 默认前端控制导出下载excel
    static exportExeclFiles(params) {
        AjaxManager.ajaxPro("url", api, {
            type: "post",
            responseType: "blob",
            data: params
        }).then(res => {
            let blob = new Blob([res.data], {
                type: "application/octet-stream"
            });
            let reader = new FileReader()
            reader.onload = (e: any) => {

                let data: any = {};
                try {
                    data = JSON.parse(e.target.result)
                } catch (e) {
                    data.code = 200;
                }
                if (data.code === 200) {
                    downFilewithBlob(blob)
                } else {
                    MessageBox.showMessage(Vue.prototype, data.msg, "error");
                }

            }
            reader.readAsText(blob)

        });
    }


}

export default DataHelper;