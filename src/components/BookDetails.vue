<template>
  <div v-if="book">
    <h1>{{book.title}}</h1>
    <h3 v-if="book.subtitle">{{book.subtitle}}</h3>
    <div class="ui divider"></div>
    <div class="ui grid">
      <div class="four wide column">
        <h4>Autoren</h4>
        <span v-for="(author, index) in book.authors" v-bind:key="index">
          {{author}}
          <br />
        </span>
      </div>
      <div class="four wide column">
        <h4>ISBN</h4>
        {{book.isbn}}
      </div>
      <div class="four wide column">
        <h4>Erschienen</h4>
        {{book.published}}
      </div>
      <div class="four wide column">
        <h4>Rating</h4>
        <i class="yellow star icon" v-for="(r, index) in getRating(book.rating)" v-bind:key="index"></i>
      </div>
    </div>
    <h4>Beschreibung</h4>
    <p>{{book.description}}</p>
    <div class="ui small images">
      <img
        v-for="(thumbnail, index) in book.thumbnails"
        v-bind:key="index"
        v-bind:src="thumbnail.url"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Book } from "../api/Book";
import BookStore from "../flux/BookStore";

@Component
export default class BookListItem extends Vue {
  @Prop() isbn!: string;

  get book() {
    return BookStore.getSingle(this.isbn);
  }

  getRating(num: number): number[] {
    return new Array(num);
  }
}
</script>
