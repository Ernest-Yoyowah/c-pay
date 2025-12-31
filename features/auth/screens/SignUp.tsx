import { Button } from "@/shared/components";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/");
  };

  const handleSignIn = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        <View className="pt-12 pb-8">
          <Text className="text-[32px] font-bold text-secondary-500 mb-2">
            Create Account
          </Text>
          <Text className="text-[14px] text-neutral-500">
            Sign up to get started
          </Text>
        </View>

        <View className="flex-1">
          <View className="mb-6">
            <Text className="text-[14px] font-medium text-secondary-500 mb-2">
              Full Name
            </Text>
          </View>

          <View className="mb-6">
            <Text className="text-[14px] font-medium text-secondary-500 mb-2">
              Email
            </Text>
          </View>

          <View className="mb-6">
            <Text className="text-[14px] font-medium text-secondary-500 mb-2">
              Password
            </Text>
          </View>

          <View className="mb-8">
            <Text className="text-[14px] font-medium text-secondary-500 mb-2">
              Confirm Password
            </Text>
          </View>

          <Button title="Sign Up" onPress={handleSignUp} fullWidth />

          <View className="flex-row justify-center items-center mt-6">
            <Text className="text-[13px] text-neutral-500">
              Already have an account?{" "}
            </Text>
            <Text
              className="text-[13px] text-primary-500 font-medium"
              onPress={handleSignIn}
            >
              Sign In
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
