import AvatarImage from "../avatars/avatar-image";
import MailIcon from "@/assets/svgs/mail-icon.svg?react";
import CallIcon from "@/assets/svgs/call-icon.svg?react";
import TicketIcon from "@/assets/svgs/ticket-icon.svg?react";
import { FeedbackType } from "@/constants";
import type { FeedbackPayloadType } from "@/types";
import { motion } from "framer-motion";
import cn from "@/utils/classname-merge";

const FeedbackCard = (props: FeedbackPayloadType) => {
  const { message, email, type, name, phoneNumber } = props;
  const feedbackLabel = {
    [FeedbackType.BUGS]: "Bugs",
    [FeedbackType.FEATURE_REQUESTS]: "Feature Requests",
    [FeedbackType.OTHER]: "Other",
  };
  const randomColors = [
    "!bg-[#F5F1FE] !text-[#A479FF]",
    "!bg-[#F6E4F0] !text-[#B80074]",
    "!bg-[#FFFAEB] !text-[#DC6803]",
    "!bg-[#ECFDF3] !text-[#039855]",
  ];

  const randomColor =
    randomColors[Math.floor(Math.random() * randomColors.length)];
  console.log(Math.floor(Math.random() * randomColors.length), "randomColor");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={
        "bg-white  rounded-2xl p-4 flex flex-col gap-4 border border-border-secondary-color"
      }
    >
      <div className="flex items-center gap-3">
        <AvatarImage name={name} className={cn(randomColor)} />
        <p className="font-medium capitalize">{name}</p>
      </div>
      <div className="w-fit space-y-5">
        <div className="flex gap-4   items-start ">
          <div className=" w-fit mt-1">
            <MailIcon />
          </div>
          <p className="text-sm text-tertiary text-wrap break-words truncate md:max-w-[220px] ">
            {email || "N/A"}
          </p>
        </div>

        <div className="flex gap-4 items-start  ">
          <div className=" w-fit mt-[1px]">
            <CallIcon />
          </div>
          <p className="text-sm text-tertiary ">{phoneNumber || "N/A"}</p>
        </div>
        <div className="flex gap-4 items-start ">
          <div className="w-fit">
            <TicketIcon />
          </div>
          <div className="">
            <p className="-mt-1 ">{feedbackLabel[type as FeedbackType]}</p>

            <p className="text-sm text-tertiary">{message}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
