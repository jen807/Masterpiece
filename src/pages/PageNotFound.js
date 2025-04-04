import emotion_4 from "../components/img/emotion/emotion_4.png";
import chat1_1 from "../components/img/chat/chat1_1.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* padding: 30px 0; */
  a {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h3 {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }

  @media screen and (max-width: 440px) {
    h3 {
      font-size: 14px;
    }
  }
`;
const Npc = styled.div`
  width: 150px;

  img {
    @media screen and (max-width: 440px) {
      width: 100px;
      transform: translateX(20px);
    }
  }
`;
const Chat = styled.div`
  width: 600px;
  position: relative;
  margin: 50px 0 30px 0;
  h2 {
    position: absolute;
    top: 30%;
    left: 22%;
    color: #827459;
    font-size: 26px;
    font-family: "Noto Sans KR";
    font-weight: 600;
    line-height: 40px;
    span {
      color: #0fb3cf;
    }
  }
  @media screen and (max-width: 440px) {
    width: 330px;

    h2 {
      font-size: 16px;
      line-height: 28px;
      left: 20%;
    }
  }
`;

const PageNotFound = () => {
  return (
    <Container>
      <Link to={"/"}>
        <Npc>
          <img src={emotion_4} alt="여욱이파칭" />
        </Npc>

        <Chat>
          <img src={chat1_1} alt="말풍선1" />
          <h2>
            아이고, 손님... <br />
            <span>경로</span>를 잘못 찾아오셨습니다요!
          </h2>
        </Chat>
        <h3>화면을 클릭해 홈으로 이동하세요</h3>
      </Link>
    </Container>
  );
};

export default PageNotFound;
