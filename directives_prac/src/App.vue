<!-- // Ticket Checking Dashboard

<template>
  <div>
    <h1>Ticket Checking Dashboard</h1>
    <p>Here, we will check directives of Vue</p> 
    <p>write a fruits name.To check if its in cart..</p>
    <input type="number" v-model.number="TicNo" placeholder="Enter score" />
    <h2>Ticket No assigned? </h2>

    <p v-if="TicNo >= 190101 && TicNo <= 251016">Ticket Number Already Generated!!</p>
    <p v-else-if="TicNo < 190101">Ticket No Number Generated!</p>
    <p v-if="TicNo >= 251016">Ticket Number is available</p>
    <p v-else>Check available Ticket</p>

    <button @click="reset">Reset</button>


  </div>
</template>

<script>
export default {
  data() {
    return{
      TicNo: null
    }
  },
  methods:{
    reset(){
      this.TicNo = null
    }
  }
}
</script>
<style>
input {
  margin: 5px 0;
  padding: 5px;
  width: 150px;
}
button {
  margin-top: 10px;
}
</style> -->








// Material Checking Dashboard
<template>
  <div class="container">
    <h1>Warehouse Material Stock Dashboard</h1>
    <p>Enter Material Code to check availability:</p>
    <input
      type="text"
      v-model="materialCode" placeholder="Enter Material Code "
      v-bind:style="{ borderColor: materialName ? 'green' : 'gray' }"
    >
    <h2>Stock Status</h2>
    <p v-if="materialQty === null">Please enter a material code to check stock.</p>
    <p v-else-if="materialQty > 50">In Stock: Plenty available ({{ materialQty }} {{ materialUnit }})</p>
    <p v-else-if="materialQty > 0 && materialQty <= 50">Limited Stock: Hurry up! ({{ materialQty }} {{ materialUnit }})</p>
    <p v-else>Out of Stock! Please order more.</p>

    <button @click="checkStock">Check Stock</button>
    <button @click="reset">Reset</button>

    <div v-show="showAll">
  <h3>All Materials in Warehouse</h3>
  
  <div class="list-row header">
    <div>Material Code</div>
    <div>Name</div>
    <div>Quantity</div>
    <div>Unit</div>
  </div>

  <div v-for="(item, code) in stock" :key="code" class="list-row">
    <div>{{ code }}</div>
    <div>{{ item.name }}</div>
    <div>{{ item.qty }}</div>
    <div>{{ item.unit }}</div>
  </div>
</div>
    <button @click="toggleList">{{ showAll ? 'Hide' : 'Show' }} All Materials</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      materialCode: '',
      materialQty: null,
      materialUnit: '',
      showAll: false,
      stock: {
        "ST025": { name: "Steel", qty: 120, unit: "kg" },
        "CP025": { name: "Copper", qty: 40, unit: "kg" },
        "AL025": { name: "Aluminum", qty: 0, unit: "pcs" },
        "PL025": { name: "Plastic", qty: 80, unit: "units" },
        "RB025": { name: "Rubber", qty: 25, unit: "rolls" },
        "SC025": { name: "Screw", qty: 500, unit: "pcs" },
        "PT025": { name: "Paint", qty: 60, unit: "liters" }
      }
    };
  },
  methods: {
    checkStock() {
      const code = this.materialCode.trim().toUpperCase();
      if (code in this.stock) {
        this.materialQty = this.stock[code].qty;
        this.materialUnit = this.stock[code].unit;
      } else {
        this.materialQty = 0;
        this.materialUnit = '';
      }
    },
    reset() {
      this.materialCode = '';
      this.materialQty = null;
      this.materialUnit = '';
    },
    toggleList() {
      this.showAll = !this.showAll;
    }
  }
};
</script>

<style>
body {
  background-color: #f5f6fa;
  margin: 0;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 500px;
  margin: 5% auto;
  text-align: center;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

input {
  padding: 8px;
  width: 220px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  margin: 5px;
  padding: 8px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #3498db;
  color: white;
  transition: 0.3s;
}

button:hover {
  background-color: #2980b9;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #ecf0f1;
  margin: 5px 0;
  padding: 8px;
  border-radius: 8px;
}
.list-row {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-radius: 6px;
  margin-bottom: 4px;
  background-color: #ecf0f1;
}

.list-row.header {
  font-weight: bold;
  background-color: #3498db;
  color: white;
}

.list-row div {
  width: 25%;
  text-align: center;
}

</style>



