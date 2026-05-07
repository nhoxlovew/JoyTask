import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { JoyPet } from '../app/types';

interface MoodCardProps {
  pet?: JoyPet;
}

export default function MoodCard({ pet }: MoodCardProps) {
  const defaultPet: JoyPet = {
    name: 'Puff',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_NA1f6dGOVkgNy1IKPMETCQNYc5Mfx3VgeQ9AsvRfO6st-Hnu0yfhJv5D9dgJLlq6VnwZoO9vLfopFzEfiiMBQyMSoomX2wT4fcB4NgGHi4HrZAmFuY0kUCIHXE8S424DgQmega8WXvuaVV0-FzNLYd4lrIWILjOwV1XqDSc2qaqwJIof0tLs4zpGLiS7AWTC01KxlyLFo7RejVWt2Qri9NYD1bNW9Istu5oVtU-kTkc9JG9d9b3QujruvkAm6SIGcW0bD4TZ_A',
    mood: 'happy',
    streak: 3,
    progress: 0.75,
  };

  const currentPet = pet || defaultPet;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Your Joy Pet</Text>
      <View style={styles.petWrapper}>
        <View style={styles.glowCircle} />
        <Image source={{ uri: currentPet.avatar }} style={styles.petImage} />
        <View style={styles.moodBadge}>
          <MaterialIcons name="mood" size={20} color="#006c4b" />
        </View>
      </View>
      <Text style={styles.description}>
        {currentPet.name} is feeling {currentPet.mood}! You&apos;re on a {currentPet.streak}-day streak.
      </Text>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${currentPet.progress * 100}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ebf7ff',
    borderRadius: 24,
    padding: 24,
    minHeight: 320,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 6,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: '700',
    color: '#1d1a23',
    marginBottom: 16,
  },
  petWrapper: {
    width: 128,
    height: 128,
    marginBottom: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowCircle: {
    position: 'absolute',
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#d7f0ff',
  },
  petImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  moodBadge: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#334155',
    textAlign: 'center',
    marginBottom: 20,
  },
  progressBarBackground: {
    width: '100%',
    height: 10,
    borderRadius: 10,
    backgroundColor: '#d8ebff',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#006c4b',
  },
});