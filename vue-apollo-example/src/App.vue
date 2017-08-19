<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/logo.png">
    </div>
    <h1>Vue Apollo Integration</h1>
    <h3>Hello</h3>
    <p>{{hello}}</p>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const helloQuery = gql`
  query {
    hello
  }
`

export default {
  name: 'app',
  data() {
    return {
      hello: '',
    }
  },
  apollo: {
    hello: {
      query: helloQuery,
    },
  },
  methods: {},
  mounted() {},
}
</script>

<style>
body, input {
  font-family: Helvetica, sans-serif;
  font-size: 12pt;
}

#app {
  max-width: 500px;
  padding: 12px;
  margin: auto;
  text-align: center;
}

.info,
.loading {
  color: #999;
  margin: 12px;
}

.tag {
  display: inline-block;
  padding: 4px;
  background: #40b883;
  color: white;
  border-radius: 2px;
  margin: 2px;
}

.tag.optimistic {
  background: #b76c40;
}

form {
  margin: 22px;
}

input {
  padding: 8px;
  border: solid 1px #bbb;
  border-radius: 2px;
}

input:focus {
  box-shadow: none;
  outline: none;
  border-color: #40b883;
}

.tag-list {
  text-align: left;
  border: solid 1px #40b883;
  padding: 10px;
  border-radius: 3px;
}

.actions {
  text-align: center;
}
</style>
