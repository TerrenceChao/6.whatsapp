messaging tables (shard by thread_id)
  table: chatroom (PK: thread_id)
    thread_id/name/ct

  table: message (PK: message_id)
    message_id/thread_id/recipient_id???/sender_id/ts/type/content

  table: be_blocked (PK: thread_id, user_id)
    thread_id/user_id/ts

presence tables (shard by user_id)
  table: account (PK: user_id)

  table: auth (PK: user_id)

  table: friend (PK: user_id, friend_id)
    user_id/friend_id/friend_name/json(...)

  table: presence (PK: user_id, thread_id)
    user_id/thread_id/ts



  
