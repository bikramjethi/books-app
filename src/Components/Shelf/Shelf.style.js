import styled from "styled-components";

export default styled.div`
  width: 30%;
  text-align: center;
  height: 60%;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }

  .shelf {
    border: 10px solid red;
    border-radius: 10px;
    height: 100%;
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

  .shelf-row {
      border-bottom: 10px solid blue;
      &:last-child {
        border-bottom: none;
      }
  }
`;
