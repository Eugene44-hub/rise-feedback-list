import cn from "@/utils/classname-merge";

interface AvatarImageProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  size?: keyof typeof avatarImageStyles.size;
  image?: string;
}

const avatarImageStyles = {
  size: {
    xs: "size-[20px] text-[10px]",
    sm: "size-[32px] text-[12px]",
  },
};

const AvatarImage = ({
  name,
  size = "sm",
  image,
  className,
  ...props
}: AvatarImageProps) => {
  const splittedName = name?.split(" ") || [];
  const firstName = splittedName?.[0];
  const lastName = splittedName?.[1];

  console.log(firstName, lastName?.[0], "name");

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-primary text-white",
        avatarImageStyles.size[size],
        className
      )}
      {...props}
    >
      {image ? (
        <img src={image} alt={name} className="size-full object-cover" />
      ) : (
        <p className="font-medium uppercase ">
          {firstName?.[0] || ""}
          {lastName?.[0] || ""}
        </p>
      )}
    </div>
  );
};

export default AvatarImage;
