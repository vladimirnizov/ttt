<template lang="pug">
	v-card.mx-auto.mt-5(width='100%')
		.d-flex
			v-img.mt-2(src='https://developer.accuweather.com/sites/default/files/13-s.png' alt='Sunny image' width="200px")
			v-list-item
				v-list-item-content
					v-list-item-title.headline San Francisco
					v-list-item-subtitle Mon, 12:30 PM, Mostly sunny
					h2.mt-2 23&deg;C
			v-card-actions
				v-btn(@click="favorite = !favorite" :class="{ favorite }" text)
					span
						v-icon mdi-heart
		v-card-text
			v-row(align='center')
				v-col.display-2.text-center.mb-5(cols='12')
					| Mostly sunny
		v-divider
		.grid.mx-2.my-2(justify='center')
			div(v-for="item in forecast" :key="item.day")
				v-card.mx-1.my-2
					v-list-item
						v-list-item-content
							v-list-item-title.headline San Francisco
							v-list-item-subtitle Mon, 12:30 PM, Mostly sunny
					v-card-text
						v-row(align='center')
							v-col.display-3
								| 23&deg;C
</template>

<script>
export default {
	data: () => ({
		favorite: false,
		forecast: [
			{ day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
			{ day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
			{ day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
			{ day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
			{ day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
		],
	}),
}
</script>

<style lang="scss">
	.favorite span {
		color: rgb(29, 111, 204)
	}
	.grid {
		display: grid;
		grid-template-columns: 20% 20% 20% 20% 20%;

		@include md-down {
			grid-template-columns: 50% 50%;
			row-gap: 10px;
		}

		@include sm-down {
            grid-template-columns: 100%;
			row-gap: 10px;
        }
	}
</style>