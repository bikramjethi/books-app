import styled from "styled-components";

export default styled.div`
  width: 30%;
  text-align: center;
  height: 100%;

  .shelf {
    border: 10px solid red;
    border-radius: 10px;
    height: 70%;
  }

  &.to-buy {
      .shelf {

      }
  }

  &.bought {
      .shelf {
          
      }
  }

  &.read {
      .shelf {
          
      }
  }
`;
