<script setup lang="ts">
import { ref } from "vue";
import { CheckIcon } from "@heroicons/vue/20/solid";

interface Frequency {
  value: string;
  label: string;
  priceSuffix: string;
}

interface Tier {
  name: string;
  id: string;
  href: string;
  price: { monthly: string; annually: string };
  description: string;
  features: string[];
  mostPopular: boolean;
}

const frequencies: Frequency[] = [
  { value: "monthly", label: "Mensuel", priceSuffix: "/mois" },
];

const tiers: Tier[] = [
  {
    name: "Basique",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "15€", annually: "144€" },
    description: "Idéal pour les freelances",
    features: [
      "Accès à la CVthèque de base",
      "Publication limitée d'offres d'emploi",
      "Messagerie directe avec un nombre limité de talents Free-Work",
      "Gestion des candidatures basique",
      "Dashboards et statistiques standard",
      "Support client par email",
    ],
    mostPopular: false,
  },
  {
    name: "Professionnel",
    id: "tier-startup",
    href: "#",
    price: { monthly: "30€", annually: "288€" },
    description: "Pour les startups et petites entreprises",
    features: [
      "Toutes les fonctionnalités du Plan Basique",
      "Accès illimité à la CVthèque avancée",
      "Publication illimitée d'offres d'emploi",
      "Messagerie directe illimitée avec les talents Free-Work",
      "Fonctionnalités avancées de gestion des candidatures",
      "Dashboards personnalisés et statistiques approfondies",
      "Support client par téléphone et email",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: { monthly: "60€", annually: "576€" },
    description: "Conçu pour les grandes entreprises et les besoins complexes",
    features: [
      "Toutes les fonctionnalités des Plans Basique et Professionnel",
      "Accès exclusif aux profils de talents hautement qualifiés",
      "Outils de branding et de marketing d'emploi avancés",
      "Fonctionnalités de collaboration et de gestion d'équipe",
      "Intégration API pour une connexion ATS",
      "Support client prioritaire et personnalisé",
    ],
    mostPopular: false,
  },
];

const frequency = ref<Frequency>(frequencies[0]);
</script>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <h2 class="text-sm text-turnoverit-blue font-semibold leading-7">
          Tarifs
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Plans d'abonnement
        </p>
      </div>
      <p class="mx-auto mt-6 max-w-7xl text-lg leading-8 text-gray-400">
        Optimisez votre processus de recrutement IT avec nos solutions adaptées
        à vos besoins.
      </p>

      <div
        class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <div
          v-for="tier in tiers"
          :key="tier.id"
          :class="[
            tier.mostPopular
              ? 'ring-2 ring-turnoverit-orange'
              : 'ring-1 ring-gray-200',
            'rounded-3xl p-8 xl:p-10',
          ]"
        >
          <div class="flex items-center justify-between gap-x-4">
            <h3
              :id="tier.id"
              :class="[
                tier.mostPopular ? 'text-turnoverit-orange' : 'text-gray-900',
                'text-lg font-semibold leading-8',
              ]"
            >
              {{ tier.name }}
            </h3>
            <p
              v-if="tier.mostPopular"
              class="rounded-full bg-turnoverit-orange/10 px-2.5 py-1 text-xs font-semibold leading-5 text-turnoverit-orange"
            >
              Populaire
            </p>
          </div>
          <p class="mt-4 text-sm leading-6 text-gray-600">
            {{ tier.description }}
          </p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-bold tracking-tight text-gray-900">{{
              tier.price[frequency.value]
            }}</span>
            <span class="text-sm font-semibold leading-6 text-gray-600">{{
              frequency.priceSuffix
            }}</span>
          </p>
          <a
            :href="tier.href"
            :aria-describedby="tier.id"
            :class="[
              tier.mostPopular
                ? 'bg-turnoverit-orange text-white shadow-sm hover:bg-opacity-70'
                : 'text-turnoverit-orange ring-1 ring-inset ring-[#ffefe5]',
              'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turnoverit-orange',
            ]"
            >Souscrire</a
          >
          <ul
            role="list"
            class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
          >
            <li
              v-for="feature in tier.features"
              :key="feature"
              class="flex gap-x-3"
            >
              <CheckIcon
                class="h-6 w-5 flex-none text-turnoverit-orange"
                aria-hidden="true"
              />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
