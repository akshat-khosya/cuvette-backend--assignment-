import env from 'dotenv';

class Config {
    _config: Record<string, any>;
    constructor() {
        env.config();
        this._config = {
            port: process.env.PORT,
            dbUri: process.env.DB_URI,
            saltWorkFactor: 10,
            jwtTokenTime:"30d",
            privateKey: process.env.PRIVATE_KEY,
            url: process.env.URL,
        };

        
    }

    get(key: string): any {
        const val: any = this._config[key] ?? null;

        if (!val) {
            throw new Error(`Config for key [${key}] not found`);
        }

        return val;
    }
    set(key: string, val: any): void {
        this._config[key] = val;
    }
}


const config = new Config();

export default config;