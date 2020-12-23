<template>
  <div>
    <textarea v-model="newMemo"></textarea>
    <button @click="createMemo">作成</button>
  </div>
</template>

<script>
export default {
  props: ["newMemo"],
  methods: {
    createMemo () {
      this.$emit("create-click", this.newMemo)
    }
  }
}
</script>

<style scoped>
textarea {
  width: 300px;
  height: 300px;
}

button {
  margin: 3px;
}
</style>
