import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner
          name="Natchanon Nantasri 640612086"
          content="Quiz นี้ตึงๆเด้งๆจังเลยครับ #261207"
          like="99"
          userImagePath="/profileImages/IMG_0137.jpg"
        />
        {comments.map((code) => {
          return (
            <Comment
              username={code.username}
              userImagePath={code.userImagePath}
              commentText={code.commentText}
              likeNum={code.likeNum}
              replies={code.replies}
            />
          );
        })}
      </div>
    </div>
  );
}
