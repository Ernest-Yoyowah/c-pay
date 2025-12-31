import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

export default function Button({
  title,
  variant = "primary",
  fullWidth = false,
  ...props
}: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return "bg-primary-500";
      case "outline":
        return "bg-transparent border-2 border-secondary-500";
      default:
        return "bg-secondary-500";
    }
  };

  const getTextStyles = () => {
    return variant === "outline" ? "text-secondary-500" : "text-white";
  };

  return (
    <TouchableOpacity
      className={`h-[56px] justify-center rounded-2xl items-center ${getVariantStyles()} ${
        fullWidth ? "w-full" : ""
      }`}
      activeOpacity={0.8}
      {...props}
    >
      <Text className={`text-[16px] font-bold ${getTextStyles()}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
