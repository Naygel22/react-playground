import React, { useState, useEffect } from 'react';

export function Posts() {
    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 4;

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

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
        const totalPages = Math.ceil(data.length / postsPerPage);
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
