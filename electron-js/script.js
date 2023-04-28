const input = document.querySelector('input')
const result = document.querySelector('.result > span')
const buttons = document.querySelectorAll('button')

function clear() {
	input.value = ''
	result.innerHTML= 0
}

function cancelEntry() {
	input.value = input.value.slice(0, -1)
}

function handleNumberClick(clickedButton) {
	input.value= `${input.value.concat(clickedButton.textContent)}`
}

function togglePositiveNegative() {
	const entries = input.value.match(/-?\d+(\.\d+)?|\(-\d+(\.\d+)?\)/g)
	let lastEntry = entries[entries.length - 1]
	lastEntry = lastEntry?.match(/[-()]/g)?.length === 1 ? lastEntry?.replace('-', '') : lastEntry

	const lastEntryIndex = input.value.lastIndexOf(lastEntry)
	const isLastEntryNegative = lastEntry?.match(/[-()]/g)?.length
	
	if (!isLastEntryNegative) 
		input.value = input.value.slice(0, lastEntryIndex) + `(-${lastEntry})`
	else 
		input.value = input.value.slice(0, lastEntryIndex) + lastEntry.replace(/[-()]/g, '')
}

function handleOperationClick(clickedButton) {
	switch (clickedButton.dataset.value) {
		case '=':
			if (!!input.value.slice(-1).match(/[-+/%*]/))
				break

			result.textContent = eval(input.value)
			break 
		case '+/-':
			togglePositiveNegative()
			break 
		case 'clear':
			clear()
			break 
		case 'cancel-entry':
			cancelEntry()
			break 
		default: 
			if ([undefined, null].includes(input.value) || input.value.slice(-1).match(/[%/*\-+]/))
				break

			input.value= `${input.value.concat(clickedButton.dataset.value)}`
			break
	}
}

for (const button of buttons) {
	button.addEventListener('click', function() {
		if (!!this.dataset.value) 
			handleOperationClick(this)
		else 
			handleNumberClick(this)			
	})
}
