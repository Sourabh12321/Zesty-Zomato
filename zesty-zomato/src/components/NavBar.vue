<template>
  <div>
    <nav class="navbar">
      <div id="img">
        <router-link to="/" class="nav-link"
          ><img alt="Zestyzomata logo" src="../assets/logo.png" id="zesty"
        /></router-link>
      </div>
      <div id="ul">
        <router-link v-if="!name" to="/register" class="nav-link" id="login"
          >Login || Signup</router-link
        >
        <router-link v-else to="/" class="nav-link">{{ name }}</router-link>
        <router-link to="/dishes" class="nav-link">Dishes</router-link>
        <router-link to="/cart" class="nav-link">Cart</router-link>
        <router-link to="/orderstaus" class="nav-link"
          >Order Status</router-link
        >
        <button v-if="name" @click="logout">Logout</button>
        <div class="hamburger" @click="toggleNavLinks">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      name: null,
      // Placeholder for the user name
    };
  },
  mounted() {
    // Check if the user name is available in the local storage
    const name = localStorage.getItem("name");
    if (name) {
      this.name = name;
    }
  },
  methods: {
    logout() {
      // Perform the logout action

      localStorage.clear();
      this.name = null;
    },
  },
};
</script>
<style>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  color: white;
  z-index: 9999;
}

#zesty {
  height: 70px;
  width: 100px;
}

#ul {
  width: 70%;
  display: flex;
  margin-top: 20px;
  justify-content: space-evenly;
}
.nav-link {
  text-decoration: none;
  color: white;
}

@media screen and (max-width: 1024px) {
  #ul {
    flex-wrap: wrap;
    width: 100%;
  }

  .nav-link {
    margin: 10px;
  }
}

/* Styles for small screens (mobile devices) */
@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  #ul {
    display: flex;
    justify-content: space-evenly;
    margin-top: 0;
  }

  .nav-link {
    margin: 5px;
  }

  #zesty {
    margin-bottom: 10px;
  }
}
/* Styles for small screens (mobile devices) */
</style>