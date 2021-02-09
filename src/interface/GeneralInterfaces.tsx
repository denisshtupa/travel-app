export interface ITravel {
    idKey: number,
    name: string,
    city: string,
    country: string,
    isDone: boolean    // true if travel is done, false if it is a planned travel
}