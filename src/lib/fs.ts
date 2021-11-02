// import IXMFS from "../interface";
import { Abortable } from 'node:events';
import fs, { WriteFileOptions } from 'node:fs';

class FS {
    private obj: any;
    constructor() {
        this.obj = fs;
    }
    /**
     * 检查文件或目录权限或是否存在
     */
    access = (path: string, mode?: number) => new Promise((resolve: any, reject: any) => {
        this.obj.access(path, mode, (err: any) => {
            err ? reject(err.stack) : resolve();
        });
    });
    append = (path: string, data: string, options?: WriteFileOptions) => new Promise((resolve: any, reject: any) => {
        this.obj.appendFile(path, data, options, (err: any) => {
            err ? reject(err.stack) : resolve();
        });
    });
    readFile = (
        path: string,
        options?: ({
            encoding?: null | undefined;
            flag?: string | undefined;
        } & Abortable)
            | undefined
            | null
    ) => new Promise((resolve: any, reject: any) => {
        this.obj.readFile(path, options, (err: any, data: string) => {
            err ? reject(err.stack) : resolve(data);
        });
    });
    readDir = (
        path: string,
        options?: {
            encoding: 'buffer';
            withFileTypes?: false | undefined;
        }
            | 'buffer'
    ) => new Promise((resolve: any, reject: any) => {
        this.obj.readFile(path, options, (err: any, data: string) => {
            err ? reject(err.stack) : resolve(data);
        });
    });
    write = (path: string, data: string, options?: WriteFileOptions) => new Promise((resolve: any, reject: any) => {
        this.obj.writeFile(path, data, options, (err: any) => {
            err ? reject(err.stack) : resolve();
        });
    });

}

export default FS;
