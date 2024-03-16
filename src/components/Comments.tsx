interface Comment {
  username: string;
  comment: string;
  subComments?: Comment[];
}

interface CommentsProps {
  data: Comment[];
}

export function Comments({data}: CommentsProps) {
  return (
    <div>
      {data.map((parent: Comment, index: number) => {
        return (
          <div key={index} style={{ paddingLeft: "20px", marginTop: "30px" }}>
            <div style={{border: "1px solid black", display: "flex", flexDirection: "column"}}>
              <span>{parent.username}</span>
              <span>{parent.comment}</span>
            </div>
            

            <div>
              {parent.subComments && <Comments data={parent.subComments} />}
            </div>
          </div>
          
        )
      })}
    </div>
  );
}