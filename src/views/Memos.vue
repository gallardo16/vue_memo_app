<template>
  <div>
    <button @click="toMemoAdd">＋</button>
  </div>
</template>

<script>
export default {
  methods: {
    toMemoAdd () {
      this.$router.push("/memos/create")
    }
  }
}
</script>
