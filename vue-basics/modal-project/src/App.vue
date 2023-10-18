<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" ref="name" />
    <button @click="handleClick">Click me</button>
  </div>
  <Modal />
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: "App",
  components: {
    Modal
  },
  data() {
    return {
      title: "My First Vue App",
    };
  },
  methods: {
    handleClick(e) {
      // access template ref
      console.log(this.$refs.name) // return the html element
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
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
