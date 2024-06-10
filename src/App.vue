<template>
  <div id="app">
    <div id="nav">
      <router-link class="nava-link" :to="{ name: 'main' }">Home Page</router-link>
      <router-link class="nava-link" :to="{ name: 'search' }">Search</router-link>
      <span v-if="!$root.store.username">
        Hello Guest:
        <router-link class="nava-link" :to="{ name: 'register' }">Register</router-link>
        <router-link class="nava-link" :to="{ name: 'login' }">Login</router-link>
      </span>
      <span v-else>
        Welcome {{ $root.store.username }}:
        <b-nav-item-dropdown id="my-nav-dropdown" text="Personal" toggle-class="nav-link-custom" right>
          <b-dropdown-item class="dropdown-item-custom">Favorites</b-dropdown-item>
          <b-dropdown-item class="dropdown-item-custom">Private</b-dropdown-item>
          <b-dropdown-item class="dropdown-item-custom">La Familia</b-dropdown-item>
        </b-nav-item-dropdown>
        <button class="logout-button" @click="Logout">Logout</button>
      </span>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>




<script>
export default {
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  display: flex;
  align-items: center;
  background-color: #2c3e50;
  padding: 20px;
  color: white;
  font-family: Arial, sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

.nava-link {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

.nava-link:hover {
  text-decoration: underline;
}

.logout-button {
  background-color: #55629c;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
}

.logout-button:hover {
  background-color: #35427a;
}

#my-nav-dropdown {
  display: inline-block;
}

/* Dropdown menu custom styling */
#my-nav-dropdown .dropdown-menu {
  background-color: #2c3e50 !important;
  border: none !important;
  border-radius: 5px !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2) !important;
}

/* Dropdown item custom styling */
#my-nav-dropdown .dropdown-item-custom {
  color: white !important;
  padding: 10px 20px !important;
}

#my-nav-dropdown .dropdown-item-custom:hover {
  background-color: #1a252f !important;
  color: white !important;
}

#my-nav-dropdown .dropdown-item-custom:hover * {
  background-color: #1a252f !important;
  color: white !important;
}


#nav a.router-link-exact-active {
  color: #42b983;
}

.content {
  padding-top: 95px; 
}
</style>
