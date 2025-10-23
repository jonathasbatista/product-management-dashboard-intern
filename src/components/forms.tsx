import '../index.css'
import { useState, useEffect } from 'react'
import type { IProduct } from '../interfaces/iproduct';

interface FormProp {
    onClose: () => void;
    onSave: (data : Omit<IProduct, 'id' | 'thumbnail'>) => void;
    productToEdit: IProduct | null;
    onUpdate: (id: number, data: Omit<IProduct, 'id' | 'thumbnail'>) => void;
}

const Form = ({onClose, onSave, productToEdit, onUpdate} : FormProp) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    useEffect(() => {
        if (productToEdit) {
            setTitle(productToEdit.title);
            setCategory(productToEdit.category);
            setPrice(String(productToEdit.price)); 
            setStock(String(productToEdit.stock)); 
        }
    }, [productToEdit]);

    const submit = (event: React.FormEvent) => {
        event.preventDefault();

        const data = {
            title: title,
            category: category,
            price: Number(price),
            stock: Number(stock)
        };
        if(productToEdit){
            onUpdate(productToEdit.id, data);
        }else{
            onSave(data);
        }
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4'>
            <div className='bg-white p-6 rounded-xl shadow-2xl w-full max-w-md'>
                <div className='flex justify-between items-center border-b border-gray-200 pb-3 mb-6'>
                    <h3 className='text-2xl font-semibold text-gray-800'>Produto</h3>      
                    <button onClick={onClose} className='text-gray-500 hover:text-red-600 transition duration-150 text-3xl font-light leading-none'>Fechar</button>

                    <form onSubmit={submit} className='space-y-4'>
                        <input type='text' placeholder='Título' value={title} onChange={(event) => setTitle(event.target.value)} className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-150' />
                        <input type='text' placeholder='Categoria' value={category} onChange={(event) => setCategory(event.target.value)} className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-150' />
                        <input type='number' placeholder='Preço' value={price} onChange={(event) => setPrice(event.target.value)} className='w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-150' />
                        <input type='number' placeholder='Estoque' value={stock} onChange={(event) => setStock(event.target.value)} className='w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-150' />
                        <button type='submit' className='w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 rounded-lg shadow-md transition duration-300 ease-in-out'>Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
} 

export default Form