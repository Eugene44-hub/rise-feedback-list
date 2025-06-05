import FeedbackTab from "@/components/feedback/feedback-tab";
import Header from "../components/header";
import Topbar from "../components/top-bar";
import { Toaster } from "sonner";
// import Pagination from "@/components/pagination";

const CustomerFeedBack = () => {
  console.log(import.meta.env.DEV, "import.meta.env");
  return (
    <article>
      <Topbar />
      <Header />
      <FeedbackTab />
      <Toaster />
    </article>
  );
};

export default CustomerFeedBack;
