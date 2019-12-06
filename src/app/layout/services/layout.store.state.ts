import { Requests } from '../types/requests';
import { MainNavMenu } from '../types/main-nav-menu';

export class LayoutStoreState {
    mainNavMenu: MainNavMenu[] = null;
    gameMenuModal: any;
    requests: Requests = {
        getMainMenuItems: {},
    };
}
