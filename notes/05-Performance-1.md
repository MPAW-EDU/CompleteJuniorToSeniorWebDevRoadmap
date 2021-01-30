
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

1. Critical Render Path
    - DOM -> CSSOM -> Render Tree -> Layout -> Paint
    - Improving each step:
        1. Load all HTMl first.
        2. Load CSS as soon as possible.
        3. Load scripts as late as possible, it slows things down and can block rendering.
        4. CSS Render Blocking, the size of the CSS affects the load speed. Make them lightweight
            if possible.

2. Network Performance:
    - Minimize Text in your code, esp. by removing white spaces,
        it reduces the file size and load times.
        - You can use WebPack to do this.
        - Use [ window.onload = () => {} ] to generate files or style sheets
            and it shouble help to optimize the loading.
            - <script tpye="text/javascript">
                const loadStyleSheet = src = > {
                    if(document.createStyleSheet) {
                        document.createStyleSheet()
                    } else {
                        const stylesheet = document.createElement('link');
                        stylesheet.href = src;
                        stylesheet.type = 'text/css';
                        stylesheet.rel = '_stylesheet';
                        document.getElementsByTagNames('head)[0].appendChild(stylesheet)
                    }
                } 

                window.onload = function() {
                    console.log('window done!');
                    loadStyleSheet('./style2.css)
                }

              </script>

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

    