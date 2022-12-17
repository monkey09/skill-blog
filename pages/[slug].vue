<script setup>
const route = useRoute()
const { data: posts } = await useWpApi().getPost(route.params.slug)
const post = posts.value[0]
</script>
<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" class="post-inner">
          <div class="text-h5 text-md-h3 slug-header pl-3 my-5">{{ post.title.rendered }}</div>
          <p class="font-weight-thin mb-5">
            written by <span class="font-weight-bold">{{ post._embedded['author'][0].name }}</span> - published on <span class="font-italic">{{ post.date }}</span>
          </p>
          <!-- <v-col cols="8" class="mx-auto"> -->
            <v-img width="80%" class="mb-5 mx-auto" :src="post._embedded['wp:featuredmedia'][0]?.source_url"></v-img>
          <!-- </v-col> -->
          <!-- <p class="font-weight-thin">
            
          </p> -->
          <div class="slug-content-inj" v-html="post.content.rendered"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<style>
.slug-header{
  border-left: 5px solid #6200EE
}
.slug-content-inj pre{
  background-color: #F9F9F9;
  color: #737373;
  overflow-x: scroll;
  padding: 1em;
  margin-top: .5em;
  margin-bottom: .5em;
  border-radius: .5em;
}
p img {
  width:100%;
  height:40em;
  margin-top: 1em;
  margin-bottom: 1em;
}
a{
  color: #6200EE;
  text-decoration:none;
}
.post-inner h1, .post-inner h2, .post-inner h3, .post-inner h4, .post-inner h5, .post-inner h6 {
  margin-top: .5em;
  margin-bottom: .5em;
}
</style>