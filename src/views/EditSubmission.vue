<template>
  
  <div id="addSubmission">
    <h1>Add details here regarding a potentially bullocks submisison.</h1>

    <section id="addSubmissionForm">
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Author</label>
            <div class="control">
              <input class="input" type="text" placeholder v-model="submission.author">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Author Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="Text input"
                v-model="submission.email"
              >
            </div>
          </div>
        </div>
      </div>
         <div class="field">
            <label class="label">Title of Submission</label>
            <div class="control">
              <input class="input" type="text" v-model="submission.title">
            </div>
          </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Link to file in Google Drive</label>
            <div class="control">
              <input class="input" type="text" v-model="submission.file">
            </div>
          </div>
        </div>
        <div class="column is-one-fifth">
          <div class="field">
            <label class="label">For Issue</label>
            <div class="select">
              <select v-model="submission.issue">
                <option></option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option>
                <option>Five</option>
                <option>Six</option>
                <option>Seven</option>
                <option>Eight</option>
                <option>Nine</option>
                <option>Ten</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Notes for consideration</label>
        <div class="control">
          <textarea class="textarea" placeholder="Optional" v-model="submission.notes"></textarea>
        </div>
      </div>
    </section>
     <button class="button is-primary sendButton" @click="sendUpdate"> <span class="mdi mdi-check"></span>&nbsp; Submit</button>
  <button class="button is-danger " @click="goHome"> <span class="mdi mdi-cancel"></span>&nbsp; Cancel</button>
 
  </div>
 

</template>

<script>
import firebase from "../Firebase";
import router from "../router";

export default {
  name: "editDatabase",
  data() {
    return {
      key: this.$route.params.id,
      submission: {},
       
    };
  },
  created() {
    const ref = firebase
      .firestore()
      .collection("issue_Two") 
      .doc(this.$route.params.id);

    

    let theSubmission = ref.get().then(doc => {
      if (doc.exists) {
     
        this.submission = doc.data();
        console.log(this.submission);
        console.log(this.$route.params.id);
      } else {
        alert("No such document!");
      }
    });

    

  },

  methods: {
    sendUpdate(evt) {
 
      evt.preventDefault();
      const updateRef = firebase
        .firestore()
       .collection(`issue_${this.submission.issue}`)
        .doc(this.$route.params.id)
        .set(this.submission, { merge: true });
      // updateRef();
    },
    goActuallyHome() {
      router.push("/");
    },
   
    
  },
  
};
</script>
<style scoped>
button {
 margin: 1rem .5rem;
}
</style>
