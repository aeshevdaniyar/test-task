import { Flex, Button, Center } from "@chakra-ui/react";
import { FC } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
interface PaginationProps {
  gotoPrevPage: () => void;
  gotoNextPage: () => void;
  next: string | null;
  prev: string | null;
}
export const Pagination: FC<PaginationProps> = (props) => {
  const { gotoNextPage, gotoPrevPage, next, prev } = props;
  const isNextDisabled = next ? false : true;
  const isPrevDisabled = prev ? false : true;
  return (
    <Center>
      <Flex gap={2}>
        <Button
          colorScheme="teal"
          isDisabled={isPrevDisabled}
          onClick={gotoPrevPage}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          colorScheme="teal"
          isDisabled={isNextDisabled}
          onClick={gotoNextPage}
        >
          <ChevronRightIcon />
        </Button>
      </Flex>
    </Center>
  );
};
