import { ITravel } from "../interface/GeneralInterfaces";
export enum TravelListEnum {
    all = 1,
    done = 2,
    planned = 3
}

export type TravelContextState = {
    travels: ITravel[],
    travelsToShow: TravelListEnum,
    changeTravelType: () => {}
}