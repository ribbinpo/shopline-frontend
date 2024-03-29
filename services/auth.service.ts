export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp extends ISignIn {
  name: string;
}

export const signIn = async ({ email, password }: ISignIn) => {
  const config = useRuntimeConfig();
  return await $fetch<{ accessToken: string }>(`${config.public.backendUrl}/auth/signin`, {
    method: "POST",
    body: {
      email,
      password,
    },
  });
};

export const signUp = async ({ email, password, name }: ISignUp) => {
  const config = useRuntimeConfig();
  return await $fetch(`${config.public.backendUrl}/auth/signup`, {
    method: "POST",
    body: {
      name,
      email,
      password,
    },
  });
};
