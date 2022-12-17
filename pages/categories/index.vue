<script setup>
const { data: categories } = await useWpApi().getCategories()
</script>
<template>
  <v-main>
    <div class=" mb-5 cat-header">
      <v-container>
        <v-row align="center" class="h-100">
          <v-col class="d-none d-sm-block" sm="6">
            <div id="my-container" class="text-h2 text-center"><span class="text-primary">#</span>Category Hash</div>
          </v-col>
          <v-col cols="12" sm="6" class="h-100">
            <div class="h-100 d-flex align-center mx-auto pt-sm-5">
              <WelCat class="mt-sm-5" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-chip
              class="ma-2"
              color="primary"
              text-color="white"
              v-for="(category, i) in categories" :key="i"
            >
              <NuxtLink :to="`/categories/${category.slug}`">
                #{{ category.name }}
              </NuxtLink>
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>
<style scoped>
a{
  text-decoration: none;
  color: inherit;
  display: block;
  width:100%;
}
.cat-header{
  background: #F5F5F5;
}
</style>