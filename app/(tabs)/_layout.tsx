import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'News',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'newspaper' : 'newspaper-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="units"
        options={{
          title: 'Unidades',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'business' : 'business-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="unitDescription"
        options={{
          title: 'Descrição',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "menu" : 'menu-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          title: 'Videos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'film' : 'film-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
