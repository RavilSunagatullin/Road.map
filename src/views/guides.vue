<template>
  <div class="wrapper-main">
    <greeting
      title="greetings.guides-greeting"
      description="greetings.guides-greeting-helper"
    />
    <elements
      :title="$t('technologies.dev-dir')"
      :elements="arrayEl[0]"
      position="right"
    />
    <elements :title="$t('technologies.technologies')" :elements="arrayEl[1]" />
  </div>
</template>

<script setup>
import elements from "@/components/molecules/elements.vue";
import greeting from "@/components/molecules/greeting.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

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
    //   to: "/mobile-kotlin",
    // },
    // mobileSwift: {
    //   title: "technologies.swift",
    //   to: "/mobile-swift",
    // },
    // qa: {
    //   title: "technologies.qa",
    //   to: "/qa",
    // },
    // ux: {
    //   title: "technologies.ux",
    //   to: "/ux",
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
    // vue: {
    //   title: "technologies.vue-js",
    //   to: "/vue-js",
    // },
    // laravel: {
    //   title: "technologies.laravel",
    //   to: "/laravel",
    // },
    // kotlin: {
    //   title: "technologies.kotlin",
    //   to: "/kotlin",
    // },
    // swift: {
    //   title: "technologies.swift",
    //   to: "/swift",
    // },
    // react: {
    //   title: "technologies.react",
    //   to: "/react",
    // },
    // angular: {
    //   title: "technologies.angular",
    //   to: "/angular",
    // },
  },
];
</script>

<style lang="sass" scoped></style>
