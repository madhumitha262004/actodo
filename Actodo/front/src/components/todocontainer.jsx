import AddtodoForm from "./addtodoform"
import TodoList from "./TodoList"
import { useState } from "react";

function Todocontainer() {
     const [activityArr, SetActivityArr] = useState([
    {
      id: 1,
      activity: "Go for a walk",
    },
    {
        id:2,
        activity:"have a brackfast"
    },
    {
        id:2,
        activity:"have a brackfast"
    }
  ]);
    return (
        <div>
            <div className="flex gap-5 flex-wrap ">
                <AddtodoForm  activityArr={activityArr} SetActivityArr={SetActivityArr} />
                <TodoList activityArr={activityArr} SetActivityArr={SetActivityArr} />
            </div>
        </div>
    )
}

export default Todocontainer