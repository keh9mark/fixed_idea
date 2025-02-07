<template>
  <div ref="container" class="x6-container"></div>
</template>

<script>
import { Graph } from '@antv/x6'

export default {
  name: 'X6Graph',
  mounted() {
    this.initGraph()
  },
  methods: {
    initGraph() {
      // Создаем экземпляр графа
      const graph = new Graph({
        container: this.$refs.container,
        width: 800,
        height: 600,
        grid: true, // Включаем сетку
        connecting: {
          router: 'manhattan', // Используем маршрутизатор для изгибов под 90 градусов
          connector: 'rounded', // Закругленные углы для линий
        },
      })

      // Создаем узлы с портами
      const node1 = graph.addNode({
        x: 40,
        y: 40,
        width: 100,
        height: 60,
        label: 'Node 1',
        ports: {
          groups: {
            group1: {
              position: 'left', // Порт слева
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: '#5F95FF',
                  strokeWidth: 1,
                  fill: '#fff',
                },
              },
            },
            group2: {
              position: 'right', // Порт справа
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: '#5F95FF',
                  strokeWidth: 1,
                  fill: '#fff',
                },
              },
            },
          },
          items: [
            { id: 'port1', group: 'group1' }, // Левый порт
            { id: 'port2', group: 'group2' }, // Правый порт
          ],
        },
      })

      const node2 = graph.addNode({
        x: 300,
        y: 40,
        width: 100,
        height: 60,
        label: 'Node 2',
        ports: {
          groups: {
            group1: {
              position: 'left',
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: '#5F95FF',
                  strokeWidth: 1,
                  fill: '#fff',
                },
              },
            },
            group2: {
              position: 'right',
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: '#5F95FF',
                  strokeWidth: 1,
                  fill: '#fff',
                },
              },
            },
          },
          items: [
            { id: 'port1', group: 'group1' },
            { id: 'port2', group: 'group2' },
          ],
        },
      })

      const node3 = graph.addNode({
        x: 170,
        y: 200,
        width: 100,
        height: 60,
        label: 'Node 3',
        ports: {
          groups: {
            group1: {
              position: 'top', // Порт сверху
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: '#5F95FF',
                  strokeWidth: 1,
                  fill: '#fff',
                },
              },
            },
            group2: {
              position: 'bottom', // Порт снизу
              attrs: {
                circle: {
                  r: 4,
                  magnet: true,
                  stroke: '#5F95FF',
                  strokeWidth: 1,
                  fill: '#fff',
                },
              },
            },
          },
          items: [
            { id: 'port1', group: 'group1' },
            { id: 'port2', group: 'group2' },
          ],
        },
      })

      // Создаем связи между узлами
      graph.addEdge({
        source: { cell: node1, port: 'port2' }, // Исходный узел и порт
        target: { cell: node2, port: 'port1' }, // Целевой узел и порт
      })

      graph.addEdge({
        source: { cell: node2, port: 'port2' },
        target: { cell: node3, port: 'port1' },
      })

      graph.addEdge({
        source: { cell: node1, port: 'port2' },
        target: { cell: node3, port: 'port2' },
      })
    },
  },
}
</script>

<style scoped>
.x6-container {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
}
</style>
