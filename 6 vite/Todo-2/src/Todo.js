import { addBtnHandler } from "./app/handler";
import { addBtn } from "./app/selectors";

class Todo {


    listener(){
        addBtn.addEventListener("click",addBtnHandler)
    }


    init(){

        console.log("TOdo app start");

        this.listener();
    }

}

export default Todo;