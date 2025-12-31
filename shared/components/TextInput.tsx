import { EyeIcon, EyeOffIcon } from "@/assets/svg";
import { useState } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

interface CustomTextInputProps extends TextInputProps {
  isPassword?: boolean;
}

export default function TextInput({
  isPassword = false,
  ...props
}: CustomTextInputProps) {
  const [isSecure, setIsSecure] = useState(isPassword);

  return (
    <View className="relative">
      <RNTextInput
        className="h-[56px] bg-[#F9FAFB] rounded-2xl px-4 text-[14px] text-secondary-500"
        placeholderTextColor="#9CA3AF"
        secureTextEntry={isSecure}
        {...props}
      />
      {isPassword && (
        <TouchableOpacity
          className="absolute right-4 top-[16px]"
          onPress={() => setIsSecure(!isSecure)}
          activeOpacity={0.7}
        >
          {isSecure ? <EyeOffIcon /> : <EyeIcon />}
        </TouchableOpacity>
      )}
    </View>
  );
}
