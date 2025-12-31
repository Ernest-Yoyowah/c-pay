import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-white">
      <View className="bg-secondary-500 pt-12 pb-6 px-6">
        <Text className="text-splash font-bold text-white mb-1">C-Pay</Text>
        <Text className="text-body text-white/80">Your Digital Wallet</Text>
      </View>

      <View className="flex-1 p-6">
        <View className="bg-primary-500 p-6 rounded-2xl mb-6">
          <Text className="text-body text-white/80 mb-1">Total Balance</Text>
          <Text className="text-4xl font-bold text-white mb-4">$12,450.00</Text>
          <View className="flex-row gap-3">
            <View className="bg-white/20 px-4 py-2 rounded-lg">
              <Text className="text-body text-white">Send</Text>
            </View>
            <View className="bg-white/20 px-4 py-2 rounded-lg">
              <Text className="text-body text-white">Request</Text>
            </View>
          </View>
        </View>

        <Text className="text-header font-bold text-secondary-500 mb-3">
          Typography Test
        </Text>
        <Text className="text-body text-neutral-500 mb-4">
          This is body text at 11px with 150% line height using Roboto Regular.
          It should be easy to read and well-spaced for financial information.
        </Text>

        <Text className="text-header font-bold text-secondary-500 mb-3">
          Color Palette
        </Text>
        <View className="flex-row gap-2">
          <View className="flex-1 h-20 bg-primary-500 rounded-lg items-center justify-center">
            <Text className="text-body text-white">#1DAB87</Text>
          </View>
          <View className="flex-1 h-20 bg-secondary-500 rounded-lg items-center justify-center">
            <Text className="text-body text-white">#1D3A70</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
