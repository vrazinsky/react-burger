type TUserData = {
    name: string;
    email: string;
    password: string;
}

type TLoginData = {
    email: string;
    password: string;
}

type TResetEmailData = {
    email: string;
}

type TResetData = {
    password: string;
    token: string;
}

type TPatchUserData = {
    name?: string;
    email?: string;
    password?: string;
}

type TFetchRes = {
    json(): Promise<any>;
    ok?: boolean;
    status: number;
}

type TFetchResJson = {
    message?: string;
    success?: boolean;
    accessToken?: string;
    refreshToken?: string;
    order?: TOrder;
    data?: Array<TIngredient>;
    user?: TUserData;
}

type TFetchOptions = {
    headers?: HeadersInit | undefined;
    method?: string;
    body?: string;
}

type TIngredient = {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
    uuid?: string
}

type TOrder = {
    number: number
}

export type {
    TUserData,
    TLoginData,
    TResetEmailData,
    TResetData,
    TPatchUserData,
    TFetchRes,
    TFetchResJson,
    TFetchOptions,
    TIngredient,
    TOrder
}

export type TIngredientsInitialState = {
    ingredients: Array<TIngredient>;
    ingredientsRequest: boolean;
    ingredientsFailed: boolean;
}

export type TConstructorItemsInitialState = {
    constructorIngredients: { bun: TIngredient | null, innerIngredients: Array<TIngredient> }
}

export type TCurrentIngredientInitialState = {
    currentIngredient: TIngredient | null
}

export type TOrderDetailsInitialState = {
    orderDetails: TOrder | null | undefined,
    orderDetailsRequest: boolean;
    orderDetailsFailed: boolean;
}

export type TAuthInitialState = {
    user: TUserData | null | undefined;
    register: boolean;
    registerFailed: boolean;
    registerSuccess: boolean;
    login: boolean;
    loginFailed: boolean;
    loginSoccess: boolean;
    logout: boolean;
    logoutFailed: boolean;
    logoutSuccess: boolean;
    getUser: boolean;
    getUserSuccess: boolean;
    getUserFailed: boolean;
    patchUser: boolean;
    patchUserSuccess: boolean;
    patchUserFailed: boolean;
}

export type TResetPasswordInitialState = {
    resetPassword: boolean;
    resetPasswordFailed: boolean;
    resetPasswordSuccess: boolean;
}

export type TSendResetEmailInitialState = {
    sendResetEmail: boolean;
    sendResetEmailFailed: boolean;
    sendResetEmailSuccess: boolean;
}

export type TReturnUrlInitialState = {
    url: string
}