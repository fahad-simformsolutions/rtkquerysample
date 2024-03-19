import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { FakeUserData } from "../services/fakeData";

export function UserDetailCard({userData, resetUser}: {userData: FakeUserData, resetUser: () => void}) {
  const { name, picture, email, cell } = userData;
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: picture.large }} resizeMode="cover" />
      <Text style={styles.name}>{`${name.title} ${name.first} ${name.last}`}</Text>
      <Text style={styles.content}>{`contact: ${cell}`}</Text>
      <Text style={styles.content}>{`email: ${email}`}</Text>
      <Text style={styles.content}>{`------------------`}</Text>
      <Pressable onPress={resetUser}>
        <Text>Back to list</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
  },
  avatar: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
    fontWeight: "300",
    marginBottom: 5,
  },
});
