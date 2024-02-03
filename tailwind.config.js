import { nextui } from "@nextui-org/react";


export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

];
export const theme = {
  extend: {},
  colors: {
    'white': '#ffffff',
    'blue': '#219ebc',
    'dark': '#111827',
    'brown': '#bc6c25',
    'lightB': '#dda15e',
    'lightY': '#fefae0',
    'yellow': '#f7b32b',
    'Dgreen': '#283618',
    'green': '#606c38'
  },
  font: {

  }
};
export const darkMode = "class";
export const plugins = [nextui()];

