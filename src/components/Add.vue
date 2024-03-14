<template>
  <Header />
  <h1>Hello this is Add Product Page</h1>
  <form class="add">
    <input
      type="text"
      placeholder="Enter Name"
      v-model="product.name"
      name="name"
    />
    <input
      type="text"
      placeholder="Price"
      v-model="product.price"
      name="address"
    />
    <input
      type="text"
      placeholder="Image Url"
      v-model="product.imageurl"
      name="contact"
    />
    <input
      type="text"
      placeholder="Description"
      v-model="product.description"
      name="contact"
      style="height: 100px;"
    />
    <button type="button" v-on:click="addProduct">Add Product</button>
  </form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';

export default {
  name: "AddPro",
  components:{
    Header
  },
  data(){
    return{
      product:{
        name:'',
        price:'',
        imageurl:'',
        description:''
      }
    }
  },
  methods:{
    async addProduct(){
      console.warn(this.product);
      const result = await axios.post("http://localhost:3000/product",{
        name:this.product.name,
        price:this.product.price,
        imageurl:this.product.imageurl,
        description:this.product.description
      });
      if(result.status==201){
        this.$router.push({ name: "Home" });
      }
      console.warn("result",result);
    }
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
