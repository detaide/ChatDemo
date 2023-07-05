/*
 * @Author: hyman
 * @Date: 2023-06-02 12:31:55
 * @LastEditors: Dalas
 * @LastEditTime: 2023-06-02 12:31:55
 * @Description: 请填写简介
 */
/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
];
export const theme = {
    extend: {
        animation: {
            blink: 'blink 1.2s infinite steps(1, start)',
        },
        keyframes: {
            blink: {
                '0%, 100%': { 'background-color': 'currentColor' },
                '50%': { 'background-color': 'transparent' },
            },
        },
    },
};
export const plugins = [];
  