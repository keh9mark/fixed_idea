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
          snap: true, // Привязка к портам
          allowBlank: false, // Запретить создание ребер без портов
          allowLoop: false, // Запретить создание петель
          allowEdge: false, // Запретить создание ребер между ребрами
          allowNode: false, // Запретить создание ребер между узлами (только через порты)
          allowPort: true, // Разрешить создание ребер только через порты
          highlight: true, // Подсвечивать порты при наведении
          allowMulti: false,
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
        defaultEdge: {
          attrs: {
            line: {
              stroke: '#5F95FF', // Цвет линии
              strokeWidth: 2, // Толщина линии
              targetMarker: 'block', // Тип стрелки на конце
            },
          },
        },
      })

      // Подключаем плагин Transform с настройкой только вращения
      const transform = new Transform({
        resizing: false, // Отключаем изменение размера
        rotating: { enabled: true, grid: 90 }, // Включаем вращение
      })
      graph.use(transform)

      graph.on('edge:mouseenter', ({ cell }) => {
        cell.addTools([
          { name: 'vertices' },
          {
            name: 'button-remove',
            args: { distance: 20 },
          },
        ])
      })

      graph.on('edge:mouseleave', ({ cell }) => {
        if (cell.hasTool('button-remove')) {
          cell.removeTool('button-remove')
        }
      })

      // Применяем настройку ко всем существующим ребрам
      // graph.getEdges().forEach(configureEdge)

      // graph.on('edge:added', ({ edge }) => {
      //   // console.log('dd')
      //   // configureEdge(edge)
      // })

      const node = graph.addNode({
        x: 100,
        y: 140,
        width: 10, // Ширина узла
        height: 10, // Высота узла (должна быть равна ширине для круга) // Текст внутри узла
        attrs: {
          body: {
            magnet: true, // Узел может быть магнитом для соединений
            rx: 40, // Радиус скругления по X (половина ширины)
            ry: 40, // Радиус скругления по Y (половина высоты)
            fill: '#000000', // Черный цвет заливки
            stroke: '#000000', // Черный цвет обводки
          },
          label: {
            fill: '#ffffff', // Белый цвет текста для контраста
            fontSize: 14, // Размер текста
          },
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
              attrs: {
                circle: {
                  r: 2,
                  magnet: true,
                  strokeWidth: 1,
                },
              },
            },
            group2: {
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
        // attrs: {
        //   line: {
        //     sourceMarker: {
        //       // name: 'ellipse',
        //       // rx: 2,
        //       // ry: 2,
        //     },
        //     targetMarker: {
        //       // name: 'ellipse',
        //       // rx: 2,
        //       // ry: 2,
        //     },
        //   },
        // },
      })

      graph.addEdge({
        source: { cell: node2, port: 'port2' },
        target: { cell: node3, port: 'port1' },
        // attrs: {
        //   line: {
        //     sourceMarker: {
        //       name: 'ellipse',
        //       rx: 2,
        //       ry: 2,
        //     },
        //     targetMarker: {
        //       name: 'ellipse',
        //       rx: 2,
        //       ry: 2,
        //     },
        //   },
        // },
      })

      graph.addEdge({
        source: { cell: node1, port: 'port2' },
        target: { cell: node3, port: 'port2' },
        // attrs: {
        //   line: {
        //     sourceMarker: {
        //       name: 'ellipse',
        //       rx: 2,
        //       ry: 2,
        //     },
        //     targetMarker: {
        //       name: 'ellipse',
        //       rx: 2,
        //       ry: 2,
        //     },
        //   },
        // },
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
