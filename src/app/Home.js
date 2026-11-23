import { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const events = [
  {
    id: "1",
    title: "ACM Speed Programming Contest",
    society: "ACM",
    date: "15-06-2026",
    time: "12:00 PM",
    venue: "New Seminar Hall Old Campus PUCIT",
  },
  {
    id: "2",
    title: "IEEE Robotics Workshop",
    society: "IEEE",
    date: "09-11-2026",
    time: "09:00 AM",
    venue: "New Campus PUCIT",
  },
  {
    id: "3",
    title: "EMS Annual Welcome Dinner",
    society: "EMS",
    date: "29-11-2026",
    time: "07:00 PM",
    venue: "Old Campus PUCIT",
  },
  {
    id: "4",
    title: "CyberSec CTF Qualifier",
    society: "CyberSec",
    date: "12-12-2026",
    time: "01:00 PM",
    venue: "New Campus PUCIT",
  },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectionState, setSelectionState] = useState("All");
  const data = ["All", "ACM", "IEEE", "EMS", "CyberSec"];
  const filteredEvents = events.filter(
    (x) =>
      (selectionState === "All" || x.society === selectionState) &&
      x.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome! Muneeb</Text>
        <Text style={styles.appTitle}>CampusPulse</Text>
        <Text style={styles.subtitle}>Society Events & Digital Passes</Text>
      </View>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for any event"
          placeholderTextColor="#64748B"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <Pressable onPress={() => setSearchQuery("")}>
            <Text style={styles.clearBtn}>✕</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.chipWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((x) => (
            <Pressable
              key={x}
              onPress={() => setSelectionState(x)}
              style={[styles.chip, x === selectionState && styles.activeChip]}
            >
              <Text
                style={[
                  styles.chipText,
                  x === selectionState && styles.activeChipText,
                ]}
              >
                {x}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Events Found</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <Text style={styles.cardSociety}> {item.society}</Text>
            <Text style={styles.cardTitle}> {item.title}</Text>
            <Text style={styles.cardMeta}>
              {" "}
              {item.date} {item.time}
            </Text>
            <Text style={styles.cardVenue}> {item.venue}</Text>
          </Pressable>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0D14",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  greeting: {
    fontSize: 13,
    fontWeight: "600",
    color: "#38BDF8",
    marginBottom: 4,
    letterSpacing: 0.3,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#F1F5F9",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 13,
    color: "#94A3B8",
    marginTop: 2,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111625",
    marginHorizontal: 20,
    marginTop: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1F2942",
    height: 46,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#F1F5F9",
  },
  clearBtn: {
    fontSize: 16,
    color: "#64748B",
    paddingLeft: 8,
  },
  chipWrapper: {
    paddingVertical: 12,
    paddingLeft: 20,
  },
  chip: {
    backgroundColor: "#161D2F",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#1F2942",
  },
  activeChip: {
    backgroundColor: "#0284C7",
    borderColor: "#38BDF8",
  },
  chipText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#94A3B8",
  },
  activeChipText: {
    color: "#FFFFFF",
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "#111625",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1F2942",
  },
  cardSociety: {
    fontSize: 12,
    fontWeight: "700",
    color: "#38BDF8",
    letterSpacing: 0.5,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#F1F5F9",
    marginTop: 6,
  },
  cardMeta: {
    fontSize: 13,
    color: "#94A3B8",
    marginTop: 8,
  },
  cardVenue: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 4,
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  emptyText: {
    fontSize: 15,
    color: "#94A3B8",
  },
});
