<template>
  <div>Page A</div>
  <a href="/b">jump to B</a>
</template>

<script lang="ts" setup>
import { usePageContext } from "vike-vue/usePageContext";
usePageContext().testFlag = "test A";
</script>
