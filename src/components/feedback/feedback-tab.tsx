import cn from "@/utils/classname-merge";
import { useState } from "react";
import DefaultLayout from "../default-layout";
import FeedbackList from "./feedback-list";
import { FeedbackType } from "@/constants";

import AddFeedbackModal from "./add-feedback-modal";
import useFeedback from "@/hooks/use-feedback";

const feedbackTabKeys = {
  ALL: "all",
  BUGS: FeedbackType.BUGS,
  FEATURE_REQUESTS: FeedbackType.FEATURE_REQUESTS,
  OTHER: FeedbackType.OTHER,
};

const tabItems = [
  {
    label: "All Feedbacks",
    key: feedbackTabKeys.ALL,
  },
  {
    label: "Bugs Only",
    key: feedbackTabKeys.BUGS,
  },
  {
    label: "Feature Requests",
    key: feedbackTabKeys.FEATURE_REQUESTS,
  },
  {
    label: "Others",
    key: feedbackTabKeys.OTHER,
  },
];

const tabContents = [
  {
    content: "All Feedbacks",
    Component: FeedbackList,
    key: feedbackTabKeys.ALL,
  },
  {
    content: "Bugs Only",
    Component: FeedbackList,
    key: feedbackTabKeys.BUGS,
  },
  {
    content: "Feature Requests",
    Component: FeedbackList,
    key: feedbackTabKeys.FEATURE_REQUESTS,
  },
  {
    content: "Others",
    Component: FeedbackList,
    key: feedbackTabKeys.OTHER,
  },
];

const FeedbackTab = () => {
  const [activeTab, setActiveTab] = useState(tabItems[0].key);
  const { feedbacks, fetchingFeedbacks, addingFeedback, handleAddFeedback } =
    useFeedback();

  console.log(feedbacks);

  const allFeedbacks = feedbacks || [];

  const bugsFeedbacks =
    allFeedbacks?.filter((feedback) => feedback?.type === FeedbackType.BUGS) ||
    [];

  const featureRequestsFeedbacks =
    allFeedbacks?.filter(
      (feedback) => feedback?.type === FeedbackType.FEATURE_REQUESTS
    ) || [];

  const othersFeedbacks =
    allFeedbacks?.filter((feedback) => feedback?.type === FeedbackType.OTHER) ||
    [];

  console.log(othersFeedbacks, "others");

  const data = {
    [feedbackTabKeys.ALL]: allFeedbacks,
    [feedbackTabKeys.BUGS]: bugsFeedbacks,
    [feedbackTabKeys.FEATURE_REQUESTS]: featureRequestsFeedbacks,
    [feedbackTabKeys.OTHER]: othersFeedbacks,
  };

  if (fetchingFeedbacks) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-32 w-32 border-2 border-primary border-t-transparent " />
      </div>
    );
  }

  return (
    <section>
      <DefaultLayout>
        <div className="flex md:items-center justify-between md:flex-row flex-col">
          <div className="flex gap-2 items-center  overflow-x-auto">
            {tabItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={cn(
                  "border  rounded-lg px-4 py-1 transition-all duration-300 flex-shrink-0",
                  activeTab === item.key
                    ? "border-border-primary text-primary bg-[#EDFFFF] "
                    : "bg-[#F9FAFB] border-border-secondary"
                )}
              >
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>

          <AddFeedbackModal
            submitting={addingFeedback}
            onSubmit={handleAddFeedback}
          >
            <span className="text-xl">+ </span> Submit New Feedback
          </AddFeedbackModal>
        </div>

        <div className="mt-[26px]">
          {tabContents.map(
            (item) =>
              activeTab === item.key && (
                <item.Component data={data[item.key]} key={item.key} />
              )
          )}
        </div>
      </DefaultLayout>
    </section>
  );
};

export default FeedbackTab;
