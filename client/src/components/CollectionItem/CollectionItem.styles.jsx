import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";
export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    opacity: 0.85;
    display: flex;
  }

  &:hover {
    .image {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    button {
      opacity: unset;
    }

    &:hover {
      .image {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
  font-size: 12px;
`;
export const DollarContainer = styled.span`
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
`;
export const PriceContainer = styled.span`
  width: 10%;
  font-size: 12px;
  text-align: right;
`;
