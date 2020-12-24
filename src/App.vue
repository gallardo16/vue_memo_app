<template>
  <div id="app">
    <h1>メモアプリ</h1>
    <ul>
      <li v-for="(memo, id) in memosFirstLine" :key="memo">
      <a :href="/memos/ + id">{{ memo }}</a>
      </li>
    </ul>
    <router-view @create-click="createMemo" @update-click="updateMemo" @remove-click="removeMemo" :memos="memos"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memos: [],
      newMemo: ''
    }
  },
  computed: {
    memosFirstLine () {
      return this.memos.map(value => value.split('\n')[0])
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
