<template>
  <div class="flex items-center justify-center w-full h-full">
    <span class="w-full max-w-md rounded-md shadow-sm">
      <button
        type="button"
        class="
          inline-flex
          justify-center
          w-full
          px-4
          py-2
          text-sm
          font-medium
          leading-5
          text-gray-500
          transition
          duration-150
          ease-in-out
          bg-white
          border border-gray-300
          rounded-md
          hover:text-gray-400
          focus:outline-none focus:border-blue-300 focus:shadow-outline-blue
        "
        aria-label="Sign in with Google"
        :class="{
          'cursor-not-allowed opacity-50': state.loading,
        }"
        :disabled="state.loading"
        @click="login"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <defs />
          <path
            fill="#fbbb00"
            d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
          />
          <path
            fill="#518ef8"
            d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
          />
          <path
            fill="#28b446"
            d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
          />
          <path
            fill="#f14336"
            d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
          />
        </svg>
      </button>
    </span>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from '@nuxtjs/composition-api';

  export default defineComponent({
    name: 'Login',
    layout: 'auth',
    setup(_, { root }) {
      const state = reactive({
        loading: false,
      });
      async function login(): Promise<void> {
        if (!state.loading) {
          state.loading = true;
          await root.$auth.loginWith('google');
          state.loading = false;
        }
      }
      return {
        state,
        login,
      };
    },
  });
</script>
