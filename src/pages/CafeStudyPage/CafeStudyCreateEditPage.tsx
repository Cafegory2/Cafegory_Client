import { useState } from "react";
import CreateInfo from "../../components/cafestudyCreate/CreateInfo";
import CreateIntro from "../../components/cafestudyCreate/CreateIntro";
import { Button, CenterFlex, FixedBottomButton } from "../../components/cafestudyCreate/styles";
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
          <CenterFlex>
            <FixedBottomButton 
              onClick={() => handleView('intro', 2)}
              $fontSize={'22'} 
              $fontWeight={'700'}
              $color={'#2a2a2a'}
              $backGround={Color.GreenText}
            >
              다음으로({currentPage}/2)
            </FixedBottomButton>
          </CenterFlex>
        </>
        : 
        <>
          <CreateIntro />
          <CenterFlex>
           <Button 
            $fontSize={'22'} 
            $fontWeight={'700'}
            $color={'#2a2a2a'}
            onClick={() => handleView('info', 1)}
            $backGround={Color.GreenText}
           >이전으로</Button>
           <Button 
            $fontSize={'22'} 
            $fontWeight={'700'}
            $color={'#2a2a2a'}
            onClick={handleSave}
            $backGround={Color.GreenText}
           >작성완료({currentPage}/2)</Button>
          </CenterFlex>
        </>
      }

      
    </MainLayout2>
  )
}

export default CreateAddComponents;