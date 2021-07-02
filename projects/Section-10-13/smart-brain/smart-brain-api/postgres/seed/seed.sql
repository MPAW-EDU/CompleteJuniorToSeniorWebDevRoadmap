BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values ('Aaron', 'Aaron@gmail.com', 5, '2019-12-4');
INSERT into login (email, hash) values ('Aaron@gmail.com', '$2a$10$CDnUmAY5auw7Lcqsxq61LuIlhxc9krxUbg5QtYAv248JUlkG5CJqW');

COMMIT;