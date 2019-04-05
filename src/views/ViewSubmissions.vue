 
<template>
  <section>
    <h2>View Submissions</h2> <hr>
    <b-table :data="subData" :striped="true" :mobile-cards="true" detailed paginated per-page="10">
      <template slot-scope="props">
        <b-table-column field="author" label="Author">{{props.row.name}}</b-table-column>

        <b-table-column field="title" label="Title">{{ props.row.title }}</b-table-column>
        <b-table-column field="notes" label="Genre">{{ props.row.genre }}</b-table-column>
        <b-table-column field="url" label="URL">
          <a :href="props.row.url" target="_blank">
            <span class="mdi mdi-link"></span>
          </a>
        </b-table-column>

        <!-- <b-table-column field="email" label="Email">{{ props.row.email }}</b-table-column> -->
        <b-table-column field="editButton" label=" ">
         
          <button
            class="button is-light"
            @click.stop="rateSubmission(props.row.key)"
          >Rate this muhfucka</button>
          <!-- <button @click="alerrrt(props.row.key)">Edit</button> -->
        </b-table-column>
      </template>
       <template slot="detail" slot-scope="props">
<ul>
  <li>General Notes: {{ props.row.notes }} </li>
  <li>Author Letter/Bio: {{props.row.author_letter}}</li>
  <li>Author Email: {{props.row.email}}</li>
  <li>Submission's Genre: {{props.row.genre}}</li>
  <li>Author's Primary Genre: {{props.row.primary_genre}}</li>

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
      ref: firebase.firestore().collection("issue_Two")
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
          primary_genre: doc.data().primary_genre
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
    rateSubmission(id){
      router.push({
        name: "rateSubmission",
        params: {id: id}
      })
    }
  }
};
</script>
 
<style scoped>
button {
  margin: 0 0.25rem;
}
</style>
