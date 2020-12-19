<template>
  <div id="app">
    <memo-header></memo-header>
    <router-view></router-view>
    <nav>
      <router-link to="/">一覧</router-link>
      <router-link to="/add">+</router-link>
      <router-link to="/update">編集</router-link>
    </nav>
  </div>
</template>

<script>
import MemoHeader from "./components/MemoHeader.vue"

export default {
  components: {
      MemoHeader
  },
  data() {
    return {
    }
  }
}
</script>
