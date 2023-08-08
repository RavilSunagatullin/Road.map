<template>
  <div class="cover">
    <uiLink class="cover-link" :label="$t('back')" to="/base-frontend" />
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
    title: "js.article_1-title",
    haveButton: false,
    description: {
      paragraph_1: "js.paragraph_1",
    },
    id: 1,
  },
  article_2: {
    title: "js.article_2-title",
    haveButton: false,
    description: {
      paragraph_1: "js.paragraph_2",
      paragraph_2: "js.paragraph_2-2",
      paragraph_3: "js.paragraph_2-3",
    },
    id: 2,
  },
  article_3: {
    title: "js.article_3-title",
    haveButton: false,
    description: {
      paragraph_1: "js.paragraph_3",
      paragraph_2: "js.paragraph_3-2",
      paragraph_3: "js.paragraph_3-3",
      paragraph_4: "js.paragraph_3-4",
    },
    id: 3,
  },
  article_4: {
    title: "js.article_4-title",
    haveButton: false,
    description: {
      paragraph_1: "js.paragraph_4",
    },
    id: 4,
  },
  article_5: {
    title: "js.article_5-title",
    haveButton: false,
    description: {
      paragraph_1: "js.paragraph_5",
    },
    id: 5,
  },
  article_6: {
    title: "js.article_6-title",
    haveButton: false,
    description: {
      paragraph_1: "js.paragraph_6",
    },
    id: 6,
  },
  article_7: {
    title: "js.article_7-title",
    haveButton: false,
    description: {
      paragraph_1: "js.paragraph_7",
      paragraph_2: "js.paragraph_7-2",
      paragraph_3: "js.paragraph_7-3",
      paragraph_4: "js.paragraph_7-4",
      paragraph_5: "js.paragraph_7-5",
      paragraph_6: "js.paragraph_7-6",
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
