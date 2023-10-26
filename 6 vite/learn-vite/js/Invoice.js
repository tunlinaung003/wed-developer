import { products } from "./data";
import { handleAddRecordForm, handleNewItemFrom } from "./handler";
import { itemRender } from "./items";
import { productRender } from "./product";
import { newItem, newRecord } from "./selectors";

class Invoice {
    
    initialRender(){
        // 1. product render
        productRender(products)
        itemRender(products)

    }

    listener(){
        //2.event listen
        newRecord.addEventListener("submit",handleAddRecordForm)
        newItem.addEventListener("submit",handleNewItemFrom);
    }

    init(){
        console.log("invoice app start");
        this.initialRender()
        this.listener()
      }
}

export default Invoice;