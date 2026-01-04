import { BackButtonIcon, BiometricIcon } from "@/assets/svg";
import { Button } from "@/shared/components";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Biometric() {
  const router = useRouter();

  const handleEnableBiometric = () => {
    // Implement biometric authentication logic here
    router.push("/");
  };

  const handleSkip = () => {
    router.push("/");
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 py-2">
        <TouchableOpacity onPress={handleGoBack}>
          <BackButtonIcon />
        </TouchableOpacity>

        <View className="flex-1 justify-center items-center px-8">
          <Text className="text-[28px] font-bold text-[#1D3A70] mb-4 text-center">
            Enable biometric Access
          </Text>
          <Text className="text-[14px] text-[#6B7280] mb-12 text-center">
            Login quickly and securely with the fingerprint stored on this
            device
          </Text>

          <View className="my-16">
            <BiometricIcon width={200} height={200} />
          </View>
        </View>

        <View className="pb-4 gap-4">
          <Button
            title="Enable biometric access"
            onPress={handleEnableBiometric}
            fullWidth
          />
          <TouchableOpacity onPress={handleSkip} activeOpacity={0.7}>
            <Text className="text-[16px] font-bold text-[#1DAB87] text-center">
              I'll do this later
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
