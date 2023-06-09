import Content from '../components/Content'
import { useContext } from 'react'
import UserContext from '../../../contexts/UserContext'

export default function Fornecedor() {
    const { userName } = useContext(UserContext)
    return (
        <Content>
            <h2>Lista de fornecedor</h2>
        </Content >
    );
}