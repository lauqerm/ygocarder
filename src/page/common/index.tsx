import { CopiableCode } from 'src/component';
import { LINK_RATING_ALWAYS_AUTO, LINK_RATING_ALWAYS_SHOW, LINK_RATING_ALWAYS_HIDE, FlagInfoList } from 'src/model';
import { LanguageDataDictionary } from 'src/service';

export type FlagValueDisplay = (language: LanguageDataDictionary, _value: number) => string;
export const FlagPresentationList = [
    {
        ...FlagInfoList[0],
        valueDisplay: ((language: LanguageDataDictionary) => language['input.flag.mix-def-link']) as FlagValueDisplay,
        sampleDisplay: (language: LanguageDataDictionary) => <>
            {language['input.flag.mix-def-link']}:
            <ul>
                <li><CopiableCode data={0}>0</CopiableCode>: {language['manager.template.description.true']}</li>
                <li><CopiableCode data={1}>1</CopiableCode>: {language['manager.template.description.false']}</li>
            </ul>
        </>,
    },
    {
        ...FlagInfoList[2],
        valueDisplay: ((language: LanguageDataDictionary) => language['input.flag.hide-deactivated-link']) as FlagValueDisplay,
        sampleDisplay: (language: LanguageDataDictionary) => <>
            {language['input.flag.hide-deactivated-link']}:
            <ul>
                <li><CopiableCode data={0}>0</CopiableCode>: {language['manager.template.description.true']}</li>
                <li><CopiableCode data={1}>1</CopiableCode>: {language['manager.template.description.false']}</li>
            </ul>
        </>,
    },
    {
        ...FlagInfoList[1],
        valueDisplay: (language: LanguageDataDictionary, value: number) => <>
            {language['input.flag.link-rating-behavior']}: {language[value === 1
                ? 'input.flag.link-rating-behavior.show'
                : 'input.flag.link-rating-behavior.hide']}
        </>,
        sampleDisplay: (language: LanguageDataDictionary) => <>
            {language['input.flag.link-rating-behavior']}:
            <ul>
                <li>
                    <CopiableCode data={LINK_RATING_ALWAYS_AUTO}>
                        {LINK_RATING_ALWAYS_AUTO}
                    </CopiableCode>: {language['input.flag.link-rating-behavior.auto']}
                </li>
                <li>
                    <CopiableCode data={LINK_RATING_ALWAYS_SHOW}>
                        {LINK_RATING_ALWAYS_SHOW}
                    </CopiableCode>: {language['input.flag.link-rating-behavior.show']}
                </li>
                <li>
                    <CopiableCode data={LINK_RATING_ALWAYS_HIDE}>
                        {LINK_RATING_ALWAYS_HIDE}
                    </CopiableCode>: {language['input.flag.link-rating-behavior.hide']}
                </li>
            </ul>
        </>,
    },
];