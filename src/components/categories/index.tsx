import { FlatList } from "react-native";
import { styles } from "./styles";
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";

export function Categories() {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      horizontal
      style={styles.container}
      renderItem={({ item }) => (
        <Category name={item.name} icon={item.icon} isSeleted={false} />
      )}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  );
}
