<template>
 <div id="app">
 <h1>shop</h1>
 <p>目前還有<b>{{getLength}}</b></p>
 {{lists}}
 <ul>
    <li v-for="(item,idx) in lists" @click="toDone(idx)">{{item}}</li>
 </ul>
<div>
<p>目前的商品</p>
<ul>
<li v-for="id in products" >{{id}}</li>
</ul>
{{getAccount}}
{{getAllmember}}
{{getMoney}}
</div>


 </div>
 

</template>

<script>
import { mapState , mapMutations ,mapGetters,mapActions} from 'vuex';

export default {
  computed:{
    ...mapState({
      lists: state => state.carts.list,
      products:state => state.account.id,
      money:state => state.carts.money,
      data:state => state.carts.data,
    }),
    ...mapGetters(['getLength','getAccount','getAllmember','getMoney'])
    // lists(){
    //   return this.$store.state.carts.list;
    // },
    // getLength(){
    //   return this.$store.getters.getLength;
    // }
  },
  methods:{
    toDone(idx){
      return this.$store.commit('toDone',{idx:idx});
    }
  },
  mounted(){
    this.$store.dispatch('productApi');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
