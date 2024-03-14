<template>
  <Header />
  <h1>Hello {{ name }} Welcome on Home Page</h1>
  <div class="product-list">
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.id" class="product-item">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-price">Price: ${{ product.price }}</p>
        <img
          :src="product.imageurl"
          :alt="product.name"
          class="product-image"
          style="max-width: 200px"
        />
        <p class="product-description">{{ product.description }}</p>
        <button v-on:click="addToOrder(product.id)" class="add-to-cart-btn">
          Add To Cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "ProductPage",
  data() {
    return {
      name: "",
      products: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    async addToOrder(id) {
      let result = await axios.get("http://localhost:3000/product/" + id);
      
      if (result.status == 200) {
        this.product = result.data;
      }
        let result1 = await axios.post("http://localhost:3000/order",{
        imageurl:this.product.imageurl,
        name:this.product.name,
        price:this.product.price
      });
      if(result1.status==201){
        this.$router.push({ name: "Order" });
      }
      console.warn(result1.data);
      // console.warn(this.product);
      
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/product");
      console.warn(result);
      this.products = result.data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style></style>
