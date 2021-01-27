
## Hashing to make encrytpted transfers unreadable and umodifyable.

 - Each message contains a map or the data, key, packet sequence number.

 - The data can be verified by checking the password hash.

 

## RSA, for SSH Login

- ssh-keygen -C  "email@email.com"

- Generate a public/private RSA keypair

- .pub can be shared, other/private should never be

- Created the keypair and sharing the public key with a host will
    allow you to login without using a password.

- Identity must be added to your SSH manager.

- Command: ssh-keygen -t rsa -b 4096

### SSH keys are generated and stored in ~/.ssh
### which is a hidden file


