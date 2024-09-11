import * as Style from "../styles";
import useFilterStore from "../../../store/useFilterStore";
import useCafeStudySelectFilterStore from "../../../store/useCafeStudySelctFilterStore";
import { TitleText2 } from "../../../common/Text";
import { useEffect, useState } from "react";
import { FilterOption } from "../../../types/cafestudyfilterType";
import RenderFilterContent from "./RenderFilterContent";
import React from "react";

const FilterOverlay = React.memo(() => {
  const { closeMenu } = useFilterStore();
  const [startY, setStartY] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const { selectedCategory, setCategory } = useCafeStudySelectFilterStore();

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setStartY(event.clientY);
    setIsDragging(true);
    console.log("클릭");
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
    console.log("클릭2");
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

  const handleClickFilter = (props: FilterOption) => {
    setCategory(props);
    console.log("클릭3");
  };

  const Filters = ["카테고리", "날짜", "카페"] as const;

  useEffect(() => {
    document.getElementById("filter")!.scrollTo(0, 0);
  }, [selectedCategory]);

  //오직 한번, 상단이 처음 마운트 되었을 때만 실행해야 하는 로직이라서 의존성 배열에 setCategory만 있습니다. 문제 없는 코드입니다.
  useEffect(() => {
    if (selectedCategory !== "카테고리") {
      setCategory("카테고리");
    }
  }, [setCategory]);

  //웹 최적화 검증
  useEffect(() => {
    console.log("상단 필터 오버레이 렌더링");
  });

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
          {Filters.map((filter) => (
            <Style.TopSection
              key={filter}
              onClick={() => handleClickFilter(filter)}
            >
              <TitleText2 $disabled={filter !== selectedCategory}>
                {filter}
              </TitleText2>
            </Style.TopSection>
          ))}
        </Style.ContainerTop>
        <RenderFilterContent selectedCategory={selectedCategory} />
      </Style.FilterContainer>
    </Style.Overlay2>
  );
});

export default FilterOverlay;
