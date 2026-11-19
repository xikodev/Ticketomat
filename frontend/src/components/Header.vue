<template>
  <header
    class="min-h-20 items-center border-b-2 bg-white px-50 grid grid-cols-6"
  >
    <div
      class="col-span-1 flex gap-5 justify-self-start items-center text-xl font-bold grid-cols-6 w-200"
    >
      <div
        class="bg-primary border-2 border-black px-2 py-1 rounded-md text-white text-lg"
      >
        TM
      </div>
      Ticketomat ®
    </div>
    <div
      class="col-span-4 justify-self-center flex gap-5 text-gray-700 font-semibold"
    >
      <a href="/tickets" class="hover:underline">All Tickets</a>
      <a href="/credibility" class="hover:underline">Credibility Formula</a>
      <a href="/security" class="hover:underline">Secuirty Measures</a>
    </div>
    <button
      class="col-span-1 justify-self-end py-3 px-5 bg-primary text-white font-bold rounded-md text-sm border-2 border-black shadow-black shadow-[3px_3px_0px] hover:cursor-pointer hover:-translate-0.5 hover:shadow-[4px_4px_0px] transition-all duration-75"
    >
      Sign In
    </button>
  </header>
</template>
