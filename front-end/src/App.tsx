import { useState, useEffect } from 'react'

type Group = {
    id: number,
    label: string;
    notation: string;
};

type ApiResponse = {
    "hydra:member": Group[]
}

function App() {
    const [data, setData] = useState<ApiResponse | null>(null);
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:8000/groups?page=1', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/ld+json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                // setError("Une erreur est survenu ");
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
            {data && data['hydra:member'].map(group => {
                return <h1>{group.label} - {group.id}</h1>
            })}
        </div>
    )
}

export default App
