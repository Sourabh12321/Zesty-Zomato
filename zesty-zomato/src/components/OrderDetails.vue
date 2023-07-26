<template>
  <div id="order-details">
    <h2>Order Details</h2>
    <div v-if="orders.length === 0" id="h2">
      <h2>You have to Login first </h2>
      <h2>To see your order details</h2>
      <img src="https://media.giphy.com/media/3ohhwsjzpejaSWoTkI/giphy.gif" alt="">
    </div>
    <ul>
      <div v-for="order in orders" :key="order._id">
        <h3>Order ID: {{ order._id }}</h3>
        <p>Customer Name: {{ order.customer_name }}</p>
        <ul>
          <li v-for="dish in order.dishes" :key="dish._id">
            <img :src="dish.image" alt="" />
            <h4>{{ dish.name }}</h4>
            <p>Price: {{ dish.price }}</p>
            <p v-if="dish.availability">Availability: Available</p>
            <p v-else>Availability: Not Available</p>
          </li>
        </ul>
        <p>Status: {{ order.status }}</p>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OrderDetails",
  data() {
    return {
      orders: [], // Initialize as an empty array
    };
  },
  mounted() {
    // Fetch the order details when the component is mounted
    this.fetchOrderDetails();
  },
  methods: {
    fetchOrderDetails() {
      const orderId = localStorage.getItem("id"); // Assuming the order ID is passed as a route parameter
      fetch(`https://magnificent-puce-xerus.cyclic.app/review_orders/${orderId}`)
        .then((response) => response.json())
        .then((data) => {
          this.orders = data;
          console.log(this.order); // Update the order details property
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
#order-details {
  font-family: Arial, sans-serif;
  width: 100%; /* Change the width to 100% to occupy the full width of the container */
  max-width: 600px; /* Add a max-width to limit the width on larger screens */
  background-color: white;
  margin: 100px auto;
  padding: 20px;
}

#h2 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  align-items: center;
  /* display: flex; */
}


ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
}

img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

h4 {
  font-size: 18px;
  margin-bottom: 5px;
}

p {
  margin: 0;
}

p + p {
  margin-top: 5px;
}

p:last-child {
  margin-bottom: 10px;
}

p.available {
  color: green;
}

p.not-available {
  color: red;
}

p.status {
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
}
@media screen and (max-width: 768px) {
  #order-details {
    padding: 10px;
    max-width: 400px; 
    margin-top:120px;/* Adjust the max-width for smaller screens */
  }

  li {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  img {
    width: 80px;
    height: 80px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }

  .status {
    font-size: 16px;
    margin-top: 10px;
  }
}
</style>

