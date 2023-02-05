import { Header } from "../../Components/Header";
import * as s from "./styles";

export const HomePage = () => {
  return (
    <>
      <Header />
      <s.Container>
        <header className="App-header">
          chegou a hora de escolher a sua energia
        </header>
        <p>
          Com a Lemon, você sempre – e é sempre mesmo – vai ter uma energia mais
          barata e sustentável para o seu negócio. Tudo digital!
        </p>
      </s.Container>
    </>
  );
};
