<script setup lang="ts">
const isLoading = ref(false);
const search = ref();

const handleSearch = async (q: string) => {
  isLoading.value = true;
  const users = await $fetch<any[]>(
    "https://jsonplaceholder.typicode.com/users",
    { params: { search: q } }
  );
  isLoading.value = false;
  return users;
};
</script>
<template>
  <div class="py-4 px-12 space-x-6 flex items-center">
    <div>Logo</div>
    <UButtonGroup class="flex-grow">
      <UInputMenu
        v-model="search"
        :search="handleSearch"
        :loading="isLoading"
        placehodler="{{ $t('search') }}"
        option-attribute="name"
        trailing
        by="id"
        class="w-full"
      />
      <UButton icon="i-heroicons-magnifying-glass" />
    </UButtonGroup>
    <div class="flex items-center">
      <LayoutsAuth />
      <div>Cart</div>
      <LayoutsSwitchLangButton />
    </div>
  </div>
</template>
