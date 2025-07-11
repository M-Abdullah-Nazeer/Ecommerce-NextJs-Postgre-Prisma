export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Eccomerce MAN"
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Built with NextJS, Postgre, Prisma"
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "https://localhost:3000"


export const LATEST_PRODUCTS_LIMIT = Number(process.env.LATEST_PRODUCT_LIMIT) || 4;



export const signInDefaultValues = {
    email: '',
    password: '',

};
export const signUpDefaultValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',

};