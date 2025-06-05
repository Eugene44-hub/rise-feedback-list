const fetchFeedbacks = async () => {
  const isDev = import.meta.env.DEV;

  try {
    const response = await fetch(
      isDev
        ? "https://rise-frontend-test-api.developer-a6a.workers.dev"
        : "/feedback-api",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchFeedbacks;
