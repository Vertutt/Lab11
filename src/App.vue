<script setup></script>

<template>
  <nav>
    <RouterLink to="/">Первая страница</RouterLink>
    <RouterLink to="/Second">Вторая страница</RouterLink>
    <RouterLink to="/Third">Третья страница</RouterLink>
  </nav>
  <br>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
  nav{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;;
    background-color: aqua;
    border-radius: 50px;
    margin-bottom: 40px;
    gap: 20px;
    min-height: 40px;
  }

</style>

