<template>
  <div class="home">
    <h1>Home</h1>
    <p>Das ist der BookMonkey</p>
    <router-link to="/books" class="ui red button">
      Buchliste ansehen
      <i class="right arrow icon"></i>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
