import { Requests } from '../types/requests';
import { Miscellanous } from '../types/miscellanous';

export class MiscellanousStoreState {
    miscellanousData: Miscellanous = null;
    requests: Requests = {
        getMiscellanousData: {}
    };
}
