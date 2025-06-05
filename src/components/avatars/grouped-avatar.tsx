import AvatarImage from "./avatar-image";

const GroupedAvatar = ({
  avatars,
}: {
  avatars: { name: string; image: string }[];
}) => {
  return (
    <div className="flex items-center gap-2">
      {avatars.map((avatar, index) => (
        <AvatarImage
          className="border border-white flex-shrink-0"
          key={index}
          style={{ transform: `translateX(-${index * 18}px)` }}
          {...avatar}
        />
      ))}
    </div>
  );
};

export default GroupedAvatar;
