import { useEffect, useState } from 'react';

type VersionLog = { version: string, logList: { content: string }[] }[];
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
            return <div key={`${version}-${index}`}>
                <b>{version}</b><br />
                <ul>
                    {/* Using index as key here is safe as the component is stateless */}
                    {logList.map(({ content }, index) => {
                        return <li key={index}>
                            {content}
                        </li>;
                    })}
                </ul>
            </div>;
        })}
    </div>;
};