import { storiesOf } from "@storybook/react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "../Components/Button";
import Dialog from "../Components/Dialog";
import { theme } from "../style/theme";

import DialogMDXDocumentation from "./Dialog.mdx";

storiesOf("Dialog", module)
  .add(
    "Sem título",
    () => (
      <ThemeProvider theme={theme}>
        <Dialog isOpen={true} onClose={() => {}} closeOnOverlayClick={false}>
          Conteúdo do Dialog
        </Dialog>
      </ThemeProvider>
    ),
    {
      docs: {
        page: DialogMDXDocumentation,
      },
    }
  )
  .add(
    "Com título",
    () => (
      <ThemeProvider theme={theme}>
        <Dialog
          title="Título do Dialog"
          isOpen={true}
          onClose={() => {}}
          closeOnOverlayClick={false}
        >
          Conteúdo do Dialog
        </Dialog>
      </ThemeProvider>
    ),
    {
      docs: {
        page: DialogMDXDocumentation,
      },
    }
  )
  .add(
    "Com fechamento ao clicar na overlay",
    () => (
      <ThemeProvider theme={theme}>
        <Dialog
          title="Título do Dialog"
          isOpen={true}
          onClose={() => {}}
          closeOnOverlayClick={true}
        >
          Conteúdo do Dialog
        </Dialog>
      </ThemeProvider>
    ),
    {
      docs: {
        page: DialogMDXDocumentation,
      },
    }
  )
  .add(
    "doc",
    () => {
      const [isOpen, setIsOpen] = useState(false);
      return (
        <ThemeProvider theme={theme}>
          <Button onClick={() => setIsOpen(true)}>
            Clique para abrir o Dialog
          </Button>
          <Dialog
            title="Título do Dialog"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            closeOnOverlayClick={true}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            commodo mi, in bibendum tellus. Nullam non erat sit amet elit congue
            bibendum. Sed vel velit vel velit finibus rutrum. Aliquam eget
            tempor nisl. In hac habitasse platea dictumst. Sed malesuada quam
            euismod, eleifend lectus ac, bibendum risus. Maecenas eget diam
            congue, molestie magna at, faucibus mi. Sed suscipit libero a libero
            commodo, vel dapibus velit malesuada. Aliquam tincidunt commodo dui.
            Sed vel nulla blandit, congue lacus id, hendrerit ante.
          </Dialog>
        </ThemeProvider>
      );
    },
    {
      docs: {
        page: DialogMDXDocumentation,
      },
    }
  );
