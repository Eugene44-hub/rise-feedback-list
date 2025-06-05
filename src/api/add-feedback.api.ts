import type { FeedbackPayloadType } from "@/types";
import API_URL from "./config";

const addFeedback = async (payload: FeedbackPayloadType) => {
  try {
    const response = await fetch(API_URL, {
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
