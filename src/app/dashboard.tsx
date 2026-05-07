import React from 'react';
import { View, ScrollView, Platform, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import TopAppBar from '../components/TopAppBar';
import FocusCard from '../components/FocusCard';
import MoodCard from '../components/MoodCard';
import CategoryGrid from '../components/CategoryGrid';
import RecentTasksList from '../components/RecentTasksList';
import SideNav from '../components/SideNav';
import BottomNavBar from '../components/BottomNavBar';

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.page}>
      <TopAppBar />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <Text style={styles.title}>Good Morning!</Text>
            <Text style={styles.subtitle}>Let's make today wonderfully productive.</Text>
          </View>

          <View style={styles.row}>
            <View style={[styles.column, styles.leftColumn]}>
              <FocusCard />
            </View>
            <View style={[styles.column, styles.rightColumn]}>
              <MoodCard />
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.column, styles.leftColumn]}>
              <CategoryGrid />
            </View>
            <View style={[styles.column, styles.rightColumn]}>
              <RecentTasksList />
            </View>
          </View>
        </View>
      </ScrollView>

      {Platform.OS === 'web' ? <SideNav /> : <BottomNavBar />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fef7ff',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 140,
  },
  container: {
    width: '100%',
    maxWidth: 1280,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerSection: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1d1a23',
  },
  subtitle: {
    fontSize: 16,
    color: '#7b7486',
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -10,
  },
  column: {
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 24,
  },
  leftColumn: {
    flex: 2,
    minWidth: 300,
  },
  rightColumn: {
    flex: 1,
    minWidth: 300,
  },
});