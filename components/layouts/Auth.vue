<script setup lang="ts">
import { AuthState } from "~/types/auth.type";
const isOpen = ref(false);
const state = ref<AuthState>(AuthState.SignIn);

const handleState = (newState: AuthState) => {
  state.value = newState;
};
</script>

<template>
  <div class="flex items-center">
    <UButton label="SignIn / SignUp" @click="isOpen = true" variant="link" />
    <USlideover v-model="isOpen">
      <div class="p-10 px-12">
        <div v-if="state === AuthState.SignIn">
          <AuthSignIn @handleState="handleState" />
        </div>
        <div v-else-if="state === AuthState.SignUp">
          <AuthSignUp @handleState="handleState" />
        </div>
      </div>
    </USlideover>
  </div>
</template>
