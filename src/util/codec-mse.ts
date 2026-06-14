import { MseCard, MseFile } from 'src/model';

const parseMse = <Result extends Record<string, unknown> = MseFile>(text: string): Result => {
    const lines = text.split(/\r?\n/);

    const root = {};
    const stack = [{ indent: -1, obj: root }];

    function parseValue(value) {
        value = value.trim();

        // Empty value
        if (value === '') return null;

        // Quoted string
        if (/^".*"$/.test(value)) {
            return value.slice(1, -1);
        }

        // Boolean
        if (value === 'true') return true;
        if (value === 'false') return false;

        // Number
        if (!isNaN(value) && value !== '') {
            return Number(value);
        }

        // Preserve special expressions like local_image_file(...)
        return value;
    }

    for (const rawLine of lines) {
        if (!rawLine.trim()) continue;

        // Count indentation (tabs OR 4 spaces)
        const indent = rawLine.match(/^\s*/)?.[0].length ?? 0;
        const line = rawLine.trim();

        const colonIndex = line.indexOf(':');
        if (colonIndex === -1) continue;

        const key = line.slice(0, colonIndex).trim();
        const valuePart = line.slice(colonIndex + 1);

        // Move up stack when indentation decreases
        while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
            stack.pop();
        }

        const parent = stack[stack.length - 1].obj;

        // If no value → nested object
        if (valuePart.trim() === '') {
            const newObj = {};

            // Handle repeated keys as arrays
            if (parent[key] !== undefined) {
                if (!Array.isArray(parent[key])) {
                    parent[key] = [parent[key]];
                }
                parent[key].push(newObj);
            } else {
                parent[key] = newObj;
            }

            // If array, descend into latest item
            const target = Array.isArray(parent[key])
                ? parent[key][parent[key].length - 1]
                : parent[key];

            stack.push({
                indent,
                obj: target
            });

        } else {
            const value = parseValue(valuePart);

            // Repeated scalar keys → array
            if (parent[key] !== undefined) {
                if (!Array.isArray(parent[key])) {
                    parent[key] = [parent[key]];
                }
                parent[key].push(value);
            } else {
                parent[key] = value;
            }
        }
    }

    return root as Result;
};

export const ygoCarderToMseData = (
    card: Card,
    artRef?: HTMLCanvasElement | null,
): { result: MseCard, isPartial: boolean } => {
};

export const mseToYgoCarderData = (card: MseCard | string): { result: Card, isPartial: boolean } => {
    const normalizedCard = typeof card === 'string' ? parseMse(card).card[0] : card;
};