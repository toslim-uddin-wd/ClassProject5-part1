import { TextInput } from "flowbite-react";
import { IoSearch } from "react-icons/io5";

function TaskTableHeader() {
  return (
    <div className=" flex justify-between items-center">
        <h2 className=" text-2xl font-bold text-rose-700">Your Task</h2>
        <div className="max-w-md">
            <TextInput id="email4" type="email" rightIcon={IoSearch} required />
        </div>
    </div>
  )
}

export default TaskTableHeader