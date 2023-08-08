<template>
  <div class="wrapper-main">
    <greeting title="road" description="slogan" />
    <elements :title="$t('technologies.dev-dir')" :elements="arrayEl[0]" />
    <elements
      :title="'technologies.technologies'"
      :elements="arrayEl[1]"
      position="right"
    />
    <elements :title="$t('articles')" :elements="arrayEl[2]" one_column />
  </div>
</template>

<script setup>
import greeting from "@/components/molecules/greeting.vue"
import elements from "@/components/molecules/elements.vue";

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({ useScope: "global" });

import { useStore } from "@/store/store";
const store = useStore();

const arrayEl = [
  {
    frontend: {
      title: "technologies.frontend",
      to: "/frontend",
    },
    // backend: {
    //   title: "technologies.backend",
    //   to: "/backend",
    // },
    // mobileAndroid: {
    //   title: "technologies.kotlin",
    //   to: "/kotlin",
    // },
    // mobileSwift: {
    //   title: "technologies.swift",
    //   to: "/swift",
    // },
  },
  {
    Html: {
      title: "technologies.html",
      to: "/vue-js",
    },
    js: {
      title: "technologies.js",
      to: "/js",
    },
    Css: {
      title: "technologies.css",
      to: "/css",
    },
    // laravel: {
    //   title: "technologies.laravel",
    //   to: "/laravel",
    // },
  },
  {
    article_1: {
      title: "articles-titles.about",
      to: "/about",
    },
    // article_2: {
    //   title: "what-is-mobile-develop",
    //   to: "/What is Mobile develop ?",
    // },
    // article_3: {
    //   title: "which-backend-framework-is-best",
    //   to: "/Which Backend framework is best?",
    // },
    // article_4: {
    //   title: "what-dev-ops-developer-doing",
    //   to: "/What Dev ops developer doing ?",
    // },
  },
];
</script>

<style lang="sass" scoped></style>
