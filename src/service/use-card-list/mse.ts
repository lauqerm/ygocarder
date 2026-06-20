import { notification } from 'antd';
import { Card } from 'src/model';
import { getMseImage, stringifyMseData, ygoCarderToMseData } from 'src/util';
import { getLanguage } from '../use-i18n';

export const cardListToMse = async (cardList: Card[]) => {
    const imageList: { blob: Blob, name: string }[] = [];
    const stringifiedCardList: string[] = [];
    for (let cnt = 0; cnt < cardList.length; cnt++) {
        const card = cardList[cnt];
        const code = `${cnt}`;
        const imageName = `image${code}`;
        stringifiedCardList.push(stringifyMseData(ygoCarderToMseData(card, {
            imageName,
        }).result));
        imageList.push(await getMseImage(card, imageName));
    }
    const resultList = [
        'mse_version: 2.0.1',
        'game: yugioh',
        'stylesheet: series10',
        'set_info:',
        '	title: "Path of Blind Gods"',
        '	gods_have_effects: false',
        'styling:',
        '	yugioh-series10:',
        '		mse_version: 2.0.1',
        '		language: "english"',
        '		template_style: "proxy-like"',
        '		name_color_override: false',
        '		name_color: rgb(254,254,254)',
        '		shadow_override: false',
        '		shadow_color: rgb(1,1,1)',
        '		copyright_color_override: false',
        '		copyright_color: rgb(254,254,254)',
        '		foil_texture: true',
        '		foil_texture_override: false',
        '		custom_foil: "defaultfoil"',
        '		image_frame: false',
        '		extended_artwork: "no"',
        '		lorebox_watermark: false',
        '		custom_watermark: "speedduel"',
        '		rules_alignment: "justified"',
        '		bold_effect_text: false',
        '		large_type: false',
        '		text_size: "small"',
        '		max_line_space: false',
        '		disable_hologram: false',
        '		pendulum_transparency: "true"',
        '		pendulum_size: "default"',
        '		pendulum_text_centering: false',
        '		is_ZARC_card: false',
        '		is_link_card: false',
        stringifiedCardList.map(entry => 'card:\n' + entry).join('\n'),
        'version_control:',
        '	type: none',
        'apprentice_code: ',
    ];
    return {
        error: null,
        set: new Blob([resultList.join('\n')], { type: 'text/plain' }),
        imageList,
    };
};

export const mseDataToDownloadable = async (cardList: Card[]) => {
    const debugMode = false;
    const language = getLanguage();
    const {
        error,
        set,
        imageList,
    } = await cardListToMse(cardList);

    if (error) {
        let errorMessage = '';
        let errorDescription = '';
        switch (error) {
            case 'offline-data': {
                errorMessage = language['error.export.offline-data.message'];
                errorDescription = language['error.export.offline-data.description'];
                break;
            }
        }

        if (errorMessage || errorDescription) {
            notification.error({
                message: errorMessage,
                description: errorDescription,
            });
        }
    }
    const JSZip = (await import('jszip')).default;
    const zipObject = new JSZip();
    zipObject.file('set' + (debugMode ? '.txt' : ''), set);
    imageList.forEach(({ blob, name }) => {
        zipObject.file(name + (debugMode ? '.png' : ''), blob);
    });
    const blob = await zipObject.generateAsync({
        type: 'blob',
    });
    return {
        name: 'convert-result' + (debugMode ? '.zip' : '.mse-set'),
        blob,
        type: 'application/zip',
    };
};