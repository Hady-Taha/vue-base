<script setup>
    import useAuthStore from '../stores/auth';
    const auth = useAuthStore();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <!-- Brand -->
      <router-link class="navbar-brand" to="/">MyApp</router-link>

      <!-- Toggler/collapsible button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">
              <i class="bi bi-person-circle"></i> Profile
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<style scoped>
/* Optional: add custom styles */
.navbar-brand {
  font-weight: bold;
}
</style>
