<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useExampleStore } from "~/stores/example.store";

const countStore = useExampleStore();
const { increment, reset } = countStore;
const { count } = storeToRefs(countStore);

definePageMeta({
  layout: "custom",
});

const { locale, setLocale } = useI18n();
</script>

<template>
  <div>
    <h1 class="text-4xl">Index Page</h1>
    <div class="flex space-x-3">
      <UButton @click="setLocale('en')">EN</UButton>
      <UButton @click="setLocale('th')">TH</UButton>
    </div>
    <p>{{ $t("welcome") }}</p>
    <p>Count: {{ count }}</p>
    <UButton @click="increment" color="blue">Increment</UButton>
    <UButton @click="reset" color="red">Reset</UButton>
  </div>
</template>
