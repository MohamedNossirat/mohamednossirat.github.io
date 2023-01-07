<template>
  <v-app id="inspire" :theme='dark'>
    <v-app-bar flat color="transparent">
      <template v-slot:append>
        <v-btn :icon="dark === 'dark' ? 'mdi-emoticon-happy-outline' : 'mdi-emoticon-cool-outline'"
          @click="toggleTheme"></v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-bottom-navigation :elevation="0" grow>
      <v-btn value="recent" to="/timeline">
        <v-icon>mdi-home</v-icon>
        TimeLine
      </v-btn>

      <v-btn value="favorites">
        <v-icon>mdi-post</v-icon>
        Blog
      </v-btn>

      <v-btn value="nearby">
        <v-icon>mdi-card-account-mail</v-icon>
        Contact
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script setup>
import TheAppBar from '@/components/layouts/TheAppBar.vue'
</script>
<script>
export default {
  name: 'App',
  data() {
    return {
      icon: 'weather-night',
      dark: '',
      isDark: false,
      drawer: null,
    }
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      switch (this.isDark) {
        case true:
          this.dark = 'dark';
          this.icon = 'white-balance-sunny';
          break
        case false:
          this.dark = '';
          this.icon = 'weather-night'
      }
    }
  }
}
</script>
