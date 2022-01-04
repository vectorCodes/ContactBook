import {
  Box,
  Button,
  HStack,
  Spacer,
  Text,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { UserProfile } from "../store/Userstore";
const Content = () => {
  const { active } = UserProfile.useState();
  const [modal, setModal] = useState(false);
  const firstNames = useRef(null);
  const lastNames = useRef(null);
  const Email = useRef(null);
  const Age = useRef(null);
  const Address = useRef(null);
  const { contacts } = UserProfile.useState();

  const savingUser = () => {
    let firstName = firstNames.current.value;
    let lastName = lastNames.current.value;
    let email = Email.current.value;
    let age = Age.current.value;
    let address = Address.current.value;

    let users = [
      ...contacts,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        address: address
      }
    ];
    UserProfile.update((s) => {
      s.contacts = users;
      setModal(false);
    });
  };
  return (
    <Box p="6" w="full">
      <HStack fontSize="4xl" fontWeight="bold">
        <Text> {active.firstName}</Text>
        <Text>{active.lastName}</Text>
        <Spacer />
        <Button
          colorScheme="green"
          onClick={() => {
            setModal(true);
          }}
        >
          Add new user
        </Button>
      </HStack>
      <Box mt="10" fontSize="2xl" fontWeight="bold">
        <Text>FirstName: {active.firstName}</Text>
        <Text>LastName: {active.lastName}</Text>
      </Box>
      <Stack mt="5" fottweight="semibold" fontSize="xl">
        <Text>Email: {active.email}</Text>
        <Text>Age: {active.age}</Text>
        <Text>Address: {active.address}</Text>
      </Stack>
      <Modal
        isOpen={modal}
        onClose={() => {
          setModal(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add to Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={firstNames} placeholder="Enter FirstName" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input ref={lastNames} placeholder="Enter LastName" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input ref={Email} placeholder="Enter Email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Age</FormLabel>
              <Input ref={Age} placeholder="Enter Age" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Address</FormLabel>
              <Input ref={Address} placeholder="Enter Address" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={savingUser}>
              Save
            </Button>
            <Button>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Content;
