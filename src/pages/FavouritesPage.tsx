import * as React from 'react';
import { useAppSelector } from '../hooks/redux';

export function FavouritesPage() {
    const {favourites} = useAppSelector(state => state.github)

    if (favourites.length === 0) return <p className="text-center">No Items.</p>

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen" >
            <ul className="list-none">
                { favourites.map(f => (
                    <li key={f} className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer">
                        <a href={f} target="_blank">{f}</a>
                    </li>
                     )) 
                }
            </ul>
        </div>

    )
}