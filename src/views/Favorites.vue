<template lang="pug">
	v-container
		v-row
			v-col
				h1.text-center(v-if="! favorites.length") No locations added.
				h2.text-center(v-else) Favorites
				v-card.mx-auto.mt-5
					v-list
						v-list-item-group(color='primary')
							v-list-item(v-for='(item, i) in favorites' :key='i')
								v-list-item-content {{ item.text }}
								v-list-item-content {{ item.text }}
								v-list-item-content {{ item.text }}
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState(['favorites'])
	}
}
</script>