<template>
  <div id="app">
    <ul class="ui menu">
      <router-link to="/home" active-class="active" class="item">Home</router-link>
      <router-link to="/books" active-class="active" class="item">Bücher</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend();
</script>
