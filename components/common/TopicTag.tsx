interface Props {
  icon: React.ReactNode;
  topic: string;
}

const TopicTag = ({ icon, topic }: Props) => {
  return (
    <div className="rounded-2xl shadow hover:scale-105 duration-300 flex items-center bg-white mb-4 text-secondary cursor-pointer">
      <div className="bg-gray rounded-l-2xl p-4 text-xl hover:bg-primary hover:text-white">
        {icon}
      </div>
      <div className="pl-4 m-2 text-md font-semibold">{topic}</div>
    </div>
  );
};

export default TopicTag;
