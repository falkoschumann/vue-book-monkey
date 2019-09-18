<template>
  <router-link v-bind:to="'/books/' + book.isbn" class="item">
    <img
      class="ui tiny image"
      v-if="book.thumbnails && book.thumbnails[0] && book.thumbnails[0].url"
      v-bind:src="book.thumbnails[0].url"
    />
    <div class="content">
      <div class="header">{{book.title}}</div>
      <div v-if="book.subtitle" class="description">{{book.subtitle}}</div>
      <div class="metadata">
        <span v-for="(author, index) in book.authors" v-bind:key="index">
          {{author}}<span v-if="index !== book.authors.length - 1">,</span>
        </span>
        <br />
        ISBN {{book.isbn}}
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';

import { Book } from '../api/Book';

export default Vue.extend({
  props: {
    book: Object as () => Book,
  },
});
</script>
