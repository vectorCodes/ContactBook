import { Box, Button, HStack, Stack, Text, Spacer } from "@chakra-ui/react";
import { UserProfile } from "../store/Userstore";

const Sidebar = ({ datas }) => {
  const deleteUser = (id) => {
    UserProfile.update((s) => {
      s.contacts.splice(id, 1);
    });
  };
  return (
    <Box bg="gray.500" h="100vh" w="25%" py="10" px="6">
      <Text fontWeight="bold" fontSize="3xl">
        Contact Book
      </Text>
      <Stack mt="10">
        {datas.map((data, id) => {
          return (
            <Box key={id} cursor="pointer">
              <HStack>
                <Text
                  fontSize="2xl"
                  onClick={() => {
                    UserProfile.update((s) => {
                      s.active = data;
                    });
                  }}
                  _hover={{
                    bg: "black",
                    textColor: "white",
                    rounded: "lg"
                  }}
                  p="1"
                >
                  {data.firstName}
                </Text>
                <Spacer />
                <Button
                  colorScheme="red"
                  onClick={() => {
                    deleteUser(id);
                  }}
                >
                  Delete
                </Button>
              </HStack>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};
export default Sidebar;
