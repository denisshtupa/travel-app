import React, { useContext } from "react";
import { Button } from 'react-bootstrap';
import { TravelContext } from "../context/GlobalState";
import { TravelListEnum } from "../context/types";

export const TopButtons = () => {
    const {changeTravelType} = useContext(TravelContext);

    return(
       <>
            <Button variant="success" className="first-button" onClick={() => changeTravelType(TravelListEnum.done)}>Show done travels</Button>

            <Button variant="primary" onClick={() => changeTravelType(TravelListEnum.planned)}>Show planned travels</Button>
       </>
    )
}
