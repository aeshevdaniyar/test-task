import { Header } from "@widgets/Header";
import { Routing } from "./providers/RouterProvider";
import { Box, Container } from "@chakra-ui/react";

export const App = () => {
  return (
    <Box>
      <Container maxW="4xl">
        <Header />
      </Container>

      <Box mt={3}>
        <Routing />
      </Box>
    </Box>
  );
};
