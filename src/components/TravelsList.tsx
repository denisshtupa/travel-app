import React, { useContext } from 'react';
import { TravelContext } from '../context/GlobalState';
import { Travel } from './Travel';


export const TravelsList = () => {

    const { travels } = useContext(TravelContext);

    return(
       <>
            {travels.map(t => (<Travel travel={t} key={t.idKey} />))}

       </>
    )
}
