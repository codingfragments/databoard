export enum LogLevel {
    Fatal,
    Error,
    Warn,
    Info,
    Debug,
    Trace
}

export class LogService {
    category: string;
    public static Level = LogLevel;

    constructor(category: string ) {
        this.category = category;
    }

    public log( level:LogLevel,msg:string, data?:any) {
        
    }
}