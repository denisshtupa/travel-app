
import React, { createContext, useReducer, FC } from 'react';
import AppReducer from './AppReducer';
import { travels } from './constants';
import { TravelListEnum } from './types';


const contextDefaultValues: any = {
    travels: travels,
    travelsToShow: TravelListEnum.all
}

// Create travel context
export const TravelContext = createContext(contextDefaultValues);

// Provider component 
const TravelProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, contextDefaultValues);

    //Actions
    function changeTravelType(travelType: TravelListEnum) {
        dispatch({
            type: 'TRAVEL_TYPE',
            travelType: travelType
        });
    }

    return(<TravelContext.Provider value={{
        travels: state.travels,
        travelsToShow: state.travelsToShow,
        changeTravelType
    }}>
        {children}
    </TravelContext.Provider>)
}

export default TravelProvider;