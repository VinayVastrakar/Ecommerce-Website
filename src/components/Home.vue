<template>
  <Header />
  <div id="app">
    <!-- Banner Section -->
    <section class="banner">
      <h1>
        <b>Hii,{{ name }}</b>
      </h1>
      <h1><b>Welcome to Dream Boat</b></h1>
      <img
        class="logo"
        src="https://i.pinimg.com/564x/21/70/a1/2170a16eab3f9d8356305cd46c63e9ae.jpg"
        alt=""
      />

      <p>Discover Amazing Products and Services</p>
    </section>

    <!-- About Us Section -->
    <section class="about">
      <h2>About Us</h2>
      <p>
        Dream Boat is the best place to find fashionable and affordable <br> western
        wear for women. With a constantly updating range of casual,<br> formal, and
        partywear dresses, jeans, tops, T-shirts, skirts, and more,<br> Meesho has
        all the latest trending outfits you're looking for plus funky<br> jewelry
        and accessories. You'll never have to worry about overspending<br> or not
        being able to find something you love!
      </p>
    </section>
  </div>

  <Footer />
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      // products: [],
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    //   async addToOrder(id) {
    //     let result = await axios.get("http://localhost:3000/product/" + id);

    //     if (result.status == 200) {
    //       this.product = result.data;
    //     }
    //       let result1 = await axios.post("http://localhost:3000/order",{
    //       imageurl:this.product.imageurl,
    //       name:this.product.name,
    //       price:this.product.price
    //     });
    //     if(result1.status==201){
    //       this.$router.push({ name: "Order" });
    //     }
    //     console.warn(result1.data);
    //     // console.warn(this.product);

    //   },
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
<style>
/* styles.css */

/* body{
    background-image:url("https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/Ecommerce-website-design.jpg?auto=format&q=60&fit=max&w=930");
    filter:blur(0px);
    filter: drop-shadow(50%);
    max-width: 200%;
} */

.logo {
  width: 80px;
}

.banner {
  text-align: center;
  padding: 50px 0;
  font-size: 1.2rem;
  color: black;
}

.banner h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #000000;
}

.banner p {
  font-size: 1.5rem;
  color: #0c79ed;
}

.about,
.contact {
  padding: 50px 20px;
  text-align: center;
  color: #48097c;
}
.about h2 {
  text-align: center;
  color: #0c79ed;
}
</style>
