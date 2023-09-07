import { Box, Image } from "@chakra-ui/react";
import { SearchFilterPokemons } from "@features/SearchFilterPokemons";

export const Header = () => {
  return (
    <Box>
      <Image
        mb={4}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
      />
      <SearchFilterPokemons />
    </Box>
  );
};
