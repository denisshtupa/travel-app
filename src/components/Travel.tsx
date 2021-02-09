import React from 'react';

export const Travel = ({travel}: any) => {

    return(
       <>
            <tr key={travel.idKey}>
                <td>{travel.name}</td>
                <td>{travel.city}</td>
                <td>{travel.country}</td>
                <td>action to add</td>
            </tr>
       </>
    )
}
