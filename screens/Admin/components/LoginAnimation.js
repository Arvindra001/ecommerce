import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useFrameCallback,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function ANimationLogin() {
  const t = useSharedValue(0);

  // highlight-start
  useFrameCallback((frameInfo) => {
    t.value = frameInfo.timeSinceFirstFrame / 350;
  });
  // highlight-end

  const infinityStyle = useAnimatedStyle(() => {
    const scale = (2 / (6 - Math.cos(2 * t.value))) * 200;
    return {
      transform: [
        { translateX: scale * Math.cos(t.value) },
        { translateY: scale * (Math.sin(1 * t.value) / 2) },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.dot, infinityStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  dot: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#b58df1',
    position: 'absolute',
  },
});
