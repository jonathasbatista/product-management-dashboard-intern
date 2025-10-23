import '../index.css'

interface CardProps {
    title: string;
    value: number;
}

const Card = ({title, value} : CardProps) => {
    let formattedValue: string;

    if (title === 'Total de Categorias') {
        formattedValue = Math.round(value).toLocaleString('pt-BR');
    
    } else if (value >= 1000) {
        formattedValue = value.toLocaleString('pt-BR', { 
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    } else {
        formattedValue = value.toFixed(2).replace('.', ',');
    }

    return(
      <div className='bg-yellow-500 rounded-3xl shadow-xl p-6 text-white transition duration-300 ease-in-out transform hover:scale-[1.02] flex flex-col'>
        <div className=' text-center items-start mb-2'>
          <h2 className='text-base font-bold leading-tight'>{title}</h2>
        </div>
        <p className='text-5xl font-extrabold mb-1 text-center'>{formattedValue}</p>
      </div>  
    );
}

export default Card