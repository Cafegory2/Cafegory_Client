import { useState } from "react";
import CreateInfo from "../../components/cafestudyCreate/CreateInfo";
import CreateIntro from "../../components/cafestudyCreate/CreateIntro";
import * as Style from "../../components/cafestudyCreate/styles";
import { Color } from "../../constants";
import { MainLayout2 } from "../../styles/Layout.styles";

const CreateAddComponents = () => {
  const [view, setView] = useState('info');
  let currentPage = 1;
  const handleView = (view, page) => {
   setView(view);
   currentPage = page;
  }
  const handleSave = () => {
    console.log('저장')
    
  }

  return (
    <MainLayout2 $padding={'0 16px'}>
      {view === 'info' ? 
        <>
          <CreateInfo />
          <Style.FixedBottom> 
            <Style.CenterFlex>
              <Style.Button
              onClick={() => handleView('intro', 2)}
              $fontSize={22} 
              $fontWeight={700}
              $color={'#2a2a2a'}
              $backGround={Color.GreenText}
              >
              다음으로({currentPage}/2)
              </Style.Button>
            </Style.CenterFlex>
          </Style.FixedBottom>
        </>
        : 
        <>
          <CreateIntro />
          <Style.FixedBottom> 
            <Style.CenterFlex $gap={10}>
              <Style.Button 
                $fontSize={22} 
                $fontWeight={700}
                $color={'#939393'}
                onClick={() => handleView('info', 1)}
                $backGround={'rgba(0,0,0,.1)'}
              >이전으로</Style.Button>
              <Style.Button 
                $fontSize={22} 
                $fontWeight={700}
                $color={'#2a2a2a'}
                onClick={handleSave}
                $backGround={Color.GreenText}
              >작성완료({currentPage}/2)</Style.Button>
            </Style.CenterFlex>
          </Style.FixedBottom>
        </>
      }

      
    </MainLayout2>
  )
}

export default CreateAddComponents;