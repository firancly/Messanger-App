import { useLocalSearchParams } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const contacts = [
  {
    id: "1",
    name: "Alice",
    avatar: "https://i.pravatar.cc/150?img=12",
    message: "Hey, how's it going?",
  },
  {
    id: "2",
    name: "Bob",
    avatar: "https://i.pravatar.cc/150?img=33",
    message: "Are we still on for tonight?",
  },
  {
    id: "3",
    name: "Charlie",
    avatar: "https://i.pravatar.cc/150?img=54",
    message: "Sent you the files.",
  },
  {
    id: "4",
    name: "Dave",
    avatar: "https://i.pravatar.cc/150?img=15",
    message: "Lol that's wild",
  },
  {
    id: "5",
    name: "Eve",
    avatar: "https://i.pravatar.cc/150?img=47",
    message: "Can you call me back?",
  },
  {
    id: "6",
    name: "Frank",
    avatar: "https://i.pravatar.cc/150?img=22",
    message: "See you tomorrow",
  },
  {
    id: "7",
    name: "Grace",
    avatar: "https://i.pravatar.cc/150?img=44",
    message: "Thanks for the help!",
  },
  {
    id: "8",
    name: "Heidi",
    avatar: "https://i.pravatar.cc/150?img=29",
    message: "Where are you?",
  },
  {
    id: "9",
    name: "Ivan",
    avatar: "https://i.pravatar.cc/150?img=7",
    message: "Got it, thanks",
  },
  {
    id: "10",
    name: "Judy",
    avatar: "https://i.pravatar.cc/150?img=36",
    message: "Happy birthday!",
  },
  {
    id: "11",
    name: "Mallory",
    avatar: "https://i.pravatar.cc/150?img=41",
    message: "On my way",
  },
  {
    id: "12",
    name: "Niaj",
    avatar: "https://i.pravatar.cc/150?img=52",
    message: "Let's catch up soon",
  },
  {
    id: "13",
    name: "Olivia",
    avatar: "https://i.pravatar.cc/150?img=25",
    message: "Did you see the news?",
  },
];

export default function Chat() {
  const { id, name, avatar } = useLocalSearchParams<{
    id: string;
    name: string;
    avatar: string;
  }>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <ArrowLeft size={50} />
        </View>
        <Image
          source={{
            uri: avatar,
          }}
          style={styles.image}
        />
        <Text style={styles.header}>{name}</Text>
      </View>
      {/* Chat feed */}
      <View style={styles.chatFeed}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "#2fc6fd",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    padding: 10,
    paddingLeft: 0,
  },
  header: {
    fontSize: 24,
    width: "100%",
    fontWeight: "bold",
    backgroundColor: "#2fc6fd",
    alignSelf: "center",
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  chatFeed: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
