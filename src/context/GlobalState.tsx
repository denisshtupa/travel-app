
import React, { createContext, useState, FC } from 'react';
import { ITravel } from '../interface/GeneralInterfaces';
import { travels } from './constants';
import { TravelContextState } from './types';


const contextDefaultValues: TravelContextState = {
    travels: travels,
    markAsDone: () => {}
}

// Create travel context
export const TravelContext = createContext<TravelContextState>(contextDefaultValues);

// Provider component 
const TravelProvider: FC = ({ children }) => {
    const [travels, setTravels] = useState<ITravel[]>(contextDefaultValues.travels);

    const markAsDone = (newTravel: ITravel) => {
        setTravels((travels) => [...travels, newTravel])
    }

    return(<TravelContext.Provider value={{
        travels, markAsDone
    }}>
        {children}
    </TravelContext.Provider>)
}

export default TravelProvider;