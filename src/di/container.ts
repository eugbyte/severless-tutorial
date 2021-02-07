import { IUtil, UtilService } from "src/services/util-service";


export class Container {
    utilService: IUtil = new UtilService()
}

export const container: Container = new Container();

