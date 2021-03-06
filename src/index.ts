export function get(key: string, defaultValue?: string): string {
    const value = process.env[key];

    if (value || value !== undefined) {
        return value;
    }

    if (defaultValue !== undefined) {
        return defaultValue;
    }

    throw new Error(`${key} is not set in environment`);
}

export { get as getenv };

export default {
    get,
    getenv: get,
};
