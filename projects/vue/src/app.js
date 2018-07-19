import Vue from "vue";

new Vue({
	el: "#app",
	data: {
		title: "Vue title"
	},
	methods: {

	}, 
	template: `
		<div class="vue-title"><h1>{{ title }}</h1></div>
	`
});
