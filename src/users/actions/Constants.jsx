export const  USER_ROLES = {
    SUPER_ADMIN : 1,
    ADMIN : 2,
    MEMBER : 3
}

export const  USER_ROLES__NAME_LIST = 
                                [
                                    {SUPER_ADMIN : USER_ROLES.SUPER_ADMIN},
                                    {ADMIN : USER_ROLES.ADMIN},
                                    {MEMBER : USER_ROLES.MEMBER}
                                ]

export const USER_STATUS = {
    ACTIVE : 1,
    INACTIVE : 0
} 

export const USER_LIST_HEADERS = ['User', 'Role', 'Status', 'Actions'];