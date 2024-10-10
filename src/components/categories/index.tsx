import { FlatList } from "react-native";
import { styles } from "./styles";
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";

type Props = {
  selected: string;
  onChange: (category: string) => void;
};

export function Categories({ selected, onChange }: Props) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      horizontal
      style={styles.container}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          icon={item.icon}
          isSeleted={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  );
}
