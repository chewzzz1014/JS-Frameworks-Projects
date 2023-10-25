<template>
  <div>
    <div>
      <h1>{{ title }}</h1>
      <input type="text" ref="name" />
      <button @click="handleClick">Click me</button>
    </div>
    <div v-if="showModal">
      <Modal 
        theme="sale"
        @close="toggleModal"
      >
        <template v-slot:links>
          <a href="#">Sign Up Now</a>
          <a href="#">More Info</a>
        </template>
        <h1>Sign up for the Giveaway</h1>
        <p>Grab it Now!</p>
      </Modal>
    </div>
    <div v-if="showModal2">
      <Modal 
        theme="sale"
        @close="toggleModal2"
      >
        <template v-slot:modal2>
          <h1>Sign up to the newsletter</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ipsa eaque ut saepe velit, iusto iure ullam ab voluptate eos aspernatur fugit dignissimos neque! Commodi eveniet magni minus harum nisi!</p>
        </template>
      </Modal>
    </div>
    <button @click.right="toggleModal">Open Modal (Right Click)</button>
    <button @click="toggleModal2">Open Modal 2</button>
  </div>
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
      header: "Sign up for the Giveaway",
      text: "Grab it now!",
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    handleClick(e) {
      // access template ref
      console.log(this.$refs.name) // return the html element
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
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
