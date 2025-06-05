const fetchFeedbacks = async () => {
  try {
    const response = await fetch("/feedback-api", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchFeedbacks;
