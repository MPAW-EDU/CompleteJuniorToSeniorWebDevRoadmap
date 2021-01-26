
## Encryption Overview
1. Symmetrical Encryption:
    - Uses one secret each for both encryption and decryption. 
    - This is what SSH uses.
    - Uses a key-exchange-algorithm to exchange securely.
        - No key is directly transmitted, instead both endpoints share
            public data and manipulate it to generate the secure key.
        - The key is specific to each individual session.

2. Asymmetrical Encryption:
    - Uses two different keys, one for encryption and another for decryption.
        - The keys are referred to as "Public Keys" and "Private Keys",
            together they form a Public-Private keypair.
    - Uses Difiie Hellman Key Exhange to exchange public keys.
        - Uses parts of the local private key in conjunction with
            part of the foreign key to encrypt.