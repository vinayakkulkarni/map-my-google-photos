<template>
  <div class="flex w-full h-full pt-20 pb-20">
    <div class="flex-1 overflow-x-auto">
      <div class="grid grid-cols-1 gap-4 m-4 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="mediaItem in mediaItems.mediaItems"
          :key="mediaItem.id"
          class="overflow-x-hidden bg-gray-600 rounded"
        >
          <!-- <pre> {{ mediaItem }} </pre> -->
          <img
            :src="mediaItem.baseUrl"
            class="object-none object-center w-full h-full hover:shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from '@vue/composition-api';

  export default defineComponent({
    name: 'PhotosPage',
    setup(_, { root }) {
      const albums = ref([]);
      const mediaItems = ref([]);
      const photo = ref(null);

      getAlbums();
      getMediaItems();

      async function getAlbums(): Promise<void> {
        const { data } = await root.$axios.get(
          'https://photoslibrary.googleapis.com/v1/albums',
        );
        albums.value = data;
      }

      async function getMediaItems(): Promise<void> {
        const { data } = await root.$axios.get(
          `https://photoslibrary.googleapis.com/v1/mediaItems`,
        );
        mediaItems.value = data;
        getMediaItem(mediaItems.value.mediaItems[0].id);
      }

      async function getMediaItem(id: string): Promise<void> {
        const { data } = await root.$axios.get(
          `https://photoslibrary.googleapis.com/v1/mediaItems/${id}`,
        );
        photo.value = data;
      }
      return {
        albums,
        mediaItems,
        photo,
      };
    },
  });
</script>
