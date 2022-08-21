import { useState } from 'react'
import blue_watercolor from './static/blue_watercolor.webp'

const colors = [
  ["light-blue", 0],
  ["blue", 40],
  ["purple", 60],
  ["green", 270],
  ["red", 160],
  ["orange", 180],
  ["yellow", 220]
]

function App() {
  const [colorIndex, changeColorIndex] = useState(0)

  return (
    <div>
      <header>
        <ColorMenu changeColorIndex={changeColorIndex} colorIndex={colorIndex} />
        <img
          src={blue_watercolor}
          style={{
            filter: `hue-rotate(${colors[colorIndex][1]}deg)`,
          }}
        />
      </header>
    </div>
  )
}

function ColorMenu({ changeColorIndex, colorIndex }) {
  return (
    <div className="bs-example">
      <div className="btn-group">
        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">{colors[colorIndex][0]}</button>
        <div className="dropdown-menu">
          {colors.map((_color, index) => <ColorMenuItem key={index} index={index} changeColorIndex={changeColorIndex} />)}
        </div>
      </div>
    </div>
  )
}

function ColorMenuItem({ index, changeColorIndex }) {
  const handleSelect = () => {
    changeColorIndex(index)
  }
  return (
    <a href="#" className="dropdown-item" onClick={handleSelect}>{colors[index][0]}</a>
  )
}

export default App;