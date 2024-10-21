import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  height: 32px;
  margin-top: 21px;
  margin-bottom: 24px;
`;

export const BigContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  margin-bottom: 13px;
`;

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Top = styled.div`
  width: 100%;
  height: 23px;
  display: flex;
  flex-direction: row;
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
`;

export const FinderButton = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  padding: 11px 12px;
  cursor: pointer;
`;

export const RadioContainer = styled.div`
  width: 56px;
  height: 30px;
  border-radius: 10px;
  padding: 0px 9px 0px 12px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const RadioContainer2 = styled(RadioContainer)`
  width: 100px;
  padding: 0px 12px;
`;
