 import data from '../component/Data';
const initialState = {
    item : [data]
};
       
const change = (state = initialState, action) =>{
        switch(action.type){
           case "ADD" :
               const newItem = state.item.filter((elem) =>  elem.id === action.payload )
              return {
                   ...state.item,
                     item : newItem
                    }
        
            default : return state;


         }
        
}

export default change;
