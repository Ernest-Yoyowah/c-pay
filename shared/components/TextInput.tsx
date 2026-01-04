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
  hasError?: boolean;
}

export default function TextInput({
  isPassword = false,
  hasError = false,
  ...props
}: CustomTextInputProps) {
  const [isSecure, setIsSecure] = useState(isPassword);
  const [isFocused, setIsFocused] = useState(false);

  const getBorderStyle = () => {
    if (hasError) {
      return "border-2 border-red-500";
    }
    if (isFocused) {
      return "border-2 border-[#1D3A70]";
    }
    return "border border-transparent";
  };

  return (
    <View className="relative">
      <RNTextInput
        className={`h-[56px] bg-[#F9FAFB] rounded-2xl px-4 text-[14px] text-secondary-500 ${getBorderStyle()}`}
        placeholderTextColor="#9CA3AF"
        secureTextEntry={isSecure}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
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
