import * as Style from "../styles";
import useFilterStore from "../../../store/useFilterStore";
import useCafeStudySelectFilterStore from "../../../store/useCafeStudySelctFilterStore";
import { TitleText2 } from "../../../common/Text";
import { useEffect, useState } from "react";
import { FilterOption } from "../../../types/cafestudyfilterType";
import { RenderFilterContent } from "./RenderFilterContent";

export const FilterOverlay = () => {
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

  const handleClickFilter = (props: FilterOption) => {
    setCategory(props);
  };

  const Filters = ["카테고리", "날짜", "카페"] as const;

  useEffect(() => {
    document.getElementById("filter")!.scrollTo(0, 0);
  }, [selectedCategory]);

  useEffect(() => {
    setCategory("카테고리");
  }, [setCategory]);

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
        <RenderFilterContent />
      </Style.FilterContainer>
    </Style.Overlay2>
  );
};
