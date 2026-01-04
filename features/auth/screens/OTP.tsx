import { BackButtonIcon } from "@/assets/svg";
import { Button } from "@/shared/components";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OTP() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<TextInput[]>([]);

  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleConfirm = () => {
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      router.push("/biometric");
    }
  };

  const handleResendCode = () => {
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  const handleGoBack = () => {
    router.back();
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
        >
          <View className="flex-1 px-6 py-2">
            <TouchableOpacity onPress={handleGoBack}>
              <BackButtonIcon />
            </TouchableOpacity>

            <View className="pt-8">
              <Text className="text-[24px] font-bold text-[#1D3A70] mb-2">
                Verify it's you
              </Text>
              <Text className="text-[16px] text-[#6B7280]">
                We send a code to{" "}
                <Text className="text-[#1D3A70] font-medium">
                  *****@mail.com
                </Text>
                .{"\n"}Enter it here to verify your identity
              </Text>
            </View>

            <View className="mt-12 flex-row justify-center gap-3">
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => {
                    if (ref) inputRefs.current[index] = ref;
                  }}
                  className="w-[50px] h-[60px] bg-[#F9FAFB] rounded-2xl text-center text-[24px] font-bold text-[#1D3A70]"
                  value={digit}
                  onChangeText={(value) => handleChange(value, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  selectTextOnFocus
                />
              ))}
            </View>

            <View className="mt-8">
              <TouchableOpacity onPress={handleResendCode} activeOpacity={0.7}>
                <Text className="text-[16px] font-bold text-[#1DAB87] text-center">
                  Resend Code
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-1" />

            <View className="pb-4">
              <Button
                title="Confirm"
                onPress={handleConfirm}
                fullWidth
                disabled={otp.join("").length !== 6}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
