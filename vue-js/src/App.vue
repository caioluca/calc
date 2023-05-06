<script setup>
  import { ref } from 'vue'
  import { Display, Keyboard } from './components'
  
  const input = ref('')
  const result = ref(0)

  function handleInput(button) {
    if (!!button?.props?.['data-value']) 
      handleOperationClick(button)
    else 
      handleNumberClick(button) 
  }

  function clear() {
    input.value = ''
    result.value = 0
  }

  function cancelEntry() {
    input.value = input.value.slice(0, -1)
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

  function handleNumberClick(button) {
    input.value = input.value.concat(button.children)
  }
  
  function handleOperationClick(button) {
    switch (button?.props?.['data-value']) {
      case '=':
        if (!!input.value.slice(-1).match(/[-+/%*]/))
          break

        result.value = eval(input.value)
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

        input.value = input.value.concat(button?.props?.['data-value'])
        break
    }
  }
</script>

<template>
  <div class="wrapper">
    <Display :input="input" :result="result" />
    <Keyboard @handleInput="handleInput" />
  </div>
</template> 

<style scoped>
  .wrapper {
    width: 100%;
    max-width: 356px;

    height: 100%;
    max-height: 566px;

    background-color: #2D2A37;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 54px 32px 32px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22);
    border-radius: 48px;
  }
</style>