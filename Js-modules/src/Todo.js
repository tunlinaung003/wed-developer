import inputForm from "./inputForm.js";
import lists from "./list.js";
import Title from "./title.js";

class Todo {

    basicUiRender(){
        console.log("Todo app Start");
        const title = new Title("Todo App");

        app.append(title);
        
        app.append(inputForm());

        app.append(lists())
    }

    init(){

   this.basicUiRender()

    }

}
export default Todo;