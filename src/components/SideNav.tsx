import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface SideNavProps {
  activeTab?: string;
  onTabPress?: (tab: string) => void;
}

export default function SideNav({ activeTab = 'home', onTabPress }: SideNavProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'grid_view' },
    { id: 'tasks', label: 'Tasks', icon: 'add_circle' },
    { id: 'calendar', label: 'Calendar', icon: 'calendar_month' },
    { id: 'profile', label: 'Profile', icon: 'person' },
  ];

  return (
    <View style={styles.container}>
      {tabs.slice(0, 3).map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tabItem, isActive && styles.tabItemActive]}
            onPress={() => onTabPress?.(tab.id)}
          >
            {isActive && <View style={styles.activeMarker} />}
            <MaterialIcons
              name={tab.icon as any}
              size={24}
              color={isActive ? '#6b38d4' : '#7b7486'}
            />
            <Text style={styles.tabLabel}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}

      <View style={styles.profileSection}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'profile' && styles.tabItemActive]}
          onPress={() => onTabPress?.('profile')}
        >
          <MaterialIcons
            name="person"
            size={24}
            color={activeTab === 'profile' ? '#6b38d4' : '#7b7486'}
          />
          <Text style={styles.tabLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 96,
    bottom: 0,
    width: 88,
    paddingTop: 20,
    backgroundColor: '#f3efff',
    borderRightWidth: 1,
    borderRightColor: '#e7e0ed',
    alignItems: 'center',
  },
  tabItem: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  tabItemActive: {
    backgroundColor: '#ede5f3',
  },
  activeMarker: {
    position: 'absolute',
    left: -8,
    width: 6,
    height: 30,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    backgroundColor: '#6b38d4',
  },
  tabLabel: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: '700',
    color: '#1f2937',
  },
  profileSection: {
    marginTop: 'auto',
    marginBottom: 24,
  },
});