
import { useEffect, useState } from 'react'
import './App.css'
import Boton from './components/Boton/Boton'
import Pantalla from './components/Pantalla/Pantalla'
import Styles from './components/Pantalla/EstilosPantalla'
function App() {
  const [pantalla, setPantalla] = useState([])
  var [num1, setNum1] = useState(0)
  var [num2, setNum2] = useState(0)
  const [cambio, setcambio] = useState(false)
  var [operador, setOperador] = useState("")
  var [resultado, setResultado] = useState("")
   const [estilo,setEstilo]=useState("")



  const cambioPorOperador = (id) => {
    console.log(id.target.id)
    setOperador(id.target.id)
    setPantalla(["0"])
    setcambio(true)
  }

  
  const clickBoton = (id) => {


    if (!cambio &&estilo===classes.pantallaOn) {
      if (num1 === 0) {
        setNum1(id.target.id)
        setPantalla([id.target.id])
      } else {
        setNum1(num1 + id.target.id)
        setPantalla([...pantalla, id.target.id])
      }
    } else if (cambio) {
      if (num2 === 0) {
        setNum2(id.target.id)
        setPantalla([id.target.id])
      } else {
        setNum2(num2 + id.target.id)
        setPantalla([...pantalla, id.target.id])
      }
    }




  }
  const calcular = () => {
    console.log(num1)
    console.log(num2)
    console.log(operador)
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    if (num2 !== 0) {
      operador === "/" ? setResultado(parseFloat(num1) / parseFloat(num2)) : null
    } else {
      setPantalla(<p style={{width:'100%',fontSize:'18px',paddingLeft:'15px'}}>E</p>)
      setTimeout(() => {
        setPantalla(["0"])
        borrar()
      }, 4000);
    }
    operador === "+" ? setResultado(parseFloat(num1) + parseFloat(num2)) : null
    operador === "-" ? setResultado(parseFloat(num1) - parseFloat(num2)) : null
    operador === "*" ? setResultado(parseFloat(num1) * parseFloat(num2)) : null

    return (resultado, console.log(resultado), setcambio(false), setOperador(""))
  }


  const borrar = () => {
    if(estilo===classes.pantallaOn){
      setNum1(0)
      setNum2(0)
      setPantalla(["0"])
      setResultado("")
      setOperador("")
    }
   
  }

  const classes=Styles()
 const onOff=()=>{
  console.log("estilos")
     if(estilo===classes.pantallaOff){
         setEstilo(classes.pantallaOn)
         setPantalla(["0"])
     }else{
      setEstilo(classes.pantallaOff)
      borrar()
      setPantalla([])
     }
 }
  useEffect(()=>{
    setEstilo(classes.pantallaOff)
  },[])
  return (
    <>
      <header>
        <h1>Calculadora React</h1>
      </header>
      <div className='calculadora'><h4 style={{ color: 'burlywood' }}>Argentina Programa 4.0 XXIII</h4>
        <Pantalla pantalla={!resultado ? pantalla : resultado} estilo={estilo} />

        <div className='box-boton-onoff'>
        <Boton oper="ON/OFF" boton="boton-on" onOff={()=>onOff()}/>
        </div>
        

        <div className='box-boton'>
          <Boton clickBoton={(id) => clickBoton(id)} boton="boton" num={1} />
          <Boton clickBoton={(id) => clickBoton(id)} boton="boton" num={2} />
          <Boton clickBoton={(id) => clickBoton(id)} boton="boton" num={3} />
          <Boton cambioOperador={(id) => cambioPorOperador(id)} boton="boton" oper="+" />
        </div>
        <div className='box-boton'>
          <Boton clickBoton={(id) => clickBoton(id)} boton="boton" num={4} />
          <Boton clickBoton={(id) => clickBoton(id)} boton="boton" num={5} />
          <Boton clickBoton={(id) => clickBoton(id)} boton="boton" num={6} />
          <Boton cambioOperador={(id) => cambioPorOperador(id)} boton="boton" oper="-" />
        </div>
        <div className='box-boton'>
          <Boton clickBoton={(id) => clickBoton(id)} boton="boton" num={7} />
          <Boton clickBoton={(id) => clickBoton(id)} boton="boton" num={8} />
          <Boton clickBoton={(id) => clickBoton(id)} boton="boton" num={9} />
          <Boton cambioOperador={(id) => cambioPorOperador(id)} boton="boton" oper="*" />
        </div>
        <div className='box-boton'>

          <Boton clickBoton={() => borrar()} boton="boton" oper="C" />
          <Boton clickBoton={(id) => clickBoton(id)} boton="boton" num={0} />
          <Boton clickBoton={() => calcular()} boton="boton" oper="=" />
          <Boton cambioOperador={(id) => cambioPorOperador(id)} boton="boton" oper="/" />
        </div>
      </div>
    </>

  )
}

export default App
