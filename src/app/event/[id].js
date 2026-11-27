import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const eventDetails = {
  1: {
    history:
      "Hosted annually at PUCIT since 2012, the ACM Speed Programming Challenge is the department's flagship competitive coding tradition, preparing students for regional ICPC qualifiers.",
    goals:
      "Sharpen algorithmic thinking, optimize time and space complexity under strict 3-hour pressure, and build teamwork across C++, Python, and Java problem sets.",
    requirements:
      "Open to teams of 1–3 BSSE, BSCS, and BSIT students. Bring your valid PUCIT student ID card; lab workstations and compilers are provided on-site.",
  },
  2: {
    history:
      "Organized by the IEEE PUCIT Student Branch, this hands-on engineering series connects theoretical classroom coursework with practical hardware, IoT, and modern software architectures.",
    goals:
      "Walk away with a working prototype, learn industry debugging workflows, and connect directly with senior mentors and visiting tech leads.",
    requirements:
      "Open to all semesters with zero prior hardware experience required. Bring a charged laptop with VS Code installed and your university registration card.",
  },
  3: {
    history:
      "EMS has curated PUCIT's signature cultural evenings and welcome ceremonies for over a decade, bringing faculty, alumni, and students from both Old and New Campuses together.",
    goals:
      "Celebrate semester milestones, foster cross-batch networking beyond lecture halls, and enjoy live student performances, trivia, and a full dinner.",
    requirements:
      "Exclusive to enrolled PUCIT students and invited alumni. Digital pass verification and original university ID card are mandatory at the venue gate.",
  },
  4: {
    history:
      "Launched by PUCIT's information security enthusiasts, the CyberSec CTF simulates real-world defensive and offensive security scenarios in a safe sandboxed environment.",
    goals:
      "Master foundational web exploitation, reverse engineering, cryptography, and binary analysis while competing on a live real-time leaderboard.",
    requirements:
      "Open to solo participants or duos from any semester. Bring a laptop capable of running Kali Linux or a browser-based terminal environment.",
  },
};

export default function Detail() {
  const { id, title, society, date, time, venue } = useLocalSearchParams();
  const eventDetail = eventDetails[id] || {};

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Go Back</Text>
      </Pressable>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerCard}>
          <Text style={styles.societyBadge}>{society}</Text>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.metaBox}>
            <Text style={styles.metaText}>
              {date} • {time}
            </Text>
            <Text style={styles.venueText}>{venue}</Text>
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeading}>About & History</Text>
          <Text style={styles.sectionBody}>{eventDetail.history}</Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeading}>Goals</Text>
          <Text style={styles.sectionBody}>{eventDetail.goals}</Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeading}>Requirements</Text>
          <Text style={styles.sectionBody}>{eventDetail.requirements}</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.passButton}>
          <Text style={styles.passButtonText}>Get Pass</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0D14",
  },
  backButton: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 10,
  },
  backText: {
    color: "#38BDF8",
    fontSize: 15,
    fontWeight: "600",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 14,
  },
  headerCard: {
    backgroundColor: "#111625",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#1F2942",
  },
  societyBadge: {
    color: "#38BDF8",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },
  title: {
    color: "#F8FAFC",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 14,
  },
  metaBox: {
    borderTopWidth: 1,
    borderTopColor: "#1F2942",
    paddingTop: 12,
    gap: 4,
  },
  metaText: {
    color: "#CBD5E1",
    fontSize: 14,
    fontWeight: "500",
  },
  venueText: {
    color: "#94A3B8",
    fontSize: 14,
  },
  sectionCard: {
    backgroundColor: "#111625",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#1F2942",
  },
  sectionHeading: {
    color: "#38BDF8",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 6,
  },
  sectionBody: {
    color: "#CBD5E1",
    fontSize: 14,
    lineHeight: 21,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#1F2942",
    backgroundColor: "#0A0D14",
  },
  passButton: {
    backgroundColor: "#0284C7",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  passButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
