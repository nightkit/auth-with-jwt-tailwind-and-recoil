import { atom } from 'recoil';

export const userState = atom({
    key: 'userDataState',
    default: [],
});

export const isLoggedIn = atom({
    key: 'isLoggedIn',
    default: false,
})