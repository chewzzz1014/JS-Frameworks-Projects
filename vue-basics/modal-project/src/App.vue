<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">Click me</button>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      title: "My First Vue App",
    };
  },
  methods: {
    handleClick(e) {
      // access template ref
      console.log(this.$refs.name)
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
