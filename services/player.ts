import axios from 'axios';
import  callApi  from '../config/api';
import { CheckoutTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION= "api/v1";

export async function getFeaturedGames() {
   
    const URL = 'player/landingPage'

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data

    return axiosResponse.data

}

export async function getDetailVoucher(id: string) {
    const URL = `player/detail/${id}`

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data

    return axiosResponse.data
}

export async function getCategories() {
    const URL = 'player/category'

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data

    return axiosResponse.data
}

export async function setCheckout(data: CheckoutTypes) {
    const url = `${ROOT_API}/${API_VERSION}/player/checkout`

    return callApi({
        url,
        method: 'POST',
        data,
        token: true
    })  
}

