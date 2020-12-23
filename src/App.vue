<template>
  <div id="app">
    <memo-header/>
    <memo-index :memos="memos"></memo-index>
    <router-view @create-click="createMemo" @update-click="updateMemo" @remove-click="removeMemo" :memos="memos"></router-view>
  </div>
</template>

<script>
import MemoHeader from "./components/MemoHeader.vue"
import MemoIndex from "./components/MemoIndex.vue"

export default {
  components: {
    MemoHeader,
    MemoIndex
  },
  data() {
    return {
      memos: [],
      newMemo: ''
    }
  },
  mounted () {
    if (localStorage.getItem('memos')) {
      try {
        this.memos = JSON.parse(localStorage.getItem('memos'))
      } catch (e) {
        localStorage.removeItem('memos')
      }
    }
  },
  methods: {
    createMemo (value) {
      this.newMemo = value
      this.memos.push(this.newMemo)
      this.newMemo = ''
      this.saveMemos()
      this.$router.push("/")
    },
    updateMemo (idx, value) {
      this.memos[idx] = value
      this.saveMemos()
      this.$router.push("/")
    },
    removeMemo (idx) {
      this.memos.splice(idx, 1)
      this.saveMemos()
      this.$router.push("/")
    },
    saveMemos () {
      const parsed = JSON.stringify(this.memos)
      localStorage.setItem('memos', parsed)
    }
  }
}
</script>


