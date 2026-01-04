import { BackButtonIcon } from "@/assets/svg";
import { TEST_CREDENTIALS } from "@/config/constants";
import { Button, TextInput } from "@/shared/components";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

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

  const validatePassword = (password: string): boolean => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSignIn = () => {
    setGeneralError("");

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    if (
      email === TEST_CREDENTIALS.email &&
      password === TEST_CREDENTIALS.password
    ) {
      router.push("/otp");
    } else {
      setGeneralError("Invalid email or password");
    }
  };

  const handleSignUp = () => {
    router.push("/sign-up");
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleForgotPassword = () => {
    router.push("/password-recovery");
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in
  };

  const handleAppleSignIn = () => {
    // Handle Apple sign in
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (emailError) setEmailError("");
    if (generalError) setGeneralError("");
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (passwordError) setPasswordError("");
    if (generalError) setGeneralError("");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 py-2">
        <TouchableOpacity onPress={handleGoBack}>
          <BackButtonIcon />
        </TouchableOpacity>
        <View className="pt-8">
          <Text className="text-[24px] font-bold text-[#1D3A70] mb-2">
            Hi There! 👋
          </Text>
          <Text className="text-[14px] text-[#6B7280]">
            Welcome back, Sign in to your account
          </Text>
        </View>

        <View className="mt-8 gap-4">
          <View>
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

          <View>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={handlePasswordChange}
              isPassword
              autoCapitalize="none"
              autoComplete="password"
              hasError={!!passwordError}
            />
            {passwordError ? (
              <Text className="text-[12px] text-red-500 mt-1 ml-2">
                {passwordError}
              </Text>
            ) : null}
          </View>
        </View>

        {generalError ? (
          <View className="mt-4 bg-red-50 p-3 rounded-xl">
            <Text className="text-[13px] text-red-600 text-center">
              {generalError}
            </Text>
          </View>
        ) : null}

        <View className="mt-6">
          <TouchableOpacity onPress={handleForgotPassword} activeOpacity={0.7}>
            <Text className="text-[16px] font-bold text-[#1DAB87]">
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <View className="mt-6">
            <Button title="Sign In" onPress={handleSignIn} fullWidth />
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-[11px] font-regular text-[#6B7280] text-center">
            OR
          </Text>
        </View>

        <View className="mt-7 flex flex-row items-center justify-between">
          <TouchableOpacity onPress={handleGoogleSignIn} activeOpacity={0.8}>
            <Image
              source={require("@/assets/auth/google.png")}
              className="w-[180px] h-[56px]"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAppleSignIn} activeOpacity={0.8}>
            <Image
              source={require("@/assets/auth/apple.png")}
              className="w-[180px] h-[56px]"
            />
          </TouchableOpacity>
        </View>

        <View className="flex-1" />

        <View className="pb-4">
          <Text className="text-[16px] font-regular text-[#6B7280] text-center">
            Don't have an account?{" "}
            <Text className="font-bold text-[#1DAB87]" onPress={handleSignUp}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
