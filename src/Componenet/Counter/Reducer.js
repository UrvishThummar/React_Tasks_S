import { INCREMENT, DECREMENT, RESET } from "./Action";


const initialState = {
    count: 0,
};


export  const counterReducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case INCREMENT:
    //         return { ...state, count: state.count + 1 };
    //     case DECREMENT:
    //         return { ...state, count: state.count - 1 };
    //     case RESET:
    //         return { ...state, count: 0 };
    //     default:
    //         return state;
    // }

    if(action.type===INCREMENT){
            return { ...state, count: state.count + 1 };

    }
    else if(action.type===DECREMENT){
        return { ...state, count: state.count - 1 };
    }
    else if(action.type===RESET){
          return { ...state, count: 0 };
    }

      return state;
};


