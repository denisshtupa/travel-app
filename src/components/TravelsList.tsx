import React, { useContext } from 'react';
import { TravelContext } from '../context/GlobalState';
import { ITravel } from '../interface/GeneralInterfaces';
import { Travel } from './Travel';


export const TravelsList = () => {

    const { travels } = useContext(TravelContext);

    return(
       <>
            {travels.map((t:ITravel) => (<Travel travel={t} key={t.idKey} />))}
       </>
    )
}
