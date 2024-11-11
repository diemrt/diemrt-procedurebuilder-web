export function deserializeBase64(base64: string): object | undefined {
    try {
        const jsonString = atob(base64);
        return JSON.parse(jsonString);
    } catch {
        return undefined;
    }
}