import * as S from './styles';

type CheckboxProps = {
  id: string;
  checked: boolean;
  size?: number;
  handler?: () => void;
  disabled?: boolean;
};

const Checkbox = ({ id, checked, handler, size, disabled }: CheckboxProps) => {
  return (
    <S.Checkbox
      id={id}
      onClick={handler}
      checked={checked}
      type="checkbox"
      size={size}
      disabled={disabled}
      readOnly
    />
  );
};

export default Checkbox;
