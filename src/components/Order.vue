<template>
  <Header />
  <h1>Hello {{ name }} Welcome on Order Page</h1>
  <!-- <div>
    <h1>List of Orders</h1>
    <ul class="order-list">
      <li v-for="order in orders" :key="order.id">
        <h2>Order ID: {{ order.id }}</h2>
        <img
          :src="order.imageurl"
          :alt="order.name"
          class="product-image"
          style="max-width: 200px"
        />
        <p>Customer Name: {{ order.name }}</p>
        <p>Total Price: ${{ order.price }}</p>
        <div class="order-items">
          <h3>Ordered Items:</h3>
          <ul>
            <li v-for="item in order.items" :key="item.id">
              {{ item.name }} - ${{ item.price }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div> -->

  <div>
  <h1>List of Orders</h1>
  <table class="order-table">
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>
          <img
            :src="order.imageurl"
            :alt="order.name"
            class="order-image"
            style="max-width: 100px;"
          />
        </td>
        <td>{{ order.name }}</td>
        <td>${{ order.price }}</td>
        <td>
          <button v-on:click="removeToCart(order.id)" class="remove-btn">
            Remove
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>







</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "OrderPage",
  data() {
    return {
      name: "",
      orders: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    async removeToCart(id) {
      let result = await axios.delete("http://localhost:3000/order/" + id);
      if (result.status == 200) {
        this.loadData();
      }
      console.warn(id);
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/order");
      console.warn(result.data);
      this.orders = result.data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style>
td {
  width: 160px;
  height: 40px;
}

.order-table {
  width: 100%;
  border-collapse: collapse;
}

.order-table td, .order-table th {
  padding: 8px;
  text-align: left;
}

.order-table th {
  background-color: #f2f2f2;
}

.order-image {
  max-width: 100px;
}

.remove-btn {
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

</style>
