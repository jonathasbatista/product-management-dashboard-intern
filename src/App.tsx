import { useEffect, useState } from 'react'
import Table from './components/table'
import Card from './components/card';
import Form from './components/forms'
import type { IProduct } from './interfaces/iproduct';
import { fetchAllProducts, createProduct, updateProduct, deleteProduct } from './services/productService';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<IProduct|null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try{
        const data = await fetchAllProducts();
        setProducts(data);
      } catch(error){
        console.error(error);
      }
    }
    loadProducts();
  }, [])

  const totalStockValue = products.reduce((total, currentProduct) => {
    return total + (currentProduct.price * currentProduct.stock);
  }, 0);

  const totalPriceSum = products.reduce((total, currentProduct) => {
    return total + currentProduct.price;
  }, 0);

  const totalAvaragePrice = totalPriceSum / products.length;
  
  const allCategoriesList = products.map(product => product.category);
  const uniqueCategories = new Set(allCategoriesList);
  const totalCategories = uniqueCategories.size;

  const handleSaveProduct = async (dataForm:Omit<IProduct, 'id' | 'thumbnail'>) => {
    try{
      const newProduct = await createProduct(dataForm);
      setProducts([...products, newProduct]);
      setIsOpen(false);
      setEditingProduct(null);
    } catch(error){
      console.error("Erro ao salvar produto:", error);
    }
  }

  const handleEditClick = (productToEdit: IProduct) => {
    setEditingProduct(productToEdit);
    setIsOpen(true);
  }

  const handleUpdateProduct = async (id: number, data: Omit<IProduct, 'id' | 'thumbnail'>) => {
    try {
      const updatedProduct = await updateProduct(id, data);
      const updatedProductsList = products.map(product => {
        if (product.id === id) {
          return updatedProduct;
        }
        return product;
      });
      setProducts(updatedProductsList);
      setIsOpen(false);
      setEditingProduct(null);
    } catch (error) {
      console.error(`Erro ao atualizar o produto ${id}:`, error);
    }
  }

  const handleDeleteProduct = async (idToDelete: number) => {
  const isConfirmed = window.confirm('Tem certeza que deseja excluir este produto?');
    if (isConfirmed) {
      try {
        await deleteProduct(idToDelete);
        const updatedProductsList = products.filter(product => 
          product.id !== idToDelete
        );
        setProducts(updatedProductsList);
      } catch (error) {
        console.error('Erro ao deletar o produto:', error);
      }
    }
  };

  return (
    <>
      <div className='min-h-screen bg-gray-50 p-8'>
        <div className='max-w-7xl mx-auto bg-white rounded-[3rem] shadow-2xl p-8 lg:p-12'>
          <h2 className='text-4xl font-extrabold text-yellow-500 mb-10 text-center'>Dashboard de Produtos</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
            <Card title='Valor Total do Estoque' value={totalStockValue} />
            <Card title='Preço Médio' value={totalAvaragePrice} />
            <Card title='Total de Categorias' value={totalCategories} />
          </div>

          <div className='mb-10'>
            <div className='mb-6 flex justify-end'>
              <button onClick={() => setIsOpen(true)} className='bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-md transition duration-300'>Adicionar Produto</button>
            </div>
            <Table products={products} edit={handleEditClick} onDelete={handleDeleteProduct} />
          </div>

          <div>
            {isOpen && <Form onClose={() => {setIsOpen(false); setEditingProduct(null);}} onSave={handleSaveProduct} productToEdit={editingProduct} onUpdate={handleUpdateProduct} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
