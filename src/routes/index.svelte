<script lang="ts">
	import '../app.scss';
</script>

<header class="container-fluid">Hello this is the header</header>

<main class="container">
	<article>
		<hgroup>
			<h1>This is a big header</h1>
			<h2>And a smaller header</h2>
		</hgroup>

		<p>Press <kbd>S</kbd> to do nothing.</p>

		<span>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, ipsum euismod tincidunt
			tincidunt, nisi erat consequat nunc, euismod aliquam urna eros eu nunc.
		</span>
	</article>

	<article>
		<blockquote>
			"Maecenas vehicula metus tellus, vitae congue turpis hendrerit non. Nam at dui sit amet ipsum
			cursus ornare."
			<footer>
				<cite> - Phasellus eget lacinia</cite>
			</footer>
		</blockquote>
	</article>

	<form>
		<div class="grid">
			<label for="email">
				Email address
				<input type="email" id="email" name="email" placeholder="Email address" required />
				<small>We'll never share your email with anyone else.</small>
			</label>

			<label for="password">
				Password
				<input type="password" id="password" name="password" placeholder="Password" required />
				<small>Your password must be at least 8 characters long.</small>
			</label>
		</div>

		<div class="grid">
			<button type="button">Login</button>
			<button class="secondary" type="button">SignUp</button>
		</div>
	</form>

	<details>
		<summary>Accordion 1</summary>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, ipsum euismod tincidunt
		</p>
	</details>
</main>
