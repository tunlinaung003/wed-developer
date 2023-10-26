import { createItem } from "./items";
import { calculateTotal, createRecord, updateRecord } from "./record";
import { newItem, newRecord, recordRows } from "./selectors";

export const handleAddRecordForm = (e) => {
    e.preventDefault();

    const formData = new FormData(newRecord);

    const isExistedRow = document.querySelector(
        `[product-id='${productId}']`
      );

      if(isExistedRow){
        updateRecord(formData.get("productSelect"),formData.get("quantity"))
    }else{
        recordRows.append(
            createRecord(formData.get("productSelect"),formData.get("quantity"))
        );
        
    }
    
    
    newRecord.reset();
    calculateTotal();
  

}


export const handleNewItemFrom = ()=> {
    e.preventDefault()
    const formData = new FormData(newItem);
    createItem(formData.get("newItemName"),formData.get("newItemPrice"))
}