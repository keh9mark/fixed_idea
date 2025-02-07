<template>
  <div ref="container" class="x6-container"></div>
</template>

<script>
import { Graph } from '@antv/x6'
import { Transform } from '@antv/x6-plugin-transform'

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
        grid: true,
        connecting: {
          router: 'manhattan',
        },
        interacting: {
          nodeMovable: true,
        },
        panning: true, // Включаем возможность перетаскивания холста
        selecting: {
          enabled: true,
          multiple: true,
          rubberband: true,
          showNodeSelectionBox: true,
        },
      })

      // Подключаем плагин Transform с настройкой только вращения
      const transform = new Transform({
        resizing: false, // Отключаем изменение размера
        rotating: { enabled: true, grid: 90 }, // Включаем вращение
      })
      graph.use(transform)

      // Добавляем логику для фиксации угла вращения на 90 градусов
      graph.on('node:rotated', ({ node }) => {
        const angle = node.angle()
        console.log(angle)
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
              position: 'left',
              attrs: {
                circle: {
                  r: 2,
                  magnet: true,
                  strokeWidth: 1,
                },
              },
            },
            group2: {
              position: 'right',
              attrs: {
                circle: {
                  r: 2,
                  magnet: true,
                  strokeWidth: 1,
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
                  r: 2,
                  magnet: true,
                  strokeWidth: 1,
                },
              },
            },
            group2: {
              position: 'right',
              attrs: {
                circle: {
                  r: 2,
                  magnet: true,
                  strokeWidth: 1,
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
              position: 'top',
              attrs: {
                circle: {
                  r: 2,
                  magnet: true,
                  strokeWidth: 1,
                },
              },
            },
            group2: {
              position: 'bottom',
              attrs: {
                circle: {
                  r: 2,
                  magnet: true,
                  strokeWidth: 1,
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
        source: { cell: node1, port: 'port2' },
        target: { cell: node2, port: 'port1' },
        attrs: {
          line: {
            sourceMarker: {
              name: 'ellipse',
              rx: 2,
              ry: 2,
            },
            targetMarker: {
              name: 'ellipse',
              rx: 2,
              ry: 2,
            },
          },
        },
      })

      graph.addEdge({
        source: { cell: node2, port: 'port2' },
        target: { cell: node3, port: 'port1' },
        attrs: {
          line: {
            sourceMarker: {
              name: 'ellipse',
              rx: 2,
              ry: 2,
            },
            targetMarker: {
              name: 'ellipse',
              rx: 2,
              ry: 2,
            },
          },
        },
      })

      graph.addEdge({
        source: { cell: node1, port: 'port2' },
        target: { cell: node3, port: 'port2' },
        attrs: {
          line: {
            sourceMarker: {
              name: 'ellipse',
              rx: 2,
              ry: 2,
            },
            targetMarker: {
              name: 'ellipse',
              rx: 2,
              ry: 2,
            },
          },
        },
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
