<template>
  <div class="w-screen h-screen">
    <nuxt />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api';

  export default defineComponent({
    name: 'AuthLayout',
    auth: false,
  });
</script>
