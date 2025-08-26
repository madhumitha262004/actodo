import { useState } from "react"

function AddtodoForm(props) {
    const activityArr = props.activityArr
  const SetActivityArr=props.SetActivityArr
  const[newactivityArr,setnewactivityArr]=useState("")

  function handleChange(evt){
    setnewactivityArr(evt.target.value)

  }
  function addactivity(){
    SetActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivityArr}])
    setnewactivityArr("")
  }
    return (

        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input value={newactivityArr} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity ?" />
                <button onClick={addactivity} className="bg-black text-white p-1 border border-black">Add</button>
            </div>
        </div>
    )
}
export default AddtodoForm