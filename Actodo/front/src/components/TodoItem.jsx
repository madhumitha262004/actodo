function TodoItem(props){
    const activityArr =props.activityArr
    const SetActivityArr =props.SetActivityArr
  
    function handleDelete(deleteid){
        var temparr= activityArr. filter(function(item){
            if(item.id===deleteid){
                return false
            }
            else{
                return true
            }
        })
        SetActivityArr(temparr)
    }
    return(
        <div className="flex justify-between">
                    <p>{props.index+1}.{props.activity}</p>
        <button className="text-red-600" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
    )
}
export default TodoItem