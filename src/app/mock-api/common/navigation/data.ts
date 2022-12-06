/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    // {
    //     id: 'example',
    //     title: 'Dashboard',
    //     type: 'basic',
    //     icon: 'heroicons_outline:chart-pie',
    //     link: '/example'
    // },
    {
        id: 'voter',
        title: 'मतदार',
        type: 'collapsable',
        icon: 'how_to_reg',
        children: [
            {
                id: 'voter.list',
                title: 'मतदार यादी',
                type: 'basic',
                link: '/voters/list',
            },
            {
                id: 'voter.add',
                title: 'मतदार जोडा',
                type: 'basic',
                link: '/voters/add-voter',
            },
        ]
    },
    {
        id: 'voter',
        title: 'वापरकर्ते',
        type: 'collapsable',
        icon: 'how_to_reg',
        children: [
            {
                id: 'voter.list',
                title: 'वापरकर्त्यांची यादी',
                type: 'basic',
                link: '/users/list',
            },
            {
                id: 'voter.add',
                title: 'वापरकर्ता जोडा',
                type: 'basic',
                link: '/users/add-user',
            },
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
