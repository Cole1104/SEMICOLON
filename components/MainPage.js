import Navi from "./Navi";
import GoButton from "./GoButton";
import MenuButton from "./MenuButton";

import 'bootstrap/dist/css/bootstrap.min.css';

function MainPage() {
    
    return(
    <>
    <Navi title="Home"/>
    <div className="MainPage">
        <h1>모두가 행복했으면 좋겠다</h1>
    </div>

    <div className="bodyy">
    <div>
    <h1 className="title">-Menu-</h1>
    <div className="Menu">
    <div className="Menus">
        <MenuButton title="채팅" semiTitle="모르는 사람과 만나세요" URL="/chat"/>
        <MenuButton title="카드" semiTitle="빛나는 순간을 올리세요"URL="/cards"/>
        <MenuButton title="난 시험 싫어" semiTitle="시험 꿀팁 공유 합니다"URL="/MMB"/>
        <MenuButton title="업데이트" semiTitle="한달에 한번씩은 업데이트 예정"URL="/"/>
    </div>
    </div>
    </div>
    <div>
    <h1 className="title">-Description-</h1>
    <div className="textBox">
    dkdkdkdkdkkaisvdiqhwyfviqyvwefdiyqvavtuuewiasfoeguwouaigfyiu
    </div>
    </div>
    </div>

    <div className="infos">
        <div className="infoOfRc"><h1>가면무도회 채팅</h1><GoButton title='Go to chat' /></div>
        <div className="infoOfCards"><h1>아 이거 카드 각이네</h1><GoButton title='Go to cards'/></div>
        <div className="infoOfMMB"><h1>이번 시험도 망했어...라면?</h1><GoButton title='Go to study'/></div>
    </div>

    <footer>일광중 자율동아리 SEMICOLON</footer>
    </>)
}
export default MainPage;