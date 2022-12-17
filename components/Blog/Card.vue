<script setup>
const props = defineProps({
  cardTitle: {
    type: String,
  },
  cardExcerpt: {
    type: String
  },
  cardImage: {
    type: String
  },
  cardSlug: {
    type: String
  }
})
</script>
<template>
  <v-card class="elevation-0">
    <v-img
      :src="cardImage"
      height="200px"
      cover
    ></v-img>
    <v-card-title>{{ props.cardTitle }}</v-card-title>
    <v-card-subtitle>12-9-2022</v-card-subtitle>
    <v-card-text class="text-truncate">{{ props.cardExcerpt }}</v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <NuxtLink :to="`/${props.cardSlug}`">
        <v-btn block>view more</v-btn>
      </NuxtLink>
    </v-card-actions>
  </v-card>
</template>
<style scoped>
a{
  text-decoration: none;
  color: inherit;
  display: block;
  width:100%;
}
</style>