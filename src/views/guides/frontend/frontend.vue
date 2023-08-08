<template>
  <div class="cover">
    <uiLink class="cover-link" :label="$t('back')" to="/main" />
    <uiTab :data="data" />
  </div>
</template>

<script setup>
import uiTab from "@/components/Organisms/uiTab.vue";
import uiLink from "@/components/atoms/uiLink.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

const data = {
  article_1: {
    title: "frontend-page.article_1-title",
    haveButton: false,
    description: {
      paragraph_1: "frontend-page.paragraph_1-1",
      paragraph_2: "frontend-page.paragraph_1-2",
    },
    id: 1,
  },
  article_2: {
    title: "frontend-page.article_2-title",
    haveButton: true,
    label: "frontend-page.article_2-label",
    to: "/base-frontend",
    description: {
      paragraph_1: "frontend-page.paragraph_2-1",
      paragraph_2: "frontend-page.paragraph_2-2",
      paragraph_3: "frontend-page.paragraph_2-3",
    },
    id: 2,
  },
  article_3: {
    title: "frontend-page.article_3-title",
    // haveButton: true,
    // label: "frontend-page.article_3-label",
    // to: "/git",
    description: {
      paragraph_1: "frontend-page.paragraph_3-1",
      paragraph_2: "frontend-page.paragraph_3-2",
      paragraph_3: "frontend-page.paragraph_3-3",
    },
    id: 3,
  },
  article_4: {
    title: "frontend-page.article_4-title",
    // haveButton: true,
    // label: "frontend-page.article_4-label",
    // to: "/framewroks",
    description: {
      paragraph_1: "frontend-page.paragraph_4-1",
      paragraph_2: "frontend-page.paragraph_4-2",
      paragraph_3: "frontend-page.paragraph_4-3",
    },
    id: 4,
  },
  article_5: {
    title: "frontend-page.article_5-title",
    // haveButton: true,
    // label: "frontend-page.article_5-label",
    // to: "/other-tools",
    description: {
      paragraph_1: "frontend-page.paragraph_5-1",
      paragraph_2: "frontend-page.paragraph_5-2",
      paragraph_3: "frontend-page.paragraph_5-3",
      paragraph_4: "frontend-page.paragraph_5-4",
    },
    id: 5,
  },
  article_6: {
    title: "frontend-page.article_6-title",
    // haveButton: true,
    // label: "frontend-page.article_6-label",
    // to: "/tests",
    description: {
      paragraph_1: "frontend-page.paragraph_6-1",
      paragraph_2: "frontend-page.paragraph_6-2",
    },
    id: 6,
  },
  article_7: {
    title: "frontend-page.article_7-title",
    // haveButton: true,
    // label: "frontend-page.article_7-label",
    // to: "/froms web",
    description: {
      paragraph_1: "frontend-page.paragraph_7-1",
      paragraph_2: "frontend-page.paragraph_7-2",
      paragraph_3: "frontend-page.paragraph_7-3",
      paragraph_4: "frontend-page.paragraph_7-4",
    },
    id: 7,
  },
};
</script>

<style lang="sass" scoped>
.cover
  margin-top:30px
  &-link
    margin-left: 30px
</style>
