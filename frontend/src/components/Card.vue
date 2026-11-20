<script setup lang="ts"></script>
<template>
  <div class="w-full h-60 bg-white border-custom flex">
    <div class="text-sm m-2 grow p-3 flex flex-col gap-6">
      <div
        class="grid grid-cols-[auto_auto_1fr] grow gap-2 w-full text-xs font-semibold items-center"
      >
        <span
          class="bg-blue-200 p-1 rounded border-2 border-black text-indigo-900"
          >ARENA TOUR</span
        >
        <span>Lot TK-4092</span>
        <span
          class="justify-self-end bg-green-200 p-1 rounded border-2 border-black text-green-900"
        >
          29% Bellow Face</span
        >
      </div>
      <div>
        <h3 class="text-2xl font-bold">Radiohead</h3>
        <h4 class="text-md font-thin">25th Aniversery World Tour</h4>
      </div>
      <div
        class="bg-amber-50 h-30 w-full rounded-xl border-2 grid grid-cols-3 p-3"
      >
        <span className="text-xs">Venue & City</span>
        <span className="text-xs">Data & Showtime</span>
        <span className="text-xs">Seats</span>
        <span className="font-bold">The O2 Arena | London</span>
        <span className="font-bold">Fri, Dec 04 | 21:30</span>
        <span className="font-bold"> Floor Standing GA · 2 Tickets </span>
      </div>
    </div>
    <div
      class="bg-amber-50 rounded-lg w-70 border-l-2 rounded-l-none border-dashed p-4 font-semibold"
    >
      <div
        class="w-full p-2 border-2 border-black rounded-xl bg-primary text-sm text-white"
      >
        ⏱ 00:42:19
      </div>
      <div class="mt-5 font-semibold text-sm">Current bid(47 bids)</div>
      <div class="text-5xl">$128</div>
      <div class="text-sm font-thin">Buy $195 · Face $175</div>
      <button class="mt-2 w-full bg-primary text-white btn-custom">
        Bid $138
      </button>
    </div>
  </div>
</template>
