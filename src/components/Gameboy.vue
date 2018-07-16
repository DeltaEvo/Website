<template>
	<inner ref="inner">
		<slot></slot>
	</inner>
</template>

<script>
import Inner from "@/assets/gameboy.svg"

const BUTTONS = ["start", "select", "a", "b"]
export default {
	name: "Gameboy",
	props: {
		led: String,
		case: String
	},
	mounted() {
		const inner = this.$refs.inner.$refs
		for (const name in this.$options.props) {
			this.$watch(name, (value) => inner[name].style.fill = value, { immediate: true })
		}

		this.buttonMap = new WeakMap()

		for (const button of BUTTONS) {
			this.buttonMap.set(inner[button], button)
			inner[button].addEventListener('mousedown', this.color)
			inner[button].addEventListener('mouseout', this.reset)
			inner[button].addEventListener('mouseup', this.reset)
		}
	},
	methods: {
		color({ target }) {
			this.$emit(this.buttonMap.get(target))
			target.style.fill = "#BBB"
		},
		reset({ target }) {
			target.style.fill = ""
		}
	},
	components: {
		Inner
	},
}
</script>

<style>

</style>
