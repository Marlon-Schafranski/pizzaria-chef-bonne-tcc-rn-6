import {
  Text,
  Pressable,
  PressableProps,
  View,
  TouchableOpacity,
} from "react-native";
import { clsx } from "clsx";

type CategoryProps = PressableProps & {
  title: String;
  isSelected?: boolean;
};

export function CategoryButton({ title, isSelected, ...rest }: CategoryProps) {
  return (
<Pressable
        className={clsx(
          "bg-gray-200 px-4 justify-center rounded-md h-10 ",
          isSelected && "border-2 border-orange-500"
        )}
        {...rest}
      >
        <Text className="text-slate-900 font-subtitle text-sm">{title}</Text>
</Pressable>
  );
}
