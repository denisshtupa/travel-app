
import React, { createContext, useReducer, FC } from 'react';
import { ITravel } from '../interface/GeneralInterfaces';
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

    function markTravelAsDone(travel: ITravel) {
        dispatch({
            type: 'TRAVEL_DONE',
            travel: travel
        })
    }

    function markTravelAsPlanned(travel: ITravel) {
        dispatch({
            type: 'TRAVEL_PLANNED',
            travel: travel
        })
    }

    // end of Actions

    return(<TravelContext.Provider value={{
        travels: state.travels,
        travelsToShow: state.travelsToShow,
        changeTravelType,
        markTravelAsDone,
        markTravelAsPlanned
    }}>
        {children}
    </TravelContext.Provider>)
}

export default TravelProvider;