<template>
  <button @click="handleClick" :style="buttonStyle">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    label: { // text displayed on the button
      type: String,
      required: true
    },
    color: { // optional prop to change button color
      type: String,
      default: 'blue'
    }
  },
  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.color,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
        
      };
    }
  },
  methods: {
    handleClick() {
      this.$emit('clicked'); // emit event to parent
    }
  }
}
</script>
