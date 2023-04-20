const input = document.querySelector('input')
const buttons = document.querySelectorAll('button')

for (const button of buttons) {
	button.addEventListener('click', function() {
		if (!!this.dataset.value) 
			input.value= `${input.value.concat(this.dataset.value)}`
		else 
			input.value= `${input.value.concat(this.textContent)}`
	})
}