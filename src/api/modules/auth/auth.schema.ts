import {gql} from 'apollo-server-express'

const Auth = gql`
    type Guard {
        token: String
        refreshToken: String
        businessUnit: String
        appPermissionData: [getAppPermissionData]
        page: [MenuData]
    }

    type MenuData{
        id: Int
        title: String
        icon: String
        url: String
        children: [MenuData]
    }


    type getAppPermissionData{
        program: String
        permission: CRUD
    }

    type CRUD{
        read: Boolean
        create: Boolean
        update: Boolean
        delete: Boolean
    }
`

export default Auth
