import addFeedback from "@/api/add-feedback.api";
import fetchFeedbacks from "@/api/get-feedbacks.api";
import type { FeedbackPayloadType } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useFeedback = () => {
  const [fetchingFeedbacks, setFetchingFeedbacks] = useState(false);
  const [addingFeedback, setAddingFeedback] = useState(false);
  const [feedbacks, setFeedbacks] = useState<FeedbackPayloadType[]>([]);

  console.log(import.meta.env.VITE_BASE_URL, "base url");
  const getFeedbacks = async () => {
    try {
      setFetchingFeedbacks(true);
      const data = await fetchFeedbacks();
      setFeedbacks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setFetchingFeedbacks(false);
    }
  };

  const handleAddFeedback = async (
    payload: FeedbackPayloadType,
    { onSuccess, onFailure }: { onSuccess?: () => void; onFailure?: () => void }
  ) => {
    try {
      setAddingFeedback(true);
      const data = await addFeedback(payload);

      console.log(data);
      setFeedbacks([payload, ...feedbacks]);
      onSuccess?.();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error?.message);
      toast.error(error?.message);
      onFailure?.();
    } finally {
      setAddingFeedback(false);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return {
    fetchingFeedbacks,
    addingFeedback,
    handleAddFeedback,
    feedbacks,
  };
};

export default useFeedback;
