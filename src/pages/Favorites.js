import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
    const userFavoritesCtx = useContext(FavoritesContext);
    return (
        <section>
            <h1>My favorites</h1>
            <MeetupList meetups={userFavoritesCtx.favorites}></MeetupList>
        </section>
    )
}

export default FavoritesPage;