<template>
    <div class="container">
      <div class="column">
        <!-- Content for the first column goes here -->
        <slot name="left-column"></slot>
      </div>
      <div class="column">
        <!-- Content for the second column goes here -->
        <slot name="right-column"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TwoColumnsLayout'
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: space-between;
  }
  
  .column {
    flex: 1;
    padding: 10px;
    box-sizing: border-box;
  }
  
  .column:first-child {
    margin-right: 10px;
  }
  
  .column:last-child {
    margin-left: 10px;
  }
  </style>
  