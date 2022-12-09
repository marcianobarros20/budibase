import generator from "../../generator";
import { User } from "@budibase/types";
import { generateUserMetadataID } from "@budibase/backend-core/src/db";


const generateDeveloper = (): User => {
    const randomId = generator.guid();
    return ({
        email: `pedro+${randomId}@budibase.com`,
        password: randomId,
        roles: {},
        forceResetPassword: true,
        builder: {
            global: true
        }
    })
}

const generateAdmin = (): User => {
    const randomId = generator.guid();
    return ({
        email: `pedro+${randomId}@budibase.com`,
        password: randomId,
        roles: {},
        forceResetPassword: true,
        admin: {
            global: true
        },
        builder: {
            global: true
        }
    })
}
const generateAppUser = (): User => {
    const randomId = generator.guid();
    return ({
        email: `pedro+${randomId}@budibase.com`,
        password: randomId,
        roles: {},
        forceResetPassword: true,
        admin: {
            global: false
        },
        builder: {
            global: false
        }
    })

}

export const generateInviteUser = (): Object[] => {
    //const randomId = generator.guid();
    return [{
        email: `pedro+test@budibase.com`,
        userInfo: {
            userGroups: []
        }
    }]

}

export const generateUser = (amount: number = 1, role?: string): User[] => {
    const userList: User[] = [];
    for (let i = 0; i < amount; i++) {
        switch (role) {
            case "admin":
                userList.push(generateAdmin());
                break;
            case "developer":
                userList.push(generateDeveloper());
                break;
            case "appUser":
                userList.push(generateAppUser());
                break;
            default:
                userList.push(generateAppUser());
                break;
        }
    }
    return userList
}