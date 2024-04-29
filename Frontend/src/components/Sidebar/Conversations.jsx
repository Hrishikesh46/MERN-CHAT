import Conversation from "./Conversation";
import useGetConversations from "../../Hooks/useGetConversations";

import { getRandomEmoji } from "../../Utils/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("conversations:", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations &&
        conversations.map((conversation, idx) => {
          return (
            <Conversation
              key={conversation._id}
              conversation={conversation}
              emoji={getRandomEmoji()}
              lastIdx={idx === conversation.length - 1}
            />
          );
        })}

      {loading ? (
        <span className="py-2 flex flex-col overflow-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;

// STARTER CODE
// const Conversations = () => {
//     return (
//       <div className="py-2 flex flex-col overflow-auto">
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//       </div>
//     );
//   };
