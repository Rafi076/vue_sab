<template>
  <div class="container">
    <h1>Inventory Management Dashboard</h1>

    
    <div class="form">
      <input v-model="newProduct" placeholder="Enter Product Name" />
      <input v-model.number="quantity" type="number" placeholder="Quantity" />
      <input v-model.number="price" type="number" placeholder="Price" />
      <button @click="addProduct">Add</button>
    </div>

    
    <div class="summary">
      <p><strong>Total Products:</strong> {{ totalProducts }}</p>
      <p><strong>Total Inventory Value:</strong> ${{ totalValue }}</p>
    </div>

    
    <table border="1">
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price ($)</th>
          <th>Total Value ($)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products" :key="index">
          <td>{{ index + 1 }}</td> <td>{{ item.name }}</td> <td :style="{ color: item.qty < 5 ? 'red' : 'black' }">{{ item.qty }}</td> <td>{{ item.price }}</td> <td>{{ item.qty * item.price }}</td>
        </tr>
      </tbody>
    </table>

    
    <p v-if="lowStockWarning" style="color: red; margin-top: 10px;">
      Warning: One or more items have low stock!
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      newProduct: '',
      quantity: '',
      price: '',
      lowStockWarning: false
    }
  },

  
  computed: {
    totalProducts() {
      return this.products.length
    },
    totalValue() {
      return this.products.reduce((sum, item) => sum + item.qty * item.price, 0)
    }
  },

  
  watch: {
    products: {
      deep: true,
      handler(newList) {
        this.lowStockWarning = newList.some(item => item.qty < 5)
      }
    }
  },

  
  created() {
    console.log("Dashboard created — preparing data...")
  },
  mounted() {
    console.log("Dashboard mounted — loading initial products...")

    
    setTimeout(() => {
      this.products = [
        { name: 'Keyboard', qty: 10, price: 25 },
        { name: 'Mouse', qty: 4, price: 15 },
        { name: 'Monitor', qty: 8, price: 120 }
      ]
      console.log("Initial data loaded.")
    }, 1000)
  },


  methods: {
    addProduct() {
      if (this.newProduct && this.quantity > 0 && this.price > 0) {
        this.products.push({
          name: this.newProduct,
          qty: this.quantity,
          price: this.price
        })
        this.newProduct = ''
        this.quantity = 0
        this.price = 0
      } else {
        alert("⚠️ Please fill all fields correctly!")
      }
    }
  }
}
</script>

<style>
.container {
  width: 70%;
  margin: 30px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px gray;
  text-align: center;
  background-color: #f8f9fa;
}
.form {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}
input {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid gray;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  padding: 10px;
  text-align: center;
}
.summary {
  background: #fff3cd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>
