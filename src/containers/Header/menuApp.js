export const adminMenu = [
    { //quản lý người dùng
        name: 'menu.admin.manage-user', 
        menus: [
            
                {
                    name: 'menu.admin.crud', link: '/system/user-manage' 
                },
                {
                    name: 'menu.admin.crud-redux', link: '/system/user-registration' 
                },
                {
                name: 'menu.admin.manage-manager', link: '/system/user-manager'
                },
                {
                    name: 'menu.admin.manage-admin', link: '/system/user-admin'
                },

            ]
            },
            //quản lý phòng ban
            {
                name:'menu.admin.department',
                menus: [
                    {
                        name:'menu.admin.manage-department', link:'/system/manage-department'
                    },
                ],
            },
            //quản lý dự án
            {
                name: 'menu.admin.project',
                menus:[
                    {
                        name:'menu.admin.manage-project', link:'/system/manage-project'
                    },
                ]
            }
        

            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ];
