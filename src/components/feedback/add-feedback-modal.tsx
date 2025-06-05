import { useState } from "react";
import Button from "../button";
import Modal from "../modal/modal";
import InputField from "../forms/input-field";
import MailIcon from "@/assets/svgs/outline-mail.svg?react";
import SelectField from "../forms/select-field";
import ChevronIcon from "@/assets/svgs/chevron-icon.svg?react";
import TextAreaField from "../forms/textarea-field";
import SuccessfulFeedback from "./successful-feedback";
import type { FeedbackPayloadType } from "@/types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FeedbackType } from "@/constants";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  type: Yup.string().required("Feedback Type is required"),
  message: Yup.string().required("Message is required"),
});

const AddFeedbackModal = ({
  children,
  onSubmit,
  submitting,
}: {
  children: React.ReactNode;
  onSubmit: (
    form: FeedbackPayloadType,
    { onSuccess, onFailure }: { onSuccess?: () => void; onFailure?: () => void }
  ) => void;
  submitting: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isSuccessful, setIsSuccessful] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      type: FeedbackType.OTHER,
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values, {
        onSuccess: () => {
          setIsSuccessful(true);
          setIsOpen(false);
          formik.resetForm();
        },
        onFailure: () => {},
      });
    },
  });

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="!rounded-full sm:max-w-[244px] mr-auto md:mr-0 md:w-full md:mt-0 mt-4 "
      >
        {children}
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-5  ">
          <header className="text-h2 font-tomato-grotesk font-semibold">
            What would you like to bring to our attention?
          </header>
          <p className="text-tertiary mt-1">
            Kindly fill the details below to submit.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="bg-[#F9FAFB] p-5 space-y-4 border-y">
            <InputField
              error={formik.errors.name}
              touched={formik.touched.name}
              label="Full name"
              inputProps={{
                placeholder: "Enter Full Name",
                ...formik.getFieldProps("name"),
              }}
            />
            <InputField
              label="Email"
              error={formik.errors.email}
              touched={formik.touched.email}
              inputProps={{
                placeholder: "Enter Email",
                ...formik.getFieldProps("email"),
              }}
              leftIcon={<MailIcon />}
              leftIconProps={{ className: "border-r" }}
            />
            <SelectField
              error={formik.errors.type}
              touched={formik.touched.type}
              label="Feedback Type"
              selectProps={{
                ...formik.getFieldProps("type"),
                children: (
                  <>
                    <option value="Bug">Bug</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Other">Other</option>
                  </>
                ),
              }}
              rightIcon={<ChevronIcon />}
              rightIconProps={{ className: "rotate-90" }}
            />

            <TextAreaField
              error={formik.errors.message}
              touched={formik.touched.message}
              label="Feedback Message"
              textAreaProps={{
                ...formik.getFieldProps("message"),
                placeholder: "Enter Feedback Message",
              }}
            />
          </div>

          <div className="p-5 flex gap-5">
            <Button
              type="button"
              onClick={() => setIsOpen(false)}
              variant="neutral"
              className="!rounded-full flex-1"
            >
              Close
            </Button>
            <Button
              loading={submitting}
              disabled={!formik.dirty || !formik.isValid || submitting}
              type="submit"
              className="!rounded-full flex-1"
            >
              Submit
            </Button>
          </div>
        </form>
      </Modal>
      <SuccessfulFeedback
        isOpen={isSuccessful}
        setIsOpen={setIsSuccessful}
        onClose={() => setIsSuccessful(false)}
      />
    </>
  );
};

export default AddFeedbackModal;
