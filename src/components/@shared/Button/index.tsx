import * as S from './styles';

export type ButtonPriority = 'primary' | 'secondary';

type ButtonProps = {
  label: string;
  disabled: boolean;
  onClickHandler?: () => void;
};

const Button = ({ label, disabled, onClickHandler }: ButtonProps) => {
  return (
    <S.Button disabled={disabled} onClick={onClickHandler}>
      {label}
    </S.Button>
  );
};

export default Button;
