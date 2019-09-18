<template>
  <div class="ui middle aligned selection divided list">
    <BookListItem v-for="book in books" v-bind:key="book.isbn" v-bind:book="book" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import BookListItem from './BookListItem.vue';
import BookStore from '../flux/BookStore';
import { Book } from '../api/Book';

export default Vue.extend({
  data() {
    return {
      books: [] as Book[],
    };
  },
  mounted() {
    this.books = BookStore.getAll();
  },
  components: {
    BookListItem,
  },
});
</script>
