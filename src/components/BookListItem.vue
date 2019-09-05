<template>
  <div class="item">
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Book } from "../api/book";

@Component
export default class BookListItem extends Vue {
  @Prop() book!: Book;
}
</script>
