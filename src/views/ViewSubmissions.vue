 
<template>
  <section>
    <h2 >View Submissions</h2>
    <hr>
    <b-table :data="subData" :striped="true" :mobile-cards="true" detailed paginated per-page="30">
      <template slot-scope="props">
       
        <b-table-column field="author" label="Author">{{props.row.name}}</b-table-column>

        <b-table-column field="title" label="Title">{{ props.row.title }}</b-table-column>
        <b-table-column field="notes" label="Genre">{{ props.row.genre }}</b-table-column>
        <b-table-column field="reviewers" label="Reviewers">
          <ul class="reviewers-list">
             <li class="reviewers-initials">BC</li> 
            <li class="reviewers-initials">AK</li>
            <li class="reviewers-initials">MD</li>
          </ul>
        </b-table-column>
        <!-- <b-table-column field="url" label="URL">
          <a :href="props.row.url" target="_blank">
            <span class="mdi mdi-link"></span>
          </a>
        </b-table-column>-->

        <!-- <b-table-column field="email" label="Email">{{ props.row.email }}</b-table-column> -->
        <b-table-column field="editButton" label=" ">
          <button class="button is-light" @click.stop="rateSubmission(props.row.key)">Rate</button>
          <!-- <button @click="alerrrt(props.row.key)">Edit</button> -->
        </b-table-column>
      </template>
      <template slot="detail" slot-scope="props">
        <ul>
          <li>
            <a :href="props.row.url">Link to the piece</a>
          </li>
          <li>General Notes: {{ props.row.notes }}</li>

          <li>Author Email: {{props.row.email}}</li>
          <li>Submission's Genre: {{props.row.genre}}</li>
          <li>Author's Primary Genre: {{props.row.primary_genre}}</li>
          <li>Author Letter/Bio: {{props.row.author_letter}}</li>

          <button class="button is-outlined" @click="editSubmission(props.row.key)">
            <span class="mdi mdi-square-edit-outline"></span>Edit Submission Details
          </button>
        </ul>
      </template>
    </b-table>
  </section>
</template>

<script>
import firebase from "../Firebase";
import router from "../router";

export default {
  data() {
    return {
      data: [],
      subData: [],
      ref: firebase.firestore().collection("issue_Two"),
    };
  },
  created() {
    this.ref.onSnapshot(querySnapshot => {
      this.subData = [];
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        this.subData.push({
          key: doc.id,
          name: doc.data().author,
          url: doc.data().file,
          title: doc.data().title,
          email: doc.data().email,
          notes: doc.data().notes,
          author_letter: doc.data().author_letter,
          genre: doc.data().genre,
          primary_genre: doc.data().primary_genre,
          ratings: doc.data().ratings
        });
      });
    });
  },
  methods: {
    editSubmission(id) {
      router.push({
        name: "editSubmission",
        params: { id: id }
      });
    },
    rateSubmission(id) {
      router.push({
        name: "rateSubmission",
        params: { id: id }
      });
    }
  }
};
</script>
 
<style scoped>
button {
  margin: 0 0.25rem;
}
.reviewers-initials{
  border: 1px solid #333;
  border-radius: 50%;
  padding: 3px;
  margin-right:3px;
  font-size: 12px;
}
.reviewers-list li {
  display: inline;
}
.getLit{
  background-color: antiquewhite;
}
</style>
