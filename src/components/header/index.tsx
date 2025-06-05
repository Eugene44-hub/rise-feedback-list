import { support1, support2, support4, support3 } from "@/assets/pngs";
import GroupedAvatar from "../avatars/grouped-avatar";
import DefaultLayout from "../default-layout";

const Header = () => {
  return (
    <header className="pt-[40px] pb-[24px] ">
      <DefaultLayout>
        <p className="md:text-h1 text-h2 font-semibold !font-tomato-grotesk">
          Got a complaint or feedback?
        </p>
        <div className="flex sm:flex-row flex-col gap-4 mt-3 ">
          <div className="w-[100px]  flex-shrink-0">
            <GroupedAvatar
              avatars={[
                { name: "Support", image: support1 },
                { name: "Support", image: support2 },
                { name: "Support", image: support3 },
                { name: "Support", image: support4 },
              ]}
            />
          </div>
          <p className="text-tertiary md:text-body1 text-body2 mt-1">
            Our support team is ready to listen and resolve.
          </p>
        </div>
      </DefaultLayout>
    </header>
  );
};

export default Header;
