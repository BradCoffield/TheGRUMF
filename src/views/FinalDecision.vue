<template>
  <div>
    <h2>
      Judgement time for:
      <span class="italics">{{submission.title}}</span>
    </h2>
    <h3>Accept</h3>
    <div class="field">
      <b-switch v-model="isAccepted" true-value="Yes" false-value="No">{{ isAccepted }}</b-switch>
    </div>
    <h3>Reject</h3>
    <div class="field">
      <b-switch v-model="isRejected" true-value="Yes" false-value="No">{{ isRejected }}</b-switch>
    </div>
    <h3>Decision Notes</h3>
    <b-field label="Message">
      <b-input maxlength="300" type="textarea" v-model="decisionNotes"></b-input>
    </b-field>
    <h3>Has the person actually been notified?</h3>
    <b-switch v-model="actuallyNotified" true-value="Yes" false-value="No">{{ actuallyNotified }}</b-switch>
    <p class="buttons">
      <button class="button is-primary" @click="sendDecision">
        <span class="mdi mdi-check"></span>&nbsp; Submit
      </button>
      <button class="button is-danger" @click=" goActuallyHome">
        <span class="mdi mdi-cancel"></span>&nbsp; Cancel
      </button>
    </p>
  </div>
</template>

<script>
import firebase from "../Firebase";
import router from "../router";

export default {
  name: "finalDecision",
  data() {
    return {
      key: this.$route.params.id,
      submission: {},
      isAccepted: "No",
      isRejected: "No",
      actuallyNotified: "No",
      decisionNotes: " "
    };
  },
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
  methods: {
    sendDecision(evt) {
      evt.preventDefault();

      if (this.isAccepted === "Yes") {
        this.submission.decision = "Accepted";
      }
      if (this.isRejected === "Yes") {
        this.submission.decision = "Rejected";
      }
      this.submission.actuallyNotified = this.actuallyNotified;
      this.submission.decisionNotes = this.decisionNotes;

      const updateRef = firebase
        .firestore()
        .collection(`issue_${this.submission.issue}`)
        .doc(this.$route.params.id)
        .set(this.submission, { merge: true });
    },
    goActuallyHome() {
      router.push("/");
    }
  }
};
</script>

    <style>
.italics {
  font-style: italic;
}
.buttons {
  margin: 3rem 0rem 0px 0rem;
}
</style>
    