import cn from "@/utils/classname-merge";
import { AnimatePresence, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface ModalProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

const Modal = ({
  isOpen = false,
  onClose,
  children,
  className,
  ...rest
}: ModalProps) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[hsla(0,0%,14%,0.1)] backdrop-blur-[5px]"
              onClick={onClose}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "relative z-50 w-[95%] max-w-[646px] bg-white rounded-2xl shadow-xl overflow-hidden",
                className
              )}
              {...rest}
            >
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.querySelector("#portal-root") as HTMLElement
  );
};

export default Modal;
