import './App.css'
import Dropdown from './components/dropdown/Dropdown'
// import HeaderSimple from './components/headers/HeaderSimple'

function App() {
  return (
    <>
      {/* <HeaderSimple /> */}
      <div className=''>
        <Dropdown
          defaultValue='Select'
          optionList={["Goods and beverage", "ipsum zrgerg", "adaptable", "y"]}
        />
      </div>
    </>
  )
}

export default App
