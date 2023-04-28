<template>
	<div class="display">
		<input disabled />
		<div class="result">
			<img src="../assets/result-equals.svg" alt="result-equals">
			<span>0</span>
		</div>
	</div>
</template>

<style scoped>
  .display {
    display: flex; 
    flex-direction: column; 
    gap: 8px;
  }

  .display > input {
    background: none;
    border: none;
    outline: none;

    font-size: 20px;
    line-height: 140%;
    text-align: right;

    color: #6B6B6B;

    caret-color: transparent;
  }

  .result {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .result > img {
    user-select: none;
    width: 20px;
    height: 20px;
  }

  .result > span {
    font-size: 36px;
    line-height: 140%;
    text-align: right;
    letter-spacing: -0.02em;

    color: #EBEBEB;
  }

  .result > span::selection {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%), #7F45E2;
  }
</style>