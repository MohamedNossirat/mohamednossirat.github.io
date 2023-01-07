<template>
  <v-layout>
    <v-container fluid>
      <v-row dense justify="center" align="center">
        <v-col cols="12" md="6" class="text-center">
          <v-card elevation="0" color="transparent">
            <v-card-text>
              <v-avatar :size="getAvatarsize">
                <v-img cover src="/myPhoto.jpeg"></v-img>
              </v-avatar>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <v-card elevation="0" color="transparent">
            <v-card-text class="text-center">
              <p class="text-h5" md="text-h1">Mohamed AL NOSSIRAT</p>
              <p class="text-h5" md="text-h1">Développeur Full-Stack</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense justify="center">
        <v-col cols="12" class="text-center">
          <v-card elevation="0" color="transparent">
            <v-card-text class="d-flex justify-center">
              <v-slide-group :show-arrows="false">
                <v-slide-group-item v-for="item in items" :key="item.id" v-slot="{ isSelected, toggle }">
                  <v-avatar rounded="0" class="mx-3" :size="getIconSize">
                    <v-img :src="'/icons/'+item.icon"></v-img>
                  </v-avatar>
                </v-slide-group-item>
              </v-slide-group>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
  export default {
    name: 'Homa',
    data: () => ({
      items: [
        { id: 1, icon: 'django.svg' },
        { id: 3, icon: 'docker.svg' },
        { id: 4, icon: 'fastapi.svg' },
        { id: 5, icon: 'flask.svg' },
        { id: 6, icon: 'linux.svg' },
        { id: 7, icon: 'mongodb.svg' },
        { id: 8, icon: 'nextjs.svg' },
        { id: 9, icon: 'nodejs.svg' },
        { id: 10, icon: 'nuxt.svg' },
        { id: 11, icon: 'postgresql.svg' },
        { id: 12, icon: 'python.svg' },
        { id: 13, icon: 'react.svg' },
        { id: 14, icon: 'vuejs.svg' },
      ]
    }),
    computed: {
      getAvatarsize() {
        if(this.detectMob()){
          return window.innerWidth*(70/100)
        }else{
          return 300
        }
      },
    },
    methods:{
      detectMob() {
        const toMatch = [
          /Android/i,
          /webOS/i,
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
          return navigator.userAgent.match(toMatchItem);
        });
      }
    }
  }
</script>
