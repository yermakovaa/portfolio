import errorImage from '../../assets/images/error.jpg';
import { Img, Title } from './NotFoundView.style';

export default function NotFoundView() {
  return (
    <div role="alert">
      <Img src={errorImage} width="650" alt="Error" />
      <Title>Page not found 😨</Title>
    </div>
  );
}
