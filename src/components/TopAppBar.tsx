import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface TopAppBarProps {
  user?: {
    name: string;
    avatar: string;
  };
}

export default function TopAppBar({ user }: TopAppBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.brand}>
          <Image
            source={{ uri: user?.avatar || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrdgs7s8szEWf3GtofQEDieDU_PvB3lOEW2Leg1TZpDqCgCdesxZgfzq54gtAGh1ee8lOSmK4aTK47HK0RldxnJOcth6BPwD7dSZOARUG05fTMiHcVuuNJ_2qPXFeAAMVfUZ_ZnhD0o7PPqmbhLtMG0Y24JrUhkRIDyup8oXx-AFyc9eNMIkjeg_XEILXbVr0hopfpx9S6uaGJ6ljG-JsXn3pCxIMcYIOQWiGzIIgYVT0aS-vTVh6Aidof3RfGBF1OIanuINQk8kI' }}
            style={styles.avatar}
          />
          <Text style={styles.title}>JoyTask</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="settings" size={24} color="#6b38d4" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 10,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#6b38d4',
  },
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f3ebf8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});