<template>
    <div>
        Hi {{this.$route.query.issue}} {{this.$route.params.id}}
    </div>
</template>

<script>
import firebase from "../Firebase";
import router from "../router";

export default {
  name: "editSubmission",
  data() {
    return {
 key: this.$route.params.id,


    }}}
    </script>