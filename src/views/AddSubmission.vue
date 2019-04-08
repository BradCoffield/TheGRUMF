<template>
  
  <div id="addSubmission">
    <h1>Add details here regarding a potentially bullocks submisison.</h1> <hr>

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
                placeholder=""
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
        
              <div class="field">
                <label  class="label">Genre of Submission</label>
                  <div class="control">
              <input class="input" type="text" v-model="submission.genre">
            </div>
              </div>
              <div class="field">
                <label  class="label">Author's Primary Genre</label>
                  <div class="control">
              <input class="input" type="text" v-model="submission.primary_genre">
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
        <label class="label">Author Letter</label>
        <div class="control">
          <textarea class="textarea" placeholder="Optional" v-model="submission.author_letter"></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Notes for consideration</label>
        <div class="control">
          <textarea class="textarea" placeholder="Optional" v-model="submission.notes"></textarea>
        </div>
      </div>
    </section>
    <button class="button is-primary sendButton" @click="sendSub"><span class="mdi mdi-check"></span>&nbsp; Submit</button>
  <button class="button is-light sendButton " @click="goActuallyHome"><span class="mdi mdi-cancel"></span>&nbsp; Cancel</button>
  </div>
  
  <!-- <div id="show-inputs">
    {{submission.author}}
    {{submission.email}}
    {{submission.file}}
    {{submission.issue}}
    {{submission.notes}}
  </div> -->

</template>

<script>
import firebase from "../Firebase";
import router from "../router";
export default {
  name: "addSubmission",
  data() {
    return {
      submission: {
        author: "",
        email: "",
        file: "",
        issue: "Three",
        notes: "",
        title: "",
        author_letter: "",
        genre: "",
        primary_genre: "",
        ratings: {}
      }
    };
  },
  methods: {
    sendSub(evt) {
      evt.preventDefault();
      const updateRef = firebase
        .firestore()
        .collection(`issue_${this.submission.issue}`)
        .add(this.submission)
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      // updateRef();
    },
     goActuallyHome() {
      router.push("/");
    },
  }
};
</script>
 
 <style>
 .sendButton{
   margin: 1rem .25rem
 }
 </style>
 