<template>
  <div class="container">
    <h1>Material Entry Form</h1>

    <InputField label="Material Code" placeholder="Enter Material Code" @input-change="updateMaterialCode"/>
    <InputField label="Material Name" placeholder="Enter Material Name" @input-change="updateMaterialName"/>
    <InputField label="Quantity" type="number" placeholder="Enter Quantity" @input-change="updateQuantity"/>
    <InputField label="Price" type="number" placeholder="Enter Price" @input-change="updatePrice"/>

    <div class="buttons">
      <ButtonComponent label="Save" color="green" @clicked="saveMaterial"/>
      <ButtonComponent label="Update" color="orange" @clicked="updateMaterial"/>
      <ButtonComponent label="Delete" color="red" @clicked="clearForm"/>
    </div>

    <div class="preview">
      
      <h3>Current Data</h3>
      <p><strong>Material Code:</strong> {{ materialCode }}</p>
      <p><strong>Material Name:</strong> {{ materialName }}</p>
      <p><strong>Quantity:</strong> {{ quantity }}</p>
      <p><strong>Price:</strong> {{ price }}</p>
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
      materialName: '',
      quantity: '',
      price: ''
    };
  },
  methods: {
   
    updateMaterialCode(value) { this.materialCode = value; },
    updateMaterialName(value) { this.materialName = value; },
    updateQuantity(value) { this.quantity = value; },
    updatePrice(value) { this.price = value; },

    
    saveMaterial() {
      if (this.materialCode && this.materialName && this.quantity && this.price) {
        alert(`Saved Successfully!`);
      } else {
        alert('Please fill in all fields.');
      }
    },
    updateMaterial() {
      if (this.materialCode) {
        alert(`Material Updated!\nCode: ${this.materialCode}\nName: ${this.materialName}\nQuantity: ${this.quantity}\nPrice: ${this.price}`);
      } else {
        alert('Enter Material Code to update.');
      }
    },
    clearForm() {
      this.materialCode = '';
      this.materialName = '';
      this.quantity = '';
      this.price = '';
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
  background-color: aliceblue;
}
.buttons {
  margin-top: 15px;
}
.preview {
  margin: 5% auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 280px;
  text-align: center;
}
</style>
