import { BackButtonIcon, LockIcon } from "@/assets/svg";
import { Button, TextInput } from "@/shared/components";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PasswordRecovery() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSendEmail = () => {
    const isEmailValid = validateEmail(email);

    if (!isEmailValid) {
      return;
    }

    // TODO: Implement password recovery email logic
    router.push("/sign-in");
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (emailError) setEmailError("");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 px-6 py-2">
            <TouchableOpacity onPress={handleGoBack}>
              <BackButtonIcon />
            </TouchableOpacity>

            <View className="mt-12 mb-8">
              <LockIcon width={120} height={120} />
            </View>

            <View className="mb-8">
              <Text className="text-[28px] font-bold text-[#1D3A70] mb-3">
                Password Recovery
              </Text>
              <Text className="text-[14px] text-[#6B7280]">
                Enter your registered email below to receive password
                instructions
              </Text>
            </View>

            <View className="mb-6">
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                hasError={!!emailError}
              />
              {emailError ? (
                <Text className="text-[12px] text-red-500 mt-1 ml-2">
                  {emailError}
                </Text>
              ) : null}
            </View>

            <View className="flex-1" />

            <View className="pb-4">
              <Button
                title="Send me email"
                onPress={handleSendEmail}
                fullWidth
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
