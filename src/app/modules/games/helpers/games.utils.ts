
////import { Slot } from '../../../shared/models/slot.interface';
//var gameWindow: Window = {} as Window;





//export function initGameWindow():Window {
//  gameWindow.onbeforeunload = function () {
//    gameWindow = {} as Window;;
//  };
//}
 
export default class GamesUtils {
  static filterSlot(slot, filterProperty) {
    if (!filterProperty) return true;

    return slot[filterProperty] == true;
  }
   
}
