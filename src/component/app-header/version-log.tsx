import { Popover } from 'antd';
import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledPopMarkdown } from '../atom';
import { useNotification } from 'src/service';
import { VersionLogButtonLabel } from './styled';

const LogSentence = styled.li`
    img {
        display: block;
        max-width: 400px;
        max-height: 200px;
        margin: auto;
        box-shadow: var(--bs-1);
        margin-top: var(--spacing-xs);
    }
`;

type VersionLog = { version: string, logList: { content: string, image?: string }[] }[];
const VersionLogStore = (() => {
    let isReady = false;
    let versionLog: VersionLog = [];

    return {
        getLog: async () => {
            if (isReady) return versionLog;
            const response = await fetch(
                `${process.env.PUBLIC_URL}/log/version.json`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            try {
                const responseLog = await response.json();
                versionLog = responseLog;
                isReady = true;

                return versionLog;
            } catch (e) {
                console.error(e);
            }
            return [];
        }
    };
})();
export const VersionLog = () => {
    const [log, setLog] = useState<VersionLog>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const log = await VersionLogStore.getLog();

            setLoading(false);
            setLog(log);
        })();
    }, []);

    if (log.length === 0 && !loading) return <div>No changelogs</div>;
    if (loading) return <div>Loading changelog...</div>;
    return <div>
        {log.map(({ logList, version }, index) => {
            return <div key={`${version}-${index}`} className="log-section">
                <b>{version}</b><br />
                <ul>
                    {/* Using index as key here is safe as the component is stateless */}
                    {logList.map(({ content, image }, index) => {
                        return <LogSentence key={index}>
                            {content}
                            {image && <img src={image} alt={`version-${version}-illust`} />}
                        </LogSentence>;
                    })}
                </ul>
            </div>;
        })}
    </div>;
};

const compareSemver = (a: string, b: string): boolean => {
    const [majorA, minorA, patchA] = String(a).split('.').map(Number);
    const [majorB, minorB, patchB] = String(b).split('.').map(Number);
    
    if (majorA !== majorB) {
      return majorA > majorB;
    }
    
    if (minorA !== minorB) {
      return minorA > minorB;
    }
    
    return patchA > patchB;
};

const StyledVersionLog = styled(StyledPopMarkdown)`
    overflow: auto;
    width: 550px;
    max-height: 300px;
    width: 550px;
    .log-section + .log-section {
        margin-top: var(--spacing);
    }
`;
export const VersionLogButton = memo(() => {
    const [animating, setAnimating] = useState(false);
    const [
        version,
        setMemoizedVersion,
    ] = useNotification('versionReminder');

    useEffect(() => {
        if (version) {
            const currentSemver = process.env.REACT_APP_VERSION ?? '0.0.0';
            const memoizedSemver = version;
            if (process.env.REACT_APP_VERSION) setMemoizedVersion(process.env.REACT_APP_VERSION);

            if (compareSemver(currentSemver, memoizedSemver)) {
                setAnimating(true);
                setTimeout(() => {
                    setAnimating(false);
                }, 8000);
            }
        }
    }, [setMemoizedVersion, version]);

    return <Popover
        placement="bottom"
        content={<StyledVersionLog>
            <VersionLog />
        </StyledVersionLog>}
    >
        <VersionLogButtonLabel $animating={animating} className="app-log" onMouseOver={() => setAnimating(false)}>
            v{process.env.REACT_APP_VERSION ?? 'unknown'}
        </VersionLogButtonLabel>
    </Popover>;
});