<template>
  <v-app-bar app flat color="transparent">
    <v-row justify="space-between" align="center" class="pa-6">
      <v-col class="d-flex justify-center">
        <h3>Mohamed AL NOSSIRAT</h3>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-toolbar-items>
          <v-btn prepend-icon="mdi-home" id="no-hover" variant="plain" :ripple="false">Home</v-btn>
          <v-btn prepend-icon="mdi-post" id="no-hover" variant="plain" :ripple="false">Blog</v-btn>
          <v-btn prepend-icon="mdi-developer-board" id="no-hover" variant="plain" :ripple="false">Projects</v-btn>
          <v-btn prepend-icon="mdi-view-gallery" id="no-hover" variant="plain" :ripple="false">gallery</v-btn>
        </v-toolbar-items>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn id="no-hover" variant="plain" :ripple="false" icon @click="toggleTheme">
          <v-icon>
            mdi-{{ icon }}
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {
  name: 'TheAppBar',
  props: {
    icon: {
      type: String,
    }
  },
  methods: {
    toggleTheme() {
      this.$emit('toggleTheme')
    }
  }
}
</script>
<style scoped lang="scss">
#no-hover.hover {
  background-color: transparent !important;
}
</style>
