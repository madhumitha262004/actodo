
import TodoItem from "./TodoItem";

function TodoList(props) {
  const activityArr = props.activityArr
  const SetActivityArr=props.SetActivityArr
  return (
    <div className="bg-[#BDB4EA] border rounded p-2 flex-grow">
      <h1 className="font-medium text-2xl">Today's Activity</h1>
        
        {
            activityArr.length===0?<p>You haven't added anything yet</p>:""
        }
        {
            activityArr.map(function(item,index){
                return <TodoItem id={item.id} activity ={item.activity} index={index} activityArr={activityArr} SetActivityArr={SetActivityArr} />
            })
        }

    </div>
  )

}

export default TodoList;
