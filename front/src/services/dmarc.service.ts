const DmarcService = {
    flattenJson(json: any, flattened: any, prefix: string) {
        for (const key of Object.keys(json)) {
            let value = json[key];

            value = typeof value === "object" && value.length ? value[0] : value; 

            if (typeof value === "string" || typeof value === "number") {
                flattened[`${prefix}${key}`] = value; 
            } else if (typeof value === "object") {
                flattened = {...flattened, ...this.flattenJson(value, flattened, `${key}_`)};
            }
        }
        return flattened;
    }
}

export default DmarcService;