<!-- <template>
  <button @click="handleClick" :style="buttonStyle">{{ label }} </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    label: { // text displayed on the button
      type: String,
      required: false
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
</script> -->

<template>
  <button @click="$emit('clicked')" :style="buttonStyle">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    label: {
      type: String,
      required: true
    },
    color: {
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
        borderRadius: '6px',
        cursor: 'pointer',
        marginRight: '10px'
      };
    }
  }
};
</script>
