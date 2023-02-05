import { Header } from "../../Components/Header";
import * as s from "./styles";

const StarSVG = () => {
  return (
    <>
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 1.007A7 7 0 011 8a7 7 0 017 7 7 7 0 017-7 7 7 0 01-7-7v.007z"
          fill="currentColor"
        ></path>
      </svg>
    </>
  );
};

export const HomePage = () => {
  return (
    <>
      <Header />
      <s.Container>
        <header className="App-header">
          <StarSVG />
          <h1>chegou a hora de escolher a sua energia</h1>
        </header>
        <p>
          Com a Lemon, você sempre – e é sempre mesmo – vai ter uma energia mais
          barata e sustentável para o seu negócio. Tudo digital!
        </p>
      </s.Container>
    </>
  );
};
