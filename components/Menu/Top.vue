<script setup>
</script>
<template>
  <v-app-bar
    class="elevation-0 border"
  >
    <v-app-bar-title>
      <NuxtLink to="/">
        <v-btn class="main-logo px-1">SKILLS</v-btn>
      </NuxtLink>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <NuxtLink to="/">
      <v-btn>Home</v-btn>
    </NuxtLink>
    <NuxtLink to="/categories">
      <v-btn>Categories</v-btn>
    </NuxtLink>
  </v-app-bar>
</template>
<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.main-logo{
  border-left: 4px solid #6200EE;
  border-right: 4px solid #6200EE;
  height:1.5em;
}
</style>