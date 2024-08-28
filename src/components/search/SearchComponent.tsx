import * as Style from "./styles";
import { useRef, useEffect } from "react";

export const SearchComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <Style.Layout>
      <Style.Container>
        <Style.InputContainer
          ref={inputRef}
          placeholder="그룹명, 장소, 카페명을 검색해보세요!"
        />
      </Style.Container>
    </Style.Layout>
  );
};
