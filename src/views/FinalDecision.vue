<template>

    <div>TODO: still need to actually submit the results of the page
        Hi {{this.$route.query.issue}} {{this.$route.params.id}}
        <h3>Accept</h3>
        <div class="field">
            <b-switch v-model="isAccepted"
                true-value="Yes"
                false-value="No">
                {{ isAccepted }}
            </b-switch>
        </div>
        <h3>Reject</h3>
          <div class="field">
            <b-switch v-model="isRejected"
                true-value="Yes"
                false-value="No">
                {{ isRejected }}
            </b-switch>
        </div>
        <h3>Decision Notes</h3>
         <b-field label="Message">
            <b-input maxlength="300" type="textarea"></b-input>
        </b-field>
        <h3>Has the person actually been notified?</h3>
           <b-switch v-model="actuallyNotified"
                true-value="Yes"
                false-value="No">
                {{ actuallyNotified }}
            </b-switch>
            <p>
              
            <button class="button is-primary sendButton" @click="sendUpdate"> <span class="mdi mdi-check"></span>&nbsp; Submit</button>
    <button class="button is-danger " @click=" goActuallyHome"> <span class="mdi mdi-cancel"></span>&nbsp; Cancel</button>
      
            </p></div>
</template>

<script>
import firebase from "../Firebase";
import router from "../router";

export default {
  name: "editSubmission",
  data() {
    return {
 key: this.$route.params.id,
 submission: {},
 isAccepted: "No",
 isRejected: "No",
 actuallyNotified: "No"


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
  },
  methods:{
     sendUpdate(evt) {
 
      evt.preventDefault();

if (this.isAccepted && this.isRejected == "Yes") {
  alert('Cut the fucking shenanigans. A piece cannot be both accpeted and rejected.')
}
else{const updateRef = firebase
        .firestore()
       .collection(`issue_${this.submission.issue}`)
        .doc(this.$route.params.id)
        .set(this.submission, { merge: true });} 
    },
    goActuallyHome() {
      router.push("/");
    },
  }}
    </script>