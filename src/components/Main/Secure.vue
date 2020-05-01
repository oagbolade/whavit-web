<template>
  <div>
    <h3>
      Auth is required
    </h3>
  </div>
</template>
<script>
import GeneralTags from "./../../mixins/gtm.js";

/* eslint-disable no-console */
export default {
  name: "secure",
  data() {
    return {};
  },
  created() {
    jQuery($);
  },
  mounted() {
    GeneralTags();
  }
};
</script>
