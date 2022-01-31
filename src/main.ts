import { Game, getWindowDimensions, Grid, Renderer, Event, Cell, Interface } from 'unrail-engine'

enum CellType {
  None = 1 << 0,
  Pion = 1 << 1,
  Empty = 1 << 2,
  Selected = 1 << 3,
  Moving = 1 << 4,
}

class GameGrid {
  x: number
  y: number
  dim: number
  grid: Grid
  cells: Cell[]

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x
    this.y = y
    this.dim = Math.min(width, height)
    this.grid = new Grid(7, 7)
    this.cells = this.grid.cells
    this.cells.forEach(cell => cell.state = CellType.Pion)
    this.grid.get(3, 3).state = CellType.Empty
    this.cells.forEach(cell => {
      if (cell.x < 2 || cell.x >= 5) {
        if (cell.y < 2 || cell.y >= 5) {
          cell.state = CellType.None
        }
      }
    })
  }

  render() {
    Interface.getItems().forEach((item, i) => {
      const value: string = item.callback()
      const element: HTMLSpanElement | null = document.querySelector(`.ue-interface #item-${i + 1}`)
      if (element && element.innerText !== value) {
        element.innerText = value
      }
    })

    Renderer.clear()
    for (let i = 0; i < 7; i++) {
      const xi = this.x + i * this.dim / 7
      for (let j = 0; j < 7; j++) {
        const yj = this.y + j * this.dim / 7
        const cell = this.grid.get(i, j)
        if (cell && (cell.state & CellType.Pion) == CellType.Pion) {
          let stroke = (cell.state & CellType.Selected) === CellType.Selected ? '#66c5ed' : '#222'
          Renderer.circle(xi, yj, 5, { fillStyle: stroke, strokeStyle: stroke })
        } else if (cell && (cell.state & CellType.Empty) === CellType.Empty) {
          Renderer.circle(xi, yj, 5, { fillStyle: '#eee', strokeStyle: '#eee' })
        }
      }
    }
    Renderer.endFrame()
  }
}

function isReachable(c1: Cell, c2: Cell) {
  const c1Reachable = grid.cells.filter(cell => {
    return cell.x == c1.x && (cell.y == c1.y + 2 || cell.y == c1.y - 2) ||
      cell.y == c1.y && (cell.x == c1.x + 2 || cell.x == c1.x - 2)
  })
  return c1Reachable.includes(c2) && (c2.state & CellType.Empty) === CellType.Empty
}


window.onclick = e => {
  let selectedCell = grid.cells.find(cell => {
    const cx = grid.x + cell.x * grid.dim / 7
    const cy = grid.y + cell.y * grid.dim / 7
    if ((cx - e.clientX) ** 2 + (cy - e.clientY) ** 2 <= 300) {
      return cell
    }
  })
  if (!selectedCell) return
  let alreadySelected = grid.cells.find(cell => (cell.state & CellType.Selected) === CellType.Selected)
  if (!alreadySelected && (selectedCell.state & CellType.Pion) === CellType.Pion) selectedCell.state |= CellType.Selected
  else if (alreadySelected) {
    if (isReachable(alreadySelected, selectedCell)) {
      let cellInBetween = grid.grid.get(
        Math.min(alreadySelected.x, selectedCell.x) + Math.abs(Math.ceil((alreadySelected.x - selectedCell.x) / 2)),
        Math.min(alreadySelected.y, selectedCell.y) + Math.abs(Math.ceil((alreadySelected.y - selectedCell.y) / 2)),
      )!
      if ((cellInBetween.state & CellType.Pion) !== CellType.Pion) return
      cellInBetween.state &= ~CellType.Pion
      cellInBetween.state |= CellType.Empty
      selectedCell.state &= ~CellType.Empty
      selectedCell.state &= ~CellType.Selected
      selectedCell.state |= CellType.Pion
      alreadySelected.state &= ~CellType.Pion
      alreadySelected.state &= ~CellType.Selected
      alreadySelected.state |= CellType.Empty
    } else {
      selectedCell.state &= ~CellType.Selected
      alreadySelected.state &= ~CellType.Selected
    }
  }
}

let { width, height } = getWindowDimensions()
Renderer.create(width, height)
const solitaire = new Game('Solitaire')
const dim = Math.min(width!, height!)
const padding = dim * 1 / 10
const grid = new GameGrid((width! - dim) / 2 + padding, (height! - dim) / 2 + padding, width! - padding, height! - padding)

Interface.addItem(() => `Nombre de pion restants: ${grid.cells.filter(cell => (cell.state & CellType.Pion) === CellType.Pion).length}`, 'top-right')

solitaire.setMainLoop(() => grid.render())
solitaire.toggleStats(false)
solitaire.start()

