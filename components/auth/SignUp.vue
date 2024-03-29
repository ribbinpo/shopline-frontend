<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { AuthState } from "~/types/auth.type";

const schema = z.object({
  name: z.string().min(3, "Must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  name: undefined,
  email: undefined,
  password: undefined,
});

const { signUpUser } = useAuthStore();
const { loading } = storeToRefs(useAuthStore());

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await signUpUser(event.data);
    // TODO: change to login state
    // TODO: add toast for success
  } catch (e) {
    console.error(e);
    // TODO: add toast
  }
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-medium">REGISTER</h2>
      <UButton variant="link" @click="$emit('handleState', AuthState.SignIn)"
        >have account already</UButton
      >
    </div>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Name" name="name">
        <UInput v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UButton type="submit" block>REGISTER</UButton>
    </UForm>
  </div>
</template>
