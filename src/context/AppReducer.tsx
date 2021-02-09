import { ITravel } from "../interface/GeneralInterfaces";
import { travels } from "./constants";
import { TravelListEnum } from "./types";

/* eslint-disable import/no-anonymous-default-export */
export default (state: any, action: any) => {
    
    state.travels = travels;
    switch(action.type) {
        case 'TRAVEL_TYPE':
            let filtered;
            if(action.travelType === TravelListEnum.done){
                filtered = state.travels.filter((x: ITravel) => x.isDone === true) 
            } else if (action.travelType === TravelListEnum.planned) {
                filtered = state.travels.filter((x: ITravel) => x.isDone === false)
            }           
            return {
                ...state,
                travels: filtered
            }

        case 'TRAVEL_DONE':
            state.travels.find((tr: ITravel) => tr.idKey === action.travel.idKey).isDone = true;
            return {
                ...state,
                travels: [...state.travels]
            }

        case 'TRAVEL_PLANNED':
            state.travels.find((tr: ITravel) => tr.idKey === action.travel.idKey).isDone = false;
            return {
                ...state,
                travels: [...state.travels]
            }
            
        default: 
            return state;
    }
}