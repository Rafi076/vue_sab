<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-if="showMessage">This is a message!</p>
    <button @click="toggleMessage">Toggle Message</button>

    <h2>Fruits List:</h2>
    <ul>
      <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    </ul>

    <input v-model="newFruit" placeholder="Add fruit" />
    <button @click="addFruit">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vue Instance Practice',
      showMessage: true,
      fruits: ['Apple', 'Banana', 'Orange'],
      newFruit: ''
    }
  },
  methods: {
    toggleMessage() {
      this.showMessage = !this.showMessage
    },
    addFruit() {
      if(this.newFruit.trim() !== '') {
        this.fruits.push(this.newFruit.trim())
        this.newFruit = ''
      }
    }
  }
}
</script>

<style>
button {
  margin: 5px;
}
</style>
