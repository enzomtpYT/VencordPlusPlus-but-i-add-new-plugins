/*
 * Vencord, a Discord client mod
 * Copyright (c) 2023 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Plugins } from "Vencord";

import { HexToHSL } from "./utils";

export const colorVariables: string[] = [
    "brand-100",
    "brand-130",
    "brand-160",
    "brand-200",
    "brand-230",
    "brand-260",
    "brand-300",
    "brand-330",
    "brand-345",
    "brand-360",
    "brand-400",
    "brand-430",
    "brand-460",
    "brand-500",
    "brand-530",
    "brand-560",
    "brand-600",
    "brand-630",
    "brand-660",
    "brand-700",
    "brand-730",
    "brand-760",
    "brand-800",
    "brand-830",
    "brand-860",
    "brand-900",
    "primary-900",
    "primary-860",
    "primary-830",
    "primary-800",
    "primary-760",
    "primary-730",
    "primary-700",
    "primary-660",
    "primary-645",
    "primary-630",
    "primary-600",
    "primary-560",
    "primary-530",
    "primary-500",
    "primary-460",
    "primary-430",
    "primary-400",
    "primary-360",
    "primary-330",
    "primary-300",
    "primary-260",
    "primary-230",
    "primary-200",
    "primary-160",
    "primary-130",
    "primary-100",
    "white-900",
    "white-860",
    "white-830",
    "white-800",
    "white-760",
    "white-730",
    "white-700",
    "white-660",
    "white-630",
    "white-600",
    "white-560",
    "white-530",
    "white-500",
    "white-460",
    "white-430",
    "white-400",
    "white-360",
    "white-330",
    "white-300",
    "white-260",
    "white-230",
    "white-200",
    "white-160",
    "white-130",
    "white-100",
    "teal-900",
    "teal-860",
    "teal-830",
    "teal-800",
    "teal-760",
    "teal-730",
    "teal-700",
    "teal-660",
    "teal-630",
    "teal-600",
    "teal-560",
    "teal-530",
    "teal-500",
    "teal-460",
    "teal-430",
    "teal-400",
    "teal-360",
    "teal-330",
    "teal-300",
    "teal-260",
    "teal-230",
    "teal-200",
    "teal-160",
    "teal-130",
    "teal-100",
    "black-900",
    "black-860",
    "black-830",
    "black-800",
    "black-760",
    "black-730",
    "black-700",
    "black-660",
    "black-630",
    "black-600",
    "black-560",
    "black-530",
    "black-500",
    "black-460",
    "black-430",
    "black-400",
    "black-360",
    "black-330",
    "black-300",
    "black-260",
    "black-230",
    "black-200",
    "black-160",
    "black-130",
    "black-100",
    "red-900",
    "red-860",
    "red-830",
    "red-800",
    "red-760",
    "red-730",
    "red-700",
    "red-660",
    "red-630",
    "red-600",
    "red-560",
    "red-530",
    "red-500",
    "red-460",
    "red-430",
    "red-400",
    "red-360",
    "red-330",
    "red-300",
    "red-260",
    "red-230",
    "red-200",
    "red-160",
    "red-130",
    "red-100",
    "yellow-900",
    "yellow-860",
    "yellow-830",
    "yellow-800",
    "yellow-760",
    "yellow-730",
    "yellow-700",
    "yellow-660",
    "yellow-630",
    "yellow-600",
    "yellow-560",
    "yellow-530",
    "yellow-500",
    "yellow-460",
    "yellow-430",
    "yellow-400",
    "yellow-360",
    "yellow-330",
    "yellow-300",
    "yellow-260",
    "yellow-230",
    "yellow-200",
    "yellow-160",
    "yellow-130",
    "yellow-100",
    "green-900",
    "green-860",
    "green-830",
    "green-800",
    "green-760",
    "green-730",
    "green-700",
    "green-660",
    "green-630",
    "green-600",
    "green-560",
    "green-530",
    "green-500",
    "green-460",
    "green-430",
    "green-400",
    "green-360",
    "green-330",
    "green-300",
    "green-260",
    "green-230",
    "green-200",
    "green-160",
    "green-130",
    "green-100",
];

function gradientBase(accentColor?: string) {
    return `@import url(//dablulite.github.io/css-snippets/NoLightInDark/import.css);
@import url(//dablulite.github.io/css-snippets/NitroThemesFix/import.css);
.theme-dark {
    --bg-overlay-color: 0 0 0;
    --bg-overlay-color-inverse: 255 255 255;
    --bg-overlay-opacity-1: 0.85;
    --bg-overlay-opacity-2: 0.8;
    --bg-overlay-opacity-3: 0.7;
    --bg-overlay-opacity-4: 0.5;
    --bg-overlay-opacity-5: 0.4;
    --bg-overlay-opacity-6: 0.1;
    --bg-overlay-opacity-hover: 0.5;
    --bg-overlay-opacity-hover-inverse: 0.08;
    --bg-overlay-opacity-active: 0.45;
    --bg-overlay-opacity-active-inverse: 0.1;
    --bg-overlay-opacity-selected: 0.4;
    --bg-overlay-opacity-selected-inverse: 0.15;
    --bg-overlay-opacity-chat: 0.8;
    --bg-overlay-opacity-home: 0.85;
    --bg-overlay-opacity-home-card: 0.8;
    --bg-overlay-opacity-app-frame: var(--bg-overlay-opacity-4);
}
.theme-light {
    --bg-overlay-color: 255 255 255;
    --bg-overlay-color-inverse: 0 0 0;
    --bg-overlay-opacity-1: 0.9;
    --bg-overlay-opacity-2: 0.8;
    --bg-overlay-opacity-3: 0.7;
    --bg-overlay-opacity-4: 0.6;
    --bg-overlay-opacity-5: 0.3;
    --bg-overlay-opacity-6: 0.15;
    --bg-overlay-opacity-hover: 0.7;
    --bg-overlay-opacity-hover-inverse: 0.02;
    --bg-overlay-opacity-active: 0.65;
    --bg-overlay-opacity-active-inverse: 0.03;
    --bg-overlay-opacity-selected: 0.6;
    --bg-overlay-opacity-selected-inverse: 0.04;
    --bg-overlay-opacity-chat: 0.9;
    --bg-overlay-opacity-home: 0.7;
    --bg-overlay-opacity-home-card: 0.9;
    --bg-overlay-opacity-app-frame: var(--bg-overlay-opacity-5);
}
.children__32014:after, .form__13a2c:before {
    content: none;
}
.scroller__3d071 {
    background: var(--bg-overlay-app-frame,var(--background-tertiary));
}
.expandedFolderBackground__1bec6 {
    background: rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-6));
}
.wrapper_d281dd:not(:hover):not(.selected_f5ec8e) .childWrapper__01b9c {
    background: rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-6));
}
.folder__17546:has(.expandedFolderIconWrapper__458cf) {
    background: var(--bg-overlay-6,var(--background-secondary));
}
.circleIconButton_d8df29:not(.selected__5250e) {
    background: rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-6));
}
.auto_a48086::-webkit-scrollbar-thumb,
.thin_b1c063::-webkit-scrollbar-thumb {
    background-size: 200vh;
    background-image: -webkit-gradient(linear,left top,left bottom,from(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-4))),to(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-4)))),var(--custom-theme-background);
    background-image: linear-gradient(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-4)),rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-4))),var(--custom-theme-background);
}
.auto_a48086::-webkit-scrollbar-track {
    background-size: 200vh;
    background-image: -webkit-gradient(linear,left top,left bottom,from(rgb(var(--bg-overlay-color)/.4)),to(rgb(var(--bg-overlay-color)/.4))),var(--custom-theme-background);
    background-image: linear-gradient(rgb(var(--bg-overlay-color)/.4),rgb(var(--bg-overlay-color)/.4)),var(--custom-theme-background);
}
:root:root {
    --brand-100-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 13)), 100)}%;
    --brand-130-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 12)), 100)}%;
    --brand-160-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 11)), 100)}%;
    --brand-200-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 10)), 100)}%;
    --brand-230-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 9)), 100)}%;
    --brand-260-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 8)), 100)}%;
    --brand-300-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 7)), 100)}%;
    --brand-330-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 6)), 100)}%;
    --brand-345-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 5)), 100)}%;
    --brand-360-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 4)), 100)}%;
    --brand-400-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 3)), 100)}%;
    --brand-430-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 2)), 100)}%;
    --brand-460-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + 3.6), 100)}%;
    --brand-500-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${HexToHSL("#" + accentColor)[2]}%;
    --brand-530-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - 3.6), 0)}%;
    --brand-560-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 2)), 0)}%;
    --brand-600-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 3)), 0)}%;
    --brand-630-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 4)), 0)}%;
    --brand-660-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 5)), 0)}%;
    --brand-700-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 6)), 0)}%;
    --brand-730-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 7)), 0)}%;
    --brand-760-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 8)), 0)}%;
    --brand-800-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 9)), 0)}%;
    --brand-830-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 10)), 0)}%;
    --brand-860-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 11)), 0)}%;
    --brand-900-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 12)), 0)}%;
    --bg-overlay-1: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-1)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-1))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-2: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-2)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-2))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-3: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-3)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-3))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-4: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-4)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-4))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-5: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-5)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-5))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-6: linear-gradient(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-6)),rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-6))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-hover: linear-gradient(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-hover-inverse)),rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-hover-inverse))) fixed 0 0/cover,linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-hover)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-hover))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-active: linear-gradient(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-active-inverse)),rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-active-inverse))) fixed 0 0/cover,linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-active)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-active))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-selected: linear-gradient(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-selected-inverse)),rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-selected-inverse))) fixed 0 0/cover,linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-selected)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-selected))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-chat: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-chat)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-chat))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-home: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-home)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-home))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-home-card: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-home-card)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-home-card))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-app-frame: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-app-frame)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-app-frame))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;`;
}

export function generateCss(primaryColor: string, secondaryColor: string, tertiaryColor: string, accentColor: string, tintedText: boolean) {
    const colorwayCss = `/*Automatically Generated - Colorway Creator V${(Plugins.plugins.DiscordColorways as any).creatorVersion}*/
:root:root {
    --brand-100-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 13)), 100)}%;
    --brand-130-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 12)), 100)}%;
    --brand-160-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 11)), 100)}%;
    --brand-200-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 10)), 100)}%;
    --brand-230-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 9)), 100)}%;
    --brand-260-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 8)), 100)}%;
    --brand-300-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 7)), 100)}%;
    --brand-330-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 6)), 100)}%;
    --brand-345-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 5)), 100)}%;
    --brand-360-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 4)), 100)}%;
    --brand-400-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 3)), 100)}%;
    --brand-430-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 2)), 100)}%;
    --brand-460-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + 3.6), 100)}%;
    --brand-500-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${HexToHSL("#" + accentColor)[2]}%;
    --brand-530-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - 3.6), 0)}%;
    --brand-560-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 2)), 0)}%;
    --brand-600-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 3)), 0)}%;
    --brand-630-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 4)), 0)}%;
    --brand-660-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 5)), 0)}%;
    --brand-700-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 6)), 0)}%;
    --brand-730-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 7)), 0)}%;
    --brand-760-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 8)), 0)}%;
    --brand-800-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 9)), 0)}%;
    --brand-830-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 10)), 0)}%;
    --brand-860-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 11)), 0)}%;
    --brand-900-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 12)), 0)}%;
    --primary-800-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.min(HexToHSL("#" + tertiaryColor)[2] + (3.6 * 2), 100)}%;
    --primary-730-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.min(HexToHSL("#" + tertiaryColor)[2] + 3.6, 100)}%;
    --primary-700-hsl: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${HexToHSL("#" + tertiaryColor)[2]}%;
    --primary-660-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${Math.min(HexToHSL("#" + secondaryColor)[2] + 3.6, 100)}%;
    --primary-645-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.max(HexToHSL("#" + primaryColor)[2] - 5, 0)}%;
    --primary-630-hsl: ${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${HexToHSL("#" + secondaryColor)[2]}%;
    --primary-600-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${HexToHSL("#" + primaryColor)[2]}%;
    --primary-560-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + 3.6, 100)}%;
    --primary-530-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + (3.6 * 2), 100)}%;
    --primary-500-hsl: ${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${Math.min(HexToHSL("#" + primaryColor)[2] + (3.6 * 3), 100)}%;${tintedText ? `\n    --primary-460-hsl: 0 calc(var(--saturation-factor, 1)*0%) 50%;
    --primary-430: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + ", calc(var(--saturation-factor, 1)*100%), 90%)" : "hsl(" + HexToHSL("#" + secondaryColor)[0] + ", calc(var(--saturation-factor, 1)*100%), 20%)")};
    --primary-400: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + ", calc(var(--saturation-factor, 1)*100%), 90%)" : "hsl(" + HexToHSL("#" + secondaryColor)[0] + ", calc(var(--saturation-factor, 1)*100%), 20%)")};
    --primary-360: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + ", calc(var(--saturation-factor, 1)*100%), 90%)" : "hsl(" + HexToHSL("#" + secondaryColor)[0] + ", calc(var(--saturation-factor, 1)*100%), 20%)")};` : ""}
}
.emptyPage__3e15d,
.scrollerContainer_bf5dbd,
.container__10dc7,
.header__60bef {
    background-color: unset !important;
}${(Math.round(HexToHSL("#" + primaryColor)[2]) > 80) ? `\n\n/*Primary*/
.theme-dark .container__5c7e7,
.theme-dark .body__83069,
.theme-dark .toolbar__88c63,
.theme-dark .container__18bf5,
.theme-dark .messageContent__21e69,
.theme-dark .attachButtonPlus_bf89ca,
.theme-dark .username_d30d99:not([style]),
.theme-dark .children__32014,
.theme-dark .buttonContainer_dd4b62,
.theme-dark .listItem_fa7b36,
.theme-dark .body__83069 .caret__33d19,
.theme-dark .body__83069 .titleWrapper__482dc > h1,
.theme-dark .body__83069 .icon__4cb88 {
    --white-500: black !important;
    --interactive-normal: black !important;
    --text-normal: black !important;
    --text-muted: black !important;
    --header-primary: black !important;
    --header-secondary: black !important;
}

.theme-dark .contentRegionScroller__86c79 :not(.mtk1,.mtk2,.mtk3,.mtk4,.mtk5,.mtk6,.mtk7,.mtk8,.mtk9,.monaco-editor .line-numbers) {
    --white-500: black !important;
}

.theme-dark .container__7590f,
.theme-dark .container__10dc7,
.theme-dark .header__60bef {
    background: transparent;
}

.theme-dark .container__11d72 {
    --channel-icon: black;
}

.theme-dark .callContainer_cbde45 {
    --white-500: ${(HexToHSL("#" + tertiaryColor)[2] > 80) ? "black" : "white"} !important;
}

.theme-dark .channelTextArea__2e60f {
    --text-normal: ${(HexToHSL("#" + primaryColor)[2] + 3.6 > 80) ? "black" : "white"};
}

.theme-dark .placeholder_e68c63 {
    --channel-text-area-placeholder: ${(HexToHSL("#" + primaryColor)[2] + 3.6 > 80) ? "black" : "white"};
    opacity: .6;
}

.theme-dark .colorwaySelectorIcon {
    background-color: black;
}

.theme-dark .root_a28985 > .header__6d5ea > h1 {
    color: black;
}
/*End Primary*/`: ""}${(HexToHSL("#" + secondaryColor)[2] > 80) ? `\n\n/*Secondary*/
.theme-dark .wrapper__6e669 *,
.theme-dark .sidebar_ded4b5 *:not(.hasBanner_e78601 *),
.theme-dark .members__9f47b *:not([style]),
.theme-dark .sidebarRegionScroller__1fa7e *,
.theme-dark .header__9f6dc,
.theme-dark .lookFilled__19298.colorPrimary__6ed40 {
    --white-500: black !important;
    --channels-default: black !important;
    --channel-icon: black !important;
    --interactive-normal: var(--white-500);
    --interactive-hover: var(--white-500);
    --interactive-active: var(--white-500);
}

.theme-dark .channelRow__96673 {
    background-color: var(--background-secondary);
}

.theme-dark .channelRow__96673 * {
    --channel-icon: black;
}

.theme-dark #app-mount .activity__3cbac {
    --channels-default: var(--white-500) !important;
}

.theme-dark .nameTag__0e320 {
    --header-primary: black !important;
    --header-secondary: ${HexToHSL("#" + secondaryColor)[0] === 0 ? "gray" : ((HexToHSL("#" + secondaryColor)[2] < 80) ? "hsl(" + HexToHSL("#" + secondaryColor)[0] + ", calc(var(--saturation-factor, 1)*100%), 90%)" : "hsl(" + HexToHSL("#" + secondaryColor)[0] + ", calc(var(--saturation-factor, 1)*100%), 20%)")} !important;
}

.theme-dark .bannerVisible__191f6 .headerContent_ee8727 {
    color: #fff;
}

.theme-dark .embedFull__8dc21 {
    --text-normal: black;
}
/*End Secondary*/`: ""}${HexToHSL("#" + tertiaryColor)[2] > 80 ? `\n\n/*Tertiary*/
.theme-dark .winButton__88672,
.theme-dark .searchBar_ff8800 *,
.theme-dark .wordmarkWindows__05c46,
.theme-dark .searchBar_e0c60b *,
.theme-dark .searchBarComponent__22760 {
    --white-500: black !important;
}

.theme-dark [style="background-color: var(--background-secondary);"] {
    color: ${HexToHSL("#" + secondaryColor)[2] > 80 ? "black" : "white"};
}

.theme-dark .popout__24e32 > * {
    --interactive-normal: black !important;
    --header-secondary: black !important;
}

.theme-dark .tooltip__01384 {
    --text-normal: black !important;
}
.theme-dark .children__32014 .icon__4cb88 {
    color: var(--interactive-active) !important;
}
/*End Tertiary*/`: ""}${HexToHSL("#" + accentColor)[2] > 80 ? `\n\n/*Accent*/
.selected__5250e *,
.selected_f5ec8e *,
#app-mount .lookFilled__19298.colorBrand_b2253e:not(.buttonColor_a6eb73),
.colorDefault__0b482.focused__27621,
.row__4daf2:hover,
.colorwayInfoIcon,
.checkmarkCircle__11b1b > circle {
    --white-500: black !important;
}

.ColorwaySelectorBtn:hover .vc-pallete-icon {
    color: #000 !important;
}

:root:root {
    --mention-foreground: black !important;
}
/*End Accent*/`: ""}`;
    return colorwayCss;
}

export function getPreset(primaryColor?: string, secondaryColor?: string, tertiaryColor?: string, accentColor?: string) {
    function cyan() {
        return `:root:root {
    --cyan-accent-color: ${"#" + accentColor};
    --cyan-background-primary: hsl(${HexToHSL("#" + primaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + primaryColor)[1]}%) ${HexToHSL("#" + primaryColor)[2]}%/40%);
    --cyan-background-secondary: hsl(${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.min(HexToHSL("#" + tertiaryColor)[2] + (3.6 * 2), 100)}%);
}`;
    }

    function virtualBoy() {
        return `:root:root {
    --VBaccent: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${HexToHSL("#" + accentColor)[2]}%;
    --VBaccent-muted: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.max(((HexToHSL("#" + tertiaryColor)[2]) - 10), 0)}%;
    --VBaccent-dimmest: ${HexToHSL("#" + tertiaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + tertiaryColor)[1]}%) ${Math.min((HexToHSL("#" + tertiaryColor)[2] + (3.6 * 5) - 3), 100)}%;
}`;
    }

    function modular() {
        return `:root:root {
    --modular-hue: ${HexToHSL("#" + accentColor)[0]};
    --modular-saturation: calc(var(--saturation-factor, 1)${HexToHSL("#" + accentColor)[1]}%);
    --modular-lightness: ${HexToHSL("#" + accentColor)[2]}%;
}`;
    }

    function solana() {
        return `:root:root {
    --accent-hue: ${HexToHSL("#" + accentColor)[0]};
    --accent-saturation: calc(var(--saturation-factor, 1)${HexToHSL("#" + accentColor)[1]}%);
    --accent-brightness: ${HexToHSL("#" + accentColor)[2]}%;
    --background-accent-hue: ${HexToHSL("#" + primaryColor)[0]};
    --background-accent-saturation: calc(var(--saturation-factor, 1)${HexToHSL("#" + primaryColor)[1]}%);
    --background-accent-brightness: ${HexToHSL("#" + primaryColor)[2]}%;
    --background-overlay-opacity: 0%;
}`;
    }

    function gradientType1() {
        return `${gradientBase(accentColor)}
    --custom-theme-background: linear-gradient(239.16deg, #${primaryColor} 10.39%, #${secondaryColor} 26.87%, #${tertiaryColor} 48.31%, hsl(${HexToHSL("#" + secondaryColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + secondaryColor)[1]}%) ${Math.min(HexToHSL("#" + secondaryColor)[2] + 3.6, 100)}%) 64.98%, #${primaryColor} 92.5%);
}`;
    }

    function gradientType2() {
        return `${gradientBase(accentColor)}
    --custom-theme-background: linear-gradient(48.17deg, #${primaryColor} 11.21%, #${secondaryColor} 61.92%);
}`;
    }

    function hueRotation() {
        return `:root:root {
    --brand-100-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 13)), 100)}%;
    --brand-130-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 12)), 100)}%;
    --brand-160-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 11)), 100)}%;
    --brand-200-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 10)), 100)}%;
    --brand-230-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 9)), 100)}%;
    --brand-260-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 8)), 100)}%;
    --brand-300-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 7)), 100)}%;
    --brand-330-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 6)), 100)}%;
    --brand-345-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 5)), 100)}%;
    --brand-360-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 4)), 100)}%;
    --brand-400-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 3)), 100)}%;
    --brand-430-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 2)), 100)}%;
    --brand-460-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + 3.6), 100)}%;
    --brand-500-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${HexToHSL("#" + accentColor)[2]}%;
    --brand-530-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - 3.6), 0)}%;
    --brand-560-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 2)), 0)}%;
    --brand-600-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 3)), 0)}%;
    --brand-630-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 4)), 0)}%;
    --brand-660-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 5)), 0)}%;
    --brand-700-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 6)), 0)}%;
    --brand-730-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 7)), 0)}%;
    --brand-760-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 8)), 0)}%;
    --brand-800-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 9)), 0)}%;
    --brand-830-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 10)), 0)}%;
    --brand-860-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 11)), 0)}%;
    --brand-900-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 12)), 0)}%;
    --primary-800-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*12%) 7%;
    --primary-730-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*10%) 13%;
    --primary-700-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*10%) 13%;
    --primary-660-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*11%) 15%;
    --primary-645-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*11%) 16%;
    --primary-630-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*11%) 18%;
    --primary-600-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*11%) 21%;
    --primary-560-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*11%) 24%;
    --primary-530-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*11%) 24%;
    --primary-500-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*11%) 24%;
}`;
    }

    function accentSwap() {
        return `:root:root {
    --brand-100-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 13)), 100)}%;
    --brand-130-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 12)), 100)}%;
    --brand-160-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 11)), 100)}%;
    --brand-200-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 10)), 100)}%;
    --brand-230-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 9)), 100)}%;
    --brand-260-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 8)), 100)}%;
    --brand-300-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 7)), 100)}%;
    --brand-330-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 6)), 100)}%;
    --brand-345-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 5)), 100)}%;
    --brand-360-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 4)), 100)}%;
    --brand-400-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 3)), 100)}%;
    --brand-430-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + (3.6 * 2)), 100)}%;
    --brand-460-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.min(Math.round(HexToHSL("#" + accentColor)[2] + 3.6), 100)}%;
    --brand-500-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${HexToHSL("#" + accentColor)[2]}%;
    --brand-530-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - 3.6), 0)}%;
    --brand-560-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 2)), 0)}%;
    --brand-600-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 3)), 0)}%;
    --brand-630-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 4)), 0)}%;
    --brand-660-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 5)), 0)}%;
    --brand-700-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 6)), 0)}%;
    --brand-730-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 7)), 0)}%;
    --brand-760-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 8)), 0)}%;
    --brand-800-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 9)), 0)}%;
    --brand-830-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 10)), 0)}%;
    --brand-860-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 11)), 0)}%;
    --brand-900-hsl: ${HexToHSL("#" + accentColor)[0]} calc(var(--saturation-factor, 1)*${HexToHSL("#" + accentColor)[1]}%) ${Math.max(Math.round(HexToHSL("#" + accentColor)[2] - (3.6 * 12)), 0)}%;
}`;
    }

    return {
        cyan: {
            name: "Cyan",
            preset: cyan,
            id: "cyan",
            colors: ["primary", "secondary", "accent"]
        },
        virtualBoy: {
            name: "Virtual Boy",
            preset: virtualBoy,
            id: "virtualBoy",
            colors: ["tertiary", "accent"]
        },
        modular: {
            name: "Modular",
            preset: modular,
            id: "modular",
            colors: ["accent"]
        },
        solana: {
            name: "Solana",
            preset: solana,
            id: "solana",
            colors: ["primary", "accent"]
        },
        gradientType1: {
            name: "Gradient Type 1",
            preset: gradientType1,
            id: "gradientType1",
            colors: ["primary", "secondary", "tertiary", "accent"]
        },
        gradientType2: {
            name: "Gradient Type 2",
            preset: gradientType2,
            id: "gradientType2",
            colors: ["primary", "secondary", "accent"]
        },
        hueRotation: {
            name: "Hue Rotation",
            preset: hueRotation,
            id: "hueRotation",
            colors: ["accent"]
        },
        accentSwap: {
            name: "Accent Swap",
            preset: accentSwap,
            id: "accentSwap",
            colors: ["accent"]
        }
    };
}
