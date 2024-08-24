import * as Style from "../styles";
import useFilterStore from "../../../store/useFilterStore";
import { BodyText1, TitleText2 } from "../../../common/Text";
import { useState } from "react";

export const FilterOverlay = () => {
  const { closeMenu } = useFilterStore();
  const [startY, setStartY] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setStartY(event.clientY);
    setIsDragging(true);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentY = event.clientY;
    const movementY = currentY - startY;

    if (movementY > 0) {
      setMoveY(movementY);
      if (movementY > 120) {
        closeMenu();
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setMoveY(0);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    setStartY(touch.clientY);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    const currentY = touch.clientY;
    const movementY = currentY - startY;

    if (movementY > 0 && movementY <= 120) {
      setMoveY(movementY);
    } else if (movementY > 120) {
      closeMenu();
    }
  };

  const handleTouchEnd = () => {
    if (moveY < 120) {
      setMoveY(0);
    } else {
      closeMenu();
    }
  };

  return (
    <Style.Overlay2 onClick={closeMenu}>
      <Style.FilterContainer
        onClick={handleMenuClick}
        style={{ transform: `translateY(${moveY}px)` }}
      >
        <Style.ContainerTop
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Style.ContainerSlider />
          <Style.TopSection>
            <TitleText2>카테고리</TitleText2>
          </Style.TopSection>
          <Style.TopSection>
            <TitleText2>날짜</TitleText2>
          </Style.TopSection>
          <Style.TopSection>
            <TitleText2>카페</TitleText2>
          </Style.TopSection>
        </Style.ContainerTop>
        <Style.ContainerBottom>
          <Style.BottomSection>
            <BodyText1>개발</BodyText1>
          </Style.BottomSection>
          <Style.BottomSection>
            <BodyText1>개발</BodyText1>
          </Style.BottomSection>
          <Style.BottomSection>
            <BodyText1>개발</BodyText1>
          </Style.BottomSection>
          <Style.BottomSection>
            <BodyText1>개발</BodyText1>
          </Style.BottomSection>
          <Style.BottomSection>
            <BodyText1>개발</BodyText1>
          </Style.BottomSection>
          <Style.BottomSection>
            <BodyText1>개발</BodyText1>
          </Style.BottomSection>
          <Style.BottomSection>
            <BodyText1>개발</BodyText1>
          </Style.BottomSection>
          <Style.BottomSection>
            <BodyText1>개발</BodyText1>
          </Style.BottomSection>
          <Style.BottomSection>
            <BodyText1>개발</BodyText1>
          </Style.BottomSection>
          <Style.BottomSection>
            <BodyText1>개발</BodyText1>
          </Style.BottomSection>
          <Style.BottomSection>
            <BodyText1>개발</BodyText1>
          </Style.BottomSection>
          <Style.BottomSection>
            <BodyText1>개발</BodyText1>
          </Style.BottomSection>
        </Style.ContainerBottom>
      </Style.FilterContainer>
    </Style.Overlay2>
  );
};
