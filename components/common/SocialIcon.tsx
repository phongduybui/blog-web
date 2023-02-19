interface Props {
  icon: React.ReactNode;
  href?: string;
  size?: SocialIconSize;
}

export type SocialIconSize = 'small' | 'medium' | 'large';

const SocialIcon = ({ icon, href = '', size }: Props) => {
  const padding = (() => {
    switch (size) {
      case 'small':
        return 1;
      case 'medium':
        return 2;
      default:
        return 3;
    }
  })();
  return (
    <a
      href={href}
      target="_blank"
      className={`p-${padding} bg-gray text-2xl rounded-full hover:bg-primary hover:text-white cursor-pointer`}
      rel="noreferrer"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
