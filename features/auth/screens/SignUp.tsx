import { BackButtonIcon } from "@/assets/svg";
import { Button, TextInput } from "@/shared/components";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const validateFullName = (name: string): boolean => {
    if (!name) {
      setFullNameError("Full name is required");
      return false;
    }
    if (name.length < 2) {
      setFullNameError("Full name must be at least 2 characters");
      return false;
    }
    setFullNameError("");
    return true;
  };

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

  const handleSignUp = () => {
    setGeneralError("");

    const isFullNameValid = validateFullName(fullName);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isFullNameValid || !isEmailValid || !isPasswordValid) {
      return;
    }

    router.push("/otp");
  };

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleGoogleSignIn = () => {};

  const handleAppleSignIn = () => {};

  const handleFullNameChange = (value: string) => {
    setFullName(value);
    if (fullNameError) setFullNameError("");
    if (generalError) setGeneralError("");
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
        <View className="pt-[22px] flex flex-row items-center">
          <Text className="text-[24px] font-bold text-[#1D3A70]">
            Create a{" "}
          </Text>
          <Text className="text-[24px] font-bold text-[#1DAB87]">
            C.payment{" "}
          </Text>
        </View>
        <Text className="text-[24px] font-bold text-[#1D3A70]">account</Text>

        <View className="mt-8 gap-4">
          <View>
            <TextInput
              placeholder="Full name"
              value={fullName}
              onChangeText={handleFullNameChange}
              autoCapitalize="words"
              autoComplete="name"
            />
            {fullNameError ? (
              <Text className="text-[12px] text-red-500 mt-1 ml-2">
                {fullNameError}
              </Text>
            ) : null}
          </View>

          <View>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
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
          <Button title="Sign Up" onPress={handleSignUp} fullWidth />
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
            Already have an account?{" "}
            <Text className="font-bold text-[#1DAB87]" onPress={handleSignIn}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
