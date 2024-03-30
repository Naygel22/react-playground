import { useState} from 'react';
import { useAPI } from "../hooks/useAPI";

const POSTS_PER_PAGE = 4;

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export function Posts() {
    const {data, isLoading, isError} = useAPI<Post[]>("https://jsonplaceholder.typicode.com/posts");
    const [currentPage, setCurrentPage] = useState(1);
    
    if(isLoading){
        return <p>Loading...</p>
    }
    if(!data){
        return <p>No posts</p>
    }
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const totalPages = data ? Math.ceil(data.length / POSTS_PER_PAGE) : 0;

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <div>
                {
                    data.slice(startIndex, endIndex).map((el) => (
                        <div className='post' key={el.id}>
                            <h2 className='postTitle'>{el.title}</h2>
                            <p>{el.body}</p>
                        </div>
                    ))
                }
            </div>

            <button onClick={handlePreviousPage}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
        </>
    );
}
