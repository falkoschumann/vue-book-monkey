<template>
  <div id="app">
    <BookList v-if="viewState === 'list'" v-on:showDetailsEvent="showDetails($event)" />
    <BookDetails v-if="viewState === 'details'" v-bind:book="book" v-on:showListEvent="showList()" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Book } from './api/Book';
import BookList from './components/BookList.vue';
import BookDetails from './components/BookDetails.vue';

type ViewState = 'list' | 'details';

@Component({
  components: {
    BookList,
    BookDetails,
  }
})
export default class App extends Vue {
  book?: Book;
  viewState: ViewState = 'list';

  showList() {
    this.viewState = 'list';
  }

  showDetails(book: Book) {
    this.book = book;
    this.viewState = 'details';
  }
}
</script>
