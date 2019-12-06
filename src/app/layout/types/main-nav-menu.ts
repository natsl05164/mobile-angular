export interface MainNavMenu {
    MenuTitle: string;
    RoutePath: string;
    Rows: SubNavMenu[]
    MenuTitleCode: string;

}

interface SubNavMenu {
    Items: MenuItem[]
}

interface MenuItem {
    Name: string;
    FlexGrow: number;
    RouteLink: string;
    ImgSrc: string;
    IsDisabled: boolean;
    GameID: string;

}




