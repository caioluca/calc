<script setup>
  import { ref } from 'vue'

  const buttons = ref([
    { props: { 'data-value': 'cancel-entry' }, children: 'CE' }, 
    { props: { 'data-value': 'clear' }, children: 'C' }, 
    { props: { 'data-value': '%' }, children: '<img src="/assets/percent.svg" alt="percent-button" />' }, 
    { props: { 'data-value': '/' }, children: '<img src="/assets/divide.svg" alt="divide-button">' }, 
    { children: '7' }, 
    { children: '8' }, 
    { children: '9' }, 
    { props: { 'data-value': '*' }, children: '<img src="/assets/multiple.svg" alt="multiple-button">' }, 
    { children: '4' }, 
    { children: '5' }, 
    { children: '6' }, 
    { props: { 'data-value': '-' }, children: '<img src="/assets/minus.svg" alt="minus-button">' }, 
    { children: '1' }, 
    { children: '2' }, 
    { children: '3' }, 
    { props: { 'data-value': '+' }, children: '<img src="/assets/plus.svg" alt="plus-button">' }, 
    { props: { 'data-value': '+/-' }, children: '<img src="/assets/plus-minus.svg" alt="plus-minus-button">' }, 
    { children: '0' }, 
    { children: '.' },
    { props: { 'data-value': '=' }, children: '<img src="/assets/equals.svg" alt="equals-button">' }, 
  ])
</script>

<template>
  <div class="keyboard">
    <button
      v-for="(button, index) of buttons" 
      :key="index" 
      v-bind="button.props" 
      v-html="button.children"
      @click="$emit('handleInput', button)"
    >
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