<template>
  <div>
    <ol>
      <li v-for="item in data.movies" :key="item.id">
        <a :href="'/a#' + item.id">/a#{{ item.id }}</a>
      </li>
      <br />
      <li v-for="item in data.movies" :key="item.id">
        <a :href="'http://localhost:3000/a#' + item.id"
          >http://localhost:3000/a#{{ item.id }}</a
        >
      </li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
import { useData } from "vike-vue/useData";
import { onMounted } from "vue";
const data = useData();
onMounted(() => {
  window.addEventListener("hashchange", () => {
    console.log("hashchange");
  });
});
</script>
