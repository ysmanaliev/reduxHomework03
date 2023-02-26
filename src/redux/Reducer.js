





export default function reducerFunc(

  
    state = {
      count: 0
    },
      action
    ) {
      switch(action.type) {
        case "INCREMENT":
        return {
          
            ...state,
            count: state.count < 0 ? 0 : state.count + 1
          
          }
        case 'DECREMENT':
        return {
          ...state,
          count: state.count > 0 ? state.count - 1 : 0
        }
        default:
          return state
          
        
      }
      
    }