import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";
import { createTamagui } from "tamagui";

const appConfig = createTamagui({
  shorthands,
  themes,
  tokens,
});

export type AppConfig = typeof appConfig;
export default appConfig;
