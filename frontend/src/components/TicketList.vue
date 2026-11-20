<script setup lang="ts">
import { tickets } from "../data/tickets";
import Ticket from "./Ticket.vue";
</script>
<template>
  <div v-for="ticket in tickets" key="ticket.id" class="flex flex-col gap-2">
    <Ticket :ticket="ticket" />
  </div>
</template>
