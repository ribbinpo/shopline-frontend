<script setup lang="ts">
import { LANGUAGE_CONFIG } from "~/configs/lang.config";
const { locale, setLocale } = useI18n();

const handleSwitchLang = (lang: string) => {
  setLocale(lang);
};
</script>
<template>
  <USelect
    :options="LANGUAGE_CONFIG()"
    option-attribute="flag"
    value-attribute="label"
    variant="none"
    v-model="locale"
    @change="handleSwitchLang"
  />
</template>
