<template>
	<div id="app">
		<div class="console">
			<gameboy :led="$route.name && 'green'" case="blue">
				<router-view/>
			</gameboy>
		</div>
		<div :class="{ bookshelf: true, load: !!nextPage }">
			<card :class="{ load: nextPage === 'Home' }" style="transform: translate(-50%, calc(0% + 25px))">
				<router-link class="tag" :to="{ name: 'Home' }">
					<h2>Home</h2>
				</router-link>
			</card>
			<div style="transform: translateY(calc(12px + 60vw / 1665 * 370 + 40px))" class="separator"/>
			<card style="transform: translate(-50%, calc(100% + 75px))">
				<router-link class="tag" :to="{ name: 'Projects' }">
					<h2>Projects</h2>
				</router-link>
			</card>
			<div style="transform: translateY(calc((12px + 60vw / 1665 * 370) * 2 + 75px))" class="separator"/>
			<card :class="{ load: nextPage === 'About' }" style="transform: translate(-50%, calc(200% + 125px))">
				<router-link class="tag" :to="{ name: 'About' }">
					<h2>About</h2>
				</router-link>
			</card>
		</div>
	</div>
</template>

<script>
import Gameboy from "@/components/Gameboy"
import Card from "@/components/Card"
import { mapState } from "vuex"

export default {
	components: {
		Gameboy,
		Card
	},
	computed: mapState(["nextPage"])
}
</script>


<style lang="stylus">
$gameboy_width = 60vw

#app
	font-family 'Avenir', Helvetica, Arial, sans-serif
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale
	text-align center
	color #2c3e50
	background-image url(/wallpaper.png)
	background-size cover
	background-repeat no-repeat
	background-position center
	min-height 100vh
	display flex

.console
	z-index 2
	margin-top "calc(12px + %s / 1665 * 370)" % $gameboy_width
	width $gameboy_width

.bookshelf
	margin 12px 12px 12px 10vw
	width 30vw
	position relative
	overflow-y auto
	border 10px #A87328 solid
	padding-right 10px
	background #241909

	&.load
		overflow-y inherit

	&::-webkit-scrollbar
		width 10px

	&::-webkit-scrollbar-track
		background: #A87328;
 
	&::-webkit-scrollbar-thumb
		background: #666; 

	.separator
		width calc(100% + 10px)
		height 10px
		background #A87328

	svg
		position absolute
		left 50%
		width "calc(%s / 1665 * 680)" % $gameboy_width

	svg.load
		animation move 1s

	.tag
		display block
		width 100%
		height 100%
		background white
		border-radius 5%

		h2
			margin 0

@keyframes move
	25%
		transform translate(-50%, 0)

	50%
		transform "translateX(calc(-50% + -1 * (%s/1.86 + 10vw + (%s / 1665 * 680)/2))) translateY(0)" % ($gameboy_width $gameboy_width)

	100%
		transform "translateX(calc(-50% + -1 * (%s/1.86 + 10vw + (%s / 1665 * 680)/2))) translateY(calc(12px + %s / 1665 * 370))" % ($gameboy_width $gameboy_width $gameboy_width)
</style>
