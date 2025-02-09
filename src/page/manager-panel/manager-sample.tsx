import { Button, Collapse, Modal } from 'antd';
import { useState } from 'react';
import { CheckOutlined, SnippetsOutlined } from '@ant-design/icons';
import { LanguageDataDictionary } from 'src/service';
import styled from 'styled-components';
import { StyledCode } from 'src/component/atom';
import {
    ArtFinishMap,
    AttributeList,
    CondenseTolerantMap,
    FinishMap,
    frameList,
    getBackgroundTypeList,
    getFoilList,
    IconList,
    IconTypeList,
    PatternList,
    PresetNameStyleMap,
    StickerList,
} from 'src/model';
import copy from 'copy-to-clipboard';

const { Panel } = Collapse;
const StyledMono = styled(StyledCode)`
    display: inline-block;
    font-size: var(--fs-sm);
    border-color: var(--sub-level-1);
    line-height: 1;
    cursor: pointer;
    position: relative;
    .copiable-overlay {
        align-items: center;
        background-color: var(--color-contrast);
        font-size: var(--fs);
        font-weight: bold;
        border-radius: var(--br);
        color: var(--color);
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 999;
    }
`;
const StyledManagerSample = styled(Modal)`
    .ant-modal-close-x {
        display: none;
    }
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
        padding: 0;
        padding-left: 24px;
        .ant-collapse-arrow {
            top: 5px;
            left: 0;
        }
    }
    .ant-collapse-content-box {
        padding: var(--spacing-sm) 0;
    }
    .download-button {
        text-align: center;
        margin: var(--spacing-sm) 0;
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
type CopiableCode = {
    data: string,
    children?: React.ReactNode,
}
const CopiableCode = ({
    data,
    children,
}: CopiableCode) => {
    const [showFlashOverlay, setFlashOverlay] = useState(false);
    const callFlashNotification = (copyingContent: string) => {
        copy(copyingContent);
        setFlashOverlay(true);
        setTimeout(() => {
            setFlashOverlay(false);
        }, 1000);
    };

    return <StyledMono
        onClick={e => {
            e.stopPropagation();
            callFlashNotification(data);
        }}
    >
        {showFlashOverlay ? <div className="copiable-overlay"><CheckOutlined /></div> : null}
        {children}
    </StyledMono>;
};
export type ManagerSample = {
    language: LanguageDataDictionary,
};
export const ManagerSample = ({
    language,
}: ManagerSample) => {
    const [visible, setVisible] = useState(true);

    return <>
        <div onClick={() => setVisible(true)}>
            <SnippetsOutlined />
        </div>
        <StyledManagerSample
            visible={visible}
            onCancel={() => setVisible(false)}
            okButtonProps={{
                style: {
                    display: 'none',
                },
            }}
            cancelText={language['manager.sample.button.cancel.label']}
        >
            <div className="sample-modal-container">
                <div>
                    {language['manager.sample.description.line-1']}
                    <br />
                    {language['manager.sample.description.line-2']}
                </div>
                <div
                    className="download-button"
                >
                    <a
                        href="https://www.w3schools.com/TAgs/att_a_download.asp"
                        target="_blank"
                        rel="noreferrer"
                        download
                    >
                        <Button>{language['manager.sample.download.label']}</Button>
                    </a>
                </div>
                <Collapse ghost defaultActiveKey={['sample-option']}>
                    <Panel
                        key="sample-option"
                        header={<div>
                            {language['manager.sample.description.line-3']}
                        </div>}
                    >
                        <table className="option-container">
                            <tr>
                                <th><b>Field Name</b></th>
                                <th><b>Available Values</b></th>
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
                                        {AttributeList
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
                                        <div>{language['manager.sample.description.joinable']}</div>
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
                        </table>
                    </Panel>
                </Collapse>
                
            </div>
        </StyledManagerSample>
    </>;
};