import { FeedbackType } from "@/constants";

export interface FeedbackPayloadType {
  name: string;
  email: string;
  message: string;
  type: FeedbackType;
  phoneNumber?: string;
}
