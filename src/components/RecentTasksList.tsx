import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TaskItem from './TaskItem';
import { Task } from '../app/types';

interface RecentTasksListProps {
  tasks?: Task[];
  onTaskToggle?: (task: Task) => void;
  onTaskPress?: (task: Task) => void;
  onSeeAll?: () => void;
  onQuickAdd?: () => void;
}

export default function RecentTasksList({
  tasks,
  onTaskToggle,
  onTaskPress,
  onSeeAll,
  onQuickAdd
}: RecentTasksListProps) {
  const defaultTasks: Task[] = [
    {
      id: '1',
      title: 'Call Mom for her birthday',
      time: '12:00 PM',
      priority: 'urgent',
      completed: false,
    },
    {
      id: '2',
      title: 'Grocery shopping',
      location: 'Whole Foods',
      completed: false,
    },
    {
      id: '3',
      title: 'Read 30 pages of new book',
      category: 'Personal Growth',
      completed: false,
    },
  ];

  const currentTasks = tasks || defaultTasks;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Up Next</Text>
        <TouchableOpacity onPress={onSeeAll}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {currentTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onTaskToggle}
          onPress={onTaskPress}
        />
      ))}

      <TouchableOpacity style={styles.quickAddButton} onPress={onQuickAdd}>
        <MaterialIcons name="add" size={20} color="#6b38d4" />
        <Text style={styles.quickAddText}>Quick Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1d1a23',
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6b38d4',
  },
  quickAddButton: {
    marginTop: 16,
    width: '100%',
    paddingVertical: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#d8c7ff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickAddText: {
    color: '#6b38d4',
    fontWeight: '700',
    marginLeft: 10,
  },
});