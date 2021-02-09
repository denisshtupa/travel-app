import { useContext } from "react";
import { TravelContext } from "../context/GlobalState";


export const TravelOverview = () => {

    const { travels } = useContext(TravelContext);

    return(
       <div>
           <div>
                {travels.map((travel) => (
                    <div key={travel.idKey}>{travel.name}</div>
                ))}
            </div>
       </div>
    )
}
