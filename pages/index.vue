<template>
  <div class="w-full h-full pt-20 pb-20">
    <client-only>
      <mgl-map
        :class="{ 'opacity-75': state.loading }"
        :mapbox-gl="state.mapboxgl"
        :access-token="state.mapOptions.accessToken"
        :map-style.sync="state.mapOptions.style"
        :center="state.mapOptions.center"
        :zoom="state.mapOptions.zoom"
        :max-zoom="state.mapOptions.maxZoom"
        :cross-source-collisions="false"
        :fail-if-major-performance-caveat="false"
        :preserve-drawing-buffer="true"
        :hash="false"
        @load="mapLoaded"
      >
        <mgl-navigation-control position="top-right" />
        <mgl-geolocate-control position="top-left" />
        <mgl-fullscreen-control position="top-right" />
        <mgl-scale-control position="bottom-left" />
        <slot />
      </mgl-map>
    </client-only>
  </div>
</template>

<script lang="ts">
  /* eslint-disable no-console */
  import {
    defineComponent,
    reactive,
    shallowReadonly,
  } from '@nuxtjs/composition-api';
  import {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglFullscreenControl,
    MglScaleControl,
  } from 'v-mapbox';
  import mapboxgl from 'mapbox-gl';

  export default defineComponent({
    name: 'IndexPage',
    components: {
      MglMap,
      MglNavigationControl,
      MglGeolocateControl,
      MglFullscreenControl,
      MglScaleControl,
    },
    setup() {
      const state = reactive({
        mapOptions: {
          accessToken: process.env.mapToken,
          style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
          center: [78.96, 20.59],
          zoom: 4,
          maxZoom: 22,
        },
        mapboxgl,
        loading: false,
      });
      let map = shallowReadonly({} as mapboxgl.Map);
      function mapLoaded(e: { map: mapboxgl.Map }) {
        map = e.map;
        // add draw control
        console.log('map', map);
      }
      return {
        state,
        mapLoaded,
      };
    },
  });
</script>
