<template>
  <div id="app">
    <header>
      <nav id="top-nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/MyStatsView">My Stats</router-link>
      </nav>
    </header>
    <div id="container">
      <nav id="sidebar" class="sidebar">
        <h3>Calculation Menu</h3>
        <ul>
          <li><router-link to="/offense">Offense</router-link></li>
          <li><router-link to="/defense">Defense</router-link></li>
        </ul>
      </nav>
      <main id="main-content">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
/* General app styling */
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}

/* Top navigation styling */
header {
  background-color: #f4f4f4;
  border-bottom: solid black 1px;
}

#top-nav {
  text-align: center;
  padding: 5px;
  position: fixed; /* Ensure it stays at the top */
  width: 100%; /* Make sure it spans the full width */
  top: 0; /* Align to the top */
  left: 0;
  background-color: #f4f4f4; /* Background to match the border */
  z-index: 1000; /* Ensure it's on top of other content */
}

#top-nav a {
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 10px;
  color: #333;
}

/* Container for sidebar and main content */
#container {
  display: flex;
  flex: 1;
  margin-top: 15px; /* Adjust this based on the height of the header */
}

/* Sidebar styling */
#sidebar {
  width: 200px;
  background-color: #f9f9f9;
  border-right: solid black 1px;
  border-left: solid black 1px; /* Adjusted border to ensure visibility */
  padding: 10px;
  box-sizing: border-box;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar li a {
  text-transform: uppercase;
  text-decoration: none;
  color: #333;
}

/* Main content styling */
#main-content {
  flex: 1;
  padding: 20px;
}
</style>