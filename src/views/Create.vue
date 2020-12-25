<template>
  <div>
    <h2>メモ作成</h2>
    <hr>
    <textarea v-model="newMemo"></textarea>
    <button @click="createMemo">作成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMemo: ""
    }
  },
  methods: {
    createMemo () {
      this.$emit("create-click", this.newMemo)
    }
  }
}
</script>
