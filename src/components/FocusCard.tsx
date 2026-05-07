import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Task } from '../app/types';

interface FocusCardProps {
  task?: Task;
  teamMembers?: { avatar: string }[];
  onComplete?: () => void;
}

export default function FocusCard({ task, teamMembers = [], onComplete }: FocusCardProps) {
  const defaultTask: Task = {
    id: '1',
    title: 'Finish Q3 Marketing Report',
    description: 'Compile user feedback and engagement metrics into the final presentation deck.',
    completed: false,
  };

  const currentTask = task || defaultTask;

  return (
    <View style={styles.card}>
      <View style={styles.gradientOverlay} />
      <View style={styles.content}>
        <View style={styles.prioritySection}>
          <MaterialIcons name="star" size={24} color="#6b38d4" />
          <Text style={styles.priorityText}>Top Priority</Text>
        </View>
        <Text style={styles.taskTitle}>{currentTask.title}</Text>
        <Text style={styles.taskDescription}>{currentTask.description}</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.completeButton} onPress={onComplete}>
            <View style={styles.buttonGlow} />
            <MaterialIcons name="check-circle" size={20} color="white" />
            <Text style={styles.buttonText}>Complete Task</Text>
          </TouchableOpacity>
          <View style={styles.teamMembers}>
            {teamMembers.slice(0, 2).map((member, index) => (
              <Image
                key={index}
                source={{ uri: member.avatar }}
                style={[styles.teamMember, { zIndex: 20 - index }]}
              />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imageGlow} />
        <Image
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcBVntU9kRA5AQvUkpm6WTTTki33TnkXcB4kTMyR3zZsA6GkTiCI0Qb_jcjECbav3zuN_ibRCXWbzIPdITzvI0v6Pb_343TVv5wRNtYnVuipn08GKVQ8M2Qv8By5JYPtdOEos-kSVnqylGCBv6ECQg3Ia5C-fVzMKlU2RvueM_xcFvfXApOB_o1KC7wvyW6L_CKxEheE_bpNS5vaLWsqd_oJEY_bswEXFIzVP9MQMbBVV4rLlVOooLXK7od4NLk2XeQCc31lRhJE' }}
          style={styles.abstractImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 10,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(235, 221, 255, 0.5)',
  },
  content: {
    flex: 1,
    zIndex: 10,
    width: '100%',
  },
  prioritySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  priorityText: {
    marginLeft: 8,
    color: '#6b38d4',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1d1a23',
    marginBottom: 10,
  },
  taskDescription: {
    fontSize: 15,
    color: '#5b5560',
    marginBottom: 18,
    lineHeight: 22,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completeButton: {
    backgroundColor: '#8B5CF6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 18,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 6,
    position: 'relative',
  },
  buttonGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    marginLeft: 8,
  },
  teamMembers: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  teamMember: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#ffffff',
    marginLeft: -10,
  },
  imageContainer: {
    width: 140,
    height: 140,
    zIndex: 10,
    position: 'relative',
    marginLeft: 16,
  },
  imageGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(107, 56, 212, 0.08)',
    borderRadius: 70,
  },
  abstractImage: {
    width: '100%',
    height: '100%',
    borderRadius: 70,
  },
});