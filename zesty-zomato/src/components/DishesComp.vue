<template>
  <div>
    <div class="filter">
      <select v-model="sortOption" @change="handleSort" id="sortfunc">
        <option value="">Sort by</option>
        <option value="ASC">Low to High</option>
        <option value="DESC">High to Low</option>
      </select>
      <input
        id="searchfunc"
        type="text"
        v-model="searchData"
        @input="handleSearch"
        placeholder="Search..."
      />
    </div>

    <div id="cat">
      <div v-for="item in data" :key="item.id">
        <img :src="item.image" alt="" />
        <h3>Title:-{{ item.name }}</h3>
        <p>Price:-{{ item.price }}</p>
        <p>Availability:-{{ item.availability }}</p>
        <button @click="addToCart(item._id)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  name: "DishesComp",
  data() {
    return {
      data: [],
      temp: [],
      sortOption: "",
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
    handleSort() {
      // Sort the data based on the selected sort option
      if (this.sortOption === "") {
        this.data = this.temp;
      } else if (this.sortOption === "ASC") {
        this.data = this.data.slice().sort((a, b) => a.price - b.price);
      } else if (this.sortOption === "DESC") {
        this.data = this.data.slice().sort((a, b) => b.price - a.price);
      }
      // You can call your displayTable method here or directly use the sorted data in your template
      console.log(this.data);
    },
    handleSearch() {
      const sData = this.searchData.trim();
      console.log(sData);
      if (sData === "") {
        // If search input is empty, display the original data
        this.data = this.temp;
      } else {
        // Filter the data based on the search input
        const filteredData = this.data.filter((el) => {
          return el.name && el.name.toLowerCase().includes(sData.toLowerCase());
        });
        this.data = filteredData;
        console.log(filteredData);
      }
    },
    fetchData() {
      // Make a GET request to fetch data from localhost
      fetch("https://magnificent-puce-xerus.cyclic.app/menu")
        .then((response) => response.json())
        .then((data) => {
          // Update the data property with the fetched data

          this.data = data;
          this.temp = data;
          // window.location.reload();
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    addToCart(item) {
      // Perform the addToCart action

      // Create an object with the form data
      let id = localStorage.getItem("id");
      if (id) {
        console.log(`Added to cart: ${item}`);
        const formData = new FormData();
        formData.append("customer_id", id); // Replace this with the actual customer ID
        formData.append("dish_id", item);

        // Make a POST request to add the item to the cart
        fetch("https://magnificent-puce-xerus.cyclic.app/add_to_cart", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the server
            console.log(data.message);
            Swal.fire({
              title: "success",
              text: "Item added to the cart",
              icon: "success",
              confirmButtonText: "OK",
            });
          })
          .catch((error) => {
            // Handle any errors that occur during the request
            console.error(error);
          });
      } else {
        Swal.fire({
          title: "error",
          text: "You have to login first",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  },
};
</script>
<style>
#h1 {
  margin-top: -20px;
  text-align: center;
  color: black;
  width: 100%;
  background-color: white;
}
#cat {
  width: 90%;
  margin: auto;
  margin-top: 50px;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
.filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  margin-top:60px;
  margin-bottom: 20px;
}

#sortfunc,
#searchfunc {
  padding: 8px;
  border-radius: 4px;
  margin:10px 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  transition: border-color 0.3s ease-in-out;
}

#searchfunc {
  width: 60%;
  background-color:#272932;
}

#sortfunc {
  width: 30%;
  color: #333;
  background-color: #f7f7f7;
}

#searchfunc:focus,
#sortfunc:focus {
  outline: none;
  border-color: #8da3fd;
  box-shadow: 0 0 3px rgba(141, 163, 253, 0.5);
}

@media screen and (max-width: 600px) {
  .filter {
    flex-direction: column;
    align-items: stretch;
  }

  #sortfunc,
  #searchfunc {
    width: 80%;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 1024px) {
  #cat {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Styles for small screens (mobile devices) */
@media screen and (max-width: 768px) {
  #cat {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .filter {
    flex-direction: column;
    align-items: stretch;
    margin-top:105px;
  }
}
</style>