<template>
  <div id="app">
    <h1>メモアプリ</h1>
    <ul>
      <li v-for="(memo, id) in memosFirstLine" :key="memo.id">
      <router-link :to="/memos/ + id">{{ memo }}</router-link>
      </li>
    </ul>
    <router-view @create-click="createMemo" @update-click="updateMemo" @remove-click="removeMemo" :memos="memos"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memos: []
    }
  },
  computed: {
    memosFirstLine () {
      return this.memos.map(value => value.split("\n")[0])
    }
  },
  mounted () {
    if (localStorage.getItem("memos")) {
      try {
        this.memos = JSON.parse(localStorage.getItem("memos"))
      } catch (e) {
        localStorage.removeItem("memos")
      }
    }
  },
  methods: {
    createMemo (value) {
      if (!value) {
        alert("正しく入力してください")
      } else {
        this.memos.push(value)
        this.saveMemos()
        this.$router.push("/")
      }
    },
    updateMemo (idx, value) {
      this.memos.splice(idx, 1, value)
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
      localStorage.setItem("memos", parsed)
    }
  }
}
</script>

<style>
h1, h2, h3 {
  margin-left: 10px;
}

ul {
  font-size: 20px;
  background-color: #fff8ef;
  border-style: solid;
  border-width: 1px;
  padding: 20px;
  list-style: none;
}

textarea {
  width: 300px;
  height: 300px;
  font-size: 20px;
}

button {
  font-size: 18px;
  margin-left: 15px;
  padding: 5px, 15px;
  border-radius: 10%;
}
</style>
