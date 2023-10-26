import { addTask, getTask, taskRender } from "../task"
import { textInput } from "./selector"

export const addBtnHandler = () => {
    // console.log("add btn click");
    addTask(textInput.value);
    // taskRender(getTask());
    textInput.value = null;
}