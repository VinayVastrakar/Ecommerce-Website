<template>
  <Header />
  <h1>Hello this is Contact Us Page</h1>
  <form class="add">
    <input
      type="text"
      placeholder="Enter Name"
      v-model="contact.name"
      name="name"
    />
    <input
      type="text"
      placeholder="Email"
      v-model="contact.email"
      name="email"
    />
    <input
      type="text"
      placeholder="Subject"
      v-model="contact.subject"
      name="subject"
    />
    <input
      type="text"
      placeholder="Message"
      v-model="contact.message"
      name="message"
    style="height:170px"/>
    <button type="button" v-on:click="addContact">Send Message</button>
  </form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';

export default {
  name: "ContactUs",
  components:{
    Header
  },
  data(){
    return{
      contact:{
        name:'',
        email:'',
        subject:'',
        message:''
      }
    }
  },
  methods:{
    async addContact(){
      // console.warn(this.contact);
      const result = await axios.post("http://localhost:3000/contact",{
        name:this.contact.name,
        email:this.contact.email,
        subject:this.contact.subject,
        message:this.contact.message
      });
      if(result.status==201){
        alert("We are reaching you shortly");
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
