<script setup lang="ts">
import { tickets } from "../data/tickets";
import Card from "./Card.vue";
const getNextBid = (_: any) => {
  return 0;
};
</script>
<template>
  <div v-for="ticket in tickets" key="ticket.id" class="flex flex-col gap-2">
    <Card :ticket="ticket" />
  </div>
</template>
