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
    
    constructor(category: string ) {
        this.category = category;
    }

    public log( level:LogLevel,msg:string, data?:any) {
        
    }
}