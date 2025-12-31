import { SafeGuardIcon } from "@/assets/svg";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding1() {
  const router = useRouter();

  const handleGetStarted = () => {
    // router.push("/onboarding2");
  };

  const handleSkip = () => {
    // router.push("/(tabs)");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-6 pt-4">
        <TouchableOpacity onPress={handleSkip} className="self-end">
          <Text className="text-[14px] font-medium text-secondary-500">
            Skip
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex items-center justify-center mt-[73px]">
        <View className="relative w-full h-[400px] overflow-hidden rounded-b-3xl">
          <Image
            source={require("@/assets/onboarding/onboarding-1.png")}
            className="absolute top-0 right-[60px] w-[302.68px] h-[607.26px]"
            resizeMode="cover"
          />

          <View className="shadow-lg absolute top-[190px] right-0">
            <Image
              source={require("@/assets/onboarding/monthly-expense.png")}
              className="w-[260px] h-[187px]"
              resizeMode="cover"
            />
          </View>

          <View className="absolute top-10 left-[4px] shadow-lg">
            <SafeGuardIcon width={120} height={120} />
          </View>

          <View className="absolute gap-14 flex flex-row shadow-sm bottom-[-10px] w-[242px] left-5 right-0 bg-white px-6 py-4 rounded-lg">
            <View className="">
              <Text className="text-[14px] font-bold text-secondary-500 mb-1">
                Direct Deposit
              </Text>
              <Text className="text-[11px] text-neutral-500">
                Suggested split
              </Text>
            </View>
            <View className="text-[11px] flex items-center justify-center text-black">
              <Text className="font-bold">Today</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="pb-8 mt-8 flex items-center justify-between">
        <View className="w-[286px]">
          <Text className="text-[28px] leading-[36px] font-bold text-secondary-500 mb-3 text-center">
            Finance app the safest and most trusted
          </Text>
          <Text className="text-[13px] text-neutral-500 text-center mb-8">
            Your finance work starts here. Our here to help you track and deal
            with speeding up your transactions.
          </Text>
          <View className="flex-row justify-center gap-2 mb-8">
            <View className="w-10 h-2 bg-secondary-500 rounded-full" />
            <View className="w-10 h-2 bg-neutral-200 rounded-full" />
            <View className="w-10 h-2 bg-neutral-200 rounded-full" />
          </View>
        </View>
        <View className="items-center justify-center flex">
          <TouchableOpacity
            className="bg-secondary-500 py-4 h-[56px] w-[287px] justify-center rounded-2xl items-center mb-4"
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <Text className="text-[16px] font-bold text-white">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
