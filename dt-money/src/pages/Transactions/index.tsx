import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './Components/SearchForm'
import { TransactionsContainer, TransactionsTable } from './styles'


export function Transactions() {
  return (
    <div>
     <Header />
     <Summary />

     <TransactionsContainer>
       <SearchForm/>
      <TransactionsTable>
      <tbody>
        <tr>
          <td width="50%">Desenvolvimento de site</td>
          <td>R$ 12.000,00</td>
          <td>Venda</td>
          <td>09/10/2023</td>
        </tr>
        <tr>
          <td width="50%">Hamburger</td>
          <td> - R$ 59,00</td>
          <td>Alimentação</td>
          <td>20/09/2023</td>
        </tr>
      </tbody>
      </TransactionsTable>
     </TransactionsContainer>
     
    </div>
 
  )
}