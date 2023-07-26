<template>
  <div class="checkout-container">
    <h1>Checkout</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" id="address" v-model="address" required  placeholder="Enter Your Full Address"/>
      </div>
      <div class="form-group">
        <label for="location">Location</label>
        <input type="text" id="location" v-model="location" required placeholder="Enter Your Location"/>
      </div>
      <div class="form-group">
        <label for="pincode">Pincode</label>
        <input type="text" id="pincode" v-model="pincode" required placeholder="Enter Your Pincode" />
      </div>
      <div class="form-group">
        <label for="landmark">Landmark</label>
        <input type="text" id="landmark" v-model="landmark" required placeholder="Enter Your Landmark" />
      </div>
      <div class="form-group">
        <label for="state">State</label>
        <input type="text" id="state" v-model="state" required placeholder="Enter Your State" />
      </div>
      <div class="form-group">
        <label for="city">City</label>
        <input type="text" id="city" v-model="city" required placeholder="Enter Your City" />
      </div>
      <button type="submit">Place Order</button>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "CheckOut",
  data() {
    return {
      address: "",
      location: "",
      pincode: "",
      landmark: "",
      state: "",
      city: "",
      data : [],
    };
  },
   mounted() {
    this.fetchData();
  },
    
  methods: {
    submitForm() {
      console.log("Form submitted!");
      console.log("Checkout");
      fetch("https://magnificent-puce-xerus.cyclic.app/new_order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_name: localStorage.getItem("name"), // Replace with the actual customer name
          dish_ids: this.data.map((item) => {
            return item.dish_id;
          }),
          c_id: localStorage.getItem("id"),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.message);
           Swal.fire({
              title: "success",
              text: "Order Placed Successfully",
              icon: "success",
              confirmButtonText: "OK",
            });
            setInterval(()=>{
                this.$router.push({ name: "Home" });
            },3000)
          
          this.data = [];
        })
        .catch((error) => {
          console.error(error);
        });
    
    },
    fetchData() {
      let id = localStorage.getItem("id");
      fetch(`https://magnificent-puce-xerus.cyclic.app/cart/${id}`)
        .then((response) => response.json())
        .then((data) => {
          let a = JSON.parse(data.msg);
          this.data = a;
          console.log(a);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
/* Add your beautiful CSS styles here */
/* For example, you can use flexbox or grid for form layout, add colors, etc. */
.checkout-container {

  background-color: white;
  max-width: 600px;
  margin: 100px auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .checkout-container {
    margin: 50px auto;
    padding: 10px;
  }
}

@media screen and (max-width: 810px) {
  .checkout-container {
    margin: 100px auto;
    padding: 10px;
  }

  input {
    padding: 6px;
  }
}

/* Add more media queries as needed for other screen sizes */
/* For example, for smaller mobile devices */
@media screen and (max-width: 490px) {
  .checkout-container {
    margin: 115px auto;
    padding: 5px;
  }

  input {
    padding: 4px;
  }
}
</style>
