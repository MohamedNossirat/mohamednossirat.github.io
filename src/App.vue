<template>
  <v-app>
  <TheAppBar/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import TheAppBar from '@/components/layouts/TheAppBar.vue'
</script>
