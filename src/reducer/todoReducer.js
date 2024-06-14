import toast from "react-hot-toast";
const initData={
    list:[]
}
const toDoReducer=(state=initData,action)=>{

    switch(action.type){
        case 'ADD': 
            const {id,data}=action.payload;
            if (data.length > 2) { 
                toast.success("Task Added")
                return {
                  ...state,
                  list: [...state.list, { id, data }],
                };
                
              } else {
                toast.error("Item data must be at least 3 characters long.");
                return state; 
              }
            

            case 'DELETE': 
            const newList=state.list.filter((ele)=>ele.id != action.id)
            toast.success("Task Remove")
            return{
                ...state,
                list:newList
            }
            case 'REMOVE':
            toast.success("All Task Remove") 
            return{
                ...state,
                list:[]
            }
            
            default : return state
       
    }

}

export default toDoReducer;