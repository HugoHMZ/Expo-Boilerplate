import { TamaguiProvider, Text, View } from "tamagui";
import config from "./tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <View className="flex-1 items-center justify-center bg-blue-200">
        <Text className="text-xl font-bold">Hello, Expo Boilerplate!</Text>
      </View>
    </TamaguiProvider>
  );
}
