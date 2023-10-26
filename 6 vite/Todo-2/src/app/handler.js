import Task from "../Task";
import { textInput } from "./selectors";

const taskLists =new Task();


export const addBtnHandler = () => {
    taskLists.addTask(textInput.value)
    console.log(taskLists);
    taskLists.taskRender(taskLists.getTasks())
}