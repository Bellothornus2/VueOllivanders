import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListItems from '../components/ListItems.vue'
import GetItem from '../components/GetItem.vue'
import PostItem from '../components/PostItem.vue'
import PutItem from '../components/PutItem.vue'
import DeleteItem from '../components/DeleteItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/getAll',
    name: 'list_items',
    component: ListItems
  },
  {
    path: '/getItem',
    name: 'get_item',
    component: GetItem
  },
  {
    path: '/postItem',
    name: 'post_item',
    component: PostItem
  },
  {
    path: '/putItem/:id',
    name: 'put_item',
    component: PutItem
  },
  {
    path: '/deleteItem',
    name: 'delete_item',
    component: DeleteItem
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
