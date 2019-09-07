<template>
  <div class="ui middle aligned selection divided list">
    <BookListItem
      v-for="book in books"
      v-bind:key="book.isbn"
      v-bind:book="book"
      v-on:showDetailsEvent="showDetails($event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Book } from '../api/Book';
import BookStore from '../flux/BookStore';
import BookListItem from './BookListItem.vue';

@Component({
  components: {
    BookListItem,
  }
})
export default class BookList extends Vue {
  books: Book[];

  constructor() {
    super();
    this.books = BookStore.getAll();
  }

  showDetails(book: Book) {
    this.$emit('showDetailsEvent', book);
  }
}
</script>
