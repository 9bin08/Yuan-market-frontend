import * as S from './styles';

export type ButtonPriority = 'primary' | 'secondary';

type ButtonProps = {
  label: string;
  priority: ButtonPriority;
  onClickHandler?: () => void;
};

const Button = ({ label, priority, onClickHandler }: ButtonProps) => {
  return (
    <S.Button priority={priority} onClick={onClickHandler}>
      {label}
    </S.Button>
  );
};

export default Button;
