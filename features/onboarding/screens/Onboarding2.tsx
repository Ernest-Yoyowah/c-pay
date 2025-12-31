import { Button } from "@/shared/components";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressIndicator } from "../components";

export default function Onboarding2() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/sign-in");
  };

  const handleSkip = () => {
    handleGetStarted();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1">
          <View className="px-6 pt-4">
            <TouchableOpacity onPress={handleSkip} className="self-end">
              <Text className="text-[16px] font-bold text-secondary-500">
                Skip
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex items-center justify-center mt-[73px]">
            <View className="relative w-full h-[400px] overflow-hidden rounded-b-3xl">
              <Image
                source={require("@/assets/onboarding/onboarding-2.png")}
                className="absolute top-0 right-[60px] w-[302.68px] h-[607.26px]"
                resizeMode="cover"
              />

              <LinearGradient
                colors={[
                  "rgba(255, 255, 255, 0)",
                  "rgba(255, 255, 255, 0.7)",
                  "rgba(255, 255, 255, 1)",
                ]}
                locations={[0.5, 0.8, 1]}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 128,
                }}
              />
            </View>
          </View>

          <View className="flex-1 justify-end pb-8 mt-8">
            <View className="px-[51px]">
              <Text className="text-[24px] leading-[36px] font-bold text-secondary-500 mb-4 text-center">
                The fastest transaction process only here
              </Text>
              <Text className="text-[11px] text-neutral-500 text-center mb-[50px]">
                Get easy to pay all your bills with just a few steps. Paying
                your bills become fast and efficient.
              </Text>
              <View className="mb-[43px]">
                <ProgressIndicator totalSteps={2} currentStep={2} />
              </View>
            </View>
            <View className="px-[44px]">
              <Button
                title="Get Started"
                onPress={handleGetStarted}
                fullWidth
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
