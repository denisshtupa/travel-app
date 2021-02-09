import { ITravel } from "../interface/GeneralInterfaces";

export type TravelContextState = {
    travels: ITravel[],
    markAsDone: (travel: ITravel) => void
}