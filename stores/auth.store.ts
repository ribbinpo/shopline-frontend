import { defineStore } from "pinia";
import {
  signIn,
  signUp,
  type ISignIn,
  type ISignUp,
} from "~/services/auth.service";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    loading: false,
  }),
  getters: {
    isAuthenticated: () => {
      return localStorage.getItem("access-token") ? true : false;
    },
  },
  actions: {
    async signInUser({ email, password }: ISignIn) {
      this.loading = true;
      try {
        const { accessToken } = await signIn({ email, password });
        localStorage.setItem("access-token", accessToken);
        console.log(localStorage.getItem("access-token"));
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async signOutUser() {
      localStorage.removeItem("access-token");
    },
    async signUpUser({ email, password, name }: ISignUp) {
      this.loading = true;
      try {
        const data = await signUp({ email, password, name });
        return data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
