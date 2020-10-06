import { CSSProperties } from '@material-ui/core/styles/withStyles';
import Lottie from '@rafaelns/react-lottie';
import loading from 'content/animations/loading.json';

interface LoadingProps {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

export const Loading = (props: LoadingProps) => <Lottie source={loading} autoPlay style={props} />;
