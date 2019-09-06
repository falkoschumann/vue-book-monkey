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
import { Component, Prop, Vue } from "vue-property-decorator";

import { Book } from "../api/book";
import BookListItem from "./BookListItem.vue";

@Component({
  components: {
    BookListItem
  }
})
export default class BookList extends Vue {
  books: Book[] = [
    {
      isbn: "9783864906466",
      title: "Angular",
      authors: ["Ferdinand Malcher", "Johannes Hoppe", "Danny Koppenhagen"],
      published: new Date(2019, 4, 30),
      subtitle:
        "Grundlagen, fortgeschrittene Themen und Best Practices - mit NativeScript und NgRx",
      rating: 5,
      thumbnails: [
        {
          url: "https://ng-buch.de/buch1.jpg",
          title: "Buchcover"
        }
      ],
      description:
        "Die Autoren führen Sie mit einem anspruchsvollen Beispielprojekt durch die Welt von Angular..."
    },
    {
      isbn: "9783864903274",
      title: "React",
      authors: ["Oliver Zeigermann", "Nils Hartmann"],
      published: new Date(2016, 6, 17),
      subtitle: "Die praktische Einführung in React, React Router und Redux",
      rating: 3,
      thumbnails: [
        {
          url: "https://ng-buch.de/buch2.jpg",
          title: "Buchcover"
        }
      ],
      description:
        "React ist ein JavaScript-Framework zur Entwicklung von Benutzeroberflächen..."
    }
  ];

  showDetails(book: Book) {
    this.$emit("showDetailsEvent", book);
  }
}
</script>
