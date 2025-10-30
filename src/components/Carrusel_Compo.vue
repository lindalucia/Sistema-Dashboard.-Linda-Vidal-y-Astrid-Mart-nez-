<template>
  <v-carousel
    height="400"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide) in slides" :key="i"
       :src="slide"
        cover
    >
    
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
  const colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ]
  const slides = [
    'https://images.adsttc.com/media/images/5c87/2fc6/284d/d106/bb00/00c6/newsletter/26.CLF_Alejandro_Arango.jpg?1552363438',
    'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/3FDFZ5DIBJDUDNGSITOY3HJMGA.jpg',
    'https://i.postimg.cc/mgg9M0x0/Colegio-nuestra-senora-del-rosario-bogota.webp',
  ]
</script>