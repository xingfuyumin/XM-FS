abstract class IXMFS {
    private obj: any;
    readFile: ((path: string) => string) | undefined;
    readDir: ((dir: string) => any[]) | undefined;
    writeFile: ((path: string, data: string) => void) | undefined;
    createDir: ((dir: string, data: string) => void) | undefined;
    deleteFile: ((path: string) => void) | undefined;
    deleteDir: ((dir: string) => void) | undefined;
};

export default IXMFS;