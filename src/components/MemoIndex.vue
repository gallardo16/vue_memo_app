<template>
  <div>
    <ul>
      <li v-for="(memo, id) in memosFirstLine" :key="memo">
        <a :href="/memos/ + id">{{ memo }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["memos"],
  computed: {
    memosFirstLine: function() {
      return this.memos.map(value => value.split('\n')[0])
    }
  }
}
</script>
