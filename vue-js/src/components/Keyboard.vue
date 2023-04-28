<script setup>
  import { onMounted } from 'vue'

  onMounted(() => {
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
  })
</script>

<template>
  <div class="keyboard">
		<button data-value="cancel-entry">CE</button>
    <button data-value="clear">C</button>
    <button data-value="%">
      <img src="../assets/percent.svg" alt="percent-button" />
    </button>
    <button data-value="/">
      <img src="../assets/divide.svg" alt="divide-button">
    </button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button data-value="*">
      <img src="../assets/multiple.svg" alt="multiple-button">
    </button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button data-value="-">
      <img src="../assets/minus.svg" alt="minus-button">
    </button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button data-value="+">
      <img src="../assets/plus.svg" alt="plus-button">
    </button>
    <button data-value="+/-">
      <img src="../assets/plus-minus.svg" alt="plus-minus-button">
    </button>
    <button>0</button>
    <button>.</button>
    <button data-value="=">
      <img src="../assets/equals.svg" alt="equals-button">
    </button>
	</div>
</template>

<style scoped>
	.keyboard {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
  }

  button {
    width: 64px;
    height: 64px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #2D2A37;
    box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);

    outline: none;
    border: none;
    border-radius: 999px;

    cursor: pointer;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #EBEBEB;
  }

  button:hover {
    opacity: 0.6;
    transform: translateY(2px);
    transition: 0.1s;
  }

  button:focus {
    opacity: 0.6;
    transform: translateY(2px);
    transition: 0.1s;
  }

  button:first-child {
    color: #975DFA;
  }

  button:nth-child(4n) {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(255, 255, 255, 0.05) 100%), #462878;
  }

  button:last-child {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%), #7F45E2;
  }
</style>