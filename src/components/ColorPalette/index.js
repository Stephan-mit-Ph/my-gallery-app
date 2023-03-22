import styled from "styled-components";
import { uid } from "uid";

const StyledColorContainer = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
  display: inline-block;

`;

export default function ColorPalette({colors}) {
    return(
      <div>
        {colors.map((color) => {
          return (
            <StyledColorContainer color={color} key={uid()} aria-label="color"/>
          )
        })}
      </div>
    );
}