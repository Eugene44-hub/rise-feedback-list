const isDev = import.meta.env.DEV;

const API_URL = isDev
  ? "/feedback-api"
  : "https://rise-frontend-test-api.developer-a6a.workers.dev";

export default API_URL;
