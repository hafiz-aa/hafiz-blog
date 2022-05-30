<template>
  <div class="tag">
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length">
      <PostList :posts="postWithTag" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner'
import PostList from '../components/PostList.vue'
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core'

export default {
  components: {PostList, Spinner},
  setup() {
    const route = useRoute()
    const { posts, error, load} = getPosts()

    load()

    const postWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag))
    })
    return { error, posts, postWithTag }
  }
}
</script>

<style>

</style>