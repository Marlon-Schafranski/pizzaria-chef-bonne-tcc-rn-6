import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export function Input({...rest} : TextInputProps){
    return ( 

        <TextInput
        multiline
        textAlignVertical="top" 
        placeholderTextColor={colors.slate[500]}
        className="h-24 bg-slate-100 rounded-md px-4 py-3 font-body text-sm text-slate-800"
        {...rest} 
        />
    )
}