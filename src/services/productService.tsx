import type { IProduct } from "../interfaces/iproduct"; 

const API_URL = 'https://dummyjson.com/products';

export const fetchAllProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(API_URL);
  if (response.status === 200){
    const data = await response.json();
    return data.products;
  } else{
    throw new Error('Falha ao buscar os produtos');
  }
}

export const createProduct = async (productData: Omit<IProduct, 'id' | 'thumbnail'>): Promise<IProduct> => {
  const response = await fetch(`${API_URL}/add`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(productData)
  });
  if(response.status === 200){
    return await response.json();
  } else {
    throw new Error('Falha ao criar o produto');
  }
}

export const updateProduct = async (id: number, productData: Omit<IProduct, 'id' | 'thumbnail'>): Promise<IProduct> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify(productData)
  });
  if (response.status === 200) {
      return await response.json(); 
  } else {
    throw new Error('Falha ao atualizar o produto');
  }
}

export const deleteProduct = async (id: number): Promise<IProduct> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (response.status === 200) {
      return await response.json(); 
  } else {
    throw new Error('Falha ao deletar o produto');
  }
}