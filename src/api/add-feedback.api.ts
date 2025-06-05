import type { FeedbackPayloadType } from "@/types";

const addFeedback = async (payload: FeedbackPayloadType) => {
  try {
    const response = await fetch("/feedback-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log(response.ok);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to add feedback");
    }

    const responseData = await response.text();

    return responseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default addFeedback;
