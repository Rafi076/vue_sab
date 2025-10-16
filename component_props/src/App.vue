<template>
  <div>
    <h1>Reusable Button Example</h1>
    
    <!-- Using button with default color -->
    <ButtonComponent label="Click Me" @clicked="onButtonClick" />

    <!-- Using button with custom color -->
    <ButtonComponent label="Delete" color="red" @clicked="onDeleteClick" />
  </div>
</template>

<script>
import ButtonComponent from './components/ButtonComponent.vue';

export default {
  name: 'App',
  components: { ButtonComponent },
  methods: {
    onButtonClick() {
      alert('Button clicked!');
    },
    onDeleteClick() {
      alert('Delete button clicked!');
    }
  }
}
</script>
