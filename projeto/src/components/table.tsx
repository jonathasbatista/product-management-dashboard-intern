import '../index.css'
import type { IProduct } from '../interfaces/iproduct';

interface TableProps {
    products: IProduct[];
    edit: (product:IProduct) => void;
    onDelete: (id:number) => void;
}

const Table = ({products,edit, onDelete}: TableProps) => {
  
  return (
    <div className='overflow-x-auto shadow-lg rounded-xl border border-gray-200'>
      <table className='min-w-full divide-y divide-gray-200 text-gray-800'>
        <thead className='bg-yellow-400 border-b border-yellow-400'>
          <tr>
              <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-gray-700'>Nome</th>
              <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-gray-700'>Categoria</th>
              <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-gray-700'>Preço</th>
              <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-gray-700'>Estoque</th>
              <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-gray-700'>Ações</th>
          </tr>
        </thead>

        <tbody className='bg-white divide-y divide-gray-200'>
          {products.map((product) => (
            <tr key={product.id}>
              <td className='bg-white divide-y divide-gray-200 text-center'>{product.title}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center'>{product.category}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold text-center'>R$ {product.price}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center'>{product.stock}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 text-center'>
                <button onClick={() => edit(product)} className='text-blue-600 hover:text-blue-900 transition duration-150 ease-in-out border border-blue-600 hover:border-blue-900 py-1 px-3 rounded-md'>Editar</button>
                <button onClick={() => onDelete(product.id)} className='text-red-600 hover:text-red-900 transition duration-150 ease-in-out border border-red-600 hover:border-red-900 py-1 px-3 rounded-md'>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table