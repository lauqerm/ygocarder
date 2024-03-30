declare module 'react-linear-gradient-picker' {
    export type ColorPoint = {
        color: string,
        opacity?: number,
        id: number,
        offset: string,
    };
    export type InternalColorPoint = ColorPoint & {
        active: boolean,
    };

    export type GradientPicker = {
        palette: ColorPoint[];
        paletteHeight?: number;
        width?: number;
        stopRemovalDrop?: number;
        minStops?: number;
        maxStops?: number;
        children: any;
        flatStyle?: boolean;
        onPaletteChange: (colorList: ColorPoint[]) => void;
        onColorStopSelect?: (stopColor: InternalColorPoint) => void;
    };
    export const GradientPicker = (props: GradientPicker) => JSX.Element;

    export type AnglePicker = {
        angle: any;
        setAngle: any;
        size?: number;
        snap?: number;
    };
    export const AnglePicker = (props: AnglePicker) => JSX.Element;
}