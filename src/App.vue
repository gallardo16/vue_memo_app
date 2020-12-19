<template>
  <div id="app">
  <MemoHeader></MemoHeader>
  {{ number }}
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
