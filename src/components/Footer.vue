<template>

<div class="footer">
  <div class="footer-container">
    <!-- <div class="footer-column">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div> -->
    <div class="footer-column">
      <h3>Contact Information</h3>
      <p>Fashnear Technologies Private Limited</p>
      <p>3rd Floor Himalaya Complex Bhilai Chattisgarh  India 490001</p>
      <p>Email: DreamBoat@gmail.com</p>
      <p>Phone: +123-456-7890</p>
    </div>
    <div class="footer-column">
      <h3>Connect with Us</h3>
      <ul class="social-icons">
        <li><a href="#"><i class="fab fa-facebook">facebook</i></a></li>
        <li><a href="#"><i class="fab fa-twitter">Twitter</i></a></li>
        <li><a href="#"><i class="fab fa-instagram">Instagram</i></a></li>
        <li><a href="#"><i class="fab fa-linkedin">LinkedIn</i></a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2015-2024 Dream Boat. All rights reserved.</p>
  </div>
</div>


</template>

<script>

export default {
    name: "FotterPage",
    methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
}

</script>

<style>

.footer {
  background-color: #333;
  color: #fff;
  padding: 40px 0;
}

.footer-container {
  display: flex;
  justify-content: space-between;
}

.footer-column {
  flex: 1;
}

.footer-column h3 {
  margin-bottom: 20px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.social-icons {
  list-style: none;
  padding: 0;
  display: grid;
}

.social-icons li {
  margin-right: 10px;
}

.social-icons a {
  color: #fff;
}

.footer-bottom {
  background-color: #222;
  padding: 4px 0;
  text-align: center;
}



</style>