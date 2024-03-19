import { FlatList, StyleSheet } from "react-native";
import { FakeUserList, FakeUserData, FakeUserName } from "../services/fakeData";
import { getUserButton } from "./UserButton";

export const UserList = ({
  userData,
  setCurrentUser,
}: {
  userData: FakeUserList;
  setCurrentUser: ({name}: {name: FakeUserName}) => void;
}) => {
  const UserButton = getUserButton(setCurrentUser);
  const keyGenerator = (item: FakeUserName, index: number) =>
    `${item.first}_${item.last}_${index}`;
  return (
    <FlatList
      style={styles.container}
      data={userData}
      renderItem={UserButton}
      keyExtractor={keyGenerator}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: 'stretch' },
});
