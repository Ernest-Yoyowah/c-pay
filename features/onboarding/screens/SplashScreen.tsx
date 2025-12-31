import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding1");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-primary-500 items-center justify-center">
      <Image
        source={require("@/assets/home/logo.png")}
        className="w-94 h-94 mb-6"
        resizeMode="contain"
      />

      <View className="flex flex-row items-center justify-center">
        <Text className="text-splash font-bold text-black mb-2">C</Text>
        <Text className="text-splash font-bold text-white mb-2">.Pay</Text>
      </View>
    </View>
  );
}
