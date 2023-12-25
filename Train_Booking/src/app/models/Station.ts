export interface IStation{
    stationID: number;
    stationName: string;
    stationCode: string;
}

export interface IStationResponse{
    message: string;
    result: Boolean;
    data:any;
}