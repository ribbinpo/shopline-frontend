<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { AuthState } from "~/types/auth.type";
// import { useAuthStore } from "~/stores/auth.store";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

const { signInUser } = useAuthStore();
const { loading } = storeToRefs(useAuthStore());

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await signInUser({ ...event.data });
    // TODO: add toast for success
    // TODO: close modal
  } catch (e) {
    console.error(e);
    // TODO: add toast
  }
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-medium">LOGIN</h2>
      <UButton variant="link" @click="$emit('handleState', AuthState.SignUp)"
        >create an account?</UButton
      >
    </div>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UButton type="submit" block>LOG IN</UButton>
    </UForm>
  </div>
</template>
