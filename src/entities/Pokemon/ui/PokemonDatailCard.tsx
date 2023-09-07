import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  Flex,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Spinner,
  Stack,
  StackDivider,
  Text,
  Image,
} from "@chakra-ui/react";
import type { PokemonDetail } from "@entities/Pokemon";
import { FC, memo } from "react";
interface PokemonDatailCardProps {
  data: PokemonDetail | undefined;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}
export const PokemonDatailCard: FC<PokemonDatailCardProps> = memo((props) => {
  const { data, isLoading, isError, isSuccess } = props;
  return (
    <Box>
      {isError && (
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Покемона с таким именем не найдено
          </AlertTitle>
        </Alert>
      )}

      {isSuccess && (
        <SimpleGrid
          columns={{ base: 1 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex justifyContent={"center"} flexWrap={"wrap"}>
            {data?.sprites.front_default && (
              <Image
                rounded={"md"}
                alt={"product image"}
                src={data?.sprites.front_default}
                align={"center"}
              />
            )}
            {data?.sprites.front_shiny && (
              <Image
                rounded={"md"}
                alt={"product image"}
                src={data?.sprites.front_shiny}
                align={"center"}
              />
            )}
            {data?.sprites.back_default && (
              <Image
                rounded={"md"}
                alt={"product image"}
                src={data?.sprites.back_default}
                align={"center"}
              />
            )}
            {data?.sprites.back_shiny && (
              <Image
                rounded={"md"}
                alt={"product image"}
                src={data?.sprites.back_shiny}
                align={"center"}
              />
            )}
            {data?.sprites.back_female && (
              <Image
                rounded={"md"}
                alt={"product image"}
                src={data?.sprites.back_female}
                align={"center"}
              />
            )}
            {data?.sprites.back_shiny_female && (
              <Image
                rounded={"md"}
                alt={"product image"}
                src={data?.sprites.back_shiny_female}
                align={"center"}
              />
            )}
            {data?.sprites.front_shiny_female && (
              <Image
                rounded={"md"}
                alt={"product image"}
                src={data?.sprites.front_shiny_female}
                align={"center"}
              />
            )}
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                textTransform="capitalize"
              >
                {data?.name}
              </Heading>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={<StackDivider />}
            >
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Profile
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>
                      {" "}
                      <Text as={"span"} fontWeight={"bold"}>
                        Weight:
                      </Text>{" "}
                      {data?.weight}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Height:
                      </Text>{" "}
                      {data?.height}
                    </ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Abilities
                </Text>

                <List spacing={2}>
                  {data?.abilities.map((ability) => (
                    <ListItem key={ability.ability.name}>
                      <Text as={"span"} fontWeight={"bold"}>
                        {ability.ability.name}
                      </Text>{" "}
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Stats
                </Text>

                <List spacing={2}>
                  {data?.stats.map((stat) => (
                    <ListItem key={stat.stat.name}>
                      <Text as={"span"} fontWeight={"bold"}>
                        {stat.stat.name}:
                      </Text>{" "}
                      {stat.base_stat}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
      )}

      {isLoading && (
        <Center>
          <Spinner size="xl" />
        </Center>
      )}
    </Box>
  );
});
