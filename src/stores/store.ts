import { atom } from "nanostores";

const initialValueForIsDone = false
export const $isIntroDone = atom(initialValueForIsDone)

const initialThemeValue = "night"
export const $theme = atom<"night" | "garden">(initialThemeValue)

const sphereTranslateMapper = {'a': 1}
export const $sphereTranslateProps = atom<{}>(sphereTranslateMapper)