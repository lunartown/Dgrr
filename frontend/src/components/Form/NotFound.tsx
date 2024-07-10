import breadFix from 'assets/images/ico_bread_fix.png';
import { Button } from 'components/Elements/Button/BasicButton';
import { useNavigate } from 'react-router-dom';

  export const NotFound = () => {
    const navigate = useNavigate();

    const onClick = () => {
      navigate("/");  
    }
    
  
    return (
      <div className="NotFound">
        <div className="MenuBody">
        <div className="MenuBtns">
          <img src={breadFix} alt="빵_공사" id="bread_fix"/>
          <p>알 수 없는 페이지입니다.</p>
        </div>
        <div className="MenuBackBtns">
          <Button onClick={onClick}>홈으로 돌아가기</Button>
        </div>
      </div>
      </div>
    );
  };
  