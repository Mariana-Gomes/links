import { View, Text, TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={colors.gray[400]}
      style={styles.container}
      {...rest}
    />
  );
}
