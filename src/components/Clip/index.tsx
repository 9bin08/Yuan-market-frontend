import Icon from '@components/@shared/Icon';
import * as S from './styles';

type ClipProps = {
  label: string;
  onClickHandler?: () => void;
  onClose?: () => void;
};

const Clip = ({ label, onClickHandler, onClose }: ClipProps) => {
  if (label.trim() === '') return null;

  return (
    <S.ClipContainer onClick={onClickHandler}>
      <span>{label}</span>
      <Icon name="닫기_기본_키컬러" onClick={onClose} />
    </S.ClipContainer>
  );
};

export default Clip;
