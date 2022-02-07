<template>
  <div class="main-page">
    main-page-public

    <SimpleComponent />
  </div>
</template>

<script>
import SimpleComponent from "@app/system-design/components/simple-test.vue";
export default {
  name: "main-page-public",
  components: {
    SimpleComponent,
  },
};
</script>