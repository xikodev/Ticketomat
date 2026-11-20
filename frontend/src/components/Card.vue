<script setup lang="ts">
type Venue = {
  name: string;
  city: string;
  country: string;
};

type Pricing = {
  currency: string;
  faceValue: number;
  buyNowPrice: number | null;
  currentBid: number;
  minBidIncrement: number;
};

type Seats = {
  section: string;
  quantity: number;
};

type Ticket = {
  id: string;
  lotNumber: string;
  artist: string;
  eventTitle: string;
  category: string;
  auctionEndsAt: string;
  bidCount: number;
  venue: Venue;
  pricing: Pricing;
  seats: Seats;
};

const props = defineProps<{
  ticket: Ticket;
}>();
const nextBid =
  props.ticket.pricing.currentBid + props.ticket.pricing.minBidIncrement;
const betterOfferPercentage = Math.round(
  (1 - nextBid / props.ticket.pricing.faceValue) * 100,
);
const betterOfferString = betterOfferPercentage + "% Bellow Face";
</script>
<template>
  <div class="w-full h-60 bg-white border-custom flex">
    <div class="text-sm m-2 grow p-3 flex flex-col gap-6">
      <div
        class="grid grid-cols-[auto_auto_1fr] grow gap-2 w-full text-xs font-semibold items-center"
      >
        <span
          class="bg-blue-200 p-1 rounded border-2 border-black text-indigo-900"
          >{{ ticket.category }}</span
        >
        <span>Lot {{ ticket.lotNumber }}</span>
        <span
          v-if="nextBid < ticket.pricing.faceValue"
          class="justify-self-end bg-green-200 p-1 rounded border-2 border-black text-green-900"
        >
          {{ betterOfferPercentage ? betterOfferString : "" }}
        </span>
      </div>
      <div>
        <h3 class="text-2xl font-bold">{{ ticket.artist }}</h3>
        <h4 class="text-md font-thin">{{ ticket.eventTitle }}</h4>
      </div>
      <div
        class="bg-amber-50 h-30 w-full rounded-xl border-2 grid grid-cols-3 p-3"
      >
        <span className="text-xs">Venue & City</span>
        <span className="text-xs">Data & Showtime</span>
        <span className="text-xs">Seats</span>
        <span className="font-bold"
          >{{ ticket.venue.name }} · {{ ticket.venue.city }}</span
        >
        <span className="font-bold">Fri, Dec 04 | 21:30</span>
        <span className="font-bold"
          >{{ ticket.seats.section }} ·
          {{ ticket.seats.quantity }}
          {{ ticket.seats.quantity > 1 ? "tickets" : "ticket" }}</span
        >
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
      <div class="mt-5 font-semibold text-sm">
        Current bid
        {{
          ticket.bidCount
            ? "(" +
              ticket.bidCount +
              (ticket.bidCount > 1 ? "bids" : "bid") +
              ")"
            : ""
        }}
      </div>
      <div class="text-5xl">${{ nextBid }}</div>
      <div class="text-sm font-thin">
        Buy ${{ ticket.pricing.buyNowPrice }} · Face ${{
          ticket.pricing.faceValue
        }}
      </div>
      <button class="mt-2 w-full bg-primary text-white btn-custom">
        Bid ${{ nextBid }}
      </button>
    </div>
  </div>
</template>
