<template>
  <div id="app">
    <article class="article-area">
         <h1>Vue 2.6 released</h1>
         <p>Yesterday we just celebrated the 5th Vueniversary..</p>
         <p>In the past year, we spent a lot of time working on the new CLI and prototyping...</p>
         <h2 id="new">Slots: New Syntax, Performance Improvements & Alignment with 3.0</h2>
         <p>Slots is an important mechanism that enables flexible component composition in Vue. During....</p>
         <h3 id="syntax">New Syntax</h3>
         <p>The first step is the new syntax of scoped slots. We proposed, discussed...</p>

        <h2 id="Perform">Performance Improvements</h2>
        <p>Another improvement for slots we would like to see in 3.0 is the unification of......</p>

        <h2 id="error">Async Error Handling</h2>
        <p>Vue’s built-in error handling...</p>
    </article>
    <vue-toc target=".article-area" class="toc" />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}

p {
  text-align: center;
}

.toc {
  width: 300px;
  padding: 0 30px;
}
</style>
