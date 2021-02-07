export interface IUtil {
    greet: () => string
}

export class UtilService implements IUtil {
    greet(): string {
        return "Hello World"
    }
}