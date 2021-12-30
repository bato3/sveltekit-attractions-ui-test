<script type="ts">
	import { Button, TextField, FormField, Switch } from 'attractions';
	let cardNumber = '';
	let happy = false;
</script>

<FormField name="Main field" help="Write this and not that." required>
	<TextField />
</FormField>
<FormField name="Happiness" errors={[happy && 'Not happy enough']}>
	<Switch bind:value={happy} />
</FormField>

<TextField
	outline
	label="Card number"
	id="b"
	placeholder="1234 5678 9012 3456"
	bind:value={cardNumber}
	error={cardNumber.startsWith('2') && 'We do not serve your bank.'}
/>
<TextField
	multiline
	id="a"
	placeholder="1234 5678 9012 3456"
	bind:value={cardNumber}
	error={cardNumber.startsWith('2') && 'We do not serve your bank.'}
/>

<Button danger filled>button</Button>
<Button danger outline>button</Button>
<Button danger noRipple>button</Button>

<style type="scss">
    /*
	:global(body) {
		background: $my-test;
	}
    */
</style>
