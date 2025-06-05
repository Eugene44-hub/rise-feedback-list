const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1440px] mx-auto lg:pr-[57px] lg:pl-[61px] px-5">
      {children}
    </div>
  );
};

export default DefaultLayout;
