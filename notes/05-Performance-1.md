
# Performance Part 1

## Three Keys to Performance

1. Improve the Client Side, the Front End
    - Critical Render Path
    - Optimizing Code
    - Progressive Web App

2. The time for data transfer, network latency
    - Minimize Files
    - Minimize Delivery

3. Improve the backend processing
    - CDNs
    - Caching
    - Load Balancing
    - DB Scaling
    - GZIP

# -----------------

2. Network Performance:
    - Minimize Text in your code, esp. by removing white spaces,
        it reduces the file size and load times.
        - You can use WebPack to do this.

    - Minimize Images to fit the display size, 
        smaller screen = smaller images,
        also image formats play a huge role.
        - Choose simple illustrations over a high detail photo.
        - Image Compression Techniques:
            1. JPEG-optimizer(-30-60%), match disp. size
            2. TinyPNG
            3. use CDNs like imigx
            4. remove image metadata,
                - www.verexif.com/en/index.php

    