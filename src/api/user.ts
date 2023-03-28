import axios from "axios";

export const signInUser = (body: { email: string, password: string }) =>
    new Promise((resolve, reject) => {
        if (body.password === 'Aa123456!') {
            const timeout = setTimeout(() => {
                const user = {
                    id: 111,
                    firstName: 'Dor',
                    LastName: 'Moyal',
                    email: body.email,
                    address: 'Rotshild 43',
                    city: 'Tel Aviv',
                    country: 'IL',
                }
                clearTimeout(timeout);
                resolve(user);
            }, 1500)
        } else {
            reject('bad credentials')
        }
    })

export type User = {
    firstName: string
    LastName: string
    email: string
    address: string
    city: string
    country: string
    password: string
}
export const signUpUser = (body: User) => new Promise((resolve) => {
    const timeout = setTimeout(() => {
        const user = {...body, id: 232}
        clearTimeout(timeout);
        resolve(user);
    }, 1500)
})
