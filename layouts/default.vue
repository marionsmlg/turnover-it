<script setup>
import TurnoveritLogo from "../components/TurnoveritLogo.vue";
</script>

<template>
  <header
    class="fixed top-0 z-[100] text-primary transition-all duration-200 h-[74px] flex w-full px-6 bg-white text-primary"
  >
    <nav
      class="container mx-auto w-full flex items-center py-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex">
        <a aria-current="page" href="/" class="-m-1.5 p-1.5 relative z-[120]"
          ><span class="sr-only">Turnover-it</span><TurnoveritLogo
        /></a>
      </div>

      <div class="hidden lg:ml-20 lg:flex lg:gap-x-12">
        <a
          href="#"
          class="text-sm font-medium leading-6 opacity-80 hover:opacity-100"
          >A propos</a
        ><a
          href="#"
          class="text-sm font-medium leading-6 opacity-80 hover:opacity-100"
          >Nouveautés</a
        ><a
          href="#"
          class="text-sm font-medium leading-6 opacity-80 hover:opacity-100"
          >Fonctionnalités</a
        ><a
          href="#"
          class="text-sm font-medium leading-6 opacity-80 hover:opacity-100"
          >Roadmap</a
        >
        <a
          href="/tarifs"
          class="text-sm font-medium leading-6 opacity-80 hover:opacity-100"
          >Tarifs</a
        >
      </div>
    </nav>
  </header>
</template>
