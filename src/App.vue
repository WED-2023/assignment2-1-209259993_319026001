<template>
  <div id="app">
    <div id="nav">
      <router-link class="nava-link" :to="{ name: 'main' }">Home</router-link>
      <router-link class="nava-link" :to="{ name: 'search' }">Search</router-link>
      <span v-if="!$root.store.username">
        <div class="right-align-not-reg">
        Hello Guest:
        <router-link class="nava-link" :to="{ name: 'register' }">Register</router-link>
        <router-link class="nava-link" :to="{ name: 'login' }">Login</router-link>
      </div>
      </span>
      <span v-else>
        <div class="right-align">
        Welcome {{ $root.store.username }}:
        <b-nav-item-dropdown id="my-nav-dropdown" text="Personal" toggle-class="nav-link-custom" right>
        <router-link to="/favorites" tag="b-dropdown-item" class="dropdown-item-custom">Favorites</router-link>
        <router-link to="/my-recipes" tag="b-dropdown-item" class="dropdown-item-custom">My Recipes</router-link>
        <router-link to="/family-recipes" tag="b-dropdown-item" class="dropdown-item-custom">Family Recipes</router-link>
        </b-nav-item-dropdown>
        <button class="new-recipe-button" @click="showModal">New Recipe</button>
        <button class="logout-button" @click="Logout">Logout</button>
      </div>
      </span>
    </div>
    <div class="content">
      <transition name="modal-fade">
        <div v-if="isModalVisible" class="recipe-modal">
        <NewRecipeModal :close="closeModal" />
        </div>
      </transition>
      <router-view v-if="!isModalVisible" />
    </div>
  </div>
</template>




<script>
import NewRecipeModal from './components/NewRecipeModal.vue';
export default {
  name: "App",
  components: {
    NewRecipeModal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      // clear local storage
      localStorage.clear();

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    showModal() {
      this.isModalVisible = true;
      console.log("modal opened")
    },
    closeModal() {
      this.isModalVisible = false;
      console.log("modal closed")
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

/* nav bar and nav links design */
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

#nav a.router-link-exact-active {
  color: #9abde0;
}

.nava-link {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

.nava-link:hover {
  text-decoration: underline;
}

/* button for adding new recipe */
.new-recipe-button {
  color: white;
  font-weight: bold;
  background-color: #2c3e50;
  border: none;
}

.new-recipe-button:hover {
  text-decoration: underline;
}

/* logout button design */
.logout-button {
  background-color: #55629c;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
  border: 1px solid hsl(247, 51%, 10%);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.logout-button:hover {
  background-color: hsl(229, 39%, 34%);
}

/* placing register/login section on the right side of page */
.right-align, .right-align-not-reg {
  right: 10px;
  position: absolute;
}

.right-align {
  top: 12px;
}

.right-align-not-reg {
  top: 20px;
}

/* Dropdown menu of registered user styling */
#my-nav-dropdown {
  display: inline-block;
}

#my-nav-dropdown .dropdown-menu {
  background-color: #2c3e50 !important;
  border: none !important;
  border-radius: 5px !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2) !important;
}

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

/* padding content so top of page won't be covered by nav bar */
.content {
  padding-top: 80px; 
}

/* For Webkit (Chrome &Safari) */
::-webkit-scrollbar {
  width: 12px; /* width of the scrollbar */
}

::-webkit-scrollbar-track {
  background: #ffffff; /* color of the track */
}

::-webkit-scrollbar-thumb {
  background: #182736; /* color of the scrollbar thumb */
  border-radius: 6px; /* roundness of the scrollbar thumb */
}

::-webkit-scrollbar-thumb:hover {
  background: #2c3e50; /* color of the scrollbar thumb on hover */
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter, .modal-fade-leave-to /* .modal-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
} 

.recipe-modal {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.modal-close-button {
  margin-top: 10px;
}
</style>
