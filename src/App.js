import "./styles.css";
import { UserProfile } from "../store/Userstore";
import Sidebar from "../Components/Sidebar";
import Content from "../Components/Content";
import { Flex } from "@chakra-ui/react";
export default function App() {
  const { contacts } = UserProfile.useState();
  return (
    <Flex w="full">
      <Sidebar datas={contacts} />
      <Content />
    </Flex>
  );
}
