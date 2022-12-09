export interface CategoryTypes {
    _id: string,
    name: string,
    __v: number
}

export interface GameItemTypes {
    _id: string,
    name: string,
    status: string,
    thumbnail: string,
    category: CategoryTypes
}

export interface BanksTypes{
    _id: string,
    bankName: string
}

export interface PaymentsTypes{
    _id: string,
    type: string,
    banks: BanksTypes[]
}

export interface NominalsTypes{
    _id: string,
    coinName: string,
    coinQuantity: number,
    price: number
}

export interface SignInTypes{
    email: string,
    password: string
}

export interface UserTypes{
    id: string,
    email: string,
    name: string,
    username: string,
    phoneNumber: string,
    avatar: string,
}

export interface JWTPayloadTypes{
    player: UserTypes,
    iat: number
}

export interface CheckoutTypes{
     voucher : string,
      nominal : string,
      payment : string,
      bank: string,
      name :  string,
      accountUser : string
}

export interface TopUpCategoriesTypes{
    _id: string;
    name: string;
    value: number;
}

export interface HistoryVoucherTopupTypes{
    category: string;
    coinName: string;
    coinQuantity: string;
    gameName: string;
    price: number;
    thumbnail: string;
}

export interface HistoryPaymentTypes{
    _id: string;
    name: string;
    type: string;
    bankName: string;
    noRekening: number;
}

export interface HistoryTransactionTypes{
    _id: string,
    name: string;
    status: string,
    value: number,
    accountUser: string;
    tax: number;
    historyVoucherTopup: HistoryVoucherTopupTypes;
    historyPayment: HistoryPaymentTypes;
}