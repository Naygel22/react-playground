import React, { useState, useEffect } from 'react';

const POSTS_PER_PAGE = 4;

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export function Posts() {
    const [data, setData] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const totalPages = data ? Math.ceil(data.length / POSTS_PER_PAGE) : 0;


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
            })
            .catch((error) => console.error(error));
    }, []);

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
                {data !== null ? (
                    data.slice(startIndex, endIndex).map((el) => (
                        <div className='post' key={el.id}>
                            <h2 className='postTitle'>{el.title}</h2>
                            <p>{el.body}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <button onClick={handlePreviousPage}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
        </>
    );
}
