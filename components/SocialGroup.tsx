import React from 'react';
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiYoutubeFill,
} from 'react-icons/ri';
import SocialIcon, { SocialIconSize } from './common/SocialIcon';

interface Props {
  facebook?: string;
  insta?: string;
  youtube?: string;
  size?: SocialIconSize;
}

const defaultLink = 'https://www.facebook.com/profile.php?id=100006364009186';

const SocialGroup = ({
  facebook = defaultLink,
  insta = defaultLink,
  youtube = defaultLink,
  size,
}: Props) => {
  return (
    <div className="flex justify-center flex-wrap space-x-2">
      <SocialIcon size={size} href={facebook} icon={<RiFacebookCircleFill />} />
      <SocialIcon size={size} href={youtube} icon={<RiYoutubeFill />} />
      <SocialIcon size={size} href={insta} icon={<RiInstagramFill />} />
    </div>
  );
};

export default SocialGroup;
