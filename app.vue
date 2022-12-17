<script setup>
const theme = ref('light')
const onClick = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
<template>
  <v-app :theme="theme">
    <v-app-bar
      class="elevation-0 border my-nav"
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
      <v-btn
        :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="onClick"
      ></v-btn>
    </v-app-bar>
    <NuxtPage />
    <PageBottom />
  </v-app>
</template>
<style>
.my-nav a{
  text-decoration: none;
  color: inherit;
}
.main-logo{
  border-left: 4px solid #6200EE;
  border-right: 4px solid #6200EE;
  height:1.5em;
}
.v-theme--dark .about-section {
  background-color: #212121!important;
}
.v-theme--dark .about-section .about-content {
  background-color: #212121!important;
  color: #E0E0E0!important;
}
.v-theme--dark .my-footer {
  background-color: #212121!important;
}
.v-theme--dark .slug-content-inj pre{
  background-color: #212121;
  color: #737373; 
}
.v-theme--dark .cat-header {
  background-color: #212121!important;
}
</style>

 