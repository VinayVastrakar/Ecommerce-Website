<template>

  <router-view/>
  
</template> 

<script>

export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
body,h1{
  padding: 0;
  margin: 0;
}
.logo {
  width: 100px;
}
.register input, .login input,.add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  border: 1px solid skyblue;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}
table{
    display: grid;
    justify-content: center;
}

.register button, .login button , .add button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  background-color: skyblue;
  cursor: pointer;
}






ul{
  display: grid;
}



/* Style for the product list container */
.product-list {
    margin: 0 auto;
    max-width: 800px;
    padding: 20px;
}

/* Style for each product item */
.product-item {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ebebeb;
    border-radius: 50px;
    background-color: #edeef0;
    list-style-type: none;
}
.product-item:hover{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

/* Style for product name */
.product-name {
    font-size: 1.2rem;
    margin-top: 0;
}

/* Style for product price */
.product-price {
    font-weight: bold;
}

/* Style for product description */
.product-description {
    margin-bottom: 10px;
}

/* Style for product image */
.product-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 37% 0% 33% 0% / 37% 24% 38% 24%;
    transition: transform 0.2s;
}

.product-image:hover{
  /* border:1px solid black; */
  transform: scale(1.03);
}


/* Style for the "Add to Cart" button */
.add-to-cart-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.add-to-cart-btn:hover {
    background-color: #0056b3;
}


</style>
