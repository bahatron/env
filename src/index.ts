const $env = {
    get(key: string, defaultValue?: string): string {
        const value = process.env[key];

        if (value && value !== undefined) {
            return value;
        }

        if (defaultValue) {
            return defaultValue;
        }

        throw new Error(`${key} is not set in environment`);
    }
};

export default $env;