import React from 'react';
import { View, StyleSheet } from 'react-native';
import CategoryItem from './CategoryItem';
import { Category } from '../app/types';

interface CategoryGridProps {
  categories?: Category[];
  onCategoryPress?: (category: Category) => void;
}

export default function CategoryGrid({ categories, onCategoryPress }: CategoryGridProps) {
  const defaultCategories: Category[] = [
    { id: 'work', name: 'Work', icon: 'work', taskCount: 12 },
    { id: 'health', name: 'Health', icon: 'favorite', taskCount: 4 },
    { id: 'fun', name: 'Fun', icon: 'sports_esports', taskCount: 2 },
    { id: 'add', name: 'Add Category', icon: 'add', taskCount: 0 },
  ];

  const currentCategories = categories || defaultCategories;

  return (
    <View style={styles.grid}>
      {currentCategories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          onPress={() => onCategoryPress?.(category)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -8,
  },
});