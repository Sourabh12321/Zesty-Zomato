<template>
  <div>
    <div id="main">
      <div>
        <h2>Zesty Zomato</h2>
        <button id="registerbtn" v-on:click="registerbtn">Register</button>
        <button id="loginbtn" v-on:click="loginbtn">Login</button>
        <div id="registerdiv">
          <form @submit.prevent="register" class="register">
            <div class="form-group">
              <label for="name">Name:</label><br />
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                v-model="name"
                required
              /><br />
            </div>
            <div class="form-group">
              <label for="email">Email:</label><br />
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                v-model="email"
                required
              /><br />
            </div>
            <div class="form-group">
              <label for="password">Password:</label><br />
              <input
                type="text"
                id="password"
                placeholder="Enter Your Password"
                v-model="password"
                required
              /><br />
            </div>
            <button type="submit" class="submit-button">Register</button>
          </form>
        </div>
        <div id="logindiv">
          <form @submit.prevent="login" class="login">
            <div class="form-group">
              <label for="email">Email:</label><br />
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                v-model="email"
                required
              /><br />
            </div>
            <div class="form-group">
              <label for="password">Password:</label><br />
              <input
                type="text"
                id="password"
                placeholder="Enter Your Password"
                v-model="password"
                required
              /><br />
            </div>
            <button type="submit" class="submit-button">login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "RegisterLogin",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    registerbtn() {
      console.log("register");
      document.getElementById("registerdiv").style.display = "block";
      document.getElementById("logindiv").style.display = "none";
    },
    loginbtn() {
      console.log("login");
      document.getElementById("registerdiv").style.display = "none";
      document.getElementById("logindiv").style.display = "block";
    },
    register() {
      axios
        .post("https://magnificent-puce-xerus.cyclic.app/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // Handle the response from the server
          console.log(response);
          Swal.fire({
              title: "success",
              text: "User Register Successfully",
              icon: "success",
              confirmButtonText: "OK",
            });
        })
        .catch((error) => {
          // Handle any errors that occur during the request
          console.error(error);
          Swal.fire({
              title: "error",
              text: "User is already registered",
              icon: "error",
              confirmButtonText: "OK",
            });
          
        });
    },
    login() {
      console.log(this.email, this.password);
      fetch("https://magnificent-puce-xerus.cyclic.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          console.log(data);
          if (data.message === "Login successful") {
            // Login successful, redirect to the home page
            localStorage.setItem("name", data.name);
            localStorage.setItem("id", data.id);
            Swal.fire({
              title: "success",
              text: data.message,
              icon: "success",
              confirmButtonText: "OK",
            });
            setTimeout(() => {
              if (
                data.name == "sourabh rajput" &&
                data.id == "64bcf33ea7676824c1705187"
              ) {
                this.$router.push({ name: "admin" });
              } else {
                this.$router.push({ name: "dishes" });
              }
            }, 3000);

            // this.$router.push({ name: "dishes" });
          } else {
            // Login failed, display the error message
            const errorMessage = document.getElementById("error-message");
            errorMessage.textContent = data.message;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire({
              title: "error",
              text: "Wrong Credentials",
              icon: "error",
              confirmButtonText: "OK",
            });
        });
    },
  },
};
</script>
<style>
#logindiv {
  display: none;
}
#main {
  width: 30%;
  color: white;
  background-color: black;
  margin: auto;
  margin-top: 105px;
  height: 300px;
  opacity: 0; /* Set initial opacity to 0 */
  animation: fade-in 1s ease-in-out forwards; /* Apply the fade-in animation */
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
#main > div {
  width: 70%;
  margin: auto;
  text-align: center;
}
form {
  width: 80%;
  margin: auto;
}
button {
  background-color: red;
  color: white;
  transition: transform 0.3s ease-in-out;
}

button:hover {
  transform: scale(1.1);
}

input {
  margin-top: 10px;
  margin-bottom: 10px;
}

@media screen and (max-width: 1024px) {
  #main {
    width: 50%;
  }
}

/* Styles for small screens (mobile devices) */
@media screen and (max-width: 768px) {
  #main {
    width: 80%;
    margin-top: 150px;
  }

  #main > div {
    width: 90%;
  }
}
</style>