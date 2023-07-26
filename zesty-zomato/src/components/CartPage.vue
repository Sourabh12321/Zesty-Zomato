<template>
  <div id="cart">
    <h2>Cart</h2>
    <div v-if="data.length === 0" id="cart-image">
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="">
    </div>
    <ul>
      <div id="category">
        <div v-for="item in data" :key="item.id">
          <img :src="item.image" alt="" />
          <h3>Title: {{ item.name }}</h3>
          <p>Price: {{ item.price }}</p>
          <p>Availability: {{ item.availability }}</p>
          <button @click="incrementQuantity(item)">+</button>
          <p>{{ item.quantity }}</p>
          <button @click="decrementQuantity(item)">-</button>
          <button @click="removeItem(item)">Remove</button>
        </div>
      </div>
    </ul>
    <div>
      <p>TOTAL PRICE :-</p>
      <span>{{ calculateTotalPrice() }}</span>
    </div>
    <button @click="checkout">Checkout</button>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "CartPage",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
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
    incrementQuantity(item) {
      console.log(item);
      item.quantity++;
      console.log(item.quantity);

      this.updateCartItem(item, item.quantity); // Update the cart item quantity on the server
    },
    decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        console.log(item.quantity);
        this.updateCartItem(item, item.quantity); // Update the cart item quantity on the server
      }
    },
    calculateTotalPrice() {
      let total = 0;
      this.data.forEach((item) => {
        const price = Number(item.price);
        const quantity = Number(item.quantity);
        console.log(price,quantity)
        if (!isNaN(price) && !isNaN(quantity)) {
          total += price * quantity;
        }
      });
      return total
    },

    removeItem(item) {
      this.removeCartItem(item);  // Remove the cart item from the server
    },
    updateCartItem(item, quantity) {
      const id = item._id.$oid;
      console.log(id, quantity);
      console.log("working");
      fetch(`https://magnificent-puce-xerus.cyclic.app/cart/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, quantity }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.msg);
          this.fetchData();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    removeCartItem(item) {
      const id = item._id.$oid;
      fetch(`https://magnificent-puce-xerus.cyclic.app/cart/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.msg);
          this.fetchData();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    checkout() {
      if(this.data.length!==0){
        this.$router.push({ name: "CheckOut" });
      }else{
         Swal.fire({
              title: "error",
              text: "First Add some items to cart",
              icon: "error",
              confirmButtonText: "OK",
            });
      }
      
      
    },
  },
};
</script>


<style scoped>
#cart {
  background-color: white;
  text-align: center;
  margin-top: 70px;
}
h2 {
  margin-bottom: 50px;
}

#category {
  width: 90%;
  margin: auto;
  margin-top: -50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
}

#category > div {
  margin-top: 100px;
  height: fit-content;
  width: 70%;
  background-color: black;
  align-items: center;
  text-align: center;
  transition: transform 0.3s;
}

#category > div:hover {
  transform: scale(1.1);
}

#category > div > img {
  width: 100%;
  height: 200px;
}

.quantity-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

.quantity-buttons button {
  background-color: #ccc;
  border: none;
  color: black;
  font-size: 16px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.quantity-buttons p {
  margin: 0 10px;
  font-size: 16px;
}
button {
  margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
  #category {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    
  }
  #cart{
    margin-top:120px;
  }
  #cart-image>img{
  width:100%;
  
}
}

@media screen and (max-width: 480px) {
  #category {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  #cart-image>img{
  width:100%;
  
}
}
/* Your styles here */
</style>
