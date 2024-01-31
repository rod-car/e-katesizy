import { useState } from "react";
import { toast } from 'react-toastify';

const baseUrl = 'https://localhost:8000'

export function useFetch<T> (url: string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [creating, setCreating] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<boolean>(false)

    type ApiResponse = {
        "hydra:member": T
    }

    type FetchParams = {
        page: number
    }

    /**
     * @param {FetchParams} params
     */
    const get = (params: FetchParams = {page: 1}) => {
        setLoading(true)
        setError(null)
        fetch(`${baseUrl + url}?page=${params.page}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/ld+json'
            }
        })
            .then(response => {
                if (response.ok) {
                    setError(null)
                    return response.json() as Promise<ApiResponse>
                }
                throw new Error(response.statusText)
            })
            .then(data => setData(data["hydra:member"]))
            .catch(e => {
                if (e as unknown instanceof TypeError) setError(e.message)
            })
            .finally(() => setLoading(false))
    }


    /**
     * @param {FormData} data
     */
    const post = async (data: FormData) => {
        setCreating(true)

        fetch(`${baseUrl + url}`, {
            method: 'POST',
            body: JSON.stringify({
                label: data.get('label'),
                notation: data.get('notation'),
                description: data.get('description')
            }),
            headers: {
                'Content-type': 'application/ld+json',
                'Accept': 'application/ld+json'
            }
        })
            .then(response => {
                if (response.status === 201) {
                    setError(null)
                    return response.json()
                }
                throw new Error(response.statusText)
            })
            .then(data => {
                setSuccess(true)
                toast.success("Created ID: " + data.id)
            })
            .catch(e => {
                if (e as unknown instanceof TypeError) setError(e.message)
            })
            .finally(() => setCreating(false))
    }

    const put = () => {
        
    }

    const patch = () => {

    }

    const remove = () => {
        
    }

    return {
        data,
        error,
        success,
        loading,
        delete: remove,
        get: get,
        creating: creating,
        post: post,
        patch: patch,
        put: put
    }
}