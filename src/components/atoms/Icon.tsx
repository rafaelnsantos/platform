import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface IconProps {
  icon: IconDefinition;
  size: FontAwesomeIconProps['size'];
}

export const Icon = (props: IconProps) => {
  return <FontAwesomeIcon {...props}></FontAwesomeIcon>;
};
