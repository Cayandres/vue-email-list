// **Descrizione:**
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// **Bonus**
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const {createApp} = Vue;

createApp({
  data(){
   return{
    title: 'Email list',
    apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
    emails: [],
    limit: 1000
   }
  },
  
  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then( res =>{
        this.emails.push(res.data.response) ;
      } )
    }
  },

  mounted() {
    for (let index = 0; index < this.limit; index++) {
      this.getApi()
    }
  },


}).mount('#app')