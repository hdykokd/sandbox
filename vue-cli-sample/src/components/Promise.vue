<template lang="pug">
  div
    .promise {{value}}
      input(v-model="value")
</template>

<script>
export default {
  name: 'Promise',
  data () {
    return {
      value: 'initial'
    }
  },
  methods: {
    taskA: function () {
      this.value = 'a'
      throw new Error('error task a')
    },
    taskB: function () {
      this.value = 'b'
      console.log('task b')
    },
    onRejected: (err) => {
      console.error(err)
    },
    finalTask: function () {
      this.value = 'final'
    }
  },
  mounted () {
    const promise = Promise.resolve()
    promise
      .then(this.taskA)
      .then(this.taskB)
      .catch(this.onRejected)
      .then(this.finalTask)
  }
}
</script>

<style lang="stylus">
</style>