import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {TypographyProps} from '@material-ui/core'

interface IconProps {
  icon: IconDefinition;
  size: FontAwesomeIconProps['size'];
  color?: TypographyProps['color'];
}

export const Icon = (props: IconProps) => {
  return <FontAwesomeIcon {...props}></FontAwesomeIcon>;
};
