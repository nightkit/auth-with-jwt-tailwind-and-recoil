export const serverURL = process.env.REACT_SERVER_URL || 'http://localhost:8300';

export const routes = {
    register: "/user",
    login: "/user/login",
    fetchUser: "/user"
}