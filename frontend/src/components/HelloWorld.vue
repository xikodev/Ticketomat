<script setup lang="ts">
import Header from "./Header.vue";
import Card from "./Card.vue";
</script>
<template>
  <div class="bg-amber-50 flex flex-col min-h-screen pb-10">
    <Header />
    <main class="grow flex flex-col gap-5 mx-50 mt-10">
      <div class="w-full h-90 bg-white border-custom flex">
        <div class="grow grid p-10 h-full items-center">
          <div class="flex gap-2">
            <span
              class="text-sm text-white font-semibold border border-black py-1 px-2 bg-primary rounded-md -rotate-3"
              >Arena Show</span
            >
            <span>London 2026 | 2 Seated Passes</span>
          </div>
          <h1 class="font-bold text-5xl">
            Real concert tickets.<br />Honest fan prices.
          </h1>
          <div>
            <span class="font-bold"
              >Radiohead — 25th Anniversary World Tour</span
            >
            <br />
            <span
              >The O2 Arena, London · Sat, Nov 28 · Sec 102, Row D (2
              Passes)</span
            >
          </div>
          <div class="flex gap-2">
            <button class="btn-custom bg-black text-white">
              View Active Tickets
            </button>
            <button class="btn-custom">Get Best Offers</button>
          </div>
        </div>
        <div
          class="bg-amber-50 rounded-lg w-80 border-l-2 rounded-l-none border-dashed py-10 px-6 font-semibold"
        >
          <div class="text-sm w-full flex justify-between">
            <span>Lot TK-4092</span>
            <span>34 bids</span>
          </div>
          <div class="flex flex-col py-4">
            <span class="py-1 text-sm font-ligth">Current Bid</span>
            <span class="text-6xl">$185</span>
            <span class="py-1 text-sm text-green-700">
              $260 Face Value · Save 29%
            </span>
          </div>
          <div
            class="text-xs text-center rounded-sm border-2 border-black bg-amber-100 text-orange-700 p-2 center self-center"
          >
            Ends in 42m 19s
          </div>
          <button class="btn-custom mt-4 w-full bg-primary text-white">
            Place Bid $195
          </button>
        </div>
      </div>
      <h2 class="text-3xl font-bold mt-4">Available Tickets:</h2>
      <Card />
    </main>
  </div>
</template>
