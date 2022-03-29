<template>
	<div id="mantenimientos">
		<GetItem/>
		<PostItem/>
		<PutItem/>
		<DeleteItem/>
		<FavoriteItem/>
	</div>
</template>

<script>
import GetItem from '@/components/GetItem.vue'
import PostItem from '@/components/PostItem.vue'
import PutItem from '@/components/PutItem.vue'
import DeleteItem from '@/components/DeleteItem.vue'
import FavoriteItem from '@/components/FavoriteItem.vue'
export default {
	components: { 
		GetItem,
		PostItem,
		PutItem,
		DeleteItem,
		FavoriteItem,
	},
	name:'MaintenanceItem',
}
</script>