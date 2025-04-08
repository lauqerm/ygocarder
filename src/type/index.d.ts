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
    export function GradientPicker(props: GradientPicker): JSX.Element;

    export type AnglePicker = {
        angle: number;
        setAngle: (nextAngle: number) => void;
        size?: number;
        snap?: number;
    };
    export function AnglePicker(props: AnglePicker): JSX.Element;
}