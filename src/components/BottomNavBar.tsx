import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface BottomNavBarProps {
  activeTab?: string;
  onTabPress?: (tab: string) => void;
}

export default function BottomNavBar({ activeTab = 'home', onTabPress }: BottomNavBarProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'grid_view' },
    { id: 'tasks', label: 'Tasks', icon: 'add_circle' },
    { id: 'calendar', label: 'Calendar', icon: 'calendar_month' },
    { id: 'profile', label: 'Profile', icon: 'person' },
  ];

  return (
    <View style={styles.nav}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tab, isActive ? styles.activeTab : styles.inactiveTab]}
            onPress={() => onTabPress?.(tab.id)}
          >
            <MaterialIcons
              name={tab.icon as any}
              size={24}
              color={isActive ? '#6b38d4' : '#64748b'}
            />
            <Text style={[styles.tabLabel, isActive && styles.activeLabel]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 14,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    borderTopColor: '#ebe6f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 10,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#f3e8ff',
  },
  inactiveTab: {
    backgroundColor: 'transparent',
  },
  tabLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#64748b',
    fontWeight: '700',
  },
  activeLabel: {
    color: '#6b38d4',
  },
});