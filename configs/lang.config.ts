import { LANGUAGE_ICON } from "~/constants/lang.constant";

export const LANGUAGE_CONFIG = () => {
  return (Object.keys(LANGUAGE_ICON) as Array<keyof typeof LANGUAGE_ICON>).map((lang) => ({
    label: lang,
    flag: LANGUAGE_ICON[lang],
  }));
};
