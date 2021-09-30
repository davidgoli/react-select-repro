import { Theme } from "react-select";

export const SelectTheme = (defaultTheme: Theme) => ({
  ...defaultTheme,
  borderRadius: 5,
  colors: {
    ...defaultTheme.colors,
  },
})
