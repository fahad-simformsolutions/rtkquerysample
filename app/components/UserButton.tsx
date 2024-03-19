import { Text, Pressable, StyleSheet } from "react-native";
import { memo } from "react";
import type { FakeUserData, FakeUserName } from "../services/fakeData";

type Props = {
  item: FakeUserData;
};

const compareUserByName = (prevProps: Props, nextProps: Props) => {
  const [prevName, nextName] = [prevProps, nextProps].map(
    ({ item: { name } }) => `${name.first} ${name.last}`
  );

  return prevName === nextName;
};

export const getUserButton = (
  onPress: ({ name }: { name: FakeUserName }) => void
) =>
  ({ item }: {item: FakeUserName}) => {
    const { first, last } = item;
    const onUserButtonPress = () => onPress({ name: item });
    return (
      <Pressable style={styles.container} onPress={onUserButtonPress}>
        <Text style={styles.content}>{`${first} ${last}`}</Text>
      </Pressable>
    );
  };

const styles = StyleSheet.create({
  container: {
    width: "auto",
    alignSelf: "stretch",
    height: 48,
    backgroundColor: "royalblue",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginTop: 0,
    marginBottom: 8,
    borderRadius: 14,
  },
  content: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
});
