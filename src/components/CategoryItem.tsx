import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Category } from '../app/types';

interface CategoryItemProps {
  category: Category;
  onPress?: () => void;
}

export default function CategoryItem({ category, onPress }: CategoryItemProps) {
  const isAddCategory = category.id === 'add';

  return (
    <TouchableOpacity
      style={[styles.card, isAddCategory ? styles.addCard : styles.categoryCard]}
      onPress={onPress}
    >
      <View style={[styles.iconWrapper, isAddCategory ? styles.addIcon : styles.categoryIcon]}>
        <MaterialIcons name={category.icon as any} size={28} color={isAddCategory ? '#7b7486' : '#6b38d4'} />
      </View>
      <Text style={styles.label}>{category.name}</Text>
      {!isAddCategory && (
        <Text style={styles.badge}>{category.taskCount} Tasks</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 22,
    padding: 18,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 4,
  },
  categoryCard: {
    backgroundColor: '#ffffff',
  },
  addCard: {
    backgroundColor: '#f9f5ff',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#d8c7ff',
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  categoryIcon: {
    backgroundColor: '#ede5f3',
  },
  addIcon: {
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1d1a23',
    textAlign: 'center',
  },
  badge: {
    marginTop: 10,
    backgroundColor: '#f3efff',
    color: '#6b38d4',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
});