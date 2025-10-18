<template>
  <div class="input-container">
    <label>{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="inputValue"
      @input="$emit('input-change', inputValue)"
    />
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    label: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      inputValue: ''
    };
  }
};
</script>

<style scoped>
.input-container {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  width: 200px;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
</style>
