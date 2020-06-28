import { GET_CODE } from './CodeTypes'

export const getCode = (number = 1) => {
    return {
        type: GET_CODE,
        payload: number
    }
}