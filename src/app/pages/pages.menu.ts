export const PAGES_MENU = [
    {
        path: 'Dashboard',
        name: '控制台',
        icon: 'fa-dashboard'
    },
    {
        path: 'specimen',
        name: '样本管理',
        icon: 'fa-cog',
        children: [
            {
                path: 'register',
                name: '样本注册',
                icon: 'fa-user',
            },
            {
                path: 'receive',
                name: '样本接受',
                icon: 'fa-user',
            }
        ]
    },
    {
        path: 'sys',
        name: '系统管理',
        icon: 'fa-cog',
        children: [
            {
                path: 'user',
                name: '用户管理',
                icon: 'fa-user',
            },
            {
                path: 'role',
                name: '角色管理',
                icon: 'fa-user',
            },
            {
                path: 'user-role',
                name: '权限管理',
                icon: 'fa-user',
            }
        ]
    }
];

// export const PAGES_MENU = [
//     {
//         path: 'pages',
//         children: [
//             {
//                 path: 'Dashboard',
//                 name: 'Dashboard',
//                 icon: 'fa-dashboard'
//             },
//             {
//                 path: 'Input',
//                 name: 'Input',
//                 icon: 'fa-microchip',
//                 children: [
//                     {
//                         path: 'InputGroup',
//                         name: 'InputGroup',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'AutoComplete',
//                         name: 'AutoComplete',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'Calendar',
//                         name: 'Calendar',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'Checkbox',
//                         name: 'Checkbox',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'Chips',
//                         name: 'Chips',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'ColorPicker',
//                         name: 'ColorPicker',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'Dropdown',
//                         name: 'Dropdown',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'Editor',
//                         name: 'Editor',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'InputSwitch',
//                         name: 'InputSwitch',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'InputText',
//                         name: 'InputText',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'InputTextArea',
//                         name: 'InputTextArea',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'Listbox',
//                         name: 'Listbox',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'Mask',
//                         name: 'Mask',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'MultiSelect',
//                         name: 'MultiSelect',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'Password',
//                         name: 'Password',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'RadioButton',
//                         name: 'RadioButton',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'Rating',
//                         name: 'Rating',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'Slider',
//                         name: 'Slider',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'Spinner',
//                         name: 'Spinner',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'SelectButton',
//                         name: 'SelectButton',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'ToggleButton',
//                         name: 'ToggleButton',
//                         icon: 'fa-address-book'
//                     },
//                     {
//                         path: 'TriCheckbox',
//                         name: 'TriCheckbox',
//                         icon: 'fa-address-book'
//                     }
//                 ]
//             },
//             {
//                 path: 'Button',
//                 name: 'Button',
//                 icon: 'fa-hand-o-down',
//                 children: [
//                     {
//                         path: 'Button',
//                         name: 'Button'
//                     },
//                     {
//                         path: 'SplitButton',
//                         name: 'SplitButton'
//                     }
//                 ]
//             },
//             {
//                 path: 'Data',
//                 name: 'Data',
//                 icon: 'fa-database',
//                 children: [
//                     {
//                         path: 'Carousel',
//                         name: 'Carousel',
//                     },
//                     {
//                         path: 'DataGrid',
//                         name: 'DataGrid'
//                     },
//                     {
//                         path: 'DataList',
//                         name: 'DataList'
//                     },
//                     {
//                         path: 'DataScroller',
//                         name: 'DataScroller'
//                     },
//                     {
//                         path: 'DataTable',
//                         name: 'DataTable'
//                     },
//                     {
//                         path: 'OrgChart',
//                         name: 'OrgChart'
//                     },
//                     {
//                         path: 'OrderList',
//                         name: 'OrderList'
//                     },
//                     {
//                         path: 'GMap',
//                         name: 'GMap'
//                     },
//                     {
//                         path: 'Paginator',
//                         name: 'Paginator'
//                     },
//                     {
//                         path: 'PickList',
//                         name: 'PickList'
//                     },
//                     {
//                         path: 'Schedule',
//                         name: 'Schedule'
//                     },
//                     {
//                         path: 'Tree',
//                         name: 'Tree'
//                     },
//                     {
//                         path: 'TreeTable',
//                         name: 'TreeTable'
//                     }
//                 ]
//             },
//             {
//                 path: 'Panel',
//                 name: 'Panel',
//                 icon: 'fa-window-restore',
//                 children: [
//                     {
//                         path: 'Accordion',
//                         name: 'Accordion'
//                     },
//                     {
//                         path: 'Fieldset',
//                         name: 'Fieldset'
//                     },
//                     {
//                         path: 'Panel',
//                         name: 'Panel'
//                     },
//                     {
//                         path: 'Grid',
//                         name: 'Grid'
//                     },
//                     {
//                         path: 'TabView',
//                         name: 'TabView'
//                     },
//                     {
//                         path: 'Toolbar',
//                         name: 'Toolbar'
//                     }
//                 ]
//             },
//             {
//                 path: 'Overlay',
//                 name: 'Overlay',
//                 icon: 'fa-id-card',
//                 children: [
//                     {
//                         path: 'ConfirmDialog',
//                         name: 'ConfirmDialog'
//                     },
//                     {
//                         path: 'Dialog',
//                         name: 'Dialog'
//                     },
//                     {
//                         path: 'Lightbox',
//                         name: 'Lightbox'
//                     },
//                     {
//                         path: 'OverlayPanel',
//                         name: 'OverlayPanel'
//                     },
//                     {
//                         path: 'Tooltip',
//                         name: 'Tooltip'
//                     }
//                 ]
//             },
//             {
//                 path: 'File',
//                 name: 'File',
//                 icon: 'fa-folder-open',
//                 children: [
//                     {
//                         path: 'Upload',
//                         name: 'Upload'
//                     }
//                 ]
//             },
//             {
//                 path: 'Menu',
//                 name: 'Menu',
//                 icon: 'fa-navicon',
//                 children: [
//                     {
//                         path: 'MenuModel',
//                         name: 'MenuModel'
//                     },
//                     {
//                         path: 'Breakcrumb',
//                         name: 'Breakcrumb'
//                     },
//                     {
//                         path: 'ContextMenu',
//                         name: 'ContextMenu'
//                     },
//                     {
//                         path: 'MegaMenu',
//                         name: 'MegaMenu'
//                     },
//                     {
//                         path: 'Menu',
//                         name: 'Menu'
//                     },
//                     {
//                         path: 'Menubar',
//                         name: 'Menubar'
//                     },
//                     {
//                         path: 'PanelMenu',
//                         name: 'PanelMenu'
//                     },
//                     {
//                         path: 'SlideMenu',
//                         name: 'SlideMenu'
//                     },
//                     {
//                         path: 'Steps',
//                         name: 'Steps'
//                     },
//                     {
//                         path: 'TabMenu',
//                         name: 'TabMenu'
//                     },
//                     {
//                         path: 'TieredMenu',
//                         name: 'TieredMenu'
//                     }
//                 ]
//             },
//             {
//                 path: 'Charts',
//                 name: 'Charts',
//                 icon: 'fa-bar-chart',
//                 children: [
//                     {
//                         path: 'ChartModel',
//                         name: 'ChartModel'
//                     },
//                     {
//                         path: 'Bar',
//                         name: 'Bar'
//                     },
//                     {
//                         path: 'Doughnut',
//                         name: 'Doughnut'
//                     },
//                     {
//                         path: 'Line',
//                         name: 'Line'
//                     },
//                     {
//                         path: 'PolarArea',
//                         name: 'PolarArea'
//                     },
//                     {
//                         path: 'Pie',
//                         name: 'Pie'
//                     },
//                     {
//                         path: 'Radar',
//                         name: 'Radar'
//                     }
//                 ]
//             },
//             {
//                 path: 'Messages',
//                 name: 'Messages',
//                 icon: 'fa-comments',
//                 children: [
//                     {
//                         path: 'Messages',
//                         name: 'Messages'
//                     },
//                     {
//                         path: 'Growl',
//                         name: 'Growl'
//                     }
//                 ]
//             },
//             {
//                 path: 'Multimedia',
//                 name: 'Multimedia',
//                 icon: 'fa-youtube-play',
//                 children: [
//                     {
//                         path: 'Galleria',
//                         name: 'Galleria'
//                     }
//                 ]
//             },
//             {
//                 path: 'DragDrop',
//                 name: 'DragDrop',
//                 icon: 'fa-android',
//                 children: [
//                     {
//                         path: 'DragDrop',
//                         name: 'Drag&Drop'
//                     }
//                 ]
//             },
//             {
//                 path: 'Misc',
//                 name: 'Misc',
//                 icon: 'fa-ge',
//                 children: [
//                     {
//                         path: 'Responsive',
//                         name: 'Responsive'
//                     },
//                     {
//                         path: 'RTL',
//                         name: 'RTL'
//                     },
//                     {
//                         path: 'Defer',
//                         name: 'Defer'
//                     },
//                     {
//                         path: 'BlockUI',
//                         name: 'BlockUI'
//                     },
//                     {
//                         path: 'Captcha',
//                         name: 'Captcha'
//                     },
//                     {
//                         path: 'Inplace',
//                         name: 'Inplace'
//                     },
//                     {
//                         path: 'Validation',
//                         name: 'Validation'
//                     },
//                     {
//                         path: 'ProgressBar',
//                         name: 'ProgressBar'
//                     },
//                     {
//                         path: 'CodeHightlighter',
//                         name: 'CodeHightlighter'
//                     },
//                     {
//                         path: 'Terminal',
//                         name: 'Terminal'
//                     }
//                 ]
//             }
//         ]
//     }
// ];
