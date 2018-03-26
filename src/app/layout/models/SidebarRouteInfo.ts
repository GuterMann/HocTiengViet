export interface SidebarRouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const SidebarRoutes: SidebarRouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'fa fa-fw fa-dashboard', class: '' },
    { path: 'dictionary', title: 'Dictionary', icon: 'fa fa-fw fa-book', class: ''}
];
