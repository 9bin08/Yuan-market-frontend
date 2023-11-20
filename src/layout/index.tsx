import { Outlet } from 'react-router-dom';
import * as S from './styles';

const Layout = () => {
  return (
    <S.ChildWrapper>
      <Outlet />
    </S.ChildWrapper>
  );
};

export default Layout;
