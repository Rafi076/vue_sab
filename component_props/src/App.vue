<!-- <template>
  <div>
    <h1>Reusable Button Example</h1>
    
    <ButtonComponent label="Click Me" color="blue" @clicked="onButtonClick" class="button"/>

    <ButtonComponent label="Delete" color="red" @clicked="onDeleteClick" />

    <ButtonComponent label="Pause" color="green" @clicked="onPaseClick" />
  </div>
</template>

<script>
import ButtonComponent from './components/ButtonComponent.vue';

export default {
  components: { ButtonComponent },
  methods: {
    onButtonClick() {
      alert('Button clicked!');
    },
    onDeleteClick() {
      alert('Delete button clicked!');
    },
    onPaseClick(){
      alert('Pass button click')
    }
  }
}
</script>

<style>
button{
  margin: 5px;

  
}
</style> -->

<template>
  <div class="container">
    <h1>Material Entry Form</h1>

    <InputField label="Material Code" placeholder="Enter Material Code" @input-change="updateMaterialCode"/>
    <InputField label="Quantity" type="number" placeholder="Enter Quantity" @input-change="updateQuantity"/>

    <div class="buttons">
      <ButtonComponent label="Save" color="green" @clicked="saveMaterial"/>
      <ButtonComponent label="Delete" color="red" @clicked="clearForm"/>
    </div>

    <div class="preview">
      <h3>Current Data</h3>
      <p><strong>Material Code:</strong> {{ materialCode }}</p>
      <p><strong>Quantity:</strong> {{ quantity }}</p>
    </div>
  </div>
</template>

<script>
import InputField from './components/InputField.vue';
import ButtonComponent from './components/ButtonComponent.vue';

export default {
  name: 'App',
  components: { InputField, ButtonComponent },
  data() {
    return {
      materialCode: '',
      quantity: ''
    };
  },
  methods: {
    updateMaterialCode(value) {
      this.materialCode = value;
    },
    updateQuantity(value) {
      this.quantity = value;
    },
    saveMaterial() {
      if (this.materialCode && this.quantity) {
        alert(`Saved Successfully!\nMaterial Code: ${this.materialCode}\nQuantity: ${this.quantity}`);
      } else {
        alert('Please fill in all fields.');
      }
    },
    clearForm() {
      this.materialCode = '';
      this.quantity = '';
      alert('Form cleared.');
    }
  }
};
</script>

<style>
.container {
  max-width: 500px;
  margin: 5% auto;
  text-align: center;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1 {
  margin-bottom: 20px;
}

.buttons {
  margin-top: 15px;
}

.preview {
   margin: 5% auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 260px;
  text-align: center;
}
</style>
