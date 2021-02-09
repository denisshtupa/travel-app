import React from "react"

import { Button } from 'react-bootstrap';

export const TopButtons = () => {

    return(
       <>
            <Button variant="success" className="first-button">Show done travels</Button>

            <Button variant="primary">Show planned travels</Button>
       </>
    )
}
