<script setup>
const { data: posts } = await useWpApi().getPosts()
</script>
<template>
  <v-main>
    <div class="main-header">
      <v-container>
        <v-row align="center" class="h-100">
          <v-col cols="12" sm="6" class="h-100">
            <div class="h-100 d-flex align-center mx-auto pt-sm-5">
              <WelIn class="mt-sm-5" />
            </div>
          </v-col>
          <v-col class="d-none d-sm-block" sm="6">
            <div id="my-container" class="text-h1 text-center">Skills Blog!</div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="bg-grey-lighten-4 py-5 about-section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" sm="7">
            <v-alert
              class="rounded-0 about-content"
              density="default"
              color="grey-lighten-4"
            >
              <h2>Welcome to skills blog!</h2>
              <v-divider class="mb-5 mt-3"></v-divider>
              <p class="font-weight-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nesciunt, dolorem, aspernatur quisquam porro quibusdam voluptatibus doloribus eaque distinctio iste debitis repellendus! Reiciendis quibusdam accusantium iure! Eos dolore nemo totam, error sunt, assumenda, minima tenetur asperiores ab beatae tempore eaque. Ducimus molestiae eum eius iusto corrupti laboriosam temporibus atque odit, voluptatem hic nulla id quod, aliquam tenetur veniam soluta. Provident deserunt iure, nihil non labore fuga fugiat amet voluptatem quos sed consequatur reprehenderit, est illo quam ab itaque eius quas soluta molestiae quod iste harum. Nesciunt minima, architecto deserunt repellendus saepe dolorum nihil eaque exercitationem, ipsa dignissimos quis illo deleniti?</p>
            </v-alert>
          </v-col>
          <v-col cols="0" sm="0" md="1"></v-col>
          <v-col cols="12" sm="5" md="4">
            <WelIm />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="py-5">
      <v-container fluid class="my-5">
        <v-row>
          <v-col v-for="(post, i) in posts" :key="i" cols="12" xs="12" sm="6" md="4" lg="3">
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
<style>
.main-header{
  height:calc(100vh - 64px);
}
</style>