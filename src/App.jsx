import HeaderPage from './Components/Header/'
import Banner from './Components/SecaoBanner'
import Produtos from './Components/SecaoProdutos'
import BeneficiosNaCompra from './Components/BeneficiosNaCompra'
import InformacoesDaEmpresa from './Components/ImformocoesDaEmpresa'
import Contatos from './Components/SecaoDeContatos'

function App() {

  return (
    <>
      <HeaderPage/> 
      <Banner/>
      <Produtos/>
      <BeneficiosNaCompra/>
      <InformacoesDaEmpresa/>
      <Contatos/>
    </>
  )
}

export default App
