const isDev = import.meta.env.DEV;

const API_URL = isDev ? "/feedback" : import.meta.env.VITE_BASE_URL;

export default API_URL;
