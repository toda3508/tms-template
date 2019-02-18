
import SelectItem from "@/class/SelectItem";

type obj = {
    [key: string]: any;
};

class SelectList {

    list: obj[] = [
        new SelectItem("Label", "Value"),

    ];

    constructor() {

    };
}

export default new SelectList();