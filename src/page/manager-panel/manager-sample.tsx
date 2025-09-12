import { Button, Collapse, Modal } from 'antd';
import { useState } from 'react';
import { LanguageDataDictionary } from 'src/service';
import styled from 'styled-components';
import {
    ArtFinishMap,
    AttributeList,
    RegionMap,
    CondenseTolerantMap,
    DyeIndexMap,
    ExtraAttributeList,
    FinishMap,
    frameList,
    FramePositionMap,
    getBackgroundTypeList,
    getFoilList,
    IconList,
    IconTypeList,
    PatternList,
    PendulumSizeList,
    PresetNameStyleMap,
    StickerList,
    TotalIconTypeMap,
} from 'src/model';
import { FileTextOutlined } from '@ant-design/icons';
import { CopiableCode, StyledMono } from 'src/component';
import { FlagPresentationList } from '../common';

const { Panel } = Collapse;
const StyledToggleButton = styled.div`
    font-weight: normal;
    letter-spacing: -0.75px;
    font-size: var(--fs-lg);
`;
const StyledManagerSample = styled(Modal)`
    .ant-modal-close-x {
        display: none;
    }
    .download-button {
        text-align: center;
        margin: var(--spacing-sm) 0;
        .ant-btn {
            background: var(--main-primary);
            border-color: var(--main-active);
            &:hover {
                background: var(--sub-primary);
            }
        }
    }
    .option-container {
        width: 100%;
        table-layout: fixed;
        background-color: #494949;
        th,
        td {
            border: var(--bw) solid var(--sub-level-4);
            padding: var(--spacing-xs) var(--spacing-sm);
            &:nth-child(1) {
                width: 170px;
            }
            &:nth-child(2) {
                ${StyledMono} {
                    margin-right: var(--spacing-xs);
                }
            }
        }
    }
`;

export type ManagerSample = {
    language: LanguageDataDictionary,
};
export const ManagerSample = ({
    language,
}: ManagerSample) => {
    const [visible, setVisible] = useState(false);

    return <>
        <StyledToggleButton className="manager-toggle-button" onClick={() => setVisible(true)}>
            {language['manager.header.button.template.label']}&nbsp;<FileTextOutlined />
        </StyledToggleButton>
        <StyledManagerSample
            visible={visible}
            onCancel={() => setVisible(false)}
            okButtonProps={{
                style: {
                    display: 'none',
                },
            }}
            cancelText={language['manager.template.button.cancel.label']}
        >
            <div className="sample-modal-container">
                <div>
                    {language['manager.template.description.line-1']}
                    <br />
                    {language['manager.template.description.line-2']}
                </div>
                <div
                    className="download-button"
                >
                    <a
                        href={process.env.REACT_APP_TEMPLATE_FILE}
                        target="_blank"
                        rel="noreferrer"
                        download
                    >
                        <Button>{language['manager.template.download.label']}</Button>
                    </a>
                </div>
                <Collapse ghost>
                    <Panel
                        key="sample-option"
                        header={<div>
                            {language['manager.template.description.line-3']}
                        </div>}
                    >
                        <table className="option-container">
                            <tbody>
                                <tr>
                                    <th><b>{language['manager.template.header.field.label']}</b></th>
                                    <th><b>{language['manager.template.header.value.label']}</b></th>
                                </tr>
                                {[
                                    {
                                        field: 'Format',
                                        value: <div>
                                            {[
                                                'tcg',
                                                'ocg',
                                            ].map(value => {
                                                return <CopiableCode key={value} data={value}>{value}</CopiableCode>;
                                            })}
                                        </div>
                                    },
                                    {
                                        field: 'Frame',
                                        altField: 'Bottom Frame',
                                        value: <div>
                                            {frameList
                                                .map(({ name }) => <CopiableCode key={name} data={name}>{name}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Attribute',
                                        value: <div>
                                            {[...AttributeList, ...ExtraAttributeList]
                                                .filter(({ isOption }) => isOption)
                                                .map(({ name }) => <CopiableCode key={name} data={name}>{name}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Spell/Trap Icon',
                                        value: <div>
                                            {IconList
                                                .filter(({ isOption }) => isOption)
                                                .map(({ value }) => <CopiableCode key={value} data={value}>{value}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Sticker',
                                        value: <div>
                                            {StickerList
                                                .filter(({ isOption }) => isOption)
                                                .map(({ value }) => <CopiableCode key={value} data={value}>{value}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Foil',
                                        value: <div>
                                            {getFoilList()
                                                .filter(({ isOption }) => isOption)
                                                .map(({ name }) => <CopiableCode key={name} data={name}>{name}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Card Finish',
                                        value: <div>
                                            {Object.values(FinishMap)
                                                .map(({ value }) => <CopiableCode key={value} data={value}>{value}</CopiableCode>)}
                                            <div>{language['manager.template.description.joinable']}</div>
                                        </div>
                                    },
                                    {
                                        field: 'Art Finish',
                                        value: <div>
                                            {Object.values(ArtFinishMap)
                                                .map(({ value }) => <CopiableCode key={value} data={value}>{value}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Star Type',
                                        value: <div>
                                            {[
                                                'number',
                                                'text',
                                            ].map(value => {
                                                return <CopiableCode key={value} data={value}>{value}</CopiableCode>;
                                            })}
                                        </div>
                                    },
                                    {
                                        field: 'Star Alignment',
                                        value: <div>
                                            {[
                                                'left',
                                                'center',
                                                'right',
                                            ].map(value => {
                                                return <CopiableCode key={value} data={value}>{value}</CopiableCode>;
                                            })}
                                        </div>
                                    },
                                    {
                                        field: 'Card Icon Type',
                                        value: <div>
                                            {IconTypeList
                                                .filter(({ isOption }) => isOption)
                                                .map(({ value }) => <CopiableCode key={value} data={value}>{value}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Background Type',
                                        value: <div>
                                            {getBackgroundTypeList()
                                                .map(({ value }) => <CopiableCode key={value} data={value}>{value}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Condense Rate',
                                        value: <div>
                                            {Object.keys(CondenseTolerantMap)
                                                .map(value => <CopiableCode key={value} data={value}>{value}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Name Style Type',
                                        value: <div>
                                            {[
                                                'predefined',
                                                'custom',
                                            ].map(value => {
                                                return <CopiableCode key={value} data={value}>{value}</CopiableCode>;
                                            })}
                                        </div>
                                    },
                                    {
                                        field: 'Name Style - Font',
                                        value: <div>
                                            <CopiableCode data={'Arial'}>Arial</CopiableCode>
                                        </div>,
                                    },
                                    {
                                        field: 'Name Style - Preset',
                                        value: <div>
                                            {Object.keys(PresetNameStyleMap)
                                                .map(value => <CopiableCode key={value} data={value}>{value}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Name Style - Pattern',
                                        value: <div>
                                            {PatternList
                                                .filter(({ isOption }) => isOption)
                                                .map(({ key }) => <CopiableCode key={key} data={key}>{key}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Pendulum Size',
                                        value: <div>
                                            {PendulumSizeList
                                                .map(({ key }) => <CopiableCode key={key} data={key}>{key}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Other Finish - Attribute',
                                        value: <div>
                                            {Object.values(ArtFinishMap)
                                                .map(({ value }) => <CopiableCode key={value} data={value}>{value}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Other Finish - Background',
                                        value: <div>
                                            {Object.values(ArtFinishMap)
                                                .map(({ value }) => <CopiableCode key={value} data={value}>{value}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Other Finish - Icon',
                                        value: <div>
                                            {Object.values(ArtFinishMap)
                                                .map(({ value }) => <CopiableCode key={value} data={value}>{value}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Other Finish - Sticker',
                                        value: <div>
                                            {Object.values(ArtFinishMap)
                                                .map(({ value }) => <CopiableCode key={value} data={value}>{value}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Region',
                                        value: <div>
                                            {Object.values(RegionMap)
                                                .map(({ key }) => <CopiableCode key={key} data={key}>{key}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Star List',
                                        value: <div>
                                            <div>{language['manager.template.description.star-list']}</div>
                                            {Object
                                                .values(TotalIconTypeMap)
                                                .filter(({ isMixable }) => isMixable)
                                                .map(({ value }) => <CopiableCode key={value} data={value}>{value}</CopiableCode>)}
                                        </div>
                                    },
                                    {
                                        field: 'Dye List',
                                        value: <div>
                                            <div>{language['manager.template.description.dye-list']}</div>
                                            <ul>
                                                {Object
                                                    .entries(DyeIndexMap)
                                                    .sort((l, r) => l[1] - r[1])
                                                    .map(([key]) => <li key={key}>{language[FramePositionMap[key]?.labelKey ?? '']}</li>)}
                                            </ul>
                                        </div>
                                    },
                                    {
                                        field: 'Flag',
                                        value: <div>
                                            <div>{language['manager.template.description.flag']}</div>
                                            {FlagPresentationList
                                                .map(({ sampleDisplay, index }) => <div key={index}>{sampleDisplay(language)}</div>)}
                                        </div>
                                    },
                                ].map(({
                                    field,
                                    altField,
                                    value,
                                }) => {
                                    return <tr key={field}>
                                        <td>
                                            <StyledMono>{field}</StyledMono>
                                            {altField && <><br /><StyledMono>{altField}</StyledMono></>}
                                        </td>
                                        <td>{value}</td>
                                    </tr>;
                                })}
                            </tbody>
                        </table>
                    </Panel>
                </Collapse>
            </div>
        </StyledManagerSample>
    </>;
};