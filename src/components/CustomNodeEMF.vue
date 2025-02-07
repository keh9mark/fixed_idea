<template>
  <div class="emf-node">
    <!-- Круг -->
    <svg width="55" height="55">
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="black"
        stroke-width="1"
        fill="none"
      />
      <line x1="5" y1="25" x2="45" y2="25" stroke="black" stroke-width="1" />
      <line x1="35" y1="30" x2="45" y2="25" stroke="black" stroke-width="1" />
      <line x1="35" y1="20" x2="45" y2="25" stroke="black" stroke-width="1" />
    </svg>

    <!-- Порт 1 (вход) -->
    <Handle
      type="source"
      position="left"
      class="port port-left"
      data-port-type="input"
    />

    <!-- Порт 2 (выход) -->
    <Handle
      type="target"
      position="right"
      class="port port-right"
      data-port-type="output"
    />
  </div>
</template>

<script setup>
import { Handle } from '@vue-flow/core'
</script>

<style scoped>
.emf-node {
  position: relative;
  width: 50px;
  height: 50px;
  transform: 'rotate(90deg)';
}

.port {
  position: absolute;
  width: 7px;
  height: 7px;
  background-color: #666;
  border-radius: 50%;
  cursor: pointer;
}

.port-left {
  left: -5px;
  top: 50%;
  transform: translateY(-50%);
}

.port-right {
  right: -5px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
