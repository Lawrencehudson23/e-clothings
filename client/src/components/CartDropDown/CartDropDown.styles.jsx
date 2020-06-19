import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;
export const CartDropDownButton = styled(CustomButton)`
  margin-top: auto;
`;
CartDropDownButton.displayname = "CartDropDownButton";

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

EmptyMessageContainer.displayname = "EmptyMessageContainer";

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
