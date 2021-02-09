import React, { useContext } from 'react';
import { TravelContext } from '../context/GlobalState';
import { Button } from 'react-bootstrap';

export const Travel = ({travel}: any) => {

    const {markTravelAsDone} = useContext(TravelContext);
    const {markTravelAsPlanned} = useContext(TravelContext);

    
    return(
       <>
            <tr key={travel.idKey}>
                <td>{travel.name}</td>
                <td>{travel.city}</td>
                <td>{travel.country}</td>
                {travel.isDone ? 
                    (<td><Button variant="info" onClick={() => markTravelAsPlanned(travel)}>Mark as planned</Button></td>) : 
                    (<td><Button variant="success" onClick={() => markTravelAsDone(travel)}>Mark as done</Button></td>)}
            </tr>
       </>
    )
}
