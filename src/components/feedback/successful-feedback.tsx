import Button from "../button";
import Modal from "../modal/modal";
import SmileIcon from "@/assets/svgs/smile-icon.svg?react";
const SuccessfulFeedback = ({
  isOpen,
  setIsOpen,
  onClose,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="text-center  flex flex-col items-center bg-[#F9FAFB] py-14">
        <div>
          <SmileIcon />
        </div>
        <div className="text-h2 font-tomato-grotesk font-semibold mt-5">
          Thank you for your feedback!
        </div>
        <div className="text-tertiary mt-2">
          We have received your feedback! Our team will attend to it.
        </div>
      </div>

      <div className="p-7 flex gap-5 justify-center">
        <Button
          variant="neutral"
          className="!rounded-full flex-1 max-w-[346px]"
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default SuccessfulFeedback;
