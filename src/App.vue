<template>
	<div id="app">
		<header>
			<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<router-link :to="{ name: 'AboutMe'}" class="navbar-brand">Aros</router-link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<router-link :to="{ name: 'AboutMe'}" class="nav-link">AboutMe</router-link>
						</li>
						<li class="nav-item">
							<router-link :to="{ name: 'Portfolio'}" class="nav-link">Portfolio</router-link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
		<main>
			<router-view/>	
		</main>		
	</div>
</template>
<script>
export default {
	name: 'app'
}

</script>
<style>

body{
	padding:56px 0 0 0;
}
main {
	padding-top: 30px;
}
</style>
