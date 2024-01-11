import './App.css'
import Dropdown from './components/dropdown/Dropdown'
// import HeaderSimple from './components/headers/HeaderSimple'

function App() {
  return (
    <>
      {/* <HeaderSimple /> */}
      <Dropdown
        defaultValue='Select'
        optionList={["lorem", "ipsum", "carpe", "y"]}
      />
    </>
  )
}

export default App
