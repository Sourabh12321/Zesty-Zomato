<template>
  <div id="mainadmin">
    <div id="upbtn">
      <button @click="showDishes">Order Details</button>
      <button @click="showOrders">Dishes</button>
    </div>
    <div id="admin">
      <div id="admin-update">
        <h2>Add Dish</h2>
        <form @submit.prevent="addDish">
          <label for="dishName">Dish Name:</label>
          <input type="text" id="dishName" v-model="dish.name" required />

          <label for="dishImage">Dish Image:</label>
          <input type="text" id="dishImage" v-model="dish.image" required />

          <label for="dishPrice">Dish Price:</label>
          <input type="number" id="dishPrice" v-model="dish.price" required />

          <button type="submit">Add Dish</button>
        </form>

        <h2>Update Dish</h2>
        <form @submit.prevent="updateDish">
          <label for="dishId">Dish ID:</label>
          <input type="text" id="dishId" v-model="updateData.id" required />

          <label for="availability">Availability:</label>
          <select id="availability" v-model="updateData.availability">
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>

          <label for="updatedPrice">Updated Price:</label>
          <input
            type="number"
            id="updatedPrice"
            v-model="updateData.price"
            required
          />

          <label for="updatedImage">Updated Image:</label>
          <input
            type="text"
            id="updatedImage"
            v-model="updateData.image"
            required
          />

          <button type="submit">Update Dish</button>
        </form>

        <h2>Delete Dish</h2>
        <form @submit.prevent="deleteDish">
          <label for="deleteDishId">Dish ID:</label>
          <input
            type="text"
            id="deleteDishId"
            v-model="deleteData.id"
            required
          />

          <button type="submit">Delete Dish</button>
        </form>

        <h2>Update Order Status</h2>
        <form @submit.prevent="updateOrderStatus">
          <label for="orderId">Order ID:</label>
          <input
            type="text"
            id="orderId"
            v-model="orderStatus.order_id"
            required
          />

          <label for="newStatus">New Status:</label>
          <input
            type="text"
            id="newStatus"
            v-model="orderStatus.new_status"
            required
          />

          <button type="submit">Update Order Status</button>
        </form>
      </div>
      <div v-if="showDishesSection" id="cat">
        <div v-for="item in data" :key="item.id">
          <img :src="item.image" alt="" />
          <h3>Title:-{{ item.name }}</h3>
          <p>Price:-{{ item.price }}</p>
          <p>Availability:-{{ item.availability }}</p>
          <button @click="edit(item._id)">Edit</button>
          <button @click="deletebutton(item._id)">Delete</button>
        </div>
      </div>
      <div v-if="showOrdersDetails" id="or">
        <h2>Order Details</h2>
        <ul>
          <div v-for="order in orders" :key="order._id" id="order-details">
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
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "AdminPage",
  data() {
    return {
      orders: [],
      data: [],
      showDishesSection: true,
      showOrdersDetails: false,
      dish: {
        name: "",
        image: "",
        price: null,
      },
      updateData: {
        id: "",
        availability: "true",
        price: null,
        image: "",
      },
      deleteData: {
        id: "",
      },
      orderStatus: {
        order_id: "",
        new_status: "",
      },
    };
  },
  mounted() {
    // Fetch the data when the component is mounted
    this.fetchData();
    const pageRefreshed = localStorage.getItem("pageRefreshed");
    if (!pageRefreshed) {
      // Page is loading for the first time, refresh it
      localStorage.setItem("pageRefreshed", true);
      window.location.reload();
    }
  },
  methods: {
    showDishes() {
      this.showDishesSection = false;
      this.showOrdersDetails = true;
    },
    showOrders() {
      this.showDishesSection = true;
      this.showOrdersDetails = false;
    },
    fetchData() {
      // Make a GET request to fetch data from localhost
      fetch("https://magnificent-puce-xerus.cyclic.app/menu")
        .then((response) => response.json())
        .then((data) => {
          // Update the data property with the fetched data

          this.data = data;

          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });

      fetch(`https://magnificent-puce-xerus.cyclic.app/review_orders_data`)
        .then((response) => response.json())
        .then((data) => {
          this.orders = data;
          console.log(this.order); // Update the order details property
        })
        .catch((error) => {
          console.error(error);
        });
    },
    edit(item) {
      console.log(item);
      document.querySelector("#dishId").value = item;
    },

    deletebutton(item) {
      console.log(item);
      document.querySelector("#deleteDishId").value = item;
    },
    addDish() {
      fetch("https://magnificent-puce-xerus.cyclic.app/add_dish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.dish),
      })
        .then((response) => response.json())
        .then((data) => {
          Swal.fire({
              title: "success",
              text: data.message,
              icon: "success",
              confirmButtonText: "OK",
            });
          
          this.dish.name = "";
          this.dish.image = "";
          this.dish.price = null;
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
              title: "error",
              text: "Something went wrong",
              icon: "error",
              confirmButtonText: "OK",
            });
        });
    },
    updateDish() {
      console.log(document.querySelector("#dishId").value);
      console.log(this.updateData);
      fetch("https://magnificent-puce-xerus.cyclic.app/update_dish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.updateData),
      })
        .then((response) => response.json())
        .then((data) => {
          Swal.fire({
              title: "success",
              text: data.message,
              icon: "success",
              confirmButtonText: "OK",
            });
          this.updateData.id = "";
          this.updateData.availability = "true";
          this.updateData.price = null;
          this.updateData.image = "";
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
              title: "error",
              text: "Something went wrong",
              icon: "error",
              confirmButtonText: "OK",
            });
        });
    },
    deleteDish() {
      fetch("https://magnificent-puce-xerus.cyclic.app/delete_dish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.deleteData),
      })
        .then((response) => response.json())
        .then((data) => {
          Swal.fire({
              title: "success",
              text: data.message,
              icon: "success",
              confirmButtonText: "OK",
            });
          this.deleteData.id = "";
        })
        .catch((error) => {
          console.error(error);
           Swal.fire({
              title: "error",
              text: "Something went wrong",
              icon: "error",
              confirmButtonText: "OK",
            });
        });
    },
    updateOrderStatus() {
      fetch("https://magnificent-puce-xerus.cyclic.app/update_order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.orderStatus),
      })
        .then((response) => response.json())
        .then((data) => {
          Swal.fire({
              title: "success",
              text: data.message,
              icon: "success",
              confirmButtonText: "OK",
            });
          
          this.orderStatus.order_id = "";
          this.orderStatus.new_status = "";
        })
        .catch((error) => {
          console.error(error);
           Swal.fire({
              title: "error",
              text: "Something went wrong",
              icon: "error",
              confirmButtonText: "OK",
            });
        });
    },
  },
};
</script>

<style scoped>
#mainadmin {
  margin-top: 70px;
}
#order-details>ul>li>img{
  width:200px;
  height:200px;
}

#admin {
  background-color: white;
  display: flex;
}
#admin-update {
  width: 20%;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

form {
  margin-bottom: 30px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
select {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-bottom: 15px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #1e88e5;
}

button[type="submit"]:hover {
  background-color: #1976d2;
}

.alert {
  background-color: #f44336;
  color: white;
  padding: 10px;
  margin-bottom: 15px;
}

.alert p {
  margin: 0;
}

#cat {
  width: 80%;
  margin: 50px auto auto 0px;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#order-details {
  width: 80%;
  margin: 50px auto auto 0px;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#cat > div {
  height: fit-content;
  width: 80%;
  background-color: rgb(249, 244, 244);
  align-items: center;
  text-align: center;
  transition: transform 0.3s;
}

#cat > div:hover {
  transform: scale(1.1);
}

#cat > div > img {
  width: 100%;
  height: 200px;
}
button {
  margin-bottom: 10px;
  margin-left: 2px;
}
@media screen and (max-width: 768px) {
  #mainadmin {
    margin-top: 120px;
  }
  #admin-update {
    width: 40%;
  }
  #cat {
    width: 60%;
    grid-template-columns: repeat(
      auto-fit,
      minmax(250px, 1fr)
    ); /* Use a dynamic grid for responsive layout */
    justify-content: center; /* Center the grid items horizontally */
  }
}

/* Add media query for smaller screens to make order-details div responsive */
@media screen and (max-width: 900px) {
  #order-details {
    width: 60%;
    grid-template-columns: repeat(
      auto-fit,
      minmax(250px, 1fr)
    ); /* Use a dynamic grid for responsive layout */
    justify-content: center; /* Center the grid items horizontally */
  }
}

@media screen and (max-width: 650px) {
  #admin{
    display:block;
  }
  #admin-update{
    width:100%;
  }
  #cat{
    width:100%;
  }
  #cat>div{
    width:100%;
  }
  #order-details {
    width:100%;
    grid-template-columns: repeat(
      auto-fit,
      minmax(250px, 1fr)
    ); /* Use a dynamic grid for responsive layout */
    justify-content: center; /* Center the grid items horizontally */
  }

  
}
</style>

