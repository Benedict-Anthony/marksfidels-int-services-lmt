import styled from "styled-components";

export const About = styled.div`
  background: transparent;
  border-radius: 3px;
  padding: 0.5rem 0;
  transition: all 200ms ease-in-out;
  width: 100%;

  &:hover {
    filter: brightness(0.85);
    transform: scale(1.1);
    background-color: rgba(226, 223, 234, 0.345);
    transition: all 0.4 linear;
    cursor: pointer;
  }
`;

export const Fade = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  background-color: rgba(135, 53, 53, 0.1);

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(29, 19, 19, 0.1);
  }
`;
