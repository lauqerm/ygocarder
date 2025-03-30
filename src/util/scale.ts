import { CoordinateData } from 'src/model';

export const scaleCoordinateData = (coordinateData: CoordinateData, scale: number): CoordinateData => {
    return {
        ...coordinateData,
        trueBaseline: coordinateData.trueBaseline * scale,
        trueEdge: coordinateData.trueEdge * scale,
        trueWidth: coordinateData.trueWidth * scale,
    };
};

export const scaleDrawCoordinate = (coordinate: [number, number, number, number], scale: number) => {
    return coordinate.map(value => value * scale) as [number, number, number, number];
};