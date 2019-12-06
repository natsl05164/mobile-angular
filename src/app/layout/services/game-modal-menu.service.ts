import { Injectable } from '@angular/core';
import { BASE_MEDIA_URL_MOBILE } from '../../configs/app.constants';
import {GameBrowserLaunchBtn } from "../types/game-modal";
import { GameType, GameIDs } from "../menu.constants";

@Injectable({ providedIn: 'root' })
export class GameModalMenuService {

    public AppLaunchImgSrc: string = `${BASE_MEDIA_URL_MOBILE}/gamelaunch-modal-icons/popup_logo_html5.png`;
    private _gameModal(parentRoutePath: string, gameID:string): GameBrowserLaunchBtn[] { return  [{
        BrowserLaunchGameRoutePath: `/games/${parentRoutePath}/${gameID}`,
        BrowserLaunchImgSrc: `${BASE_MEDIA_URL_MOBILE}/gamelaunch-modal-icons/popup_logo_android.png`,
       
    }]
    };


    private _clubCasinoModal(parentRoutePath: string): GameBrowserLaunchBtn[] {
         
        return [
            {
                BrowserLaunchGameRoutePath: `/games/${parentRoutePath}/roulette`,
                BrowserLaunchImgSrc: `${BASE_MEDIA_URL_MOBILE}/gamelaunch-modal-icons/roulette-live.png`,

            },
            {
                BrowserLaunchGameRoutePath: `/games/${parentRoutePath}/minibaccarat`,
                BrowserLaunchImgSrc: `${BASE_MEDIA_URL_MOBILE}/gamelaunch-modal-icons/mini-baccarat.png`,

            },
            {
                BrowserLaunchGameRoutePath: `/games/${parentRoutePath}/frenchroulette`,
                BrowserLaunchImgSrc: `${BASE_MEDIA_URL_MOBILE}/gamelaunch-modal-icons/french-roulette.png`,

            },
            {
                BrowserLaunchGameRoutePath: `/games/${parentRoutePath}/7seatbaccarat`,
                BrowserLaunchImgSrc: `${BASE_MEDIA_URL_MOBILE}/gamelaunch-modal-icons/7-seat-baccarat.png`,

            }
        ];
    }
      
    getModal(MenuTiteCode: string, GameID: string) {
        console.log('here',GameID);
        if (GameID == GameIDs.ClubCasino) {
          
            return this._clubCasinoModal(MenuTiteCode);
        } 
        else  {

            return this._gameModal(MenuTiteCode, GameID);
        }
    }
   
}  
