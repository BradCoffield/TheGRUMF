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


    }},
     created() {
    const ref = firebase
      .firestore()
      .collection(`issue_${this.$route.query.issue}`)
      .doc(this.$route.params.id);

    let theSubmission = ref.get().then(doc => {
      if (doc.exists) {
        this.submission = doc.data();
        console.log(doc.data());
      } else {
        alert("No such document!");
      }
    });
  },}
    </script>