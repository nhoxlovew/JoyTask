import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Task } from '../app/types';

interface TaskItemProps {
  task: Task;
  onToggle?: (task: Task) => void;
  onPress?: (task: Task) => void;
}

export default function TaskItem({ task, onToggle, onPress }: TaskItemProps) {
  return (
    <TouchableOpacity style={styles.row} onPress={() => onPress?.(task)}>
      <TouchableOpacity style={styles.checkbox} onPress={() => onToggle?.(task)}>
        <MaterialIcons
          name="check"
          size={16}
          color={task.completed ? '#6b38d4' : 'transparent'}
        />
      </TouchableOpacity>
      <View style={styles.taskText}>
        <Text style={styles.title}>{task.title}</Text>
        <View style={styles.metaRow}>
          {task.time && (
            <View style={styles.metaItem}>
              <MaterialIcons name="schedule" size={14} color="#64748b" />
              <Text style={styles.metaText}>{task.time}</Text>
            </View>
          )}
          {task.location && (
            <View style={styles.metaItem}>
              <MaterialIcons name="location-on" size={14} color="#64748b" />
              <Text style={styles.metaText}>{task.location}</Text>
            </View>
          )}
        </View>
      </View>
      {task.priority === 'urgent' && (
        <Text style={styles.urgentBadge}>Urgent</Text>
      )}
      {task.category && (
        <View style={[styles.statusDot, { backgroundColor: getCategoryColor(task.category) }]} />
      )}
    </TouchableOpacity>
  );
}

function getCategoryColor(category: string): string {
  switch (category.toLowerCase()) {
    case 'health':
      return '#006c4b';
    case 'fun':
      return '#855000';
    default:
      return '#6b38d4';
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f1effb',
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#d9cff8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  taskText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '600',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  metaText: {
    fontSize: 12,
    color: '#64748b',
    marginLeft: 4,
  },
  urgentBadge: {
    backgroundColor: '#fee2e2',
    color: '#b91c1c',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
});