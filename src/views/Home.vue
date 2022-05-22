<template>
  <div class="home">
   <h1>Home</h1>
   <PostLists v-if="showPosts" :posts="posts" />
   <button @click="showPosts = !showPosts" >Toggle posts</button>
   <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
// @ is an alias to /src
import PostLists from '../components/PostList.vue'
import { ref } from 'vue' 

export default {
  name: 'Home',
  components: { PostLists },
  setup() {
    const posts = ref([
      { title : 'Welcome to my Blog', body: 'I am Muhammad Hafiz, a consulting professional graduated from Universitas Gadjah Mada as bachelor of Computer Science. I am able to analyze business requirements and develop solutions with best practices of data warehouse concepts. Also experienced in using SSRS (SQL Server Reporting Services) and ERP (Enterprise Resource Planning) software. Worked in a high volume production environment, as well as small agile teams. Able to apply the Agile approach on projects and willing to adapt new methodology.', id: 1 },
      { title: 'Top 5 Data Analyst tips', body: 'lorem ipsum', id: 2}

    ])
    const showPosts = ref(true)

    return {posts, showPosts}
  }
}
</script>
