<script setup>
const route = useRoute()
const { data: categories } = await useWpApi().get(`categories?slug=${route.params.slug}`)
const { data: posts } = await useWpApi().getPosts(categories.value[0].id)
</script>
<template>
  <v-main>
   <div>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1>{{categories[0].name}}</h1>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="py-5">
      <v-container class="my-5">
        <v-row>
          <v-col v-for="(post, i) in posts" :key="i" cols="12" xs="12" sm="6" md="4">
            <BlogCard 
            :cardTitle="post.title.rendered"
            :cardExcerpt="post.excerpt.rendered"
            :cardImage="post._embedded['wp:featuredmedia'][0]?.source_url"
            :cardSlug="post.slug"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>