FROM nginx:1.14-alpine
COPY . /usr/share/nginx/html/
COPY env/prod/*.png /usr/share/nginx/html/resources/img/
RUN sed -i 's/${env}/prod/' /usr/share/nginx/html/index.html