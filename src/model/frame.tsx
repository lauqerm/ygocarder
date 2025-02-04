export type FrameInfo = {
    name: string,
    nameKey: string,
    edition: 'normal' | 'extendend',
    labelColor: string,
    labelBackgroundColor?: string,
    labelBackgroundColorList?: string[],
    labelBackgroundImage?: string,
    sortWeight: number,
};
export const FrameInfoMap: Record<string, FrameInfo> = {
    'normal': {
        name: 'normal',
        nameKey: 'input.frame.normal',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#c49c5e',
        sortWeight: 100,
    },
    'effect': {
        name: 'effect',
        nameKey: 'input.frame.effect',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#b96c49',
        sortWeight: 90,
    },
    'fusion': {
        name: 'fusion',
        nameKey: 'input.frame.fusion',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#8948a4',
        sortWeight: 80,
    },
    'synchro': {
        name: 'synchro',
        nameKey: 'input.frame.synchro',
        labelColor: '#000',
        edition: 'normal',
        labelBackgroundColor: '#efefef',
        sortWeight: 70,
    },
    'xyz': {
        name: 'xyz',
        nameKey: 'input.frame.xyz',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#000000',
        sortWeight: 60,
    },
    'link': {
        name: 'link',
        nameKey: 'input.frame.link',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#0c8ac6',
        sortWeight: 50,
    },
    'ritual': {
        name: 'ritual',
        nameKey: 'input.frame.ritual',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#5e85c9',
        sortWeight: 85,
    },
    'spell': {
        name: 'spell',
        nameKey: 'input.frame.spell',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#1b8f83',
        sortWeight: 30,
    },
    'trap': {
        name: 'trap',
        nameKey: 'input.frame.trap',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#c32a8c',
        sortWeight: 25,
    },
    'token': {
        name: 'token',
        nameKey: 'input.frame.token',
        labelColor: '#ffffff',
        edition: 'normal',
        labelBackgroundColor: '#6f6c6b',
        sortWeight: 1,
    },
    'dark-synchro': {
        name: 'dark-synchro',
        nameKey: 'input.frame.dark-synchro',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#4d4543',
        sortWeight: 15,
    },
    'obelisk': {
        name: 'obelisk',
        nameKey: 'input.frame.obelisk',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#515eb0',
        sortWeight: 10,
    },
    'osiris': {
        name: 'osiris',
        nameKey: 'input.frame.osiris',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#bd5044',
        sortWeight: 9,
    },
    'ra': {
        name: 'ra',
        nameKey: 'input.frame.ra',
        labelColor: '#000',
        edition: 'extendend',
        labelBackgroundColor: '#b9ad34',
        sortWeight: 8,
    },
    'raviel': {
        name: 'raviel',
        nameKey: 'input.frame.raviel',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#313c5f',
        sortWeight: 7,
    },
    'uria': {
        name: 'uria',
        nameKey: 'input.frame.uria',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#623320',
        sortWeight: 6,
    },
    'hamon': {
        name: 'hamon',
        nameKey: 'input.frame.hamon',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#534a19',
        sortWeight: 5,
    },
    'lg-dragon': {
        name: 'lg-dragon',
        nameKey: 'input.frame.lg-dragon',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#4e84a4',
        sortWeight: 3,
    },
    'speed-skill': {
        name: 'speed-skill',
        nameKey: 'input.frame.speed-skill',
        labelColor: '#ffffff',
        edition: 'extendend',
        labelBackgroundColor: '#199cd5',
        sortWeight: 2,
    },
    'zarc': {
        name: 'zarc',
        nameKey: 'input.frame.zarc',
        labelColor: '#000',
        edition: 'extendend',
        labelBackgroundColorList: [
            'rgba(185,108,73,1)',
            'rgba(137,72,164,1)',
            'rgba(239,239,239,1)',
            'rgba(0,0,0,1)',
        ],
        labelBackgroundImage: `linear-gradient(90deg, ${[
            'rgba(185,108,73,1) 23%',
            'rgba(137,72,164,1) 27%',
            'rgba(137,72,164,1) 48%',
            'rgba(239,239,239,1) 52%',
            'rgba(239,239,239,1) 73%',
            'rgba(0,0,0,1) 77%',
        ].join(', ')})`,
        sortWeight: 4,
    },
};
export const frameList = Object.values(FrameInfoMap);