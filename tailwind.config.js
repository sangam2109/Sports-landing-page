import { nextui } from "@nextui-org/react";


export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  extend: {},
};
export const darkMode = "class";
export const plugins = [nextui()];