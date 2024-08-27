import React, { useEffect, useState } from 'react';

const ConfirmAccount = () => {
    const [status, setStatus] = useState<string>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const confirmAccount = async (token: string) => {
            try {
                const response = await fetch(import.meta.env.PUBLIC_SERVER_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ token }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const res = await response.json();
                setStatus(res.message);
            } catch (err) {
                setError('Error al confirmar la cuenta');
            }
        };

        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get('token');
        if (token) {
            confirmAccount(token);
        } else {
            setError('Token no encontrado');
        }
    }, []);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className='flex flex-col gap-2'>
                <h1 className='text-center'>Confirmación de cuenta</h1>
                {status && <div><p>{status}</p></div>}
                {error && <div><p>{error}</p></div>}
            </div>
        </div>
    );
};

export default ConfirmAccount;
